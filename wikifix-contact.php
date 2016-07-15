<?php

$EmailFrom = "The WikiFix";
$EmailTo = "thewikifix@gmail.com";
$Subject = "Fact submission";
$Name = Trim(stripslashes($_POST['Name'])); 
$Source = Trim(stripslashes($_POST['Source'])); 
$Source2 = Trim(stripslashes($_POST['Source2'])); 
$Source3 = Trim(stripslashes($_POST['Source3'])); 
$Source4 = Trim(stripslashes($_POST['Source4'])); 
$Source5 = Trim(stripslashes($_POST['Source5'])); 
$Source6 = Trim(stripslashes($_POST['Source6'])); 
$Source7 = Trim(stripslashes($_POST['Source7'])); 
$Source8 = Trim(stripslashes($_POST['Source8'])); 
$Source9 = Trim(stripslashes($_POST['Source9'])); 
$Fact = Trim(stripslashes($_POST['Fact'])); 
$Topic = Trim(stripslashes($_POST['Topic'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Source: ";
$Body .= $Source;
$Body .= "\n";
$Body .= "Fact: ";
$Body .= $Fact;
$Body .= "\n";
$Body .= "Topic: ";
$Body .= $Topic;
$Body .= "\n";
$Body .= "\n";
$Body .= "For Javascript:";
$Body .= "\n";
$Body .= $Topic;
$Body .= "FactsList[#]=\"";
$Body .= $Fact;
$Body .= "\" + (source('1','";
$Body .= $Source;
$Body .= "'));";
$Body .= "\n";
$Body .= "\n";
$Body .= "Additional sources:";
$Body .= "\n";
$Body .= " + (source('2','";
$Body .= $Source2;
$Body .= "'));";
$Body .= "\n";
$Body .= " + (source('3','";
$Body .= $Source3;
$Body .= "'));";
$Body .= "\n";
$Body .= " + (source('4','";
$Body .= $Source4;
$Body .= "'));";
$Body .= "\n";
$Body .= " + (source('5','";
$Body .= $Source5;
$Body .= "'));";
$Body .= "\n";
$Body .= " + (source('6','";
$Body .= $Source6;
$Body .= "'));";
$Body .= "\n";
$Body .= " + (source('7','";
$Body .= $Source7;
$Body .= "'));";
$Body .= "\n";
$Body .= " + (source('8','";
$Body .= $Source8;
$Body .= "'));";
$Body .= "\n";
$Body .= " + (source('9','";
$Body .= $Source9;
$Body .= "'));";
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=wikifix-thanks.php#submitfact\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>
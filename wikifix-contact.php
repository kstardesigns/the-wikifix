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
$Body .= "For OneNote:";
$Body .= "\n";
$Body .= $Fact;
$Body .= " -- ";
$Body .= $Source;
$Body .= "\n";
$Body .= "\n";
$Body .= "For Javascript:";
$Body .= "\n";
$Body .= $Topic;
$Body .= "FactsList[#]=\"";
$Body .= $Fact;
$Body .= "<sup><a href='";
$Body .= $Source;
$Body .= "' target='_blank'>[1]</a></sup>\";";
$Body .= "\n";
$Body .= "\n";
$Body .= "Additional sources:";
$Body .= "\n";
$Body .= "<a href='";
$Body .= $Source2;
$Body .= "' target='_blank'>[2]</a></sup>\";";
$Body .= "\n";
$Body .= "<a href='";
$Body .= $Source3;
$Body .= "' target='_blank'>[3]</a></sup>\";";
$Body .= "\n";
$Body .= "<a href='";
$Body .= $Source4;
$Body .= "' target='_blank'>[4]</a></sup>\";";
$Body .= "\n";
$Body .= "<a href='";
$Body .= $Source5;
$Body .= "' target='_blank'>[5]</a></sup>\";";
$Body .= "\n";
$Body .= "<a href='";
$Body .= $Source6;
$Body .= "' target='_blank'>[6]</a></sup>\";";
$Body .= "\n";
$Body .= "<a href='";
$Body .= $Source7;
$Body .= "' target='_blank'>[7]</a></sup>\";";
$Body .= "\n";
$Body .= "<a href='";
$Body .= $Source8;
$Body .= "' target='_blank'>[8]</a></sup>\";";
$Body .= "\n";
$Body .= "<a href='";
$Body .= $Source9;
$Body .= "' target='_blank'>[9]</a></sup>\";";
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
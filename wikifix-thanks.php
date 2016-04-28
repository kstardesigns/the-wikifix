<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="assets/icons/favicon.png">
    <link rel="apple-touch-icon" href="assets/icons/apple-touch-icon-iphone-60x60.png">
    <!-- Need new icons
    <link rel="apple-touch-icon" sizes="60x60" href="docs/assets/ico/apple-touch-icon-ipad-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="docs/assets/ico/apple-touch-icon-iphone-retina-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="docs/assets/ico/apple-touch-icon-ipad-retina-152x152.png">
    -->
    <title>The WikiFix</title>
    <link href="css/main.css" rel="stylesheet">
</head>

<body>

<div class="content">

    <div class="header">
        <a href="index.html" title="The WikiFix Home"><img src="assets/logo.png" class="logo" alt="The WikiFix" /></a>
        <div class="links">
            <a href="http://donate.wikimedia.org" title="Donate to Wikipedia" target="_blank"><img class="wikipedia" src="assets/wikipedia.png" alt="Donate to Wikipedia"></a>
            <a href="http://wikiwand.com/" title="Download Wikiwand" target="_blank"><img class="wikiwand" src="assets/wikiwand.png" alt="Download Wikiwand"></a>
        </div>
    </div>

    <section class="left">

        <div class="fact box">
            <p class="main"><span class="tmi"><strong>The WikiFix</strong> (/ˌ ðə wɪkɨˈfɪx/ or /ˌ ðə wɪkiˈfɪx/) is a random fact-generating web site consisting of information taken from the free content Internet encyclopedia, <a href="http://en.wikipedia.org/" title="Wikipedia" target="_blank">Wikipedia</a>.<sup><a href="#ref1">[1]</a></sup> </span>Click the button below to generate a random fact from Wikipedia.<span class="tmi"><sup><a href="#ref2">[2]</a></sup> Use the filters below to get more specific facts. Donate to Wikipedia<sup><a href="#ref3">[3]</a></sup> and check out Wikiwand at the top of the page.</span></p>
            <div id="button" onclick="giveafact()">
                <a href="javascript:void(0);"><h1>Click!</h1></a>
            </div>
                <div class="populatedfact">
                    <p id="fact">Click the button to get a fact!</p>
                </div>
                <div class="sharingsection">
                    <p class="sharing"><a id="shareLinkTwitter" href="#" target="_blank">Tweet this fact</a></p>
                </div>
            <div class="filterbuttons">
                <ul>
                    <li>Filter by:</li><span class="break"><br/></span>
                    <li id="listfood" onclick="changeToFood()"><a href="javascript:void(0);">Food &amp; Drink</a></li>
                    <li id="listhistory" onclick="changeToHistory()"><a href="javascript:void(0);">History</a></li>
                    <li id="listmusic" onclick="changeToMusic()"><a href="javascript:void(0);">Music</a></li>
                    <li id="listpopculture" onclick="changeToPop()"><a href="javascript:void(0);">Pop Culture</a></li>
                    <li id="listsports" onclick="changeToSports()"><a href="javascript:void(0);">Sports</a></li>
                    <li id="listtechnology" onclick="changeToTechnology()"><a href="javascript:void(0);">Technology</a></li>
                    <li id="listtelevision" onclick="changeToTelevision()"><a href="javascript:void(0);">TV &amp; Film</a></li>
                    <li id="listmisc" onclick="changeToMisc()"><a href="javascript:void(0);">Misc.</a></li>
                    <li id="resetbutton" onclick="changeToUnfiltered()"><a href="javascript:void(0);"><strong>&times;</a></strong></li>
                </ul>
            </div>
            <div class="c"></div>
        </div>

        <div class="references box">
            <h1>References</h1>
            <ol>
             <li id="ref1">This website uses material from <a href="http://en.wikipedia.org/" target="_blank">Wikipedia</a>, which is released under the <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-ShareAlike 3.0" target="_blank">Creative Commons</a>. </li>
             <li id="ref2">Some information referenced on this site may not necessarily be factual.</li>
             <li id="ref3">This site is for entertainment purposes only. It is in no affiliation with Wikipedia.</li>
             </ol>
        </div>
        <div id="submitfact" class="submitform box">
            <p><strong>Thanks for submitting a fact!</strong> Feel free to submit another fact below.</p>
            <div class="form">
                <form method="post" action="wikifix-contact.php">

                        <label for="Topic">Topic</label><br/>
                            <p class="dropdown">
                                <select name="Topic" id="Topic">
                                    <option value="" selected="selected">Select a topic</option>
                                    <option value="food">Food &amp; Drink</option>
                                    <option value="history">History</option>
                                    <option value="music">Music</option>
                                    <option value="pop">Pop Culture</option>
                                    <option value="sports">Sports</option>
                                    <option value="technology">Technology</option>
                                    <option value="television">TV/Film</option>
                                    <option value="misc">Misc</option>
                                    <option value="other">Other</option>
                                </select>
                            </p>

                        <label for="Fact">Fact</label><br/>
                        <textarea name="Fact" id="Fact" required></textarea><br/>
<div id="sourcearea">
                        <label for="Source">Source <span class="break"><br/></span>(Wikipedia URL)</label><br/>
                        <input type="text" name="Source" id="Source"/>
                        <input type='button' id='addSource' value='&#43;'><br/></div>

                        <label for="Name">Name</label><br/>
                        <input type="text" name="Name" id="Name" /><br/>

                        <p><input type="submit" name="submit" value="Submit" class="submit-button" /></p>
                    </form>
            </div>
        </div>

    
    </section>

    <section class="right">

        <div class="submitfact box">
            <div class="submitfacttext">
                <h1>Submit a fact</h1>
                <p>Want to contribute to the The WikiFix? <a href="#submitfact" title="Submit a fact">Submit a fact.</a></p>
            </div>
            <div class="placeholder">
            </div>
        </div>

        <div class="stats box">
            <div class="statstext">
                <!--<div class="chart">
                <span class="hidden"></span> <span class="red"></span> <span class="green"></span> <span class="yellow"> </span> <span class="blue"></span>
                </div>-->
                <h1>Stats</h1>
                <ul>
                    <li>There are currently <strong id="total">0</strong> facts on The WikiFix.</li>
                    <li>Of those facts, <strong id="usertotal">0</strong> were submitted by users with the <a href="#submitfact" title="Submit a fact">Submit a fact</a> form.</li>
                    <li>There are <strong id="pictotal">0</strong> facts with pop-up pictures accompanying them.</li>
                    <li>The most facts that come from the same Wikipedia page is <strong id="mosttotal">0</strong>, which come from the <a href="http://en.wikipedia.org/wiki/Hollywood_Walk_of_Fame" target="_blank">Hollywood Walk of Fame</a> page.</li>
                    <!--
                    <li>There are <strong id="foodtotal">0</strong> Food &amp; Drink facts.</li>
                    <li>There are <strong id="historytotal">0</strong> History facts.</li>
                    <li>There are <strong id="musictotal">0</strong> Music facts.</li>
                    <li>There are <strong id="poptotal">0</strong> Pop Culture facts.</li>
                    <li>There are <strong id="sportstotal">0</strong> Sports facts.</li>
                    <li>There are <strong id="techtotal">0</strong> Tech facts.</li>
                    <li>There are <strong id="televisiontotal">0</strong> TV &amp; Film facts.</li>
                    -->
                    
                    <li>The site was launched on June 21, 2014, so about <strong id="weeklytotal">0</strong> facts have been added daily.</li>
                    <li>For various unimportant reasons, there is also <strong id="retiredtotal">0</strong> retired fact.</li>
                    </ul>
                    <div class="bargraph">
                    <h3>Fact Count:</h3>
                      <dl>
                        <dt>Food &amp; Drink</dt><dd id="fooddrinksbar"><span id="foodtotal"></span></dd>
                        <dt>History</dt><dd id="historybar"><span id="historytotal"></span></dd>
                        <dt>Music</dt><dd id="musicbar"><span id="musictotal"></span></dd>
                        <dt>Pop Culture</dt><dd id="popbar"><span id="poptotal"></span></dd>
                        <dt>Sports</dt><dd id="sportsbar"><span id="sportstotal"></span></dd>
                        <dt>Technology</dt> <dd id="techbar"><span id="techtotal"></span></dd>
                        <dt>TV &amp; Film</dt><dd id="tvfilmbar"><span id="televisiontotal"></span></dd>
                      </dl>
                    </div>


            </div>
            
        </div>

         <div class="notes box">
            <div class="notestext">
                <h1>Notes</h1>
                <ul>
                    <li>Some facts are taken from the now-defunct WikiFix Twitter account, <a href="http://twitter.com/quickwiki" target="_blank" title="QuickWiki Twitter">quickwiki</a>.</li>
                    <li>This is v2.0 of The WikiFix, to check out v1.0 <a href="v1/index.html" target="_blank">click here</a>.</li>
                    <li>Created by <a href="http://twitter.com/kstardesigns" target="_blank" title="kstardesigns Twitter">kstardesigns</a>.</li>
                    <li>&copy; The WikiFix 2010-2016.</li>
                </ul>
            </div>
        </div>

    </section>

    <div class="kstar"></div>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="js/scripts.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-54559972-1', 'auto');
  ga('send', 'pageview');

</script>
</body>


</html>
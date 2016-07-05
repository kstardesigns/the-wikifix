/*  --          Table of Contents          --  */ 

/*

I. Filter buttons
II. Fact lists
	a. Filtered fact lists
		i. Food list
		ii. History list
		iii. Music list
		iv. Pop Culture list
		v. Sports list
		vi. Technology list
		vii. TV/Film list
	b. User-submitted facts list
	c. Most used Wiki page list 
	d. Pictures facts list
	e. Retired facts list
	f. Featured facts list
III. Functions
	a. giveafact - randomFact, randomFeaturedFact on page load
	b. giveafactbutton - randomFact on button click
	c. updateShareLinks - update Twitter link w/fact
	d. Generate unfiltered facts
		i. giveafoodfact, etc.
IV. Stats section
	a. Input sentence stats
	b. Build the chart
	c. Calculate weekly stat count
V. Recently added facts section

*/


/*  --          Filter buttons          --  */

function changeToFood() {
	$('#button').attr("onClick","giveafoodfact()");
	$('#listfood a').addClass("activefilter");
	$('.filterbuttons a').not('#listfood a').removeClass("activefilter");	
	$('#resetbutton').css('display','inline-block');
	updateShareLinks();
	giveafoodfact();	
}

function changeToHistory() {
	$('#button').attr("onClick","giveahistoryfact()");
	$('#listhistory a').addClass("activefilter");
	$('.filterbuttons a').not('#listhistory a').removeClass("activefilter");
	$('#resetbutton').css('display','inline-block');
	updateShareLinks();
	giveahistoryfact();
}

function changeToMusic() {
	$('#button').attr("onClick","giveamusicfact()");
	$('#listmusic a').addClass("activefilter");
	$('.filterbuttons a').not('#listmusic a').removeClass("activefilter");
	$('#resetbutton').css('display','inline-block');
	updateShareLinks();
	giveamusicfact();
}

function changeToPop() {
	$('#button').attr("onClick","giveapopculturefact()");
	$('#listpopculture a').addClass("activefilter");
	$('.filterbuttons a').not('#listpopculture a').removeClass("activefilter");
	$('#resetbutton').css('display','inline-block');
	updateShareLinks();
	giveapopculturefact();
}

function changeToSports() {
	$('#button').attr("onClick","giveasportsfact()");
	$('#listsports a').addClass("activefilter");
	$('.filterbuttons a').not('#listsports a').removeClass("activefilter");
	$('#resetbutton').css('display','inline-block');
	updateShareLinks();
	giveasportsfact();
}

function changeToTechnology() {
	$('#button').attr("onClick","giveatechnologyfact()");
	$('#listtechnology a').addClass("activefilter");
	$('.filterbuttons a').not('#listtechnology a').removeClass("activefilter");
	$('#resetbutton').css('display','inline-block');
	updateShareLinks();
	giveatechnologyfact();
}

function changeToTelevision() {
	$('#button').attr("onClick","giveatelevisionfact()");
	$('#listtelevision a').addClass("activefilter");
	$('.filterbuttons a').not('#listtelevision a').removeClass("activefilter");
	$('#resetbutton').css('display','inline-block');
	updateShareLinks();
	giveatelevisionfact();
}


function changeToUnfiltered() {
	$('#button').attr("onClick","giveafactbutton()");
	$('.filterbuttons a').not('#resetbutton a').removeClass("activefilter");
	$('#resetbutton').css('display','none');
	updateShareLinks();
	giveafactbutton();
}

document.getElementById('addSource').onclick = function createInputField() {
  var input = document.createElement('input');
  var lineBreak = document.createElement('br');
  var testId = "Source";
  var i = 0;
  var x = document.getElementsByTagName('INPUT').length - 2;
  for (i = 0; i < x; i++) {
    i;
  }
  input.setAttribute('id', testId + i);
  input.type = 'text';
  input.name = 'Source' + i;
  var aplayer1 = document.getElementById('sourcearea');
  aplayer1.appendChild(input);
  aplayer1.appendChild(lineBreak);
}



/*  --          Filtered fact lists          --  */


// function to include an image in a fact
	// example: (includeImage('Arch Deluxe burger', 'archdeluxe.jpg'))

var imageOpen = "<a class='popimg' href='#'>";
var imageMid = "<span><i></i><img src='assets/facts/";
var imageClose = "'/></span></a>";

function includeImage(imageName, imageURL) {
	var incImage = imageOpen + imageName + imageMid + imageURL + imageClose;
	return(incImage);
}



	/*  --          Food list          --  */
var foodFactsList = new Array;
foodFactsList[0]="The first McDonald's Drive-Thru was created in 1975, in Sierra Vista, Arizona, to serve military members who weren't permitted to get out of their cars while wearing fatigues.<sup><a href='http://en.wikipedia.org/wiki/Drive-through' target='_blank'>[1]</a></sup>";
foodFactsList[1]="In Spain and Russia, McDonald's drive-thru services are called <i>McAuto</i>.<sup><a href='http://en.wikipedia.org/wiki/Drive-through' target='_blank'>[1]</a></sup>";
foodFactsList[2]="The name Orange Julius came from its customers waiting in line, who would shout, \"Give me an Orange, Julius!\" Its founder was Julius Freed.<sup><a href='http://en.wikipedia.org/wiki/Orange_Julius' target='_blank'>[1]</a></sup>";
foodFactsList[3]="Orange and Lemon-Lime were the only 2 Gatorade flavors available for their first 20 years, until Fruit Punch was introduced.<sup><a href='http://en.wikipedia.org/wiki/Gatorade' target='_blank'>[1]</a></sup>";
foodFactsList[4]="When they were created in 1941, Cheerios were originally called Cheerioats.<sup><a href='http://en.wikipedia.org/wiki/General_Mills' target='_blank'>[1]</a></sup>";
foodFactsList[5]="In 2008, Doritos beamed a 30-second advertisement into a planetary system 42 light years away, in collaboration with EISCAT Space Center in Norway.<sup><a href='http://en.wikipedia.org/wiki/Doritos' target='_blank'>[1]</a></sup>";
foodFactsList[6]="In 1916, the US Government unsuccessfully tried to get Coca-Cola to remove caffeine from its product in United States v. Forty Barrels and Twenty Kegs of Coca-Cola.<sup><a href='http://en.wikipedia.org/wiki/United_States_v._Forty_Barrels_and_Twenty_Kegs_of_Coca-Cola' target='_blank'>[1]</a></sup>";
foodFactsList[7]="As of June 2012 when it began distribution in Burma, Coca-Cola is officially available in every country in the world besides Cuba and North Korea.<sup><a href='http://en.wikipedia.org/wiki/Coca-Cola' target='_blank'>[1]</a></sup>";
foodFactsList[8]="The drive-in restaurant Sonic was originally named Top Hat.<sup><a href='http://en.wikipedia.org/wiki/Sonic_Drive-In' target='_blank'>[1]</a></sup>";
foodFactsList[9]="A&amp;W's company name was taken from the last name initials of business partners Roy Allen and Frank Wright.<sup><a href='http://en.wikipedia.org/wiki/A%26W_Restaurants' target='_blank'>[1]</a></sup>";
foodFactsList[10]="Dr Pepper was originally known as \"Waco\" because it was first sold in Morrison's Old Corner Drug Store in Waco, Texas in 1885.<sup><a href='http://en.wikipedia.org/wiki/Dr_Pepper' target='_blank'>[1]</a></sup>";
foodFactsList[11]="Kool-Aid is the official soft drink of Nebraska, which has a yearly festival celebrating it in August.<sup><a href='http://en.wikipedia.org/wiki/Kool-Aid' target='_blank'>[1]</a></sup>";
foodFactsList[12]="In 1932, a man named Charles Elmer Doolin purchased a corn chip recipe, a handheld potato ricer, and 19 retail accounts from a corn chip manufacturer for $100, which he borrowed from his mother. Doolin established a new corn chip business making \"Fritos\" in his mother's kitchen. He soon started The Frito Company.<sup><a href='http://en.wikipedia.org/wiki/Frito-Lay' target='_blank'>[1]</a></sup>";
foodFactsList[13]="Varieties of Pringles in Asia have included: soft-shelled crab, grilled shrimp, seaweed, \"blueberry and hazelnut\", and \"lemon and sesame\".<sup><a href='http://en.wikipedia.org/wiki/Pringles' target='_blank'>[1]</a></sup>";
foodFactsList[14]="Fredric Baur, the inventor of the tubular paperboard can that holds Pringles, had his death request honored by his children: to bury him in one of the cans by placing part of his cremated remains in a Pringles container in his grave.<sup><a href='http://en.wikipedia.org/wiki/Pringles' target='_blank'>[1]</a></sup>";
foodFactsList[15]="The snack chip Funyuns are very popular in mass media. Those that have referenced the snack include: the movie <i>Half Baked</i>; musicians Insane Clown Posse and  Eminem; the television shows <i>NCIS</i>, <i>Breaking Bad</i>, <i>Dawson's Creek</i>, <i>How I Met Your Mother</i>, <i>Six Feet Under</i>, <i>Everybody Loves Raymond</i>, <i>American Dad</i>, and <i>The Big Bang Theory</i>, among others.<sup><a href='http://en.wikipedia.org/wiki/Funyuns' target='_blank'>[1]</a></sup>";
foodFactsList[16]="The name of the Kellogg's rooster is Cornelius.<sup><a href='http://en.wikipedia.org/wiki/Kellogg%27s' target='_blank'>[1]</a></sup>";
foodFactsList[17]="From 1950-1954, M&amp;M candies first had a black 'm' on them, instead of white.<sup><a href='http://en.wikipedia.org/wiki/M%26M%27s' target='_blank'>[1]</a></sup>";
foodFactsList[18]="The famous frozen yogurt place's name TCBY stands for two different things: \"The Country's Best Yogurt\" and \"This Can't Be Yogurt.\"<sup><a href='http://en.wikipedia.org/wiki/TCBY' target='_blank'>[1]</a></sup>";
foodFactsList[19]="The Little Caesars pizza chain once filled an order for 13,386 pizzas for the VF Corporation in Greensboro, North Carolina.<sup><a href='http://en.wikipedia.org/wiki/Little_Caesars' target='_blank'>[1]</a></sup>";
foodFactsList[20]="The \"31 flavors\" slogan that Baskin-Robbins is known for was created with the idea in mind that customers could have a different ice cream flavor every day of the month.<sup><a href='http://en.wikipedia.org/wiki/Baskin-Robbins' target='_blank'>[1]</a></sup>";
foodFactsList[21]="Baskin-Robbins has introduced over 1,000 ice cream flavors since 1945.<sup><a href='http://en.wikipedia.org/wiki/Baskin-Robbins' target='_blank'>[1]</a></sup>";
foodFactsList[22]="One of the original owners of Domino's Pizza did not have enough time to devote to the business, as he was a full-time mailman, so he sold his 50% to his brother for the Volkswagen Beetle the company used for deliveries.<sup><a href='http://en.wikipedia.org/wiki/Domino%27s_Pizza' target='_blank'>[1]</a></sup>";
foodFactsList[23]="Although 7 Up's slogan was once \"Never Had It, Never Will\" (referring to caffeine), they did release a soft drink in 1988 called 7 Up Gold, which had caffeine as a listed ingredient.<sup><a href='http://en.wikipedia.org/wiki/7_Up' target='_blank'>[1]</a></sup>";
foodFactsList[24]="Sales for Dietetic Dr Pepper were slow when it was introduced in 1962, due to the public misconception that it was a drink for diabetics. It was then renamed to Sugar Free Dr Pepper in 1966, and eventually Diet Dr Pepper in 1987.<sup><a href='http://en.wikipedia.org/wiki/Dr_Pepper' target='_blank'>[1]</a></sup>";
foodFactsList[25]="It took Morgan Spurlock 14 months to lose the weight he gained after eating only McDonald's for a month for his 2004 documentary film <i>Super Size Me</i>.<sup><a href='http://en.wikipedia.org/wiki/Super_Size_Me' target='_blank'>[1]</a></sup>";
foodFactsList[26]="When Frito Lay introduced compostable Sun Chips bags in 2008, they received numerous complaints about their excessive noise, causing Frito Lay to remake the bags quieter.<sup><a href='http://en.wikipedia.org/wiki/Sun_Chips' target='_blank'>[1]</a></sup>";
foodFactsList[27]="The idea for the candy Ring Pops came from a Topps product engineer, Frank Richards. He created Ring Pops as a way to thwart the bad habit of thumb sucking, which his daughter was prone to doing.<sup><a href='http://en.wikipedia.org/wiki/Ring_Pop' target='_blank'>[1]</a></sup>";
foodFactsList[28]="The original working names for Cocoa Pebbles and Fruity Pebbles were Flint Chips and Rubble Stones, before the creative head suggested the names the cereals have today.<sup><a href='https://en.wikipedia.org/wiki/Pebbles_cereal' target='_blank'>[1]</a></sup>";
foodFactsList[29]="From 1999 to 2000, General Mills released a version of Cheerios called Millenios, which had \"2\"-shaped pieces, to go along with its O's to celebrate the year 2000.<sup><a href='http://en.wikipedia.org/wiki/Cheerios' target='_blank'>[1]</a></sup>";
foodFactsList[30]="In 2001, Taco Bell held a promotion coinciding with the re-entry of the Mir Space Station. A large target was brought out into the Pacific Ocean and they announced that if the target was hit with a falling piece of Mir, every person in the United States would win a free Taco Bell taco. However no piece of station struck the target.<sup><a href='http://en.wikipedia.org/wiki/Taco_Bell' target='_blank'>[1]</a></sup>";
foodFactsList[31]="In an effort to promote its $2 meal deals, Taco Bell started a Facebook group in 2010 to collect signatures for a petition to the Federal Reserve to produce more $2 bills.<sup><a href='https://en.wikipedia.org/wiki/Taco_Bell' target='_blank'>[1]</a></sup>";
foodFactsList[32]="The popular McDonald's jingle \"I'm lovin' it\" was written and performed by Justin Timberlake and Pusha T, and produced by The Neptunes.<sup><a href='http://en.wikipedia.org/wiki/I%27m_Lovin%27_It_(song)' target='_blank'>[1]</a></sup>";
foodFactsList[33]="In the early 1980s, the Chuck E. Cheese opened in Australia under the name \"Charlie Cheese's Pizza Playhouse\" due to the word \"chuck\" meaning to throw up in Australia.<sup><a href='http://en.wikipedia.org/wiki/Chuck_E._Cheese%27s' target='_blank'>[1]</a></sup>";
foodFactsList[34]="In an effort to target a more adult audience, McDonald's developed a massive marketing campaign in 1996 for the " + (includeImage('Arch Deluxe burger', 'archdeluxe.jpg')) + ". It is considered to be one of McDonald's most expensive flops of all time, having spent over $300 million on research, production, and marketing.<sup><a href='http://en.wikipedia.org/wiki/Arch_Deluxe' target='_blank'>[1]</a></sup>";

	/*  --          History list          --  */
var historyFactsList = new Array;
historyFactsList[0]="In World War II, the British Secret Service distributed special edition Monopoly games to prisoners of war held by the Nazis. In the games were maps, compasses, real money, and other useful tools for escaping.<sup><a href='http://en.wikipedia.org/wiki/Monopoly_(game)' target='_blank'>[1]</a></sup>";
historyFactsList[1]="The unit for one-thousandth of a dollar, or a tenth of a cent (mostly used in accounting and on gas station price signs), is called a " + (includeImage('mill', 'mill.jpg')) + ".<sup><a href='http://en.wikipedia.org/wiki/United_States_dollar' target='_blank'>[1]</a></sup>";
historyFactsList[2]="Canada has a policy of adopting non-overlapping province abbreviations to adjacent countries, unlike Mexico which shares state abbreviations with the United States and Canada: CO, MI, MO, NL, and BC.<sup><a href='http://en.wikipedia.org/wiki/Canadian_postal_abbreviations_for_provinces_and_territories' target='_blank'>[1]</a></sup>";
historyFactsList[3]="Colorado, Wyoming, and Utah are the only states which have boundaries defined solely by lines of latitude and longtitude.<sup><a href='http://en.wikipedia.org/wiki/Colorado' target='_blank'>[1]</a></sup>";
historyFactsList[4]="Man has not been to the moon since Gene Cernan stepped off the lunar surface in 1972.<sup><a href='http://en.wikipedia.org/wiki/Moon_landing' target='_blank'>[1]</a></sup>";
historyFactsList[5]="The first vending machine was developed in the first century; it accepted a coin in exchange for a fixed amount of holy water.<sup><a href='http://en.wikipedia.org/wiki/Vending_machine' target='_blank'>[1]</a></sup>";
historyFactsList[6]="The largest U.S. currency is the $100 bill. The $500, $1,000, $5,000, $10,000 and $100,000 bills are no longer in circulation.<sup><a href='http://en.wikipedia.org/wiki/Large_denominations_of_United_States_currency' target='_blank'>[1]</a></sup>";
historyFactsList[7]="Ronald Reagan was the only president to postpone his State of the Union Address, due to the Space Shuttle Challenger disaster.<sup><a href='http://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster' target='_blank'>[1]</a></sup>";
historyFactsList[8]="Mars has the largest dust storms in the Solar System, as they can sometimes get large enough to cover the entire planet.<sup><a href='http://en.wikipedia.org/wiki/Mars' target='_blank'>[1]</a></sup>";
historyFactsList[9]="The official investigation of the Oklahoma City bombing in 1995 consisted of the FBI conducting over 28,000 interviews and collecting nearly 1 billion pieces of information.<sup><a href='http://en.wikipedia.org/wiki/Oklahoma_City_bombing' target='_blank'>[1]</a></sup>";
historyFactsList[10]="The dwarf planet Pluto was discovered in 1930, and was considered the 9th planet in the Solar System until its demotion to dwarf planet in 2006.<sup><a href='http://en.wikipedia.org/wiki/Pluto' target='_blank'>[1]</a></sup>";
historyFactsList[11]="The new One World Trade Center, which opened for business on November 3, 2014, is 1,776 feet tall. Its skyscraper's spire reaches that height in reference to the year of the United States Declaration of Independence.<sup><a href='http://en.wikipedia.org/wiki/One_World_Trade_Center' target='_blank'>[1]</a></sup>";
historyFactsList[12]="Ronald Reagan won the 1984 presidential election with an electoral vote count of 525-13, winning 49 states to Walter Mondale's 1 state + DC. <sup><a href='http://en.wikipedia.org/wiki/United_States_presidential_election,_1984' target='_blank'>[1]</a></sup>";
historyFactsList[13]="The original 13 Colonies actually consisted of parts of what would become 20 different states: New Hampshire, Massachusetts, Maine, Rhode Island, Connecticut, New York, Vermont, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, Kentucky, West Virginia, North Carolina, Tennessee, South Carolina, Georgia, Alabama, and Mississippi.<sup><a href='http://en.wikipedia.org/wiki/Thirteen_Colonies' target='_blank'>[1]</a></sup>";
historyFactsList[14]="It is believed that although John Hancock signed the Declaration of Independence on July 4, 1776, a majority of signers did not sign it until August 2, 1776, and one signer, Matthew Thornton, signed it as late as November 4, 1776.<sup><a href='http://en.wikipedia.org/wiki/United_States_Declaration_of_Independence' target='_blank'>[1]</a></sup>";
historyFactsList[15]="William Whipple, a signatory of the Declaration of Independence, freed his slave Prince Whipple in 1781, believing he could not fight for liberty and own a slave.<sup><a href='http://en.wikipedia.org/wiki/William_Whipple' target='_blank'>[1]</a></sup>";
historyFactsList[16]="In medieval manuscripts, " + (includeImage('\"strikethrough\" of text with red ink', 'strikethrough.jpg')) + " often functioned as highlighting, similar to the modern day underline.<sup><a href='http://en.wikipedia.org/wiki/Strikethrough' target='_blank'>[1]</a></sup>";
historyFactsList[17]="When Neil Armstrong first walked on the moon, he carried with him a piece of wood from the Wright brothers' airplane's left propeller.<sup><a href='http://en.wikipedia.org/wiki/Apollo_11' target='_blank'>[1]</a></sup>";
historyFactsList[18]="The book <i>Moby Dick</i> was originally a commercial failure and out of print at the time of Herman Melville's death in 1891.<sup><a href='http://en.wikipedia.org/wiki/Moby-Dick' target='_blank'>[1]</a></sup>";
historyFactsList[19]="The Ethiopian leap year happens every four years without exception, while Gregorian leap years are every four years, except years divisible by 100, unless they are also divisible by 400.<sup><a href='http://en.wikipedia.org/wiki/Ethiopian_Calendar' target='_blank'>[1]</a></sup>";
historyFactsList[20]="ATM PINs were originally intended to have six digits, but usually have four because the ATM inventor's wife said she could only remember four digits.<sup><a href='https://en.wikipedia.org/wiki/Personal_identification_number' target='_blank'>[1]</a></sup>";
historyFactsList[21]="Canada has an estimated 3,000,000 lakes, which comprises 60% of the world's lakes.<sup><a href='http://en.wikipedia.org/wiki/List_of_lakes_of_Canada' target='_blank'>[1]</a></sup>";
historyFactsList[22]="At the 1936 Summer Olympics, the Liechenstein team discovered for the first time that the country had an " + (includeImage('identical flag', 'liechtensteinflag.png')) + " as the flag of Haiti. They changed it the next year by adding a crown to it.<sup><a href='http://en.wikipedia.org/wiki/Liechtenstein_at_the_1936_Summer_Olympics' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Flag_of_Liechtenstein' target='_blank'>[2]</a></sup>";
historyFactsList[23]="The infinity symbol (&infin;) is thought to have come from the variant form of the Roman Numeral for 1,000 (CI&#8579;) or the last letter of the Greek alphabet, omega (&omega;). Its creator, John Wallis, did not explain his choice of the symbol.<sup><a href='http://en.wikipedia.org/wiki/Infinity_symbol' target='_blank'>[1]</a></sup>";
historyFactsList[24]="Over 150 bodies lay frozen on the slopes of Mount Everest from failed attempts at reaching the top.<sup><a href='http://en.wikipedia.org/wiki/Mount_Everest' target='_blank'>[1]</a></sup>";
historyFactsList[25]="<i>Encyclopædia Britannica</i> was published starting in 1768, and released 15 editions (as well as dozens of supplements and revisions), until it was announced in 2012 that the 2010 edition would be the last printed edition.<sup><a href='http://en.wikipedia.org/wiki/Encyclop%C3%A6dia_Britannica' target='_blank'>[1]</a></sup>";
historyFactsList[26]="The abbreviation LAX for Los Angeles International Airport was originally just \"LA\", when airports only had 2-letter designations. The rapid growth in the aviation industry changed this to 3-letter designations, so the \"X\" was added on to make LAX. The X has no specific meaning.<sup><a href='http://en.wikipedia.org/wiki/Los_Angeles_International_Airport' target='_blank'>[1]</a></sup>";
historyFactsList[27]="The 2 golf balls that Alan Shepard hit on the moon in 1971 are still there today.<sup><a href='https://en.wikipedia.org/wiki/Apollo_14' target='_blank'>[1]</a><a href='https://en.wikipedia.org/wiki/List_of_artificial_objects_on_the_Moon' target='_blank'>[2]</a></sup>";
historyFactsList[28]="The word \"fortnight\" comes from the Old English word <i>feowertyne niht</i>, meaning \"fourteen nights\". It is used commonly outside of the U.S. as a unit of time equal to 2 weeks.<sup><a href='http://en.wikipedia.org/wiki/Fortnight' target='_blank'>[1]</a></sup>";
historyFactsList[29]="Since 1972, a \"" + (includeImage('leap second', 'leapsecond.png')) + "\" has been added 26 times onto the Coordinated Universal Time in order to keep its time of day close to the mean solar time. The most recent one being June 30, 2015, at 23:59:60 UTC.<sup><a href='http://en.wikipedia.org/wiki/Leap_second' target='_blank'>[1]</a></sup>";
historyFactsList[30]="The Secret Service codenames for recent Presidents of the United States include Renegade (Barack Obama), Tumbler and Trailblazer (George W. Bush), Eagle (Bill Clinton), Timberwolf (George H.W. Bush), and Rawhide (Ronald Reagan).<sup><a href='http://en.wikipedia.org/wiki/Secret_Service_codename' target='_blank'>[1]</a></sup>";
historyFactsList[31]="Ticket prices for the Titanic's promenade deck suites cost $4,350 (equivalent to $106,660 in 2015) for a one-way passage.<sup><a href='http://en.wikipedia.org/wiki/Sinking_of_the_RMS_Titanic' target='_blank'>[1]</a></sup>";


	/*  --          Music list          --  */
var musicFactsList = new Array;
musicFactsList[0]="The song \"Gold Digger\" by Kanye West, was originally recorded in Ludacris' house, and written from a female perspective for rapper Shawnna to use on her album. She declined and it was later rewritten and used by Kanye himself.<sup><a href='http://en.wikipedia.org/wiki/Late_Registration' target='_blank'>[1]</a></sup>";
musicFactsList[1]="Ray Charles' younger brother drowned when Ray was 5, he was fully blind by the age of 7, his father died when he was 10, and his mother died when he was 15. Ray Charles died just 4 months before the release of the biopic film, <i>Ray</i>.<sup><a href='http://en.wikipedia.org/wiki/Ray_(film)' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Ray_Charles' target='_blank'>[2]</a></sup>";
musicFactsList[2]="Rapper Rick Ross' real name is William Leonard Roberts II.<sup><a href='http://en.wikipedia.org/wiki/Rick_Ross' target='_blank'>[1]</a></sup>";
musicFactsList[3]="Elton John's birth name was Reginald Kenneth Dwight. His official name now is Sir Elton Hercules John CBE, which is Commander of the Most Excellent Order of the British Empire.<sup><a href='http://en.wikipedia.org/wiki/Elton_John' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Order_of_the_British_Empire' target='_blank'>[2]</a></sup>";
musicFactsList[4]="Eminem wrote a letter to 2Pac's mom, Afeni Shakur, in order to get approval to produce the posthumous 2Pac album <i>Loyal to the Game</i>.<sup><a href='http://en.wikipedia.org/wiki/Loyal_to_the_Game' target='_blank'>[1]</a></sup>";
musicFactsList[5]="Katy Perry used Wikipedia to research which rapper to collaborate with for her song \"California Girls\",  browsing other West Coast artists before selecting Snoop Dogg.<sup><a href='http://en.wikipedia.org/wiki/California_Gurls' target='_blank'>[1]</a></sup>";
musicFactsList[6]="In 2014, Eminem's song \"Rap God\" was entered into the Guinness World Records as the hit single that has the most words with 1,560. At one point in the song he raps 97 words in 15 seconds, at a rate of 6.5 words per second.<sup><a href='http://en.wikipedia.org/wiki/Rap_God' target='_blank'>[1]</a></sup>";
musicFactsList[7]="In 2013, Metallica became the first band to tour to all 7 continents: The band played a ten-song show at the Carlini Station heliport in Antarctica.<sup><a href='http://en.wikipedia.org/wiki/Metallica' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/King_George_Island_(South_Shetland_Islands)' target='_blank'>[2]</a></sup>";
musicFactsList[8]="Although Rihanna is the only credited featured artist on Kanye West's song \"All of the Lights,\" the song also featured 13 other popular artists doing background vocals: Kid Cudi, Tony Williams, The-Dream, Charlie Wilson, John Legend, Elly Jackson, Alicia Keys, Elton John, Fergie, Ryan Leslie, Drake, Alvin Fields, and Ken Lewis.<sup><a href='http://en.wikipedia.org/wiki/All_of_the_Lights' target='_blank'>[1]</a></sup>";
musicFactsList[9]="Taylor Swift wrote the song \"Out of the Woods\" in just 30 minutes, using the instrumental track given to her by Jack Antonoff, the lead guitarist of the band fun.<sup><a href='http://en.wikipedia.org/wiki/Out_of_the_Woods_(song)' target='_blank'>[1]</a></sup>";
musicFactsList[10]="Shaquille O'Neal had a moderately successful rap career, releasing 4 albums in the 1990s. He collaborated on songs with rappers Method Man, Redman, RZA, Jay-Z, The Notorious B.I.G., and Mobb Deep.<sup><a href='http://en.wikipedia.org/wiki/Shaquille_O%27Neal' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Shaq_Diesel' target='_blank'>[2]</a></sup>";
musicFactsList[11]="In 2007, Kanye West, Lupe Fiasco, and Pharrell Williams formed a hip-hop supergroup called Child Rebel Soldier. However they only only released 3 songs between 2007-2013 before it was announced the group had been canceled. <sup><a href='http://en.wikipedia.org/wiki/Child_Rebel_Soldier' target='_blank'>[1]</a></sup>";
musicFactsList[12]="Kanye West and Eminem won the Grammy Award for Best Rap Album 10 times total in the 16 year span from 2000-2015.<sup><a href='http://en.wikipedia.org/wiki/Grammy_Award_for_Best_Rap_Album' target='_blank'>[1]</a></sup>";
musicFactsList[13]="Paul McCartney has reached number 1 on the UK charts as a solo artist, as part of a duo (with Wonder), as part of a trio (with Wings), as part of a quartet (with The Beatles), and as part of a quintet (with The Beatles and Billy Preston).<sup><a href='http://en.wikipedia.org/wiki/Paul_McCartney' target='_blank'>[1]</a></sup>";
musicFactsList[14]="Upon the release of her album <i>1989</i> in 2014, Taylor Swift became the first artist ever to sell 1,000,000 albums in 1 week, 3 separate times.<sup><a href='http://en.wikipedia.org/wiki/Taylor_Swift' target='_blank'>[1]</a></sup>";
musicFactsList[15]="Jay-Z released a solo rap album every year during the first 8 years of his career (1996-2003).<sup><a href='http://en.wikipedia.org/wiki/Jay_Z_discography' target='_blank'>[1]</a></sup>";
musicFactsList[16]="Michael Jackson's album <i>Thriller</i> had 7 singles reach the <i>Billboard</i> Hot 100 (out of 9 total songs. It also sold as many as 65 million copies, including going 29x Platinum in the United States alone.<sup><a href='http://en.wikipedia.org/wiki/Thriller_(Michael_Jackson_album)' target='_blank'>[1]</a></sup>";
musicFactsList[17]="Rap superstars 50 Cent and Kanye West went head-to-head in a " + (includeImage('sales battle', 'kanye50.jpg')) + " in 2007, both releasing an album on the same day. Kanye West's <i>Graduation</i> had the better first week sales with 957,000, compared to 50 Cent's <i>Curtis</i> sales of 691,000.<sup><a href='http://en.wikipedia.org/wiki/2007_in_hip_hop_music' target='_blank'>[1]</a></sup>";
musicFactsList[18]="Chamillionaire's Grammy Award-winning song \"Ridin'\" actually had far less YouTube music video views than Weird Al Yankovic's parody song \"White &amp; Nerdy\".<sup><a href='http://en.wikipedia.org/wiki/Ridin%27' target='_blank'>[1]</a></sup>";
musicFactsList[19]="In a 2009 interview with Ellen DeGeneres, singer/rapper Akon revealed that his complete name was Aliaune Damala Bouga Time Bongo Puru Nacka Lu Lu Lu Badara Akon Thiam.<sup><a href='http://en.wikipedia.org/wiki/Akon' target='_blank'>[1]</a></sup>";
musicFactsList[20]="Rapper Freddie Gibbs came up with the idea for the name of his album <i>Pi&ntilde;ata</i> (originally called <i>Cocaine Pi&ntilde;ata</i>) after having a dream that he had a 4 year old kid whose birthday party had kids hitting a pi&ntilde;ata filled with cocaine.<sup><a href='http://en.wikipedia.org/wiki/Pi%C3%B1ata_(Freddie_Gibbs_and_Madlib_album)' target='_blank'>[1]</a></sup>";
musicFactsList[21]="Upon singer Michael Jackson's death in 2009 his fans mistakenly left flowers on a different Michael Jackson's (radio personality) star on the Hollywood Walk of Fame.<sup><a href='http://en.wikipedia.org/wiki/Hollywood_Walk_of_Fame' target='_blank'>[1]</a></sup>";
musicFactsList[22]="The 2001 album <i>Devil's Night</i> by D12 contains at least 6 censored lyrics, even in the explicit version of the album.<sup><a href='http://en.wikipedia.org/wiki/Devil%27s_Night_(album)' target='_blank'>[1]</a></sup>";
musicFactsList[23]="The cover of Childish Gambino's 2013 album <i>Because the Internet</i> is an " + (includeImage('animated .GIF', 'gambino.gif')) + ", as a reference to the Internet, which made the .GIF popular. The physical version of the album features lenticular printing to mimic the animation affect of the digital cover.<sup><a href='http://en.wikipedia.org/wiki/Because_the_Internet' target='_blank'>[1]</a></sup>";
musicFactsList[24]="Rapper Danny Brown named his second studio album <i>XXX</i> for his \"gutter-filthy mouth\" and for his 30th birthday.<sup><a href='http://en.wikipedia.org/wiki/XXX_(Danny_Brown_album)' target='_blank'>[1]</a></sup>";
musicFactsList[25]="Michael Jackson (in 1984) and Santana (in 2000) each won 8 Grammy awards in a single Grammy Award ceremony.<sup><a href='http://en.wikipedia.org/wiki/Grammy_Award_records' target='_blank'>[1]</a></sup>";
musicFactsList[26]="4 of the 20 tracks were renamed on the clean version of Eminem's 1999 album <i>The Slim Shady LP</i>, due to their inappropriate titles for an album without the Parental Advisory label.<sup><a href='http://en.wikipedia.org/wiki/Parental_Advisory' target='_blank'>[1]</a></sup>";
musicFactsList[27]="The 1999 Incubus album <i>Make Yourself</i> does not contain a Parental Advisory label on it, even though it contains the word \"fuck\" 9 times.<sup><a href='http://en.wikipedia.org/wiki/Parental_Advisory' target='_blank'>[1]</a></sup>";
musicFactsList[28]="Rapper/actor Donald Glover got his rapper stage name Childish Gambino from a Wu-Tang Clan name generator.<sup><a href='http://en.wikipedia.org/wiki/Donald_Glover' target='_blank'>[1]</a></sup>";
musicFactsList[29]="The band Matchbox Twenty's band name was originally styled as \"Matchbox 20\" on their first album, <i>Yourself or Someone Like You</i>, before changing it to \"Matchbox Twenty\" on every other album.<sup><a href='http://en.wikipedia.org/wiki/Matchbox_Twenty' target='_blank'>[1]</a></sup>";
musicFactsList[30]="Taylor Swift was on tour at some point in every year from 2009-2015, for the Fearless Tour, the Speak Now World Tour, The Red Tour, and The 1989 World Tour.<sup><a href='http://en.wikipedia.org/wiki/Fearless_Tour' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Speak_Now_World_Tour' target='_blank'>[2]</a><a href='http://en.wikipedia.org/wiki/The_Red_Tour' target='_blank'>[3]</a><a href='http://en.wikipedia.org/wiki/The_1989_World_Tour' target='_blank'>[4]</a></sup>";
musicFactsList[31]="Katy Perry's album <i>Teenage Dream</i> became the first by a female artist to produce 5 number one <i>Billboard</i> Hot 100 songs (\"California Gurls\", \"Teenage Dream\", \"Firework\", \"E.T.\", and \"Last Friday Night (T.G.I.F.)\").<sup><a href='http://en.wikipedia.org/wiki/Katy_Perry' target='_blank'>[1]</a></sup>";
musicFactsList[32]="Elton John's 1974 song \"Candle in the Wind\" was written in honor of Marilyn Monroe, who died 11 years earlier. In 1997, he rewrote and rerecorded the song as \"Candle in the Wind 1997\", in honor of Princess Diana, who died that year.<sup><a href='http://en.wikipedia.org/wiki/Candle_in_the_Wind' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Candle_in_the_Wind_1997' target='_blank'>[2]</a></sup>";
musicFactsList[33]="Taylor Swift's album <i>1989</i> was the top-selling album of 2014 although it was only available for 2 months and 4 days of the year.<sup><a href='http://en.wikipedia.org/wiki/1989_(Taylor_Swift_album)' target='_blank'>[1]</a></sup>";
musicFactsList[34]="In their 50+ years as a band, The Rolling Stones have released 24 studio albums in the US (22 in the UK), and have had 27 band members.<sup><a href='https://en.wikipedia.org/wiki/The_Rolling_Stones' target='_blank'>[1]</a></sup>";
musicFactsList[35]="Kobe Bryant was scheduled to release his debut rap album, <i>Visions</i>, in the spring of 2000. The first single, \"K.O.B.E.\", debuted in January 2000, and was performed at NBA All-Star Weekend that month. The song was not well received. Sony abandoned plans for the album, and dropped Bryant later that year.<sup><a href='http://en.wikipedia.org/wiki/Kobe_Bryant' target='_blank'>[1]</a></sup>";

	/*  --          Pop Culture list          --  */
var popFactsList = new Array;
popFactsList[0]="A man was imprisoned, fined, and put on probation for smuggling counterfeit Beanie Babies in 1999.<sup><a href='http://en.wikipedia.org/wiki/Beanie_Babies' target='_blank'>[1]</a></sup>";
popFactsList[1]="Seth Rogen and Evan Goldberg wrote the first drafts of <i>Superbad</i> at the age of 13 and perfected it throughout high school.<sup><a href='http://en.wikipedia.org/wiki/Seth_Rogen' target='_blank'>[1]</a></sup>";
popFactsList[2]="Hasbro released a hypodermic needle-shaped water gun toy called Hypo-Squirt in the 1970s, but it was recalled because the press called it a \"junior junkie\" kit.<sup><a href='http://en.wikipedia.org/wiki/Hasbro' target='_blank'>[1]</a></sup>";
popFactsList[3]="Stephen Colbert has a species of spider named after him - <i>Aptostichus stephencolberti</i>.<sup><a href='http://en.wikipedia.org/wiki/The_Colbert_Report' target='_blank'>[1]</a></sup>";
popFactsList[4]="The mysterious Pok&eacute;mon Mew can learn any move (TM's and HM's) that is able to be taught.<sup><a href='http://en.wikipedia.org/wiki/Mew_(PokÃ©mon)' target='_blank'>[1]</a></sup>";
popFactsList[5]="The estimated U.S. cocaine market exceeded $70 billion in street value for the year 2005, exceeding the revenues of Starbucks.<sup><a href='http://en.wikipedia.org/wiki/Cocaine' target='_blank'>[1]</a></sup>";
popFactsList[6]="Billy Mays signed a deal in June 2009 to shoot infomercial-style commercials for Taco Bell. His death canceled those plans.<sup><a href='http://en.wikipedia.org/wiki/Billy_Mays' target='_blank'>[1]</a></sup>";
popFactsList[7]="In a week in 1994, Tim Allen simultaneously had the #1 show (<i>Home Improvement</i>), #1 movie (<i>The Santa Clause</i>) and #1 book (<i>Don't Stand Too Close to a Naked Man</i>).<sup><a href='http://en.wikipedia.org/wiki/Tim_Allen' target='_blank'>[1]</a></sup>";
popFactsList[8]="The " + (includeImage('first Lego minifigures', 'lego.jpg')) + " in 1975 had no arms, solid unmovable legs, and faceless heads.<sup><a href='http://en.wikipedia.org/wiki/Lego_minifigure' target='_blank'>[1]</a></sup>";
popFactsList[9]="In 2013, the Honey Nut Cheerios mascot Buzz the bee was given a \"swag makeover\" by Nelly the rapper, in a commercial.<sup><a href='http://en.wikipedia.org/wiki/Honey_Nut_Cheerios' target='_blank'>[1]</a></sup>";
popFactsList[10]="The popular children's game \"Duck, Duck, Goose\" is known as \"Duck, Duck, Gray Duck\" in Minnesota. Children instead say variations of colored ducks (\"Blue duck, red duck, gray duck!\").<sup><a href='http://en.wikipedia.org/wiki/Duck,_duck,_goose' target='_blank'>[1]</a></sup>";
popFactsList[11]="The probability of rolling a Yahtzee on the first roll of a turn is 1 in 1,296.<sup><a href='http://en.wikipedia.org/wiki/Yahtzee' target='_blank'>[1]</a></sup>";
popFactsList[12]="The odds of rolling a Yahtzee on all 13 turns of a single game of Yahtzee, is about 1 in 283,000,000,000,000,000 (or 283 quadrillion). This would result in the max score of 1,575 points.<sup><a href='http://en.wikipedia.org/wiki/Yahtzee' target='_blank'>[1]</a></sup>";
popFactsList[13]="The popular newspaper comic <i>Baby Blues</i>, like most comic and cartoon characters, has characters that age on a timeline much slower than real-time. Its original titular baby Zoe was born in the very first strip in 1990, and after 25 years she is 9 years old.<sup><a href='http://en.wikipedia.org/wiki/Baby_Blues' target='_blank'>[1]</a></sup>";
popFactsList[14]="Author Stephen King used the pen name Richard Bachman starting in 1977, and after releasing 5 novels under this name it was finally discovered in 1984 that it was indeed Stephen King.<sup><a href='http://en.wikipedia.org/wiki/Richard_Bachman' target='_blank'>[1]</a></sup>";
popFactsList[15]="Russia switched permanently to daylight savings time from 2011-2014, but reverted back to standard time after this was proven unpopular due to the late sunrises in winter.<sup><a href='http://en.wikipedia.org/wiki/Daylight_saving_time' target='_blank'>[1]</a></sup>";
popFactsList[16]="Negan, a notorious fictional character from <i>The Walking Dead</i> graphic novels, was conceptualized by Robert Kirkman after scrapping the idea of Rick Grimes being forced to kill fellow survivor, Glenn, in order to to protect his son Carl.<sup><a href='http://en.wikipedia.org/wiki/Negan' target='_blank'>[1]</a></sup>";
popFactsList[17]="Stephen King's novel <i>Rage</i> (written under the pen name Richard Bachman) was taken out of print after it partially inspired several different school shootings.<sup><a href='http://en.wikipedia.org/wiki/Rage_(King_novel)' target='_blank'>[1]</a></sup>";
popFactsList[18]="Gene Autry has a star in all 5 categories in the Hollywood Walk of Fame, while Bob Hope, Mickey Rooney, Roy Rogers, and Tony Martin each have a star in 4 different categories.<sup><a href='http://en.wikipedia.org/wiki/Hollywood_Walk_of_Fame' target='_blank'>[1]</a></sup>";
popFactsList[19]="Boxer Muhammed Ali was granted a star on the Hollywood Walk of Fame, as the committee justified it as boxing being a form of \"live performance\", one of the five categories.<sup><a href='http://en.wikipedia.org/wiki/Hollywood_Walk_of_Fame' target='_blank'>[1]</a></sup>";
popFactsList[20]="Encountering a MissingNo. Pok&eacute;mon in <i>Pok&eacute;mon Red</i> and <i>Blue</i> is the result of three computing events, including the game's random battle encounter system, the temporary storage of the player's name in the data buffer, and the game's error handling system. One of the effects of encountering a MissingNo. is the duplication of the 6th item in the player's item menu.<sup><a href='http://en.wikipedia.org/wiki/MissingNo.' target='_blank'>[1]</a></sup>";
popFactsList[21]="In March 2013, Mats Valk of the Netherlands solved a Rubik's Cube in 5.55 seconds at the Zonhoven Open in Belgium.<sup><a href='http://en.wikipedia.org/wiki/Rubik%27s_Cube' target='_blank'>[1]</a></sup>";
popFactsList[22]="A robot built from Lego Mindstormers and a Samsung Galaxy S4 phone was developed to solved a Rubik's Cube 3.25 seconds.<sup><a href='http://en.wikipedia.org/wiki/Rubik%27s_Cube' target='_blank'>[1]</a></sup>";
popFactsList[23]="In January 2014 a cryptocurrency named Coinye West (named after rapper Kanye West) was introduced and circulated briefly before West's lawyers filed a lawsuit, pushing the creators to abandon the project.<sup><a href='http://en.wikipedia.org/wiki/Coinye_West' target='_blank'>[1]</a></sup>";
popFactsList[24]="The \"S.O.S\" in S.O.S brand Soap Pads stands for \"Save Our Saucepans\".<sup><a href='http://en.wikipedia.org/wiki/S.O.S_Soap_Pad' target='_blank'>[1]</a></sup>";
popFactsList[25]="The first non-human animal to ask an existential question was a parrot named Alex, who asked what color he was. He learned \"grey\" after being told the answer 6 times.<sup><a href='http://en.wikipedia.org/wiki/Alex_(parrot)' target='_blank'>[1]</a></sup>";
popFactsList[26]="In 1992, over 28,000 Friendly Floaties plastic ducks and other animals were lost in the Pacific Ocean near Hong Kong. They eventually washed to shore in Alaska, Washington, Hawaii, the United Kingdom, and several other places over the next 15 years.<sup><a href='http://en.wikipedia.org/wiki/Friendly_Floatee' target='_blank'>[1]</a></sup>";
popFactsList[27]="Michael Jordan has appeared on the front of a Wheaties cereal box 18 different times, the most of any athlete.<sup><a href='http://en.wikipedia.org/wiki/List_of_athletes_on_Wheaties_boxes' target='_blank'>[1]</a></sup>";
popFactsList[28]="In the Mall of America, there is a red chair from former Met Stadium attached to the wall, exactly where it sat inside Met Stadium (which once existed where Mall of America is now). It is to commemorate the 520-foot homerun that hall-of-famer Harmon Killebrew hit in 1967.<sup><a href='http://en.wikipedia.org/wiki/Mall_of_America' target='_blank'>[1]</a></sup>";
popFactsList[29]="In 2008, astronauts took a Buzz Lightyear action figure into space on the Discovery Space Shuttle, as part of an educational experience for students.<sup><a href='http://en.wikipedia.org/wiki/Toy_Story' target='_blank'>[1]</a></sup>";
popFactsList[30]="Book publisher Bloomsbury invested &pound;10 million in an attempt to keep <i>Harry Potter and the Deathly Hallows</i>' contents secure until its release date of July 21, 2007. Despite this, two U.S. papers published early reviews of the book.<sup><a href='http://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows' target='_blank'>[1]</a></sup>";
popFactsList[31]="Prescription medicine bottles are usually orange or light brown because of their ability to prevent ultraviolet light from degrading the potentially photosensitive contents, while still allowing enough light through to see the contents.<sup><a href='http://en.wikipedia.org/wiki/Prescription_bottle' target='_blank'>[1]</a></sup>";
popFactsList[32]="A number with 3 digits or more is divisible by 8 if its last 3 digits are also divisible by 8.<sup><a href='http://en.wikipedia.org/wiki/8_(number)' target='_blank'>[1]</a></sup>";
popFactsList[33]="A Swedish family named their child Brfxxccxxmnpcccclllmmnprxvclmnckssqlbb11116 (pronounced <i>Albin</i>) as a protest against the naming laws in Sweden. The family was charged 5,000 kronor and the name was rejected.<sup><a href='http://en.wikipedia.org/wiki/Naming_law_in_Sweden' target='_blank'>[1]</a></sup>";
popFactsList[34]="Koko the gorilla, who resides in the San Francisco zoo, reportedly knows over 1,000 words of Gorilla Sign Language (based on American Sign Language) and also understands over 2,000 words of English.<sup><a href='http://en.wikipedia.org/wiki/Koko_(gorilla)' target='_blank'>[1]</a></sup>";
popFactsList[35]="In 2009, Google rented goats to eat their overgrown lawns in Mountain View, California.<sup><a href='http://en.wikipedia.org/wiki/Rent_A_Goat' target='_blank'>[1]</a></sup>";
popFactsList[36]="The inventor of the shopping cart had to hire male and female models to push around shopping carts in order to make people comfortable using them. Men originally found them effeminate; women found them suggestive of a baby carriage.<sup><a href='http://en.wikipedia.org/wiki/Shopping_cart' target='_blank'>[1]</a></sup>";
popFactsList[37]="In 2002, Kmart rebranded its iconic red logo in five prototype stores (4 in Illinois, and 1 in White Lake, Michigan) using a lime green and gray color scheme. " + (includeImage('These logos', 'kmart.jpg')) + " did not roll out to Kmart's other stores.<sup><a href='http://en.wikipedia.org/wiki/Kmart' target='_blank'>[1]</a></sup>";
popFactsList[38]="UPS developed software in 2004 that would route UPS trucks to their destinations while minimizing left turns, in order to save a considerable amount of fuel.<sup><a href='http://en.wikipedia.org/wiki/United_Parcel_Service' target='_blank'>[1]</a></sup>";
popFactsList[39]="Some species of bamboo can grow up to 35 inches in a 24-hour period.<sup><a href='http://en.wikipedia.org/wiki/Bamboo' target='_blank'>[1]</a></sup>";
popFactsList[40]="A study in 2000 showed that Oxford Street in London had 250,000 blobs of chewing gum stuck to its pavement.<sup><a href='http://en.wikipedia.org/wiki/Chewing_gum' target='_blank'>[1]</a></sup>";
popFactsList[41]="The original Skee-ball games in 1914 had a 36-foot lane, much longer than the 10-13 foot lanes today.<sup><a href='http://en.wikipedia.org/wiki/Skee_ball' target='_blank'>[1]</a></sup>";
popFactsList[42]="Among Neil Patrick Harris' numerous television, movie, and Broadway credits, he is also the voice of the safety spiels and launch countdown of Disney's California Adventure's \"California Screamin'\" rollercoaster.<sup><a href='http://goo.gl/xYmSbw' target='_blank'>[1]</a></sup>";
popFactsList[43]="Blood donor James Harrison had blood that contained a rare antigen which cured Rhesus disease. He has donated blood a record 1,000 times and saved 2,000,000 lives.<sup><a href='http://en.wikipedia.org/wiki/James_Harrison_(blood_donor)' target='_blank'>[1]</a></sup>";
popFactsList[44]="Cases of chickenpox have been observed in chimpanzees and gorillas.<sup><a href='http://en.wikipedia.org/wiki/Chickenpox' target='_blank'>[1]</a></sup>";
popFactsList[45]="In 2008, a teenager was decapitated by Batman: The Ride's roller coaster train at Six Flags Over Georgia, while allegedly trying to find his hat in a restricted area.<sup><a href='http://en.wikipedia.org/wiki/Incidents_at_Six_Flags_parks' target='_blank'>[1]</a></sup>";
popFactsList[46]="\"Pok&eacute;mon\" is identical in both the singular and plural forms of the word, as is each Pok&eacute;mon species name. It is grammatically correct to say \"one Pok&eacute;mon\" and \"many Pok&eacute;mon\", as well as \"one Pikachu\" and \"many Pikachu\".<sup><a href='https://en.wikipedia.org/wiki/Pok%C3%A9mon' target='_blank'>[1]</a></sup>";
popFactsList[47]="For Black Friday 2013, the price of the popular party game <i>Cards Against Humanity</i> actually rose $5 - an \"anti-sale\". For Black Friday 2014, the company removed the card game from their website store and sold \"Bullshit\", a box containing actual sterilized bull feces, instead.<sup><a href='https://en.wikipedia.org/wiki/Cards_Against_Humanity' target='_blank'>[1]</a></sup>";
popFactsList[48]="As of 2011, George R.R. Martin still writes his <i>A Song of Ice and Fire</i> novels and other fiction using Wordstar 4.0, a word processor version that was released in 1987.<sup><a href='http://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/WordStar' target='_blank'>[2]</a></sup>";
popFactsList[49]="Epcot's famous ride and structure Spaceship Earth is made up of " + (includeImage('11,324 tiles', 'tiles.png')) + " and took 26 months to build. <sup><a href='https://en.wikipedia.org/wiki/Spaceship_Earth_(Epcot)' target='_blank'>[1]</a></sup>";
popFactsList[50]="2 people have been killed due to gun violence at Universal Studios Hollywood, California. One man committed suicide by shooting himself near Despicable Me: Minion Mayhem; another incident involved a police officer shooting and killing a man carrying a gun. <sup><a href='http://en.wikipedia.org/wiki/Incidents_at_Universal_parks' target='_blank'>[1]</a></sup>";
popFactsList[51]="Among Grumpy Cat's numerous public appearances, she has appeared on a Honey Nut Cheerios commercial, and episode of <i>The Bachelorette</i>, and WWE <i>Monday Night Raw</i>.<sup><a href='https://en.wikipedia.org/wiki/Grumpy_Cat' target='_blank'>[1]</a></sup>";
popFactsList[52]="Pigs were chosen as the enemies in the game <i>Angry Birds</i> because the swine-flu epidemic was popular in the news, during the game's development in 2009.<sup><a href='http://en.wikipedia.org/wiki/Angry_Birds_(video_game)' target='_blank'>[1]</a></sup>";
popFactsList[53]="The Upright Citizens Brigade Theatre produced a play called <i>Seinfeld: The Purge</i>, which parodied both <i>Seinfeld</i> and <i>The Purge</i>. The play focused on what each Seinfeld character would do during a purge.<sup><a href='http://en.wikipedia.org/wiki/The_Purge' target='_blank'>[1]</a></sup>";
popFactsList[54]="Playing cards first entered Southern Europe in the 14th century, using the Mamluk suits of cups, coins, swords, and polo-sticks, which are still used in traditional Latin decks today.<sup><a href='http://en.wikipedia.org/wiki/Playing_card' target='_blank'>[1]</a></sup>";
popFactsList[55]="The joker was added to playing card decks around 1860, as a third trump for the game of Euchre, which ranked higher than the two bowers (the two highest ranking cards, the Jack of the trump suit and the Jack of the same color as the trump suit).<sup><a href='http://en.wikipedia.org/wiki/Playing_card' target='_blank'>[1]</a></sup>";
popFactsList[56]="The FCC fined CBS a record $550,000 over Janet Jackson's \"wardrobe malfunction\" at the Super Bowl XXXVIII halftime show in 2003. It was fought in the Supreme Court, and the fine was appealed and ultimately voided by the Third Circuit Court of Appeals in a 2011 ruling. A case to reinstate the fine was refused in 2012.<sup><a href='http://en.wikipedia.org/wiki/Super_Bowl_XXXVIII_halftime-show_controversy' target='_blank'>[1]</a></sup>";
popFactsList[57]="YouTube co-founder Jawed Karim claims that Janet Jackson's \"wardrobe malfunction\" at the Super Bowl XXXVIII halftime show was what led to the creation of the video sharing website. This was due to his frustration at not being able to easily find a video clip of the incident.<sup><a href='http://en.wikipedia.org/wiki/Super_Bowl_XXXVIII_halftime-show_controversy' target='_blank'>[1]</a></sup>";

	/*  --          Sports list          --  */
var sportsFactsList = new Array;
sportsFactsList[0]="The New York Yankees were originally founded in 1901 as the Baltimore Orioles. When they moved to New York, they became the New York Highlanders, and then the Yankees.<sup><a href='http://en.wikipedia.org/wiki/New_York_Yankees' target='_blank'>[1]</a></sup>";
sportsFactsList[1]="In 1912, Detroit Tigers pitcher Allan Travers pitched a complete game, giving up 26 hits, 24 runs (14 earned), 7 walks, and 1 strikeout. The Tigers lost 24-2. That was his only appearance in MLB.<sup><a href='http://en.wikipedia.org/wiki/Allan_Travers' target='_blank'>[1]</a></sup>";
sportsFactsList[2]="Fictional characters who have bowled a perfect 300 game: Peg Bundy (<i>Married With Children</i>), Fred Flintstone (<i>The Flintstones</i>), Homer Simpson and Maggie Simpson (<i>The Simpsons</i>), Howard Sprague (<i>The Andy Griffith Show</i>), Jim (<i>According to Jim</i>), Ron Swanson (<i>Parks and Recreation</i>), and Mort Goldman (<i>Family Guy</i>).<sup><a href='http://en.m.wikipedia.org/wiki/Perfect_game_(bowling)' target='_blank'>[1]</a></sup>";
sportsFactsList[3]="Prior to renaming the Tampa Bay Devil Rays to the Tampa Bay Rays in 2008, several other names were considered: Aces, Bandits, Cannons, Dukes, Stripes, and Stuart Sternberg's personal favorite, the \"Nine\".<sup><a href='http://en.wikipedia.org/wiki/2008_Tampa_Bay_Devil_Rays_season' target='_blank'>[1]</a></sup>";
sportsFactsList[4]="As of the end of 2014 - The Seattle Mariners, owned by Nintendo of America, have had a losing record in 26 of the 38 seasons they have been a team, and have also never been to the World Series.<sup><a href='http://en.wikipedia.org/wiki/Seattle_Mariners' target='_blank'>[1]</a></sup>";
sportsFactsList[5]="The cost of a 30-second commercial in Super Bowl I in 1967 was just $42,000 compared to Super Bowl XLVIII's cost of $4,000,000.<sup><a href='http://en.wikipedia.org/wiki/Super_Bowl_I' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Super_Bowl_XLVIII' target='_blank'>[2]</a></sup>";
sportsFactsList[6]="The Milwaukee Brewers' blue and gold colors come from their original colors as the 1969 Seattle Pilots. Owner Bud Selig wanted to change the colors to navy and red when they moved to Milwaukee in 1970, but there wasn't enough time before Opening Day.<sup><a href='http://en.wikipedia.org/wiki/Super_Bowl_I' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Seattle_Pilots' target='_blank'>[2]</a></sup>";
sportsFactsList[7]="Babe Ruth once pitched a 4-pitch walk to start a game, got angry at the umpire's calls, and punched him, getting ejected. Reliever Ernie Shore came in and retired every batter for a combined no-hitter.<sup><a href='http://en.wikipedia.org/wiki/Babe_Ruth' target='_blank'>[1]</a></sup>";
sportsFactsList[8]="The two creators of the famous song, \"Take Me Out to the Ball Game\", Jack Norworth and Albert Von Tilzer, had never been to a baseball game when they made the song. The two did eventually go to a baseball game, 20 and 32 years later, respectively.<sup><a href='http://en.wikipedia.org/wiki/Take_Me_Out_to_the_Ball_Game' target='_blank'>[1]</a></sup>";
sportsFactsList[9]="In Nolan Ryan's 27-year pitching career, he struck out 7 pairs of fathers and sons.<sup><a href='http://en.wikipedia.org/wiki/Nolan_Ryan' target='_blank'>[1]</a></sup>";
sportsFactsList[10]="Jackie Mitchell, one of the first female players in professional baseball, struck out both Babe Ruth and Lou Gehrig in an exhibition game in 1931.<sup><a href='http://en.wikipedia.org/wiki/Jackie_Mitchell' target='_blank'>[1]</a></sup>";
sportsFactsList[11]="During the famous 1998 MLB home run record race, when Mark McGwire broke Roger Maris' home run record, his rival and competition Sammy Sosa ran in from right field and engaged McGwire in a celebratory embrace.<sup><a href='http://en.wikipedia.org/wiki/1998_home_run_chase' target='_blank'>[1]</a></sup>";
sportsFactsList[12]="In an effort to break the \"Curse of the Billy Goat,\" which has supposedly kept the Chicago Cubs from reaching the World Series in 1945, several times Cubs fans have hung butchered goat body parts from the Harry Caray statue.<sup><a href='http://en.wikipedia.org/wiki/Curse_of_the_Billy_Goat' target='_blank'>[1]</a></sup>";
sportsFactsList[13]="As of the end of the 2014 season, only 5 MLB players have hit 60 or more home runs in a season: Babe Ruth (60), Roger Maris (61), Sammy Sosa (66, 63, 64), Mark McGwire (70, 65), and Barry Bonds (73).<sup><a href='http://en.wikipedia.org/wiki/50_home_run_club' target='_blank'>[1]</a></sup>";
sportsFactsList[14]="The 2008 Detroit Lions finished the season with an 0-16 record, becoming the first team to lose every game since the NFL schedule was increased to 16 games in 1978.<sup><a href='http://en.wikipedia.org/wiki/2008_Detroit_Lions_season' target='_blank'>[1]</a></sup>";
sportsFactsList[15]="MLB player Ryan Howard has appeared as himself in the television shows <i>Entourage</i>, <i>It's Always Sunny in Philadelphia</i>, and <i>The Office</i>.<sup><a href='http://en.wikipedia.org/wiki/Ryan_Howard' target='_blank'>[1]</a></sup>";
sportsFactsList[16]="As of the end of the 2013-2014 NBA season, only 3 players have ever won NBA MVP, All-Star game MVP, and Finals MVP awards in the same year: Willis Reed (1970), Michael Jordan (1996, 1998), and Shaquille O'Neal (2000).<sup><a href='http://en.wikipedia.org/wiki/Shaquille_O%27Neal' target='_blank'>[1]</a></sup>";
sportsFactsList[17]="The 3-point field goal was not introduced into the NBA until the 1979-80 season. <sup><a href='http://en.wikipedia.org/wiki/1979€“80_NBA_season' target='_blank'>[1]</a></sup>";
sportsFactsList[18]="During the 8-year stretch from 1996-2003, the New York Yankees went to the World Series 6 times, and won the Series 4 of those times. <sup><a href='http://en.wikipedia.org/wiki/List_of_World_Series_champions' target='_blank'>[1]</a></sup>";
sportsFactsList[19]="The 1988 Baltimore Orioles lost each of their first 21 games to start the season, until finally winning on April 29th to improve to 1-21.<sup><a href='http://en.wikipedia.org/wiki/1988_in_baseball' target='_blank'>[1]</a></sup>";
sportsFactsList[20]="During Wilt Chamberlain's famous 100-point basketball game in 1962, he missed 2 shots in a row while at 98 points. With 46 seconds remaining in the game, he made his next shot, ending at 100.<sup><a href='http://en.wikipedia.org/wiki/Wilt_Chamberlain%27s_100-point_game' target='_blank'>[1]</a></sup>";
sportsFactsList[21]="The first person to run a sub-4-minute mile was Roger Bannister, who ran a mile in 3:59.4 in 1954. There is a plaque at Oxford University's Iffley Road Track commemorating the achievement.<sup><a href='http://en.wikipedia.org/wiki/Four-minute_mile' target='_blank'>[1]</a></sup>";
sportsFactsList[22]="The 2016 Super Bowl did not use Roman Numerals to number it, like usual. Instead of Super Bowl L, it was known as <br/>" + (includeImage('Super Bowl 50', 'sb50.png')) + ".<sup><a href='http://en.wikipedia.org/wiki/Super_Bowl_50' target='_blank'>[1]</a></sup>";
sportsFactsList[23]="The Montreal Canadiens appeared in the Stanley Cup Finals all 10 years from the 1950-51 season to the 1959-60 season, winning the Stanley Cup 6 times.<sup><a href='http://en.wikipedia.org/wiki/List_of_NHL_franchise_post-season_appearance_streaks' target='_blank'>[1]</a></sup>";
sportsFactsList[24]="As of the end of the NHL's 2014-15 regular season, the Detroit Red Wings have appeared in the playoffs 24 seasons in a row, dating back to the 1990-91 season.<sup><a href='http://en.wikipedia.org/wiki/List_of_NHL_franchise_post-season_appearance_streaks' target='_blank'>[1]</a></sup>";
sportsFactsList[25]="NHL player Wayne Gretzky scored 70+ goals in a season 4 different times: 92 goals in the 1981-82 season, 71 goals in '82-'83, 87 goals in '83-84, and 73 goals in '84-'85.<sup><a href='http://en.wikipedia.org/wiki/List_of_NHL_players_with_50-goal_seasons' target='_blank'>[1]</a></sup>";
sportsFactsList[26]="On May 8, 2012, Texas Ranger player Josh Hamilton went 5-5 with 4 homeruns. All 4 homeruns were 2-run homeruns, and the runner on base all 4 times was Elvis Andrus.<sup><a href='http://en.wikipedia.org/wiki/Josh_Hamilton' target='_blank'>[1]</a></sup>";
sportsFactsList[27]="Michael Jordan continued to receive his multi-million dollar NBA salary during his first retirement, when he left the NBA to play minor league baseball. He played for a Chicago White Sox minor league affiliate, which was owned by Chicago Bulls owner Jerry Reinsdorf.<sup><a href='http://en.wikipedia.org/wiki/Michael_Jordan' target='_blank'>[1]</a></sup>";
sportsFactsList[28]="As of 2015, the NFL has never had a team win the Super Bowl 3 times in a row. The NBA (5 times), NHL (5 times), and MLB (4 times), have all had teams win the championship at least 3 times in a row.<sup><a href='http://en.wikipedia.org/wiki/List_of_Super_Bowl_champions' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/List_of_NBA_champions' target='_blank'>[2]</a><a href='http://en.wikipedia.org/wiki/List_of_Stanley_Cup_champions' target='_blank'>[3]</a><a href='http://en.wikipedia.org/wiki/List_of_World_Series_champions' target='_blank'>[4]</a></sup>";
sportsFactsList[29]="During Yogi Berra's 18 years playing with the New York Yankees, the team appeared in the World Series 14 times, and won 10 of those series.<sup><a href='http://en.wikipedia.org/wiki/Yogi_Berra' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/List_of_World_Series_champions' target='_blank'>[2]</a></sup>";
sportsFactsList[30]="Tiger Woods made 142 straight cuts, making the cut for every tournament starting in 1998 until May 13, 2005.<sup><a href='http://en.wikipedia.org/wiki/List_of_career_achievements_by_Tiger_Woods' target='_blank'>[1]</a></sup>";
sportsFactsList[31]="As of 2015, Barry Bonds holds the record for most intentional walks in a 9-inning game (4), season (120), and career (668).<sup><a href='http://en.wikipedia.org/wiki/Intentional_base_on_balls' target='_blank'>[1]</a></sup>";
sportsFactsList[32]="New Jersey Devil goaltender Martin Brodeur scored 3 goals in his career as a goaltender in the NHL.<sup><a href='http://en.wikipedia.org/wiki/List_of_goaltenders_who_have_scored_a_goal_in_an_NHL_game' target='_blank'>[1]</a></sup>";
sportsFactsList[33]="Shaquille O'Neal once missed all 11 free throw attempts in a single game in 2000.<sup><a href='http://en.wikipedia.org/wiki/List_of_career_achievements_by_Shaquille_O'Neal' target='_blank'>[1]</a></sup>";
sportsFactsList[34]="The 1995-96 Chicago Bulls finished the season with a 72-10 record (or a winning percentage of .878).<sup><a href='http://en.wikipedia.org/wiki/NBA_regular_season_records' target='_blank'>[1]</a></sup>";
sportsFactsList[35]="The 2001 Seattle Mariners had a 116-46 record (or a winning percentage of .716), however they lost in the American League Championship series against the Yankees, losing the series 4-1. <sup><a href='http://en.wikipedia.org/wiki/2001_Seattle_Mariners_season' target='_blank'>[1]</a></sup>";
sportsFactsList[36]="Only 17 of the 50 states currently have an MLB franchise, in addition to the 1 team in Canada and 1 team in Washington, D.C.<sup><a href='http://en.wikipedia.org/wiki/Current_Major_League_Baseball_franchises' target='_blank'>[1]</a></sup>";
sportsFactsList[37]="In 2011, the U.S. House of Representatives passed a bill ordering the United States Mint to produce commemorative coins with baseballs and gloves on them, including  50,000 gold coins, 400,000 silver coins, and 750,000 clad (Nickel-Copper) coins.  The money from surcharges of these non-circulating coins goes to the Baseball Hall of Fame.<sup><a href='http://en.wikipedia.org/wiki/Current_Major_League_Baseball_franchises' target='_blank'>[1]</a></sup>";
sportsFactsList[38]="In 1994, Buffalo Sabres' goaltender Dominik Hašek made 70 saves in a single game, not allowing one goal. The game lasted until the 4th overtime when the Sabres finally won, 1-0.<sup><a href='http://en.wikipedia.org/wiki/Dominik_Hašek' target='_blank'>[1]</a></sup>";
sportsFactsList[39]="After clinching the NL West in 2013, the Dodgers were asked by the Diamondbacks to not celebrate on the field (the Diamondbacks' Chase Field), so several Dodgers players climbed over the outfield wall and jumped into the pool.<sup><a href='http://en.wikipedia.org/wiki/Chase_Field' target='_blank'>[1]</a></sup>";
sportsFactsList[40]="To help funding for building Chase Field, the Diamondbacks' home stadium, a quarter-cent increase in county sales tax was approved. The issue was so controversial that a homeless man shot and injured County Supervisor Mary Rose Wilcox, claiming her support for the tax justified his attack.<sup><a href='http://en.wikipedia.org/wiki/Chase_Field' target='_blank'>[1]</a></sup>";
sportsFactsList[41]="Kobe Bryant's parents named him after the famous beef of Kobe, Japan, which they saw on a restaurant menu.<sup><a href='http://en.wikipedia.org/wiki/Kobe_Bryant' target='_blank'>[1]</a></sup>";
sportsFactsList[42]="From 2000-2010, the Los Angeles Lakers appeared in the NBA Finals 7 times, winning the championship 5 times.<sup><a href='http://en.wikipedia.org/wiki/List_of_NBA_champions' target='_blank'>[1]</a></sup>";
sportsFactsList[43]="The New Orleans Hornets (now Pelicans) relocated to Oklahoma City due to the damage caused by Hurricane Katrina in 2005, and were officially known as the New Orleans/Oklahoma City Hornets for two seasons.<sup><a href='http://en.wikipedia.org/wiki/New_Orleans_Pelicans' target='_blank'>[1]</a></sup>";
sportsFactsList[44]="When Shaquille O'Neill and Kobe Bryant were no longer teammates, Shaq's team went 7-4 against Kobe's in the 11 times they played each other. However, Kobe outscored Shaq all 11 times, by a total of 385-184.<sup><a href='http://en.wikipedia.org/wiki/Shaq%E2%80%93Kobe_feud' target='_blank'>[1]</a></sup>";

	/*  --          Technology list          --  */
var technologyFactsList = new Array;
technologyFactsList[0]="Thomas Edison's last breath is reportedly contained in a test tube at the Henry Ford Museum.<sup><a href='http://en.wikipedia.org/wiki/Thomas_Edison' target='_blank'>[1]</a></sup>";
technologyFactsList[1]="On January 1st, 2000, the U.S. Naval Observatory master clock, which keeps the country's official time, gave the date on its website as January 1st, 19100.<sup><a href='http://en.wikipedia.org/wiki/Year_2000_problem' target='_blank'>[1]</a></sup>";
technologyFactsList[2]="On January 1st, 2013, Mark Zuckerberg lowered his annual salary from $500,000 to $1.00.<sup><a href='http://en.wikipedia.org/wiki/Mark_Zuckerberg' target='_blank'>[1]</a></sup>";
technologyFactsList[3]="The name Wikipedia was created by co-founder Larry Sanger; it is a portmanteau of <i>wiki</i> (the name of a type of collaborative website, from the Hawaiian word for \"quick\"), and <i>pedia</i> from encyclopedia.<sup><a href='http://en.wikipedia.org/wiki/Wikipedia' target='_blank'>[1]</a></sup>";
technologyFactsList[4]="The first blueprints of Twitter by its creator @jack show it as originally being named \"my.stat.us\".<sup><a href='http://en.wikipedia.org/wiki/Twitter' target='_blank'>[1]</a></sup>";
technologyFactsList[5]="In 2000, the \"Pikachu virus\" was distributed to internet users via email, considered to be the first computer virus aimed at children. The email message said \"Pikachu is your friend\" and had an attached program that would delete a computer's files when restarted.<sup><a href='http://en.wikipedia.org/wiki/Pikachu_virus' target='_blank'>[1]</a></sup>";
technologyFactsList[6]="Throughout its lifespan, \"SmarterChild\" had 30 million instant messenger friends on AOL Instant Messenger and MSN Messenger. It was retired in November 2008.<sup><a href='http://en.wikipedia.org/wiki/SmarterChild' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/AOL_Instant_Messenger' target='_blank'>[2]</a></sup>";
technologyFactsList[7]="The maximum amount of tape a standard VHS cassette could hold is 1,410 feet, which is about 4-5 hours of video.<sup><a href='http://en.wikipedia.org/wiki/VHS' target='_blank'>[1]</a></sup>";
technologyFactsList[8]="The island country of Niue became the first \"Wi-Fi nation\" in 2003, offering free wireless internet access to the entire country.<sup><a href='http://en.wikipedia.org/wiki/Niue' target='_blank'>[1]</a></sup>";
technologyFactsList[9]="The development project \"Super Mario 128\" was originally meant to be a direct sequel to <i>Super Mario 64</i>. It was eventually abandoned and elements from it were later used in <i>Pikmin</i> and <i>Super Mario Galaxy</i>.<sup><a href='http://en.wikipedia.org/wiki/Super_Mario_128' target='_blank'>[1]</a></sup>";
technologyFactsList[10]="Home video game consoles were banned in mainland China in the year 2000, until the year 2013, when the ban was lifted.<sup><a href='http://en.wikipedia.org/wiki/List_of_banned_video_games' target='_blank'>[1]</a></sup>";
technologyFactsList[11]="In <i>The Sims 2</i>, an average Sim baby becomes a toddler on day 3, a child on day 7, a teen on day 15, an adult on day 30, an elder on day 59, and will die naturally on day 68-90.<sup><a href='http://en.wikipedia.org/wiki/The_Sims_2' target='_blank'>[1]</a></sup>";
technologyFactsList[12]="Matthew Perry, Steven Spielberg, and some players of the Chicago Bulls were all reported to have called Nintendo in 1996 to get a then hard to get Nintendo 64.<sup><a href='http://en.wikipedia.org/wiki/Nintendo_64' target='_blank'>[1]</a></sup>";
technologyFactsList[13]="Among the ways to die in <i>The Oregon Trail</i> video game are measles, snakebite, dysentry, typhoid, cholera, exhaustion, drowning, and a broken leg.<sup><a href='http://en.wikipedia.org/wiki/The_Oregon_Trail_(video_game)' target='_blank'>[1]</a></sup>";
technologyFactsList[14]="Former President Lyndon B. Johnson owned an amphicar - a hybrid car and boat. He would scare visitors by driving it into the lake, claiming malfunctioning brakes.<sup><a href='http://en.wikipedia.org/wiki/Amphicar' target='_blank'>[1]</a></sup>";
technologyFactsList[15]="Nintendo was sued and found guilty when <i>Mario Party</i> players got blisters on their palms while playing the mini games that required them to rapidly spin the analog stick. They also gave the players free gaming gloves to safely play the game.<sup><a href='http://en.wikipedia.org/wiki/Mario_Party' target='_blank'>[1]</a></sup>";
technologyFactsList[16]="The original Japanese version of the arcade game Pac-Man was called Puck Man, referencing the character's shape being like a hockey puck.<sup><a href='http://en.wikipedia.org/wiki/Pac-Man' target='_blank'>[1]</a></sup>";
technologyFactsList[17]="Due to Circuit City's bankruptcy in 2008, several brand new stores were closed after just a few weeks of being open. Some stores were also built and never even opened.<sup><a href='http://en.wikipedia.org/wiki/Circuit_City' target='_blank'>[1]</a></sup>";
technologyFactsList[18]="Best Buy was originally a chain of stores called Sound of Music. After its most profitable store was hit by a tornado, its owner held a sale selling its damaged stock, promising \"best buys\".<sup><a href='http://en.wikipedia.org/wiki/Best_Buy' target='_blank'>[1]</a></sup>";
technologyFactsList[19]="In 1991, a 1 GB hard drive could be purchased for about $2,700. As of 2014, a 4 TB (4,000 GB) hard drive can be purchased for about $150.<sup><a href='http://en.wikipedia.org/wiki/Terabyte' target='_blank'>[1]</a></sup>";
technologyFactsList[20]="Sonic the Hedgehog's sidekick, Miles \"Tails\" Prower, gets his name from a pun on \"miles per hour\", referencing the famed speed of Sonic the Hedgehog.<sup><a href='http://en.wikipedia.org/wiki/Tails_(character)' target='_blank'>[1]</a></sup>";
technologyFactsList[21]="The early Nintendo game <i>Baseball</i>, released in 1983, only allowed the player to choose 6 of the 26 MLB teams to play as.<sup><a href='http://en.wikipedia.org/wiki/Baseball_(1983_video_game)' target='_blank'>[1]</a></sup>";
technologyFactsList[22]="In 2010 and 2012, Sega released a follow-up sequel to the original Sonic series from 1991 to 1994. It is called <i>Sonic the Hedgehog 4 Episode I</i> and <i>Episode II</i>, and picks up where <i>Sonic and Knuckles</i> left off.<sup><a href='http://en.wikipedia.org/wiki/Sonic_the_Hedgehog_4:_Episode_I' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Sonic_the_Hedgehog_4:_Episode_II' target='_blank'>[2]</a></sup>";
technologyFactsList[23]="The creator of Atari video game system also created Chuck E. Cheese, which could function as a way to distribute Atari games and get kids to play Atari video games.<sup><a href='http://en.wikipedia.org/wiki/Nolan_Bushnell' target='_blank'>[1]</a></sup>";
technologyFactsList[24]="Some alternate endings considered for the video game <i>Portal 2</i> included the player-character shooting a Portal onto the moon's surface, and having the player die of asphyxiation over a closing song; another featured Chell finally saying a single word.<sup><a href='http://en.wikipedia.org/wiki/Portal_2' target='_blank'>[1]</a></sup>"; 
technologyFactsList[25]="The oldest still-existing .com domain is www.symbolics.com, which was registered on March 15, 1985.<sup><a href='http://en.wikipedia.org/wiki/.com' target='_blank'>[1]</a></sup>";
technologyFactsList[26]="The first iPhone (released in 2007) did not have video recording, GPS, a front-facing camera, or a digital compass.<sup><a href='http://en.wikipedia.org/wiki/List_of_iOS_devices' target='_blank'>[1]</a></sup>";
technologyFactsList[27]="Upon the launch of Gmail and its 1-GB inboxes on April 1, 2004, many people dismissed it as a joke since Google is known for their elaborate April Fools' Day jokes.<sup><a href='http://en.wikipedia.org/wiki/April_Fools'_Day' target='_blank'>[1]</a></sup>";
technologyFactsList[28]="Before the emergence of the World Wide Web, the CD-Rom version of Encarta Encyclopedia included its own search software and hyperlinking (to other articles), developed by a team of CD-Rom Division developers.<sup><a href='http://en.wikipedia.org/wiki/Encarta' target='_blank'>[1]</a></sup>";
technologyFactsList[29]="<i>WALL-E</i> director Andrew Stanton wanted EVE to be at the higher end of technology, so he consulted with iPod designer Jonathan Ive, who inspected her design.<sup><a href='http://en.wikipedia.org/wiki/WALL-E' target='_blank'>[1]</a></sup>";
technologyFactsList[30]="Woody was the most complex character to animate in the original <i>Toy Story</i> film, requiring 723 motion controls, including 212 for his face and 58 for his mouth.<sup><a href='http://en.wikipedia.org/wiki/Toy_Story' target='_blank'>[1]</a></sup>";
technologyFactsList[31]="The deprecated HTML &lt;blink&gt; tag was a joke suggestion by Lou Montulli, but an engineer liked the idea so much that he went to the office after leaving the bar at midnight, and implemented it overnight.<sup><a href='http://en.wikipedia.org/wiki/Blink_element' target='_blank'>[1]</a></sup>";
technologyFactsList[32]="In the original Japanese version of Pac-Man (known as Puck-Man), the names of the four ghost enemies, when translated, are Chaser, Ambusher, Fickle, and Stupid.<sup><a href='http://en.wikipedia.org/wiki/Pac-Man' target='_blank'>[1]</a></sup>";
technologyFactsList[33]="Interactive urinals have been developed in several countries, allowing users to play video games while they urinate.<sup><a href='http://en.wikipedia.org/wiki/Interactive_urinal' target='_blank'>[1]</a></sup>";
technologyFactsList[34]="Sonic the Hedgehog's blue pigmentation comes from Sega's cobalt blue logo, his shoes were inspired by Michael Jackson's boots, and his personality was based on Bill Clinton's \"can-do\" attitude.<sup><a href='http://en.wikipedia.org/wiki/Sega_Genesis' target='_blank'>[1]</a></sup>";
technologyFactsList[35]="The Atari 2600 game <i>E.T. the Extra-Terrestrial</i>, considered one of the worst video games of all time, was among the ten to twenty semi-trailer truckloads of games buried by Atari in the \"" + (includeImage('Atari video game burial', 'et.jpg')) + "\" in Alamogordo, New Mexico, in 1983.<sup><a href='https://en.wikipedia.org/wiki/E.T._the_Extra-Terrestrial_(video_game)' target='_blank'>[1]</a></sup>";
technologyFactsList[36]="The first Nintendo game to feature Luigi as the lone main character was <i>Mario is Missing!</i>, released in 1992. This did not happen again until <i>Luigi's Mansion</i> in 2001.<sup><a href='http://en.wikipedia.org/wiki/Mario_Is_Missing' target='_blank'>[1]</a></sup>";
technologyFactsList[37]="The Sony PlayStation was originally an add-on peripheral for the Super Nintendo, called Play Station, which allowed the SNES to play a CD format called " + (includeImage('SNES-CD', 'snes-cd.jpg')) + ".  After Nintendo broke their contract with Sony in favor of their rival Philips, Sony eventually created their own video game system.<sup><a href='http://en.wikipedia.org/wiki/SNES-CD' target='_blank'>[1]</a></sup>";
technologyFactsList[38]="Nintendo's first attempt at a 3D gaming system was the " + (includeImage('Virtual Boy', 'virtualboy.jpg')) + " in 1995, which was considered a commercial failure as it sold less than 800,000 units, lacked portability, had poor wireframe monochromatic graphics, was overpriced, and sometimes caused painful physiological symptoms. It was discontinued after just 7 months.<sup><a href='http://en.wikipedia.org/wiki/Virtual_Boy' target='_blank'>[1]</a></sup>";
technologyFactsList[39]="Amazon released the " + (includeImage('first Kindle', 'kindle.jpg')) + " in November 2007, for $399. It sold out in five and a half hours and remained out of stock for five months until late April 2008.<sup><a href='https://en.wikipedia.org/wiki/Amazon_Kindle' target='_blank'>[1]</a></sup>";

	/*  --          Television/Film list          --  */
var televisionFactsList = new Array;
televisionFactsList[0]="The TV show <i>Seinfeld</i> was originally titled <i>Stand Up</i>, then re-titled <i>The Seinfeld Chronicles</i>, before settling on just <i>Seinfeld</i>.<sup><a href='http://en.wikipedia.org/wiki/The_Seinfeld_Chronicles' target='_blank'>[1]</a></sup>";
televisionFactsList[1]="Kramer, Jerry's friend and neighbor on <i>Seinfeld</i>, was originally named Kessler in the show's pilot.<sup><a href='http://en.wikipedia.org/wiki/The_Seinfeld_Chronicles' target='_blank'>[1]</a></sup>";
televisionFactsList[2]="Bill Murray's part in <i>Zombieland</i> was originally also considered for Sylvester Stallone, Joe Pesci, Mark Hamill, Dwayne Johnson, Kevin Bacon, Jean-Claude Van Damme or Matthew McConaughey.<sup><a href='http://en.wikipedia.org/wiki/Zombieland' target='_blank'>[1]</a></sup>";
televisionFactsList[3]="The very last rental at Blockbuster was <i>This Is The End</i>, on November 9, 2013, in a store in Hawaii.<sup><a href='http://en.wikipedia.org/wiki/Blockbuster_LLC' target='_blank'>[1]</a></sup>";
televisionFactsList[4]="Jackie, Hyde, Donna, Fez, Red, and Kitty appeared in all 200 episodes of <i>That '70s Show</i>.<sup><a href='http://goo.gl/ctHoYO' target='_blank'>[1]</a></sup>";
televisionFactsList[5]="Matt Groening named the Simpsons family characters after his own family members, substituting \"Bart\" for his own name.<sup><a href='http://en.wikipedia.org/wiki/Simpson_family' target='_blank'>[1]</a></sup>";
televisionFactsList[6]="The working title of the TV show <i>The New Girl</i> was <i>Chicks & Dicks</i>.<sup><a href='http://en.wikipedia.org/wiki/New_Girl' target='_blank'>[1]</a></sup>";
televisionFactsList[7]="There is only 1 episode of 550+ episodes of <i>The Simpsons</i> to not feature (or even mention) Bart Simpson: season 20's \"Four Great Women and a Manicure\".<sup><a href='http://en.wikipedia.org/wiki/Four_Great_Women_and_a_Manicure' target='_blank'>[1]</a></sup>";
televisionFactsList[8]="Voice actor Billy West has played Bugs Bunny, Elmer Fudd, Fry and Dr. Zoidberg (<i>Futurama</i>), Doug Funnie (<i>Doug</i>), the red M&M, Popeye, Shaggy (<i>Scooby-Doo</i>), Tom (<i>Tom & Jerry</i>), Woody Woodpecker, and Ren and Stimpy.<sup><a href='http://en.wikipedia.org/wiki/Billy_West' target='_blank'>[1]</a></sup>";
televisionFactsList[9]="The 2008 film <i>Forgetting Sarah Marshall</i> was only \"60 or 70% scripted\", with the rest of the film being improv.<sup><a href='http://en.wikipedia.org/wiki/Forgetting_Sarah_Marshall' target='_blank'>[1]</a></sup>";
televisionFactsList[10]="The most-watched TV series finale, <i>M*A*S*H</i>, had 105.9 million viewers. Followed by <i>Cheers</i>, <i>Seinfeld</i>, <i>Friends</i>, and <i>Magnum, P.I.</i><sup><a href='http://en.wikipedia.org/wiki/List_of_most_watched_television_broadcasts' target='_blank'>[1]</a></sup>";
televisionFactsList[11]="Despite popular perceptions, the cartoon yellow canary, Tweety, is actually male.<sup><a href='http://en.wikipedia.org/wiki/Tweety' target='_blank'>[1]</a></sup>";
televisionFactsList[12]="The movie <i>Honey, I Blew Up the Kid</i> was not originally a sequel to <i>Honey, I Shrunk the Kids</i>. It was a separate movie called <i>Big Baby</i>.<sup><a href='http://en.wikipedia.org/wiki/Honey,_I_Blew_Up_the_Kid' target='_blank'>[1]</a></sup>";
televisionFactsList[13]="Development of <i>Inception</i> began roughly 10 years before the film's release when Christopher Nolan wrote a treatment about dream-stealers.<sup><a href='http://en.wikipedia.org/wiki/Inception' target='_blank'>[1]</a></sup>";
televisionFactsList[14]="The first ever contestant to win the $1,000,000 prize on <i>Who Wants to be a Millionaire?</i> used his lifeline to call his dad to tell him he was going to win, instead of asking for help.<sup><a href='http://en.wikipedia.org/wiki/John_Carpenter_(game_show_contestant)' target='_blank'>[1]</a></sup>";
televisionFactsList[15]="<i>Survivor</i>'s first season winner Richard Hatch later appeared on the Australian version of <i>Who Wants to be a Millionaire?</i>, and won $0, answering his fourth question wrong.<sup><a href='http://en.wikipedia.org/wiki/Who_Wants_to_Be_a_Millionaire%3F_(Australian_game_show)' target='_blank'>[1]</a></sup>";
televisionFactsList[16]="In the pilot episode of the US version of <i>The Office</i>, 3 unnamed women and 1 unnamed man appear in the episode and are not seen in any other episode.<sup><a href='http://en.wikipedia.org/wiki/Pilot_(The_Office)' target='_blank'>[1]</a></sup>";
televisionFactsList[17]="The initial proposed name for the TV show <i>Law & Order: SVU</i> was <i>Law and Order: Sex Crimes</i>.<sup><a href='http://en.wikipedia.org/wiki/Law_%26_Order:_Special_Victims_Unit' target='_blank'>[1]</a></sup>";
televisionFactsList[18]="The film <i>50/50</i> was originally titled <i>I'm With Cancer</i>, and then, <i>Live With It</i>, before settling on <i>50/50</i>.<sup><a href='http://en.wikipedia.org/wiki/50/50_(2011_film)' target='_blank'>[1]</a></sup>";
televisionFactsList[19]="Ben Wyatt's character and story on <i>Parks and Recreation</i> was an original idea for the pilot of the show, until Leslie Knope was created.<sup><a href='http://en.wikipedia.org/wiki/Ben_Wyatt_(Parks_and_Recreation)' target='_blank'>[1]</a></sup>";
televisionFactsList[20]="Lyndsey Fonseca and David Henrie, who play Ted's kids in 2030 on <i>How I Met Your Mother</i>, auditioned for Katniss and Peeta in <i>The Hunger Games</i>.<sup><a href='http://en.wikipedia.org/wiki/The_Hunger_Games_(film_series)' target='_blank'>[1]</a></sup>";
televisionFactsList[21]="In <i>The Simpsons</i> episode \"Homer at the Bat\", Jose Canseco (playing himself) was originally supposed to wake up in bed with Edna Krabappel and miss the game. However, Canseco's wife objected and the part was rewritten.<sup><a href='http://en.wikipedia.org/wiki/Homer_at_the_Bat' target='_blank'>[1]</a></sup>";
televisionFactsList[22]="In the season 8 finale of <i>Scrubs</i>, the Janitor's real name was finally revealed: Glenn Matthews. This was later confirmed by show creator Bill Lawrence.<sup><a href='http://en.wikipedia.org/wiki/Janitor_(Scrubs)' target='_blank'>[1]</a></sup>";
televisionFactsList[23]="The character Tuco (played by Raymond Cruz) on <i>Breaking Bad</i> was killed off because the actor found the part too difficult to play.<sup><a href='http://en.wikipedia.org/wiki/Kill_off' target='_blank'>[1]</a></sup>";
televisionFactsList[24]="After 25 seasons of Bart Simpson being in 4th grade, season 26 of The Simpsons finally has him in his first day of 5th grade.<sup><a href='http://en.wikipedia.org/wiki/The_Simpsons_(season_26)' target='_blank'>[1]</a></sup>";
televisionFactsList[25]="Brad Pitt voluntarily visited a dentist to have pieces of his front teeth chipped off for his role in <i>Fight Club</i>.<sup><a href='http://en.wikipedia.org/wiki/Fight_Club' target='_blank'>[1]</a></sup>";
televisionFactsList[26]="Among the numerous spinoffs of <i>The Brady Bunch</i>, an hour-long drama spinoff called <i>The Bradys</i> was aired in 1990, lasting only 6 episodes. All of the main cast returned for the show except for Maureen McCormick (the original Marcia).<sup><a href='http://en.wikipedia.org/wiki/The_Bradys' target='_blank'>[1]</a></sup>";
televisionFactsList[27]="One of the original pairs of ruby slippers that Dorothy wore in <i>The Wizard of Oz</i> sold at an auction in 2000 for $666,000.<sup><a href='http://en.wikipedia.org/wiki/The_Wizard_of_Oz_(1939_film)' target='_blank'>[1]</a></sup>";
televisionFactsList[28]="Anne Dudek played Precious on <i>Friends</i> and Natalie on <i>How I Met Your Mother</i>; both shows feature her character getting dumped by a main character on her birthday.<sup><a href='http://en.wikipedia.org/wiki/Return_of_the_Shirt' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Anne_Dudek' target='_blank'>[2]</a></sup>";
televisionFactsList[29]="Mike \"Boogie\" Malin, winner of <i>Big Brother 7</i>, was a stand-in for Matthew Perry on <i>Friends</i>.<sup><a href='http://en.wikipedia.org/wiki/Mike_Malin_(Big_Brother)' target='_blank'>[1]</a></sup>";
televisionFactsList[30]="In 2008, a large fire broke out in Universal Studios' backlots, destroying over 40,000 archived digital film copies, including <i>Knocked Up</i>, <i>Law & Order</i>, <i>The Office</i>, <i>Miami Vice</i>, & <i>I Love Lucy</i>.<sup><a href='http://en.wikipedia.org/wiki/Universal_Studios_Hollywood' target='_blank'>[1]</a></sup>";
televisionFactsList[31]="After a near-fatal car accident, Mel Blanc returned to his voice role of Barney Rubble sooner than expected when the entire cast of <i>The Flintstones</i> had a temporary recording studio set up at his bedside.<sup><a href='http://en.wikipedia.org/wiki/The_Flintstones' target='_blank'>[1]</a></sup>";
televisionFactsList[32]="In 1962, <i>The Jetsons</i> cartoon series featured several inventions that didn't exist, but are in common use today: flat screen 3D TV's, newspaper on a tablet, a computer virus, video chat, a tanning bed, and a treadmill.<sup><a href='http://en.wikipedia.org/wiki/The_Jetsons' target='_blank'>[1]</a></sup>";
televisionFactsList[33]="In the original plan for the <i>Lost</i> pilot, Jack was supposed to die instead of the airplane pilot and Kate was to emerge as the leader of the group.<sup><a href='http://en.wikipedia.org/wiki/Pilot_(Lost)' target='_blank'>[1]</a></sup>";
televisionFactsList[34]="The show <i>Futurama</i> was named after a pavilion in the 1939 World's Fair, which depicted what the world would be like in 1959. Other considered titles were <i>Aloha, Mars!</i> and <i>Doomsville</i>.<sup><a href='http://en.wikipedia.org/wiki/Futurama' target='_blank'>[1]</a></sup>";
televisionFactsList[35]="Ross Geller's nicknames on <i>Friends</i> include: Ross-A-Tron, Tyrannosaurus Ross, Rossie, Ross - The Divorce Force, Ross - The Divorcer, Red Ross, Dr. Geller, Wet Pants Geller, Two Divorces, Mental Geller, Bea, Dinosaur Guy, Dr. Monkey, Bridesboy, Cookie-Dude, Clifford Alvarez, Ron, Prof. Geller, Ginger, Magellan, Wet-Head, Mr. Big Shot, Pampers, Bobo the sperm guy, and Mr. Right Place At The Right Time.<sup><a href='http://en.wikipedia.org/wiki/Ross_Geller' target='_blank'>[1]</a></sup>";
televisionFactsList[36]="Considered to be one of the worst sitcoms of all time, Lucille Ball's last sitcom <i>Life with Lucy</i> aired when she was 75 years old.<sup><a href='http://en.wikipedia.org/wiki/List_of_sitcoms_notable_for_negative_reception' target='_blank'>[1]</a></sup>";
televisionFactsList[37]="<i>Futurama</i> character Zoidberg was named after an Apple II game David X. Cohen (the show's co-developer) created in high school.<sup><a href='http://en.wikipedia.org/wiki/Zoidberg' target='_blank'>[1]</a></sup>";
televisionFactsList[38]="The show <i>It's Always Sunny in Philadelphia</i> started out as a short film idea about a man telling his friend he might have cancer, while the friend is only intent on borrowing a cup of sugar for the \"shitload of coffee\" he has made.<sup><a href='http://en.wikipedia.org/wiki/It%27s_Always_Sunny_in_Philadelphia' target='_blank'>[1]</a></sup>";
televisionFactsList[39]="When Fonzie jumped the shark (also creating the popular term, jumping the shark) in the season 5 premiere of <i>Happy Days</i>, the stunt was a way to showcase Henry Winkler's real life waterskiing skills.<sup><a href='http://en.wikipedia.org/wiki/Jumping_the_shark' target='_blank'>[1]</a></sup>";
televisionFactsList[40]="Due to Philip Seymour Hoffman's death in February 2014, his character in <i>Mockingjay Part 2</i>, Plutarch Heavensbee, was digitally recreated for a major scene, and some of his lines were rewritten and given to other characters.<sup><a href='http://en.wikipedia.org/wiki/The_Hunger_Games:_Mockingjay_-_Part_2' target='_blank'>[1]</a></sup>";
televisionFactsList[41]="<i>Rocko's Modern Life</i> creator Joe Murray thought of the idea for the show after visiting a zoo and observing a wallaby that seemed oblivious to the chaos around him.<sup><a href='http://goo.gl/Zs2T5O' target='_blank'>[1]</a></sup>";
televisionFactsList[42]="The ampersand (&amp;) and the word \"and\" mean two different things in film credits: The ampersand indicates two writers collaborating on a script, while \"and\" indicates that one person wrote the script/screenplay, and one rewrote it or worked on it at a different time.<sup><a href='http://en.wikipedia.org/wiki/Ampersand' target='_blank'>[1]</a></sup>";
televisionFactsList[43]="In 26 seasons of <i>The Simpsons</i>, the show has only had 13 Christmas-themed episodes (plus 1 <i>Tracy Ullman</i> short).<sup><a href='http://en.wikipedia.org/wiki/List_of_United_States_Christmas_television_episodes' target='_blank'>[1]</a></sup>";
televisionFactsList[44]="The 1995 film <i>Bushwacked</i> was originally intended to be a spinoff of <i>Home Alone</i>, with Daniel Stern reprising his role as Marv, giving up his life of crime only to be framed at his new job.<sup><a href='http://en.wikipedia.org/wiki/Home_Alone' target='_blank'>[1]</a></sup>";
televisionFactsList[45]="There are several instances where the word \"fuck\" is used in a PG-rated film: including <i>All the President's Men</i>, <i>The Front</i>, <i>Tootsie</i>, <i>Terms of Endearment</i>, <i>Sixteen Candles</i>, <i>Spaceballs</i>, <i>Big</i>, <i>Caddyshack 2</i>, and <i>Beetlejuice</i>.<sup><a href='http://en.wikipedia.org/wiki/Motion_Picture_Association_of_America_film_rating_system' target='_blank'>[1]</a></sup>";
televisionFactsList[46]="The season 1 Pok&eacute;mon episode \"Tentacool and Tentacruel\" was removed from rotation temporarily in 2001, due to the similarity of the Tentacruel destroying buildings and the September 11th attacks. <sup><a href='http://en.wikipedia.org/wiki/PokÃ©mon_episodes_removed_from_rotation' target='_blank'>[1]</a></sup>";
televisionFactsList[47]="Ed O'Neill, known for his roles as Al Bundy on <i>Married... With Children</i> and Jay Pritchett on <i>Modern Family</i>, was a high school social studies teacher before becoming an actor.<sup><a href='http://en.wikipedia.org/wiki/Ed_O%27Neill' target='_blank'>[1]</a></sup>";
televisionFactsList[48]="During the ten season run of the TV show <i>Friends</i>, five of the six main characters are shown drunk in at least one episode. The exception is Joey, who is never shown drunk.<sup><a href='http://en.wikipedia.org/wiki/Friends_(season_1)' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Friends_(season_2)' target='_blank'>[2]</a><a href='http://en.wikipedia.org/wiki/Friends_(season_3)' target='_blank'>[3]</a><a href='http://en.wikipedia.org/wiki/Friends_(season_5)' target='_blank'>[4]</a><a href='http://en.wikipedia.org/wiki/The_One_with_the_Proposal' target='_blank'>[5]</a></sup>";
televisionFactsList[49]="The National Lampoon's <i>Vacation</i> film series features 5 different actors playing the role of Rusty and 5 different actresses playing Audrey, in the 5 theatre-released films.<sup><a href='http://en.wikipedia.org/wiki/National_Lampoon%27s_Vacation_(film_series)' target='_blank'>[1]</a></sup>";
televisionFactsList[50]="The term \"soap opera\" comes from the soap and detergent commercials that were originally broadcast during the first soap operas, aimed at the women who were cleaning their houses while watching them.<sup><a href='http://en.wikipedia.org/wiki/Soap_opera' target='_blank'>[1]</a></sup>";
televisionFactsList[51]="Over the course of 26 seasons of their show, the Simpsons family have owned the following pets: two dogs (Santa's Little Helper and Laddie), five cats (Snowball I, Snowball II, Snowball III, Coltrane, Snowball V), an elephant (Stampy), a snake (Strangles), a guinea pig (Pokey), a horse (Princess), and a lobster (Pinchy).<sup><a href='http://en.wikipedia.org/wiki/Simpson_family' target='_blank'>[1]</a></sup>";
televisionFactsList[52]="For the role of <i>Friends</i> character Gunther, James Michael Tyler was cast because he was the only extra who could competently work the coffee machine on the set. He ended up appearing in the most episodes (148 out of 236) besides the main cast.<sup><a href='http://en.wikipedia.org/wiki/List_of_Friends_characters' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/James_Michael_Tyler' target='_blank'>[2]</a></sup>";
televisionFactsList[53]="Ruth Cohen, who plays the cashier at Monk's Cafe on <i>Seinfeld</i>, appears in the most episodes (101 out of 180) besides the main cast.<sup><a href='http://en.wikipedia.org/wiki/Ruth_Cohen' target='_blank'>[1]</a></sup>";
televisionFactsList[54]="As of 2016, the longest running scripted television series are <i>The Simpsons</i> (currently in its 27th season), <i>Gunsmoke</i> (lasted 20 seasons), <i>Law &amp; Order</i> (lasted 20 seasons), <i>Lassie</i> (lasted 19 seasons), and <i>South Park</i> (currently in its 19th season).<sup><a href='http://en.wikipedia.org/wiki/List_of_longest-running_U.S._primetime_television_series' target='_blank'>[1]</a></sup>";
televisionFactsList[55]="The original plan for season 6 of <i>The Brady Bunch</i> was to use Carol's previous husband as a mechanism to replace Robert Reed (who was constantly unhappy with the show's scripts) in season 6. However the show was canceled after its fifth season.<sup><a href='http://en.wikipedia.org/wiki/Characters_of_The_Brady_Bunch' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Robert_Reed' target='_blank'>[2]</a></sup>";
televisionFactsList[56]="Scenes for an episode of <i>Entourage</i> were shot on location at a 2005 U2 concert. Similarly, scenes for the <i>Entourage</i> film were shot on location at the 72nd Golden Globe Awards.<sup><a href='http://en.wikipedia.org/wiki/City_of_Blinding_Lights' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/Entourage_(film)' target='_blank'>[2]</a></sup>";
televisionFactsList[57]="<i>Taken</i> actor Liam Neeson turned down the role of James Bond in 1995's <i>Goldeneye</i> because he wasn't interested in starring in action movies.<sup><a href='http://en.wikipedia.org/wiki/List_of_actors_considered_for_the_James_Bond_character' target='_blank'>[1]</a></sup>";
televisionFactsList[58]="<i>American Sniper</i> producer and star Bradley Cooper had originally thought of actor Chris Pratt to play the lead role of Chris Kyle, but WB agreed to buy the film only if Bradley Cooper would star.<sup><a href='http://en.wikipedia.org/wiki/American_Sniper_(film)' target='_blank'>[1]</a></sup>";
televisionFactsList[59]="Having trouble selling <i>The Terminator</i> to production companies, the then inexperienced James Cameron eventually sold the screenplay for one dollar, on the condition that Cameron direct the film.<sup><a href='http://en.wikipedia.org/wiki/James_Cameron' target='_blank'>[1]</a></sup>";
televisionFactsList[60]="Steve Carell and all other cast members of <i>The Office</i> \"flat-out lied\" for months about Carell not returning to the finale episode of the show in any capacity. His lines were even left out of the initial table read for the episode.<sup><a href='http://en.wikipedia.org/wiki/Finale_(The_Office)' target='_blank'>[1]</a></sup>";
televisionFactsList[61]="<i>Community</i> creator Dan Harmon created the TV series basing it off his own life. He enrolled in a community college to save his relationship with his girlfriend, and ended up bonding with a study group he had little in common with.<sup><a href='http://en.wikipedia.org/wiki/Community_(TV_series)' target='_blank'>[1]</a></sup>";
televisionFactsList[62]="Starting in 2014, boxer Mike Tyson starred in an animated TV series which featured himself and his friends solving mysteries (similar to <i>Scooby-Doo</i>, among other silly things such as taking an oatmeal bath with cooked oatmeal, owning a pet grizzly bear, and using mosquitoes to help him sleep.<sup><a href='http://en.wikipedia.org/wiki/Mike_Tyson_Mysteries' target='_blank'>[1]</a></sup>";
televisionFactsList[63]="The first animated character to receive a star on the Hollywood Walk of Fame was Mickey Mouse in 1978. Since then, others including Bugs Bunny, The Simpsons, and Snow White have also received a star.<sup><a href='http://en.wikipedia.org/wiki/Hollywood_Walk_of_Fame'target='_blank'>[1]</a></sup>";
televisionFactsList[64]="Actor Ed O'Neill's star on the Hollywood Walk of Fame lies in front of a shoe store, a deliberate reference to his character's profession on <i>Married... With Children</i>.<sup><a href='http://en.wikipedia.org/wiki/Hollywood_Walk_of_Fame' target='_blank'>[1]</a></sup>";
televisionFactsList[65]="<i>The Fast and the Furious</i> film series changes its naming system with each film released: <i>The Fast and the Furious</i>, <i>2 Fast 2 Furious</i>, <i>The Fast and the Furious: Tokyo Drift</i>, <i>Fast & Furious</i>, <i>Fast Five</i>, <i>Fast & Furious 6</i>, and <i>Furious 7</i>. <sup><a href='http://en.wikipedia.org/wiki/The_Fast_and_the_Furious' target='_blank'>[1]</a></sup>";
televisionFactsList[66]="<i>Lord of the Rings</i> actor Sean Bean's fear of flying in helicopters caused him difficulties when filming in New Zealand. In one instance, he took a ski lift into the mountains while wearing his full costume, and hiked the final few miles to the filming location.<sup><a href='http://en.wikipedia.org/wiki/Sean_Bean' target='_blank'>[1]</a></sup>";
televisionFactsList[67]="The staff of Pixar came up with the original ideas for <i>WALL-E</i>, <i>A Bug's Life</i>, and <i>Monsters Inc.</i> all during one lunch in 1994.<sup><a href='http://en.wikipedia.org/wiki/WALL-E' target='_blank'>[1]</a></sup>";
televisionFactsList[68]="Throughout Eileen Fulton's 50-year tenure on the soap opera <i>As the World Turns</i>, her character Lisa Grimaldi had 8 spouses.<sup><a href='http://en.wikipedia.org/wiki/Lisa_Grimaldi' target='_blank'>[1]</a></sup>";
televisionFactsList[69]="<i>CBS Evening News</i> has aired over 16,400 episodes, dating back to May 3, 1948.<sup><a href='http://en.wikipedia.org/wiki/List_of_longest-running_United_States_television_series' target='_blank'>[1]</a></sup>";
televisionFactsList[70]="As of 2016, <i>Spongebob Squarepants</i> is the only remaining Nickelodeon show that debuted before the year 2000.<sup><a href='http://en.wikipedia.org/wiki/List_of_longest-running_United_States_television_series' target='_blank'>[1]</a></sup>";
televisionFactsList[71]="In <i>Grey's Anatomy</i>, only 4 of the main characters have appeared in all 12 seasons of the show: Meredith, Alex, Dr. Bailey, and Richard. Also appearing in all 12 seasons is the recurring character, Bokhee the scrub nurse.<sup><a href='http://en.wikipedia.org/wiki/List_of_Grey%27s_Anatomy_cast_members' target='_blank'>[1]</a></sup>";
televisionFactsList[72]="None of the main cast of <i>ER</i> appeared in all of the show's 15 seasons. Laura Innes' character Kerry Weaver appeared in 13 seasons, the most of any main cast member.<sup><a href='http://en.wikipedia.org/wiki/Cast_of_ER' target='_blank'>[1]</a></sup>";
televisionFactsList[73]="Starting with its 8th season, <i>Aqua Teen Hunger Force</i> changed its series title with each new season: <i>Aqua Unit Patrol Squad 1</i> was season 8's title, <i>Aqua Something You Know Whatever</i> for season 9, and <i>Aqua TV Show Show</i> for season 10.<sup><a href='http://en.wikipedia.org/wiki/Aqua_Teen_Hunger_Force' target='_blank'>[1]</a></sup>";
televisionFactsList[74]="Kel Mitchell, of <i>All That</i> and <i>Kenan & Kel</i> fame, also auditioned for <i>SNL</i> but lost the part to Kenan Thompson.<sup><a href='http://en.wikipedia.org/wiki/Kel_Mitchell' target='_blank'>[1]</a></sup>";
televisionFactsList[75]="The \"Censored Eleven\" is a group of <i>Looney Tunes</i> and <i>Merrie Melodies</i> cartoons that were withheld from syndication in 1968, due to heavy use of offensive racial stereotypes that were too prevalent to just be edited out.<sup><a href='http://en.wikipedia.org/wiki/Censored_Eleven' target='_blank'>[1]</a></sup>";
televisionFactsList[76]="At least 350 lives have been saved by knowledge gained from viewers watching <i>Rescue 911</i>, a CBS television series which featured recordings and reenactments of situations involving 9-1-1 calls.<sup><a href='http://en.wikipedia.org/wiki/Rescue_911' target='_blank'>[1]</a></sup>";
televisionFactsList[77]="\"The Finale\", <i>Seinfeld</i>'s last episode, commanded approximately $1 million for a 30-second commercial, marking the first time a regular primetime television series had that high of an advertising rate.<sup><a href='http://en.wikipedia.org/wiki/The_Finale_(Seinfeld)' target='_blank'>[1]</a></sup>";
televisionFactsList[78]="When \"The Finale\", <i>Seinfeld</i>'s last episode originally aired, TV Land paid tribute by not airing any shows opposite it, instead showing a still shot of a closed office door with notes that read, \"We're TV Fans so... we're watching the last episode of Seinfeld. Will return at 10pm et, 7pm pt.\".<sup><a href='http://en.wikipedia.org/wiki/The_Finale_(Seinfeld)' target='_blank'>[1]</a></sup>";
televisionFactsList[79]="The first episode of season 7 of <i>Roseanne</i> only listed the first names of all cast and crew in the credits, in celebration of Roseanne's real life divorce with Tom Arnold and dropping his last name.<sup><a href='http://en.wikipedia.org/wiki/The_Finale_(Seinfeld)' target='_blank'>[1]</a></sup>";
televisionFactsList[80]="When casting for the main lead in <i>The Wonder Years</i>, the show's creators interviewed 5 casting directors, all of whom recommended Fred Savage for the role.<sup><a href='http://en.wikipedia.org/wiki/The_Wonder_Years' target='_blank'>[1]</a></sup>";
televisionFactsList[81]="James Cameron's <i>Titanic</i> was the highest-grossing film for 12 years before it was surpassed by James Cameron's <i>Avatar</i> in 2009.<sup><a href='http://en.wikipedia.org/wiki/List_of_highest-grossing_films' target='_blank'>[1]</a></sup>";
televisionFactsList[82]="Actor John Ratzenberger appears in all of the first 15 Pixar films: Hamm the Piggy Bank in the <i>Toy Story</i> series, P.T. Flea in <i>A Bug's Life</i>, The Abominable Snowman in the <i>Monsters, Inc.</i> series, the school of moonfish in the <i>Finding Nemo</i> series, The Underminer in <i>The Incredibles</i>, Mack the Truck in the <i>Cars</i> series, Mustafa the waiter in <i>Ratatouille</i>, John in <i>WALL-E</i>, Tom the construction worker in <i>Up</i>, Gordon the guard in <i>Brave</i>, and Fritz in <i>Inside Out</i>.<sup><a href='https://en.wikipedia.org/wiki/John_Ratzenberger' target='_blank'>[1]</a></sup>";
televisionFactsList[83]="To create raptor sounds in the film <i>Jurassic Park</i>, dolphin screams, walruses bellowing, geese hissing, an African crane's mating call, tortoises mating, and human rasps were mixed together.<sup><a href='https://en.wikipedia.org/wiki/Jurassic_Park_(film)' target='_blank'>[1]</a></sup>";
televisionFactsList[84]="Cory Matthews and Shawn Hunter were the only characters who appeared in all 158 episodes of <i>Boy Meets World</i>.<sup><a href='http://en.wikipedia.org/wiki/Boy_Meets_World' target='_blank'>[1]</a></sup>";
televisionFactsList[85]="Between seasons 18 and 19 of <i>The Simpsons</i>, the Simpsons' house is destroyed in a sinkhole in <i>The Simpsons Movie</i>. The house is seen under construction and being rebuilt in the opening sequence in the 19th season's first episode as a callback to the film.<sup><a href='http://en.wikipedia.org/wiki/The_Simpsons_house' target='_blank'>[1]</a><a href='http://en.wikipedia.org/wiki/He_Loves_to_Fly_and_He_D%27ohs' target='_blank'>[2]</a></sup>";
televisionFactsList[86]="3 different actors protrayed Charlie Harper in the show <i>Two and a Half Men</i>: Charlie Sheen (177 episodes), Kathy Bates (1 episode, as Charlie's ghost), and an uncredited actor (1 episode, the series finale – only shown from behind).<sup><a href='http://en.wikipedia.org/wiki/List_of_Two_and_a_Half_Men_characters' target='_blank'>[1]</a></sup>";
televisionFactsList[87]="Mary-Kate Olsen, Ashley Olsen, and John Stamos all appeared in an episode of <i>Hangin' with Mr. Cooper</i> as their <i>Full House</i> characters Michelle Tanner and Uncle Jesse.<sup><a href='http://en.wikipedia.org/wiki/Hangin%27_with_Mr._Cooper' target='_blank'>[1]</a></sup>";
televisionFactsList[88]="Rather than taking their usual salary for the film <i>Twins</i>, Arnold Schwarzenegger and Danny DeVito agreed with the studio to take 20% of the film's box office, which resulted in them receiving the biggest paychecks of their movie careers.<sup><a href='http://en.wikipedia.org/wiki/Twins_(1988_film)' target='_blank'>[1]</a></sup>";
televisionFactsList[89]="The dog Buddy, who played the <i>Full House</i> family dog Comet throughout the entire run of the show, also played the dog Buddy in the film <i>Air Bud</i>.<sup><a href='http://en.wikipedia.org/wiki/Air_Buddy_(dog)' target='_blank'>[1]</a></sup>";
televisionFactsList[90]="Russi Taylor, the voice of Minnie Mouse, was married to Wayne Allwine, the voice of Mickey Mouse, from 1991 until Allwine's death in 2009.<sup><a href='http://en.wikipedia.org/wiki/Minnie_Mouse' target='_blank'>[1]</a></sup>";
televisionFactsList[91]="A short lived children's television show called <i>Rubik, the Amazing Cube</i>, featured a magic Rubik's Cube named Rubik who could fly through the air. Rubik could only come to life when its colored sides matched up.<sup><a href='http://en.wikipedia.org/wiki/Rubik,_the_Amazing_Cube' target='_blank'>[1]</a></sup>";
televisionFactsList[92]="An early idea for the show <i>Animaniacs</i> had the " + (includeImage('Warner siblings as duck characters', 'animaniacs.jpg')) + ", rather than the dog-like characters that Yakko, Wakko, and Dot came to be in the finished version of the show.<sup><a href='http://en.wikipedia.org/wiki/Animaniacs' target='_blank'>[1]</a></sup>"
televisionFactsList[93]="The first season of <i>Animaniacs</i> was 65 episodes long, followed by season 2 which was only 4 episodes, and put together from unused scripts.<sup><a href='http://en.wikipedia.org/wiki/Animaniacs' target='_blank'>[1]</a></sup>"
televisionFactsList[94]="Scott Weigner, the voice of Aladdin in the film <i>Aladdin</i>, sent in a homemade audition tape with his mother playing the genie, and after several callbacks, he secured the role.<sup><a href='http://en.wikipedia.org/wiki/Aladdin_(1992_Disney_film)' target='_blank'>[1]</a></sup>"
televisionFactsList[95]="On April 21, 1990, an animated drug-abuse prevention television special aired on all four major networks (ABC, NBC, Fox, CBS) as well as many independent stations and cable networks. It included characters from 10 different franchises, such as Winnie the Pooh, Looney Tunes, The Smurfs, and Teenage Mutant Ninja Turtles.<sup><a href='http://en.wikipedia.org/wiki/Cartoon_All-Stars_to_the_Rescue' target='_blank'>[1]</a></sup>";
televisionFactsList[96]="In the show <i>Taxi</i>, Danny DeVito's character Louie has a girlfriend who is played by his real life wife Rhea Perlman, and a mother who is played by his real life mother.<sup><a href='http://en.wikipedia.org/wiki/Taxi_(TV_series)' target='_blank'>[1]</a></sup>";
televisionFactsList[97]="Rather than the usual repeated lines that Bart Simpson writes as punishment, the 25th season episode \"Four Regrettings and a Funeral\" opening had Bart write \"We'll really miss you Mrs. K\", just once. This is in reference to the voice of Edna Krabapple, Marcia Wallace's recent death.<sup><a href='http://en.wikipedia.org/wiki/The_Simpsons_opening_sequence' target='_blank'>[1]</a></sup>";
televisionFactsList[98]="In response to <i>The Simpsons</i> episode \"Brother's Little Helper\", where Bart is diagnosed with ADHD, U.S. President Bill Clinton held the first ever White House conference on Mental Health.<sup><a href='https://en.wikipedia.org/wiki/Brother%27s_Little_Helper' target='_blank'>[1]</a></sup>";
televisionFactsList[99]="The Comedy Central television series <i>Drunk History</i> was inspired by a 2007 conversation that creator Derek Waters had with <i>New Girl</i> actor Jake Johnson, who drunkenly tried to explain Otis Reddings' death to Waters. Johnson later appeared in multiple episodes of the show after it started in 2013.<sup><a href='http://en.wikipedia.org/wiki/Jake_Johnson' target='_blank'>[1]</a></sup>";
televisionFactsList[100]="Jaleel White, who played Steve Urkel in <i>Family Matters</i>, also appeared as his character Steve Urkel in <i>Full House</i>, <i>Step by Step</i>, and <i>Meego</i>. In <i>Family Matters</i> he also sends a chain letter to his friend Cory Matthews, who lived in Philadelphia, referencing a crossover to the series <i>Boy Meets World</i>.<sup><a href='http://en.wikipedia.org/wiki/Steve_Urkel' target='_blank'>[1]</a></sup>";


	/*  --          User-submitted list          --  */
var userSubmittedFactsList = ["food18","history19","music9","television47","pop20", "pop24","history24","pop31","technology23","technology24","television59","food22","pop43","pop46", "television98"];

	/*  --          Pictures list          --  */
var picturesFactsList = ["history1","history16","pop8","pop37","history22","history29","sports22","music17","music23","pop49", "technology35","technology37","technology38", "television92", "food34", "technology39"];

	/*  --          Most used Wiki page list          --  */
var mostFactsList = ["music21","pop18","pop19","television63","television64"];

	/*  --          Retired list           --    */
var retiredFactsList = new Array;
retiredFactsList[0]="The word for \"second-to-last\" is <i>penultimate</i>, from Latin <i>paene</i> (\"almost\") + <i>ultimus</i> (\"last\"). Similarly, third-to-last is <i>antepenultimate</i>, fourth-to-last is <i>preantepenultimate</i>, and fifth-to-last is <i>propreantepenultimate</i>.<sup><a href='http://en.wiktionary.org/wiki/penultimate' target='_blank'>[1]</a></sup>";


/*  --          Featured facts section          --  */
	
	var featuredFacts = [
		{
			'ffNumber': '1',
			'theFact': sportsFactsList[9],
			'filter': 'Sports',
			'bgImage': 'nolanryan.jpg',
			'altTag': 'Nolan Ryan pitching',
			'gradient': '#064b91',
			'height': '20%',
			'textColor': '#fff'
		},
		{
			'ffNumber': '2',
			'theFact': popFactsList[27],
			'filter': 'Pop Culture',
			'bgImage': 'mj-wheaties.jpg',
			'altTag': 'Michael Jordan in front of giant Wheaties box',
			'gradient': '#ff5f36',
			'height': '40%',
			'textColor': '#fff'
		},
		{
			'ffNumber': '3',
			'theFact': historyFactsList[4],
			'filter': 'History',
			'bgImage': 'moonlanding.jpg',
			'altTag': 'Gene Cernan on the moon',
			'gradient': '#444',
			'height': '40%',
			'textColor': '#fff'
		},
		{
			'ffNumber': '4',
			'theFact': popFactsList[52],
			'filter': 'Pop Culture',
			'bgImage': 'angrybirds.jpg',
			'altTag': 'Screenshot of Angry Birds iOS',
			'gradient': '#49aa33',
			'height': '40%',
			'textColor': '#fff'
		},
		{
			'ffNumber': '5',
			'theFact': televisionFactsList[23],
			'filter': 'TV &amp; Film',
			'bgImage': 'tuco.jpg',
			'altTag': 'Raymond Cruz as Tuco, in Breaking Bad',
			'gradient': '#bbc7d1',
			'height': '50%',
			'textColor': '#fff'
		},
		{
			'ffNumber': '6',
			'theFact': foodFactsList[13],
			'filter': 'Food &amp; Drink',
			'bgImage': 'pringles.jpg',
			'altTag': 'Asian Pringles cans',
			'gradient': '#56a8d4',
			'height': '60%',
			'textColor': '#fff'
		}


		


	];

/*  --          Unfiltered combined fact list          --  */

function giveafact(){ //instead of relisting all array items here, add all the other arrays to this one
// give a fact in main box
var factsList = foodFactsList.concat(musicFactsList,historyFactsList,popFactsList,sportsFactsList,technologyFactsList,televisionFactsList);
randomFact = Math.floor(Math.random()*factsList.length);
document.getElementById("fact").innerHTML=factsList[randomFact];
updateShareLinks();

//give a featured fact
var randomFeaturedFact = Math.floor(Math.random()*featuredFacts.length);
var randomff = featuredFacts[randomFeaturedFact];
var path = 'assets/featured/';
var ffImage = $('.ffimage').attr({'src': path + randomff.bgImage, 'alt': randomff.altTag});
$('.featfact').prepend(ffImage);
$('.ffcaption').html(randomff.theFact).css({'color': randomff.textColor, 'background': 'linear-gradient(to top, ' + randomff.gradient + ' ' + randomff.height + ', transparent'});

return false;

}

window.onload=giveafact;

function giveafactbutton(){ //instead of relisting all array items here, add all the other arrays to this one
// give a fact in main box
var factsList = foodFactsList.concat(musicFactsList,historyFactsList,popFactsList,sportsFactsList,technologyFactsList,televisionFactsList);
randomFact = Math.floor(Math.random()*factsList.length);
document.getElementById("fact").innerHTML=factsList[randomFact];
updateShareLinks();
}

	/*  --          Update the Twitter share link          --  */

function updateShareLinks() {
	var factText = $('#fact').text(); // Gets the fact text
	var factStr = factText.toString(); // Converts text to string
	var trimSpot = factStr.indexOf("["); // Finds the start of the fact sources 
	var trimmedFact = factStr.slice(0, trimSpot); // Trims the source links
	
	// Update the Twitter link
	var linkRefTW = "http://twitter.com/share?url=thewikifix.com&text=" + trimmedFact + "&hashtags=thewikifix";
	$('#shareLinkTwitter').attr('href', linkRefTW);

}

	/*  --          Generate unfiltered facts          --  */

function giveafoodfact() {
randomFoodFact = Math.floor(Math.random()*foodFactsList.length);
document.getElementById("fact").innerHTML=foodFactsList[randomFoodFact];
updateShareLinks();
}

function giveahistoryfact() {
randomHistoryFact = Math.floor(Math.random()*historyFactsList.length);
document.getElementById("fact").innerHTML=historyFactsList[randomHistoryFact];
updateShareLinks();
}

function giveamusicfact() {
randomMusicFact = Math.floor(Math.random()*musicFactsList.length);
document.getElementById("fact").innerHTML=musicFactsList[randomMusicFact];
updateShareLinks();
}

function giveapopculturefact() {
randomPopCultureFact = Math.floor(Math.random()*popFactsList.length);
document.getElementById("fact").innerHTML=popFactsList[randomPopCultureFact];
updateShareLinks();
}

function giveasportsfact() {
randomSportsFact = Math.floor(Math.random()*sportsFactsList.length);
document.getElementById("fact").innerHTML=sportsFactsList[randomSportsFact];
updateShareLinks();
}

function giveatechnologyfact() {
randomTechnologyFact = Math.floor(Math.random()*technologyFactsList.length);
document.getElementById("fact").innerHTML=technologyFactsList[randomTechnologyFact];
updateShareLinks();
}

function giveatelevisionfact() {
randomTelevisionFact = Math.floor(Math.random()*televisionFactsList.length);
document.getElementById("fact").innerHTML=televisionFactsList[randomTelevisionFact];
updateShareLinks();
}

// Activate mobile menu
$('.mobilemenu').click(function(){
	$('.mobilenav').toggle('slide');
	$(this).toggleClass('close');
});

$('.mobilenav a').click(function(){
	$('.mobilenav').hide();
	$('.mobilemenu').removeClass('close');
});

// Auto scroll
$('.mobilenav a[href*=#]').bind('click', function(e) {
	e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
       
	var target = $(this).attr("href"); //Get the target
			
	// perform animated scrolling by getting top-position of target-element and set it as scroll target
	$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1000, function() { //adjust - 48 if the header height changes
	     location.hash = target;  //attach the hash (#jumptarget) to the pageurl
	});
			
	return false;
   });


	/*  --          Stats section          --  */

$( document ).ready(function() {
	/* --    Input sentence stats   -- */
	var factsList = foodFactsList.concat(musicFactsList,historyFactsList,popFactsList,sportsFactsList,technologyFactsList,televisionFactsList);
	document.getElementById("total").innerHTML=factsList.length;
	document.getElementById("usertotal").innerHTML=userSubmittedFactsList.length;
	document.getElementById("pictotal").innerHTML=picturesFactsList.length;	
	document.getElementById("retiredtotal").innerHTML=retiredFactsList.length;	
	document.getElementById("mosttotal").innerHTML=mostFactsList.length;
	
	/* --    Build the chart    -- */	
	var multiplier = 2;
	var tvmultiplier = 1.6;
	var foodbar = foodFactsList.length * multiplier + "px";
	var histbar = historyFactsList.length * multiplier + "px";
	var musicbar = musicFactsList.length * multiplier + "px";
	var popbar = popFactsList.length * multiplier + "px";
	var sportsbar = sportsFactsList.length * multiplier + "px";
	var techbar = technologyFactsList.length * multiplier + "px";
	var tvbar = televisionFactsList.length * tvmultiplier + "px";
	
	$("#fooddrinksbar").css("width", foodbar);
	$("#historybar").css("width", histbar);
	$("#musicbar").css("width", musicbar);
	$("#popbar").css("width", popbar);
	$("#sportsbar").css("width", sportsbar);
	$("#techbar").css("width", techbar);
	$("#tvfilmbar").css("width", tvbar);	
	
	$("#foodtotal").html(foodFactsList.length);
	$("#historytotal").html(historyFactsList.length);
	$("#musictotal").html(musicFactsList.length);
	$("#poptotal").html(popFactsList.length);
	$("#sportstotal").html(sportsFactsList.length);
	$("#techtotal").html(technologyFactsList.length);
	$("#televisiontotal").html(televisionFactsList.length);

	/* -- Calculate weekly stat count  -- */
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

	var oneDay = 24*60*60*1000; //number of seconds in a day
	var todaysDate = new Date();
	var startDate = new Date(2014,05,21); //June 21, 2014
	var currentDate = todaysDate.getDate();
	var currentMonth = todaysDate.getMonth();
	var currentYear = todaysDate.getFullYear();
	//document.getElementById("today").innerHTML = months[currentMonth] + " " + currentDate + ", " + currentYear;

	var totalDays = Math.round((todaysDate.getTime() - startDate.getTime())/(oneDay)); 
	var factsList = foodFactsList.concat(musicFactsList,historyFactsList,popFactsList,sportsFactsList,technologyFactsList,televisionFactsList);
	var weeklyTotal = ((factsList.length/totalDays)*7).toFixed(2);
	document.getElementById("weeklytotal").innerHTML = weeklyTotal;


/*  --          Recently added facts section          --  */

	//How many facts to show for each filter
	var factsShown = 3;

	//Get the most recent facts and show most recent first
	var lastFood = foodFactsList.slice(-factsShown).reverse();
	var lastHistory = historyFactsList.slice(-factsShown).reverse();
	var lastMusic = musicFactsList.slice(-factsShown).reverse();
	var lastPop = popFactsList.slice(-factsShown).reverse();
	var lastSports = sportsFactsList.slice(-factsShown).reverse();
	var lastTech = technologyFactsList.slice(-factsShown).reverse();
	var lastTelevision = televisionFactsList.slice(-factsShown).reverse();

	// Bold the current filter
	$('.ra.filterbuttons a').click(function(){
		$('.ra.filterbuttons a').removeClass('activefilter');
		$(this).addClass('activefilter');
	});

	// Change the filter
	$('#ra-listfood a').click(function(){
		$('.recentlists ul:not(.ra-food)').removeClass('recentShown').addClass('recentHidden');
		$('.ra-food').removeClass('recentHidden').addClass('recentShown');
	});

	$('#ra-listhistory a').click(function(){
		$('.recentlists ul:not(.ra-history)').removeClass('recentShown').addClass('recentHidden');
		$('.ra-history').removeClass('recentHidden').addClass('recentShown');
	});

	$('#ra-listmusic a').click(function(){
		$('.recentlists ul:not(.ra-music)').removeClass('recentShown').addClass('recentHidden');
		$('.ra-music').removeClass('recentHidden').addClass('recentShown');
	});

	$('#ra-listpopculture a').click(function(){
		$('.recentlists ul:not(.ra-pop)').removeClass('recentShown').addClass('recentHidden');
		$('.ra-pop').removeClass('recentHidden').addClass('recentShown');
	});

	$('#ra-listsports a').click(function(){
		$('.recentlists ul:not(.ra-sports)').removeClass('recentShown').addClass('recentHidden');
		$('.ra-sports').removeClass('recentHidden').addClass('recentShown');
	});

	$('#ra-listtechnology a').click(function(){
		$('.recentlists ul:not(.ra-tech)').removeClass('recentShown').addClass('recentHidden');
		$('.ra-tech').removeClass('recentHidden').addClass('recentShown');
	});

	$('#ra-listtelevision a').click(function(){
		$('.recentlists ul:not(.ra-television)').removeClass('recentShown').addClass('recentHidden');
		$('.ra-television').removeClass('recentHidden').addClass('recentShown');
	});

	//Append the facts for each filter

	for (var i = 0; i < lastFood.length; i++) {
		$('.ra-food').append('<li>' + lastFood[i] + '</li>');
	}

	for (var i = 0; i < lastHistory.length; i++) {
		$('.ra-history').append('<li>' + lastHistory[i] + '</li>');
	}

	for (var i = 0; i < lastMusic.length; i++) {
		$('.ra-music').append('<li>' + lastMusic[i] + '</li>');
	}

	for (var i = 0; i < lastPop.length; i++) {
		$('.ra-pop').append('<li>' + lastPop[i] + '</li>');
	}

	for (var i = 0; i < lastSports.length; i++) {
		$('.ra-sports').append('<li>' + lastSports[i] + '</li>');
	}

	for (var i = 0; i < lastTech.length; i++) {
		$('.ra-tech').append('<li>' + lastTech[i] + '</li>');
	}

	for (var i = 0; i < lastTelevision.length; i++) {
		$('.ra-television').append('<li>' + lastTelevision[i] + '</li>');
	}








});




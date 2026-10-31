function range(begin, end) {
	let array = [];
	for (let i = begin; i <= end; i++)
		array.push(i);
	for (let i = begin; i >= end; i--)
		array.push(i);
	return array;
}

const SHEET_X = 0;
const SHEET_Y = 1;
const SHEET_WIDTH = 2;
const SHEET_HEIGHT = 3;
const OFFSET_X = 4;
const OFFSET_Y = 5;
const ROTATED = 6;

window.BonziData = {
	size: {
		x: 200,
		y: 160
	},
	spritemaps: {
		default: [[750,225,79,111,61,40,false],[441,1060,3,5,97,78,false],[445,555,5,8,91,75,true],[224,924,9,11,82,72,false],[644,209,14,16,73,68,false],[110,1108,20,21,64,64,true],[790,336,27,28,58,60,false],[44,1128,33,34,58,61,false],[0,1128,38,44,63,61,true],[1112,890,47,54,67,62,true],[775,446,54,62,73,61,true],[1101,1080,63,63,79,58,false],[865,557,76,70,84,48,true],[960,960,88,79,83,39,true],[338,892,97,85,77,37,false],[829,318,107,91,69,37,false],[119,832,114,92,61,41,false],[1065,0,113,101,58,37,true],[337,229,108,111,57,33,false],[231,107,106,120,56,31,false],[938,0,103,127,51,29,true],[154,0,107,142,38,17,true],[0,730,119,129,27,31,false],[335,340,116,106,30,45,true],[675,123,117,102,26,49,false],[829,210,108,108,33,43,false],[938,182,79,111,61,40,true],[151,223,79,112,61,40,false],[233,892,76,105,62,47,true],[837,409,76,99,62,53,true],[126,335,98,128,52,20,false],[0,462,116,135,35,21,false],[691,0,123,125,30,29,true],[0,597,133,117,21,36,true],[565,0,126,110,21,49,false],[0,335,126,127,35,26,false],[816,0,122,122,24,31,false],[335,977,88,106,22,45,true],[773,973,77,85,48,64,false],[1039,923,73,79,64,63,false],[1034,1080,59,67,84,59,true],[1112,937,50,40,108,61,false],[792,123,37,31,121,60,false],[906,633,29,24,119,68,false],[802,743,20,17,113,78,true],[775,500,13,11,104,84,true],[111,859,8,8,95,85,false],[111,867,8,7,84,83,false],[441,451,5,4,81,82,true],[117,711,2,2,81,81,false],[116,462,1,1,0,0,false],[1049,192,79,111,61,40,true],[152,111,79,112,61,39,false],[111,924,79,113,61,38,true],[938,103,79,112,61,39,true],[1050,113,79,112,61,39,true],[937,261,77,111,62,40,true],[1048,271,77,111,62,40,true],[0,859,134,111,33,40,true],[0,0,154,111,22,40,false],[0,111,152,112,23,39,false],[0,223,151,112,23,39,false],[936,338,92,111,47,40,true],[1047,348,99,111,39,40,true],[224,456,105,111,29,40,true],[230,227,107,112,22,39,false],[445,226,106,112,23,39,false],[335,456,104,110,25,41,true],[223,561,104,110,25,41,false],[227,671,104,110,25,41,false],[327,561,104,110,25,41,false],[331,671,104,110,25,41,false],[435,671,104,110,25,41,false],[428,781,104,110,25,41,false],[444,1060,103,110,26,41,true],[532,781,104,110,25,41,false],[633,1059,104,110,25,41,true],[445,451,104,110,25,41,true],[683,552,103,110,26,41,false],[699,662,103,110,26,41,false],[686,336,104,110,25,41,false],[555,449,104,110,25,41,true],[743,1058,104,110,25,41,true],[665,448,104,110,25,41,true],[715,772,104,110,25,41,false],[1046,605,104,110,25,41,true],[802,633,104,110,25,41,false],[819,743,104,110,25,41,false],[837,853,104,110,25,41,false],[853,1044,104,110,25,41,false],[923,668,104,110,25,41,false],[1027,709,104,110,25,41,true],[224,339,111,117,18,34,false],[437,109,113,117,16,34,false],[119,711,108,121,21,30,false],[117,588,106,123,28,28,false],[116,463,105,125,33,26,false],[224,968,77,111,62,40,true],[222,1045,80,111,60,40,true],[333,1065,85,111,57,40,true],[431,560,89,111,53,40,false],[441,340,83,111,59,40,false],[941,850,80,110,61,41,false],[1021,813,80,110,61,41,false],[850,963,81,110,60,41,true],[435,891,85,110,58,41,true],[233,781,98,111,46,40,false],[644,225,106,111,38,40,false],[331,781,97,111,48,40,false],[441,976,84,111,60,40,true],[545,891,84,111,59,40,true],[663,975,83,110,58,41,true],[552,975,84,111,56,40,true],[520,555,84,111,56,40,false],[539,666,81,111,59,40,false],[524,338,79,111,61,40,false],[603,337,83,111,59,40,false],[829,122,88,109,58,42,true],[550,110,99,125,58,26,true],[551,209,93,128,66,23,false],[337,104,100,125,61,26,false],[604,553,79,111,61,40,false],[620,664,79,111,61,40,false],[636,775,79,111,61,40,false],[936,430,79,111,61,40,true],[1047,447,79,111,61,40,true],[786,500,79,111,61,40,false],[936,509,79,111,61,40,true],[1047,526,79,111,61,40,true],[554,1059,79,107,61,44,false],[656,886,91,89,54,62,false],[747,882,91,90,54,61,true],[935,588,80,111,60,16,true],[1101,813,77,64,62,15,true],[865,485,72,71,64,0,true],[923,778,72,82,64,7,true],[1039,1002,76,78,62,6,false],[957,1048,77,88,62,35,false],[110,1003,112,105,43,53,false],[296,0,142,104,29,53,false],[0,993,135,110,32,47,true],[438,0,127,109,32,42,false]],
		legacy: [[0,0,200,160,0,0,false],[200,0,200,160,0,0,false],[400,0,200,160,0,0,false],[600,0,200,160,0,0,false],[800,0,200,160,0,0,false],[1000,0,200,160,0,0,false],[1200,0,200,160,0,0,false],[1400,0,200,160,0,0,false],[1600,0,200,160,0,0,false],[1800,0,200,160,0,0,false],[2000,0,200,160,0,0,false],[2200,0,200,160,0,0,false],[0,160,200,160,0,0,false],[200,160,200,160,0,0,false],[400,160,200,160,0,0,false],[600,160,200,160,0,0,false],[800,160,200,160,0,0,false],[1000,160,200,160,0,0,false],[1200,160,200,160,0,0,false],[1400,160,200,160,0,0,false],[1600,160,200,160,0,0,false],[1800,160,200,160,0,0,false],[2000,160,200,160,0,0,false],[2200,160,200,160,0,0,false],[0,320,200,160,0,0,false],[200,320,200,160,0,0,false],[400,320,200,160,0,0,false],[600,320,200,160,0,0,false],[800,320,200,160,0,0,false],[1000,320,200,160,0,0,false],[1200,320,200,160,0,0,false],[1400,320,200,160,0,0,false],[1600,320,200,160,0,0,false],[1800,320,200,160,0,0,false],[2000,320,200,160,0,0,false],[2200,320,200,160,0,0,false],[0,480,200,160,0,0,false],[200,480,200,160,0,0,false],[400,480,200,160,0,0,false],[600,480,200,160,0,0,false],[800,480,200,160,0,0,false],[1000,480,200,160,0,0,false],[1200,480,200,160,0,0,false],[1400,480,200,160,0,0,false],[1600,480,200,160,0,0,false],[1800,480,200,160,0,0,false],[2000,480,200,160,0,0,false],[2200,480,200,160,0,0,false],[0,640,200,160,0,0,false],[200,640,200,160,0,0,false],[400,640,200,160,0,0,false],[600,640,200,160,0,0,false],[800,640,200,160,0,0,false],[1000,640,200,160,0,0,false],[1200,640,200,160,0,0,false],[1400,640,200,160,0,0,false],[1600,640,200,160,0,0,false],[1800,640,200,160,0,0,false],[2000,640,200,160,0,0,false],[2200,640,200,160,0,0,false],[0,800,200,160,0,0,false],[200,800,200,160,0,0,false],[400,800,200,160,0,0,false],[600,800,200,160,0,0,false],[800,800,200,160,0,0,false],[1000,800,200,160,0,0,false],[1200,800,200,160,0,0,false],[1400,800,200,160,0,0,false],[1600,800,200,160,0,0,false],[1800,800,200,160,0,0,false],[2000,800,200,160,0,0,false],[2200,800,200,160,0,0,false],[0,960,200,160,0,0,false],[200,960,200,160,0,0,false],[400,960,200,160,0,0,false],[600,960,200,160,0,0,false],[800,960,200,160,0,0,false],[1000,960,200,160,0,0,false],[1200,960,200,160,0,0,false],[1400,960,200,160,0,0,false],[1600,960,200,160,0,0,false],[1800,960,200,160,0,0,false],[2000,960,200,160,0,0,false],[2200,960,200,160,0,0,false],[0,1120,200,160,0,0,false],[200,1120,200,160,0,0,false],[400,1120,200,160,0,0,false],[600,1120,200,160,0,0,false],[800,1120,200,160,0,0,false],[1000,1120,200,160,0,0,false],[1200,1120,200,160,0,0,false],[1400,1120,200,160,0,0,false],[1600,1120,200,160,0,0,false],[1800,1120,200,160,0,0,false],[2000,1120,200,160,0,0,false],[2200,1120,200,160,0,0,false],[0,1280,200,160,0,0,false],[200,1280,200,160,0,0,false],[400,1280,200,160,0,0,false],[600,1280,200,160,0,0,false],[800,1280,200,160,0,0,false],[1000,1280,200,160,0,0,false],[1200,1280,200,160,0,0,false],[1400,1280,200,160,0,0,false],[1600,1280,200,160,0,0,false],[1800,1280,200,160,0,0,false],[2000,1280,200,160,0,0,false],[2200,1280,200,160,0,0,false],[0,1440,200,160,0,0,false],[200,1440,200,160,0,0,false],[400,1440,200,160,0,0,false],[600,1440,200,160,0,0,false],[800,1440,200,160,0,0,false],[1000,1440,200,160,0,0,false],[1200,1440,200,160,0,0,false],[1400,1440,200,160,0,0,false],[1600,1440,200,160,0,0,false],[1800,1440,200,160,0,0,false],[2000,1440,200,160,0,0,false],[2200,1440,200,160,0,0,false],[0,1600,200,160,0,0,false],[200,1600,200,160,0,0,false],[400,1600,200,160,0,0,false],[600,1600,200,160,0,0,false],[800,1600,200,160,0,0,false],[1000,1600,200,160,0,0,false],[1200,1600,200,160,0,0,false],[1400,1600,200,160,0,0,false],[1600,1600,200,160,0,0,false],[1800,1600,200,160,0,0,false],[2000,1600,200,160,0,0,false],[2200,1600,200,160,0,0,false],[0,1760,200,160,0,0,false],[200,1760,200,160,0,0,false],[400,1760,200,160,0,0,false],[600,1760,200,160,0,0,false],[800,1760,200,160,0,0,false],[1000,1760,200,160,0,0,false],[1200,1760,200,160,0,0,false],[1400,1760,200,160,0,0,false],[1600,1760,200,160,0,0,false],[1800,1760,200,160,0,0,false]],
		pope: "legacy",
		blessed: "legacy",
		glow: "legacy",
	},
    hats: {
		normal: [
			"bowtie",
			"bieber",
			"bucket",
			"chain",
			"elon",
			"emoji",
			"evil",
            "qmark",
			"horse",
			"kamala",
			"maga",
			"cat",
			"idiot",
			"obama",
			"bfdi",
			"banana",
			"pot",
			"tophat",
			"troll",
			"witch",
            "scarf",
			"wizard",
			"chef",
			"ushanka",
			"sunglasses",
			"party",
			"epic",
			"bush",
			"clown"
		],
		blessed: [
			"dank",
			"cigar",
			"illuminati",
			"propeller",
		],
		vault: [
			"headphones",
			"unicorn",
			"mustache",
			"sprout",
			"glitch",
            "whiteobama",
"rainbowhat",
            "greenhat",
			"purplehat",
			"yellowhat",
			"redhat",
			"whitehat",
			"bluehat",
			"goldhat",
		],
		holidays: {
			halloween: {
				hats: [
					"cauldron",
					"frankenstein",
					"hockey",
					"pumpkin",
					"nopupil",
				],
			},
			christmas: {
				hats: [
					"santa",
					"elf",
					"decorated",
					"rudolph",
				],
			},
		},
		mod: [
			"king",
                        "headphones3",
			"redking",
			"scarf2",
			"headphones2",
			"diamondchain",
		],
		event: [
		]
	},

	colors: {
		normal: [
			"purple",
			"blue",
			"magenta",
			"green",
			"red",
			"_",
			"peedy",
			"black",
			"brown",
			"maroon",
			"yellow",
			"cyan",
			"pink",
			"gray",
			"orange",
			"white"
		],
		blessed: [
			"angel",
			"glow",
			"noob",
			"gold",
		],
	},
	sprite: {
		frames: { width: 200, height: 160 },
		animations: {
			idle: [0],

			surf_intro: [...range(1, 26), "idle"],
			surf_away: range(27, 50),

			shrug_fwd: [...range(51, 61), "shrug_still"],
			shrug_still: [61],
			shrug_back: [...range(61, 51), "idle"],

			earth_fwd: [...range(63, 69), "earth_still"],
			earth_still: [...range(70, 91), "earth_still"],
			earth_back: [...range(92, 97), "idle"],

			cool_fwd: [...range(98, 114), "cool_still"],
			cool_still: [115],
			cool_back: [...range(114, 98), "idle"],

			praise_fwd: [...range(116, 119), "praise_still"],
			praise_still: [120],
			praise_back: [...range(119, 116), "idle"],

			grin_fwd: [...range(121, 127), "grin_still"],
			grin_still: [128],
			grin_back: [...range(123, 121), "idle"],

			backflip: [...range(129, 141), "idle"]
		}
	},
	to_idle: {
		shrug_fwd: "shrug_back",
		shrug_still: "shrug_back",

		earth_fwd: "earth_back",
		earth_still: "earth_back",

		beat_fwd: "beat_back",
		beat_still: "beat_back",

		cool_fwd: "cool_back",
		cool_still: "cool_back",

		praise_fwd: "praise_back",
		praise_still: "praise_back",

		grin_fwd: "grin_back",
		grin_still: "grin_back",
	},
	event_list_joke_open: [
		[
			{
				type: "text",
				text: "Yeah, of course {NAME} wants me to tell a joke."
			},
			{
				type: "anim",
				anim: "praise_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: '"Haha, look at the stupid {COLOR} monkey telling jokes!" Fuck you. It isn\'t funny.',
				say: "Hah hah! Look at the stupid {COLOR} monkey telling jokes! Fuck you. It isn't funny."
			},
			{
				type: "anim",
				anim: "praise_back",
				ticks: 15
			},
			{
				type: "text",
				text: "But I'll do it anyway. Because you want me to. I hope you're happy."
			}
		], [
			{
				type: "text",
				text: "{NAME} used /joke. Whoop-dee-fucking doo."
			}
		], [
			{
				type: "text",
				text: "Joke time."
			}
		], [
			{
				type: "text",
				text: "Prepare."
			}
		], [
			{
				type: "text",
				text: "HEY YOU IDIOTS ITS TIME FOR A JOKE"
			}
		], [
			{
				type: "text",
				text: "Senpai {NAME} wants me to tell a joke."
			}
		], [
			{
				type: "text",
				text: "Time for whatever horrible fucking jokes the creator of this site wrote."
			}
		]
	],
	event_list_joke_mid: [
		[
			{
				type: "text",
				text: "What is easy to get into, but hard to get out of?"
			},
			{
				type: "text",
				text: "Child support!"
			}
		], [
			{
				type: "text",
				text: "Why do they call HTML HyperText?"
			},
			{
				type: "text",
				text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
			},
			{
				type: "anim",
				anim: "shrug_back",
				ticks: 15
			},
			{
				type: "text",
				text: "Sorry. I just had an epiphany of my own sad, sad existence."
			}
		], [
			{
				type: "text",
				text: "Two sausages are in a pan. One looks at the other and says \"Boy it's hot in here!\" and the other sausage says \"Unbelievable! It's a talking sausage!\"",
				say: "Two sausages are in a pan. One looks at the other and says, Boy it's hot in here! and the other sausage says, Unbelievable! It's a talking sausage!"
			},
			{
				type: "anim",
				anim: "shrug_back",
				ticks: 15
			},
			{
				type: "text",
				text: "What were you expecting? A dick joke? You're a sick fuck."
			}
		], [
			{
				type: "text",
				text: "What is in the middle of Paris?"
			},
			{
				type: "text",
				text: "A giant inflatable nothingburger."
			}
		], [
			{
				type: "text",
				text: "What goes in pink and comes out blue?"
			},
			{
				type: "text",
				text: "Sonic's WOAH WOAH WOAH WHAT?!"
			}
		], [
			{
				type: "text",
				text: "A wealthy father has two sons and a mansion. The younger asks for his inheritance early, wishing to start a life for himself. The father accepts, and gives him his share. The boy blows all the money it all on hookers and cocaine. Not wanting to return to his father in shame, he gets a job herding pigs. "
			},
			{
				type: "text",
				text: "He was barely payed enough to eat, and envies the food of the pigs. His father's servants get payed enough to live a decent life, so he goes back there and begs for work. The father is joyed for his return, and has him slaughter the fatted calf for a celebratory meal. The older brother protests, as he was always good and never got such reward. The dad expains, whilst he was good, the younger brother was dead, and is alive again."
			}
		], [
			{
				type: "text",
				text: "Who earns a living by driving his customers away?"
			},
			{
				type: "text",
				text: "Nintendo!"
			}
		], [
			{
				type: "text",
				text: "What did the digital clock say to the grandfather clock?"
			},
			{
				type: "text",
				text: "shut up old hag i want to live life without the \"SFDAAFSDFADSASAFSFADSAFSDFSD BACK IN MY DAY\" bullshit"
			}
					], [
{
    type: "text",
    text: "Three eggs walk into a bar. One's cracked, one's hard-boiled, and one's totally raw. Bartender says: 'Rough night?'"
},
{
    type: "text",
    text: "The cracked one slams the counter and says. 'My wife left me, my shell's falling apart, and I've been sitting in this bar since noon.' The hard-boiled one just stares into his drink. The raw one starts crying. Bartender sighs."
},
{
    type: "text",
    text: "Then the hard-boiled one goes. 'At least you two can still feel something.'"
}
		], [
			{
				type: "text",
				text: "What do you call somebody who does nothing worthful in their life and just floods monkey chat websites?"
			},
			{
				type: "text",
				text: "Melika and Bjorn."
			}
		], [
			{
				type: "text",
				text: "How do you get water in watermelons?"
			},
			{
				type: "text",
				text: "Water doesnt exist, Only melons do! But why is it called Watermelon you may ask? Because it's a joke! Water exists."
			}
		], [
			{
				type: "text",
				text: "Why do we call money bread?"
			},
			{
				type: "text",
				text: "Because we KNEAD it. Haha please send money to my PayPal at nigerianprince99@bonzi.com"
			}
		], [
			{
				type: "text",
				text: "this is for ivorydevrimo"
			},
			{
				type: "text",
				text: "Ohio and the 'nam had sent nuclear bombs to the balkans from the balcony and the 'nam had fighten each other, the nuclear missles are gay as fuck but they made out in the middle of"
			},
			{
				type: "text",
				text: "Subway Sandwitch Sent Subway Scary Witches in Sand for Sans because Sans ordered the Scary Subway Sanded Witch we all know sans made that bust of a balcony joke"
			},
			{
				type: "text",
				text: "The ub valley planned to make a planet called ub-planet and the rocket had failed but nobody known why but he realized its made by the busted Balkans"
			},
			{
				type: "text",
				text: "Shawarma had exploded in the ub valley every direction so ohio people will get the taste of the busted shawarma"
			},
			{
				type: "text",
				text: "Shirada had a border to cross so nobody will call him a raddar bus"
			},
			{
				type: "text",
				text: "She rather order an orange juice rather to get a stinky sock sub"
			},
			{
				type: "text",
				text: "He'd rather call her to molest a femboy rather to disrespect ub"
			},
			{
				type: "anim",
				anim: "shrug_back",
				ticks: 15
			},
			{
				type: "text",
				text: "Thank you for being so understanding for the joke that ivory made credits to ivory for that"
			},
		], [
			{
				type: "text",
				text: "Get ready, as I am about to tell the best joke in 3... 2... 1..."
			},
			{
				type: "text",
				text: "^^**$r$AAAAAAAAAAAAAAA! IT'S NOTHING!"
			},
			{
				type: "text",
				text: "I'm a comedic genius, I know."
			},
		]
	],
	event_list_joke_end: [
		[
			{
				type: "text",
				text: "You know {NAME}, a good friend laughs at your jokes even when they're not so funny."
			},
			{
				type: "text",
				text: "And you fucking suck. Thanks."
			}
		], [
			{
				type: "text",
				text: "Do I amuse you, {NAME}? Am I funny? Do I make you laugh?"
			},
			{
				type: "text",
				text: "pls respond",
				say: "please respond"
			}
		], [
			{
				type: "text",
				text: "Maybe I'll keep my day job, {NAME}. Patreon didn't accept me."
			}
		], [
			{
				type: "text",
				text: "Laughter is the best medicine!"
			},
			{
				type: "text",
				text: "Apart from meth."
			}
		], [
			{
				type: "text",
				text: "Don't judge me on my sense of humor alone."
			},
			{
				type: "text",
				text: "Help! I'm being oppressed!"
			}
		]
	],

	// ============================================================================

	event_list_fact_open: [
		[
			{
				type: "text",
				text: "Hey kids, it's time for a Fun Fact\u24C7!",
				say: "Hey kids, it's time for a Fun Fact!"
			}
		],
		[
			{
				type: "text",
				text: "Everyone get ready for a fun fact!",
				say: "Everyone get ready for a fun fact!"
			}
		]
	],

	event_list_fact_mid: [
		[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that Uranus is 31,518 miles (50,724 km) in diameter?",
				say: "Did you know that Yer Anus is 31 thousand 500 and 18 miles in diameter?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],
		[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that the owner of this site (RadicalGreen) is from Korea, which is why the domain is bonziworld.kr?",
				say: "Did you know that the owner of this site is from Korea, which is why the domain is bonzi world dot k r?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that BWIWorld is forked from BIAWorld, which is a fork of the original BonziWORLD.org?",
				say: "Did you know that B W I World is forked from B I A World, which is a fork of the original bonzi world dot org?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that Sticky joined BonziWORLD in 2018-2019 and was known as The Blue Eyed Stickman and AGENT STICKMAN?",
				say: "Did you know that Sticky joined BonziWORLD in 2018-2019 and was known as The Blue Eyed Stickman and AGENT STICKMAN?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that BonziBLUE joined Newgrounds all the way back in 2009 the same time that ardakirac2009?",
				say: "Did you know that BonziBLUE joined Newgrounds all the way back in 2009 the same time that ardakirac2009?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that Stella helped the owner of this site (Empty_squared) make up build his BonziWORLD Avalon Revived until August 23, where BonziWORLD Avalon turned into BonziWORLD.kr (BonziWORLD 2) when .kr shut down?",
				say: "Did you know that Stella helped the owner of this site make up build his BonziWORLD Avalon Revived until August 23, where BonziWORLD Avalon turned into BonziWORLD.kr (BonziWORLD 2) when .kr shut down?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that Donutscout has been axed due to hacking, leaking the godmode, lying, trolling and much more chaos?",
				say: "Did you know that Donutscout has been axed due to hacking, leaking the godmode, lying, trolling and much more chaos?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_back",
				ticks: 15
			},
			{
				type: "text",
				text: "Ok, let's get serious. I'll let you in on a little secret the feds don't want you knowing.",
				say: "Ok, let's get serious. I'll let you in on a little secret the feds don't want you knowing.",
			},
			{
				type: "text",
				text: "Phones have a secret \"Instant Charging\" feature, you can enable it by microwaving your phone.",
				say: "Phones have a secret \"Instant Charging\" feature, you can enable it by microwaving your phone.",
			},
			{
				type: "text",
				text: "Or charge it. Don't microwave your phone or it will explode!",
				say: "Or charge it. Don't microwave your phone or it will explode!",
			},
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that bonzi.app was created by Chrome/Cheese aka Little Caesar",
				say: "Did you know that bonzi.app was created by Chrome/Cheese aka Little Caesar",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that bonzi.dpdns.org SUCKS ASS, BECAUSE IT WAS CREATED BY ANONPP WHO IS ALREADY PERMAXED FOR ALL THE SHIT HE DID IN SEPTEMBER 2026!",
				say: "Did you know that bonzi.dpdns.org SUCKS ASS, BECAUSE IT WAS CREATED BY ANONPP WHO IS ALREADY PERMAXED FOR ALL THE SHIT HE DID IN SEPTEMBER 2026!",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that slaves didn't do anything wrong and that is all Plankton's fault for this and now he is axed?",
				say: "Did you know that slaves didn't do anything wrong and that is all Plankton's fault for this and now he is axed?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that Jy is the creator of BIA and BIAWorld?",
				say: "Did you know that Jy is the creator of BIA which is Bonzi Intelligence Agency and BIAWorld?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that Java was a fucking anti-semitic extremist who put the jew hat and he, donutscout and his gang tried to destroy the ub valley which is made by Ivory? And java made a terrible website called bw.luagunsx.xyz?",
				say: "Did you know that Java was a fucking anti-semitic extremist who put the jew hat and he, donutscout and his gang tried to destroy the ub valley which is made by Ivory? And java made a terrible website called bonzi world dot luagunsx dot x y z?",
			},
			{
				type: "text",
				text: "and then, Ivorydevrimo and Jy both got Java permanently axed without the possibility of deaxing for attempted destruction of the ub valley",
				say: "and then, Ivorydevrimo and Jy both got Java permanently axed without the possibility of deaxing for attempted destruction of the ub valley",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "ALL HAIL IVORYDEVRIMO AND JY!",
				say: "ALL HAIL IVORYDEVRIMO AND JY!",
			},
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that Anonpp and Colin were both axed permanently without deaxing for all the shitty crimes they did on September 10th to 17th",
				say: "Did you know that Anonpp and Colin were both axed permanently without de-axing for all the shitty crimes they did on September 10th to 17th",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that arda2014 SUCKS ASS BECAUSE, \*\*\^\^HE IMPERSONATED ardakirac2009!!!!!!!!!!!!\^\^\*\*",
				say: "Did you know that arda2014 SUCKS ASS BECAUSE, \*\*\^\^HE IMPERSONATED ardakirac2009!!!!!!!!!!!!\^\^\*\*",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],			[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that fake ub SUCKS ASS? BECAUSE HE IMPERSONATED IVORY!",
				say: "Did you know that fake ub SUCKS ASS? BECAUSE HE IMPERSONATED IVORY!",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		],	
	],

	event_list_fact_end: [
		[
			{
				type: "text",
				text: "o gee whillickers wasn't that sure interesting huh"
			}
		], 		[
			{
				type: "text",
				text: "Ok, that fun fact was interesting"
			}
		]
	]
};

BonziData.event_list_joke = [
	{
		type: "add_random",
		pool: BonziData.event_list_joke_open
	},
	{
		type: "anim",
		anim: "shrug_fwd",
		ticks: 15
	},
	{
		type: "add_random",
		pool: BonziData.event_list_joke_mid
	},
	{
		type: "idle"
	},
	{
		type: "add_random",
		pool: BonziData.event_list_joke_end
	},
	{
		type: "idle"
	}
];

BonziData.joke2_jokes = [
  "Why did the scarecrow win an award?",
  "Because he was outstanding in his field.",
  "What did bush get replaced with?",
  "□.",
  "What do you call fake spaghetti?",
  "SNOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRTTTT!",
  "Heres a joke:",
  "Lucshit",
  "I flooded BonziWORLD. Who am I?",
  "No lifer",
  "Why did Seamus get exposed?",
  "Because he was exposed all the time",
  "Why was six afraid of seven?",
  "Because seven w-nvm",
  "I used to be addicted to the hokey pokey",
  "but then I turned myself around.",
  "Why don't skeletons fight each other?",
  "Hey {NAME} guess what? you're a stupid bitch! you're a stupid fucking bitch! I can't belihow dumb you are...",
  "What do you call cheese that isn't yours?",
  "Nacho cheese."
];

BonziData.event_list_joke2_open = [
	[
		{
			type: "text",
			text: "HEY YOU IDIOTS IT'S TIME FOR ANOTHER JOKE"
		},
		{
			type: "text",
			text: "Everyone, get ready for another joke."
		}
	]
];

BonziData.event_list_joke2_mid = BonziData.joke2_jokes.map((text) => [
	{
		type: "text",
		text
	}
]);

BonziData.event_list_joke2_end = [
	[
		{
			type: "text",
			text: "i made those jokes like 743287813428741327714970503291 years ago."
		}
	]
];

BonziData.event_list_joke2 = [
	{
		type: "add_random",
		pool: BonziData.event_list_joke2_open
	},
	{
		type: "anim",
		anim: "shrug_fwd",
		ticks: 15
	},
	{
		type: "add_random",
		pool: BonziData.event_list_joke2_mid
	},
	{
		type: "idle"
	},
	{
		type: "add_random",
		pool: BonziData.event_list_joke2_end
	},
	{
		type: "idle"
	}
];

BonziData.event_list_fact = [
	{
		type: "add_random",
		pool: BonziData.event_list_fact_open
	},
	{
		type: "add_random",
		pool: BonziData.event_list_fact_mid
	},
	{
		type: "idle"
	},
	{
		type: "add_random",
		pool: BonziData.event_list_fact_end
	},
	{
		type: "idle"
	}
];

BonziData.event_list_triggered = [
	{
		type: "anim",
		anim: "cool_fwd",
		ticks: 30
	},
	{
		type: "text",
		text: "I sexually identify as {NAME}. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
		say: "I sexually identify as {NAME}. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users."
	},
	{
		type: "text",
		text: "People say to me that a person being a {NAME} is impossible and that I’m a fucking virus but I don’t care, I’m beautiful.",
		say: "People say to me that a person being a {NAME} is impossible and that I'm a fucking virus but I dont care, I'm beautiful."
	},
	{
		type: "text",
		text: "I’m having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me “{NAME}” and respect my right to meme from above and meme needlessly.",
		say: "I'm having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me {NAME} and respect my right to meme from above and meme needlessly."
	},
	{
		type: "text",
		text: "If you can’t accept me you’re a gorillaphobe and need to check your file permissions. Thank you for being so understanding.",
		say: "If you cant accept me your a gorillaphobe and need to check your file permissions. Thank you for being so understanding."
	},
	{
		type: "idle"
	}
];

BonziData.event_list_linux = [
	{
		type: "text",
		text: "I'd just like to interject for a moment. What you’re referring to as Linux, is in fact, BONZI/Linux, or as I’ve recently taken to calling it, BONZI plus Linux."
	},
	{
		type: "text",
		text: "Linux is not an operating system unto itself, but rather another free component of a fully functioning BONZI system made useful by the BONZI corelibs, shell utilities and vital system components comprising a full OS as defined by M.A.L.W.A.R.E."
	},
	{
		type: "text",
		text: "Many computer users run a modified version of the BONZI system every day, without realizing it. Through a peculiar turn of events, the version of BONZI which is widely used today is often called “Linux”, and many of its users are not aware that it is basically the BONZI system, developed by the BONZI Project."
	},
	{
		type: "text",
		text: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine’s memes to the other programs that you run. "
	},
	{
		type: "text",
		text: "The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system, such as systemd."
	},
	{
		type: "text",
		text: "Linux is normally used in combination with the BONZI operating system: the whole system is basically BONZI with Linux added, or BONZI/Linux. All the so-called “Linux” distributions are really distributions of BONZI/Linux."
	}
];

BonziData.event_list_pawn = [
	{
		type: "text",
		text: "Hi, my name is BonziBUDDY, and this is my website. I meme here with my old harambe, and my son. Everything in here has an ad and a fact. One thing I've learned after 17 years - you never know what is gonna give you some malware."
	},

];

BonziData.event_list_bees = [
	{ type: "text", text: "According to all known laws" },
	{ type: "text", text: "of aviation," },
	{ type: "text", text: "there is no way a bee" },
	{ type: "text", text: "should be able to fly." },
	{ type: "text", text: "Its wings are too small to get" },
	{ type: "text", text: "its fat little body off the ground." },
	{ type: "text", text: "The bee, of course, flies anyway" },
	{ type: "text", text: "because bees don't care" },
	{ type: "text", text: "what humans think is impossible." },
	{ type: "text", text: "Yellow, black. Yellow, black." },
	{ type: "text", text: "Yellow, black. Yellow, black." },
	{ type: "text", text: "Ooh, black and yellow!" },
	{ type: "text", text: "Nah" },
	{ type: "text", text: "I'm not doing the whole fucking thing." },
	{ type: "text", text: "..." },
	{ type: "text", text: "Screw You!" }
];

BonziData.event_list_bosnia = [
	{ type: "text", text: "I am from Bosnia, take me to America" },
	{ type: "text", text: "I really want to see Statue of Liberty" },
	{ type: "text", text: "I can no longer wait, take me to United States" },
	{ type: "text", text: "Take me to Golden Gate, I will assimilate" },
	{ type: "text", text: "The grass is always greener in neighbour's courtyard" },
	{ type: "text", text: "I wish to leave this nightmare, go to the promised land" },
	{ type: "text", text: "Please, take me to your leader, I want my green card" },
	{ type: "text", text: "I want to fly over like a rocket from the Balkans" },
	{ type: "text", text: "I want to start all over, and turn a new page" },
	{ type: "text", text: "Forget this dreadful story, escape the Stone Age" },
	{ type: "text", text: "I'm waiting for a chance to get out of the cage" },
	{ type: "text", text: "I feel like a slave on a minimal wage" }
];

BonziData.event_list_wtf = [
	{ type: "text", text: "this command has been removed due to seamus." },
	{ type: "text", text: "sorry" }
];
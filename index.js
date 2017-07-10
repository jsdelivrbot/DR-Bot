var async = require("async");
var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "MzI2OTkxNTM0MTQ0NjE4NDk2.DDh-9g.0t7Da1WclJ4FrOS5F8OvBjLtGPw",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
}).listen(process.env.PORT);

bot.on('message', function(user, userID, channelID, message, event) {
    //array
	var people = [
		["Aoi","Amamiya","Ultimate Entertainer","5'7\"","150 lbs","23.5 (N)","AB","April 23rd","(V1) Peace, Performing Arts, Sweets, Tea, Cats, Fashion, Romance, History (V2) Pain, Calamity, Cats, Spiders, Spicy Foods, Jokes, BDSM, Human Beings","(V1) Conflict, Solitude, Bugs, Death, Sexual Innuendos (V2) Tenderness, Cowards, Sweets, Control","Aoi is the Ultimate Entertainer and as such he has an amazing affinity for all things art. Born from half-Japanese/half-American descent, his past with his millionaire father has strongly shaped him into the nurturing student he is today. Unfortunately though, this mysterious past has also left him with some heavy mental wounds that he masks underneath a gentle smile and his radiant stage personality.","none yet","none yet","none yet"],
		["Terry","Soxof","Ultimate Rockstar","6'2\"","200 lbs","25.7 (O)","A","July 4th","Music, Sandwiches","Rude People, High Pitched Noises","A young aspiring indie star from America. His Japanese isn't amazing, but it's at least fluent enough. He's gotten relative popularity in America and Canada, but isn't growing much in Japan. He's relatively easygoing, but thinks he's going to have trouble adjusting to the school without the rest of his band, and worries deeply for his sister, who was his roadie.","none yet","none yet","none yet"],
		["Reinald","Gregory","Ultimate Knight","6'1\"","180 lbs","23.7 (N)","O+","December 21st","Coffee, Reading","Stubbornness, Messy Places","Born in Great Britain and raised there till his 15th birthday, Rein is a fairly tall young male with a slim physique, dark blond hair that just reaches his neck and slightly covers his eyes, and has a beauty mark on his chin. He appears to always have some bags underneath his eyes despite him getting good amounts of sleep. Always seems to be yawning, stretching, or enjoying a nice cup of coffee.","https://youtu.be/YhfrTlFhDA4","https://youtu.be/hlMkDs1NWGs","https://youtu.be/-o8NHjkGO5o"],
		["Misaki","Wei","Ultimate Gladiator","5'6.5\"","115 lbs","18.3 (U)","A+","May 13th","Death, Boobs","Jewelry, Coffee","Misaki is an outspoken and excitable girl, with flaming red hair and revealing clothes. She grew up in a village, fighting in the arena to make money for her family, soon becoming rich after winning every battle. Usually when she tells people her endless stories, something seems off, but that doesnt stop her from being very confident and proud of her past. She carries weapons with her at all times (most notably a large halberd) and is very nochalant about killing others.","none yet","none yet","none yet"],
		["Yoshi","Smith","Ultimate Lucky Student","5'10\"","130 lbs","18.7 (N)","B+","July 13th","Anime, Cooking","Novels, Sour Things","A Japanese/African American living in Japan. The son of two \"Anime Enthusiasts\", it's only natural that he himself would become one as well. If asked \"Are you feeling lucky\" He would respond with \"Try me, bitch.\" It seems as though he can predict his own luck. He has a tendency to punch trees, claiming that he should have been here as the Ultimate Martial Artist. Even if he's mistaken for a delinquent, the worst he'll ever do is punch back. His favorite Anime character is Borace Bostar from Bobo's Crazy Stories: Fighting Habit.","none yet","none yet","none yet"],
		["Stephanie","Catrine","Ultimate Fashion Designer","5'6\"","125 lbs","20.2 (N)","AB","May 9th","Seeing People Smile, Pound Cake, Sewing","Loud Places, Loud People, Bitter Coffee","Originially, Stephanie began designing clothing as a way of potentially pleasing her mother, who always seemed too tough to please. After showing a drawing of a dress to her mother and getting a pleased smile in return, Stephanie (age 6) decided that she would make it her mission to make pretty clothes to make mommy happy. Soon, that dream shifted into a desire to make clothes that would make anyone pleased as punch just by wearing them. As she grew older, this vision began to twist into a sense of \"I know better than you what reflection of appearance will make you happier\" and thus she finds herself constantly observing, rating, and redressing everyone she sees to match them to her vision of an ideal outfit for the person at that moment in time.","none yet","none yet","none yet"],
		["Eun","Wilson","Ultimate Street Food Vender","6'0\"","162 Ibs","22 (N)","O-","February 19th","Popcorn, Cold","Heat, Shitty Adults","She is Korean/African American. She grew up in Korea, with her mother and father, constantly going back and forth between Korea and America. Since her parents are absent often, she lives with her uncle in korea, working at his street stall! She loves to use the cooking tools, and has lots of fun bring her friends around to make them snacks, so she became very skilled at making food, quickly but mantaning quality! She is shsl vender because as she skill grew so did her uncles stalls sells, make it one of the most successful, stalls in seoul! She's a mom friend, even though she's got a bit of a reckless demeanor. As a result she is easily confused, and kinda an act first, ask questions later type. Shes very friendly, but its hard to tell if its because she likes you, or because she wants you to like her, so she can sell you food....","none yet","none yet","none yet"],
		["Ciarre","Dyer","Ultimate Skydiver","none yet","none yet","none yet","B","December 20th","Sky, Calm, Quiet, Weed, Cooking","Alcohol, Cooking, Smartasses","A usually-carefree skydiver who is can sometimes be extemely obsessive of things and people around her, as well as addiction. After suffering an alcohol problem in her first year of high school, she has sworn it off. She often takes people jumping off of random buildings as a form of bonding. She is easily overwhelmed, and tries to hide it with her carefree front. As she takes studying very seriously, she loves taking breaks to skydive to clear her thoughts.","none yet","none yet","none yet"],
		["Tori","Soxof","Ultimate Roadie","5'6\"","none yet","<<dependant","A","July 4th","Girls, Terry","Being Touched, Being Yelled At","An aspiring roadie who wants nothing more than her brother's success as a rockstar, she decided to become his roadie, working on everything behind the scenes to make sure that his concerts would go perfectly. She's only ever messed up a concert once, and that was near the beginning of her career, so she doesn't really care about it anymore. Basically, her brother's success is her success, so she didn't want to go to Hope's Peak without him. Her brother assured her that things will be fine, and she set off.","none yet","none yet","none yet"],
		["Cheri","Moreau","Ultimate Archaeologist","5'3\"","111 lbs","19.7 (N)","AB","November 22nd","Ancient Artifacts, Antiques, Bone Structures, Notes, Hexes, Dark Magic, RPGs","Abalone, Unclean Remains of Creatures","none yet","none yet","none yet","none yet"],
		["Sam","Metamo","Ultimate Test Taster","6'5\"","180 lbs","21.3 (N)","O-","April 19th","none yet","none yet","none yet","none yet","none yet","none yet"],
		["Hayley","Vo","Ultimate Violinist","5'8\"","120 lbs","18.2 (U)","AB","December 19th","Video Games, Studying, Music","Overly-Inquisitive People, Bad Memes","A generally loudmouthed girl who quickly made friends with anyone open to a new friend. Embarrassed easily, but very passionate about the things and people she loves. Is very excited about violin and loves explaining the intracies of the violin to her peers.","none yet","none yet","none yet"],
		["Fumika","Kanoe","Ultimate Editor","5'0\"","113 lbs","22.1 (N)","O-","December 2nd","Angst, Seafood","Bugs, Perverted Men","Fumika is an extremely pale quiet girl with long messy white hair that goes down to her waist and bangs that cover most of her right eye (which were both red). She wore a short, flowey red dress with a darker shade of red splattered on the left side. The sleeves of the dress were slightly longer than her arms, yet exposed her shoulders. She detested looking at her feet therefore always wearing either black boots or converse. Although others labeled her as shy, she simply didnt waste her energy talking, in fear of getting interrupted by a more important person. It takes alot of effort to gain her trust and reveal her true colors, but when she did she was especially clingy towards those friends. She has been hit on more often than people think which developed her hatred of perverted men but not all men. She was a bit of a hypocrite, since she was a pervert herself, though she keep this a secret. Her talent was more of an escape mechanism, she picked up video editing trying to escape her depressing life. Everytime she was presented with a new problem she would turn on her laptop and edit, she did this quite often that she gained her title. Despite her sad life she loved watching other's sad lives. Whether it was: an anime, soap operas, reading manga, or books, she loved it as long as there was a sad storyline involed. Whenever bugs where involved all of the sadness she had held inside would come out and she'd have a nervous breakdown until it was gone.","none yet","none yet","none yet"],
		["Reiji","Shidare","Ultimate Barista","5'2\"","120 lbs","21.9 (N)","B","July 12th","Coffee, Bread, Sweets, Breakfast, Money","Cheaters, Tricksters, Energy Drinks","Reiji has always lived in poverty. His father owns a small coffee shop which one day he decided he would help out with. The coffee shop wasnt well known so they always struggled to pay the rent. One day he decided he would make coffee that would make their shop popular and began studying what makes great coffee. He would grow his own coffee plants and make his own recipes. After years of work he finally perfected it. For weeks he would go around rival coffee shops, carrying a teapot with him, and having their customers taste his coffee. The shop became so popular that people were asking around for his coffee, this ended badly for him since, his father got jealous and kicked him out. Having nowhere to go he began working for big companies and began to be worldly known for his coffee. He eventually started his own shop and ended up richer than he would ever imagine. He likes to carry around a thermos with him at all times to serve his coffee to others. Despite having an intimidating face, he is very sweet and cheerful and wants to get along with everyone.","none yet","none yet","none yet"],
		["Ihsan","lastnamehere","Ultimate Sage","none yet","none yet","none yet","none yet","none yet","none yet","none yet","none yet","none yet","none yet","none yet"],
		["Katherine","lastnamehere","Ultimate Priestess","none yet","none yet","none yet","0+","November 19th","none yet","none yet","Kate grew up in a large family with mostly older siblings and one younger sibling – a twin sister. As a kid she was outshined by her siblings and was an outcast to her parents who said she had no potential, which wasn't true. Around the age of five her house was burned down and only her and her sister were survivors. They were thrown into the foster system, her twin ran away but she stayed out of fear. Years after jumping through the system, she came back and admitted it was her fault everyone died. Kate had \"snapped\" that day. Eventually she was put into care of a holy family who began teaching her magic and medicines and how to be a priestess. She excelled and eventually, after being able to cure unknown illnesses, she was deemed an Ultimate Priestess. She can use any type of healing or defensive magic but her talent limits her so she can't use any type of offensive abilities.","none yet","none yet","none yet"],
		["Dummy","Test","Ultimate Tool","6'0\"","1000 lbs","135.6 (O)","DICK","February 31st","Unholy Music, Virgin Tears","Cuteness, Assholes","oihediuhqwidhwnfdiwuehfneuifhewniflwhefnweifuwekhfwoufhweifuwhfwieuflkwfhnlweifuhflnwieufkhwnfoiwlefhuwenf\nbitch","https://www.youtube.com/watch?v=SffWCHGJ1ZU","https://www.youtube.com/watch?v=CnnTcZ8fuMo","https://www.youtube.com/watch?v=ENwFAmeWEYk"]
	];

	//!music x y
	if (message.substring(0,6) === "!music") {
		if(message === "!music" || message === "!music ") {
			bot.sendMessage({
				to: channelID,
				message: "Please input a name and a track (freerp/serious/reveal)."
					});
		}
		else {
			var str = message;
			var param = str.slice(7);
			var paramArray = param.split(" ");
			var charName = "NONE FOUND";

			for(var rowIndex = 0; rowIndex < people.length && charName === "NONE FOUND"; rowIndex++)
			{
				if(paramArray[0].toLowerCase() === people[rowIndex][0].toLowerCase())
				{
					charName = people[rowIndex][0];
				}
			}
			if(charName === "NONE FOUND")
			{
				bot.sendMessage({
					to: channelID,
					message: "That person was not found! :0"
						});
			}
			else
			{
				rowIndex--;
				if(paramArray[1] === "freerp" || paramArray[1] === "serious" || paramArray[1] === "reveal")
				{
					if(bot.servers["249028631089643540"].members[userID].voice_channel_id === undefined)
					{
						bot.sendMessage({
							to: channelID,
							message: "Join a voice chat first! :)"
								});
					}
					else
					{
						var trackTitle = paramArray[1];
    					bot.joinVoiceChannel(bot.servers["249028631089643540"].members[userID].voice_channel_id);
    					
						bot.sendMessage({
    						to: channelID,
    						message: ";;destroy"
								});

						bot.sendMessage({
    						to: channelID,
    						message: "Next up... " + charName + "'s " + trackTitle + " song!"
    							});


    					if(paramArray[1] === "freerp")
    					{
    						var tempInt = 11;
    					}
    					else if(paramArray[1] === "serious")
    					{
    						var tempInt = 12;
    					}
    					else
    					{
    						var tempInt = 13;
    					}

						bot.sendMessage({
							to: channelID,
							message: ";;play " + people[rowIndex][tempInt]
								});
						//bot.leaveVoiceChannel(bot.servers["249028631089643540"].members[userID].voice_channel_id);
					}
				}
				else
				{
					bot.sendMessage({
						to: channelID,
						message: "That's not a valid track name (choose from freerp/serious/reveal). :("
							});
				}
			}
		}
	}

  	//!profile x
  	else if (message.substring(0,9) === "!profile")
  	{

  		/*if (message.content.startsWith("!profile eun")) {
  			bot.sendMessage({
  			to: channelID,
  			message: "```Name: Eun Wilson\nGender: Female\nBlood Type: O+\nBirthday: 02/16\nSHSL: Ultimate Street Food Vender\nLikes: Cooking, Popcorn, Winter, Cute Stationary, That Good Good Delinquent Aesthetic\nDislikes: Shitty adults/Authority Figures, Italian Pasta, Hot Weather\nHeight: 6'0 (previously 5'8)\nWeight: 150\nDescription: She is Korean/African American. She grew up in Korea, with her mother and father, constantly going back and forth between Korea and America. Since her parents are absent often, she lives with her uncle in korea, working at his street stall! She loves to use the cooking tools, and has lots of fun bring her friends around to make them snacks, so she became very skilled at making food, quickly but mantaning quality! She is shsl vender because as she skill grew so did her uncles stalls sells, make it one of the most successful, stalls in seoul! She's a mom friend, even though she's got a bit of a reckless demeanor. As a result she is easily confused, and kinda an act first, ask questions later type. Shes very friendly, but its hard to tell if its because she likes you, or because she wants you to like her, so she can sell you food....```");
  				});
  		}

  		else if (message.content.startsWith("!profile hayley")) {
  			bot.sendMessage({
  			to: channelID,
  			message: "```Name: Hayley Vo\nGender: Female\nBirthday: December 19th\nBlood Type: AB\nSHSL: Ultimate Violinist\nLikes: video games, music\nDislikes: bad memes, rude people\nHeight: 5'8\nWeight: 120 punds\nDescription: A generally loudmouthed girl who quickly made friends with anyone open to a new friend. Embarrassed easily, but very passionate about the things and people she loves. Is very excited about violin and loves explaining the intracies of the violin to her peers.```");
  				});
  		}

  		else if (message.content.startsWith("!profile aoi")) {
  			bot.sendMessage({
  			to: channelID,
  			message: "```Name: Aoi Amamiya\nGender: Male\nBirthday: April 23\nBlood Type: AB\nSHSL: Entertainer\nAoi( Version One)-------\nLikes: Peace, The performing arts, sweets, tea, cats, fashion, Romance, history\nDislikes: Conflict, solitude, bugs, death, sexual innuendos\nAoi (Alternate)---------\nLikes: Pain, Calamity, Cats, Spiders, spicy foods, jokes, Rein(?), bdsm, human beings\nDislikes: Tenderness, cowards, sweets, control\nHeight: 5'\nWeight: 150 lbs\nDescription: Aoi is the SHSL Entertainer and as such he has an amazing affinity for all things art. Born from half-Japanese/half-American descent, his past with his millionaire father has strongly shaped him into the nurturing student he is today. Unfortunately though, this mysterious past has also left him with some heavy mental wounds that he masks underneath a gentle smile and his radiant stage personality. ```");
  				});
  		}

  		else if (message.content.startsWith("!profile cheri")) {
  			bot.sendMessage({
  			to: channelID,
  			message: "```Name: Cheri Moreau\nGender: Female\nBirthday: November 22\nBlood Type: AB\nSHSL: Archaeologist\nLikes: Ancient artifacts, antiques, bone structures, notes.\nDislikes: Abalone, unclean remains of deceased creatures, sudden loud noises within silence\nHeight: 5'3\nWeight: 111 lbs\nDescription:```");
  				});
  		}

  		else if (message.content.startsWith("!profile misaki")) {
  			bot.sendMessage({
  			to: channelID,
  			message: "```Name: Misaki Wei\nGender: Female\nBirthday: May 13th\nBlood Type: A+\nSHSL: Gladiator\nLikes: Death, Boobs\nDislikes:  Jewlery, Coffee ~~Kazan, Rape, Very bad roleplayers~~\nHeight: 5'6.5\nWeight: 115\nDescription: Misaki is an outspoken and excitable girl, with flaming red hair and revealing clothes. She grew up in a village, fighting in the arena to make money for her family, soon becoming rich after winning every battle. Usually when she tells people her endless stories, something seems off, but that doesnt stop her from being very confident and proud of her past. She carries weapons with her at all times (most notably a large halberd) and is very nochalant about killing others.```");
  				});
  		}

  		else if (message.content.startsWith("!profile funika")) {
  			bot.sendMessage({
  			to: channelID,
  			message: "```Name: Fumika Kanoe\nGender: Female\nBirthday: December 2\nBlood Type: O-\nSHSL: Ultimate Editor\nLikes: Angst related things, seafood\nDislikes: bugs, perverted men\nHeight: 5'0\nWeight: 113\nDescription: Fumika is an extremely pale quiet girl with long messy white hair that goes down to her waist and bangs that cover most of her right eye (which were both red). She wore a short, flowey red dress with a darker shade of red splattered on the left side. The sleeves of the dress were slightly longer than her arms, yet exposed her shoulders. She detested looking at her feet therefore always wearing either black boots or converse. Although others labeled her as shy, she simply didnt waste her energy talking, in fear of getting interrupted by a more important person. It takes alot of effort to gain her trust and reveal her true colors, but when she did she was especially clingy towards those friends. She has been hit on more often than people think which developed her hatred of perverted men but not all men. She was a bit of a hypocrite, since she was a pervert herself, though she keep this a secret. Her talent was more of an escape mechanism, she picked up video editing trying to escape her depressing life. Everytime she was presented with a new problem she would turn on her laptop and edit, she did this quite often that she gained her title. Despite her sad life she loved watching other's sad lives. Whether it was: an anime, soap operas, reading manga, or books, she loved it as long as there was a sad storyline involed. Whenever bugs where involved all of the sadness she had held inside would come out and she'd have a nervous breakdown until it was gone. ```");
  				});
  		}

  		else if (message.content.startsWith("!profile")) {
  			bot.sendMessage({
  			to: channelID,
  			message: "bitch enter a name");
  				});}*/
  	}

  	//!dumb x
  	else if (message.substring(0,5) === "!dumb") {
  		if(message === "!dumb" || message === "!dumb ")
  		{
  			bot.sendMessage({
  				to: channelID,
  				message: "Please use !dumbs to check which dumb meme command to use! :D"
  					});
  		}
  		else
  		{
  		var str = message.content;
  		var param = str.slice(6);

  		if (param.startsWith("virgin")) {
  			bot.sendMessage({
  				to: channelID,
  				message: "https://cdn.discordapp.com/attachments/326998355865501696/327005557854830592/image.jpg"
  					});
  		}

  		if (param.startsWith("ark")) {
  			bot.sendMessage({
  				to: channelID,
  				message: "https://cdn.discordapp.com/attachments/326989725040640010/327019492431364097/received_1371518932963342.png"
  					});
  		}}
  	}

  	//!kazan - spits out kazan quotes
  	else if (message === "!kazan") {
  		var random = Math.floor(Math.random() * 27) + 1;

  		if (random === 1) {
  			bot.sendMessage({
  				to: channelID,
  				message: "Should have remembered we're Godly Teens above all teens in a field."
  					});
  		}

  		if (random === 2) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*looks a bit serious* Eun, as a freaking dude who works 24/7 making guns, I know as hell you're being rather restless right now"
  					});
  		}

  		if (random === 3) {
  			bot.sendMessage({
  				to: channelID,
  				message: "I'm in no mood to talk; I'm going to go see Eun."
  					});
  		}

  		if (random === 4) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*as I walk through the hallways to my room, I come across Terry, who seemed to be out of commission through... mysterious means. He's a bit confused but returns to his room anyway*"
  					});
  		}

  		if (random === 5) {
  			bot.sendMessage({
  				to: channelID,
  				message: "Eh... ever since Reinald and Sato left, things have been much more boring..."
  					});
  		}

  		if (random === 6) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*rappels down from the roof like a rock climber*"
  					});
  		}

  		if (random === 7) {
  			bot.sendMessage({
  				to: channelID,
  				message: "(I want to imagine Kazan Jr. being a sort of shoulder angel/devil for Terry)"
  					});
  		}

  		if (random === 8) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*approaches the bartender* Two shots of Whiskey"
  					});
  		}

  		if (random === 9) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*aims his grappling hook by the window above Sato's*"
  					});
  		}

  		if (random === 10) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*rappels down from the roof like a rock climber*"
  					});
  		}

  		if (random === 11) {
  			bot.sendMessage({
  				to: channelID,
  				message: "Well, if you're shutting me out...\nYou're a horrible person... but... something about this horrible-ness.\nJust makes me wanna take action...\nBut if you're insistent on staying that rotten and heartless...\nThen don't talk to me.\nI just learned that people can't always agree with you."
  					});
  		}

  		if (random === 12) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*shouts angrily while shooting everything in his room*"
  					});
  		}

  		if (random === 13) {
  			bot.sendMessage({
  				to: channelID,
  				message: "What do cats do when they're dirty."
  					});
  		}

  		if (random === 14) {
  			bot.sendMessage({
  				to: channelID,
  				message: "You're wet, Aoi..."
  					});
  		}

  		if (random === 15) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*points gun at him, firing a spray of water*"
  					});
  		}

  		if (random === 16) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*throws his flamethrower inside the fire, causing a bigger fire*\n*walks away from the fire slowly*"
  					});
  		}

  		if (random === 17) {
  			bot.sendMessage({
  				to: channelID,
  				message: "Aoi, can you bring me home?"
  					});
  		}

  		if (random === 18) {
  			bot.sendMessage({
  				to: channelID,
  				message: "I'm not doing this because I'm gay!"
  					});
  		}

  		if (random === 19) {
  			bot.sendMessage({
  				to: channelID,
  				message: "So is anyone gonna ask me out? *winks*"
  					});
  		}

  		if (random === 20) {
  			bot.sendMessage({
  				to: channelID,
  				message: "One of you take me out on a date to the clothing store and then we'll see what kind of girly clothes you likes?"
  					});
  		}

  		if (random === 21) {
  			bot.sendMessage({
  				to: channelID,
  				message: "(It's like a spray so it's not super wet)"
  					});
  		}

  		if (random === 22) {
  			bot.sendMessage({
  				to: channelID,
  				message: "[Hey, do you mind if I come over? But can you dress up as your cat maid?]"
  					});
  		}

  		if (random === 23) {
  			bot.sendMessage({
  				to: channelID,
  				message: "What a cute Aoi-nyan~"
  					});
  		}

  		if (random === 24) {
  			bot.sendMessage({
	  			to: channelID,
  				message: "*chuckles suggestively and pets the cat maid*"
  					});
  		}

  		if (random === 25) {
  			bot.sendMessage({
  				to: channelID,
  				message: "I'm trying to clean my Aoi-nyan"
  					});
  		}

  		if (random === 26) {
  			bot.sendMessage({
  				to: channelID,
  				message: "*starts to lick his arm*"
  					});
  		}

  		if (random === 27) {
  			bot.sendMessage({
  				to: channelID,
  				message: "Can you lick yourself... or you wont due to the trauma..."
  					});
  		}
  	}

  	//!sam 
  	else if (message === "!sam") {
  		var random = Math.floor(Math.random() * 11) + 1;

  		if (random === 1) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/PO5rd5G.png"
  				});
  		}

  		if (random === 2) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/yF8fpJg.png"
  				});
  		}

  		if (random === 3) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/Gd1kVnz.png"
  				});
  		}

  		if (random === 4) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/TsQ0Jgi.png"
  				});
  		}

  		if (random === 5) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/xC6aSaR.png"
  				});
  		}

  		if (random === 6) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/9yor1S7.png"
  				});
  		}

  		if (random === 7) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/ThBzqJm.png"
  				});
  		}

  		if (random === 8) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/MUDGaEl.png"
  				});
  		}

  		if (random === 9) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/l73Twvc.png"
  				});
  		}

  		if (random === 10) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/GkKyVuJ.png"
  				});
  		}

  		if (random === 11) {
  			bot.sendMessage({
  			to: channelID,
  			message: "http://i.imgur.com/x5COfKH.png"
  				});
  		}
  	}

  	//!nudes
  	else if (message === "!nudes") {
  		bot.sendMessage({
  		to: channelID,
  		message: "My nudes are cold!"
  			});
  	}

	//!help
	if (message === "!help") {
		bot.sendMessage({
		to: channelID,
		message: "```\nCommands\n!help          Shows this window.\n!profile x     Displays the profile of x.\n!music x y     Plays x's music of y track title (freerp/serious/reveal).\n\nMemes\n!dumbs         Displays a list of dumb memes you can display.\n!dumb x        Displays the dumb meme x.\n!sam           Shows a picture of our lord and saviour, Sam Metamo.\n!kazan         Randomly selects a line (or multiple) from a pool of hand-picked Kazan quotes.```"
		});/*Comma
nds
!help          Shows this window.
!profile x     Displays the profile of x.
!music x y     Plays x's music of y track title (freerp/serious/reveal).

Memes
!dumbs         Displays a list of dumb memes you can display.
!dumb x        Displays the dumb meme x.
!sam           Shows a picture of our lord and saviour, Sam Metamo.
!kazan         Randomly selects a line (or multiple) from a pool of hand-picked Kazan quotes.*/
	}

  	//!dumbs
  	else if (message === "!dumbs") {
  		bot.sendMessage({
  		to: channelID,
  		message: "```\nDumb Memes\nvirgin         !dumb virgin   Shows the Virgin Mary in her purest yet most thot-like form.\nark            !dumb ark      Shows Ark in his most glorious face.```"
		});/*Dumb 
Memes
virgin         !dumb virgin   Shows the Virgin Mary in her purest yet most thot-like form.
ark            !dumb ark      Shows Ark in his most glorious face.*/
  	}

});
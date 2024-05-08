

function getDayOfWeek() {
    const now = new Date();
    const day = now.getDay(); //0 = sunday, 1 = monday ect
    return day;
}

function displayMessage(){
    if (getDayOfWeek() === 0){ //sunday
        console.log("Happy sunday!");
    } 
    else if (getDayOfWeek() === 1){ //monday
        console.log("happy monday!")
    }
    else if (getDayOfWeek() === 2){ //Tuesday
        console.log("happy Tuesday!")
    }
    else if (getDayOfWeek() === 3){ // Wednesday
        console.log("happy Wednesday!")
    }
    else if (getDayOfWeek() === 4){ //Thursday
        console.log("happy thursday!!")
    }
    else if (getDayOfWeek() === 5){ //Friday
        console.log("happy Friday!")
    }
    else if (getDayOfWeek() === 6){ //Saturday
        console.log("happy Saturday!!")
    }
    else{
        console.log("frankly I don't know what day it is....")
    }
}
displayMessage()

function randomNum(){return Math.floor(Math.random() * 65);}
num = randomNum()
//this lets us find a random number and num assigns it.


const BadApple = "Ever on and on I continue circling With nothing but my hate In a carousel of agony 'Til slowly I forget and my heart starts vanishing And suddenly I see that I can't Break free, I'm Slipping through the cracks of a dark eternity With nothing but my pain and a paralyzing agony To tell me who I am! Who I was! Uncertainty enveloping my mind 'Til I can't break free, and Maybe it's a dream, maybe nothing else is real But it wouldn't mean a thing if I told you how I feel So I'm tired of all the pain, all the misery inside And I wish that I could live feeling nothing but the night You could tell me what to say, you could tell me where to go But I doubt that I would care, and my heart would never know If I make another move, there'll be no more turning back Because everything would change, and it all would fade to black Will tomorrow ever come? Will I make it through the night? Will there ever be a place for the broken in the light? Am I hurting? Am I sad? Should I stay or should I go? I've forgotten how to tell, did I ever even know? Can I take another step? I've done everything I can All the people that I see, they will never understand If I find a way to change, if I step into the light Then I'll never be the same and it all will fade to white Ever on and on I continue circling With nothing but my hate In a carousel of agony 'Til slowly I forget and my heart starts vanishing And suddenly I see that I can't Break free, I'm Slipping through the cracks of a dark eternity With nothing but my pain and a paralyzing agony To tell me who I am! Who I was! Uncertainty enveloping my mind 'Til I can't break free, and Maybe it's a dream, maybe nothing else is real But it wouldn't mean a thing if I told you how I feel So I'm tired of all the pain, all the misery inside And I wish that I could live feeling nothing but the night You could tell me what to say, you could tell me where to go But I doubt that I would care, and my heart would never know If I make another move, there'll be no more turning back Because everything would change, and it all would fade to black Will tomorrow ever come? Will I make it through the night? Will there ever be a place for the broken in the light? Am I hurting, am I sad? Should I stay or should I go? I've forgotten how to tell, did I ever even know? This time you're not hurting me! This time I will take a stand! All the hatred in my eyes building up an evil plan Standing lonely in the night, with the darkness by my side Looking deep inside myself, and revealing only fright If I make another move, if I take another step Then it would all fall apart, there'd be nothing of me left If I'm crying in the wind, if I'm crying in the night Will there ever be a way? Will my heart return to white? Can you tell me who you are? Can you tell me where I am? I've forgotten how to see, I've forgotten if I can If I open up my eyes, there'll be no more going back 'Cause I'll throw it all away, and it all will fade to black So I'm back here once again, so I'm back here once again Can I ever make a change? Will my heart begin to mend? Would you love me if I go? It feels like a heart attack But still everything's the same, and it all just fades to black";
//dw bout this one ;3

switch(num){
     case  (65):  console.log("Find any cats today?"); break ;
     case  (64):  console.log("Lorem ipsum and.. what's the rest?"); break ;
     case  (63):  console.log("Trans Rights!"); break ;
     case  (62):  console.log("Go find a cat! Today!"); break ;
     case  (61):  console.log("9 + 10 = ?"); break ;
     case  (60):  console.log("Hope your day is going okay!"); break ;
     case  (59):  console.log("<3"); break ;
     case  (58):  console.log("Hatsune Miku unfortunatley did not make this code."); break ;
     case  (57):  console.log("Play Ultrakill!"); break ;
     case  (56):  console.log("Robots are awesome."); break ;
     case  (55):  console.log(BadApple); break ;
     case  (53):  console.log("Go snuggles some bumble bee's"); break ;
     case  (52):  console.log(":3"); break ;
     case  (51):  console.log("uwu"); break ;
     case  (50):  console.log("OwO"); break ;
     case  (49):  console.log("QmQ"); break ;
     case  (48):  console.log("/srs"); break ;
     case  (47):  console.log("/jk?"); break ;
     case  (46):  console.log("I hope nothing bad has happend today <3"); break ;
     case  (45):  console.log("I went to 'mad at you island' and no one was there <3"); break ;
     case  (44):  console.log("Your pet loves you <3"); break ;
     case  (43):  console.log("Hi! <insert your name here>"); break ;
     case  (42):  console.log("whats the answer to life the universe and everything?"); break ;
     case  (41):  console.log("Today's the day!"); break ;
     case  (40):  console.log("It's a wonderful day for learning!"); break ;
     case  (39):  console.log("*gasp* the chosen one returns!"); break ;
     case  (38):  console.log("Lucky 38! Test your luck, Today!"); break ;
     case  (37):  console.log("Don't use Tumblr!"); break ;
     case  (36):  console.log("Don't use Instagram"); break ;
     case  (35):  console.log("Don't use Twitter... X?"); break ;
     case  (34):  console.log("Not a safe website!"); break ;
     case  (33):  console.log("Don't use Facebook!"); break ;
     case  (32):  console.log("Don't delete System32!"); break ;
     case  (31):  console.log("Try putting [sudo rm -rf /] in terminal!"); break ;
     case  (30):  console.log("mrow"); break ;
     case  (29):  console.log("Raccoons are lovely lil guys"); break ;
     case  (28):  console.log("watch MoominValley!"); break ;
     case  (27):  console.log("Always use an AdBlocker"); break ;
     case  (26):  console.log("Try Ublock origin it's very useful <3"); break ;
     case  (25):  console.log("Be gay do crime!"); break ;
     case  (24):  console.log("Anarchy!!!!"); break ;
     case  (23):  console.log("Be Gay do crime!"); break ;
     case  (22):  console.log("is your refrigerator running?"); break ;
     case  (21):  console.log("こんにちは!"); break ;
     case  (20):  console.log("I ran out of ideas here tbh"); break ;
     case  (19):  console.log("woof!"); break ;
     case  (18):  console.log("Drink some water please!"); break ;
     case  (17):  console.log("Play terraria!"); break ;
     case  (16):  console.log("Play factorio! (unless you have a life)"); break ;
     case  (15):  console.log("Take a break...or eight"); break ;
     case  (14):  console.log("Reminder: You are loved <3"); break ;
     case  (13):  console.log("Sphinx of Black Quartz, Judge My Vow"); break ;
     case  (12):  console.log("Amazingly few discotheques provide jukeboxes "); break ;
     case  (11):  console.log("Try JS!... or don't..."); break ;
     case  (10):  console.log("Try Python!... or don't..."); break ;
     case  (9) :  console.log("Try C++! or don't...") ; break ;
     case  (8) :  console.log("Breakcore is awesome.") ; break ;
     case  (7) :  console.log(":3") ; break ;
     case  (6) :  console.log(";3") ; break ;
     case  (5) :  console.log("Alt+F4 for a secret!") ; break ;
     case  (4) :  console.log("don't put [sudo rm -rf /] in terminal!") ; break ;
     case  (3) :  console.log("You're number 3...") ; break ;
     case  (2) :  console.log("You're number 2?") ; break ;
     case  (1) :  console.log("You're number 1!") ; break ;
    }



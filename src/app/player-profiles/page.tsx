import PlayerProfile from "@/components/PlayerProfile";
import React from "react";
import {Player} from "@/interfaces/Player";

const players = [
  {
    name: "Nick Mayo",
    nick: null,
    favorite_card: "Gaea's Cradle",
    background: "A Premodern addict and a Legacy casual, Nick's been casually playing MTG on and off for the last 20 years, but playing more frequently since late 2019. He's considered the captain, leader, CEO, whatever of Duress Crew. Graphics, shirts, swag, and social media presence/content is mostly driven by him. \n\nHis favorite colors are green and black, and he mains Elves in Premodern. He can be caught trying to combo with those colors, or loudly complaining about commander.",
    imageUrl: ""
  },
  {
    name: "Bradley Stone",
    nick: null,
    favorite_card: "Duress",
    background: "I'm on a mission that people say is impossible, but when I swing my sword they all choppable \n" +
      "\n" +
      "PM Terrageddon player who shaved his teeth in standard from Invasion through Scourge and sharpened them in the 2010 era of Legacy playing anything that included Mox Diamond and Life from the Loam.",
    imageUrl: "",
  },
  {
    name: "Pat Swayze",
    nick: null,
    favorite_card: "Mental Misstep",
    background: "I'm kind of a big deal. People know me. My apartment smells of rich mahogany and backwoods. I quit magic in 2014 and these nerds suckered me back into it with commander. Which is now my favorite format. I only play premodern because everyone else is doing it.",
    imageUrl: "",
  },
  {
    name: "Billy",
    nick: null,
    favorite_card: "Gilded Drake.", // People keep giving them to me and I’ve just been shuffling them up and leaving early with my new present.",
    background: "\"Okay, Tony, since you won’t play Legacy with me, I’ll play PM with you. I have no idea what’s good in the format, so I’m just going to name cards I want to play, and you say ‘stop’ when I name enough good cards to build a deck. Okay, ready? Mox Diamond . . . Terravore . . .\"",
    imageUrl: "",
  },
  {
    name: "Anthony Jordan",
    nick: "Tony",
    favorite_card: "Grizzly Bears",
    background: "Tony got into this fine game around 2002, when the infamous 7th edition foil Thorn Elemental ruled summer camp. He then stopped playing because he thought Yu-gi-oh, Beyblades and Bionicles were much cooler (which they totally were!). Fast forward to 2016 and he got right back into it, playing Magic ever since. He is a black mage who loves a good mono red burn deck and collects Grizzly Bears. Likes to play Premodern, Legacy, Filthy Casual EDH and Revised 40.",
    imageUrl: "",
  },
  {
    name: "Ben Gauthier",
    nick: null,
    favorite_card: "Phage the Untouchable",
    background: "Bolting birds since ‘97.",
    imageUrl: "",
  },
  {
    name: "Trenton Bollinger",
    nick: null,
    favorite_card: "Mask of the mimic",
    background: "Trenton has been into MTG since the mid 90's. " +
      "He got into it because a card shop opened in town and it was the coolest place to be. " +
      "If you played between 1998 and 2006 in any major event, it's almost a sure bet he was there. " +
      "Now he makes websites and reps the crew whenever possible.",
    imageUrl: "",
  },
  {
    name: "Shane Echevarria",
    nick: null,
    favorite_card: "Dark Ritual",
    background: "Shane has been playing Magic since 1999.  He was a tournament organizer and judge for The Baseball Card Shop and Tony's Cards and Collectibles from 2002 to 2013.  Currently, he plays most competitive formats and hates playing mirror matches.",
    imageUrl: "",
  },
  {
    name: "Matt Tompkins",
    nick: null,
    favorite_card: "Pestilence",
    background: "Started playing Magic in 1994 with draft chaff and make my commander decks with the same trash.",
    imageUrl: "",
  },
  {
    name: "Willy J",
    nick: "Dr Strangebrew",
    favorite_card: "Cephalid Constable",
    background: "Willy J; a proud original memeber; enjoys creating strange and unusual decks that ride the casual/tourment line. Finding/breaking forgotten/unplayed cards is his game;making you regret keeping that shitty dollar rare on the field is his fame.",
    imageUrl: "",
  },
  {
    name: "Hannah",
    nick: null,
    favorite_card: "Deflecting Swat",
    background: "I started playing commander in 2017 because it looked like a hobby I could grow into and have been doing just that ever since. DxC has convinced me to start exploring the non Singleton formats so I'm really just new all over again. Out here trying to make Magic Daddy proud.",
    imageUrl: "",
  },
  {
    name: "Nick Pynn",
    nick: null,
    favorite_card: "Nimble Mongoose",
    background: "Nick has played MtG since 2013. Starting with Standard, and moving into Modern the first time his cards rotated out. Seeing Legacy Classics get streamed on Sunday’s Modern events at the LGS got him to chase the Legacy bug from then on. He has a primary focus on Eternal Formats, but plays a little bit of everything.",
    imageUrl: "",
  },
  {
    name: "Jared Bollinger",
    nick: null,
    favorite_card: "Survival of the Fittest",
    background: "Jared has been playing MtG pretty much since 1994. His first card was Atog, and not knowing how to play magic, thought it was awesome that it could also sacrifice your opponent's artifacts; card was busted. Now a days, he's spicing up the local Premodern, teaching science-y stuff, and doing a bunch of nerding out.",
    imageUrl: "",
  },
  {
    name: "John Darling",
    nick: "Meatballs",
    favorite_card: "Dark ritual",
    background: "John has been into magic since the early 2000’s when his best friend Zakk with two K’s and his older brother introduced him to the game.  Not a big competitive player but for the crew will try his best.  Fueled by his love for tacos and meatballs.  Balls is a sneaky foe not to be underestimated.",
    imageUrl: "",
  },
  {
    name: "Dr. Honey Mustard",
    nick: null,
    favorite_card: "",
    background: "This warrior rolls in every Saturday lost in the sauce, specifically Ken's Honey Mustard. Powers up with slamming shots of the magic stuff every round. After winning weeklies consistently, his success can be attributed to high fructose fireblasts and a side of leafy green oath of druids. Sit down across from him at your own peril because he's apt to punish with tight plays. So get in loser, because his truck only stops in 2 spots: flavor town and the winners circle. His spicy brews will clear your sinuses, tickle your tastebuds, and capture the W. This top dog lives at the top tables and your buns are his for the slathering.",
  }
];

const page = () => {
  // @ts-ignore
  return (
    <div>
      <div className="flex items-center bg-neutral-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-chartreuse-yellow sm:text-6xl font-handwritten">
              Meet the Crew
            </h1>
          </div>
        </div>
      </div>

      <div className={"mt-2"}>
        <div className="max-w-full mx-auto">
          <main className={`bg-white relative`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <ul role="list"
                  className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              >
                {players.map((player: Player, index) => (
                  <PlayerProfile key={index}
                                 name={player.name}
                                 nick={player.nick}
                                 // favorite_color={player.favorite_color}
                                 favorite_card={player.favorite_card}
                                 // favorite_deck={player.favorite_deck}
                                 background={player.background}
                                 // imageUrl={player.imageUrl}
                                 // role={player.role}
                                 // xUrl={""}
                                 // linkedinUrl={""}
                  />
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default page
// imports the dotenv library
// allows us to access variables inside env file. 
// by using process .env.VARIABLE_NAME
require('dotenv').config();
// importing the masto api that we will use
const m = require('masto');

// set up ability to use the masto library 
// similar to making app
// const app = express()

const masto = m.createRestAPIClient ({
url: "https://networked-media.itp.io",
accessToken: process.env.TOKEN
})

//  const is the same as function makeStatus()
const makeStatus = async()=>{

// customize the text output to be random when we run the function
let hype = [
"so prettyyyyy🔥🔥\n#bestfriendforever #TooHotForTheAlgorithm #soPretty #prettyalert #visualtherapy #maincharacterenergy",

"gorgeoussss🔥🔥\n#bestfrendforever #TooHotForTheAlgorithm #gorgeous #facecardneverdie #beautycheck #slay #PrettyPolice",

"Princess😍👑\n#princessvibes #royaltyenergy #bestfriendforever",

"send me this post\n#instagram #internetstopmoment #PrettyPolice",

"send me this post 🔥🔥🔥🔥😍😍😍\n#instagram #internetstopmoment #PrettyPolice",

"gorgggg\n#bestfrendforever #TooHotForTheAlgorithm #slayalert #HotGirlCouncil",

"so gorgeous\n#soGorgeous #facecard #beautymoment #visualmasterpiece",

"wowwwwww\n#bestfrendforever #wowmoment #stunningalert #internetpause #unrealbeauty",

"woowwwww😍😍😍\n#wowenergy #beautyshock #TooHotForTheAlgorithm #obsessedmoment #facecard",

"gorg😍\n#gorg #slayenergy #beautyqueen #visualwow",

"miss u🥹\n#besties #bestfriends #friends #love #friendship #bff #bestfriend #bestievibes #internetbestie #bestfrendforever #softmoment #friendenergy",

"omg passing out🔥🔥\n#beautyoverload #internetemergency #cantbreathe #visualattack",

"hey beautiful🫵🏻\n#facecard #bestfrendforever #beautifulalert #heyqueen #maincharacter",

"WOW😍\n#beautyalert #stunningmoment",

"🔥🔥🔥🔥so pretty\n#bestfrendforever #firecontent #internetheat #slaypost",

"gorgeousssssssss🔥😍🔥🥵\n#gorgeousenergy #beautyoverload #facecardneverdeclines #hotpost",

"you look amazing!!!!🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n#queen #maincharacterenergy #beautyalert",

"soooooo pretty💖💖💖💖💖💖💖💖\n#prettyx100 #visualangel #beautyfeed #softaesthetic",

"stunning🔥🔥💖💖💖💖💖💖\n#stunning #facecard #visualimpact #beautyqueen",

"queen\n#queenenergy #slayqueen #iconic",

"glowingggggg🔥\n#glowup #glowenergy",

"omgggg🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n#internetmoment #beautyshock",

"STOPPPP😭💖💖💖💖💖💖💖💖\n#toogood #internetpanic #visualattack",

"OBSESSED🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n#obsessed #internetobsession #visualaddiction #cantlookaway",

"so obsessed🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n#visualaddiction #slaymoment",

"so cuteeee💖💖💖💖💖💖🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n#cutealert #softenergy #cutiecore",

"cutieeeeee💖💖💖💖💖💖💖💖💖💖\n#cutiee #softvibes #sweetfeed",

"angel\n#angelenergy #softglow #etherealbeauty",

"love you queen🔥\n#maincharacterenergy #queenlove #bestieenergy #iconicqueen #slayfriend",

"bestieeee🔥🔥🔥🔥🔥🔥🔥🔥\n#bestievibes #internetbestie #girlgangenergy #feedfriend",

"😍😍😍\n#visualcrush #beautyoverload #bestievibes #internetbestie",

"💖💖💖\n#pinkenergy #lovevibes #softfeed #sweetmoment #bestievibes #internetbestie",

"🔥🔥🔥\n#firecontent #heatcheck #slaypost #hotfeed #bestievibes #internetbestie",

"🫶🫶🫶\n#bestievibes #lovefeed #goodvibesonly #internetlove",

"so prettyyyyy 😭🔥\n#facecardneverdeclines #prettypolice #visualcrime #timelinehalted #stopthescroll #modelbehavior #beautyoverload #internetemergency #feedblessed #maincharacterenergy #illegallevels #aesthetic911 #slaydepartment",

"gorgeousssss 😍🔥\n#gorgeousenergy #facecardneverdeclines #prettyprivilege #feedlegend #visualmasterpiece #beautycommittee #timelineblessing #slayalert #internetmeltdown #feedelite #maincharacteralert #stunningdepartment",

"WOWWWWWW 🔥\n#wowmoment #facecardneverdeclines #visualearthquake #timelinepanic #internetchaos #beautyshock #feedexplosion #slaybroadcast #maincharacterfeed #aestheticimpact #visualattack #feediconic",

"OBSESSED 😵‍🔥\n#obsessedenergy #facecardneverdeclines #visualaddiction #feedobsession #timelineaddicted #slayoverload #internetfixation #beautyloop #scrollstopped #maincharacterfeed #feedlegend",

"🔥🔥🔥\n#firecontent #facecardneverdeclines #heatcheck #visualflames #feedburning #timelineonfire #slaytemperature #internetheatwave #aestheticfire #feedlegend #hotpostalert",

"gorggggg 😍🔥\n#gorgenergy #facecardneverdeclines #visualdamage #feedlegendary #beautyprotocol #timelinepanic #internetmeltdown #slaydepartment #prettyprivilege #modelstatus"
];

let randomSelection = Math.floor(Math.random()*hype.length)

    const s = await masto.v1.statuses.create({
// status : "hi",
status:hype[randomSelection],



// visibility:"public"
visibility:"public"
    });
    console.log(s.url)
}

// will post one status one time
// makeStatus();

// will post a status one time every 10s 
// 45mins
setInterval(makeStatus,1800000)
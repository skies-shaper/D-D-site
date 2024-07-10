let isMobile = window.matchMedia("screen and (width < calc(95vh + 405px))")
let contentBodyMobile = `
<div id="text-heading"></div>
<div class="imgholder">
    <img src="" id="mapImg"/>
    <svg id="mapoverlay" preserveAspectRatio="1:1">

    </svg>
</div>
<div id="text-content-mobile">
<div id="menu">
    <button class="menubutton" onclick="setview(0)" id="about">
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0(3).png" class="icon">
    </button>
    <button class="menubutton" id="people" onclick="setview(1)">
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0 (5).png" class="icon">
    </button>
    <button class="menubutton" id="location" onclick="setview(2)">
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0 (4).png" class="icon">
    </button>
    <button class="menubutton" id="questhooks" onclick="setview(3)">
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0 (6).png" class="icon">
    </button>
    <button class="menubutton" id="places" onclick="setview(4)" >
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0 (7).png" class="icon">
    </button>
    <button class="menubutton wide" id="info" onclick="setview(5)">About</button> 
</div>
<div class="content" id="content-about">
    <h2>Introduction</h2>
</div>
<div class="content" id="content-people">
    <h2>People and Organizations</h2>
</div>
<div class="content" id="content-location">
    <h2>Location</h2>
</div>    
<div class="content" id="content-hooks">
    <h2>Adventure hooks</h2>
</div>
<div class="content" id="content-places">
    <h2>Locations within</h2>
</div>
<div class="content" id="content-info">
    <h2>About</h2>

<div class="footer">
<p style="font-size: 20px; margin: 0%;" xmlns:cc="http://creativecommons.org/ns#">This work by <span id ="creatorNameAttribution" property="cc:attributionName" ></span>
    is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank"rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>
</div>
</div>
</div>
`
let contentBodyDesktop = `
<div class="imgholder">
    <img src="" id="mapImg"/>
    <svg id="mapoverlay" preserveAspectRatio="1:1">

    </svg>
</div>
<div id="text-content-desktop">
<div id="text-heading">
</div>
<div id="menu">
    <button class="menubutton" onclick="setview(0)" id="about">
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0(3).png" class="icon">
    </button>
    <button class="menubutton" id="people" onclick="setview(1)">
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0 (5).png" class="icon">
    </button>
    <button class="menubutton" id="location" onclick="setview(2)">
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0 (4).png" class="icon">
    </button>
    <button class="menubutton" id="questhooks" onclick="setview(3)">
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0 (6).png" class="icon">
    </button>
    <button class="menubutton" id="places" onclick="setview(4)" >
        <img src="fire.gif" class="hiddenimg">
        <img src="pixil-frame-0 (7).png" class="icon">
    </button>
    <button class="menubutton wide" id="info" onclick="setview(5)">About</button> 
</div>
<div class="content" id="content-about">
    <h2>Introduction</h2>
</div>
<div class="content" id="content-people">
    <h2>People and Organizations</h2>
</div>
<div class="content" id="content-location">
    <h2>Location</h2>
</div>    
<div class="content" id="content-hooks">
    <h2>Adventure hooks</h2>
</div>
<div class="content" id="content-places">
    <h2>Locations within</h2>
</div>
<div class="content" id="content-info">
    <h2>About</h2>
</div>

</div>
<div class="footer">
    <p style="font-size: 20px; margin: 0%;" xmlns:cc="http://creativecommons.org/ns#">This work by <span id ="creatorNameAttribution"property="cc:attributionName" ></span>
        is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank"rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>
</div>`
let locationTemplate = {
    header: {
        title: "",
        flavorText: ""
    },
    about: "",
    people: "",
    adventureHooks: "",
    places: "",
    info: "",
    creatorName: ""

}
locationData = {"Hinresoul": {
header: {
    title: "Hinresoul",
    flavorText: "floating city of the wise",
    img: "Hinresoul"
},
location: `Hinresoul floats above the Mountain range of Ernos' folly, a forbidding series of high peaks which appear to have been thrust from the earth by some ancient and terrible explosion. Its islands are encased from the bottom with a whitish stone, curiously unlike any found for miles and miles from its location
It is held in place with a vast magical beam, thrust out of the crystal-encased soul of a long-defeated spirit in the mountains below it.
Directly to its north and east is Lake Ovnor, and ships from its small haven will primarily traverse the [skyTrails sky-trails] down to one of that great lake's principal ports. Occasionally they will come from as far as the elven kingdoms in the far east, Mensch-Kaoul, or one of the warring kingdoms in the west.
Directly to the south of Hinresoul is a dense forest, which gives way to arid badlands within a few hundred miles. The [greatMaw Great Maw] opens some three hundred miles to Hinresoul's south. To the west is the great river and the fertile, rocky lands which surround it.`,
people: "Sorry, this page is currently empty :(",
about : `Hinresoul stands above the great mountains of Ernos' Folly, its islands held in place by a beam of energy thrust out of the crystal-encased soul of a spirit of death which was defeated in ancient times by a great hero. Its population is _small_, measuring just over 600 people. Of those 600 or so full-time residents, the vast majority are members of one of the three orders who hold court on these islands, founded in the wake of the defeat of the Great Spirit of Death which gave this town its power. They are:
*-The Smiths of the Three Suns
*-The Keepers of the knowledge of Ernos' Bane
*-The Order of the Gilded Sprout.
You will learn more about them as you explore this city. For now, all you need to know is that each is dedicated to creating powerful magical artifacts, and the export of those artifacts make up the majority of the city's economy.`,
adventureHooks: `^You gaze above the prow of your sky-ship. Glimmering in the light of the setting sun is the fabled city of Hinresoul. The captain orders a slow, and you feel a sudden grounding as the keel hits water once more, but this time thousands of feet above the nearest land.^
Hinresoul is full of opportunity. Dare you take it?
*The Thieves of the Withering Wood
Hinresoul exports many magical artifacts. Weapons, potions, scrolls of powerful spells. Normally this is a peaceful, uninterrupted trade. After all, most of the major guilds of spellcasters rely on at least one thing or another produced in its breezy heights. As such, shipments are often protected by powerful runes and guarded by powerful warriors. Only a few days ago, however, right after the members of your party had arrived in Hinresoul, a shipment went missing. The protection-runes were tracked, and found to be projecting their location from a forest but some 50 miles away.
Your party members are among those who volunteered to retrieve the shipment.

-Reward: At least some magical items for each party member, appropriate for level.
-Recommended Starting Level: 2-4
-Projected end level: 4-6

*The Assailants of the Encased Soul
The vast majority of Hinresoul's magical power comes deep from within the earth, in the mountains below it. Long ago, a warrior named Enros, after whom these mountains are named, and his companions fought an ancient spirit of darkness. Though he did not survive, and the mountains themselves were reared up in the wake of the battle, the dark spirit was vanquished and its soul encased in a tomb of adamantine and diamond. It is stored in a heavily-protected cave-encrusted fortress, and it is said an ancient dragon even guards it within her clutch of eggs. However, a crafty undead warrior by the name of S'coom has carved out a fortification within this cave system, and is preparing to strike and shatter the encasement. In doing so, he could combine his own soul with that of the Dark One, or else cause Hinresoul itself to come crashing to the ground. 
Your party members, having gained fame in both retrieving the treasure from the Withered Wood and other escapades, are commanded by Hinresoul's council of high elders to defeat S'coom.

-Reward: Exceedingly powerful artifacts from the treasuries of Hinresoul
-Recommended Starting Level: 8-10
-Projected end level: 11-14

*The Summoning of a New Age
The encased soul, after being saved by a brave group of adventurers nearly a decade ago, is now fading. You must re-summon a new spirit of evil and defeat it in order to preserve the balance of Magic on this plane

-Reward: Soul-bound blades and spell components (link eventually)
-Recommended Starting Level: 15
-Projected end level: 18

`,
places : `*-H1: The Great Library
This vast building towers up two high floors, and is filled with bookshelves in which are hidden the secrets of the realms. Many enchantments of old are stored within its deep catacombs, and the Keepers, an ancient order of wizards who have hidden the lore of these islands somewhere safe.
*-H2: Plaza
Standing tall above the wide courtyard of the library is the great statue of Ernos. His staff is raised tall above his head, and through it thrusts the beam of energy which keeps these islands aloft.
*-H3: The Central Haven of Hinresoul
Great many-masted flying wind-ships will majestically float in and out of Hinresoul through this port, ready to transport its magical wares across the worlds.
*-H4: The tower of the Creator
Inside of this tall tower lie many treasures of the architect of these islands, skyehspaer (ski-es-pair) the wise. It is surrounded by a garden of fragrant flowers and a shimmering pond in which it is said the future may be scried.
*-H5: The One-Forge of the Smiths of the three suns
There are but two things tethering Hinresoul to the Prime Plane. The first being, of course, the Great Beam. But the second is a constant, neverending flow of burning lava, drawn into the great forge which lies above it. This is a low, stone building with a roof of simple wood. But the bright sound of hammers rings always from the clerics working within, singing their songs of power and imbibing their weapons and tools with a magical glint.
*-H6: The pool of the eternal wing
Upon this lone island was discovered, long ago, the secret of flight.
*-H7: The Ethereal Gardens
Filled with endless arrays of magical herbs and mystical fruits with many varied powers that are studied by the Order of the Guilded Sprout. Faerie Dragons and other, stranger beings may be found flitting around them.
*-H8: The Temple of the Order of the Gilded Sprout
An open-air building of dark gray stone, the Temple is vast and filled with bubbling cauldrons, burning incense, and drying plants. Monks wander its columned great hall, brewing potions and dyeing elixirs vibrant hues.
*-H9: The Keepers' overlook
To a layman, this will appear to be but a broad balcony overlooking the Ethereal Gardens. However, an adept Keeper can cast [SPELL] to see anywhere on this plane from it.
*-H10: The bridges of Serenity
Traveling down through a scattering of small floating islets, carpeted in moss, is a series of wooden bridges, connecting the main island and Great Library to the Ethereal Gardens and Temple of the Order of the Gilded Sprout.`,
info: "The Hinresoul campaign setting was written by Alexander Shapinsky.",
creatorName: "Alexander Shapinsky",
POIs: [
    {ID: 1, x:290,y:230},
    {ID: 2, x:280,y:300},
    {ID: 3, x:400,y:380},
    {ID: 4, x:10,y:480},
    {ID: 5, x:62,y:185},
    {ID: 6, x:410,y:150},
    {ID: 7, x:280,y:120},
    {ID: 8, x:245,y:40},
    {ID: 9, x:290,y:160},
    {ID: 10, x:200,y:175},
]
}}
function markupHTMLConversion(text){
    let replacedText
    replacedText = text
    replacedText = replacedText.replaceAll(/</g,"&lt;")
    replacedText = replacedText.replaceAll(/>/g,"&rt;")
	replacedText = replacedText.replaceAll(/\*(.+)[\n]/g,`<h3>$1</h3>`)
  	
    replacedText=replacedText.replace(/\[(\S+) (.+?)\]/g,`<a href="contentDisplay.html\?location=$1">$2</a>`)
    
    replacedText = replacedText.replaceAll(/\n/g,"<br>")
    replacedText = replacedText.replaceAll(/_(.+?)_/g,"<strong>$1</strong>")
    replacedText = replacedText.replaceAll(/\^(.+?)\^/g,"<em>$1</em>")

    return replacedText
}

if(isMobile.matches){
    initMobile()
}
else{
    init()
}
isMobile.addEventListener("change",()=>{
    if(isMobile.matches){
        initMobile()
    }
    else{
        initDesktop()
    }
})
function initDesktop(){
    document.getElementById("bodyWithStuff").innerHTML = contentBodyDesktop
    init()
}

function init(runningAsMobile){
    let searchParams = new URLSearchParams(document.location.search);
    console.log("aaa")

    let LOCATION

    if(searchParams.has("location")){

        LOCATION = locationData[searchParams.get("location")]
        
        document.getElementById("text-heading").innerHTML = `<h1>${markupHTMLConversion(LOCATION.header.title)}</h1><p>${markupHTMLConversion(LOCATION.header.flavorText)}</p>`

        document.getElementById("content-about").innerHTML = "<h2>Introduction</h2>"+markupHTMLConversion(LOCATION.about)
        document.getElementById("content-people").innerHTML = "<h2>People & Organizations</h2>"+markupHTMLConversion(LOCATION.people)
        document.getElementById("content-location").innerHTML = `<h2>The location of ${LOCATION.header.title}</h2>`+markupHTMLConversion(LOCATION.location)

        document.getElementById("content-hooks").innerHTML = "<h2>Adventure Hooks</h2>"+markupHTMLConversion(LOCATION.adventureHooks)
        document.getElementById("content-places").innerHTML = `<h2>Places of interest within ${LOCATION.header.title}</h2>`+markupHTMLConversion(LOCATION.places)
        document.getElementById("content-info").innerHTML = "<h2>About</h2>"+markupHTMLConversion(LOCATION.info)+`<p style="bottom: 0px; margin: 0%;" xmlns:cc="http://creativecommons.org/ns#">It is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank"rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>`
        if(!runningAsMobile){
            document.getElementById("creatorNameAttribution").innerText = markupHTMLConversion(LOCATION.creatorName)
        }
        
        let numHs= 1
        for(let i = 0; i<document.getElementById("content-places").children.length; i++){
            if(document.getElementById("content-places").children[i].tagName == "H3")
            {
                document.getElementById("content-places").children[i].id = `H${numHs}`
                numHs++
            }
        }
        document.getElementById("mapImg").src = "imgs/"+LOCATION.header.img+".svg"
        addMapPOIOverlay(LOCATION)
        
        setview(0)
    }

}
function addMapPOIOverlay(LOCATION){
    var svg = document.getElementById('mapoverlay'); //Get svg element
    svg.setAttribute("viewBox","0 0 530 530")
    for(let i = 0; i<LOCATION.POIs.length; i++){
        console.log(LOCATION.POIs[i])
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        newElement.setAttribute("d",`M${LOCATION.POIs[i].x},${LOCATION.POIs[i].y}c0,-5.0447 4.08954,-9.13425 9.13425,-9.13425c5.04471,0 9.13425,4.08955 9.13425,9.13425c0,5.04471 -9.13425,13.84871 -9.13425,13.84871c0,0 -9.13425,-8.804 -9.13425,-13.84871z`); //Set path's data
        newElement.style.stroke = "#000"; //Set stroke colour
        newElement.style.strokeWidth = "3px"; //Set stroke width

        //newElement.onclick = `setview(4,${LOCATION.POIs[i].ID})`
        newElement.onclick = ()=>{
            setview(4,LOCATION.POIs[i].ID)
        }
        svg.appendChild(newElement);
    }
}
function initMobile(){
    console.log("using mobile version :D")
    document.getElementById("bodyWithStuff").innerHTML = contentBodyMobile
    
    init(true)
}
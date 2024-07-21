let fontsLoaded = false
let isMobile = window.matchMedia("screen and (width < calc(95vh + 405px))")
let MOBILE = false
let otherContent = `
    <div id="dieResultPopupBox"></div>
    <div id="otherHeader"></div>
    <div id="otherImg"></div>
    <div id="otherData"></div>
`
let locationContentBodyMobile = `
<div id="text-heading"><h1>Ooops</h1>
<p>That appears to be an invalid link :( <a style="text-align: center;" href="home.html">Wanna head home?</a></div>
<div class="imgholder">
    <img src="" id="mapImg"/>
    <svg id="mapoverlay">

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
<div id="dieResultPopupBox"></div>
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
let locationContentBodyDesktop = `
<div class="imgholder">
    <img src="" id="mapImg"/>
    <svg id="mapoverlay" >

    </svg>
</div>
<div id="text-content-desktop">
<div id="text-heading">
<h1 style="font-size: 50px;">Ooops</h1>
<p>That appears to be an invalid link :(<br><a style="text-align: center;" href="home.html">Wanna head home?</a>
</p>
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
<div id="dieResultPopupBox"></div>
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
function markupHTMLConversion(text) {
    let replacedText = ""
    replacedText = text
    replacedText = replacedText.replaceAll(/</g, "&lt;")
    replacedText = replacedText.replaceAll(/>/g, "&rt;")
    replacedText = replacedText.replaceAll(/\&/g, "&amp;")
    
    
    replacedText = replacedText.replaceAll(/\*(.+)[\n]/g, `<h3>$1</h3>`)
    


    replacedText = replacedText.replace(/\[(\S+) (.+?)\]/g, `<a href="contentDisplay.html\?content=$1">$2</a>`)

    replacedText = replacedText.replaceAll(/\n/g, "<br>")
    replacedText = replacedText.replaceAll(/_(.+?)_/g, "<strong>$1</strong>")
    replacedText = replacedText.replaceAll(/\^(.+?)\^/g, "<em>$1</em>")
    replacedText = replacedText.replaceAll(/([0-9]+)d([0-9])+\+([0-9]+)?/g, "<button onclick=\"dieRoll($1,$2,$3)\">$1&#8203;d$2+$3</button>")
    replacedText = replacedText.replaceAll(/([0-9]+)d([0-9]+)/g, "<button onclick=\"dieRoll($1,$2)\">$&</button>")
    replacedText = replacedText.replaceAll(/([0-9]+)d([0-9])+\-([0-9]+)?/g, "<button onclick=\"dieRollM($1,$2,$3)\">$1&#8203;d$2+$3</button>")
    console.log(replacedText)
    return replacedText
}
MOBILE = isMobile.matches
if (isMobile.matches) {
    initMobile()
}
else {
    initDesktop()
}

document.fonts.onloadingdone = () =>{
    fontsLoaded = true;
    if (isMobile.matches) {
        initMobile()
    }
    else {
        initDesktop()
    }
 };

function resizeHeader() {
    
    let headerText = document.getElementById("mainHeader").textContent
    let fText = document.getElementById("mainFlavorText").textContent
    let boundWidth = MOBILE ? (window.innerWidth - 30) : 380


    let measuredWidth = document.getElementById("test")
    measuredWidth.innerText = headerText

    if (measuredWidth.clientWidth > boundWidth) {
        let fs = 70
        while (measuredWidth.clientWidth > boundWidth) {

            // now you have a proper float for the font size (yes, it can be a float, not just an integer)
            measuredWidth.style.fontSize = `${fs--}px`
            //console.log(header.style.fontSize)
        }
        console.log(measuredWidth.clientWidth)
        document.getElementById("mainHeader").style.fontSize = measuredWidth.style.fontSize
        measuredWidth.style.fontSize = "70px"
    }

    measuredWidth.innerText = fText

    if (measuredWidth.clientWidth > boundWidth) {
        let fs = 15
        while (measuredWidth.clientWidth > boundWidth) {

            // now you have a proper float for the font size (yes, it can be a float, not just an integer)
            measuredWidth.style.fontSize = `${fs--}px`
            //console.log(header.style.fontSize)
        }
        console.log(measuredWidth.clientWidth)
        document.getElementById("mainFlavorText").style.fontSize = measuredWidth.style.fontSize
        measuredWidth.style.fontSize = "70px"
    }

}
window.onresize = () => {
    MOBILE = isMobile.matches
    if (isMobile.matches) {
        initMobile()
    }
    else {
        initDesktop()
    }
}
isMobile.addEventListener("change", () => {
    MOBILE = isMobile.matches
    if (isMobile.matches) {
        initMobile()
    }
    else {
        initDesktop()
    }
})
function initDesktop() {
    document.getElementById("bodyWithStuff").innerHTML = locationContentBodyDesktop
    init()
}
function s(text){ //quick desanitization of all tags :D hopefully should make things pretty good :D ... 
    if(typeof text != 'string'){
        return ""
    }
    return(text.replaceAll(/</g, "&lt;").replaceAll(/>/g, "&rt;").replaceAll(/\&/g, "&amp;"))
}

function init() {
    //console.log(Object.keys(otherData))
    //console.log(Object.keys(locationData))
    
    let searchParams = new URLSearchParams(document.location.search);
    let SEARCH = 0
    let LOCATION
    if(searchParams.has("content")){
        if(Object.hasOwn(locationData,searchParams.get("content")))
        {
            SEARCH = 0
        }
        else
        {
            SEARCH = 1
        }
    }
    if(SEARCH == 1){
        LOCATION = otherData[searchParams.get("content")]
        document.getElementById("bodyWithStuff").innerHTML = otherContent
        document.getElementsByTagName("body")[0].style.overflow = "auto"
        MOBILE = false;
        if(LOCATION.type == "article"){
            document.getElementById("otherHeader").innerHTML = `<h3>${s(LOCATION.data.name)}</h3><p class="smallsubtext">${s(LOCATION.data.subtitle)}</p>
            `
            document.getElementById("otherData").innerHTML = `
            ${markupHTMLConversion(LOCATION.data.mainContent)}
            `
            if(LOCATION.src != ""){
                document.getElementById("otherImg").innerHTML = `<img src="${LOCATION.src}">`
            }            
            document.getElementById("otherHeader").classList.add("spell")
            document.getElementById("otherData").classList.add("spell")
        }
        if(LOCATION.type == "character"){
            document.getElementById("otherHeader").innerHTML = `<h3>${s(LOCATION.data.name)}</h3><p class="smallsubtext">${s(LOCATION.data.race)} ${s(LOCATION.data.class)}</p>
            `
            document.getElementById("otherData").innerHTML = `
            ${markupHTMLConversion(LOCATION.data.description)}
            `
            if(LOCATION.src != ""){
                document.getElementById("otherImg").innerHTML = `<img src="${LOCATION.src}">`
            }            document.getElementById("otherHeader").classList.add("spell")
            document.getElementById("otherData").classList.add("spell")
        }
        if(LOCATION.type == "item") {
            document.getElementById("otherHeader").innerHTML = `<h3>${s(LOCATION.data.name)}</h3><p class="smallsubtext">${s(LOCATION.data.type)}, ${s(LOCATION.data.rarity)}</p>
            `
            document.getElementById("otherData").innerHTML = `
            ${markupHTMLConversion(LOCATION.data.description)}
            `
            if(LOCATION.src != ""){
                document.getElementById("otherImg").innerHTML = `<img src="${LOCATION.src}">`
            }            document.getElementById("otherHeader").classList.add("spell")
            document.getElementById("otherData").classList.add("spell")
        }
        if(LOCATION.type == "spell") {
            let spellLevel = ""
            if(s(LOCATION.data.level)=="cantrip")
            {
                spellLevel = s(LOCATION.data.school)+'cantrip'
            }
            else{
                let i = LOCATION.data.level
                spellLevel =i + ((i==1)  ? "st": ((i==2? "nd": (i==3? "rd" : "th")))) + " level "+s(LOCATION.data.school)
            }

            document.getElementById("otherHeader").innerHTML = `<h3>${s(LOCATION.data.name)}</h3><p class="smallsubtext">${spellLevel}</p>
            `
            document.getElementById("otherData").innerHTML = `
            <strong>Casting Time: </strong>${s(LOCATION.data.castingTime)}<br>
            <strong>Range: </strong>${s(LOCATION.data.range)}<br>
            <strong>Components: </strong>${s(LOCATION.data.components)}<br>
            <strong>Duration: </strong>${s(LOCATION.data.duration)}<br>
            <div style="height: 7px; width: 100%;"></div>${markupHTMLConversion(LOCATION.data.description)}
            `
            document.getElementById("otherHeader").classList.add("spell")
            document.getElementById("otherData").classList.add("spell")

        }
        if(LOCATION.type == "monster"){
            document.getElementById("otherHeader").innerHTML = `<h1>${s(LOCATION.data.name)}</h1><p>${s(LOCATION.data.size)} ${s(LOCATION.data.type)}, ${s(LOCATION.data.alignment)}`
            if(LOCATION.src != ""){
                document.getElementById("otherImg").innerHTML = `<img src="${LOCATION.src}">`
            }
            document.getElementById("otherData").innerHTML = `
            <div class="blockSection blandFont">
                <strong>Armor Class&nbsp; </strong>${markupHTMLConversion(LOCATION.data.AC)}<br>
                <strong>Hit Points&nbsp; </strong>${markupHTMLConversion(LOCATION.data.HP)}<br>
                <strong>Speed&nbsp; </strong>${s(LOCATION.data.speed)}
            </div>
            <div class="blockSection">
                <table>
                    <tr>
                        <th>STR</th><th>DEX</th><th>CON</th><th>INT</th><th>WIS</th><th>CHA</th>
                    </tr>    
                    <tr>
                        <td>${s(LOCATION.data.STR)}</td><td>${s(LOCATION.data.DEX)}</td><td>${s(LOCATION.data.CON)}</td><td>${s(LOCATION.data.INT)}</td><td>${s(LOCATION.data.WIS)}</td><td>${s(LOCATION.data.CHA)}</td>
                    </tr>
                </table>
            </div>
            <div class="blockSection blandFont">
                ${s(LOCATION.data.savingThrows)==""? "":`<strong>Saving Throws&nbsp; </strong>${s(LOCATION.data.savingThrows)}<br>`}
                ${s(LOCATION.data.skillMods)==""? "":`<strong>Skills&nbsp; </strong>${s(LOCATION.data.skillMods)}<br>`}
                ${s(LOCATION.data.damageResistances)==""? "":`<strong>Damage Resistances&nbsp; </strong>${s(LOCATION.data.damageResistances)}<br>`}
                ${s(LOCATION.data.damageImmunities)==""? "":`<strong>Damage Immunities&nbsp; </strong>${s(LOCATION.data.damageImmunities)}<br>`}
                ${s(LOCATION.data.conditionImmunities)==""? "":`<strong>Condition Immunities&nbsp; </strong>${s(LOCATION.data.conditionImmunities)}<br>`}
                
                <strong>Senses&nbsp; </strong>${s(LOCATION.data.senses)}<br>
                <strong>Languages&nbsp; </strong>${s(LOCATION.data.languages)==""? "&mdash;" : s(LOCATION.data.languages)}<br>
                <strong>Challenge&nbsp; </strong>${s(LOCATION.data.CR)}
            </div>
            <div class="blockSection">
                <p>${markupHTMLConversion(LOCATION.data.modifiers)}</p>
                <h2>Actions</h2>
            </div>
            <div class="blockSection">
                
                <p>${markupHTMLConversion(LOCATION.data.actions)}</p>
            </div>
            <div class="blockSection" style="border-bottom: none;">
                <p>${markupHTMLConversion(LOCATION.data.description)}</p>
            </div>
            `
            
        }
    }
    if (SEARCH ==0) {
        LOCATION = locationData[searchParams.get("content")]
        document.title = "Worldbarrow - " + s(LOCATION.header.title) + " by " + s(LOCATION.creatorName)
        document.getElementById("text-heading").innerHTML = `<h1 id="mainHeader">${markupHTMLConversion(LOCATION.header.title)}</h1><p id="mainFlavorText">${markupHTMLConversion(LOCATION.header.flavorText)}</p>`

        document.getElementById("content-about").innerHTML = "<h2>Introduction</h2>" + markupHTMLConversion(LOCATION.about)
        document.getElementById("content-people").innerHTML = "<h2>People & Organizations</h2>" + markupHTMLConversion(LOCATION.people)
        document.getElementById("content-location").innerHTML = `<h2>The location of ${LOCATION.header.title}</h2>` + markupHTMLConversion(LOCATION.location)

        document.getElementById("content-hooks").innerHTML = "<h2>Adventure Hooks</h2>" + markupHTMLConversion(LOCATION.adventureHooks)
        document.getElementById("content-places").innerHTML = `<h2>Places of interest within ${LOCATION.header.title}</h2>` + markupHTMLConversion(LOCATION.places)
        document.getElementById("content-info").innerHTML = "<h2>About</h2>" + markupHTMLConversion(LOCATION.info) + `<p style="bottom: 0px; margin: 0%;" xmlns:cc="http://creativecommons.org/ns#">It is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank"rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>`
        if (!MOBILE) {
            document.getElementById("creatorNameAttribution").innerText = markupHTMLConversion(LOCATION.creatorName)
        }
        let numHs = 1
        for (let i = 0; i < document.getElementById("content-places").children.length; i++) {
            if (document.getElementById("content-places").children[i].tagName == "H3") {
                document.getElementById("content-places").children[i].id = `H${numHs}`
                numHs++
            }
        }
        document.getElementById("mapImg").src = "imgs/" + LOCATION.header.img + ".svg"
        addMapPOIOverlay(LOCATION)
        resizeHeader()
        setview(0)
        
    }

}
function addMapPOIOverlay(LOCATION) {

    var svg = document.getElementById('mapoverlay'); //Get svg element
    svg.setAttribute("viewBox", LOCATION.header.viewBoxData)
    for (let i = 0; i < LOCATION.POIs.length; i++) {
        console.log(LOCATION.POIs[i])
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        newElement.setAttribute("d", `M${LOCATION.POIs[i].x},${LOCATION.POIs[i].y}c0,-5.0447 4.08954,-9.13425 9.13425,-9.13425c5.04471,0 9.13425,4.08955 9.13425,9.13425c0,5.04471 -9.13425,13.84871 -9.13425,13.84871c0,0 -9.13425,-8.804 -9.13425,-13.84871z`); //Set path's data
        newElement.style.stroke = "#000"; //Set stroke colour
        newElement.style.strokeWidth = "3px"; //Set stroke width

        //newElement.onclick = `setview(4,${LOCATION.POIs[i].ID})`
        newElement.onclick = () => {
            setview(4, LOCATION.POIs[i].ID)
        }
        svg.appendChild(newElement);
    }
}
function initMobile() {
    document.getElementById("bodyWithStuff").innerHTML = locationContentBodyMobile
    init()
}
function dieRoll(a, b, c) {
    let finalNum = 0
    for (let i = 0; i < a; i++) {
        finalNum += Math.floor(Math.random() * b) + 1
    }
    if (typeof c != "undefined") {
        finalNum += c

    }
    document.getElementById("dieResultPopupBox").innerHTML = "<div id=\"dieResultPopup\"></div>"
    document.getElementById("dieResultPopup").style.display = "block"
    if(typeof c != "undefined"){
        document.getElementById("dieResultPopup").textContent = `${a}d${b}+${c}: ` + finalNum
    }
    else{
        document.getElementById("dieResultPopup").textContent = `${a}d${b}: ` + finalNum
    }
    setTimeout(() => {
        document.getElementById("dieResultPopup").style.display = "none"
    }, 1500)


}

function dieRollM(a, b, c) {
    let finalNum = 0
    for (let i = 0; i < a; i++) {
        finalNum += Math.floor(Math.random() * b) + 1
    }
    if (typeof c != "undefined") {
        finalNum -= c

    }
    document.getElementById("dieResultPopupBox").innerHTML = "<div id=\"dieResultPopup\"></div>"
    document.getElementById("dieResultPopup").style.display = "block"
    if(typeof c != "undefined"){
        document.getElementById("dieResultPopup").textContent = `${a}d${b}+${c}: ` + finalNum
    }
    else{
        document.getElementById("dieResultPopup").textContent = `${a}d${b}: ` + finalNum
    }
    setTimeout(() => {
        document.getElementById("dieResultPopup").style.display = "none"
    }, 1500)


}
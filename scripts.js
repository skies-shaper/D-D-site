let isMobile = window.matchMedia("screen and (width < calc(95vh + 405px))")
let MOBILE = false
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
function markupHTMLConversion(text) {
    let replacedText = ""
    replacedText = text
    replacedText = replacedText.replaceAll(/</g, "&lt;")
    replacedText = replacedText.replaceAll(/>/g, "&rt;")
    replacedText = replacedText.replaceAll(/\*(.+)[\n]/g, `<h3>$1</h3>`)

    replacedText = replacedText.replace(/\[(\S+) (.+?)\]/g, `<a href="contentDisplay.html\?location=$1">$2</a>`)

    replacedText = replacedText.replaceAll(/\n/g, "<br>")
    replacedText = replacedText.replaceAll(/_(.+?)_/g, "<strong>$1</strong>")
    replacedText = replacedText.replaceAll(/\^(.+?)\^/g, "<em>$1</em>")

    return replacedText
}
MOBILE = isMobile.matches

if (isMobile.matches) {
    initMobile()
}
else {
    initDesktop()
}

function resizeHeader() {
    let headerText = document.getElementById("mainHeader").textContent
    let fText = document.getElementById("mainFlavorText").textContent
    let boundWidth = MOBILE ? (window.innerWidth-30) : 380
    

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
window.onresize = ()=>{
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
    document.getElementById("bodyWithStuff").innerHTML = contentBodyDesktop
    init()
}

function init(runningAsMobile) {

    let searchParams = new URLSearchParams(document.location.search);
    console.log("aaa")

    let LOCATION

    if (searchParams.has("location")) {

        LOCATION = locationData[searchParams.get("location")]

        document.getElementById("text-heading").innerHTML = `<h1 id="mainHeader">${markupHTMLConversion(LOCATION.header.title)}</h1><p id="mainFlavorText">${markupHTMLConversion(LOCATION.header.flavorText)}</p>`

        document.getElementById("content-about").innerHTML = "<h2>Introduction</h2>" + markupHTMLConversion(LOCATION.about)
        document.getElementById("content-people").innerHTML = "<h2>People & Organizations</h2>" + markupHTMLConversion(LOCATION.people)
        document.getElementById("content-location").innerHTML = `<h2>The location of ${LOCATION.header.title}</h2>` + markupHTMLConversion(LOCATION.location)

        document.getElementById("content-hooks").innerHTML = "<h2>Adventure Hooks</h2>" + markupHTMLConversion(LOCATION.adventureHooks)
        document.getElementById("content-places").innerHTML = `<h2>Places of interest within ${LOCATION.header.title}</h2>` + markupHTMLConversion(LOCATION.places)
        document.getElementById("content-info").innerHTML = "<h2>About</h2>" + markupHTMLConversion(LOCATION.info) + `<p style="bottom: 0px; margin: 0%;" xmlns:cc="http://creativecommons.org/ns#">It is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank"rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>`
        if(!MOBILE){
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
    svg.setAttribute("viewBox", "0 0 530 530")
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
    console.log("using mobile version :D")
    document.getElementById("bodyWithStuff").innerHTML = contentBodyMobile

    init(true)
}
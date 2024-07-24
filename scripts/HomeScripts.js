let pages = []
listDataPoints()
loadNews()
function listDataPoints(){
    let returnList = []

    Object.keys(contentData).forEach((key)=>{
        console.log(contentData[key])
        if(contentData[key].type =="location"){
            returnList.push({text: contentData[key].data.header.title,ID:key})
        }
        else{
            returnList.push({text: contentData[key].data.name,ID:key})
        }
    })
   
    pages = returnList
    console.log(returnList)
}
document.getElementById("searchbar").addEventListener("keyup",search)

function hideSearch(){
    document.getElementById("searchResults").style.display = "none"
    console.log("done")
}

window.addEventListener("mouseup",()=>{
    console.log(document.activeElement.id)
    if(document.activeElement.id != "searchbar"){
            document.getElementById("searchResults").style.display = "none"
            console.log("done")
    }
})

function goToLocation(idx){
    console.log("cmon...")
    window.location.href = `contentDisplay.html?content=${idx}`
}
function search(){
    document.getElementById("searchResults").style.display = "block"

    let search = document.getElementById("searchbar").value
    console.log(search)
    document.getElementById("searchResults").innerHTML = ""

    let searchResults = []
    for(let i = 0; i<pages.length; i++){
        if(pages[i].text.includes(search)){
            searchResults.push(pages[i])
        }
    }
    for(let i = 0; i<searchResults.length; i++){
        document.getElementById("searchResults").innerHTML += `<button class="searchResultButton" onclick="goToLocation('${searchResults[i].ID}')">${searchResults[i].text}</button><br>`
    }
}
function loadNews(){
    //console.log(NEWS)
    document.getElementById("news").innerHTML = ""
    for(let i = 0; i<NEWS.length; i++){
        document.getElementById("news").innerHTML += `<div class="newsArticle" id="${s(NEWS[i].id)}">
        <H2>${NEWS[i].title}</H2>
        ${markupHTMLConversion(NEWS[i].article)}
    </div>
        
        `
    }
}
function s(text){ //quick desanitization of all tags :D hopefully should make things pretty good :D ... 
    if(typeof text != 'string'){
        return ""
    }
    return(text.replaceAll(/</g, "&lt;").replaceAll(/>/g, "&rt;").replaceAll(/\&/g, "&amp;"))
}
function markupHTMLConversion(text) {
    let replacedText = ""

    replacedText = text
    replacedText = replacedText.replaceAll(/\&/g, "&amp;")

    replacedText = replacedText.replaceAll(/</g, "&lt;")
    replacedText = replacedText.replaceAll(/>/g, "&rt;")
    replacedText = replacedText.replaceAll(/\"/g, "&quot;")

    
    replacedText = replacedText.replaceAll(/\*(.+)[\n]/g, `<h3>$1</h3>`)
    


    replacedText = replacedText.replace(/\[a (\S+) (.+?)\]/g, `<a href="contentDisplay.html\?content=$1">$2</a>`)
    replacedText = replacedText.replace(/\[i (\S+) (.+?)\]/g, `<img src="$1" alt="$2"></img>`)
    

    replacedText = replacedText.replaceAll(/\n/g, "<br>")
    replacedText = replacedText.replaceAll(/_(.+?)_/g, "<strong>$1</strong>")
    replacedText = replacedText.replaceAll(/\^(.+?)\^/g, "<em>$1</em>")
    return replacedText
}
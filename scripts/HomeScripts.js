let pages = []
listDataPoints()
function listDataPoints(){
    let returnList = []
    Object.keys(otherData).forEach((key)=>{
       
        returnList.push({text: otherData[key].data.name,ID:key})
    })
    Object.keys(locationData).forEach((key)=>{
       
        returnList.push({text: locationData[key].header.title,ID:key})
    })
    pages = returnList
    console.log(returnList)
}
document.getElementById("searchbar").addEventListener("keyup",search)

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
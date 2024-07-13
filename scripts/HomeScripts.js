listOfDataPoints()
function listOfDataPoints(){
    let returnList = []
    Object.keys(otherData).forEach((key)=>{
       
        returnList.push({text: otherData[key].data.name,ID:key})
    })
    Object.keys(locationData).forEach((key)=>{
       
        returnList.push({text: locationData[key].header.title,ID:key})
    })
    console.log(returnList)
}
document.getElementById("searchbar").addEventListener("keyup",()=>{
    let search = document.getElementById("searchbar").value
    console.log(search)
})
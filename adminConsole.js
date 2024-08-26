const prompt = require('prompt-sync')();
const fs = require("fs")

const SERVERDATA_PATH = "server data/content.json"

let file = fs.readFileSync(SERVERDATA_PATH)
let Obj = JSON.parse(file)

console.clear()
let cmd = ""
while(cmd != "exit"){
    cmd = prompt("enter command: ")
    console.clear()
    console.log("-------------------------")
    console.log("enter command: "+cmd)
    if(cmd == "help")
    {
        console.log(`Commands:
        >"help": creates this screen
        >"exit": closes out of this app
        >"remove: enters the removal subscript
        >"list": lists current entries
        >"publish": processes the JSON and pushes it to the website's code`)
    }
    if(cmd == "exit"){
        console.log("successfully exited app.")
        break;
    }
    if(cmd == "list"){
        list()
    }
    if(cmd =="publish"){
        publish()
    }
    if(cmd=="remove"){
        let file = fs.readFileSync(SERVERDATA_PATH)
        let Obj = JSON.parse(file)
        let i =1
        Object.keys(Obj).forEach(key => {
            console.log(i+": "+"\""+key+"\"");    
            i++
        });
        let rmIndex = prompt("which index do you want to remove? (press enter to exit this :D) ")
        
        if(rmIndex==""||isNaN(rmIndex)){

        }
        else{
            
            let actualIndex= rmIndex-1
            let isTrue = (prompt("Do you want to remove index "+rmIndex+", \""+Object.keys(Obj)[actualIndex]+"\"? [y/n] ")=="y")
            console.log(isTrue)
            if(isTrue){
                delete Obj[Object.keys(Obj)[actualIndex]]
                console.log("The entries are now: ")
                let i =1
                Object.keys(Obj).forEach(key => {
                    console.log(i+": "+"\""+key+"\"");    
                    i++
                });
                fs.writeFileSync(SERVERDATA_PATH,JSON.stringify(Obj))
            }
        }
    }
}
function list(){
    let file = fs.readFileSync(SERVERDATA_PATH)
        let Obj = JSON.parse(file)
        let i =1
        Object.keys(Obj).forEach(key => {
            console.log(i+": "+"\""+key+"\"");    
            i++
        });
}
function publish(){
    //submitting content
    let JSConverted = fs.readFileSync("server data/content.json")
    JSConverted = JSON.parse(JSConverted)
    JSConverted = JSON.stringify(JSConverted).replaceAll(/\\/g,"\\\\")
    fs.writeFileSync("scripts/content.js",`let contentData = JSON.parse(\`${JSConverted}\`)`)
    //submitting news articles
    JSConverted = fs.readFileSync("server data/news.json")
    JSConverted = JSON.parse(JSConverted)
    JSConverted = JSON.stringify(JSConverted).replaceAll(/\\/g,"\\\\")
    fs.writeFileSync("scripts/news.js",`let NEWS = JSON.parse(\`${JSConverted}\`)`)
}
//let entryToDelete = prompt("which entry do you wish to delete?")

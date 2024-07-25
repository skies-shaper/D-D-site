const http = require("http")
const fs = require("fs")
const express = require("express")
const cors = require("cors")
const openURl = require("openurl")

const app = express()
const host = 'localhost';
const port = 8000;
const corsOptions = {
    origin: 'http://localhost:8000', // Allow only requests from this origin

};


app.use(cors(corsOptions));

let EditorPage = fs.readFileSync("server data/Editor.html")
let contentData = fs.readFileSync("server data/content.json")
let newsData = fs.readFileSync("server data/news.json")
const requestListener = function (req, res) {
    console.log(req.method)
    if (req.method == "POST") {
        req.on('data', (data) => {
            let receivedFile = JSON.parse("" + data)
            console.log(receivedFile.type)
            console.log(receivedFile.data.data)
            console.log()
            if (receivedFile.type == "append") {
                 console.log("this shouldn't happen")
                let parsedData = JSON.parse(contentData)
                parsedData[encodeURIComponent(receivedFile.data.data.name)] = receivedFile.data
                fs.writeFileSync("server data/content.json", JSON.stringify(parsedData))
            }
            if (receivedFile.type == "set") {
                
            }
            if (receivedFile.type == "news") {
                console.log("yay! news!")
                let parsedData = JSON.parse(newsData)
                parsedData.unshift(receivedFile.data.data)
                fs.writeFileSync("server data/news.json", JSON.stringify(parsedData))

            }
            if(receivedFile.type =="publish"){
                publish()
            }
        })
        req.on('end', function () {
            // res.writeHead(200, { 'Content-Type': 'text/html' })
            // res.end('post received')
            return
        })
    }
    switch (req.url) {
        case "/editor":
            EditorPage = fs.readFileSync("server data/Editor.html")
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200)
            res.end(EditorPage)
            break;
        case "/data":
            contentData = fs.readFileSync("server data/content.json")
            res.setHeader("Content-type", "application/json")
            res.writeHead(200)
            res.end(contentData)
            break;
        default:
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200)
            res.end("You have attempted to access a nonexistent page. :(")
    }

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

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
openURl.open("http://localhost:8000/editor")
const http = require("http")
const fs = require("fs")
const express = require("express")
const crypto = require('crypto')
const cors = require("cors")

const app = express()
const host = 'localhost';
const port = 8000;
const corsOptions = {
    origin: 'http://localhost:8000', // Allow only requests from this origin

};

app.use(cors(corsOptions));


const EditorPage = fs.readFileSync("server data/Editor.html")
let contentData = fs.readFileSync("server data/content.json")

const requestListener = function (req, res) {
    console.log(req.method)
    if (req.method == "POST") {
        req.on('data', (data) => {
            let receivedFile = JSON.parse("" + data)
            console.log(receivedFile.data.data)
            console.log()
            if (receivedFile.type == "append") {
                let parsedData = JSON.parse(contentData)
                parsedData[encodeURIComponent(receivedFile.data.data.name)] = receivedFile.data
                fs.writeFileSync("server data/content.json", JSON.stringify(parsedData))
            }
            if (receivedFile.type == "set") {
                
            }
            if (receivedFile.type == "news") {

            }
            if(receivedFile.type =="publish"){
                publish()
            }
        })
        req.on('end', function () {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end('post received')
        })
    }
    switch (req.url) {
        case "/editor":
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
    fs.writeFileSync("content.js",`let contentData = JSON.parse(${fs.readFileSync("server data/content.json")})`)
    process.exit()
}
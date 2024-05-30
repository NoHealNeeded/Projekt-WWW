const express = require('express');
const fs = require('fs');
const fetch = require('node-fetch');
const port = 8080;
const app = express();

app.get('/', (req, res) => {
    fs.readFile('index.html', function(error, data) {
        if (error) 
        {
            res.writeHead(404);
            res.write('Error: File Not Found');
        }
        else
        {
            res.write(data)
            res.end();
        }
    })
})

app.get('/index.html', (req, res) => {
    fs.readFile('index.html', function(error, data) {
        if (error) 
        {
            res.writeHead(404);
            res.write('Error: File Not Found');
        }
        else
        {
            res.write(data)
            res.end();
        }
    })
})

app.get('/breakOut.html', (req, res) => {
    fs.readFile('breakOut.html', function(error, data) {
        if (error) 
        {
            res.writeHead(404);
            res.write('Error: File Not Found');
        }
        else
        {
            res.write(data)
            res.end();
        }
    })
})

app.get('/suchspiel.html', (req, res) => {
    fs.readFile('suchspiel.html', function(error, data) {
        if (error) 
        {
            res.writeHead(404);
            res.write('Error: File Not Found');
        }
        else
        {
            res.write(data)
            res.end();
        }
    })
})

app.get('/quiz.html', (req, res) => {
    fs.readFile('quiz.html', function(error, data) {
        if (error) 
        {
            res.writeHead(404);
            res.write('Error: File Not Found');
        }
        else
        {
            res.write(data)
            res.end();
        }
    })
})

app.get('/guessTheNumber.html', (req, res) => {
    fs.readFile('guessTheNumber.html', function(error, data) {
        if (error) 
        {
            res.writeHead(404);
            res.write('Error: File Not Found');
        }
        else
        {
            res.write(data)
            res.end();
        }
    })
})
//https://autobahn.api.bund.dev/
var street = ""A1",
"A2",
"A3",
"A4",
"A5",
"A6",
"A7",
"A8",
"A9",
"A10",
"A11",
"A12",
"A13",
"A14",
"A15",
"A17",
"A19",
"A20",
"A21",
"A23",
"A24",
"A27",
"A28",
"A29",
"A30",
"A31",
"A33",
"A36",
"A37",
"A38",
"A39",
"A40",
"A42",
"A43",
"A44",
"A45",
"A46",
"A48",
"A49",
"A52",
"A57",
"A59",
"A60",
"A60 ",
"A61",
"A62",
"A63",
"A64",
"A65",
"A66",
"A67",
"A70",
"A71",
"A72",
"A73",
"A81",
"A92",
"A93",
"A94",
"A95",
"A96",
"A98",
"A99",
"A100",
"A111",
"A113",
"A114",
"A115",
"A117",
"A143",
"A210",
"A215",
"A261",
"A270",
"A280",
"A320",
"A352",
"A369",
"A391",
"A445",
"A448",
"A480",
"A485",
"A542",
"A544",
"A553",
"A555",
"A559",
"A560",
"A562",
"A565",
"A620",
"A623",
"A640",
"A643",
"A648",
"A659",
"A661",
"A671",
"A831",
"A995"";

fetch("https://verkehr.autobahn.de/o/autobahn/"+street+"/services/warning")
.then((res)=> res.json())
.then((data)=>console.log(data))
.catch((err)=>{
    console.log("error occured", err)
});

app.listen(port, () => {
    console.log('server up')
});
//auf index.html soll man aus allen Autobahnen auswählen können und dann soll meldung angezeigt werden


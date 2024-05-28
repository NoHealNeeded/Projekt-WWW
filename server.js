const express = require('express');
const fs = require('fs');
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

app.listen(port, () => {
    console.log('server up')
});



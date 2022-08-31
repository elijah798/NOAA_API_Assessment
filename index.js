const express = require('express');
const fs = require('fs');
const papa = require('papaparse');
const cors = require('cors');


const app = express();
const port = 4000;

app.use(cors());

app.get('/station/:id', (req, res) => {
    let data = fs.createReadStream('./data/2017.csv', 'utf8');
    const id = req.params.id;
    let results = [];
    console.log(`Searching for station ${id}...`);
    papa.parse(data, {
        header: false,
        worker: true,
        step: function(row) {
            if (row.data[0] === id) {
                results.push(row.data);
            }
        },
        complete: function() {
            console.log("Returning Results");
            res.send(results);
        }
    });

 
});


app.listen(port, () => {
    console.log('App is listening on localhost:9000');
})
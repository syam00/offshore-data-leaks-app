var express = require('express');
var router = express.Router();
const officerDataService = require('../services/officer-data-service');

router.get('/', function (req, res) {

    try {
        
        officerDataService.getOfficer("don")
        .then(function(result){
            res.status(200).send(result);
        })
        .catch(function(error){
            res.status(500).send(error);
        });

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;

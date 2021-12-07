const express = require('express');
const auditData = require('../models/AuditData');
const logger = require('../config/logger');
const sampleJson = require('../config/sample');
const axios = require('axios');
require('dotenv').config()

var controller = {};


controller.getAuditData = async function (req, res) {
	try {
        let currentDate = new Date();
        let currentDay = currentDate.getDay();
        let isPrime = await checkPrime(currentDay)
        if(isPrime){
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${process.env.apiKey}`;
          const response = await axios.get(url);
          logger.info(response.data);
          // let auditDataNew = await auditData.create({ auditData: sampleJson });
          res.json({msg : "Data get Successfully", success : true, status: 200,data:response.data})
        }
        else{
          logger.info("Date is not prime so no date");
          // let auditDataNew = await auditData.create({ auditData: {msg : "Date is not prime so no date"} });
          res.json({msg : "Date is not prime so no date", success : true, status: 200})
        }
    } catch (error) {
        logger.error(error.message);
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};


async function checkPrime(value){
    for(let i = 2, s = Math.sqrt(value); i <= s; i++)
      if(value % i === 0) return false; 
    return value > 1;
  }
  
module.exports = controller;

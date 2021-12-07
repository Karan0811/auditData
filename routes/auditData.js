const express = require('express');
const auditData = require('../models/AuditData');
const router = express.Router();
const logger = require('../config/logger');
const sampleJson = require('../config/sample');

router.get('/all', async (req, res) => {
  try {
      
      let currentDate = new Date();
      let currentDay = currentDate.getDay();
      let isPrime = await checkPrime(currentDay)
      if(isPrime){
        logger.info(sampleJson);
        // let auditDataNew = await auditData.create({ auditData: sampleJson });
        res.json({msg : "Data get Successfully", success : true, status: 200,data:sampleJson})
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
})



async function checkPrime(value){
  for(let i = 2, s = Math.sqrt(value); i <= s; i++)
    if(value % i === 0) return false; 
  return value > 1;
}
module.exports = router
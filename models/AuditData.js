const mongoose = require('mongoose');
const { Schema } = mongoose;

const auditDataSchema = new Schema({
    auditData:{
        type: Object,
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  
  const auditData = mongoose.model('auditData', auditDataSchema);
  
  module.exports = auditData;
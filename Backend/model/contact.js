const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PRCNTCT=new Schema({
    name:String,
    number:Number,
    email:String,
    message:String
})

module.exports = mongoose.model('PRCNTCT',PRCNTCT)
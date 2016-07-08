var mongoose  = require( 'mongoose' );
var Schema    = mongoose.Schema;
var surveysSchema = new Schema({
    userID:{type: String},
    
  
    LD1:{type:String},
  
  
    LD2:{type:String},
  
  
    LD3:{type:String},
  
  
    LD4:{type:String},
  
  
    LD5:{type:String},
  
  
    CN1:{type:String},
  
  
    CN2:{type:String},
  
  
    CN3:{type:String},
  
  
    CN4:{type:String},
  
  
    CN5:{type:String},
  
  
    CN6:{type:String},
  
  
    CN7:{type:String},
  
  
    CN8:{type:String},
  
  
    CN9:{type:String},
  
  
    CN10:{type:String},
  
  
    CN11:{type:String},
  
  
    IDRS_AGE:{type:String},
  
  
    DEM1:{type:String},
  
  
    DEM2:{type:String},
  
  
    DEM3:{type:String},
  
  
    DEM4:{type:String},
  
  
    DEM5:{type:String},
  
  
    DEM6:{type:String},
  
  
    DEM7:{type:String},
  
  
    DEM8:{type:String},
  
  
    DEM9:{type:String},
  
  
    DEM10:{type:String},
  
  
    DEM11:{type:String},
  
  
    DEM12:{type:String},
  
  
    DEM13:{type:String},
  
  
    DEM14:{type:String},
  
  
    DAH1:{type:String},
  
  
    DAH2:{type:String},
  
  
    DAH3:{type:String},
  
  
    DAH4:{type:String},
  
  
    DAH5:{type:String},
  
  
    DAH6:{type:String},
  
  
    IDR1:{type:String},
  
  
    IDR2:{type:String},
  
  
    IDRS_FH:{type:String},
  
  
    IDR3:{type:String},
  
  
    IDR4:{type:String},
  
  
    IDR5:{type:String},
  
  
    IDR6:{type:String},
  
  
    IDR7:{type:String},
  
  
    IDR8:{type:String},
  
  
    IDRS_PHYSACT:{type:String},
  
  
    GDR1:{type:String},
  
  
    RRA1:{type:String},
  
  
    RRA2:{type:String},
  
  
    RRA3:{type:String},
  
  
    RRA4:{type:String},
  
  
    RRA5:{type:String},
  
  
    RRA6:{type:String},
  
  
    RRA7:{type:String},
  
  
    RRA8:{type:String},
  
  
    RRA9:{type:String},
  
  
    RRA10a:{type:String},
  
  
    RRA10b:{type:String},
  
  
    RRA10c:{type:String},
  
  
    RRA11:{type:String},
  
  
    RRA12:{type:String},
  
  
    RRA13:{type:String},
  
  
    HA1:{type:String},
  
  
    HA2:{type:String},
  
  
    HA3:{type:String},
  
  
    HA4:{type:String},
  
  
    HA5:{type:String},
  
  
    HA6:{type:String},
  
  
    PM1:{type:String},
  
  
    IDRS_WC:{type:String},
  
  
    IDRS_FINAL:{type:String},
  
  
    HAS1:{type:String},
  
  
    HAS2:{type:String},
  
  
    MHA1:{type:String},
  
  
    MHA2:{type:String},
  
  
    MHA3:{type:String},
  
  
    MHA4:{type:String},
  
  
    HAS3:{type:String},
  
  
    HAS4:{type:String},
  
  
    HAS5:{type:String},
  
  
    HAS6:{type:String},

 punchDateTime: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model( 'survey', surveysSchema );
var mongoose  = require( 'mongoose' );

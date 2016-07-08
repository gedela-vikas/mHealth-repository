var mongoose  = require( 'mongoose' );
var Schema    = mongoose.Schema;
var peopleSchema = new Schema({
  status: {
    type: Boolean
  },
  salutation: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  eMail: {
    type: String
  },
  userName: {
    type: String
  },
  passWord: {
    type: String
  },
  imageFile: {
    type: String
  },
  punchDateTime: {
    type: Date,
    default: Date.now
  }	
});
module.exports = mongoose.model( 'person', peopleSchema );

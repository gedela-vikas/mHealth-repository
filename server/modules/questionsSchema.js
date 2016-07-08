var mongoose  = require( 'mongoose' );
var Schema    = mongoose.Schema;
var questionsSchema = new Schema({
  QNo: {
    type: String
  },
  Q: {
    type: String
  }
});
module.exports = mongoose.model( 'question', questionsSchema );

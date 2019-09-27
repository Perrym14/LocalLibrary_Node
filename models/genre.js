var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
       name: {type: String, required:true, max:100} 
    }
    );

//Virtual method for URL
GenreSchema
.virtual('url')
.get(function(){
    return `/catalog/genre/${this.id}`;
});
module.exports = mongoose.model('Genre', GenreSchema);
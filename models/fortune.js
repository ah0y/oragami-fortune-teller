var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FortuneSchema = new Schema({
    label1: String,
    fortune1: String,
    fortune2: String,
    label2: String,
    fortune3: String,
    fortune4: String,
    label3: String,
    fortune5: String,
    fortune6: String,
    label4: String,
    fortune7: String,
    fortune8: String,
});

module.exports = mongoose.model('Fortune', FortuneSchema);
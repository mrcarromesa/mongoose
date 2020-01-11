import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mongodb', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('oke');
});

//export default mongoose;
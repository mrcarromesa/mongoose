import express from 'express';
import bodyParser from 'body-parser';

import schemaMongo from './mongodb/schemaMongo';
import './mongodb/connection';

import mongoose from 'mongoose';

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

const port = 3000

app.get('/', async(req, res) => {
    /*var animalSchema = new mongoose.Schema({ name: String, type: String });
    var Animal = mongoose.model('Animal', animalSchema);
    var dog = new Animal({ type: 'dog' });

    dog.save(function(err){
        if(err) console.log(err); 
      });*/
    //console.log(dog);
    
    /*const silence = await schemaMongo.create({ name: 'Silence 45' });
    //silence.save(function(err){});
    console.log(silence._id);

    const b = await schemaMongo.findById(silence._id);
    
    const c = await b.updateOne({name: 'updated'});
    const d = await schemaMongo.findById(silence._id);
    res.json(d);
    */
   //const a = await schemaMongo.find({});
   //const a = await schemaMongo.findById(mongoose.Types.ObjectId('5e19aca7810cf9354a21a807'));
   //res.json(a);

   //const z = await schemaMongo.findByIdAndRemove(mongoose.Types.ObjectId('5e19aca7810cf9354a21a807'));
   //res.json(z); 
   
   // Busca
   const d = await schemaMongo.findById(mongoose.Types.ObjectId('5e17e89806a53a2353364e17'));
   // Altera
   d.name = 'Novo nome';

   // Salva alterações
   d.save();

   res.json(d);
   
   //console.log(a);
    
    //res.send('Hello World!')

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
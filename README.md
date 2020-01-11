<h1>Mongo Db</h1>

<strong>Referências</strong>

* [Get Started](https://mongoosejs.com/docs/index.html)

<strong>Instalação</strong>

* Baixar dependencia do mongo:
```bash
yarn add mongoose
```

* Criar arquivo de conexão com o seguinte conteúdo:

```js
import mongoose from 'mongoose';

//url de conexao:
//mongodb:// -> sempre inicia com ele
// localhost:27017 -> endereço mais porta
// mongodb -> nome da base de dados
mongoose.connect('mongodb://localhost:27017/mongodb', {useNewUrlParser: true, useUnifiedTopology: true});
```

* Criar schema:

```js
import mongoose from 'mongoose';

const kittySchema = new mongoose.Schema({
    name: String
});

//O nome definido para model é o mesmo da collection
//que deve já existir na base de dados, em minusculo e com 's' no final
//e aqui no model pode ser em camelCase e sem 's' no final.
export default mongoose.model('schemaMongo',kittySchema);
//Nesse caso a collection no banco é schemamongos
```

* Inserir no schema:

```js
const silence = await schemaMongo.create({ name: 'Valor aqui' });
```

* Consulta:

    * [Operadores](https://docs.mongodb.com/manual/reference/operator/query-comparison/)

    * [Utilizar o ```find()```](https://mongoosejs.com/docs/api.html#model_Model.find)

    * [Queries](https://mongoosejs.com/docs/queries.html)

```js
const a = await schemaMongo.find({});
```

* Update:

```js
import mongoose from 'mongoose';

//...
// ...

    const a = await schemaMongo.findById(mongoose.Types.ObjectId('5e19aca7810cf9354a21a807'));
    
    const c = await b.updateOne({name: 'updated'});
```

* Remover pelo id:

```js
import mongoose from 'mongoose';

//...
// ...

const z = await schemaMongo.findByIdAndRemove(mongoose.Types.ObjectId('5e19aca7810cf9354a21a807'));
   res.json(z); 
```
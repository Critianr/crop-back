const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.routes')
app.set('port', process.env,PORT || 2000)

app.set('port', process.env.PORT || 4000);
// mongoose.connect('mongodb+srv://root:toor@cluster0.q692i.mongodb.net/Cluster0?retryWrites=true&w=majority')
   mongoose.connect('mongodb://root:toor@cluster0-shard-00-00.q692i.mongodb.net:27017,cluster0-shard-00-01.q692i.mongodb.net:27017,cluster0-shard-00-02.q692i.mongodb.net:27017/?ssl=true&replicaSet=atlas-v23fkp-shard-0&authSource=admin&retryWrites=true&w=majority')
  .then(db => console.log('mi basededatos'))
  .catch(err => console.log(err))
// midwalre
app.use(morgan('dev'));
app.use(cors());
//Rutas
app.use('/auth', authRoutes)
//inicio server
app.listen(app.get('port'), ()=>{
    console.log('cordeando servidor')
})
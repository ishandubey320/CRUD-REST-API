import express from 'express';
import userRoutes from './routes/users.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/', (req, res)=>{res.send('HOME PAGE REACHED')});
const PORT = 3000;

app.listen(PORT, function(err){
    if(err)console.log(error);
    console.log('server connected  to http://localhost:3000/');
});
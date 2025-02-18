const express = require('express');
const app = express();
const productRouter = require('../routes/product');
const userRouter = require('../routes/user');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use('/products', productRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
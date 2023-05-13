const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/fmsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//gives acknowledgement whether connection with mongoDB is established or not
mongoose.connection.on("connected", () => {
    console.log("MongoDB is connected!!!");
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(cors());

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);





app.listen(PORT, console.log(`Server is starting at ${PORT}`));



const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {connectDB} = require('./db.js');
const authRoutes = require('./routes/auth.routes.js');
const productsRoutes = require('./routes/products.routes.js');
const cartRoutes = require('./routes/cart.routes.js');


app.use(express.json()); //per poder llegir el body de les peticions
app.use(express.urlencoded({ limit: "25mb" }));
app.use(morgan('dev')); //anar imprimint els resultats
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });
app.use(cors({
    origin: 'http://localhost:3000', //frontend
    credentials: true,
})); // Enable CORS for all routes
app.use(cookieParser()); //per poder llegir les cookies

app.use('/api', authRoutes);
app.use('/api', productsRoutes);
app.use('/api', cartRoutes);


connectDB();

app.listen(5000, () => console.log("server started on port 5000"));



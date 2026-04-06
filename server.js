const express = require('express') //const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const configviewengine = require('./src/config/viewEngine') //Import the view engine configuration from the 'viewEngine' module
const app = express()
const port = process.env.PORT || 3000

//Template Engine
configviewengine(app) //Configure the view engine for the Express app using the imported configuration function
//Environment Variables

dotenv.config() //Load environment variables from .env file

app.use(express.static(path.join(__dirname, 'src', 'public'))) //Serve static files from the 'public' directory (Gán cho hệ thống biết đây là file static có thể truy cập trực tiếp)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/DA', (req, res) => {
  res.render('home.ejs') //Render the 'home.ejs' template when the '/DA' route is accessed;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

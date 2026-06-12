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
  res.json({ message: 'Hello World!!' }) //Send a JSON response with the message "Hello World!" when the root route is accessed
})

app.get('/user', (req, res) => {
  res.json({ name: 'DuyAnh', age: 20 }) //Send a JSON response with user information when the '/user' route is accessed
}) 

app.get('/sum', (req, res) => {
  var a = 5
  var b = 10
  res.json({ result: a + b })
})

app.get('/user/:id', (req, res) => {
  res.json({ id: req.params.id })
})

app.get('/user/:id/:name', (req, res) => {
  res.json({ id: req.params.id, name: req.params.name })
})

app.get('/query/name', (req, res) => {
  res.json(req.query)
})

app.use(express.json()) //Middleware to parse JSON request bodies, allowing the server to handle incoming JSON data in POST requests

app.post('/login', (req, res) => {

  console.log(req.body)

  res.json({ 
    message: 'Login successful'
  }) 
})

const todos = [] //Array todos

app.post('/todos', (req, res) => {
  console.log(req.body)
  todos.push(req.body)

  res.json({
    message: 'Todo created successfully'
  })
})

app.get('/todos', (req, res) => {
  res.json(todos)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`) //Start the server and log a message indicating that it is running and on which port
})

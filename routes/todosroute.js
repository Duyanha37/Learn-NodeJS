const router = require('express').Router()

router.post('/todos', todo, (req, res) => {
  console.log(req.body)
  todos.push(req.body)

  res.json({
    message: 'Todo created successfully'
  })
})

router.get('/todos', (req, res) => {
  res.json(todos)
})

router.delete('/todos/:id', (req, res) => {
  const id = req.params.id
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1)
      console.log(todos)
      
      return res.json({
        message: 'Todo deleted successfully'
      })
      
    }
  }
  return res.json({
    message: 'Todo not found'
  })
})

router.put('/todos/:id', (req, res) => {
  const id = req.params.id
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i] = req.body
      console.log(todos)
      return res.json({
        message: 'Todo updated successfully'
      })
    }
  }
  return res.json({
    message: 'Todo not found'
  })
})

router.patch('/todos/:id', (req, res) => {
  const id = req.params.id
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      for (let k in req.body) {
        todos[i][k] = req.body[k]
      }
      console.log(todos)
      return res.json({
        message: 'Todo updated successfully'
      })
    }
  }
  return res.json({
    message: 'Todo not found'
  })
})

module.exports = router
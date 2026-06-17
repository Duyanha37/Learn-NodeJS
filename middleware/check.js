const todo = (req, res, next) => {
  if (req.body.title == undefined) {
    return res.send('Title is required')
  }
  next()
}
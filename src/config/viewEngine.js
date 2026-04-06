const configviewengine = (app) =>{
    app.set('view engine', 'ejs') //Use ejs engine as template engine
    app.set('views', 'src/views' ) //Set the directory for views (templates) to './src/views'
}

module.exports = configviewengine;
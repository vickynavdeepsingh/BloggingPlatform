const express= require('express');
const app= express();
const port=process.env.PORT||5000;
const dbConnections=require('./src/database/mongoDbConnection');
const route= require('./src/routes/routes')
const userController= require('./src/controllers/userController')

app.use(express.json());
app.use(express.urlencoded({extended:true}));



        

dbConnections();


app.use('/',route)
app.listen(port,()=>{
    console.log(`server is running on https://localhost:${port}`)
})


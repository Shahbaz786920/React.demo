const express=require('express')
const server=express()
const path=require('path')
const favicon = require("serve-favicon");
server.use(favicon(path.join(__dirname,'client', "build", "favicon.ico")));
server.use(express.static(path.join(__dirname,'/client', "build")));
const createManager=require('./controllers/createManager')
const deleteManager=require('./controllers/deletemanger')
const searchManager=require('./controllers/searchmanager')
const bp=require('body-parser')
server.use(bp.json())
server.use('/',createManager)
server.use('/',deleteManager)
server.use('/',searchManager)

server.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname,'firstreactapp', "build", "favicon.ico"));
});
const port = 3001;
const host = '0.0.0.0';
server.listen(process.env.PORT||port,host, () => console.log('server started'))




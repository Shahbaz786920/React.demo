const mongoose=require('mongoose')
mongoose.connect(mongoose.connect(process.env.MONGODB_URI||'mongodb+srv://shahbaz:78692010123.zdsqd.mongodb.net/?retryWrites=true&w=majority')
.then((res) => console.log('Connected to database'))
.catch((err) => console.log('Error in connection'))

).then((res)=>console.log
('db connected')).catch((err)=>console.log(err))

const managerDetails=mongoose.model('managerDetails',{
    id:String,
    fname:String,
    phone:String,
    email:String
})


/*const manager=new managerDetails({
    id:"2112443432",
    fname:"Shahbaz",
    phone:"2142342342",
    email:"shahbaz@gmail.com"
})

manager.save().then((res)=>console.log('user is created'))
.catch((err)=>console.log('user is not created',err))*/

module.exports=managerDetails
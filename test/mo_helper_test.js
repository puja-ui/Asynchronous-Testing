const mongoose = require('mongoose');
mongoose.Promise = global.Promise //es6 Promises
before((done)=>{
    mongoose.connect("mongodb://localhost/mongotube",{useNewUrlParser:true});
    mongoose.connection
    .once("open",() => {
        //console.log("connected")
        done();
    })
    .on("error", error =>{
        console.log("your error",error);
    });
});
beforeEach((done) => {
    mongoose.connection.collections.students.drop(()=>{
        done();
        console.log("dopped DB");
    });
});
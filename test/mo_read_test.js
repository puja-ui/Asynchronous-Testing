const Student = require('../app/student');
const assert = require('assert');

describe("Read tests", () =>{
    let reader;
    beforeEach((done)=>{
        reader = new Student({name:"reader"})
        reader.save()
        .then(()=>{
            done();
        })
    })
    it("Read a reader: Reader", (done) =>{
        Student.find({name:"reader"})
        .then((avengers) =>{
            assert(reader._id.toString() === avengers[0]._id.toString());
            done();
        })
    })
})
const Student = require('../app/student');
const assert = require('assert');

describe("Delete tests",() =>{
    let deleter;
    beforeEach((done)=>{
        deleter = new Student({name:"deleter"});
        deleter.save()
        .then(()=> done());
    });

    it("A delete test for deleter",(done)=>{
        Student.findByIdAndDelete(deleter._id)
        .then(()=> Student.findOne({name:"deleter"}))
        .then((avengers)=>{
            assert(avengers=== null);
            done();
        });
    });
});
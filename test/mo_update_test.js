const Student = require('../app/student');
const assert = require('assert');

describe("Update tests",()=>{
    let updater;
    beforeEach((done)=>{
        updater = new Student({name:"updater"});
        updater.save()
        .then(()=>done());
    });
    it("set n save test",()=>{
        updater.set('name',"updater1");
        updater.save()
        .then(()=> Student.findOne({}))
        .then(avengers =>{
            assert(avengers[0]!=='updater');
        });
    });
});
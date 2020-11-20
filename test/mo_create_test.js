const Student = require('../app/student');
const assert = require('assert');

describe("Create tests", () =>{
    it("Create an user in DB", () =>{
        //assert(false);
        const sam = new Student({name: "sam"});
        sam.save()
        .then(()=>{
            assert(!sam.isNew);
        })
        .catch(()=>{
            console.log("error");
        })
    });
});

//all read tests
/*describe("Read tests", () =>{
    let reader;
    beforeEach((done)=>{
        reader = Student({name:"reader"})
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
})*/

//all delete tests
/*describe("Delete tests",() =>{
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
});*/

//all update tests
/*describe("Update tests",() =>{
    let updater;
    beforeEach((done)=>{
        updater = new Student({name:"updater"});
        updater.save()
        .then(()=>done());
    });
    it("set n save test",()=>{
        updater.set('name',"updater1");
        updater.save()
        .then(()=> Student.find({}))
        .then(avengers =>{
            assert(avengers[0]!=='updater');
        });
    });
});*/
require('dotenv').config();
let mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new mongoose.Schema({
  name: {type:String, required:true},
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const person=new Person({
    name:"Srijan Kumar",
    age:23,
    favoriteFoods:["litti-choka","chicken-curry"]
  })
  person.save(function(err,data){
       if (err) return done(err);
    return done(null, data);
  })
};

const createManyPeople = (arrayOfPeople, done) => {
 Person.create(arrayOfPeople,function(err,data){
    if(err){
      return done(err)
    }
    else{
      return done(null,data)
    }
  });
};

const findPeopleByName = (personName, done) => {
  Person.find(
    {name:personName},(err,data)=>{
    if(err) {return done(err)}
    else{
      return done(null,data)
    }

  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food },function(err,data)
  {if(err)
    {return done(err)
    }
    else{
      return done(null,data)
    }
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId,function(err,data){
    if(err)
    {return done(err)
    }
    else{
      return done(null,data)
    }
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
 Person.findById(personId,function(err,person){
       if(err){
        return done(err)
       }
      person.favoriteFoods.push(foodToAdd);
      person.save(function(err,data){
         if (err) return done(err);
         return done(null,data);
      }) ;
 });

};

var findAndUpdate = (personName, done) => {
    var update = { age: 20 } ;
 var query={name: personName}
  var options={new: true}
Person.findOneAndUpdate(query,update,options,function(err,data){
       if (err) return done(err);
       return done(null,data);
})
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId,function(err,data){
    if(err)return done(err);
    else{
      return done(null,data)
    }
  })
 
};

const removeManyPeople = (done) => {
  const nameToRemove ={name:"Mary"} ;
Person.deleteMany(nameToRemove,(err,data)=>{
  if(err) return done(err)
  else{return done(null,data)}
})
 
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods:foodToSearch}).sort({name:'asc'}).limit(2).select('-age').exec(function(err,data){
    if(err)return done(err);
    else{return done(null,data)}
  })
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

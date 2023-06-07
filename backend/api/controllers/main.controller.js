var providers = require("../models/providers.models");
const Provider = require("../db/db");
const { ObjectId } = require("mongodb");

//util functions
// check if the list is empty
function isEmptyList(obj) {
  return !obj || obj.length == 0 || Object.keys(obj).lenght == 0;
}

// create function that handle the errors
function handleError(res, error) {
    res.status(200);
    res.send("something went wrong. \n" + error);
  }
// check for existing providers

// mongodb is done this task for us
// function existProvider(id){
//     return providers.find( provider => provider.id == id);
// }

// Generate a unique provider id
// function getUniqueId(providers){
//     let min = 100000;
//     let max = 999999;
//     do{
//         var id = Math.floor(Math.random() * (max-min)+min);
//     }while(existsProvider(id));

//     return id;
// }

// CRUD  create (post ), Read (get), update (put ), Delete

// Post
// url: /api/providers
module.exports.create = function (req, res) {
 
     try{
        var provider = req.body;
 
    state :req.body.company.state,
  

Provider.create(provider)
      .then(result =>{
        res.status(201);
        res.send(result);

      }).catch (error => handleError(res, error))
  
}catch (error){
      handleError(res,error);
}

};



// GET All
// url: /api/providers
module.exports.readAll = function (req, res) {
  try {
    Provider.find()
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(400);
          res.send("List is empty , nothing to read");
        }

        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

 // GET One
// url: /api/providers
module.exports.readOne = function (req, res) {
  try {
    let id = ObjectId(req.params.id);

    Provider.find({'_id':id})
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(200);
          res.send("List is empty. ");
        }

        // let provider = providers.find((provider) => provider.id == id);
        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};
// Put
// url: /api/providers/123
module.exports.update = function (req, res) {

     try {
        let id = ObjectId(req.params.id);
        let provider = req.body;
        Provider.findOneAndUpdate({'_id':id}, provider,{new:true})
              .then(result => {
                if (isEmptyList(result)){

                  res.status(400);
                  res.send("List is empty. cannot update");
                }
                res.status(200);
                res.send(result);
              })
              .catch(error=>handleError(re.error));
     }
     catch(error){
      handleError(res,error)
     }


    
   };


 


  


// DELETE ONE
// url: /api/providers
module.exports.deleteOne = function (req, res) {

// FOR DELETE ONE IN THE DATABASE 
  try{
    let id = ObjectId(req.params.id);
    Provider.findOneAndDelete({'_id':id})
           .then(result =>{
            if (isEmptyList(result)) {
              res.status(400);
              res.send("List is empty. cannot delete");
            }
            res.status(200);
            res.send(result);

           })
           .catch(error => handleError(res,error));
  
  }
  catch (error){
    handleError(res, error);
  }


// WE DONE THIS WORK FOR MODEL AFTER THE DATABASES ADDITTION 
  // if (isEmptyList(providers)) {
  //   res.status(200);
  //   res.send("List is empty. cannot delete");
  // }

  // let id = req.params.id;
  // let provider = providers.find((provider) => provider.id == id);

  // let idx = providers.indexOf(providers);
  // // Remove the element at the index of "idx"
  // providers.splice(idx, 1);
  // res.status(200);
  // res.send(provider);
};

// Delete All
// url: /api/providers
module.exports.deleteAll = function (req, res) {
    // now function for delte all in the database 

    try {
      Provider.deleteMany({})
           .then(result => {
            if(result.deletedCount ===0){
              
              res.status(400);
              res.send('List is empty , nothing to delete.')
            }
            res.status(200);
            res.send ('All Student Or Providers Deleted.\n'+ result);
           })
           .catch(error => handleError(res, error));
    }
    catch (error){
      handleError(res, error);
    }


 // this was the work after we add databases like mongodb

  // if (isEmptyList(providers)) {
  //   res.status(200);
  //   res.send("List is empty. cannot delete");
  // }

  // providers = [];
  // res.status(200);
  // res.send("All providers Deleted");
};

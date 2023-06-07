var express = require('express');
var router = express.Router();
const mainController= require('../controllers/main.controller');


// HTTP verbs: POST, GET, PUT, DELETE 

// post   /api/providers 

router.post('/providers', mainController.create);


// Get   /api/providers
router.get('/providers', mainController.readAll);

//Get one  /api/providers/123
router.get('/providers/:id', mainController.readOne);

//put  /api/providers/123
router.put('/providers/:id', mainController.update);

// Delete one provider   /api/providers/123
router.delete('/providers/:id', mainController.deleteOne);


//Delete all providers /api/providers
router.delete('/providers', mainController.deleteAll);


// in the case of no matching api endpoints

router.post('/*', notFound)
router.get('/*', notFound)
router.put('/*', notFound)
router.delete('/*', notFound)

function notFound(req, res){
    res.status(400);
    res.send('Not valid endpoint');
}


module.exports = router;
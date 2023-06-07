const mongoose = require('mongoose');
const {providerSchema} = require('../schemas/provider.schemas');

// craete provider model 
const provider = mongoose.model('provider', providerSchema);

module.exports = {provider}
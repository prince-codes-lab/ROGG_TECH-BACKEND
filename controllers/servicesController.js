const asyncWrapper = require("../utils/asyncwrapper");





const createService = asyncWrapper();

const getAllServices = asyncWrapper();

const getAService = asyncWrapper();

const updateAService = asyncWrapper();

const deleteAService = asyncwrapper();



module.exports = {
    createService,
    getAllServices,
    getAService,
    updateAService,
    deleteAService
}
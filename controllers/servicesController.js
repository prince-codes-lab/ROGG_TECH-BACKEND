const asyncWrapper = require("../utils/asyncwrapper");
const Service = require('../db/models/services');





const createService = asyncWrapper(

    async (req, res, next) => {

        const body = req.body;

        if (!body || !body.name || !body.description) {
            return next(new AppError('Please include a valid body, and complete details', 402));
        }

        const newService = await Service.create(body);

        if (!newService) return next(new AppError('Failed to create service', 500));

        return res.status(200).json({
            status: 'success',
            data: {
                service: newService
            }
        })


    }
);

const getAllServices = asyncWrapper(
    async (req, res, next) => {
        const services = await Service.find();

        if (!services) return next(new AppError('Failed to fetch services', 500));

        return res.status(200).json({
            status: 'success',
            data: {
                services
            }
        })
    }   
);

const getAService = asyncWrapper(
    async (req, res, next) => {
        const { id } = req.params;
        const service = await Service.findById(id);

        if (!service) return next(new AppError('Service not found', 404));

        return res.status(200).json({
            status: 'success',
            data: {
                service
            }
        })
    }
);

const updateAService = asyncWrapper(
    async (req, res, next) => {
        const { id } = req.params;
        const body = req.body;
        const service = await Service.findByIdAndUpdate(id, body, { new: true });

        if (!service) return next(new AppError('Failed to update service', 500));

        return res.status(200).json({
            status: 'success',
            data: {
                service
            }
        })
    }
);

const deleteAService = asyncWrapper(
    async (req, res, next) => {
        const { id } = req.params;
        const service = await Service.findByIdAndDelete(id);

        if (!service) return next(new AppError('Failed to delete service', 500));

        return res.status(200).json({
            status: 'success',
            data: {
                service
            }
        })
    }
);



module.exports = {
    createService,
    getAllServices,
    getAService,
    updateAService,
    deleteAService
}
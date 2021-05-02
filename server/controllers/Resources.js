import Resource from '../models/Resources.js';

export const getResources = async (req,res) => {
    const resources = await Resource.find();
    res.status(200).json(resources);
}

export const getResource = async (req,res) => {
    console.log(req.params.id);
    // console.log(id);
    const resource = await Resource.findById(id);
    res.status(200).json([]);
}


export const createResource =async (req,res) => {
    const data = req.body;
    const resource = await Resource.create(data);
    res.status(201).send({success: true,data: resource});
}
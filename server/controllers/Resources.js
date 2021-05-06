import Resource from "../models/Resources.js";

export const getResources = async (req, res) => {
  const resources = await Resource.find();
  if(resources.length===0){
    res.status(200).json({success: false});
  }
  else{
    res.status(200).json(resources);
  }
};

export const getResource = async (req, res) => {
  const resource = await Resource.findById(req.params.id);
  res.status(200).json([]);
};

export const createResource = async (req, res) => {
  const resource = await Resource.create(req.body);
  res.status(201).send({ success: true, data: resource });
};

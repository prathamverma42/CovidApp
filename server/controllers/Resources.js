import Resource from "../models/Resources.js";
import City from "../models/City.js";

export const getResources = async (req, res) => {
  const resources = await Resource.find();
  if (resources.length === 0) {
    res.status(200).json({ success: false });
  } else {
    res.status(200).json(resources);
  }
};

export const createResource = async (req, res) => {
  const findcity = await City.find({ city: req.body.city });
  if (findcity.length === 0) {
    console.log(req.body.city);
    const city = await City.create({ city: req.body.city });
    req.body.city = city._id;
    const resource = await Resource.create(req.body);
    res.status(201).send({ success: true, data: resource, city: city });
  } else {
    req.body.city = findcity[0]._id;
    const resource = await Resource.create(req.body);
    res.status(201).send({ success: true, data: resource, city: findcity });
  }
};

export const getCityResources = async (req, res) => {
  const cityId = await City.find({ city: req.body.city });
  console.log(req.body);
  if (cityId.length === 0) {
    res.status(200).json("No resources");
  } else {
    const resources = await Resource.find({ city: cityId[0]._id });
    res.status(200).json(resources);
  }
};

export const deleteResource = async (req, res) => {
  const del = await Resource.findByIdAndDelete(req.params.id);
  res.status(200).json({ data: [] });
};

import mongoose from 'mongoose';

const CitySchema = mongoose.Schema({
    city : String
})

const City=mongoose.model('city',CitySchema);
export default City;
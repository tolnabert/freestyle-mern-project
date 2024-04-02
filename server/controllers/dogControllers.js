import Pet from "../model/Pet.js";

export const getAllDogs = async (req, res, next) => {
  try {
    const { search } = req.query;
    const query = search ? { name: { $regex: search, $options: "i" } } : {};
    const dogs = await Pet.find(query);
    res.status(200).json(dogs);
  } catch (error) {
    next(error);
  }
};

export const getDog = async (req, res, next) => {
  //updated with try catch
  try {
    const { id } = req.params;
    const dog = await Pet.findById(id);
    if (!dog) {
      return res.status(404).json({ msg: `Dog not found with ID: ${id}` });
    }
    res.status(200).json(dog);
  } catch (error) {
    next(error);
  }
};

export const createDog = async (req, res, next) => {
  try {
    const dog = await Pet.create(req.body);
    res.status(201).json({ msg: "Dog created", dog });
  } catch (error) {
    next(error);
  }
};

export const updateDog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedDog = await Pet.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDog) {
      return res.status(404).json({ msg: `Dog not found with ID: ${id}` });
    }
    res.status(200).json({ msg: "Dog updated", dog: updatedDog });
  } catch (error) {
    next(error);
  }
};

export const deleteDog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedDog = await Pet.findByIdAndDelete(id);
    if (!deletedDog) {
      return res.status(404).json({ msg: `Dog not found with ID: ${id}` });
    }
    res.status(200).json({ msg: "Dog deleted", dog: deletedDog });
  } catch (error) {
    next(error);
  }
};

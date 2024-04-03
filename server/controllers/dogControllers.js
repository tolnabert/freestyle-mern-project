import Dog from "../model/Dog.js";

export const getAllDogs = async (req, res, next) => {
  try {
    const { search, sortOrder } = req.query;

    let query = search ? { name: { $regex: search, $options: "i" } } : {};
    let sort = { name: 1 };

    if (sortOrder === "desc") {
      sort = { name: -1 };
    }

    const dogs = await Dog.find(query).sort(sort);
    res.status(200).json(dogs);
  } catch (error) {
    next(error);
  }
};

export const getDog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dog = await Dog.findById(id);
    if (!dog) {
      return res.status(404).json({ message: `Dog not found with ID: ${id}` });
    }
    res.status(200).json(dog);
  } catch (error) {
    next(error);
  }
};

export const createDog = async (req, res, next) => {
  console.log(req.body);
  try {
    const dog = await Dog.create(req.body);
    res.status(201).json({ message: "Dog created successfully", dog });
  } catch (error) {
    console.error("Error in Dog.create:", error);
    res
      .status(500)
      .json({ message: "An error occurred while creating a dog." });
    next(error);
  }
};

export const updateDog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedDog = await Dog.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDog) {
      return res.status(404).json({ message: `Dog not found with ID: ${id}` });
    }
    res
      .status(200)
      .json({ message: "Dog updated successfully", dog: updatedDog });
  } catch (error) {
    next(error);
  }
};

export const deleteDog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedDog = await Dog.findByIdAndDelete(id);
    if (!deletedDog) {
      return res.status(404).json({ message: `Dog not found with ID: ${id}` });
    }
    res
      .status(200)
      .json({ message: "Dog deleted successfully", dog: deletedDog });
  } catch (error) {
    next(error);
  }
};

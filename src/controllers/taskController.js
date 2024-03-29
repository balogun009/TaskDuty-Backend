import Task from "../models/task.js";
import validateID from "../utils/validateID.js";

const getAllTask = async (req, res) => {
  const tasks = await Task.find({});

  res.status(200).json({ tasks: tasks });
};

const createTask = async (req, res) => {
  const { title, description, tags } = req.body;

  if (!title || !description || !tags) {
    return res.status(400).json({ message: "Please provide all details" });
  }

  const task = await Task.create({ ...req.body });

  res.status(201).json( { message: "Task created successfully!" });
};

const editTask = async (req, res) => {
  const { id } = req.params;

  if (!validateID) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!task) {
    return res.status(404).json({ message: `No Task with ID:${id}` });
  }

  res.status(200).json({ message: "Task Updated Successfully" });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!validateID) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOneAndDelete({ _id: id }, { ...req.body });

  if (!task) {
    return res.status(404).json({ message: `No Task with ID:${id}` });
  }

  res.status(200).json({ message: "Task Successfully Deleted" });
};

const eachTask = async (req, res) => {
  const { id } = req.params;

  if (!validateID) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOne({ _id: id }, {...req.body});

  if (!task) {
    return res.status(404).json({ message: `No Task with ID:${id}` });
  }

  res.status(200).json({ task });
};

export default { getAllTask, createTask, editTask, deleteTask, eachTask };

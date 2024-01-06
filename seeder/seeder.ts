import Room from "../app/backend/models/room";
import mongoose from "mongoose";
import { rooms } from "./data";

const seedRooms = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookit-v2");
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("Rooms are added");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedRooms();

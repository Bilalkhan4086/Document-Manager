import { useContext } from "react";
import DriveContext from "../contexts/DriveContext";

const useDrive = () => useContext(DriveContext);

export default useDrive;

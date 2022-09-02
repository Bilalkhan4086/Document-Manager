import React, { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const DriveContext = createContext({});
const mainDriveId = uuidv4();
let currentDriveId = mainDriveId;
export const DriveProvider = ({ children }) => {
  // pseudo database

  let [driveData, setDriveData] = useState({
    id: mainDriveId,
    name: "Drive",
    isFolder: true,
    createdAt: new Date(Date.now()).toLocaleString().split(",")[0],
    subFolder: [],
  });

  const setCurrentDriveId = (driveId) => {
    currentDriveId = driveId;
  };
  const addFile = (incommingData) => {
    function formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return "0 Bytes";

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    const findBaseFolder = (data, dataToBeAdd) => {
      console.log("data.id", data.id);
      console.log("currentDriveId", currentDriveId);
      if (data.id === currentDriveId) {
        data.subFolder.push(dataToBeAdd);
        return;
      } else if (data.subFolder) {
        console.log("data.subFolder", data.subFolder);
        for (const d of data.subFolder) {
          findBaseFolder(d, dataToBeAdd);
        }
      } else {
        console.log(data);
      }
    };

    new Promise(() => {
      let obj = {
        id: incommingData.id || uuidv4(),
        name: incommingData.file?.name || incommingData.name,
        isFolder: incommingData.file === undefined,
        ext: incommingData.file?.name.includes(".")
          ? incommingData.file.name.split(".")[
              incommingData.file.name.split(".").length - 1
            ]
          : "",
        createdAt: new Date(Date.now()).toLocaleString().split(",")[0],
        size: incommingData.name
          ? undefined
          : formatBytes(incommingData.file?.size),
        type: incommingData.file?.type,
        orignalFile: incommingData.file,
        subFolder: incommingData.name ? [] : undefined,
      };

      let tempData = { ...driveData };
      console.log("tempData before rec :", tempData);
      findBaseFolder(tempData, obj);

      console.log("tempData after rec :", tempData);
      setDriveData(tempData);
    });
  };

  return (
    <DriveContext.Provider
      value={{
        addFile,
        driveData,
        setCurrentDriveId,
        currentDriveId,
      }}
    >
      {children}
    </DriveContext.Provider>
  );
};

export default DriveContext;

import React, { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const DriveContext = createContext({});

export const DriveProvider = ({ children }) => {
  // pseudo database
  let [driveData, setdriveData] = useState([]);

  const addFile = (incommingData) => {
    function formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return "0 Bytes";

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    new Promise(() => {
      let obj = {
        id: uuidv4(),
        name: incommingData.file?.name || incommingData.name,
        isFolder: incommingData.file === undefined,
        ext: incommingData.file?.name.includes(".")
          ? incommingData.file.name.split(".")[
              incommingData.file.name.split(".").length - 1
            ]
          : "",
        createdAt: new Date(Date.now()).toLocaleString().split(",")[0],
        size: formatBytes(incommingData.file?.size),
        type: incommingData.file?.type,
        orignalFile: incommingData.file,
      };
      setdriveData([...driveData, obj]);
    });
  };

  return (
    <DriveContext.Provider
      value={{
        addFile,
        driveData,
      }}
    >
      {children}
    </DriveContext.Provider>
  );
};

export default DriveContext;

// import { v4 as uuidv4 } from "uuid";
// const extantion = ["docx", "csv", "jpg", "mp4", "mp3"];
// // pseudo database
// let data = [];
// for (let i = 1; i <= 40; i++) {
//   let id = uuidv4();
//   data.push({
//     id,
//     name: `John ${i}`,
//     isFolder: i % 2 === 0,
//     ext: i % 2 !== 0 ? extantion[i % 5] : "",
//     createdAt: new Date(Date.now()).toLocaleString().split(",")[0],
//     size: 100 + i * 2,
//   });
// }

// // pseudo API endpoints
// export const getDataReq = () =>
//   new Promise((resolve, reject) => {
//     if (!data) {
//       return setTimeout(() => reject(new Error("Users not found")), 250);
//     }

//     setTimeout(() => resolve({ data: data }), 2000);
//   });

// export const addFile = (incommingData) => {
//   new Promise((resolve, reject) => {
//     let obj = {
//       id: uuidv4(),
//       name: incommingData.file?.name || incommingData.name,
//       isFolder: incommingData.file?.type !== null || true,
//       ext: incommingData.file?.type,
//       createdAt: new Date(Date.now()).toLocaleString().split(",")[0],
//       size: incommingData.file?.size,
//     };

//     data.push(obj);

//     if (!incommingData) {
//       return setTimeout(() => reject(new Error("Data not found")), 250);
//     }

//     setTimeout(() => resolve({ data }), 2000);
//   });
// };

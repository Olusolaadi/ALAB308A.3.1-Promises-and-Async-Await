// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";
  // ========== ALAB 308A.3.1: Promises and async/await ==========

  // A function that takes an id parameter.
async function getUserData(id) {
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3
      };

// Step 1: Find the users in the databases using central.
const findTheDatabase = await central(id);
//console.log(findTheDatabase);

// Step 2: User's basic information
//const basicInfo = await dbs[findTheDatabase](id);
//console.log(basicInfo);

// Step 3: Vault personal data
//const vaultData = await vault(id);
//console.log(vaultData);

//return {
   // ...basicInfo,
  //  ...vaultData,
//};
//}

// Using Promise.all() to handle requests concurrently where applicable.

Promise.all([dbs[findTheDatabase](id), vault(id)]).then(([basicInfo, vaultData]) => {
    return {"id": id, ...basicInfo, ...vaultData};
  });
}

 const user = getUserData(5)
 console.log(user);

 // Get current time in milliseconds.
 
  const start = Date.now();
 user
 .then (user_data => {
    // Get the current time in milliseconds.
    const end = Date.now();
    
    // calculate the time it took to run the function in milliseconds.
    const time = end - start;
    console.log(user_data);
    console.log(`seconds elapsed: ${time} ms`);
 });
 try {
    getUserData(4);
 } catch (error) {
    console.error(error);
 }











    


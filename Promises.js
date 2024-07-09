let promiseOne = new Promise(function (resolve, reject) {
  console.log("Fetching the data ...");
  setTimeout(() => {
    let data = {
      user: "Ronak",
      age: 27,
      position: "Developer",
      laptops: [
        { laptopId: 1, company: "Dell" },
        { laptopId: 2, company: "Apple" },
      ],
    };
    console.log("[DONE] Fetching the data.");
    resolve(data);
  }, 3000);
});

promiseOne
  .then(function (userData) {
    console.log("Promise is successfully resolved");
    console.log("Fetched Data info Username is " + userData.user);
    return userData.laptops, userData.user;
  })
  .finally(() => console.log("Final cleaning up.."))
  .then((laptopsInfo, uname) => {
    let length = laptopsInfo.length;
    console.log(`${uname} is having ${length} laptops`);
  });

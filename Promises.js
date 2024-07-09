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
    return userData;
  })
  .finally(() => console.log("Final cleaning up.."))
  .then((udata) => {
    let length = udata.laptops.length;
    console.log(`${udata.user} is having ${length} laptops`);
    return [udata.user, length];
  })
  .then(([udata, length]) =>
    console.log(`This is too manay count ${length} for the user ${udata}`)
  ).finally(()=>{console.log("Final CleanUP !!");});



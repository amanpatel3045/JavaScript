const pObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
    reject("promise rejected");
  }, 500);
});

pObj
  .then((rollno) => {
    console.log(rollno);
  })
  .catch((error) => {
    console.log(error);
  });

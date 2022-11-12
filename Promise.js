//Promise without async
//we are not using async isiliye given code direct value return karega
// PROMISE RETURN KRNE K LIYE async use krenge.

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

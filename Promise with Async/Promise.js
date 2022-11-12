const pObj = new Promise((resolve,reject)=>{
  setTimeout(()=>{
let roll_no = [1,2,3,4,5];
resolve(roll_no);
  },500)
})
//for getting data using async
async function getData(){
  const rollnodata = await pObj;
console.log(rollnodata);
}
getData();

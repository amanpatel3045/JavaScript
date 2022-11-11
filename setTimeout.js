const funA = () => {
    setTimeout(function(){
      console.log(`Executing in settimeout()`);
    },500)
}
const funB = () => {
    console.log(`funB executed`);
}
funA();
funB();

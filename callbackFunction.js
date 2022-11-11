const fun1 = (cb) => {
    console.log(`fun1 executed`);
cb();
}

const fun2 = () => {
console.log(`fun2 executed`);
}

fun1(fun2);

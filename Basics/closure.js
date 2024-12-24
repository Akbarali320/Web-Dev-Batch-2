function add(val1) {
    let add = (val2) => {
        return val1 + val2
    }
    return add;
}
let sum=add(2);
console.log("closure add", sum(3))
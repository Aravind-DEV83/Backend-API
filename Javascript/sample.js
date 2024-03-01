const product = {
    Name: "Parker Jotter",
    Price: 270,
    discount: 5,
    age: 23
};

// let Name = prompt("Enter your Full Name")

// let userName = "@" + Name + Name.length
let arr = [250, 645, 300, 900, 50];
let su = 0;
const discount = 10;
for (let i = 0; i<arr.length; i++) {
    arr[i] = arr[i] - arr[i] / discount
}
console.log(arr);


let jsonData = JSON.stringify(product)
let jsobject = JSON.parse(jsonData)
console.log(typeof jsonData, jsobject["Name"])
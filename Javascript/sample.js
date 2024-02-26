const product = {
    Name: "Parker Jotter",
    Price: 270,
    discount: 5,
    age: 23
};

// let Name = prompt("Enter your Full Name")

// let userName = "@" + Name + Name.length

let jsonData = JSON.stringify(product)
let jsobject = JSON.parse(jsonData)
console.log(typeof jsonData, jsobject["Name"])
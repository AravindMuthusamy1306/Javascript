let person = {
    name: "Aravind",
    age: 22,
    city: "Kadayanallur"
};

for (let key in person){
    console.log(key + ":"+ person[key]);
}
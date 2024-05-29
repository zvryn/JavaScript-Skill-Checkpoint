// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(getData=>{
    console.log(getData);
return getData.json()})
.then(add=>{
    const newUsers = add.map(user=>user.name);
    console.log(newUsers);
})


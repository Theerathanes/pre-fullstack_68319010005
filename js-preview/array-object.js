// อาร์เรย์ และ ออบเจคต์

// Array
const students = ["Eart", "Tho", "silapakron", "Ood", "Matus"];

console.log(`ก. แสดงทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang","anutin");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ทำการแสดงผลลัพท์ที่อัพเดต ${students} จำนวนรายชื่อ ${students.length} คน`)

// object   
const student ={
    id: 101,
    name: "sitthichok",
    age: 100,
    major: "Information Technology",
};
console.log(`name ${student.name}`);
console.log(`Major ${student.major}`);

// array + object
const  studentList = [
    {id:101, name:"sitthichok", age:100, major: "Technology"},
    {id:102, name:"Eart", age:50, major: "Roblox company"},
    {id:103, name:"Sompong", age:1, major: "Free fire of valor"},
];

// map : แปลงทุกตัว ให้ได้array ใหม่
const names = studentList.map((s) => `ชื่อ ${s.name} อายุ ${s.age} แผนก ${s.major}`);
console.log(`ข้อมูลที่ใช้งาน map : ${names}`);
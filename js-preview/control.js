//เงื่อนไข และ วนซ้ำ

function checkscore(score){
    if (score >= 50){
        return "PASS";
    } else {
        return "Fail";
    }
}

    console.log(`75 คะแนน ${checkscore(75)}`);
    console.log(`49 คะแนน ${checkscore(49)}`);

const result = 62 >= 50 ? "PASS" : "Fail";
console.log(`62 คะแนน ${result}`);

// for loop
for (let i = 1; i <=10; i++){
    console.log(`รอบที่ ${i}`);
}
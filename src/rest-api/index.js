import namor from "namor";
import { GET_RANDOES, FETCH_STUDENTS } from "../store/actions";

export function api(data){
    switch(data.type){
        case GET_RANDOES:
            return new Promise(resolve => resolve(generateRandoes(data.count)));
        case FETCH_STUDENTS:
            return Promise.resolve(generateStudents);
        default: return Promise.reject("API not supported");
    }
}

function generateRandoes(count){
    count = count || 10;
    const randoes = [];
    while(count--){
        randoes.push({
            name: namor.generate({ words: 2, saltLength: 0, separator: " " }),
            age: parseInt(Math.random()*100)
        });
    }
    return randoes;
}

function generateStudents(count){
    count = count || 10;
    const students = [];
    while(count--){
        students.push({
            name: namor.generate({ words: 2, saltLength: 0, separator: " " }),
            age: parseInt(Math.random()*25),
            overallGrade: String.fromCharCode('A'.charCodeAt(0)+ parseInt(Math.floor(Math.random()*5)))
        });
    }
    return students;
}
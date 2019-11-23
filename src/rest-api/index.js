import namor from "namor";
import { GET_RANDOES } from "../store/actions";

export function api(data){
    switch(data.type){
        case GET_RANDOES:
            return new Promise(resolve => resolve(generateRandoes(data.count)));
        default: return Promise.reject("API not supported");
    }
}

function generateRandoes(count){
    count = count || 10;
    const randoes = [];
    while(count--){
        randoes.push({
            name: namor.generate(),
            age: parseInt(Math.random()*100)
        });
    }
    return randoes;
}
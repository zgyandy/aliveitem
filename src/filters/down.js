import {adjust} from './adjust';

export const down= (input) => {
    let d=new Date();
    d.setTime(input);
    return `${adjust(d.getHours())}:${adjust(d.getMinutes())}:${adjust(d.getSeconds())}`;
};
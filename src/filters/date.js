import {adjust} from './adjust';

export const date=(input)=>{
  let d=new Date();
  d.setTime(input);
  return `${d.getFullYear()}年${adjust(d.getMonth()+1)}月${adjust(d.getDate())}日 ${adjust(d.getHours())}:${adjust(d.getMinutes())}:${adjust(d.getSeconds())}`;

};
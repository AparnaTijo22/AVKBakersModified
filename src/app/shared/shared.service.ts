import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message:String = '';
  arr: String[] = [];
  numArr: number[] = [];

  constructor() { }

  setMessage(data: String){
    this.message = data;
  }
  getMessage(){
    return this.message;
  }

  setArrayMessage(date: String[]){
    this.arr = date;
  }
  getArrayMessage(){
    return this.arr;
  }

  setArrayNumMessage(date: number[]){
    this.numArr = date;
  }
  getArrayNumMessage(){
    return this.numArr;
  }



}

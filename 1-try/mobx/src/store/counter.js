import { makeAutoObservable, makeObservable } from "mobx";

class Counter {
  count =0;

  timer = 60;
  constructor(){
    makeAutoObservable(this);
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  get total(){
    return `count + timer = ${this.timer + this.count}`;
  }

}

export default new Counter();
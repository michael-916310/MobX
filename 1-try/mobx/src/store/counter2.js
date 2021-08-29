import { observable, action } from "mobx";

const counter2 = observable({
  count: 0,
  decrement: action(function(){
    counter2.count--;
  }),
  increment:action(function(){
    counter2.count++;
  })
})

export default counter2;
import { Data } from "./src/Data/Data";
import { Observable } from "./src/Observable/Observable";
import { Observer } from "./src/Observer/Observer";

const observableObj = new Observable();
const data = new Data(10, "Monsoon");
const observer1 = new Observer(observableObj, "Observer1");
const observer2 = new Observer(observableObj, "Observer2");

observableObj.add(observer1);
observableObj.add(observer2);
observableObj.setData(data);

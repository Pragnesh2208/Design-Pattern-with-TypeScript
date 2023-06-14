import { Data } from "../Data/Data";
import { InterfaceData } from "../Models/InterfaceData";
import { InterfaceObservable } from "../Models/InterfaceObservable";
import { InterfaceObserver } from "../Models/InterfaceObserver";

export class Observer implements InterfaceObserver {
  ObservableObject: InterfaceObservable;
  data: InterfaceData = new Data(0, "Monsoon");
  name: string;

  constructor(ObservableObject: InterfaceObservable, name: string) {
    this.ObservableObject = ObservableObject;
    this.name = name;
  }
  update(): void {
    this.data = this.ObservableObject.getData();
    console.log(this.data);
  }
}

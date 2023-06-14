import { Data } from "../Data/Data";
import { InterfaceData } from "../Models/InterfaceData";
import { InterfaceObservable } from "../Models/InterfaceObservable";
import { InterfaceObserver } from "../Models/InterfaceObserver";

export class Observable implements InterfaceObservable {
  private data: InterfaceData = new Data(0, "Monsoon");
  private observerList: InterfaceObserver[] = [];

  public add(Observer: InterfaceObserver): void {
    this.observerList.push(Observer);
  }

  public remove(Observer: InterfaceObserver): void {
    this.observerList.filter((val) => val !== Observer);
  }

  public notify(): void {
    this.observerList.map((observer) => {
      observer.update();
    });
  }

  public getData(): InterfaceData {
    return this.data;
  }

  public setData(data: InterfaceData): void {
    this.data = data;
    this.notify();
  }
}

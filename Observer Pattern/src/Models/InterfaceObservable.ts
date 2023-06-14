import { InterfaceData } from "./InterfaceData";
import { InterfaceObserver } from "./InterfaceObserver";

export interface InterfaceObservable {
  add(attr: InterfaceObserver): void;
  remove(attr: InterfaceObserver): void;
  notify(): void;
  getData(): InterfaceData;
  setData(attr: InterfaceData): void;
}

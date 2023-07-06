import { Constants } from "../Constants/constants";
import IWrite from "../Models/InterfaceWriter";
import ConsoleWriter from "./ConsoleWriter/ConsoleWriter";
import FileWriter from "./DefaultWriter/DefaultWriter";

export default class Writer implements IWrite {
  writer: IWrite;
  constructor(writerType: string) {
    if (writerType === Constants.CONSOLE) {
      this.writer = new ConsoleWriter();
    } else {
      this.writer = new FileWriter();
    }
  }
  write = <T>(result: T) => {
    this.writer.write(result);
  };
}

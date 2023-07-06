import IWriter from "../../Models/InterfaceWriter";

export default class ConsoleWriter implements IWriter {
  write = <T>(result: T) => {
    console.log(result);
  };
}

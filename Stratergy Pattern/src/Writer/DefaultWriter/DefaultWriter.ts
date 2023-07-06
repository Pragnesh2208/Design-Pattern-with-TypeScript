import IWriter from "../../Models/InterfaceWriter";

export default class DefaultWriter implements IWriter {
  write = <T>(result: T) => {
    console.log("File Write", result);
  };
}

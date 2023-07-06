import IWriter from "../Models/InterfaceWriter";
import { IWriterType } from "../Models/InterfaceWriterType";
import Writer from "../Writer/writer";

export default class Simulation {
  writer: IWriter;

  constructor(writerType: IWriterType) {
    this.writer = new Writer(writerType);
  }
  
  run(): void {
    const rnd = Math.random();
    const result = rnd <= 0.5 ? "Head" : "Tail";
    this.writer.write(result);
  }
}

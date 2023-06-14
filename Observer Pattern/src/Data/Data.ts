import { InterfaceData } from "../Models/InterfaceData";

export class Data implements InterfaceData {
  tempreture: number = 0;
  season: string = "";

  constructor(tempreture: number, season: string) {
    this.tempreture = tempreture;
    this.season = season;
  }
}

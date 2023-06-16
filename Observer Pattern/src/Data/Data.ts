import { InterfaceData, Season } from "../Models/InterfaceData";

export class Data implements InterfaceData {
  tempreture: number = 0;
  season: Season;

  constructor(tempreture: number, season: Season) {
    this.tempreture = tempreture;
    this.season = season;
  }
}

import { LightningElement, api } from "lwc";

export default class showTimeComponent extends LightningElement {
  @api showHours;
  @api hours;
  @api showMinutes;
  @api minutes;
  @api showSeconds;
  @api seconds;
}

import { LightningElement, api } from "lwc";

export default class showTimeComponent extends LightningElement {
  showSeconds;
  showMinutes;
  showHours;
  @api hours;
  @api minutes;
  @api seconds;

  @api HandleChangeFunction() {
    if (this.seconds > 0) {
      this.showSeconds = true;
    } else {
      this.showSeconds = false;
    }
    if (this.minutes > 0) {
      this.showMinutes = true;
    } else {
      this.showMinutes = false;
    }

    if (this.hours > 0) {
      this.showHours = true;
    } else {
      this.showHours = false;
    }
  }

  @api ResetHandle() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }
}

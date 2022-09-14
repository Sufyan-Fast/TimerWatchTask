import { LightningElement, api } from "lwc";

export default class showTimeComponent extends LightningElement {
  showSeconds = false;
  showMinutes = false;
  showHours = false;
  @api hours;
  @api minutes;
  @api seconds;

  @api HandleChangeFunction(field, eventValue) {
    const EVENT_CHANGE_VALUES = {
      SECONDS: "seconds",
      MINUTES: "minutes",
      HOURS: "hours"
    };

    if (field === EVENT_CHANGE_VALUES.SECONDS) {
      this.seconds = eventValue;
      if (this.seconds > 0) {
        this.showSeconds = true;
      }
    } else if (field === EVENT_CHANGE_VALUES.MINUTES) {
      this.minutes = eventValue;
      if (this.minutes > 0) {
        this.showMinutes = true;
      }
    } else if (field === EVENT_CHANGE_VALUES.HOURS) {
      this.hours = eventValue;
      if (this.hours > 0) {
        this.showHours = true;
      }
    }
  }

  @api TimeCalculationFunction() {
    if (this.seconds <= 0 && this.minutes > 0) {
      this.seconds = 59;
      this.minutes = this.minutes - 1;
      if (this.minutes == 0 && this.hours == 0) {
        this.showMinutes = false;
      }
    } else if (this.minutes <= 0 && this.seconds <= 0 && this.hours > 0) {
      this.seconds = 59;
      this.minutes = 59;
      this.hours = this.hours - 1;
      if (this.hours == 0) {
        this.showHours = false;
      }
    } else if (this.seconds <= 0 && this.minutes <= 0 && this.hours <= 0) {
      this.ResetHandle();
    } else {
      this.seconds = this.seconds - 1;
    }
  }

  @api ResetHandle() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.showSeconds = false;
    this.showMinutes = false;
    this.showHours = false;
  }
}

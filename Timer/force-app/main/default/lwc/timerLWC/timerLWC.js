import { LightningElement } from "lwc";

export default class TimerLWC extends LightningElement {
  showStartBtn = true;
  showHoursMinutesSeconds = true;
  showSeconds = false;
  showMinutes = false;
  showHours = false;
  seconds = 0;
  minutes = 0;
  hours = 0;

  handleChange(event) {
    const field = event.target.name;
    if (field === "seconds") {
      this.seconds = event.target.value;
      if (this.seconds > 0) {
        this.showSeconds = true;
      }
    } else if (field === "minutes") {
      this.minutes = event.target.value;
      if (this.minutes > 0) {
        this.showMinutes = true;
      }
    } else if (field === "hours") {
      this.hours = event.target.value;
      if (this.hours > 0) {
        this.showHours = true;
      }
    }
  }

  timeIntervalInstance;

  start(event) {
    this.showStartBtn = false;
    this.showHoursMinutesSeconds = false;
    const parentThis = this;

    this.timeIntervalInstance = setInterval(function () {
      if (parentThis.seconds <= 0 && parentThis.minutes > 0) {
        parentThis.seconds = 59;
        parentThis.minutes = parentThis.minutes - 1;
        if (parentThis.minutes == 0 && parentThis.hours == 0) {
          parentThis.showMinutes = false;
        }
      } else if (
        parentThis.minutes <= 0 &&
        parentThis.seconds <= 0 &&
        parentThis.hours > 0
      ) {
        parentThis.seconds = 59;
        parentThis.minutes = 59;
        parentThis.hours = parentThis.hours - 1;
        if (parentThis.hours == 0) {
          parentThis.showHours = false;
        }
      } else if (
        parentThis.seconds <= 0 &&
        parentThis.minutes <= 0 &&
        parentThis.hours <= 0
      ) {
        parentThis.showStartBtn = true;
        parentThis.template
          .querySelectorAll("lightning-input")
          .forEach((element) => {
            element.value = null;
          });
        parentThis.showMinutes = false;
        parentThis.showHours = false;
        parentThis.showSeconds = false;

        clearInterval(parentThis.timeIntervalInstance);
      } else {
        parentThis.seconds = parentThis.seconds - 1;
      }
    }, 1000);
  }

  stop(event) {
    this.showStartBtn = true;
    this.showHoursMinutesSeconds = true;
    clearInterval(this.timeIntervalInstance);
  }

  reset(event) {
    this.template.querySelectorAll("lightning-input").forEach((element) => {
      element.value = null;
    });
    this.showHoursMinutesSeconds = true;
    this.showStartBtn = true;
    this.showMinutes = false;
    this.showHours = false;
    this.showSeconds = false;
    clearInterval(this.timeIntervalInstance);
  }
}

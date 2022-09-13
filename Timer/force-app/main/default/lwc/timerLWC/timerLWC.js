import { LightningElement } from "lwc";

export default class TimerLWC extends LightningElement {
  showStartBtn = true;
  showTimeInputs = true;
  showSeconds = false;
  showMinutes = false;
  showHours = false;
  seconds = 0;
  minutes = 0;
  hours = 0;

  handleChange(event) {
    const EVENT_CHANGE_VALUES = {
      SECONDS: "seconds",
      MINUTES: "minutes",
      HOURS: "hours"
    };
    const field = event.target.name;
    if (field === EVENT_CHANGE_VALUES.SECONDS) {
      this.seconds = event.target.value;
      if (this.seconds > 0) {
        this.showSeconds = true;
      }
    } else if (field === EVENT_CHANGE_VALUES.MINUTES) {
      this.minutes = event.target.value;
      if (this.minutes > 0) {
        this.showMinutes = true;
      }
    } else if (field === EVENT_CHANGE_VALUES.HOURS) {
      this.hours = event.target.value;
      if (this.hours > 0) {
        this.showHours = true;
      }
    }
  }

  timeIntervalInstance;

  start(event) {
    this.showStartBtn = false;
    this.showTimeInputs = false;
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
    this.showTimeInputs = true;
    clearInterval(this.timeIntervalInstance);
  }

  reset(event) {
    this.template.querySelectorAll("lightning-input").forEach((element) => {
      element.value = null;
    });
    this.showTimeInputs = true;
    this.showStartBtn = true;
    this.showMinutes = false;
    this.showHours = false;
    this.showSeconds = false;
    clearInterval(this.timeIntervalInstance);
  }
}

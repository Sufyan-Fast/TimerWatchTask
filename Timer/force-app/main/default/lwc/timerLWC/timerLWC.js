import { LightningElement } from "lwc";

export default class TimerLWC extends LightningElement {
  showStartBtn = true;
  showTimeInputs = true;

  seconds = 0;
  minutes = 0;
  hours = 0;

  handleChange(event) {
    const field = event.target.name;
    this.template
      .querySelector("c-show-time-component")
      .HandleChangeFunction(field, event.target.value);
  }

  timeIntervalInstance;

  start(event) {
    this.showStartBtn = false;
    this.showTimeInputs = false;
    this.timeIntervalInstance = setInterval(() => {
      this.template
        .querySelector("c-show-time-component")
        .TimeCalculationFunction();
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
    this.template.querySelector("c-show-time-component").ResetHandle();
    clearInterval(this.timeIntervalInstance);
  }
}

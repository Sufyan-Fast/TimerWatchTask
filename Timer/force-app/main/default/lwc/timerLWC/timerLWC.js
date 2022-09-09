import { LightningElement } from 'lwc';

export default class TimerLWC extends LightningElement {

    showStartBtn = true;
    timeVal = 60;
    mints = 5;
    timeIntervalInstance;

    start(event) {
        this.showStartBtn = false;
         var parentThis = this;
       
         this.timeIntervalInstance = setInterval(function() {
 

           if( parentThis.timeVal <= 0 && parentThis.mints> -1)
           {
            parentThis.mints = parentThis.mints-1;
            //parentThis.showStartBtn = true;
            parentThis.timeVal = 59;
            //clearInterval(parentThis.timeIntervalInstance);
           }
           else if(parentThis.timeVal <= 0 && parentThis.mints<= 0)
           {
            parentThis.showStartBtn = true;
            parentThis.timeVal = 60;
            parentThis.mints = 5;
            clearInterval(parentThis.timeIntervalInstance);
           }
           else
           {
            parentThis.timeVal =  parentThis.timeVal-1;
           }     
            
        }, 1000);
    }

    stop(event) {
        this.showStartBtn = true;
        clearInterval(this.timeIntervalInstance);
    }

    reset(event) {
        this.showStartBtn = true;
        this.mints = 5;
        this.timeVal = 60;
        clearInterval(this.timeIntervalInstance);
    }


}
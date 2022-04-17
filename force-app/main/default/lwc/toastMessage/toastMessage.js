import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastMessage extends LightningElement {

    @api _title;
    @api message;
    @api _variant;

    handleChange() {
        this.ShowToastFunction();
    }

    ShowToastFunction() {
        // create a event
        const event = new ShowToastEvent({
            title: this._title,
            message: this.message,
            variant: this._variant,
          
        })
        // fire event
        this.dispatchEvent(event);
    }

}
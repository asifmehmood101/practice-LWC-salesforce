import { LightningElement } from 'lwc';

export default class ConditionalRender extends LightningElement {

    visibleDetails = true;

    handleChange(e) {
        this.visibleDetails = e.target.checked;
    }



}
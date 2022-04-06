import { LightningElement } from 'lwc';

export default class FirstComponent extends LightningElement {

    greeting = "Hello world";

    handleChange(e) {
        this.greeting = e.target.value;
    }

}
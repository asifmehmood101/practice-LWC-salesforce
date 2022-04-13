import { LightningElement } from 'lwc';
import temlateOne from "./templateOne.html";
import temlateTwo from "./templateTwo.html";

export default class RenderMultipleTemplates extends LightningElement {

    temlateOne = true;

    render() {
        return this.temlateOne ? temlateOne : temlateTwo;
    }

    switchTemplate() {
        this.temlateOne = this.temlateOne === true ? false : true;
    }


}
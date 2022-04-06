import { LightningElement } from 'lwc';


// learn more about clases in js 
export default class HelloExpresion extends LightningElement {

    firstName = "";
    lastName= "";

    handleChange(e) {
        const field = e.target.name;

        if (field === "firstName") {
            this.firstName= e.target.value
        } else if (field === "lastName") {
            this.lastName = e.target.value
        }

    }


    get upercasedFullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }


 }


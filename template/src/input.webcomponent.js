import GhHtmlElement from "@gudhub/gh-html-element";
import html from "./input.html";
import './style.scss';

class GhInput extends GhHtmlElement {

    // Constructor with super() is required for native web component initialization

    constructor() {
        super();
    }

    // onInit() is called after parent gh-element scope is ready

    onInit() {
        this.color = this.scope.field_model.data_model?.color;

        super.render(html);
    }

    // onUpdate() is called after value was updated

    onUpdate() {
        super.render(html);
    }

    // save() is called on input value change

    save() {
        const input = this.querySelector('input');

        this.value = input.value;
    }

}

// Register web component only if it is not registered yet

if(!customElements.get('gh-input-web-component')){
    customElements.define('gh-input-web-component', GhInput);
}
import GhHtmlElement from "@gudhub/gh-html-element";
import html from "./input.html";
import './style.scss';

class GhInput extends GhHtmlElement {

    // Constructor with super() is required for native web component initialization

    constructor() {
        super();
        this.appId;
        this.itemId;
        this.fieldId;
    }

    // Add observer to app-id attribute to trigger attributeChangedCallback

    static get observedAttributes() {
        return ['app-id'];
    }

    // Triggere when attribute is changed
    // We need to wait for app-id changed from {{appId}} to real value by angular, then wi initialize web component

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'app-id' && newValue.indexOf('{{') == -1) {
            setTimeout(() => {
                this.getAttributes();
                this.init();
            }, 0);
        }
    }

    // Just helper method to get attributes from web component

    getAttributes() {
        this.appId = this.getAttribute('app-id');
        this.itemId = this.getAttribute('item-id');
        this.fieldId = this.getAttribute('field-id');
    }

    // Main method to render web component and add basic logic

    async init() {
        const value = await gudhub.getFieldValue(this.appId, this.itemId, this.fieldId);

        this.value = value || '';

        super.render(html);

        const input = this.querySelector('input');

        input.addEventListener('change', async (e) => {
            gudhub.setFieldValue(this.appId, this.itemId, this.fieldId, e.target.value);
        });
    }

}

// Register web component only if it is not registered yet

if(!customElements.get('gh-input-web-component')){
    customElements.define('gh-input-web-component', GhInput);
}
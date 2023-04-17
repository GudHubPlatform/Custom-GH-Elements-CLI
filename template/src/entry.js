import './input.webcomponent.js';

export default class CronPickerData {

    /*------------------------------- FIELD TEMPLATE --------------------------------------*/
    
    getTemplate() {
        return {
            constructor: 'field',
            name: 'Input',
            icon: 'text_icon',
            model: {
                'field_id': 0,
                'field_name': 'Input',
                'field_value': '',
                'data_type': 'input',
                data_model: {
                    interpretation: [{
                        src: 'form',
                        id: 'default',
                        settings: {
                            editable: 1,
                            show_field_name: 1,
                            show_field: 1
                        },
                        style: { position: "beetwen" }
                    }]
                }
            }
        };
    }

    /*------------------------------- INTERPRETATION --------------------------------------*/

    getInterpretation(gudhub, value, appId, itemId, field_model) {

        return [{
            id: 'default',
            name: 'Default',
            content: () =>
                '<gh-input-web-component app-id="{{appId}}" item-id="{{itemId}}" field-id="{{fieldId}}"></gh-input-web-component>'
        }, {
            id: 'value',
            name: 'Value',
            content: () => value
        }];
    }

    /*--------------------------  SETTINGS --------------------------------*/
    
    getSettings(scope) {
        return [{
            title: 'Options',
            type: 'general_setting',
            icon: 'menu',
            columns_list: []
        }];
    }
}
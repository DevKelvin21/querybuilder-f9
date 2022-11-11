import BootstrapConfig from 'react-awesome-query-builder/lib/config/bootstrap';

const initialConfig = BootstrapConfig;

export const configuration = {
    ...initialConfig,
    fields: {
        qty:{
            label: 'Quantity',
            type: 'number',
            valueSources: ['value'],
            preferWidgets: ['number'],
            fieldSettings: {
                min: 0,
            },
        },
        price:{
            label: 'Price',
            type: 'number',
            valueSources: ['value'],
            preferWidgets: ['slider', 'rangeslider'],
            fieldSettings: {
                min: 0,
                max: 100,
            },
        },
        color: {
            label: 'Color',
            type: 'select',
            valueSources: ['value'],
            fieldSettings: {
                listValues: [
                    { value: 'yellow', title: 'Yellow' },
                    { value: 'green', title: 'Green' },
                    { value: 'orange', title: 'Orange' },
                ],
            },
        }
    }
}
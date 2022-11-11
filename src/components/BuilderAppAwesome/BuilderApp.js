import React, {useCallback, useState} from 'react';
import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder';
import { configuration } from './config';
import 'react-awesome-query-builder/lib/css/styles.css';
import 'react-awesome-query-builder/lib/css/compact_styles.css';

const queryValue = {"id": QbUtils.uuid(), "type": "group"};

const BuilderAppAwesome = ({fields}) => {

    const config = {
        ...configuration,
        fields: fields
    }

    const [state, setState] = useState({
        tree: QbUtils.checkTree(QbUtils.loadTree(queryValue), config),
        config: config,
    });

    const onChange = useCallback((immutableTree, config) => {
        setState({tree: immutableTree, config: config});
    }, []);

    const renderBuilder = useCallback((props) => (
        <div className="query-builder-container" style={{padding: '10px'}}>
            <div className="query-builder qb-lite">
                <Builder {...props} />
            </div>
        </div>
    ), []);

    return (
        <div className="App">
            <Query
                {...config}
                value={state.tree}
                onChange={onChange}
                renderBuilder={renderBuilder}
            />
        </div>
    );

}

export default BuilderAppAwesome;
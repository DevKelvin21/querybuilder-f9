import React from 'react';


const QueryViewer = ({query}) => {

    if (query === undefined) {
        return (
            <div className="alert alert-info" role="alert">
                <h4 className="alert-heading"> Query </h4>
                <p>There is no query to show</p>
            </div>
        );
    }

    return (
        <div className="card " role="alert">
            <h4 className="card-header">Query</h4>
            <p>Here is your payload</p>
            {query && Object.keys(query).map((key) => (
                <div key={key}>
                    <span>"{key}" :</span>
                    <span> "{query[key]}"</span>
                </div>
            ))}
        </div>
    );
};

export default QueryViewer;
import React from 'react';

const AppSelector = ({ apps, selectedApp, onAppSelected }) => {
  return (
    <div>
      <select value={selectedApp} onChange={onAppSelected}>
        {apps.map(app => (
          <option key={app.id} value={app.id}>
            {app.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AppSelector;
import React from 'react';

const SidebarComponent: React.FC<{ data: any }> = ({ data }) => {
    return <div>Hello, this is the side bar, you selected: {typeof data === 'object' ? JSON.stringify(data) : data}</div>;
};

export default SidebarComponent;
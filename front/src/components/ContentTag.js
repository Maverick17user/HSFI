import React from 'react';

const ContentTag = ({title, subscription}) => (
    <>
        <h2>{title}</h2>
        <p className="text-info">{subscription}</p>
    </>
)

export default ContentTag
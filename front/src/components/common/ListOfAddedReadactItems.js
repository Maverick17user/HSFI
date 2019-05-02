import React from 'react';
import PropTypes from 'prop-types';
import ListElement from './ListElement'

const ListOfAddedReadactItems = props =>{
    const storeData = props.storeData

    if (!storeData) return null;
    
    return (
        <>
            <p className="text-primary">{props.listTitle}</p>
            <ul className="list-group list-group-flush">
                {storeData.map((dataUnit, index) => {
                    return <ListElement title={dataUnit} key={index.toString()} />
                })}
            </ul>
        </>
    )
}

ListOfAddedReadactItems.propTypes = {
    storeData: PropTypes.array.isRequired,
}


export default ListOfAddedReadactItems;
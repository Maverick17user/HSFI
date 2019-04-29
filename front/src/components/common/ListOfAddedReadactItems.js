import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListElement from './ListElement'

class ListOfAddedReadactItems extends Component {
    render() {
        const storeData = this.props.storeData

        if (!storeData) return null;
        
        return (
            <>
                <p className="text-primary">Curent country list</p>
                <ul className="list-group list-group-flush">
                    {storeData.map((dataUnit, index) => {
                        return <ListElement title={dataUnit} key={index.toString()} />
                    })}
                </ul>
            </>
        )
    }
}

ListOfAddedReadactItems.propTypes = {
    storeData: PropTypes.array.isRequired,
}


export default ListOfAddedReadactItems;
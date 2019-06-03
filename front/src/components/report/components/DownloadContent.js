import React from 'react'
import {makeDataReadyToPrint} from '../logic/printToDonwload'

const style = {
    marginLeft: "25px"
}

const DownloadContent = ({name, content}) => {

    const dataReadyToPrint = makeDataReadyToPrint(content)
    const file = new Blob([dataReadyToPrint], {type: 'text/plain'});

    return (
        <button type='submit' className="btn btn-outline-primary" style={style}>
            <a href={URL.createObjectURL(file)} download={name}>Donwload report</a>
        </button>
    )
}

export default DownloadContent



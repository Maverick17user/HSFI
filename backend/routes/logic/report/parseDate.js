const parseDate = dateString => {
    let newString
    
	if(dateString.indexOf('-') !== -1) {
  	    return dateString.replace(/-/g,".")
    }
    else {
        newString = dateString
    }

    return newString.split('.').reverse().join(".");
}

module.exports = parseDate
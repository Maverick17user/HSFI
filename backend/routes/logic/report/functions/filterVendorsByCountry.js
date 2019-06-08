const filterVendorsByCountry = (data, countries, isManager) => {
    return data.filter(ven => {
        const venCountryList = ven.country[0].country
        
        if(isManager) {
            return countries.every((selectedValueItem) => {
                return (venCountryList.indexOf(selectedValueItem) !== -1) ? true : false
            }) === true 
        }
        else {
            return venCountryList.every(country => country === countries[0]) === true 
        }
    })
}

module.exports = filterVendorsByCountry
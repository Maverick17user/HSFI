import { 
    SORT_BY_ALL_VENDORS,
    SORT_BY_COUNTRIES_VENDORS,
    SORT_BY_CITIES_VENDORS,
    SORT_BY_ISOPEN_VENDORS,
    SORT_BY_FOODGROUP_VENDORS,
    SORT_BY_OSS_VENDORS,
    SORT_BY_FLAG_VENDORS,
    SORT_BY_STARS_VENDORS
} from '../actions/types';

const initialState = {
    sortedVens: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SORT_BY_ALL_VENDORS: {
            return {
                sortedVens: action.allVens
            }
        }

        case SORT_BY_COUNTRIES_VENDORS: {
            const {selectedValues, allVens} = action.payload

            let venCountryList

            const countriesSortedVendors = allVens.filter(ven => {
                venCountryList = ven.country[0].country

                return selectedValues.every((selectedValueItem) => 
                    (venCountryList.indexOf(selectedValueItem) !== -1) ? true : false
                ) === true 
            })

            return Object.assign({}, state, {
                sortedVens: countriesSortedVendors
            })    
        }

        case SORT_BY_CITIES_VENDORS: {
            const {cityName, allVens} = action.payload

            let venCitiesList

            const citiesSortedVendors = allVens.filter(ven => {
                venCitiesList = ven.buisnessLocation.map(loc => {
                    return loc.city
                })

                return (venCitiesList.indexOf(cityName) !== -1) ? true : false
            })

            return Object.assign({}, state, {
                sortedVens: citiesSortedVendors
            })    
        }

        case SORT_BY_ISOPEN_VENDORS: {
            const {isOpen, allVens} = action.payload

            const isOpenBoolean = (isOpen === 'Open') ? true : false

            const isOpenSortedVendors = allVens.filter(ven => ven.isOpen === isOpenBoolean)
            
            return Object.assign({}, state, {
                sortedVens: isOpenSortedVendors
            })
        }

        case SORT_BY_FOODGROUP_VENDORS: {
            const {selectedValues, allVens} = action.payload

            const fgSortedVendors = allVens.filter(ven => {

                return selectedValues.some((selectedValueItem) => 
                    (selectedValueItem.indexOf(ven.foodGroup) !== -1) ? true : false
                ) === true 
            })

            return Object.assign({}, state, {
                sortedVens: fgSortedVendors
            }) 
        }

        case SORT_BY_OSS_VENDORS: {
            const {ossMarker, allVens} = action.payload

            const sortedVendors = allVens.filter(ven => {
                switch (ossMarker) {
                    case "> 0":
                        return ven.oss > 0
                    case "< 0":
                        return ven.oss < 0
                    case "0":
                        return ven.oss === '0'
                    case "-":
                        return ven.oss === ''
                    default:
                        break;
                }
            })

            return Object.assign({}, state, {
                sortedVens: sortedVendors
            }) 
        }

        case SORT_BY_FLAG_VENDORS: {
            const {flagMarker, allVens} = action.payload

            const sortedVendors = allVens.filter(ven => {
                return (flagMarker === 'red flagged')
                ? ven.flagStatus === flagMarker
                : ven.flagStatus !== flagMarker
            })

            return Object.assign({}, state, {
                sortedVens: sortedVendors
            }) 
        }

        case SORT_BY_STARS_VENDORS: {
            const {starsCount, allVens} = action.payload

            const sortedVendors = allVens.filter(ven => {
                return ven.stars === starsCount
            })

            return Object.assign({}, state, {
                sortedVens: sortedVendors
            }) 
        }

        default: 
            return state;
    }
}

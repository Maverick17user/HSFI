import { 
    SORT_BY_ALL_VENDORS,
    SORT_BY_COUNTRIES_VENDORS,
    SORT_BY_ISOPEN_VENDORS,
} from '../actions/types';

const initialState = {
    sortedVens: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SORT_BY_ALL_VENDORS: {
            return {
                sortedVens: action.all
            }
        }
        case SORT_BY_COUNTRIES_VENDORS: {
            const {selectedValues, allVens} = action.payload

            let venCountryList
            let selectedValuesStr = selectedValues

            const countriesSortedVendors = allVens.filter(ven => {
                venCountryList = ven.country[0].country

                return selectedValuesStr.every((selectedValueItem) => 
                    (venCountryList.indexOf(selectedValueItem) !== -1) ? true : false
                ) === true 
            })
            
            console.log(countriesSortedVendors);
            

            return Object.assign({}, state, {
                ...state.sortedVens,
                sortedVens: countriesSortedVendors
            })    
        }
        case SORT_BY_ISOPEN_VENDORS: {
            const {isOpen, allVens} = action.payload

            const isOpenBoolean = (isOpen === 'Open') ? true : false

            const isOpenSortedVendors = allVens.filter(ven => ven.isOpen === isOpenBoolean)
            
            return Object.assign({}, state, {
                ...state.sortedVens,
                sortedVens: isOpenSortedVendors
            })
        }
        default: 
            return state;
    }
}

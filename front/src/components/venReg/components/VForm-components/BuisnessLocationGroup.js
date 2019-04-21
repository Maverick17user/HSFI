import React, {Component} from 'react'
// import LocationInputGroup from './BuisnessLocationGroup'

class BuisnessLocationGroup extends Component {
    constructor() {
        super() 
        this.state = {
            dopularGroups: []
        }
        this.addNewGroup = this.addNewGroup.bind(this)
        this.deleteLastGroup = this.deleteLastGroup.bind(this)
    }

    addNewGroup() {
        const dopularGroups = this.state.dopularGroups
        this.setState({
            dopularGroups: [...dopularGroups, `grop№${dopularGroups.length++}`]
        })
    }

    deleteLastGroup() {
        const dopularGroups = this.state.dopularGroups
        dopularGroups.pop(dopularGroups.length--)
        this.setState({
            dopularGroups: dopularGroups
        })
    }

    render() {

        const dopularGroups = this.state.dopularGroups

        // TODO: Remake this via Redux store
        const LocationInputGroup = ({tag}) => {
            return (
                    <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="city"><small>City</small></label>
                            <input type="text" className="form-control"  placeholder="City" id="city" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="street"><small>Street</small></label>
                            <input type="text" className="form-control"  placeholder="Street" id="street" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="number"><small>Object number</small></label>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control"  placeholder="№" id="number" />
                                </div>
                                <div className="col">
                                    <button type="button" onClick={this.addNewGroup} className="btn btn-success">Add</button>
                                    {(tag !== 'initial') && <button type="button" className="btn btn-danger" 
                                    onClick={this.deleteLastGroup}>Delete</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            )
        }

        return (
            <>
                <span>Buisness location</span>
                <LocationInputGroup tag="initial" />
                {dopularGroups.map((group) => {
                    return <LocationInputGroup key={group} tag="added"  />
                })}
            </>
        )
    }
}

export default BuisnessLocationGroup
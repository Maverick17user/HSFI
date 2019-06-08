import React, {Component} from 'react'
import { connect } from 'react-redux'
import {initialFetch} from '../../../../actions/inspection/initialFetch'
import {changeOSS} from '../../../../actions/inspection/changeOSS'
import {submitInspectionAction} from '../../../../actions/inspection/submitAction' 

class InspectionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {}
        }

        this.radioHendler = this.radioHendler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const user = this.props.auth.user
        const {dbquestions: questions} = this.props.dbquestions
        const {dbVendors} = this.props.dbVendors 
        const selectedVendor = dbVendors.filter(ven => ven._id === this.props.match.params.vendorId)[0]
        const {licNumber: licNum, venName: vendorName, venPhotoURL: vendorPhoto, foodGroup} = selectedVendor

        this.props.initialFetch({
            operatorName: user.name, 
            date: new Date().toLocaleString().slice(0,10),
            licNum,
            vendorName,
            vendorPhoto,
            questions,
            foodGroup,
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    handleSubmit = (e, formData) => {
        e.preventDefault()
        this.props.submitInspectionAction(formData)
    }

    radioHendler = e => {
        this.props.changeOSS(e.target) 
    }

    render() {
        const {dbquestions} = this.props.dbquestions
        
        const {
            operatorName,
            date,
            licNum,
            vendorName,
            vendorPhoto,
            foodGroup,
            totalOSS
        } = this.props.inspectionFormData

        const err = this.state.errors
        
        return (
            <div className="inspF">
                <h2>Inspection</h2>
                <form action="" className="px-4 py-3" onSubmit={e => this.handleSubmit(e, this.props.inspectionFormData)}>
                    <div className="form-group">
                        <label htmlFor="opName">Operator's Name</label>
                        <input type="text" className="form-control" value={operatorName} id="opName" readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="insDate">Inspection date</label>
                        <input type="text" className="form-control" value={date} id="insDate" readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="callerNatID">License number</label>
                        <input type="text" className="form-control" value= {licNum} id="callerNatID" readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="venName">Vendor's Name</label>  
                        <input type="text" className="form-control" value={vendorName} id="venName" readOnly />
                    </div>
                    <div className="venPicture-wrap">
                        <img src={vendorPhoto} alt="Loading ..." width="150px" />
                        <span>Vendor's picture</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fGroup">Food group</label>
                        <input type="text" className="form-control" value={foodGroup} id="fGroup" readOnly />
                    </div>
                    <div className='form-group questions'>
                        <label>Questions</label>
                        {dbquestions.map((question, i) => 
                            <div key={question} className="questions-wrap">
                                <span className="question">{question}</span>
                                <div className="ball">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" name={"q" + (i+1)} type="radio" 
                                        id="inlineRadio1" value="+" onChange={e => this.radioHendler(e)}/>
                                        <label className="form-check-label" htmlFor="inlineRadio1">+</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" name={"q" + (i+1)} type="radio" 
                                        id="inlineRadio2" value="-" onChange={e => this.radioHendler(e)}/>
                                        <label className="form-check-label" htmlFor="inlineRadio2">-</label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {(err.questions) ? <p className="text-danger">{`${err.questions}`}</p> : null}
                    <div className="form-group">
                        <label htmlFor="totalOSS">Total OSS</label>
                        <input type="text" className="form-control" value={totalOSS}
                        placeholder="Overall Safety Score OSS" id="totalOSS" readOnly />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dbquestions: state.dbquestions,
    inspectionFormData: state.inspectionFormData,
    errors: state.errors,
})

export default connect(mapStateToProps, {
    initialFetch,
    changeOSS,
    submitInspectionAction
})(InspectionForm)


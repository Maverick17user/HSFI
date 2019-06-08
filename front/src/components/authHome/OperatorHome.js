import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const style = {
    opacity: "0.8",
    fontWeight: "100",
    textAlign: "center"
}

const styleProfile = {
    opacity: "0.8",
    fontWeight: "100",
    textAlign: "center",
    padding: "10px 20px",
    background: "#ECECED"
}

const mtop = {
    marginBottom: '0px',
    marginTop: "10px"
}

const OperatorHome = props => {
    const {avatar, name, country} = props.auth.user
    return (
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <h2 style={style}>Welcome to HSFI system!</h2>
            <div className="d-flex flex-column justify-content-center" style={styleProfile}>
                <img src={avatar} />
                <p className="text-primary" style={mtop}>{name} • <em>{country}</em></p>
            </div>
        </div>
    )
}

OperatorHome.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(OperatorHome)
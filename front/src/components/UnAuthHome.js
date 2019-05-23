import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const UnAuthHome = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center helloContext">
            <div className="row">
                <div className="hellotext-wrap col-9 ml-auto mr-auto d-flex flex-column justify-content-center align-items-center"> 
                    <h2 className="display-5 font-weight-bold align-self-center">HSFI OOH Digital Managment System</h2>
                    <p className="text-info font-font-weight-bold align-self-center">A system consisting of a manager, a coordinator and operators controls the activities of street food vendors.</p> 
                </div>
            </div>
        </div>
    )
}

export  default UnAuthHome;
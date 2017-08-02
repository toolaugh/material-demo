/**
 * Created by NguyenBa on 7/28/2017.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import PropTypes from 'prop-types';

function ErrorPage({error}) {
    return (
        <div className="four-zero-four">
            <div className="four-zero-four-container">
                <div className="error-code">404</div>
                <div className="error-message">This page doesn't exist</div>
                <div className="button-place">
                    <RaisedButton label="GO TO HOME PAGE" primary={true} style={{ margin: '12px' }}/>
                </div>
            </div>
        </div>
    );
}

ErrorPage.propTypes = {
    error:PropTypes.object.isRequired,
};
ErrorPage.defaultProps = {};

export default ErrorPage;


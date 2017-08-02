/**
 * Created by NguyenBa on 7/28/2017.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Error500Page = ({ error }) => {
    return (
        <div className="five-zero-zero">
            <div className="five-zero-zero-container">
                <div className="error-code">500</div>
                <div className="error-message">Internal Server Error</div>
                <div className="button-place">
                    <RaisedButton label="GO TO HOME PAGE" primary={true} style={{ margin: '12px' }}/>
                </div>
            </div>
        </div>
    );
};

Error500Page.propTypes = {};
Error500Page.defaultProps = {};

export default Error500Page;

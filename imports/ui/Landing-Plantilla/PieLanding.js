import React from 'react';
import Meteor from 'meteor/meteor';
const PieLanding = (props) => {
    return(
    <div className="footer-landing">
        <h1>{props.title}</h1>
    </div>);
};

export default PieLanding;
PieLanding.reactProptype = {
    title: React.PropTypes.string.isRequired
};


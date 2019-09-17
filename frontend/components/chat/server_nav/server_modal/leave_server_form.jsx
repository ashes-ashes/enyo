import React from 'react';

const LeaveServerForm = (props) => {

    const handleClick = (e) => {
        let serverMembershipId = props.serverMembership.id;
        props.deleteServerMembership(serverMembershipId);
    }
        
    return (
        <div className="pick-server-form-container">
            <h2>Are you sure you want to leave {props.server.name}?</h2>
            <button onClick={handleClick}>Yes, I'm sure.</button>
        </div>
    )

}

export default LeaveServerForm;
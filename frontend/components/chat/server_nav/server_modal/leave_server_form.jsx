import React from 'react';

const LeaveServerForm = (props) => {

    const handleClick = () => {
        let serverMembership = (Object.values(props.serverMemberships)).find((ele) =>
            ele.server_id === props.editId
        )
        let serverMembershipId = serverMembership.id;
        props.deleteServerMembership(serverMembershipId);
    }
        
    return (
        <div className="pick-server-form-container">
            {props.server ? <h2>Are you sure you want to leave {props.server.name}?</h2> : <h2>You have left the server.</h2>}
            <button onClick={handleClick}>Yes, I'm sure.</button>
        </div>
    )

}

export default LeaveServerForm;
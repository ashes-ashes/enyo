import React from 'react';

import NewServerFormContainer from './server_nav/server_modal/new_server_form_container';
import JoinServerFormContainer from './server_nav/server_modal/join_server_form_container';
import PickServerFormContainer from './server_nav/server_modal/pick_server_form_container';
import DeleteServerFormContainer from './server_nav/server_modal/delete_server_form_container';
import EditServerFormContainer from './server_nav/server_modal/edit_server_form_container';
import LeaveServerFormContainer from './server_nav/server_modal/leave_server_form_container';
import DeleteChannelFormContainer from './channel_nav/delete_channel/delete_channel_form_container';

const Popup = (props) => {

    let popup;

    switch (props.modal) {
        case "new":
            popup = <NewServerFormContainer />;
            break;
        case "join":
            popup = <JoinServerFormContainer />;
            break;
        case "pick":
            popup = <PickServerFormContainer />;
            break;
        case "deleteServer":
            popup = <DeleteServerFormContainer />;
            break;
        case "editServer":
            popup = <EditServerFormContainer />;
            break;
        case "leaveServer":
            popup = <LeaveServerFormContainer />;
            break;
        case "deleteChannel":
            popup = <DeleteChannelFormContainer />;
            break;
        default:
            popup = "";
    };

    let closePopup = () => {
        props.receiveCurrentModal(null);
    }

    return (
        <div className="popup">
            {popup}
            {!!popup ? <div className="popup-backdrop" onClick={closePopup}></div> : "" }
        </div>
    );
}

export default Popup;
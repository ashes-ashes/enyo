import React from 'react';

import NewServerFormContainer from './server_nav/server_modal/new_server_form_container';
import JoinServerFormContainer from './server_nav/server_modal/join_server_form_container';
import PickServerFormContainer from './server_nav/server_modal/pick_server_form_container';

const Popup = (props) => {

    let popup;

    switch (props.popup) {
        case "new":
            popup = <NewServerFormContainer />;
            break;
        case "join":
            popup = <JoinServerFormContainer />;
            break;
        case "pick":
            popup = <PickServerFormContainer />;
            break;
        default:
            popup = "";
            break;
    };

    let closePopup = () => {
        props.receiveCurrentPopup("");
    }

    return (
        <div className="popup">
            {popup}
            {!!popup ? <div className="popup-backdrop" onClick={closePopup}></div> : "" }
        </div>
    );
}

export default Popup;
import React from 'react';

import NewServerFormContainer from './server_nav/server_modal/new_server_form_container';
import JoinServerFormContainer from './server_nav/server_modal/join_server_form_container';
import PickServerFormContainer from './server_nav/server_modal/pick_server_form_container';

const Modal = (props) => {

    let modal;

    switch (props.modal) {
        case "new":
            modal = <NewServerFormContainer />;
            break;
        case "join":
            modal = <JoinServerFormContainer />;
            break;
        case "pick":
            modal = <PickServerFormContainer />;
            break;
        default:
            modal = "";
    };

    let closeModal = () => {
        props.receiveCurrentModal("");
    }

    return (
        <div className="modal">
            {modal}
            {!!modal ? <div className="modal-backdrop" onClick={closeModal}></div> : "" }
        </div>
    );
}

export default Modal;
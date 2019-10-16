import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import UserContainer from '../../widgets/user_container'

export class MemberList extends Component {

    render() {

        let memberLis = this.props.serverMembers.map((member) => {
            return <li key={member.id}><UserContainer user={member}/></li>
        })

        return (
            <ul className="members-list">
                {memberLis}
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    serverMembers: Object.values(state.entities.serverMemberships).filter((membership) => {
        return membership.server_id == ownProps.match.params.serverId;
    }).map((membership) => {
        return state.entities.users[membership.user_id];
    })
})

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemberList));

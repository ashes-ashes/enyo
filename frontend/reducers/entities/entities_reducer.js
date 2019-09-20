import { combineReducers } from 'redux';

import usersReducer from './users_reducer'
import serversReducer from './servers_reducer';
import serverMembershipsReducer from './server_memberships_reducer';
import channelsReducer from './channels_reducer';
import channelServersReducer from './channel_servers_reducer';
import messagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    servers: serversReducer,
    channels: channelsReducer,
    channelServers: channelServersReducer,
    serverMemberships: serverMembershipsReducer,
    messages: messagesReducer
})

export default entitiesReducer;
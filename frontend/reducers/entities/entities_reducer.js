import { combineReducers } from 'redux';

import usersReducer from './users_reducer'
import serversReducer from './servers_reducer';
import serverMembershipsReducer from './server_memberships_reducer';
import channelsReducer from './channels_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    servers: serversReducer,
    serverMemberships: serverMembershipsReducer,
    channels: channelsReducer,
})

export default entitiesReducer;
export const fetchChannel = (channelId) => {
    return $.ajax({
        method: "GET",
        url: `api/channels/${channelId}`
    })
};

export const createChannel = (name, serverId) => {
    return $.ajax({
        method: "POST",
        url: `api/channels`,
        data: {name: name, server_id: serverId},
    })
};

export const updateChannel = (data, channelId) => {
    return $.ajax({
        method: "PATCH",
        url: `api/channels/${channelId}`,
        data: data,
    })
};

export const deleteChannel = (channelId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/channels/${channelId}`
    })
};


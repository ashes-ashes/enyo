export const createChannel = (name, serverId) => {
    return $.ajax({
        method: "POST",
        url: `api/channels`,
        data: {name: name, server_id: serverId},
    })
};
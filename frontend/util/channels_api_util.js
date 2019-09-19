export const createChannel = (name, channelId) => {
    return $.ajax({
        method: "POST",
        url: `api/channels`,
        data: {name: name, channel_id: channelId},
    })
};

export const deleteChannel = (channelId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/channels/${channelId}`
    })
}
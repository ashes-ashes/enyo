
export const fetchServers = () => {
    return $.ajax({
        method: "GET",
        url: 'api/servers'
    });
};

export const fetchServer = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/servers/${id}`
    })
};

export const createServer = (formData) => {
    return $.ajax({
        method: "POST",
        url: `api/servers`,
        data: formData,
        contentType: false,
        processData: false
    })
};

export const updateServer = (server) => {
    return $.ajax({
        method: "PATCH",
        url: `api/servers/${server.id}`,
        data: {server: server}
    })
}

export const deleteServer = (serverId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/servers/${serverId}`
    })
}
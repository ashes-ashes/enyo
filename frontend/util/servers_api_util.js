
export const fetchServers = () => {
    return $.ajax({
        method: "GET",
        url: 'api/servers'
    });
}

export const fetchServer = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/servers/${id}`
    })
}
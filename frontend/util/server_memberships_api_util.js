
export const createServerMembership = (inviteCode) => {
    return $.ajax({
        method: "POST",
        url: `api/server_memberships`,
        data: { invite_code: inviteCode }
    })
};

export const destroyServerMembership = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/server_memberships/${id}`
    })
}
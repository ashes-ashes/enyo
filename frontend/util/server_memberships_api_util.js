
export const createServerMembership = (inviteCode) => {
    return $.ajax({
        method: "POST",
        url: `api/server_memberships`,
        data: { invite_code: inviteCode }
    })
};
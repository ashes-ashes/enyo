export const fetchUser = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${id}`
    });
}

export const updateUser = (formData, userId) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })
}
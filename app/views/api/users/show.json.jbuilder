json.user do
    json.partial! 'user', user: @user
end
json.server_memberships do
    @server_memberships.each do |server_membership|
        json.set! server_membership.id do
            json.partial! "/api/server_memberships/server_membership", server_membership: server_membership
        end
    end
end
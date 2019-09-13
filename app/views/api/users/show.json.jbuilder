json.users do
    json.set! :id do
        json.partial! 'user', user: @user
    end
end
json.server_memberships do
    @server_memberships.each do |server_membership|
        json.set! :id do
            json.partial! "/api/server_memberships/server_membership", server_membership: server_membership
        end
    end
end
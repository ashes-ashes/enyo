@server_memberships.each do |server_membership|
    json.set! server_membership.id do
        json.partial! 'server_membership', server_membership: server_membership
    end
end
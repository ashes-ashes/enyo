json.server_membership do
    json.partial! "server_membership", server_membership: @server_membership
end

json.server do
    json.partial! "/api/servers/server", server: @server
end
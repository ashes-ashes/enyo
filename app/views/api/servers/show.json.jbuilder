json.server do
    json.partial! 'server', server: @server
end

json.channels do
    @channels.each do |channel|
        json.set! channel.id do
            json.partial! "/api/channels/channel", channel: channel
        end
    end
end

json.channel_servers do
    @channel_servers.each do |channel_server|
        json.set! channel_server.id do
            json.partial! "/api/channel_servers/channel_server", channel_server: channel_server
        end
    end
end
json.channel do
    json.partial! "channel", channel: @channel
end

json.channel_servers do
    @channel.channel_servers.each do |channel_server|
        json.set! channel_server.id do
            json.partial! "/api/channel_servers/channel_server", channel_server: channel_server
        end
    end
end

json.messages do
    if @messages
        @messages.each do |message|
            json.set! message.id do
                json.partial! "/api/messages/message", message: message
            end
        end
    end
end
    
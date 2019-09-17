json.server do
    json.partial! 'server', server: @server
    json.channel_ids do
        @channels.keys
    end
end

json.channels do
    @channels.each do |channel|
        json.set! channel.id do
            json.partial! "/api/channels/channel", channel: channel
        end
    end
end
class MessageChannel < ApplicationCable::Channel

    def subscribed
        stream_from "enyochan-#{params["enyochan"]}:messages"
    end

    def unsubscribed

    end

end
class Api::MessagesController < ApplicationController

    def create


        if @message.save
            ActionCable
                .server
                .broadcast("enyochan-#{@message.channel_id}:messages",
                    message: {

                    },
                    user: {

                    }
                )
        else

        end

    end

    def index

    end

end

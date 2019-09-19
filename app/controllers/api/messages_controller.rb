class Api::MessagesController < ApplicationController

    def create

        @message = Message.new()

        if @message.save
            ActionCable
                .server
                .broadcast("enyochan-#{@message.channel_id}:messages",
                    message: {
                        id: @message.id,
                        nick: @message.nick,
                        body: @message.body,
                        author_id: @message.author_id,
                        channel_id: @message.channel_id,
                        created_at: @message.created_at
                    },
                    user: {
                        id: current_user.id,
                        username: current_user.username
                    }
                )
        else
            render json: @message.errors.full_messages, status: 400
        end

    end

    def index
        @messages = Channel.find(params[:channelId]).messages
        render :index
    end


    private

    def message_params
        params.require(:message).permit(:id, :nick, :body, :author_id, :channel_id)
    end

end

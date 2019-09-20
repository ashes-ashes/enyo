class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.find_by(id: params[:id])
        @messages = @channel.messages

        render :show

    end

    def create
        
        @channel = Channel.new(
            name: params[:name]
        )

        if @channel.save
            
            ChannelServer.create({
                channel_id: @channel.id,
                server_id: params[:server_id]
            })

            render :show
        else 
            render json: @server.errors.full_messages, status: 422
        end

    end

    def destroy

        @channel = Channel.find(params[:id])

        if @channel.destroy
            render json: {}
        else
            render @channel.errors.full_messages, status: 400
        end

    end

end

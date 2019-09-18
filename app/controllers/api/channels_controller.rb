class Api::ChannelsController < ApplicationController

    def create
        
        @channel = Channel.new(
            name: params[:name]
        )

        if @channel.save
            
            channel_server = ChannelServer.create({
                channel_id: @channel.id,
                server_id: params[:server_id]
            })

            @channel_servers = {}
            @channel_servers[channel_server.id] = channel_server

            render :show
        else 
            render json: @server.errors.full_messages, status: 422
        end

    end

end

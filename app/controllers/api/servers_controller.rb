class Api::ServersController < ApplicationController
    def index
        if current_user
            @servers = current_user.servers
            render :index
        else
            render json: ["Outis has no servers"]
        end
    end

    def show
        @server = Server.find_by(id: params[:id])
        render :show
    end

    def create
        
        @server = Server.new(
            name: params[:server][:name],
            owner_id: current_user.id,
        )

        if @server.save
            ServerMembership.create({
                user_id: current_user.id,
                server_id: @server.id
            })
            render :show
        else 
            render json: @server.errors.full_messages, status: 422
        end

    end

    def update
        @server = Server.find_by(id: params[:id])

        if @server.update(server_params)
            render :show
        else 
            render json: @server.errors.full_messages, status: 400
        end
    end

    def destroy
        @server = Server.find_by(id: params[:id])

        if @server.destroy
            render json: {}
        else
            render json: @server.errors.full_messages, status: 400
        end
    end

    private

    def server_params
        params.require(:server).permit(:name, :owner_id, :is_home)
    end

end

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

end

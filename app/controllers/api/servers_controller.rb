class Api::ServersController < ApplicationController
    def index
        @servers = current_user.servers
        render :index
    end

    def show
        @server = Server.find_by(id: params[:id])
        render :show
    end

end

class Api::ServerMembershipsController < ApplicationController

    def index
        @server_memberships = current_user.server_memberships
    end

    def show

    end

    def create
        server = Server.find_by(invite_code: params[:invite_code])

        @server_membership = ServerMembership.new({
            user_id: current_user.id
            server_id: server.id
        })

    end

    def update
        
        
    end

    def destroy

    end

end

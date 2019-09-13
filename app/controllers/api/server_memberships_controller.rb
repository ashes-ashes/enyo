class Api::ServerMembershipsController < ApplicationController

    def create
        server = Server.find_by(invite_code: params[:invite_code][:invite_code])

        if !server
            render json: ["No server matches that invite code."], status: 422
        else
            @server_membership = ServerMembership.new(
                user_id: current_user.id,
                server_id: server.id
            )

            if @server_membership.save
                render json: @server_membership
            else
                render json: @server_membership.errors.full_messages, status: 422
            end
        end

    end

    def update

    end

    def destroy

    end

end

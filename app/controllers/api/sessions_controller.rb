class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            ##### later --
            # Server.create({
            #     name: "Home",
            #     owner_id: @user.id,
            #     is_home: true
            # })
            render json: @user
        else
            render json: ["Invalid email or password."], status: 400
        end

    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: ["No user logged in."], status: 404
        end
    end
end
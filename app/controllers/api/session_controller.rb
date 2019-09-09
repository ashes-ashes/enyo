class Api::SessionController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render json: @user
        else
            render json: {errors: ["Invalid username or password."]}, status: 400
        end

    end

    def destroy
        if logout
            render json: {}
        else
            render json: {errors: ["No user logged in."]}, status: 404
        end
    end
end

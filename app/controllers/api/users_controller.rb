class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render @user
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    def show
        @user = User.find_by(id: params[:id])
        @server_memberships = ServerMembership.where(user_id: params[:id])

        render :show
    end

    def update
        @user = User.find_by(id: params[:id])

        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    def destroy
        @user = User.find_by(id: params[:id])

        if @user.destroy
            render :show
        else
            render json: @user.errors.full_messages, status: 400
        end
        
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :avatar)
    end

end

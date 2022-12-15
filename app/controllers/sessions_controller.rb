class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        @user = User.find_by(username: params[:username])
        if @user
            session[:user_id] = @user.id
            render json: @user, status: :created
        else
            render json: {error: {login: "invalid username or password"}}, status: :unathorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end

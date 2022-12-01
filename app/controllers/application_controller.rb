class ApplicationController < ActionController::Base
  
  def authorized
    return render json: {error: "not authorized"}, status: :unauthorized unless session.include? :user_id
  end
end

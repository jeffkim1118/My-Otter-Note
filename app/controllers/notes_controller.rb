class NotesController < ApplicationController
  # authentication is the method we define in application_controller.rb to check request.headers['token']

  before_action :authentication

  # GET /todos
  def index
    @notes = Note.all

    render json: @notes
  end
end

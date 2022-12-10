class NotesController < ApplicationController
  def index
    @notes = Note.all
    render json: @notes
  end

  def show
    @user = User.find_by(id: session[:user_id])
    @note = @user.notes.find_by(:id)
    if @note
        render json: @note
    else
        render json: {error: "The note doesn't exist"}
    end
  end

  def create
    @user = User.find_by(id: session[:user_id])
    if @user.exist?
        @note = @user.notes.create(note_params)
        if @note.valid?
            render json: @note, status: :created
        else
            render json: {error: "Unable to create a note"}
        end
    else
        render json: {error: "User can't create a note!"}
    end
  end

  def update
    @user = User.find_by(id: session[:user_id])
    if @user.exist?
      @note = @user.notes.find_by(:id)
      if @note.exist?
        @note.update(update_param)
        render json: @note, status: :accepted
      end
    end
  end

  def destroy
    @user= User.find_by(id: session[:user_id])
    @note = @user.notes.find_by(:id)
    if @note.exist?
        @note.destroy
        head.no_content
    else
        render json: {error: "Note doesn't exist. Can't delete something that doesn't exist!"}, status: :not_found
    end
  end

  private

  def note_params
    params.require(:user).permit(:title, :content, :date, :user_id)
  end

  def update_param
    params.require(:user).permit(:title, :content, :date)
  end
end

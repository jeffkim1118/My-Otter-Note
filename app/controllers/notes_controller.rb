class NotesController < ApplicationController
  def index
    notes = Note.all()
    render json: notes
  end

  def show
    note = Note.find_by(:id)
    if note
        render json: note
    else
        render json: {error: "The note doesn't exist"}
    end
  end

  def create
    note = Note.create(note_params)
    if note.valid?
        render json: note, status: :created
    else
        render json: {error: "Unable to create a note"}
    end
  end

  def destroy
    note = Note.find_by(:id)
    if note.exist?
        note.destroy
        head.no_content
    else
        render json: {error: "Note doesn't exist. Can't delete something that doesn't exist!"}, status: :not_found
    end
  end

  private

  def note_params
    params.permit(:title, :content, :date, :user_id)
  end
end

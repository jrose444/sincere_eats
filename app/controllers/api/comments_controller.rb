class Api::CommentsController < ApplicationController
  
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 418
    end
  end

  def index
    @comments = Post.find(params[:post_id]).comments
    render :index
  end


  private

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end

end

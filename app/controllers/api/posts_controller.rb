class Api::PostsController < ApplicationController

    def index
        @posts = Post.all
    end

    def show
        @post = Post.includes(:comments).find(params[:id])
    end


end

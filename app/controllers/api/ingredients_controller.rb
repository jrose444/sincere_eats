class Api::IngredientsController < ApplicationController

    def index
        @ingredients = Post.find(params[:post_id]).ingredients
        render :index
    end
end

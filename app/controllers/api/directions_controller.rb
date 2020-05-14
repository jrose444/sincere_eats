class Api::DirectionsController < ApplicationController

    def index
        @directions = Post.find(params[:post_id]).directions
        render :index
    end

end

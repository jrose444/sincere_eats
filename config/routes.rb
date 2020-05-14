Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:show, :index] do
      resources :directions, only: [:index]
      resources :ingredients, only: [:index]
      resources :comments, only: [:create, :index]
      resources :likes, only: [:create, :show, :index, :destroy]
    end
  end

end

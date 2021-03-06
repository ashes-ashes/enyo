Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: JSON } do
    resources :users, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :server_memberships, only: [:create, :update, :destroy]
    resources :channels, only: [:create, :show, :update, :destroy]

    resources :messages, only: [:index, :create, :update, :destroy]

  end

end

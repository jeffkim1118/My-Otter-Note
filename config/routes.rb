Rails.application.routes.draw do
  # resources :users
  # resources :notes
 
  get "/users", to: "users#index"

  post "/users", to: "users#create"
  post "/login", to: "sessions#create"
  
  delete "/users/:id", to: "users#destroy"
  
end

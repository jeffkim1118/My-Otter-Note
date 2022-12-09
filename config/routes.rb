Rails.application.routes.draw do
  # resources :users
  # resources :notes
 
  # user authentication routes
  get "/users", to: "users#index"

  post "/users", to: "users#create"
  post "/login", to: "sessions#create"
  
  delete "/users/:id", to: "users#destroy"
  

  # Note routes
  get "/notes", to: "notes#index"
  get "/notes/:id", to: "notes#show"

  post "/notes", to: "notes#create"

  

end

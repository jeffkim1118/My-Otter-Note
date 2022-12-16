Rails.application.routes.draw do
  # resources :users
  # resources :notes
 
  # user authentication routes
  get "/users", to: "users#index"

  post "/users", to: "users#create"
  post "/login", to: "sessions#create"
  
  delete "/users/:id", to: "users#destroy"
  
  # Keeping user to be loggedin.
  get "/me", to: "users#loggedin"

  # Note routes
  get "/notes", to: "notes#index"
  get "/notes/:id", to: "notes#show"

  post "/notes", to: "notes#create"

  patch "/notes/:id", to: "notes#update"

  delete "/notes/:id", to: "notes#destroy"

end

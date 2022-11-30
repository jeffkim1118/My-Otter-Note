Rails.application.routes.draw do
  resources :notes
  resources :users

  post "/login", to: "sessions#login"
  post "/signup", to: "sessions#signup"
  
end

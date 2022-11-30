Rails.application.routes.draw do
  resources :users
  resources :notes
 

  post "/login", to: "sessions#login"
  post "/signup", to: "sessions#signup"
  
end

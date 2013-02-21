Compapp::Application.routes.draw do
  resources :entries do

  end


  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "home#index"
  devise_for :users
  resources :users
end
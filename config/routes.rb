Compapp::Application.routes.draw do
  resources :campaigns


  resources :campaign_types


  resources :briefs


  resources :entries do

  end


  authenticated :user do
    root :to => 'home#index'
  end

  root :to => "home#index"
  devise_for :users
  resources :users
end
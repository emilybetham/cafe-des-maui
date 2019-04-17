Rails.application.routes.draw do
  root to: 'pages#home'
  get 'home', to: 'pages#home', as: :home
  get 'menu', to: 'pages#menu', as: :menu
  get 'our_story', to: 'pages#our_story', as: :our_story
  get 'live_music', to: 'pages#live_music', as: :live_music
  get 'contact', to: 'pages#contact', as: :contact
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

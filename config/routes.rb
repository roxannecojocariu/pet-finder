Rails.application.routes.draw do
  root 'homes#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :fetched_pets
    end
  end
end

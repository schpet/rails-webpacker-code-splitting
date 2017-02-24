Rails.application.routes.draw do
  root to: "pages#root"
  get "fancy", to: "pages#fancy"
end

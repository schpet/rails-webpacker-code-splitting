Rails.application.routes.draw do
  root to: "pages#root"
  get "fancy", to: "pages#fancy"
  get "tooltip", to: "pages#tooltip"
  get "datepicker", to: "pages#datepicker"
end

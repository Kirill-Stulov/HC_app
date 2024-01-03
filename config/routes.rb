Rails.application.routes.draw do
  get 'email/index', to: 'email#index'
  root 'email#index'
  post 'send_email', to: 'email#send_email'
  get 'check_status', to: 'email#check_status'
  post '/save_schedule', to: 'schedule#save', as: 'save_schedule'
end

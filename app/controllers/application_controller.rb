class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  
  # protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  # protected
  
    def configure_permitted_parameters
      # pass params for the sign up form
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password, :password_confirmation])
      # pass params for the sign in form
      devise_parameter_sanitizer.permit(:sign_in,
        keys: [:username, :email, :password, :password_confirmation])
      devise_parameter_sanitizer.permit(:account_update, keys: [:username, :email, :password, :password_confirmation, :current_password])
    end
end

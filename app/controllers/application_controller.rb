class ApplicationController < ActionController::Base

  helper_method :current_user
  skip_before_action :verify_authenticity_token

    
  def root
  end
  
  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def require_login
    redirect_to session_url unless logged_in?
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end



end

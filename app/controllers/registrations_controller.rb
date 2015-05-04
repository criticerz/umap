# app/controllers/registrations_controller.rb
class RegistrationsController < Devise::RegistrationsController
  def new
    super
  end

  def create
    # add  custom create logic here

    if params[:allowed_to_register].blank? or params[:allowed_to_register] != '1'
      flash[:error] = "Please use the special URL provided to register."
      redirect_to '/users/sign_up'
      return
    end

    super
  end

  def update
    super
  end
end 
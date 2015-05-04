class DashboardController < ApplicationController
  def index

    if current_user.blank?
      redirect_to '/'
      return
    end

    @properties = Property.all
    

  end
end

class StaticPagesController < ApplicationController

  def home

    if current_user.present?
      redirect_to '/dashboard'
    end

  end


end

class PropertiesController < ApplicationController
  before_action :set_property, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  def index
    @properties = Property.all
    respond_with(@properties)
  end

  def show
    respond_with(@property)
  end

  def new
    @property = Property.new
    respond_with(@property)
  end

  def edit
  end

  def create
    @property = Property.new(property_params)
    @property.save
    
    redirect_to '/dashboard'
  end

  def update
    @property.update(property_params)
    respond_with(@property)
  end

  def destroy
    @property.destroy
    respond_with(@property)
  end

  private
    def set_property
      @property = Property.find(params[:id])
    end

    def property_params
      params.require(:property).permit(:user_id, :coordinate_lat, :coordinate_lng, :name)
    end
end

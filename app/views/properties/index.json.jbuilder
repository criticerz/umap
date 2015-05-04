json.array!(@properties) do |property|
  json.extract! property, :id, :user_id, :coordinate_lat, :coordinate_lng, :name
  json.url property_url(property, format: :json)
end

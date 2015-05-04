module PropertiesHelper

  def property_uses
    [
      'Residential',
      'Commercial',
      'Other',
      'Unknown'
    ]
  end

  def roof_types
    [
      'Flat',
      'Gable',
      'Hip',
      'Composite',
      'Unknown'
    ]
  end

  def window_types
    [
      'None',
      'Single hung',
      'Double hung',
      'Awning',
      'Casement',
      'Hopper',
      'Sliding',
      'Unknown'
    ]
  end

  def wall_types
    [
      'Concrete',
      'Clay brick',
      'Brick',
      'Wood frame',
      'Steel frame'
    ]
  end

  def material_options
    [
      'Fired bricks and clay blocks', 
      'Cement',
      'Fabric',
      'Foam',
      'Glass',
      'Gypcrete',
      'Metal',
      'Plastics',
      'Wood',
      'Other',
      'Unknown'
    ]
  end

  def porch_options
    [
      'No Porch',
      'North',
      'East',
      'South',
      'West',
      'Unknown'
    ]
  end

  def window_options
    [
      'Yes',
      'No',
      'Unknown'
    ]
  end  

end

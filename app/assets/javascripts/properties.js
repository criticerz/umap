$(document).ready(function() {

  var $body = $('body');

  if( $body.hasClass('properties') ) {

    // material list
    $body.on('click', '.checkbox-button-list button', function(e) {
      e.preventDefault();

      var $button = $(this);
      var $button_list = $button.closest('.checkbox-button-list');

      if( $button.hasClass('active') ) {
        $button.removeClass('active');

        $button_list.find('input[value="'+$button.text()+'"]').remove();

      } else {
        $button.addClass('active');

        $button_list.append('<input type="hidden" '+
          'name="property[property_data]['+$button_list.attr('data-property-field')+'][]" '+
          'value="'+$button.text()+'" />')
      }
    });

    // radio buttons
    // material list
    $body.on('click', '.radio-button-list button', function(e) {
      e.preventDefault();

      var $button = $(this);
      var $button_list = $button.closest('.radio-button-list');

      var $hidden_field = $('input[name="property[property_data]['+$button_list.attr('data-property-field')+']"]');

      if( $button.hasClass('active') ) {
        $button.removeClass('active');
        $hidden_field.remove();
        return false;
      }

      $button_list.find('button.active').removeClass('active');

      if( $hidden_field.length > 0 ) {
        $hidden_field.val($button.text());
      } else {
        $button_list.append('<input type="hidden" '+
          'name="property[property_data]['+$button_list.attr('data-property-field')+']" '+
          'value="'+$button.text()+'" />');  
      }

      $button.addClass('active');
    });


  }

});

// if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
// if the checkbox is unchecked, you must remove the Amenity ID from the variable
// update the h4 tag inside the div Amenities with the list of Amenities checked
$(function () {
    const amenityId = {};

    $('.amenities input[type="checkbox"]').change(function () {
        if (this.checked) {
            amenityId[$(this).data('name')] = $(this).data('id');
        } else {
            delete amenityId[$(this).data('name')];
        }
        $('.amenities h4').text(Object.keys(amenityId).join(', '));

// If in the status is “OK”, add the class available to the div#api_status
// Otherwise, remove the class available to the div#api_status

$.get('http://localhost:5001/api/v1/status/', function (data, response) {
      if (response === 200 || data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
});
});

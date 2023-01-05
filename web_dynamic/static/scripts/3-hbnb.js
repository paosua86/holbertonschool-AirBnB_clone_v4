
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


$.ajax8({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  method: 'POST',
  contentType: 'application/json',
  dataType: 'json',
  data: JSON.stringify({
  success: function (data)

function addPlace (place) {
	return'
	<article>
	  <div class="title_box">
	    <h2>{{ place.name }}</h2>
	    <div class="price_by_night">${{ place.price_by_night }}</div>
	  </div>
	  <div class="information">
	    <div class="max_guest">{{ place.max_guest }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>
            <div class="number_rooms">{{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
            <div class="number_bathrooms">{{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
	  </div>
	  <div class="user">
            <b>Owner:</b> {{ place.user.first_name }} {{ place.user.last_name }}
          </div>
          <div class="description">
	    {{ place.description | safe }}
          </div>
	</article>'

}

});
});

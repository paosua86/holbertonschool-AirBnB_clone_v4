
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
    });
});

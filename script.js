$(document).ready(function () {
    //create parallel arrays
    var cityName = ['New York City', 'San Francisco', 'Los Angeles', 'Austin', 'Sydney'];
    var cityVal = ['nyc', 'sf', 'la', 'austin', 'sydney'];

    for (i = 0; i < cityName.length; i++) {
        $('#city-type').append("<option value='" + cityVal[i] + "'>" + cityName[i] + "</option");
    }

    //create handler for when selection is made
    $('#city-type').on('change', function () {
        //Change the body's class to have the value of city-type
        $('body').attr('class', this.value);
    });

});
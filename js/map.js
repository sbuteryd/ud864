function initMap() {
    // Constructor creates a new map - only center and zoom are required.
   let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.6061111, lng: -122.4043043},
        zoom: 13
    });
}


console.log('this is initMap')

function initMap() {
    // Constructor creates a new map - only center and zoom are required.
   const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13
    });
}


console.log('this is initMap')

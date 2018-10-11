let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        center:{lat: 40.712775,lng:-74.0059739},
        zoom:13
    });
    let place = {lat:40.693450,lng:-73.975847,};

    let marker = new google.maps.Marker({
        map:map,
        position:place,
        title:'practice'
    })
}


function initMap() {
    let map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom:13
    });

    let tribece = {lat:40.708294,lng: -73.999445}
    let marker = new google.maps.Marker({
        position:tribece,
        map:map,
        title:'fist marker'
    });

}
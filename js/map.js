function initMap() {
    var map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13
    });

    let mark = new google.maps.Marker({
        position:{lat:40.708076,lng: -73.999441},
        map:map,
        title:'russell'
    })
    let inforMation = new google.maps.InfoWindow({
        content:"russell"
    })

    mark.addListener('click',function () {
        inforMation.open(map,mark)
    })

}

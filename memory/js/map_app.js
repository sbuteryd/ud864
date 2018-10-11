let map;
//这个函数和api callback 设置的一样
//=3&callback=initMap"
function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        //经纬度
        center:{lat:40.712775,lng:-74.005973},
        zoom:13
    })
}
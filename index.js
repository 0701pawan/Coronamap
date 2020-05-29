function updateMap() {
    fetch("https://www.trackcorona.live/api/countries")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
           rsp.data.forEach(element => {
                latitude = element.latitude
                longitude = element.longitude

                cases = element.confirmed;
                if (cases > 100000) {
                    color = 'rgb(255,0,0)';
                }
                else if(cases>=50000 && cases <=100000){
                    color = 'rgb(0,0,255)'
                }
                else {
                    color = `rgb(0,255,0)`;
                }

                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map)


              
            })
        })
}
updateMap()
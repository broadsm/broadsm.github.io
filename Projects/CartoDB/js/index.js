      function main() {
        var map = L.map('map').setView([51.476892649684785, -0.16822814941406253], 11);
        
        // add a nice baselayer from CARTO
        L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        cartodb.createLayer(map, 'https://shelleybroadway.carto.com/api/v2/viz/5576df76-60a7-47eb-9545-3552b29b1dc5/viz.json')
         .addTo(map)
         .on('done', function(layer) {
           // get sublayer 0 and set the infowindow template
           var sublayer = layer.getSubLayer(0);
           sublayer.infowindow.set('template', $('#infowindow_template').html());
          }).on('error', function() {
            console.log("some error occurred");
          });
      }
      window.onload = main;
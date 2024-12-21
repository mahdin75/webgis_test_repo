const v = new ol.View({
  center: ol.proj.fromLonLat([51.6, 32.6]),
  zoom: 2,
});

const map = new ol.Map({
  target: "map",
  view: v,
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
});

const scaleLineControl = new ol.control.ScaleLine();

map.addControl(scaleLineControl);

//Map
//View
//Layers
//Tile
//image
//vector
//...
//Source
//wms
//..

//Proj

//Style

//control
//interaction
//geolocation
//overlay
//format

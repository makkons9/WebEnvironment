$(function() {
		var map = new ol.Map({
	   	    target: 'map',
   		    layers: [
       			new ol.layer.Tile({
       			  source: new ol.source.MapQuest({layer: 'osm'})
       			})
   	    	],
   	    	view: new ol.View({
       			center: ol.proj.transform([27.31, 65.04], 'EPSG:4326', 'EPSG:3857'),
       			zoom: 4.7
     	    	})
	  	});
 });
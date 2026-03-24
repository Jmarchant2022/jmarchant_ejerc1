var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Casakmz_1 = new ol.format.GeoJSON();
var features_Casakmz_1 = format_Casakmz_1.readFeatures(json_Casakmz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casakmz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casakmz_1.addFeatures(features_Casakmz_1);
var lyr_Casakmz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casakmz_1, 
                style: style_Casakmz_1,
                popuplayertitle: 'Casa.kmz',
                interactive: true,
                title: 'Casa.kmz'
            });
var format_casa_2 = new ol.format.GeoJSON();
var features_casa_2 = format_casa_2.readFeatures(json_casa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casa_2.addFeatures(features_casa_2);
var lyr_casa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casa_2, 
                style: style_casa_2,
                popuplayertitle: 'casa',
                interactive: true,
                title: '<img src="styles/legend/casa_2.png" /> casa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Casakmz_1.setVisible(true);lyr_casa_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Casakmz_1,lyr_casa_2];
lyr_Casakmz_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_casa_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunt': 'T_Pregunt', 'Porc_Co': 'Porc_Co', 'Porc_Inc': 'Porc_Inc', 'video': 'video', });
lyr_Casakmz_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_casa_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunt': 'Range', 'Porc_Co': 'Range', 'Porc_Inc': 'Range', 'video': 'TextEdit', });
lyr_Casakmz_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_casa_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_Pregunt': 'inline label - always visible', 'Porc_Co': 'inline label - visible with data', 'Porc_Inc': 'inline label - always visible', 'video': 'inline label - always visible', });
lyr_casa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
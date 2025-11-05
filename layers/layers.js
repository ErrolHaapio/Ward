var wms_layers = [];


        var lyr_ESRIOcean_0 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_gadm41_SLB_2_1 = new ol.format.GeoJSON();
var features_gadm41_SLB_2_1 = format_gadm41_SLB_2_1.readFeatures(json_gadm41_SLB_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_SLB_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_SLB_2_1.addFeatures(features_gadm41_SLB_2_1);
var lyr_gadm41_SLB_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_SLB_2_1, 
                style: style_gadm41_SLB_2_1,
                popuplayertitle: 'gadm41_SLB_2',
                interactive: true,
                title: '<img src="styles/legend/gadm41_SLB_2_1.png" /> gadm41_SLB_2'
            });

lyr_ESRIOcean_0.setVisible(true);lyr_gadm41_SLB_2_1.setVisible(true);
var layersList = [lyr_ESRIOcean_0,lyr_gadm41_SLB_2_1];
lyr_gadm41_SLB_2_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'Ward': 'Ward', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Tot_Pop': 'Tot_Pop', 'F_Pop': 'F_Pop', 'M_Pop': 'M_Pop', });
lyr_gadm41_SLB_2_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'Ward': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Tot_Pop': 'TextEdit', 'F_Pop': 'TextEdit', 'M_Pop': 'TextEdit', });
lyr_gadm41_SLB_2_1.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'no label', 'NL_NAME_1': 'hidden field', 'Ward': 'inline label - visible with data', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Tot_Pop': 'inline label - visible with data', 'F_Pop': 'inline label - visible with data', 'M_Pop': 'inline label - visible with data', });
lyr_gadm41_SLB_2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
/*--------------------------------------------------------------------
GGR472 LAB 4: Incorporating GIS Analysis into web maps using Turf.js 
--------------------------------------------------------------------*/

/*--------------------------------------------------------------------
Step 1: INITIALIZE MAP
--------------------------------------------------------------------*/
// Define access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXI5MjQiLCJhIjoiY201b2RweHNhMGxjazJscTI0cm92MDNuOCJ9.DUSIWV2_-BR0a9LOqhn15w'; //****ADD YOUR PUBLIC ACCESS TOKEN*****

// Initialize map and edit to your preference
const map = new mapboxgl.Map({
    container: 'map', // container id in HTML
    style: 'mapbox://styles/mapbox/streets-v12',  // ****ADD MAP STYLE HERE *****
    center: [-79.39, 43.65],  // starting point, longitude/latitude
    zoom: 11 // starting zoom level
});



/*--------------------------------------------------------------------
Step 2: VIEW GEOJSON POINT DATA ON MAP
--------------------------------------------------------------------*/
//HINT: Create an empty variable
//      Use the fetch method to access the GeoJSON from your online repository
//      Convert the response to JSON format and then store the response in your new variable

let collisions;

fetch('https://raw.githubusercontent.com/NAnder924/GGR472_Lab4-1-/refs/heads/main/data/pedcyc_collision_06-21.geojson')
    .then(response => response.json()
    .then(
        data => collisions = data
    )
)


/*--------------------------------------------------------------------
    Step 3: CREATE BOUNDING BOX AND HEXGRID
--------------------------------------------------------------------*/
//HINT: All code to create and view the hexgrid will go inside a map load event handler
//      First create a bounding box around the collision point data
//      Access and store the bounding box coordinates as an array variable
//      Use bounding box coordinates as argument in the turf hexgrid function
//      **Option: You may want to consider how to increase the size of your bbox to enable greater geog coverage of your hexgrid
//                Consider return types from different turf functions and required argument types carefully here

map.on('load', (() => {

    const bbox = turf.bbox(collisions)
    const transformed = turf.bboxPolygon(bbox);
    const expanded = turf.transformScale(transformed, 1.1);
    const transformedBbox = turf.bbox(expanded);    
    const hexGrid = turf.hexGrid(transformedBbox, 0.6)

    map.addSource('pedcyc_collision', {
        type: 'geojson',
        data: collisions
    });

    // map.addLayer({
    //         id: 'pedcyc_collision', 
    //         type: 'circle', //type of marker
    //         source: 'pedcyc_collision', //using the source for community gardens and foodtrees added above
    //         paint: {
    //             'circle-radius': 3, //circle radius size
    //             'circle-color': 'blue', //colour of circle
    //             'circle-stroke-width': 1, //border of circle width
    //             'circle-stroke-color': 'rgb(41, 14, 159)' //border of circle colour
    //         }
    //     }
    // )

    let collishex = turf.collect(hexGrid, collisions, '_id', 'collisions_id');

    let maxcollis = 0;

    collishex.features.forEach((feature) => {
        feature.properties.COUNT = feature.properties.collisions_id.length
        if (feature.properties.COUNT > maxcollis) {
            maxcollis = feature.properties.COUNT
        }
    });
    
    map.addSource('hexGrid', {
        type: 'geojson',
        data: collishex
    })

    map.addLayer({
        id: 'hexGrid',
        type: "fill",
        source: "hexGrid",
        paint: {
            'fill-color': [
                'step',
                ['get', 'COUNT'],
                '#ffffff', // 0 collisions 
                1, '#fee5d9', // 1-2 collision 
                3, '#fcbba1', // 3-5 collisions 
                6, '#fc9272', // 6-10 collisions 
                11, '#fb6a4a', // 11-20 collisions
                21, '#de2d26', // 20-40 collisions
                40, '#a50f15', // 40+ collisions
            ],
            'fill-opacity': [
                'case',
                ['==', ['get', 'COUNT'], 0], 0,
                0.5
            ],
            'fill-outline-color': "black"
        }
    });
}))

/*--------------------------------------------------------------------
Step 4: AGGREGATE COLLISIONS BY HEXGRID
--------------------------------------------------------------------*/
//HINT: Use Turf collect function to collect all '_id' properties from the collision points data for each heaxagon
//      View the collect output in the console. Where there are no intersecting points in polygons, arrays will be empty



// /*--------------------------------------------------------------------
// Step 5: FINALIZE YOUR WEB MAP
// --------------------------------------------------------------------*/
//HINT: Think about the display of your data and usability of your web map.
//      Update the addlayer paint properties for your hexgrid using:
//        - an expression
//        - The COUNT attribute
//        - The maximum number of collisions found in a hexagon
//      Add a legend and additional functionality including pop-up windows


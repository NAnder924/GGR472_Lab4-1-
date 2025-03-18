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
    center: [-79.3, 43.72],  // starting point, longitude/latitude
    zoom: 10.2 // starting zoom level
});
//coordinates of city of toronto boundaries
coordinates = [
    [
      [
        -79.53832687565503,
        43.58589331704442
      ],
      [
        -79.53648357379032,
        43.587341371461974
      ],
      [
        -79.52850078855329,
        43.58747802169759
      ],
      [
        -79.51953117446408,
        43.58945537681922
      ],
      [
        -79.51661088783105,
        43.58578087665555
      ],
      [
        -79.50900591441419,
        43.58592212287755
      ],
      [
        -79.50685779319322,
        43.58987870449252
      ],
      [
        -79.5082166948636,
        43.59270625589795
      ],
      [
        -79.49964270052071,
        43.593550858571234
      ],
      [
        -79.49535007291568,
        43.60061271145926
      ],
      [
        -79.49047719811502,
        43.60117675991552
      ],
      [
        -79.48755368816833,
        43.60541192701905
      ],
      [
        -79.48385100234366,
        43.61134104388077
      ],
      [
        -79.47858602074677,
        43.61063510774409
      ],
      [
        -79.47605063998091,
        43.61388244041825
      ],
      [
        -79.4729310405143,
        43.619670464535574
      ],
      [
        -79.46844605619097,
        43.62122327976397
      ],
      [
        -79.47059104869355,
        43.62644609121054
      ],
      [
        -79.4729310405143,
        43.624893410879736
      ],
      [
        -79.47507603301605,
        43.6244699456478
      ],
      [
        -79.47449103506067,
        43.62672839241611
      ],
      [
        -79.46980964982528,
        43.63138459847934
      ],
      [
        -79.46279074244097,
        43.63491336386119
      ],
      [
        -79.45518618851197,
        43.63618418987298
      ],
      [
        -79.44641272145184,
        43.63491229000218
      ],
      [
        -79.44251383004357,
        43.63307727013074
      ],
      [
        -79.43373758181222,
        43.62969181637524
      ],
      [
        -79.42429193925675,
        43.6288052532538
      ],
      [
        -79.42155746127224,
        43.626301470890496
      ],
      [
        -79.41579004648379,
        43.626301470890496
      ],
      [
        -79.41002263169537,
        43.626510209192475
      ],
      [
        -79.40814714017198,
        43.62922333950132
      ],
      [
        -79.4074255088756,
        43.63214494095945
      ],
      [
        -79.40396664068771,
        43.63214574203829
      ],
      [
        -79.40310084840476,
        43.62974510773054
      ],
      [
        -79.40583994103106,
        43.62849269031946
      ],
      [
        -79.40555271544373,
        43.62661452927185
      ],
      [
        -79.39257576717614,
        43.616699006002136
      ],
      [
        -79.39300828349296,
        43.61482016173471
      ],
      [
        -79.39041342141384,
        43.611479198753074
      ],
      [
        -79.38190648460106,
        43.61168798851867
      ],
      [
        -79.37577432232595,
        43.613998898554826
      ],
      [
        -79.36449067889286,
        43.61968484864559
      ],
      [
        -79.35597169619847,
        43.62537120835225
      ],
      [
        -79.35287388430925,
        43.62913512243574
      ],
      [
        -79.34889098330922,
        43.62897496068041
      ],
      [
        -79.34866971103168,
        43.63153749755486
      ],
      [
        -79.35254197589285,
        43.634260073270866
      ],
      [
        -79.35409088183725,
        43.63458036818784
      ],
      [
        -79.35774187442046,
        43.63385970222481
      ],
      [
        -79.36183541155968,
        43.62849447285308
      ],
      [
        -79.36670340167089,
        43.6247305186524
      ],
      [
        -79.37112884722652,
        43.62553137971014
      ],
      [
        -79.37223520861531,
        43.62416990956348
      ],
      [
        -79.37677129031015,
        43.62424999689617
      ],
      [
        -79.38064355517136,
        43.62657248313417
      ],
      [
        -79.38318818636576,
        43.62657248313417
      ],
      [
        -79.38506900072696,
        43.628254227499326
      ],
      [
        -79.38816599183116,
        43.62849462612019
      ],
      [
        -79.38573281756015,
        43.630416401115696
      ],
      [
        -79.38694981508819,
        43.6328187250204
      ],
      [
        -79.39203214409088,
        43.632418930445596
      ],
      [
        -79.39457253262631,
        43.634100428392145
      ],
      [
        -79.39302625775493,
        43.63602171836044
      ],
      [
        -79.37865239131573,
        43.63730281535291
      ],
      [
        -79.37300839101604,
        43.640024939755705
      ],
      [
        -79.35928988812415,
        43.64466819470405
      ],
      [
        -79.3546440288439,
        43.63770314814812
      ],
      [
        -79.35066116153166,
        43.63409992517256
      ],
      [
        -79.34630164071349,
        43.63247917627987
      ],
      [
        -79.34010288789679,
        43.638021188698076
      ],
      [
        -79.33536263746052,
        43.63815310678737
      ],
      [
        -79.32879891010487,
        43.64461824488208
      ],
      [
        -79.33208091155994,
        43.63841698210646
      ],
      [
        -79.32898149320182,
        43.63525013054627
      ],
      [
        -79.33846203469275,
        43.630631631450456
      ],
      [
        -79.3464842148203,
        43.62258122798758
      ],
      [
        -79.34666668372095,
        43.61809356098567
      ],
      [
        -79.34648450939324,
        43.61360552930478
      ],
      [
        -79.34338510825202,
        43.61109735276099
      ],
      [
        -79.33372184597698,
        43.61822555639725
      ],
      [
        -79.32314726610315,
        43.61611352836209
      ],
      [
        -79.31658307152956,
        43.64844421975036
      ],
      [
        -79.31421245587713,
        43.65134634707985
      ],
      [
        -79.31494092224432,
        43.656358294545896
      ],
      [
        -79.30759930132898,
        43.65335243405056
      ],
      [
        -79.3067927071578,
        43.65519867553931
      ],
      [
        -79.3038390493084,
        43.65607290105481
      ],
      [
        -79.3043760470943,
        43.661415028602136
      ],
      [
        -79.30115390372838,
        43.66423158875597
      ],
      [
        -79.29658604556933,
        43.66481569778571
      ],
      [
        -79.27779302729815,
        43.67112698038508
      ],
      [
        -79.27255429514446,
        43.677341264111305
      ],
      [
        -79.26590187555723,
        43.68413207613071
      ],
      [
        -79.26314789849198,
        43.686324268462414
      ],
      [
        -79.25543316627291,
        43.69435437346684
      ],
      [
        -79.24300440197551,
        43.699735151906054
      ],
      [
        -79.2410298480761,
        43.70211185254814
      ],
      [
        -79.23390735501707,
        43.70041483182848
      ],
      [
        -79.23390646552349,
        43.70367990548442
      ],
      [
        -79.22578610319097,
        43.704545827443496
      ],
      [
        -79.22025007850183,
        43.721128204224385
      ],
      [
        -79.21756883143604,
        43.721336492233235
      ],
      [
        -79.20827371458718,
        43.731758375850745
      ],
      [
        -79.20256406903219,
        43.73479994470188
      ],
      [
        -79.19684418676408,
        43.74045107633546
      ],
      [
        -79.17429108933575,
        43.75436010647013
      ],
      [
        -79.15774294234593,
        43.75914576122787
      ],
      [
        -79.15142203719891,
        43.758495092507246
      ],
      [
        -79.13997857581322,
        43.768936702678815
      ],
      [
        -79.12613120147914,
        43.78197786908379
      ],
      [
        -79.11469074384237,
        43.795452792126326
      ],
      [
        -79.12223537245141,
        43.79911993162028
      ],
      [
        -79.13960687095744,
        43.81291291848399
      ],
      [
        -79.15296867512669,
        43.819016300501175
      ],
      [
        -79.1712221733962,
        43.853900067800026
      ],
      [
        -79.63277939345323,
        43.75320004591532
      ],
      [
        -79.62622431967428,
        43.73099080968689
      ],
      [
        -79.59955862626268,
        43.68614122312587
      ],
      [
        -79.59397936469189,
        43.681654570001
      ],
      [
        -79.59211870028706,
        43.67267870397501
      ],
      [
        -79.57725051301102,
        43.67133423205121
      ],
      [
        -79.55501577539506,
        43.621011478615
      ],
      [
        -79.54819447825817,
        43.61561337584152
      ],
      [
        -79.54944753998778,
        43.610213884958824
      ],
      [
        -79.53832687565503,
        43.58589331704442
      ]
    ]
  ]


/*--------------------------------------------------------------------
Step 2: VIEW GEOJSON POINT DATA ON MAP
--------------------------------------------------------------------*/
//HINT: Create an empty variable
//      Use the fetch method to access the GeoJSON from your online repository
//      Convert the response to JSON format and then store the response in your new variable

let collisions;
let neighborhoods;
//fetching collision data
fetch('https://raw.githubusercontent.com/NAnder924/GGR472_Lab4-1-/refs/heads/main/data/pedcyc_collision_06-21.geojson')
    .then(response => response.json()
    .then(
        data => collisions = data
    )
)
//fetching boundaries of toronto
fetch("https://raw.githubusercontent.com/NAnder924/GGR472_Lab4-1-/refs/heads/main/data/waterboundaries.geojson")
    .then(response => response.json()
    .then(
        data => neighborhoods = data
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
//create map
map.on('load', (() => {

    const bbox = turf.bbox(collisions)
    const transformed = turf.bboxPolygon(bbox);
    const expanded = turf.transformScale(transformed, 1.1);
    const transformedBbox = turf.bbox(expanded); 
    const hexGrid = turf.hexGrid(transformedBbox, 0.6) //size of hexagons

    let cleanHexGrid = []

    const polygon = turf.polygon(coordinates)

    hexGrid.features.forEach((i) => {
        if (turf.booleanWithin(i, polygon) || turf.booleanOverlap(i, polygon)) {
            cleanHexGrid.push(i);
        }
    });

    console.log(cleanHexGrid)
    console.log(hexGrid)

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

    let collishex = turf.collect(turf.featureCollection(cleanHexGrid), collisions, '_id', 'collisions_id');

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
            'fill-opacity': 0.5,
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


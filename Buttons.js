//

require([
    "esri/WebScene",
    "esri/views/SceneView",
    "esri/Camera",
    "esri/widgets/Home",
    "dojo/domReady!",
    "esri/layers/FeatureLayer"
  ], function(WebScene, SceneView, Camera, Home,FeatureLayer, ) {

  
    
    /*var map = new Map({
      basemap: "streets",
      ground: "world-elevation"
    });*/
    var scene = new WebScene({
      portalItem:{
       id:"8046207c1c214b5587230f5e5f8efc77" 
      }
    });
    /*
    var featureLayer = new FeatureLayer({
        portalItem: {
         id: "bbdd49e10a2847a8b8018a7035bc92c7" 
       }
     });
     map.add(featureLayer);*/

//https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/USA_Structures_View/FeatureServer  



    var layer = Layer.fromPortalItem({
        portalItem: {
          id: "7c430f0e3f1549ff887f5e9488e1754f"
        }
      })
        .then(addLayer)
        .catch(rejection);

      // Adds the layer to the map once it loads
      function addLayer(layer) {
        map.add(layer);
      }
      function rejection(error) {
        console.log("Layer failed to load: ", error);
      }
    });
    
    var camera = new Camera({
      position: [
        -71.057083, // lon
        42.361145, // lat
        2500// elevation in meters
      ],
      tilt: 30,
      heading: 0
    })
    
    var camera2 = new Camera({
      position: {
        x: -70.985786,
        y: 42.536457,
        z: 2500
      },
      tilt: 30,
      heading: 0
    })
    var camera3 = new Camera({
      position: {
        x: -72.664658,
        y: 42.328674,
        z: 2500
      },
      tilt: 30,
      heading: 0
    })
    var camera4 = new Camera({
      position: {
        x: -71.175682,
        y: 42.701283,
        z: 2500
      },
      tilt: 30,
      heading: 0
    });

    var view = new SceneView({
      container: "viewDiv",
      map: scene,
      viewingMode:"global",
      camera: camera,
      environment: {
          lighting: {
            date: new Date(),
            directShadowsEnabled: true,
            // don't update the view time when user pans.
            // The clock widget drives the time
            cameraTrackingEnabled: false
          }
      },
  });
  
  var homeBtn = new Home({
      view: view
    });

    // Add the home button to the top left corner of the view
  view.ui.add(homeBtn, "top-right");
  
  [Northampton, Peabody, Boston, Lawrence].forEach(function(button) {
    button.style.display = 'flex';
    view.ui.add(button, 'top-right');
  });
  
  Northampton.addEventListener('click', function() {
    // reuse the default camera position already established in the homeBtn
    view.goTo({
      target:camera3
    });
  });
  
  Peabody.addEventListener('click', function() {
    // reuse the default camera position already established in the homeBtn
    view.goTo({
      target:camera2
    });
  });
  Boston.addEventListener('click', function() {
    // reuse the default camera position already established in the homeBtn
    view.goTo({
      target:camera
    });
  });
  Lawrence.addEventListener('click', function() {
    // reuse the default camera position already established in the homeBtn
    view.goTo({
      target:camera4
    });
  });


  });

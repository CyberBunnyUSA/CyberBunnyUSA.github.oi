
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
          -71.060217, // lon
          42.382655, // lat
          2500// elevation in meters
        ],
        tilt: 20,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: {
          x: -72.664658,
          y: 42.328674,
          z: 2500
        },
        tilt: 20,
        heading: 0
      })
      var camera3 = new Camera({
        position: {
          x: 122.4194,
          y: 37.7749,
          z: 2500
        },
        tilt: 20,
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
    
    var homeBtn1 = new Home({
        view: view
      });  
      
    view.ui.add(homeBtn1, "top-right");
    
    [stl, bost, StL, SF].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    bost.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    stl.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
      
     StL.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 90.1994,
          y: 38.6270, 
          z: 2500
        },
        tilt: 20,
        heading: 0
      });
       
     SF.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 122.4194,
          y: 37.7749, 
          z: 2500
        },
        tilt: 20,
        heading: 0
      });
    });
    });
    });
});
    
<script>


  require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "dojo/domReady!"
  "esri/layers/FeatureLayer"
  ], function(WebScene, SceneView, Camera, Home, FeatureLayer,) {



  var map = new Map({
    basemap: "streets",
    ground: "world-elevation"
  });

  var scene = new WebScene({
  portalItem:{
  id:"8046207c1c214b5587230f5e5f8efc77" 
  }
  });

  var featureLayer = new FeatureLayer({
      portalItem: {
      id: "0ec8512ad21e4bb987d7e848d14e7e24" 
  }
  });

  map.add(featureLayer);

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
  {"}"},
  });
  

  var homeBtn = new Home({
    view: view
  });

  view.ui.add(homeBtn, "top-right");

  [Northampton, Peabody, Boston, Lawrence].forEach(function(button) {
  button.style.display = 'flex';
  view.ui.add(button, 'top-right');
  });

  Northampton.addEventListener('click', function() {
  view.goTo({
  target:camera3
  });
  });

  Peabody.addEventListener('click', function() {
  view.goTo({
  target:camera2
  });
  });

  Boston.addEventListener('click', function() {
  view.goTo({
  target:camera
  });
  });


  Lawrence.addEventListener('click', function() {
  view.goTo({
  target:camera4
  });
  });


</script> 
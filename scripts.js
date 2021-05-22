window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: 'assets/360_test2.jpg',
    preview:'https://raw.githubusercontent.com/sophia-boss/portfolio/main/assets/360_test2.jpg',
    is_stereo: false,
    // width: settings.width,
    // height: 400
    
  });

}

function changewidth() { 
  var x = document.getElementById('vrview'); 
  x.style.width = "100%"; 
  x.style.height = "40%"; 
} 
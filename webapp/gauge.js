//gauge.js
//


module.exports ={

  setup : function() {
    var opts = {
      angle: -0.4,
      lineWidth: 0.1,
      limitMax: 'true', 
      strokeColor: 'red',
      radiusScale: 1,
      generateGradient: true,
        pointer: {
        length: 0.5, // // Relative to gauge radius
        strokeWidth: 0.03, // The thickness
        color: 'orange' // Fill color
      },
      staticLabels: {
      font: "90% sans-serif",  // Specifies font
      labels: [0, 25, 50, 75, 100],  // Print labels at these values
      color: "black",  // Optional: Label text color
      fractionDigits: 2  // Optional: Numerical precision. 0=round off.
    },  // just experiment with them
      strokeColor: 'red',   // to see which ones work best for you
      staticZones: [
       {strokeStyle: "#004478", min: 0, max: 33}, // Yellow
       {strokeStyle: "#2E78BC", min: 33, max: 66}, // Green
       {strokeStyle: "#88C5F7", min: 66, max: 100}, // Yellow
    ],
      generateGradient: true
    };
    var target = document.getElementById('foo'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    var x = 4;
    setInterval(gauge.set(x + 3),500);
    var target = document.getElementById('foo'); // your canvas element
    gauge.set(0);
  }
}


  
  // randomly change value
//   var randomize = function(){
//     gauge.set(Math.floor(Math.random() * (100 - 1))); 
//   };
//   setTimeout(function(){ setInterval(randomize, 5000); }, 1000);
//   gauge.setTextField(document.getElementById("gauge1-txt"));
  //gauge.set(20); // set actual value
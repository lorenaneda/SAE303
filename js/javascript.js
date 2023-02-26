// Initialisez AOS
AOS.init();

lottie.loadAnimation({
  container: document.getElementById("animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "js/data.json",
});


/*
var customColorFunction = function (schemeColors) {
  var myColors = ['#3DB2FF', '#FFEDDA', '#FFB830', '#FF2442']; // define/generate own colors

  // extend the color scheme with own colors
  Array.prototype.push.apply(schemeColors, myColors);

  return schemeColors; // optional: this is not needed if the array is modified in place
};
*/
var ctx = document.getElementById('chartjs').getContext('2d');

var data = {
  labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [{
    label: 'Moyenne des assecs par année',
    data: [4, 1.2, 1.4, 3.2, 1, 5.714285714, 6.75, 6.75, 7.214285714, 0.5, 4.714285714],
  }]
};

var options = {
  responsive: true,
  maintainAspectRatio: false
};

var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});
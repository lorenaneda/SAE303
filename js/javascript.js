// Initialisez AOS
AOS.init();

lottie.loadAnimation({
  container: document.getElementById("animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "js/data.json",
});

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "Précipitations (moyennes)",
        data: [
          60.54, 53.72, 82.48, 180.6, 83, 62.24, 65.72, 63.16, 48.86, 85.76,
          50.24,
        ],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        lineTension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

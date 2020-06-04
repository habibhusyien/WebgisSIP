// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var olddata = [91179, 92279, 90570, 91023, 89965];
var ctx = document.getElementById("bjn");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2015", "2016", "2017", "2018", "2019"],
    datasets: [{
      label: "Jumlah",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: olddata,

    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Tahun'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 18
        }
      }],
      yAxes: [{
        ticks: {
          min: 89000,
          max: 92500,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
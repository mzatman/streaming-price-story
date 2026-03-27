const ctx = document.getElementById('priceChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    datasets: [
      {
        label: 'Netflix',
        data: [7.99, 7.99, 7.99, 8.99, 9.99, 9.99, 10.99, 12.99, 12.99, 13.99, 15.49, 15.49, 15.49],
        fill: false
      },
      {
        label: 'Spotify',
        data: [9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 10.99, 10.99, 10.99],
        fill: false
      }
    ]
  }
});

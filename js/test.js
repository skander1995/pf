function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Language', 'Rating'],

]);

var options = {
    title: 'Most Popular Programming Languages',
    width: 900,
    height: 500,
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}

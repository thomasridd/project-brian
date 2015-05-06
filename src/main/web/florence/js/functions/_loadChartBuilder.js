function loadChartBuilder() {
  var html = templates.chartBuilder();
  $('body').append(html);
  $('.chart-builder').css("display","block");

  renderChart();

  $('.chart-builder :input').on('input', function () {
    renderChart();
  });

  $('.btn-chart-builder-cancel').on('click', function() {
    $('.chart-builder').stop().fadeOut(200).remove();
  });

  $('.btn-chart-builder-create').on('click', function() {
    $('.chart-builder').fadeOut(200).remove();
  });

  function renderChart() {

    var chart = {};
    chart.data = $('#chart-data').val();
    chart.type = $('#chart-type').val();
    chart.title = $('#chart-title').val();
    chart.xaxis = $('#chart-x-axis').val();
    chart.yaxis = $('#chart-y-axis').val();
    console.log(chart);

    if(chart.title == '') {
      chart.title = '[Title]'
    }

    uhuh = tsvJSON(chart.data);
    etet = tsvJSONval(chart.data);

    c3.generate({
      bindto: '#chart',
      data: {
        json: uhuh,
        keys: {
          value: etet
        },
        type: chart.type
      },
      axis: {
        x: {
          label: chart.xaxis
        },
        y: {
          label: chart.yaxis
        }
      }
    });

    d3.select('#chart svg').append('text')
      .attr('x', d3.select('#chart svg').node().getBoundingClientRect().width / 2)
      .attr('y', 16)
      .attr('text-anchor', 'middle')
      .style('font-size', '1.4em')
      .text(chart.title);
  }


  function csvJSON (csv) {
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");
    values=headers.shift();

    for(var i=1;i<lines.length;i++){
      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return result; //JSON
  }

  function tsvJSON (input) {
    var lines=input.split("\n");
    var result = [];
    var headers=lines[0].split("\t");

    for(var i=1;i<lines.length;i++){
      var obj = {};
      var currentline=lines[i].split("\t");

      for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    p = JSON.stringify(result);
    //console.log(p)
    //return result; //JavaScript object
    return result //JSON
  }

  function tsvJSONval (input) {
    var lines=input.split("\n");
    var headers=lines[0].split("\t");
    headers.shift();
    console.log(headers);
    return headers;
  }
}
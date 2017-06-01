var svgWidth = 420;

var startValue=svgWidth/2-10;

var spacing= 5;


var legend=d3.select('#circuitry')
  .append('center')
  .append('svg')
  .attr("text-anchor", "middle")
  .style('height',20);

legend
      .append('text')
      .attr('x',60)
      .attr('y',14)
      .attr('class','legendtext')
      .text('1 Mile').style('fill','#CECECE');


    legend
      .append('circle')
      .attr('fill','#eff3ff')
      .attr('cx',92)
      .attr('cy',10)
      .attr('r',8);

    legend
      .append('circle')
      .attr('fill','#c6dbef')
      .attr('cx',112)
      .attr('cy',10)
      .attr('r',8);

    legend
      .append('circle')
      .attr('fill','#9ecae1')
      .attr('cx',132)
      .attr('cy',10)
      .attr('r',8);
        legend
      .append('circle')
      .attr('fill','#6baed6')
      .attr('cx',152)
      .attr('cy',10)
      .attr('r',8);
        legend
      .append('circle')
      .attr('fill','#4292c6')
      .attr('cx',172)
      .attr('cy',10)
      .attr('r',8);
        legend
      .append('circle')
      .attr('fill','#2171b5')
      .attr('cx',192)
      .attr('cy',10)
      .attr('r',8);
        legend
      .append('circle')
      .attr('fill','#084594')
      .attr('cx',212)
      .attr('cy',10)
      .attr('r',8);
    legend
      .append('text')
      .attr('x',247)
      .attr('y',14)
      .attr('class','legendtext')
      .text('2.8 Miles').style('fill','#CECECE');




var legend2=d3.select('#Population')
  .append('center')
  .append('svg')
  .attr("text-anchor", "middle")
  .style('height',60)
  .style('width',svgWidth);

legend2
      .append('text')
      .attr('x',function (d) { return startValue-(rscale(25000)+2*rscale(20000)+2*rscale(15000)+6*rscale(10000)+4*spacing); })
      .attr('y',34)
      .attr('class','legendtext')
      .text('10,000').style('fill','#CECECE');


var point1=legend2
      .append('circle').attr('id','legend2')
      .attr('fill','none')
      .attr('class','legend2')
      .attr('stroke','#CECECE')
      .attr('cx',function (d) { return startValue-(rscale(25000)+2*rscale(20000)+2*rscale(15000)+rscale(10000)+3*spacing); })
      .attr('cy',30)
      .attr('r', function (d) { return rscale(10000); });

    legend2
      .append('circle')
      .attr('fill','none')
      .attr('class','legend2')
      .attr('stroke','#CECECE')
      .attr('cx',function (d) { return startValue-(rscale(25000)+2*rscale(20000)+rscale(15000)+2*spacing); })
      .attr('cy',30)
      .attr('r', function (d) { return rscale(15000); });

    legend2
      .append('circle')
      .attr('fill','none')
      .attr('class','legend2')
      .attr('stroke','#CECECE')
      .attr('cx',function (d) { return startValue-(rscale(25000)+rscale(20000)+spacing);})
      .attr('cy',30)
      .attr('r', function (d) { return rscale(20000); });

    legend2
      .append('circle')
      .attr('fill','none')
      .attr('class','legend2')
      .attr('stroke','#CECECE')
      .attr('cx',startValue)
      .attr('cy',30)
      .attr('r', function (d) { return rscale(25000); });

    legend2
      .append('circle')
      .attr('fill','none')
      .attr('class','legend2')
      .attr('stroke','#CECECE')
      .attr('cx',function (d) { return startValue+(rscale(25000)+rscale(30000)+spacing);})
      .attr('cy',30)
      .attr('r', function (d) { return rscale(30000); });

    legend2
      .append('circle')
      .attr('fill','none')
      .attr('class','legend2')
      .attr('stroke','#CECECE')
      .attr('cx',function (d) { return startValue+(rscale(25000)+2*rscale(30000)+rscale(35000)+2*spacing);})
      .attr('cy',30)
      .attr('r', function (d) { return rscale(35000); });

    legend2
      .append('text')
      .attr('x',function (d) { return startValue+(rscale(25000)+2*rscale(30000)+3*rscale(35000)+3*spacing);})
      .attr('y',34)
      .attr('class','legendtext')
      .html(function(d) { return '35,000';})
      .style('fill','#CECECE')
      .style('text-align','left');


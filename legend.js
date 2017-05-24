var legend1=d3.select('#legend').append('svg').append('g')  ;

    legend1
      .append('circle')
      .attr('class','point')
      .attr('cx',20)
      .attr('cy',20)
      .attr('r',8);

    legend1
      .append('text')
      .attr('x',30)
      .attr('y',25)
      .attr('class','legendtext')
      .text('Tier 1').style('fill','#CECECE');

    var legend2=d3.select('#legend').select('svg').append('g')

    legend2
      .append('circle')
      .attr('class','point2')      
      .attr('cx',20)
       .attr('cy',40)
       .attr('r',8);

    legend2
      .append('text')
      .attr('x',30)
      .attr('y',45)
      .attr('class','legendtext')
      .text('Tier 2')
       .style('fill','#CECECE');

  var legend3=d3.select('#legend').select('svg').append('g')

    legend3
      .append('circle')
      .attr('class','point3')      
      .attr('cx',20)
       .attr('cy',60)
       .attr('r',8);

    legend3
      .append('text')
      .attr('x',30)
      .attr('y',65)
      .attr('class','legendtext')
      .text('Tier 3')
       .style('fill','#CECECE');
  
    var legend4=d3.select('#legend').select('svg').append('g')      .attr('class','legendtext') 

    legend4
      .append('circle')
      .attr('class','point4') 
      .attr('cx',20)
       .attr('cy',80)
       .attr('r',8);

    legend4
      .append('text')
      .attr('x',30)
      .attr('y',85)
      .attr('class','legendtext')
      .text('Tier 4')
       .style('fill','#CECECE');


var legend5=d3.select('#legend').select('svg').append('g')

    legend5
      .append('circle')
      .attr('class','point5')      
      .attr('cx',20)
       .attr('cy',100)
       .attr('r',8);

    legend5
      .append('text')
      .attr('x',30)
      .attr('y',105)
      .attr('class','legendtext')
      .text('Tier 5')
       .style('fill','#CECECE');

var legend6=d3.select('#legend').select('svg').append('g')

    legend6
      .append('circle')
      .attr('class','point6')      
      .attr('cx',20)
       .attr('cy',120)
       .attr('r',8);

    legend6
      .append('text')
      .attr('x',30)
      .attr('y',125)
      .attr('class','legendtext')
      .text('Tier 6')
       .style('fill','#CECECE');

var legend7=d3.select('#legend').select('svg').append('g')

    legend7
      .append('circle')
      .attr('class','point7')      
      .attr('cx',20)
       .attr('cy',140)
       .attr('r',8);

    legend7
      .append('text')
      .attr('x',30)
      .attr('y',145)
      .attr('class','legendtext')
      .text('Tier 7')
       .style('fill','#CECECE');

var legend8=d3.select('#legend').select('svg')
  .attr('height',310)
  .attr('width',100)
  .append('g')

    legend8
      .append('circle')
      .attr('class','point8')      
      .attr('cx',20)
       .attr('cy',160)
       .attr('r',8);

    legend8
      .append('text')
      .attr('x',30)
      .attr('y',165)
      .attr('class','legendtext')
      .text('Tier 8')
       .style('fill','#CECECE');

var legend9=d3.select('#legend').select('svg').append('g')

    legend9
      .append('circle')
      .attr('class','point9')      
      .attr('cx',20)
       .attr('cy',180)
       .attr('r',8);

    legend9
      .append('text')
      .attr('x',30)
      .attr('y',185)
      .attr('class','legendtext')
      .text('Tier 9')
       .style('fill','#CECECE');

var legend10=d3.select('#legend').select('svg').append('g')

    legend10
      .append('circle')
      .attr('class','point10')      
      .attr('cx',20)
       .attr('cy',200)
       .attr('r',8);

    legend10
      .append('text')
      .attr('x',30)
      .attr('y',205)
      .attr('class','legendtext')
      .text('Tier 10')
       .style('fill','#CECECE');

  var legend11=d3.select('#legend').select('svg').append('g')

    legend11
      .append('circle')
      .attr('class','sizelegend')      
      .attr('cx',20)
       .attr('cy',230)
       .attr('r',13.2)
       .style('fill','none')
       .style('stroke','#CECECE');

    legend11
      .append('text')
      .attr('x',35)
      .attr('y',235)
      .attr('class','legendtext')
      .text('$50 Value')
      .style('fill','#CECECE');

   var legend12=d3.select('#legend').select('svg').append('g')

    legend12
      .append('circle')
      .attr('class','sizelegend')      
      .attr('cx',20)
       .attr('cy',257)
       .attr('r',10.45)
       .style('fill','none')
       .style('stroke','#CECECE');

    legend12
      .append('text')
      .attr('x',35)
      .attr('y',262)
      .attr('class','legendtext')
      .text('$30 Value')
      .style('fill','#CECECE');

     var legend13=d3.select('#legend').select('svg').append('g')

    legend13
      .append('circle')
      .attr('class','sizelegend')      
      .attr('cx',20)
       .attr('cy',281)
       .attr('r',7.725)
       .style('fill','none')
       .style('stroke','#CECECE');

    legend13
      .append('text')
      .attr('x',35)
      .attr('y',286)
      .attr('class','legendtext')
      .text('$15 Value')
      .style('fill','#CECECE');

       var legend14=d3.select('#legend').select('svg').append('g')

    legend14
      .append('circle')
      .attr('class','sizelegend')      
      .attr('cx',20)
       .attr('cy',303)
       .attr('r',2.736)
       .style('fill','none')
       .style('stroke','#CECECE');

    legend14
      .append('text')
      .attr('x',35)
      .attr('y',308)
      .attr('class','legendtext')
      .text('$1 Value')
      .style('fill','#CECECE');


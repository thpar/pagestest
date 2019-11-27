var blink = function(){  
  function hello(){
    console.log("Hello world");
  };
  
  function blink(){
    var circle = d3.select("#figure")
	.select("svg")
	.selectAll("circle");
    
    circle.on('click', function(){
      console.log("Clicked circle");
      var thisCircle = d3.select(this);
      console.dir(thisCircle);
      
      var color = thisCircle.attr('fill');
      console.dir(color);
      
      if (color == 'green'){
	thisCircle.attr('fill', 'red');
      } else {
	thisCircle.attr('fill', 'green');
      }
    });
  };

  return {
    'hello': hello,
    'blink': blink
  };
}();

blink.hello();
blink.blink();

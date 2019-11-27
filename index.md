# GitHub Pages Test

With Markdown.


## Test 1 2

*some markup*

 - bla
 - more bla
 - and another
 
A column | another column
---------|-----------------
Something here | another [thing][mylink] here
And some more | here

[mylink]: https://duckduckgo.com/

<div id="figure" width="100" height="100">
  <svg>
	<circle class="shadow" cx="50" cy="50" r="30" stroke-width="1" stroke="black" fill="green"></circle>
  </svg>
</div>

<script src="https://d3js.org/d3.v5.min.js"></script>
<script>    
  var hello = function(){
    console.log("Hello world");
  }();

  var blink = function(){
    var circle = d3.select("#figure")
	.select("svg")
	.selectAll("circle");

    circle.on('click', function(){
      console.log("Clicked circle");
      d3.select(this).style('color', 'red');
    });
  }();
  
</script>

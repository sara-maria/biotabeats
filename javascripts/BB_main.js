//////////////////////////////////////////////////////////////////////////////////
///////////    PETRI DISC WITH COLONIES AND BODY SECTIONS  ///////////////////////
//////////////////////////////////////////////////////////////////////////////////
     
// 1. Draw buttons and kick-off interactivity -------------------------------
            button_interactivity(); 
            // Set all buttons to be white to start with!
            d3.select(".playmode_buttons")
                .selectAll("div")
                .style("background-color", "rgb(250, 243, 243)")
                .style("color", "#444")

       
// 2. Draw petridisc ------------------------------- 
    // Set parameters for disc
    var svg = d3.select("body").select("#wrapper").select("#content")
                    .select("#Disc")
                    .append("svg")
                    .attr("id", "Colonies")
                    .attr("width","620px")
                    .attr("height","620px");

    var Discdata = [1,1,1,1,1]; // width of each element
    var cx = 220;
    var cy = 280;
    var rmax = 39;    
    var sections = 5; 
    var radiusmax = 195;
    var N = Array.from({length: sections}, (q, radiusmax) => radiusmax+1);
    for(var i=0; i<N.length; i++) { N[i] *= rmax;}
    var radius = N;

     // Create the body sections on the disc    
    Initialize('Colonies', cx, cy, radiusmax, Discdata); 

    // Create concentric circles to serve as background:    
    svg.selectAll('circle')
        .data(radius)
        .enter()
        .append('circle')
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', function(d) { return d; })
        .attr('fill', 'none')
        .attr("stroke", "#444")
        .attr("stroke-width", 1)    
                                
// 3. Load Colony Coordinate data and PLOT these! -------------------------------
            d3.csv("./BB_data/20170612_colony_coordinates.csv",function(d){ 
                // transform the data here
                d['xc']=+d["xc"];
                d['yc']=+d["yc"];
                d['radcol']=+d["radcol"];

                growSmallDataDriven(d)
                
                }, );//d3.csv


   

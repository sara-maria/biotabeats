///////////////////////////////////////////////////////////////////////////
////// All functionality to prepare the Biota Beats visualization /////////
///////////////////////////////////////////////////////////////////////////	


///////////////////////////////////////////////////////////////////////////
//////////////////// MICROBIOME BODY HIGHLIGHTING AND SLIDESHOW     ///////
///////////////////////////////////////////////////////////////////////////	
                   
// SECTIONS SEPARATELY - one image per body section:
        var imgArray = [
            './BB_images/AllBW-lessBW.jpg',
            './BB_images/FeetC-lessBW_blur.jpg',
            './BB_images/GenC-lessBW_blur.jpg',
            './BB_images/BellyC-lessBW_blur.jpg',
            './BB_images/ArmC-lessBW_blur.jpg',
            './BB_images/MouthC-lessBW_blur.jpg',
            './BB_images/AllC.jpg'];

        function ImageShow(imgindex) {
            document.getElementById('slider').src = imgArray[imgindex];
        }

//SLIDE SHOW: in order of appearance in FINAL SYMPHONY:
        var imgArraySlideshow = [
            './BB_images/FeetC-lessBW_blur.jpg',
            './BB_images/FeetC-GenC_blur.jpg',
            './BB_images/FeetC-GenC-BellyC_blur.jpg',
            './BB_images/FeetC-GenC-BellyC-ArmC_blur.jpg',
            './BB_images/FeetC-MouthC_blur.jpg',
            './BB_images/FeetC-GenC-BellyC-ArmC-MouthC_blur.jpg',
            './BB_images/AllBW-lessBW.jpg'];

        curIndexslide = 0;
        imgDurationArray = [8000,8000,8000,16000,8000,19000];

        function slideShow() {
            
            var buttons = d3.select("#buttonS")
            var colour = d3.rgb(buttons.attr("style"));
       
            if(colour.r == 68) {  // 68 = pressed button! 

                document.getElementById('slider').src = imgArraySlideshow[curIndexslide]; //show image
                timeout = setTimeout("slideShow()", imgDurationArray[curIndexslide]);
                curIndexslide++;

                //          if (curIndex == imgArraySlideshow.length) { curIndex = 0; } // no looping!
                if (curIndexslide >= imgArraySlideshow.length ) { 
                    curIndexslide = 0; //imgArraySlideshow.length;
                    clearTimeout(timeout);
                    document.getElementById('slider').src = "./BB_images/AllC.jpg"; } 
            };
        };


///////////////////////////////////////////////////////////////////////////
//////////////////// PETRI DISC BODY SECTION HIGHLIGHTIN     //////////////
///////////////////////////////////////////////////////////////////////////	
var curIndexarc = 0;
var ArcArray = [
            '#arc0',
            '#arc4',
            '#arc2',
            '#arc1',
            '#arc3',
            '#arc5'];

function highlight(thisarc) {

         var highlightfillcolor1 = "rgb(177, 211, 230)";
         var highlightfillcolor2 = "#eee2f2";
         var highlightstrokecolor = "rgb(125, 0, 50)";
         
         var heartbeatduration1 = 750;
         var heartbeatduration2 = 250;
    
         // first un-highlight all arcs:
         arcs = d3.selectAll('.arc')
         
         arcs.transition()
                    .style("fill","none") 
                    .duration(500)
                    .attr("stroke-width", 1)
                    .style("stroke","#444")
                    .attr("stroke-dasharray", "1, 0");
        
         
     if (thisarc != "all") { //only ONE SECTION chosen:         
         var thisarcsel = svg.select(thisarc);
                
            recursive_transitions();
         
            function recursive_transitions() {
                thisarcsel.style("fill",highlightfillcolor1)
                        .style("stroke",highlightstrokecolor)
                
                thisarcsel.transition()
                    .duration(heartbeatduration1)
                    .style("fill",highlightfillcolor2)
                    .attr("stroke-width", 1)
                    .ease('sin-in')
                    .transition()
                    .duration(heartbeatduration2)
                    .style("fill",highlightfillcolor1)
                    .attr('stroke-width', 4)
                    .ease('bounce-in')
                    .each("end", recursive_transitions);
            }
         }
     else { 
         // symphony mode: all sections on in certain order!!
         //phase1 - feet                              - Arc0
         //phase2 - feet & genitalia                  - Arc0 & Arc4
         //phase3 - feet & genitalia & belly          - Arc0 & Arc4 & Arc2
         //phase4 - feet & genitalia & belly & arm    - Arc0 & Arc4 & Arc2 & Arc1
         //phase5 - feet & mouth                      - Arc0 & Arc3
         //phase6 - ALL                               - Arc0 & Arc1 & Arc2 & Arc3 & Arc4

         phase1();
         
         function phase1() {
             var thisarcsel =  d3.select(ArcArray[curIndexarc]);
             curIndexarc++;
             
             recursive_transitions_slideshow();

                function recursive_transitions_slideshow() {     
                     thisarcsel.style("fill",highlightfillcolor1)
                                .style("stroke",highlightstrokecolor)
                                .transition()
                                .duration(heartbeatduration1)
                                .style("fill",highlightfillcolor2)
                                .attr("stroke-width", 1)
                                .ease('sin-in')
                                .transition()
                                .duration(heartbeatduration2)
                                .style("fill",highlightfillcolor1)
                                .attr('stroke-width', 4)
                                .ease('bounce-in')
                                .each("end", recursive_transitions_slideshow);
                    };
                setTimeout(phase2, 8000);   
            }; //phase1
         
         function phase2() {
             var thisarcsel =  d3.select(ArcArray[curIndexarc]);
             curIndexarc++;
             
             recursive_transitions_slideshow();

                function recursive_transitions_slideshow() {     
                     thisarcsel.style("fill",highlightfillcolor1)
                                .style("stroke",highlightstrokecolor)
                                .transition()
                                .duration(heartbeatduration1)
                                .style("fill",highlightfillcolor2)
                                .attr("stroke-width", 1)
                                .ease('sin-in')
                                .transition()
                                .duration(heartbeatduration2)
                                .style("fill",highlightfillcolor1)
                                .attr('stroke-width', 4)
                                .ease('bounce-in')
                                .each("end", recursive_transitions_slideshow);
                    };
                setTimeout(phase3, 8000);
         }; //phase2
         
         function phase3() {
             var thisarcsel =  d3.select(ArcArray[curIndexarc]);
             curIndexarc++;
             
             recursive_transitions_slideshow();

                function recursive_transitions_slideshow() {     
                     thisarcsel.style("fill",highlightfillcolor1)
                                .style("stroke",highlightstrokecolor)
                                .transition()
                                .duration(heartbeatduration1)
                                .style("fill",highlightfillcolor2)
                                .attr("stroke-width", 1)
                                .ease('sin-in')
                                .transition()
                                .duration(heartbeatduration2)
                                .style("fill",highlightfillcolor1)
                                .attr('stroke-width', 4)
                                .ease('bounce-in')
                                .each("end", recursive_transitions_slideshow);
                    };
                setTimeout(phase4, 8000);
            }; //phase3
         
         function phase4() {
              var thisarcsel =  d3.select(ArcArray[curIndexarc]);
             curIndexarc++;
             
             recursive_transitions_slideshow();

                function recursive_transitions_slideshow() {     
                     thisarcsel.style("fill",highlightfillcolor1)
                                .style("stroke",highlightstrokecolor)
                                .transition()
                                .duration(heartbeatduration1)
                                .style("fill",highlightfillcolor2)
                                .attr("stroke-width", 1)
                                .ease('sin-in')
                                .transition()
                                .duration(heartbeatduration2)
                                .style("fill",highlightfillcolor1)
                                .attr('stroke-width', 4)
                                .ease('bounce-in')
                                .each("end", recursive_transitions_slideshow);
                    };
                timeoutphase4 = setTimeout(phase5, 16000);
            }; //phase4
         
         function phase5() { //FEET AND MOUTH ONLY
               // first un-highlight all arcs: /////////////////
                 arcs = d3.selectAll('.arc')
                 arcs.transition()
                            .style("fill","none") 
                            .duration(500)
                            .attr("stroke-width", 1)
                            .style("stroke","#444")
                            .attr("stroke-dasharray", "1, 0");
                ////////////////////////////////////////////////
             
             var thisarcsel =  arcs.filter("#arc3,#arc0") // feet and mouth
            
             recursive_transitions_slideshow();

                function recursive_transitions_slideshow() {     
                     thisarcsel.style("fill",highlightfillcolor1)
                                .style("stroke",highlightstrokecolor)
                                .transition()
                                .duration(heartbeatduration1)
                                .style("fill",highlightfillcolor2)
                                .attr("stroke-width", 1)
                                .ease('sin-in')
                                .transition()
                                .duration(heartbeatduration2)
                                .style("fill",highlightfillcolor1)
                                .attr('stroke-width', 4)
                                .ease('bounce-in')
                                .each("end", recursive_transitions_slideshow);
                    };
                timeoutphase5 = setTimeout(phase6, 8000);
         }; //phase5
         
         function phase6() { // FINAL PHASE - SELECT ALL!!
             // first un-highlight all arcs: /////////////////
                 arcs = d3.selectAll('.arc')

                 arcs.transition()
                            .style("fill","none") 
                            .duration(500)
                            .attr("stroke-width", 1)
                            .style("stroke","#444")
                            .attr("stroke-dasharray", "1, 0");
                ////////////////////////////////////////////////
             
              var thisarcsel =  d3.selectAll(".arc");
             
             recursive_transitions_slideshow();

                function recursive_transitions_slideshow() {     
                     thisarcsel.style("fill",highlightfillcolor1)
                                .style("stroke",highlightstrokecolor)
                                .transition()
                                .duration(heartbeatduration1)
                                .style("fill",highlightfillcolor2)
                                .attr("stroke-width", 1)
                                .ease('sin-in')
                                .transition()
                                .duration(heartbeatduration2)
                                .style("fill",highlightfillcolor1)
                                .attr('stroke-width', 4)
                                .ease('bounce-in')
                                .each("end", recursive_transitions_slideshow);
            }; //recursive_transitions_slideshow
      
         }; //phase6
         
     }; // sympony arc mode
        
 }; //highlight
     


///////////////////////////////////////////////////////////////////////////
//////////////////// Button Creation and Interaction    ///////////////////
///////////////////////////////////////////////////////////////////////////	

function updateplaymode(curbuttonid,duration) {

    if(curbuttonid.slice(6,7) === "F") {
            console.log("pressed Feet button")
            
            // Deal with visibility
            highlight('#arc0')
            ImageShow(1)
            // Start and show music track
            equalizer("audioElementWrapper")
    };

    if(curbuttonid.slice(6,7) === "G") {
            console.log("pressed Genitalia button")
            
            // Deal with visibility
            highlight('#arc4')
            ImageShow(2)
            // Start and show music track
             equalizer("audioElementWrapper")
    };

    if(curbuttonid.slice(6,7) === "B") {
            console.log("pressed Belly Button button")

            // Deal with visibility
            highlight('#arc2')
            ImageShow(3)
            // Start and show music track
            equalizer("audioElementWrapper")
     };
    
    if(curbuttonid.slice(6,7) === "A") {
            console.log("pressed Arm pit button")
            
            // Deal with visibility
            highlight('#arc1')
            ImageShow(4)
            // Start and show music track
            equalizer("audioElementWrapper")
     };

    if(curbuttonid.slice(6,7) === "M") {
            console.log("pressed Mouth button")
            
            // Deal with visibility
            highlight('#arc3')
            ImageShow(5)
            // Start and show music track
            equalizer("audioElementWrapper")
     };
    
    if(curbuttonid.slice(6,7) === "S") {
            console.log("pressed Symphony button")
            
            // Deal with visibility
            highlight('all')
            slideShow();
            // Start and show music track            
            equalizer("audioElementWrapper")
     };
    
   };//updateplaymode function

// ---------- create the play mode buttons!    
function button_interactivity() {

        var playmodes = ["Feet","Genitalia","Belly button","Armpit","Mouth","Symphony"];

        var buttons = d3.select("#Buttons_div")
                .append("div")
                .attr("class","playmode_buttons")
                .selectAll("div")
                .data(playmodes)
                .enter()
                .append("div")
                .text(function(d) { return d; })
                .attr("id", function(d,i) { return ("button" + d.slice(0,1)) });
    
        function musicplay() {
            currentsound = document.getElementById('audioElement' + this.textContent.slice(0,3));
            
            // plug current sound into the wrapper:
            var audio = document.getElementById('audioElementWrapper');
            audio.src = currentsound.src;
            audio.load();
            // play after a small delay:
            setTimeout(function() { audio.play(); }, 500)
                }

    // Define interations on button click:
        buttons.on("click",function(d){
                // first select all the buttons:
                d3.select(".playmode_buttons")
                    .selectAll("div")
                        .style("background-color", "rgb(250, 243, 243)")
                        .style("color", "#444")
                //selects current element (which is clicked button)
                d3.select(this) 
                        .style("background-color", "#444")
                        .style("color", "white")
                        .attr("onclick", musicplay)

                // calling the vis update function    
                // note that a transition in the colorscheme above will impact the current color in the if loop in slidewhow (through updateplaymode) function below...
                var curbuttonid = d3.select(this).attr("id");
                console.log("current button id is: " + curbuttonid)            
                updateplaymode(curbuttonid,500);   //d = button function name    
            
            });    

            buttons.on("mouseover", function(d) {d3.select(this).style("cursor", "pointer")} )
                   .on("mouseout", function(d) {d3.select(this).style("cursor", "default")} )  
    }; //button_interactivity
        

// ---------- End of DISC PLAY MODE buttons and interactivity      
            
            
            


//////////////////////////////////////////////////////////////////////////
//////////////////// DRAW PETRI DISC AND SECTIONS      ///////////////////
//////////////////////////////////////////////////////////////////////////	
            
    //--------------------------------------------------------------------
    //---- BASED ON http://bl.ocks.org/atul-github/f3dc48348b0dfeb79618 --       
    //--------------------------------------------------------------------
    // Drawing Disc SECTIONS as PATHS    
        function DrawDisc(svg, data, cx, cy, r, startAngle) {
            var arcs = svg.selectAll('.arc')
                .data(data);

            arcs.enter()
                .append('path')
                .attr('id', function (d, i) {return 'arc' + (i).toString(); })
                .attr('class', 'arc')
                .style('stroke', "#444")
                .style('fill', "white");
                
            arcs.attr('d', function (d, i) {
                var rad = ((d.angle1 + startAngle) * Math.PI) / 180.0;
                var x1 = d.cx + d.r * Math.cos(rad);
                var y1 = d.cy + d.r * Math.sin(rad);

                var rad = ((d.angle2 + startAngle) * Math.PI) / 180.0;
                var x2 = d.cx + d.r * Math.cos(rad);
                var y2 = d.cy + d.r * Math.sin(rad);

                pathString = 'M' + x1 + ',' + y1 + ' ' + 'A' + d.r + ',' + d.r + ' 0 0,1 ' + x2 + ',' + y2 + ' L ' + d.cx + ',' + d.cy + ' Z ';
                return pathString;
            });
            
        }; // end of Draw Disc
             
    function Initialize(DiscId, cx, cy, r, Discdata) {
                        
            var svg = d3.select('#' + DiscId)            
            svg.append('circle')
                .attr({ 'cx': cx, 'cy': cy, 'r': 4 })
                .style('fill', 'none');

            var total = d3.sum(Discdata);

            var data = [];
            var startAngle = -18;
            for (var i = 0; i < Discdata.length; ++i) {
                var percent = (100 * Discdata[i]) / total;
                var a1 = startAngle;
                var a2 = startAngle + (percent * 360) / 100
                data.push({ cx: cx, cy: cy, r: r, percent: percent, angle1: a1, angle2: a2 });
                startAngle += (percent * 360) / 100;
            }
            svg = d3.select('#' + DiscId);
            DrawDisc(svg, data, cx, cy, r, 0); 
        }; // end of Initialize 





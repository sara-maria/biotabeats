//////////////////////////////////////////////////////////////////////////////////////////////////
////////////// FUNCTIONS TO GROWN RANDOM COLONIES WITH
//////////////////////////////////////////////////////////////////////////////////////////////////
            

                function growSmallDataDriven(dataset) {
                        var svg = d3.select("#Colonies")
                        debugger;
                                svg.selectAll('circle.col')
                                    .data(dataset)
                                    .enter()
                                    .append("circle")
//                                    .attr('fill', "#c9bcbc")
                                    .attr('fill', function(d,i) {
//                                        if(d.Track === "2")  //ARM
//                                             {return "red"}
//                                        else {return "#c9bcbc"}
                                        return "rgb(" + (d.Note *15) + ", " + (d.Note * 10) + ", " + (d.Note * 12) + ")";
                                            })
                                    .attr("opacity", .8)    
                                    .attr("stroke", "#444")
                                    .attr("stroke-width", 1)    
                                    .attr("cx", function(d){
//                                            return d.xc;
                                        return cx + radiusmax*d.xc;
                                        })
                                    .attr("cy", function(d){
//                                            return d.yc;
                                            return cy + radiusmax*d.yc;
                                        })
                                    .attr("r", 1)
                                    .transition()
                                    .duration(2500)
                                    .ease("sine")
                                    .attr("r", function(d){
                                            return d.radcol;
                                        })
                      };  
            
            
            function growSmall() {for (var i = 0; i < 2; i++) {
                        
                        var svg = d3.select("#Colonies")
                        var radius_colony = 4;
                        var distance = ((radiusmax-radius_colony)/radiusmax)*Math.random();
                        var angle = 360 * Math.random();
                        
                console.log(cx + radiusmax * Math.cos(-angle*Math.PI/180) * distance);
                
                                svg.append("circle")
                                    .attr('fill', "#c9bcbc")
                                    .attr("opacity", .8)    
                                    .attr("stroke", "#444")
                                    .attr("stroke-width", 1)    
                                    .attr("cx", function(){
                                        return cx + radiusmax * Math.cos(-angle*Math.PI/180) * distance;
                                        })
                                    .attr("cy", function(){
                                      return cy + radiusmax * Math.sin(-angle*Math.PI/180) * distance;         
                                    })
                                    .attr("r", 0)
                                    .transition()
                                    .duration(2500)
                                    .ease("sine")
                                    .attr("r", radius_colony);
                              }  };  
                        
                    function growLarge() {for (var i = 0; i < 2; i++) {
                        
                        var svg = d3.select("#Colonies")
                        var radius_colony = 8;
                        var distance = ((radiusmax-radius_colony)/radiusmax)*Math.random();
                        var angle = 360 * Math.random();
                        
                                svg.append("circle")
                                    .attr('fill', "#c9b58c")
                                    .attr("fill-opacity", .3)    
                                    .attr("stroke", "#968151")
                                    .attr("stroke-width", 1)    
                                    .attr("cx", function(){
                                        return cx + radiusmax * Math.cos(-angle*Math.PI/180) * distance;
                                        })
                                    .attr("cy", function(){
                                      return cy + radiusmax * Math.sin(-angle*Math.PI/180) * distance;         
                                    })
                                    .attr("r", 0)
                                    .transition()
                                    .duration(500)
                                    .ease("sine")
                                    .attr("r", radius_colony);
                              }  };  
                        
                    function growveryLarge() {for (var i = 0; i < 1; i++) {
                        
                        var svg = d3.select("#Colonies")
                        var radius_colony = 16;
                        var distance = ((radiusmax-radius_colony)/radiusmax)*Math.random();
                        var angle = 360 * Math.random();
                        
                                svg.append("circle")
                                    .attr('fill', "grey")
                                    .attr("fill-opacity", .63)    
                                    .attr("stroke", "#444")
                                    .attr("stroke-opacity", .8)    
                                    .attr("stroke-width", 1)    
                                    .attr("cx", function(){
                                        return cx + radiusmax * Math.cos(-angle*Math.PI/180) * distance;
                                        })
                                    .attr("cy", function(){
                                      return cy + radiusmax * Math.sin(-angle*Math.PI/180) * distance;         
                                    })
                                    .attr("r", 0)
                                    .transition()
                                    .duration(2000)
                                    .ease("sine")
                                    .attr("r", radius_colony);
                              }  }; 
            
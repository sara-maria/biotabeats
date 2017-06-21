//<!--------------------------------------------------------------------------->
//<!--    Based on work from Garry Smith -->
//<!--    https://www.bignerdranch.com/blog/music-visualization-with-d3-js/  -->
//<!--------------------------------------------------------------------------->

//$(document).ready(function () {
//debugger;

function equalizer(audiofileID) {

//var playme = document.getElementById('audioElement'); playme.src='./music/Lullaby_Thirza.mp3'; playme.load();
    
//var audiofileID = "audioElement";
    
//    debugger;
function audio_extract(audiofileID) {

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var audioElement = document.getElementById(audiofileID);
//    debugger;
    var audioSrc = audioCtx.createMediaElementSource(audioElement);
    var analyser = audioCtx.createAnalyser();

    // Bind our analyser to the media element source.
    audioSrc.connect(analyser);
    audioSrc.connect(audioCtx.destination);

    return {audioSrc: audioSrc,
            analyser: analyser
           };
    
    }; // audioextract
    
//    var audiodata = audio_extract("audioElement");
    var audiodata = audio_extract(audiofileID);
    var audio = audiodata;
        var analyser = audio.analyser;
        var audioSrc = audio.audioSrc;

    
    
    // Prepping the visualization of the equalizer!
    
        var frequencyData = new Uint8Array(160);

        var svgHeight = '450';
        var svgWidth = '425';
        var barPadding = '0';

        function createSvg(parent, height, width) {
          return d3.select(parent)
                    .append('svg')
                    .attr('height', height)
                    .attr('width', width)
                    .attr('id',"equalizersvg");
        }
    
        var elementExists = document.getElementById("equalizersvg");
    
        if (elementExists) {
            var svg = d3.select("#Music svg"); 
        } 
        else{
            var svg = createSvg('#Music', svgHeight, svgWidth);
        };
    
        // Create axes to hold equalizer:
        svg.append("polyline")
                       .attr("points", "0,150, 0,450, 400,450 ")
                       .attr("fill","none")
                       .attr("stroke-width", 1)
                       .attr("stroke", "#444");
    
        // Create our initial D3 chart.
        svg.selectAll('rect')
           .data(frequencyData)
           .enter()
           .append('rect')
           .attr('x', function (d, i) {
              return i * (svgWidth / frequencyData.length);
           })
           .attr('width', svgWidth / frequencyData.length - barPadding);

    
        // Continuously loop and update chart with frequency data.
        function renderChart() {
           requestAnimationFrame(renderChart);

           // Copy frequency data to frequencyData array.
           analyser.getByteFrequencyData(frequencyData);

           // Update d3 chart with new data.
           svg.selectAll('rect')
              .data(frequencyData)
              .attr('y', function(d) {
                 return svgHeight - d;
              })
              .attr('height', function(d) {
                 return d;
              })
              .attr('fill', function(d,i) {
//                 return 'rgb(125, 0, ' + d + ')';
                 return 'rgb(125, ' +Math.round(.75*d)+ ', ' +d+ ')';
//                 return 'rgb(125, 0, ' + i + ')';
              })
//            console.log(frequencyData)
        };

        // Run the loop
        renderChart();        
    
//	}); // document ready funtion opening
    
}; 
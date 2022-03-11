import * as d3 from "d3";

// C'est ici que vous allez écrire les premières lignes en d3!
const WIDTH = 400;
const HEIGHT = 400;

const div = d3
  .select("div")
  .append("svg")
  .attr("width", WIDTH)
  .attr("height", HEIGHT);

let circle1 = div
  .append("circle")
  .attr("cx", "50")
  .attr("cy", "50")
  .attr("r", "40")
  .attr("cx", "100");

let circle2 = div
  .append("circle")
  .attr("cx", "150")
  .attr("cy", "150")
  .attr("r", "40")
  .style("fill", "red")
  .attr("cx", "200");

const circle3 = div
  .append("circle")
  .attr("cx", "250")
  .attr("cy", "250")
  .attr("r", "40")
  .style("text-align", "center");

const text1 = d3.select("body").append("p").text("cercle1");

const text2 = d3.select("body").append("p").text("cercle2");

const text3 = d3.select("body").append("p").text("cercle3");

const circle = div.selectAll('circle')
.on('click', ()  => {
   cx = cx+50
  circle.attr('cx', cx)
})



//© solution prise sur https://observablehq.com/@idris-maps/introduction-a-d3?collection=@idris-maps/heig-visdom-2020 
const data = [20, 5, 25, 8, 15];
const MARGIN = 5; // espace entre les bâtons
const BAR_WIDTH = 20; // largeur des bâtons
const div2 = d3.select("div").append("svg").append("rect")
  .attr("width", WIDTH)
  .attr("height", HEIGHT)
  .data(data)
  .enter()
  // la position horizontale
  .attr("x", (d, i) => i * BAR_WIDTH)
  // la largeur
  .attr("width", BAR_WIDTH - MARGIN)
  // la position verticale
  .attr("y", (d) => HEIGHT - d)
  // la hauteur
  .attr("height", (d) => d);

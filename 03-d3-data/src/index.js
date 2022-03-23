import * as d3 from "d3";
import { text } from "d3";
import { json } from "d3-fetch";

const div = d3.select("div").append("svg");

Promise.all([
  json("https://jsonplaceholder.typicode.com/posts"),
  json("https://jsonplaceholder.typicode.com/users"),
]).then(([posts, users]) => {
  // Do your stuff. Content of both files is now available in stations and svg
  console.log([posts]);
  console.log([users]);

  const div3 = d3.select("div");
  div3.selectAll("div")
    .data(users)
    .enter()
    .append("p")
    .text(function (d) {
      return d.username + " : " + d.name ;
    }
    );
    const div2 = d3.select("div");
      div2.selectAll("div")
      .data(posts)
      .enter()
      .append("p")
      .text(function(d) {return d.title;}); 
});

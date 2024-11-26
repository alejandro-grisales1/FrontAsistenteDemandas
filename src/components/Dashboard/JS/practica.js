import * as d3 from "d3";

const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;
console.log(d3); // Esto funcionará si d3 está instalado y gestionado por Vite
function createChart() {
  const x = d3.scaleUtc().domain([new Date('2023-01-01'), new Date('2024-01-01')]);
  const y = d3.scaleLinear().domain([0, 100]).range([height - marginBottom, marginTop]);

  const svg = d3.create("svg").attr("width", width).attr("height", height);

  svg.append("g").attr("transform", `translate(0,${height - marginBottom})`).call(d3.axisBottom(x));
  svg.append("g").attr("transform", `translate(${marginLeft},0)`).call(d3.axisLeft(y));
  document.body.appendChild(svg.node());
  return svg.node();
}

createChart();

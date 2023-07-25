const DIV = require("./../../src/components/div");
const { Data } = require("./../../src/skills/config/data");
const SVG = require("./../utils/svg");
const simpleIcon = require('simple-icons');
const { SVGStyles } = require("./config/styles");


module.exports =  () => {
    let icons = '';
    Data.map( (e) => {
        const icon = simpleIcon[`si${e.icon}`].svg;
        icons += `
        <div class="skill-wrap">
            <div class="svg-icon" style="--var-color: ${e.color}">${icon}</div>
            <div class="icon-name"><span>${e.name}</span></div>
        </div>
    `;
    });

    icons = `<style>${SVGStyles}</style>` + DIV(icons);
    return SVG('846','225', icons);
}

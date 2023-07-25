const { SVGStyles } = require("./config/styles");
const { monthDisplay } = require("../utils/date");
const DIV = require("../components/div");
const SVG = require("../utils/svg");

module.exports = ( blog ) => {
    const date = new Date(blog.isoDate);
    const content = blog.contentSnippet.split(' ').filter( (e, i) => i < 20 ).join(' ');

    let post = `
        <div class="blog-wrapper">
            <div class="blog-image">
                <img src="${blog.thumbnail}" alt="${blog.title}" />
            </div>
            <div class="blog-info">
                <h2>${blog.title}</h2>
                <div class="blog-meta">${monthDisplay(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} | <span>${blog.categories[0]}</span></div>
                <div class="blog-excerpt">${content}...</div>
            </div>
        </div>
    `

    post = `<style>${SVGStyles}</style>` + DIV(post);
    return SVG('846','300', post);
}

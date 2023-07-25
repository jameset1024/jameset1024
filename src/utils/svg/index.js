module.exports = (width, height, html) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <foreignObject width="${width}" height="${height}">
            <div xmlns="http://www.w3.org/1999/xhtml">
                ${html}
            </div>
        </foreignObject>
    </svg>
`;
}

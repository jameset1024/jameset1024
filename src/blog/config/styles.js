const SVGStyles = `
    .blog-wrapper {
        display: flex;
        align-items: stretch;
        border-radius:8px;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0,0,0, 0.35);
        margin-left: 5px;
        max-width: 95%;
        padding: 15px 0;
    }
    .blog-title {
      padding: 10px;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .blog-info {
        padding: 15px 10px;
    }
    .blog-title h2 {
        font-size: 20px;
        margin: 5px 0 5px;
        color: #49a0d9;
    }
    .blog-title .blog-meta {
        font-size: 14px;
        font-weight: bold;
    }
    .blog-excerpt {
        line-height: 1.35em;
    }
`;

module.exports = {
    SVGStyles
}

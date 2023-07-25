const SVGStyles = `
    .blog-wrapper {
        display: flex;
        align-items: stretch;
        border-radius:8px;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0,0,0, 0.35);
        margin-left: 5px;
        max-width: 95%;
    }
    .blog-image {
        max-width: 50%;
        flex: 0 0 50%;
    }
    .blog-image img {
        max-width: 100%;
        height: auto;
    }
    .blog-info {
        padding: 10px 15px;
    }
    .blog-info h2 {
        font-size: 20px;
        margin: 5px 0 5px;
        color: #49a0d9;
    }
    .blog-meta {
        font-size: 14px;
        font-weight: bold;
    }
    .blog-excerpt {
        margin-top: 20px;
        line-height: 1.35em;
    }
`;

module.exports = {
    SVGStyles
}

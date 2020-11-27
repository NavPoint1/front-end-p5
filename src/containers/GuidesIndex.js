import React from 'react'

import ReactMarkdown from "react-markdown";

const GuidesIndex = () => {

    const markdown = "# Header 1\n## Header 2\n_italic_\n**bold**"
    // `
    // ## Header 2
  
    // _italic_
  
    // **bold**
  
    // <b> bold Html </b>
    // `;

    return (
        <div className="default-container">
            <div className="guides-index">
                <ReactMarkdown parserOptions={{ commonmark: true }} source={`# Header 1\ \ ## Header 2\n_italic_\n**bold**`}/>
                {/* <ReactMarkdown >
                    {"# Header 1\n## Header 2\n_italic_\n**bold**"}
                </ReactMarkdown> */}
            </div>
        </div>
    )
}

export default GuidesIndex
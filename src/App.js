import {useState} from "react";
import {marked} from "marked";
import './App.css';

function App() {
  const [text, setText]= useState(`
  # H1

  ## H2

  **bold text**

  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <div className="title">
        <h1>MARKDOWN APP</h1>
        <p>by Miguel Ginga</p>
      </div>
      <div className="container">
        <div class="editor-container">
        <p className="container-title">Editor</p>
      <textarea id="editor" onChange={(event) => 
        {setText(event.target.value)}}
        value = {text}>
        </textarea>
        </div>
      <div className="preview-container">
      <p className="container-title">Preview</p>
      <div id="preview" 
      dangerouslySetInnerHTML={{
        __html: marked(text),
       }}></div>
       </div>
      </div>

    </div>
  );
}

export default App;

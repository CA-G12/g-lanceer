import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.css';

function TextEditor() {
  const [value, setValue] = useState('');

  return (
    <div className="text-editor-container">
      <ReactQuill
        className="text-editor"
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
export default TextEditor;

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.css';

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
}
function TextEditor({ value, setValue }: Props) {
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

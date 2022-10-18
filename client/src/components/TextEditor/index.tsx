import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.css';

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
  error: boolean
}
function TextEditor({ error, value, setValue }: Props) {
  return (
    <div className="text-editor-container">
      <ReactQuill
        className={error ? 'text-editor error' : 'text-editor'}
        theme="snow"
        value={value}
        style={{ borderColor: 'red !' }}
        onChange={(e) => {
          if (e === '<p><br></p>') {
            setValue('');
          } else { setValue(e); }
        }}
      />
    </div>
  );
}
export default TextEditor;

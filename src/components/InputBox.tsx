import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Ensure this CSS is imported

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

interface StyledTextInputProps {
  value?: string; // Optional initial value
  onChange: (value: string) => void;
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({ value, onChange }) => {
  const [editorState, setEditorState] = useState<EditorState>(
    value ? EditorState.createWithContent(ContentState.createFromText(value)) : EditorState.createEmpty()
  );

  const handleEditorChange = (newState: EditorState) => {
    setEditorState(newState);
    const plainText = newState.getCurrentContent().getPlainText();
    onChange(plainText);
  };

  return (
    <div className="p-4 bg-gray-100 ">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ['inline', 'list', 'textAlign'],
          inline: { options: ['bold', 'italic', 'underline', 'strikethrough'] },
          list: { options: ['unordered', 'ordered'] },
          textAlign: { options: ['left', 'center', 'right', 'justify'] },
        }}
      />
    </div>
  );
};

export default StyledTextInput;

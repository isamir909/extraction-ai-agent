// components/JsonPreview.tsx
import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');
interface JsonPreviewProps {
  data: any; // Type can be more specific if data structure is known
}

const JsonPreview: React.FC<JsonPreviewProps> = ({ data }) => {
  return (
    <div className="json-preview">
      <JSONPretty data={data} theme={JSONPrettyMon} />
    </div>
  );
};

export default JsonPreview;

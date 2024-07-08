import { useEffect, useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

type DocumentType = {
  uri: string;
};

type DocPreviewProps = {
  fileUrl: string | null;
  fileType: string | null;
};

const DocPreview: React.FC<DocPreviewProps> = ({ fileUrl, fileType }) => {
  const [docs, setDocs] = useState<DocumentType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (fileUrl && fileType) {
      setError(null);

      const supportedMimetypes: string[] = [
        "application/pdf",
        "image/png",
        "image/jpeg",
        "image/jpg",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
        // Add more supported MIME types as needed
      ];

      if (supportedMimetypes.includes(fileType)) {
        setDocs([{ uri: fileUrl }]);
      } else {
        setError("Unsupported file type");
      }
    } else {
      setError("No file selected");
    }
  }, [fileUrl, fileType]);

  if (!fileUrl) {
    return <p>Please upload a file to preview.</p>;
  }

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {docs.length > 0 && (
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          style={{
            height: "full",
          }}
        />
      )}
    </div>
  );
};

export default DocPreview;

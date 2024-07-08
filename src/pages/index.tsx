// import { useState } from "react";
// import DocPreview from "@/components/DocumentPreview"; // Adjust the path as necessary
// import JsonPreview from "@/components/JsonView";
// import StyledTextInput from "@/components/InputBox";

// export default function Home() {
//   const [fileUrl, setFileUrl] = useState<string | null>(null);
//   const [fileType, setFileType] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [prompt, setPrompt] = useState('');

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setFileUrl(url);
//       setFileType(file.type); // Set file type based on MIME type
//       setError(null);
//     }
//   };

//   return (
//     <>
//       {/* Input box */}
//       <div className="flex flex-col items-center justify-between p-4">
//         <div className="flex flex-col gap-2 justify-between">
//           <div>
//             <input type="file" onChange={handleFileChange} />
//           </div>
//         </div>
//       </div>

//       {/* Main section divided into left and right */}
//       <div className="flex h-full w-full border-t-2 border-black">
//         {/* Left section */}
//         <div className="flex-grow border-r-2 border-black h-screen w-1/2">
//             <h2 className="text-2xl text-align text-center">Document Preview</h2>

//           <DocPreview  fileUrl={fileUrl} fileType={fileType}  />
//         </div>

//         {/* Right section */}
//         <div className="flex-grow h-full w-1/2">
//           {/* Additional content can be placed here */}
//           <div>
//             <h2 className="text-2xl text-align text-center">Prompt</h2>
//             <StyledTextInput  value={prompt} onChange={setPrompt} />
//           </div>

//             <h2 className="text-2xl text-align text-center">Output</h2>
//           <JsonPreview
//             data={[
//             ]}
//           />
//         </div>
//       </div>
//     </>
//   );
// }









import { useState } from "react";
import DocPreview from "@/components/DocumentPreview"; // Adjust the path as necessary
import JsonPreview from "@/components/JsonView";
import StyledTextInput from "@/components/InputBox";

export default function Home() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setFileType(file.type); // Set file type based on MIME type
      setError(null);
    }
  };

  return (
    <>
      {/* Input box */}
      <div className="flex flex-col items-center justify-between p-4">
        <div className="flex flex-col gap-2 justify-between">
          <div>
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>
      </div>

      {/* Main section divided into left and right */}
      <div className="flex h-full w-full border-t-2 border-black">
        {/* Left section */}
        <div className="flex-grow border-r-2 border-black h-screen w-1/2">
          <h2 className="text-2xl text-align text-center">Document Preview</h2>
          <DocPreview fileUrl={fileUrl} fileType={fileType} />
        </div>

        {/* Right section */}
        <div className="flex-grow h-full w-1/2 flex flex-col">
          {/* Prompt section */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl text-align text-center">Prompt</h2>
            <div className="flex-grow overflow-auto">
            <StyledTextInput  value={prompt} onChange={setPrompt} />
            </div>
          </div>

          {/* Output section */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl text-align text-center">Output</h2>
            <div className="flex-grow overflow-auto">
              <JsonPreview
                data={[
                  // Sample data for JsonPreview
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

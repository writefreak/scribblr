// components/QuillEditor.jsx (or .tsx)
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const QuillEditor = ({ value, onChange }: any) => {
  // You can customize modules and formats here
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      placeholder="Write something amazing..."
      className="placeholder:dark:text-white "
    />
  );
};

export default QuillEditor;

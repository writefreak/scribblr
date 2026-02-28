"use client";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Editor } from "@tinymce/tinymce-react";

export default function EditorClient() {
  const scheme = useColorScheme();
  return (
    <Editor
      apiKey="whmlcc19kpefmelnl4lgrlauk2n6861qrxq3essso1702jox"
      init={{
        height: 500,
        plugins: "lists link image table code help wordcount",
        toolbar:
          "undo redo | formatselect | bold italic emoticons | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
        skin: "oxide",
        content_css: "dark",
      }}
    />
  );
}

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from '@editorjs/list'; 

const editor = new EditorJS ({
  holder: "editorjs",
  header: {
    class: Header,
    inlineToolbar: ["link"],
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
});

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";

const TextEditor = ({
  story = "<p>prathma</p>",
  onChange = () => {},
}: {
  story: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: story,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "w-full my-4 h-32 p-2 gap-2 overflow-x-hidden overflow-y-auto border-2 border-black dark:border-secondary-foreground shadow-sm dark:shadow-dark-foreground transition-[shadow] hover:shadow-0 duration-300 ease-in-out whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      },
    },
  });

  return (
    <div>
      <div className="flex gap-2">
        <Button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="font-bold"
          type="button"
        >
          B
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="italic"
          type="button"
        >
          I
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          className="line-through"
          type="button"
        >
          S
        </Button>
        <Button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className="text-2xl"
          type="button"
        >
          H1
        </Button>
        <Button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="text-xl"
          type="button"
        >
          H2
        </Button>
        <Button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className="text-lg"
          type="button"
        >
          H3
        </Button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;

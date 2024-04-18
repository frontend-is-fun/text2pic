'use client';

import type { NoteProps } from '@/typings/note.typing';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

// components
import { HeaderImage } from '@/components/editor/header-image';
import { ControlPanel } from '@/components/editor/control-panel';

export interface EditorComponentProps {
  note: NoteProps;
  onToggleDarkMode: () => void;
  onToggleFooter: () => void;
  showHeaderImage: boolean;
  onToggleHeaderImage: () => void;
  setHeaderImage: (image: string) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeTitle: (title: string) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeContent: (content: string) => void;
}

const EditorComponent = (props: EditorComponentProps) => {
  const {
    note,
    onToggleDarkMode,
    onToggleFooter,
    showHeaderImage,
    onToggleHeaderImage,
    setHeaderImage,
    onChangeTitle,
    onChangeContent,
  } = props;

  const handleUpload = (file: File) => {
    // 将文件转换为 base64 编码
    const reader = new FileReader();
    reader.onload = () => {
      // 将 base64 编码的文件传递给其他组件或服务
      console.log(reader.result);
      setHeaderImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      id='poster-editor'
      className='bg-white w-full max-w-96 '
    >
      {showHeaderImage && (
      <HeaderImage
        imageData={note.headerImage}
        onUpload={handleUpload}
      />
      )}
      <input
        type='text'
        value={note.title}
        maxLength={50}
        onChange={(e) => onChangeTitle(e.target.value)}
        className='w-full p-2 text-xl'
      />
      <ReactQuill
        value={note.content}
        onChange={(value) => onChangeContent(value)}
        theme='bubble'
        modules={{
        }}
      />
      <ControlPanel
        onToggleHeaderImage={onToggleHeaderImage}
      />
    </div>
  );
};

export { EditorComponent };

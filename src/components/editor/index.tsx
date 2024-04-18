'use client';

import { useState } from 'react';

import type { NoteProps } from '@/typings/note.typing';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

// components
import { HeaderImage } from '@/components/editor/header-image';
import { ControlPanel } from '@/components/editor/control-panel';

// dom to image
import domtoimage from 'dom-to-image-more';

export interface EditorComponentProps {
  note: NoteProps;
  onToggleFooter: () => void;
  showHeaderImage: boolean;
  onToggleHeaderImage: () => void;
  setHeaderImage: (image: string) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeTitle: (title: string) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeContent: (content: string) => void;
  onToggleShowDate: () => void;
}

const EditorComponent = (props: EditorComponentProps) => {
  const {
    note,
    onToggleFooter,
    showHeaderImage,
    onToggleHeaderImage,
    setHeaderImage,
    onChangeTitle,
    onChangeContent,
    onToggleShowDate,
  } = props;

  const [isTitleFocused, setIsTitleFocused] = useState<boolean>(false);

  const handleUpload = (file: File) => {
    // 将文件转换为 base64 编码
    const reader = new FileReader();
    reader.onload = () => {
      // 将 base64 编码的文件传递给其他组件或服务
      setHeaderImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadImage = () => {
    console.log('download image');
    const node = document.getElementById('poster-editor');
    if (!node) {
      return;
    }
    domtoimage.toPng(node)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'poster.png';
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className='w-full'>
      <div
        id='poster-editor'
        className='w-full bg-white p-8'
      >
        {showHeaderImage && (
        <HeaderImage
          imageData={note.headerImage}
          onUpload={handleUpload}
        />
        )}

        <textarea
          value={note.title}
          maxLength={250}
          onFocus={() => setIsTitleFocused(true)}
          onBlur={() => setIsTitleFocused(false)}
          onChange={(e) => onChangeTitle(e.target.value)}
          className={`mt-8 w-full pt-2 px-2 text-2xl font-bold text-gray-600 ${
            isTitleFocused ? 'resize-both' : 'resize-none'
          }`}
        />

        <ReactQuill
          value={note.content}
          onChange={(value) => onChangeContent(value)}
          theme='bubble'
          placeholder='正文'
          modules={{
          }}
        />
        {note.showDate && (
          <div>
            <div className='text-right mt-4 text-gray-400'>
              {note.date}
            </div>
          </div>
        )}
      </div>
      <ControlPanel
        onToggleHeaderImage={onToggleHeaderImage}
        onToggleShowDate={onToggleShowDate}
        onDownloadImage={handleDownloadImage}
      />
    </div>

  );
};

export { EditorComponent };

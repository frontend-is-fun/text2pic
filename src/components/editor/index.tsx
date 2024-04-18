'use client';

import type { NoteProps } from '@/typings/note.typing';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useEffect } from 'react';

export interface EditorComponentProps {
  note: NoteProps;
  onToggleDarkMode: () => void;
  onToggleFooter: () => void;
  onToggleHeaderImage: () => void;
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
    onToggleHeaderImage,
    onChangeTitle,
    onChangeContent,
  } = props;

  return (
    <div
      id='poster-editor'
      className='bg-white w-full max-w-96'
    >
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
    </div>
  );
};

export { EditorComponent };

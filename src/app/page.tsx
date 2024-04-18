'use client';

import { useState } from 'react';

import type { NoteProps } from '@/typings/note.typing';

// components
import { HeaderComponent } from '@/components/header';
import { EditorComponent } from '@/components/editor';
import { FooterComponent } from '@/components/footer';

export default function Home() {
  const [note, setNote] = useState<NoteProps>({
    title: '标题',
    content: '',
    showDate: false,
    date: '',
    showHeaderImage: false,
    headerImage: '',
    isDarkMode: false,
    showFooter: false,
    footer: '',
    theme: 'default',
  } as NoteProps);

  const handleToggleFooter = () => {
    setNote({
      ...note,
      showFooter: !note.showFooter,
    });
  };

  const handleToggleHeaderImage = () => {
    setNote({
      ...note,
      showHeaderImage: !note.showHeaderImage,
    });
  };

  const onChangeTitle = (title: string) => {
    setNote({
      ...note,
      title,
    });
  };

  const onChangeContent = (content: string) => {
    setNote({
      ...note,
      content,
    });
  };

  const onSetHeaderImage = (image: string) => {
    setNote({
      ...note,
      headerImage: image,
    });
  };

  const onToggleShowDate = () => {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    setNote({
      ...note,
      showDate: !note.showDate,
      date,
    });
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-start p-0 bg-slate-50 w-full'>
      <main className=' max-w-[720px] w-full'>
        <HeaderComponent />
        <EditorComponent
          note={note}
          onToggleFooter={handleToggleFooter}
          showHeaderImage={note.showHeaderImage}
          onToggleHeaderImage={handleToggleHeaderImage}
          setHeaderImage={onSetHeaderImage}
          onChangeTitle={onChangeTitle}
          onChangeContent={onChangeContent}
          onToggleShowDate={onToggleShowDate}
        />
        <FooterComponent />
      </main>
    </div>

  );
}

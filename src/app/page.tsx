'use client';

import { useState } from 'react';

import type { NoteProps } from '@/typings/note.typing';

// components
import { HeaderComponent } from '@/components/header';
import { EditorComponent } from '@/components/editor';
import { FooterComponent } from '@/components/footer';

export default function Home() {
  const [note, setNote] = useState<NoteProps>({
    title: 'this is title',
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

  const handleToggleDarkMode = () => {
    setNote({
      ...note,
      isDarkMode: !note.isDarkMode,
    });
  };

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

  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-0'>
      <HeaderComponent />
      <EditorComponent
        note={note}
        onToggleDarkMode={handleToggleDarkMode}
        onToggleFooter={handleToggleFooter}
        showHeaderImage={note.showHeaderImage}
        onToggleHeaderImage={handleToggleHeaderImage}
        setHeaderImage={onSetHeaderImage}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
      />
      <FooterComponent />
    </main>
  );
}

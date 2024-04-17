'use client';

import { useState } from 'react';

import type { NoteProps } from '@/typings/note.typing';

// components
import { HeaderComponent } from '@/components/header';
import { EditorComponent } from '@/components/editor';
import { FooterComponent } from '@/components/footer';

export default function Home() {
  const [note, setNote] = useState<NoteProps>({
    title: '',
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

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-0'>
      <HeaderComponent />
      <h1 className='text-4xl font-bold'>Welcome to Text2Pic!</h1>
      <EditorComponent
        note={note}
        onToggleDarkMode={handleToggleDarkMode}
        onToggleFooter={handleToggleFooter}
        onToggleHeaderImage={handleToggleHeaderImage}
      />
      <FooterComponent />
    </main>
  );
}

import type { NoteProps } from '@/typings/note.typing';
import { title } from 'process';

export interface EditorComponentProps {
  note: NoteProps;
  onToggleDarkMode: () => void;
  onToggleFooter: () => void;
  onToggleHeaderImage: () => void;
  onChangeTitle: (title: string) => void;
}

const EditorComponent = (props: EditorComponentProps) => {
  const {
    note,
    onToggleDarkMode,
    onToggleFooter,
    onToggleHeaderImage,
    onChangeTitle,
  } = props;

  return (
    <div
      id='editor'
      className='bg-white w-full max-w-96'
    >
      <input
        type='text'
        value={note.title}
        onChange={(e) => onChangeTitle(e.target.value)}
        className='w-full p-2 border-b border-gray-300'
      />
      {note.title && <h1>{note.title}</h1>}
    </div>
  );
};

export { EditorComponent };

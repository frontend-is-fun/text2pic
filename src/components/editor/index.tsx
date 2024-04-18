import type { NoteProps } from '@/typings/note.typing';

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
      id='editor'
      className='bg-white w-full max-w-96'
    >
      <input
        type='text'
        value={note.title}
        maxLength={50}
        onChange={(e) => onChangeTitle(e.target.value)}
        className='w-full p-2 text-xl'
      />
      <textarea
        value={note.content}
        onChange={(e) => onChangeContent(e.target.value)}
        className='w-full p-2 min-h-48'
      />
    </div>
  );
};

export { EditorComponent };

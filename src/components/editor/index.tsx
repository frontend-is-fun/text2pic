import type { NoteProps } from '@/typings/note.typing';

export interface EditorComponentProps {
  note: NoteProps;
  onToggleDarkMode: () => void;
  onToggleFooter: () => void;
  onToggleHeaderImage: () => void;
}

const EditorComponent = (props: EditorComponentProps) => {
  const { note, onToggleDarkMode, onToggleFooter, onToggleHeaderImage } = props;

  return (
    <div>
      EditorComponent
    </div>
  );
};

export { EditorComponent };

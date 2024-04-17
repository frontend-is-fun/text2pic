export interface NoteProps {
  title: string;
  content: string;
  showDate: boolean;
  date?: string;
  showHeaderImage: boolean;
  headerImage?: string;
  isDarkMode: boolean;
  showFooter: boolean;
  footer?: string;
  theme: string;
}

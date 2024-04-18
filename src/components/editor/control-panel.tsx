'use client';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

import { useState } from 'react';
import { useTheme } from 'next-themes';

export interface ControlPanelProps {
  onToggleHeaderImage: () => void;
}

const ControlPanel = (props: ControlPanelProps) => {
  const { onToggleHeaderImage } = props;
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <div className='grid grid-cols-3 gap-2'>
      <div className='flex items-center space-x-2'>
        <Switch
          id='airplane-mode'
          checked={isDarkMode}
          onCheckedChange={() => {
            console.log('theme,', theme);
            setIsDarkMode(!isDarkMode);
            setTheme(isDarkMode ? 'light' : 'dark');
          }}
        />
        <Label htmlFor='airplane-mode'>暗黑</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch
          id='airplane-mode'
          onCheckedChange={onToggleHeaderImage}
        />
        <Label htmlFor='airplane-mode'>头图</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch id='airplane-mode' />
        <Label htmlFor='airplane-mode'>日期</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch id='airplane-mode' />
        <Label htmlFor='airplane-mode'>结尾</Label>
      </div>
    </div>
  );
};

export { ControlPanel };

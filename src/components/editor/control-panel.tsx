'use client';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export interface ControlPanelProps {
  onToggleHeaderImage: () => void;
  onToggleShowDate: () => void;
}

const ControlPanel = (props: ControlPanelProps) => {
  const { onToggleHeaderImage, onToggleShowDate } = props;
  return (
    <div className='mt-12 grid grid-cols-3 gap-2 bg-white rounded p-8'>
      <div className='flex items-center space-x-2'>
        <Switch
          id='headerimage-mode'
          onCheckedChange={onToggleHeaderImage}
        />
        <Label htmlFor='headerimage-mode'>头图</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch
          id='date-mode'
          onCheckedChange={onToggleShowDate}
        />
        <Label htmlFor='date-mode'>日期</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch id='airplane-mode' />
        <Label htmlFor='airplane-mode'>结尾</Label>
      </div>
    </div>
  );
};

export { ControlPanel };

import { useRef } from 'react';

export interface HeaderImageProps {
  // eslint-disable-next-line no-unused-vars
  onUpload: (file: File) => void;
  imageData: string;
}

const HeaderImage = (props: HeaderImageProps) => {
  const { imageData, onUpload } = props;

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    if (files.length > 0) {
      props.onUpload(files[0]); // 调用 props.onUpload 将文件上传
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const isAcceptedFileType = (file: File): boolean => {
    const acceptedTypes = ['image/png', 'image/jpeg', 'image/gif'];
    return acceptedTypes.includes(file.type);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (isAcceptedFileType(file)) {
        props.onUpload(file); // 调用 props.onUpload 将文件上传
      } else {
        alert('只允许上传 PNG、JPG 和 GIF 格式的图片');
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click(); // 点击隐藏的 file 输入框
  };

  return (
    <div
      className={`w-full h-60 flex items-center justify-center ${
        imageData ? 'bg-no-repeat bg-cover bg-center' : 'border-dashed border-2 border-gray-500'
      }`}
      onClick={handleUploadClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        backgroundImage: imageData ? `url(${imageData})` : 'none',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <input
        ref={fileInputRef}
        type='file'
        className='hidden'
        onChange={handleFileChange}
      />
      {!imageData && '点击上传或拖拽图片到此处'}
    </div>
  );
};

export { HeaderImage };

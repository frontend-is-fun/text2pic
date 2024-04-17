import Image from 'next/image';

const HeaderComponent: React.FC = () => (
  <div className='w-full h-16 flex flex-row justify-start items-center px-4'>
    <div>
      <Image
        src='/logo.png'
        alt='logo'
        width={131}
        height={36}
      />
    </div>

  </div>
);

export { HeaderComponent };

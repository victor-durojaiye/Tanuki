import { ModeToggle } from '@/components/theme-switcher';

export default async function Home() {

  return (
    <>
    <div className="flex flex-row justify-center min-h-screen">
      <div className='fixed top-5 right-5'>
        <ModeToggle/>
      </div>   
    </div>
    </>
  );
}
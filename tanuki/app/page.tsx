import prisma from '../lib/prisma';
import { ModeToggle } from '@/components/theme-switcher';
import StoriesFeed from '@/components/stories-feed';

export async function getStories(){
  const res = await fetch('http://localhost:3000/api/stories');
  return res.json;
}

export default async function Home() {
  const feed = await prisma.story.findMany();

  return (
    <>
    <div className="flex flex-row justify-center min-h-screen">
      <div className='fixed top-5 right-5'>
        <ModeToggle/>
      </div>
     
      <div className='flex flex-col my-auto items-center'>
        <StoriesFeed initialStories={feed}/>
      </div>
    </div>
    </>
  );
}
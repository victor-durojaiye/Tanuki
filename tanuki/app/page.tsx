import prisma from '../lib/prisma';
import { ModeToggle } from '@/components/theme-switcher';
import { StoryCard } from '@/components/story-card';

export default async function Home() {
  const feed = await prisma.story.findMany();
  return (
    <>
    <div className="flex flex-row justify-center min-h-screen">
      <div className='fixed top-5 right-5'>
        <ModeToggle/>
      </div>
     
      <div className='flex flex-row max-w-lg my-auto'>
        {feed.map((story: { id: number; title: string; content: string }) => (
            <div key={story.id}>
              <StoryCard title={story.title} content={story.content}/>
            </div>
        ))}
      </div>
    </div>
    </>
  );
}
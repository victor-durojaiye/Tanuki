'use client'

import { useState } from 'react';
import { StoryCard } from '@/components/story-card';
import { Button } from './ui/button';
import { ChevronRight, ChevronLeft } from "lucide-react"

type Story = {
    id: number;
    title: string;
    content: string;
  };
  
  type Page = {
    initialStories: Story[];
  };

export default function StoriesFeed({ initialStories }: Page) {
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const maxIndexOfLastStory = initialStories.length; // Maximum index of the last story

  const indexOfLastStory = Math.min(currentPage * storiesPerPage, maxIndexOfLastStory);

  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = initialStories.slice(indexOfFirstStory, indexOfLastStory);

  return (
    <>
        <div className='flex flex-col max-w-2xl my-auto'>
          {currentStories.map((story) => (
            <div key={story.id}>
              <StoryCard title={story.title} content={story.content} />
            </div>
            ))}
        </div>

      <div className="flex justify-center mt-4 gap-4">
        {currentPage > 1 && (
            <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage - 1)}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
        )}
        {currentStories.length === storiesPerPage && (
            <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage + 1)}>
                <ChevronRight className="h-4 w-4" />
            </Button>
        )}
      </div>
    </>
  );
}

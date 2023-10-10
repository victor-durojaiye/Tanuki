'use client'

import { useState } from 'react';
import { StoryCard } from '@/components/story-card';
import { Button } from './ui/button';
import { ChevronRight, ChevronLeft } from "lucide-react"

type Story = {
  id: number;
  title: string;
  enTitle: string;
  content: string;
  enContent: string;
};
  
type Page = {
  initialStories: Story[];
};

export default function StoriesFeed({ initialStories }: Page ) {
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const maxIndexOfLastStory = initialStories.length; // Maximum index of the last story
  const indexOfLastStory = Math.min(currentPage * storiesPerPage, maxIndexOfLastStory);
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = initialStories.slice(indexOfFirstStory, indexOfLastStory);
  const showRightButton = indexOfLastStory < maxIndexOfLastStory;
  
  return (
    <>
        <div className='flex flex-col max-w-2xl my-auto'>
          {currentStories.map((story) => (
            <div key={story.id}>
              <StoryCard title={story.title} enTitle = {story.enTitle} content={story.content} enContent={story.enContent} />
            </div>
            ))}
        </div>

      <div className="flex justify-center mt-4 gap-4">
        {currentPage > 1 && (
            <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage - 1)}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
        )}
        {showRightButton && (
            <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage + 1)}>
                <ChevronRight className="h-4 w-4" />
            </Button>
        )}
      </div>
    </>
  );
}

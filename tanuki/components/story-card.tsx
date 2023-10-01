import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

  interface StoryCardProps {
    title: string;
    content: string;
  }

  
  export function StoryCard({title, content}: StoryCardProps){
    return(
        <ScrollArea className="h-[225px] w-[400px] rounded-md border p-4">
            <h3 className="font-bold text-2xl">{title}</h3>
            <Separator className="my-2" />
            <p className="text-sm">{content}</p>
        </ScrollArea>
    )
  }
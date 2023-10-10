import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

import { useState } from "react"
  interface StoryCardProps {
    title: string;
    enTitle: string;
    content: string;
    enContent: string;
  }
  
  export function StoryCard({title, enTitle, content, enContent}: StoryCardProps){
    const [currentLanguage, setCurrentLanguage] = useState("EN");
    const toggleLanguage = () => {
      setCurrentLanguage(currentLanguage === "EN" ? "JP" : "EN");
    };
    const displayTitle = currentLanguage === "EN" ? enTitle : title;
    const displayContent = currentLanguage === "EN" ? enContent : content;
    return(
        <ScrollArea className="h-[200px] w-[400px] rounded-md border p-4">
            <div className="font-bold text-2xl flex flex-row justify-between">
              <div className="">{displayTitle}</div>
              <div className="flex flex-row items-center space-x-3">
                <Switch id="language" onClick={toggleLanguage} />
                <Label htmlFor="language">{currentLanguage}</Label>
              </div>
            </div>
            <Separator className="my-2" />
            <p className="text-sm">{displayContent}</p>
        </ScrollArea>
    )
  }
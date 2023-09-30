import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  interface StoryCardProps {
    title: string;
    content: string;
  }

  
  export function StoryCard({title, content}: StoryCardProps){
    return(
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
        <CardContent>
            <p>{content}</p>
        </CardContent>
        </Card>
    )
  }
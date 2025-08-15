import Image from "next/image";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/shadcn/tooltip";

interface TechCardProps {
  name: string;
  icon: string;
  url: string;
}

export function TechCard({ name, icon, url }: TechCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Image
              src={`/icons/${icon}`}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
} 
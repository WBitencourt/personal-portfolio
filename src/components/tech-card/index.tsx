import Image from "next/image";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/shadcn/tooltip";
import { cn } from "@/utils/classname";

interface TechCardProps {
  name: string;
  src: string;
  url: string;
  className?: string;
}

export function TechCard({ name, src, url, className }: TechCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn('', className)}
          >
            <Image
              src={src}
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
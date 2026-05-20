import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface CalModalProps {
  children: ReactNode;
  calUrl?: string;
}

export function CalModal({ children, calUrl = "https://cal.com/donovin" }: CalModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] h-[85vh] p-0 border-0 bg-[var(--color-paper)] overflow-hidden">
        <iframe 
          src={calUrl} 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          title="Schedule Assessment"
          className="h-full w-full"
        />
      </DialogContent>
    </Dialog>
  );
}

import { ProjectCard } from "@/@types/Projects";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProjectDialogHeader } from "./ProjectDialogHeader";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  data: ProjectCard | null;
  setData: (d: ProjectCard | null) => void;
}

export function ProjectDialog({ data, setData }: Props) {
  return (
    <Dialog open={!!data} onOpenChange={(open) => !open && setData(null)}>
      <DialogContent
        className="
          sm:max-w-6xl 
          sm:w-[95%] w-[95%]
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-white
          rounded-2xl
          shadow-[0_0_30px_rgba(0,0,0,0.4)]
          p-0
          overflow-hidden
        "
      >
        {/* ScrollArea membungkus semua isi dialog */}
        <ScrollArea className="max-h-[80vh] w-full">
          {/* HEADER */}
          <ProjectDialogHeader data={data} />

          {/* CONTENT */}
          <div className="px-6 pb-6">
            <p className="text-white/85 mt-4 text-sm leading-relaxed">
              Full detail content (images, features, tech stack, demo videos,
              descriptions, etc) will be placed here.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

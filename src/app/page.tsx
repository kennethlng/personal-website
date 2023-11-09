import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <AspectRatio ratio={21 / 9} className="bg-muted relative">
      <div className="absolute right-0 bottom-0 m-10">
        <div className="flex items-end space-x-2">
          <p className="font-bold text-lg">I&apos;m still working on this...</p>
          <Image src="/memoji_clouds.png" alt="" width={100} height={100} />
        </div>
      </div>
    </AspectRatio>
  );
}

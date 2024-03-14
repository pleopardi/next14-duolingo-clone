import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  value: number;
  variant: "points" | "hearts";
};

export const ResultCard = ({ value, variant }: Props) => {
  const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg"; 

  return (
    <div className={cn(
      "rounded-2xl border-2 w-full",
      variant === "points" && "bg-orange-400 border-orange-400",
      variant === "hearts" && "bg-rose-500 border-rose-500",
    )}>
      <div className={cn(
        "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
        variant === "hearts" && "bg-rose-500",
        variant === "points" && "bg-orange-400"
      )}>
        {variant === "hearts" ? "Hearts Left" : "Total XP"}
      </div>
      <div className={cn(
        "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
        variant === "hearts" && "text-rose-500",
        variant === "points" && "text-orange-400"
      )}>
        <Image
          alt="Icon"
          src={imageSrc}
          height={30}
          width={30}
          className="mr-1.5"
        />
        {value}
      </div>
    </div>
  );
};

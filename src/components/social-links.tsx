"use client";

import {
  GithubLogo,
  InstagramLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ICON_FONT_WEIGHT } from "@/constants/icons";

const links = [
  {
    name: "Email",
    href: "mailto:hi@kennethlng.com",
    icon: PaperPlaneTilt,
  },
  {
    name: "Github",
    href: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
    icon: GithubLogo,
  },
  {
    name: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    icon: InstagramLogo,
  },
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {links.map((item) => (
        <Tooltip key={item.name}>
          <TooltipTrigger asChild>
            <Button asChild key={item.name} variant="ghost" size="icon">
              <Link href={item.href}>
                <span className="sr-only">{item.name}</span>
                <item.icon
                  className="h-6 w-6"
                  aria-hidden="true"
                  weight={ICON_FONT_WEIGHT}
                />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{item.name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

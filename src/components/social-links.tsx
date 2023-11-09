"use client";

import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
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
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    icon: LinkedinLogo,
  },
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {links.map((item) => (
        <Tooltip key={item.name}>
          <TooltipTrigger asChild>
            <Button asChild key={item.name} variant="ghost" size="icon">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{item.name}</span>
                <item.icon
                  className="h-6 w-6"
                  aria-hidden="true"
                  weight={ICON_FONT_WEIGHT}
                />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{item.name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

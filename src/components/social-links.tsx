"use client";

import { GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
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
        <Button asChild key={item.name} variant="ghost" size="icon">
          <Link href={item.href}>
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" weight="bold" />
          </Link>
        </Button>
      ))}
    </div>
  );
}

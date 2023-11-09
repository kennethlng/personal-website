"use client";

import { GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import { SocialLinks } from "./social-links";

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

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <div className="px-6 pb-8 lg:px-8">
        <div className="pt-8 md:flex md:items-center md:justify-between">
          <div className="md:order-2">
            <SocialLinks />
          </div>
          <p className="mt-4 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2023 kennethlng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

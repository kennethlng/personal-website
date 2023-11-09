import Link from "next/link";
import { Badge } from "./ui/badge";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 font-bold text-2xl">
            kennethlng
          </Link>
        </div>
        <Badge variant="outline">WIP</Badge>
      </nav>
    </header>
  );
}

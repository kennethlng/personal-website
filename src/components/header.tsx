import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 font-bold text-2xl flex items-center"
          >
            <Image
              src="/memoji_clouds.PNG"
              alt="kennethlng"
              width={28}
              height={28}
              className="mr-2"
            />
            kennethlng
          </Link>
        </div>
      </nav>
    </header>
  );
}

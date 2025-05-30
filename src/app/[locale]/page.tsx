import Image from "next/image";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Home",
  description: "Página inicial",
};

export default function Home() {
  const t = useTranslations('pages.home');

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-full">
      <Image
        src="https://avatars.githubusercontent.com/u/51727640?v=4"
        alt="Wendell Bitencourt"
        className="rounded-full w-[200px] h-[200px]" 
        width={500}
        height={500}
        priority
      />

      <h1 className="text-center text-2xl/6 w-full">
        Wendell Bitencourt
      </h1>
      <br />
      <p className="text-center text-2xl/6 w-full">
        🚧 {t('construction')} 🚧
      </p>
    </div>
  );
}

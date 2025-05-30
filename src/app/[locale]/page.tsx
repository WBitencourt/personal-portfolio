import Image from "next/image";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FallbackIcon from "./fall-back-icon";

export const metadata: Metadata = {
  title: "Home",
  description: "Página inicial",
};

export default async function Home() {
  const user = await fetch('https://api.github.com/users/wbitencourt');
  const userData = await user.json();

  const t = await getTranslations('pages.home');

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-full">
      { 
        userData.avatar_url ? (
          <Image
            src={userData.avatar_url}
            alt="Wendell Bitencourt"
            className="rounded-full" 
            width={200}
            height={200}
            priority
          />
        ) : (
          <FallbackIcon />
        )
      }

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

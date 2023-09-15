import Image from "next/image";
import { getDictionary } from "../../../get-dictionary";
import { locales } from "../../../i18n-config";
import useLocale from "@/hooks/useLocale";
import Link from "next/link";
import { pathnameWithLocale } from "@/shared/utils/tools";
import { usePathname } from "next/navigation";
import { Hero } from "@/general/sections";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className="">
      <Hero translation={dictionary} />
    </main>
  );
}

import { getDictionary } from "../../../get-dictionary";
import { Hero } from "@/general/sections";
import { getLocalePartsFrom, locales } from "../../../i18n-config";

export async function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({ locale }));
}

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className="">
      <Hero translation={dictionary} />
    </main>
  );
}

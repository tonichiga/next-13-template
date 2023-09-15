import { getDictionary } from "../../../get-dictionary";
import { Hero } from "@/general/sections";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className="">
      <Hero translation={dictionary} />
    </main>
  );
}

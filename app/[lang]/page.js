import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return <div className="text-red-500 p-3">{dictionary.followers}</div>;
}

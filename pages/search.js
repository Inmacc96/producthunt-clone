import { useRouter } from "next/router";

export default function Search() {
  const route = useRouter();

  const {
    query: { q },
  } = route;

  console.log(q);
  return <p>Search</p>;
}

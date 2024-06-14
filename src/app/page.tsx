import { useGetHelloQueryQuery } from "@/generated/pages";

export default function Home() {
  const { data, loading, error } = useGetHelloQueryQuery();

  if (loading) {
    return <div>This is loading</div>;
  }

  if (!loading) {
    return <div>{data?.getHelloQuery}</div>;
  }
}

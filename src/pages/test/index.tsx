import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps = (() => {
  console.log("2------------getStaticProps");

  return {
    props: {
      ids: ["131323", "988383", "291613"],
    },
  };
}) satisfies GetStaticProps<{ ids: string[] }>;

export default function Test({
  ids,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {ids.map((id) => (
        <div key={id}>
          <Link href={`/test/${id}`}>Test {id}</Link>
        </div>
      ))}
    </div>
  );
}

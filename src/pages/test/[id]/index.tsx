import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export function getStaticPaths() {
  console.log("------------getStaticPaths");

  return {
    paths: [
      { params: { id: "131323" } },
      { params: { id: "988383" } },
      { params: { id: "291613" } },
    ],
    fallback: false,
  };
}

export const getStaticProps = (() => {
  console.log("1------------getStaticProps");

  return {
    props: { a: 1010101 },
  };
}) satisfies GetStaticProps<{ a: number }>;

export default function TestDetails({
  a,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <div>
      Test detail id: {router.query.id} and a is {a}
    </div>
  );
}

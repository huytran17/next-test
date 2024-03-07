import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (() => {
  console.log("2------------getStaticProps");

  return {
    props: {
      a: 819891,
    },
  };
}) satisfies GetStaticProps<{ a: number }>;

export default function Test({
  a,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>Test: {a}</div>;
}

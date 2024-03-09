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

export const getStaticProps = ((context) => {
  console.log("1------------getStaticProps", context);

  return {
    props: { id: context?.params?.id as string },
  };
}) satisfies GetStaticProps<{ id: string }>;

export default function TestDetails({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <div>
      Test detail id: {router.query.id} and {id}
    </div>
  );
}

import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/world");

  const data = await res.json();

  return {
    props: {
      name: data.name,
    },
  };
};

export default function TestApiWorld({
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>The name is {name}</div>;
}

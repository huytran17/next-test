export async function getServerSideProps() {
  console.log("-------------getServerSideProps running");
  const res = await fetch("http://localhost:3000/api/world");

  const data = await res.json();

  return {
    props: {
      name: data.name,
    },
  };
}

export default function Test2({ name }: { name: string }) {
  return <div>Test 2: {name}</div>;
}

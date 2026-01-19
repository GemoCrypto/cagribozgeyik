type Params = { lang: string };

export default function Home({ params }: { params: Params }) {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Home</h1>
      <p>Language: {params.lang}</p>
    </main>
  );
}

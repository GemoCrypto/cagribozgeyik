type Params = { lang: string };

export default function About({ params }: { params: Params }) {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>About</h1>
      <p>Language: {params.lang}</p>
    </main>
  );
}

type Params = { lang: string };

export default function Work({ params }: { params: Params }) {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Work</h1>
      <p>Language: {params.lang}</p>
    </main>
  );
}

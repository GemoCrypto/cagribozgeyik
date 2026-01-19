type Params = { lang: string };

export default function Contact({ params }: { params: Params }) {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Contact</h1>
      <p>Language: {params.lang}</p>
    </main>
  );
}

export default function Home() {
  // NOTE: データフェッチングのサンプル
  fetch("http://localhost:3001/")
    .then((res) => res.json())
    .then((data) => console.log(data.message));

  return <main>Home</main>;
}

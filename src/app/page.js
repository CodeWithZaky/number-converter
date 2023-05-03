import NavLink from "../../components/NavLink";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-2 text-lime-800 font-mono">
      <h1 className="text-3xl text-center font-semibold">KONVERSI BILANGAN</h1>
      <p className="text-2xl">Ahmad Zaky Ubaidillah</p>
      <p className="text-xl">112210010</p>
      <div className="flex flex-col sm:flex-row text-center border gap-2 mt-3">
        <NavLink />
      </div>
    </main>
  );
}

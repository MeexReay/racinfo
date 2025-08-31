import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center mb-[15px] text-sm">
      <div className="flex flex-col text-stone-500 items-left">
        <Link
          href="https://kostyazero.com"
          className="ml-1 text-stone-500 underline underline-offset-3 hover:text-stone-50 transition duration-200"
        >
          © 2025 Konstantin Zhigaylo
        </Link>
        <Link
          href="https://meex.lol"
          className="ml-1 text-stone-500 underline underline-offset-3 hover:text-stone-50 transition duration-200"
        >
          © 2025 MeexReay
        </Link>
      </div>
      <div className="flex text-stone-500 items-center align-end">
        <p>The source code is available on</p>
        <Link
          href="https://github.com/MeexReay/racinfo"
          className="ml-1 underline underline-offset-3 text-stone-500 hover:text-stone-50 transition duration-200"
        >
          {" "}
          GitHub
        </Link>
      </div>
    </footer>
  );
}

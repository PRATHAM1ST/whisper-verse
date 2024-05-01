import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-2">
      <p className="text-xs">
        ©️ 2023 Copyrights reserved to{" "}
        <Link
          className="font-bold underline"
          href="https://prathamchudasama.com"
        >
          Pratham
        </Link>
      </p>
    </footer>
  );
}

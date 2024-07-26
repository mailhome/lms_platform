import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-xl text-rose-500">
      <UserButton  />
    </main>
  );
}

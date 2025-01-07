import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App",
  authors: [{ name: "amrirendy", url: "https://github.com/amriarendy" }],
  icons: {
    icon: "/icon.png"
  },
  openGraph: {
    title: "Next App"
  }
};

export default function Home() {
  // throw new Error("Something went wrong")
  return (
    <div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          Main Page!
        </main>
    </div>
  );
}

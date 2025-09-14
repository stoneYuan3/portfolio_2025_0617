import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collection - Stone Yuan Portfolio",
  description: "Collection pages with custom layout",
};

export default function CollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen m-auto text-center collection">
      {children}
    </div>
  );
}
import type { ReactNode } from "react";
import Header from "../../components/Header";
import ChatWidget from "../../components/ChatWidget";

export default function LangLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <ChatWidget />
    </>
  );
}
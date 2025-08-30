import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Text from "@/components/blocks/Text";
import PageTitle from "@/components/blocks/PageTitle";
import InlineCode from "@/components/blocks/InlineCode";
import Code from "@/components/blocks/Code";

export default function Avatars() {
  return (
    <main className={"flex flex-col gap-4 w-full"}>
      <Link
        href={"/protocol"}
        className={
          "text-stone-500 flex flex-row items-center transition duration-200 hover:text-stone-50 gap-2"
        }
      >
        <ArrowLeft size={16} /> Go Back
      </Link>
      <PageTitle id={"avatars"}>Avatars</PageTitle>
      <Text>
        To add an avatar to your message,
        the client only needs to add <InlineCode>0x06</InlineCode> byte and the specific suffix
        <InlineCode>!!AR!!</InlineCode>, then the image url.
        Here&apos;s a simple example:
      </Text>
      <Code>{"\\x06!!AR!!https://meex.lol/assets/nyashka.gif"}</Code>
    </main>
  );
}

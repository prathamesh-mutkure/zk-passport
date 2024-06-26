import { SignIn, SignUp } from "@clerk/nextjs";
import Head from "next/head";
import MainLayout from "~/components/layout/main-layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>zkPassPort: Decentralized Passport</title>
        <meta
          name="description"
          content="An Decentralised Passport powered by Polygon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className="my-auto flex h-full w-full items-center justify-center pt-20">
          <SignUp />
        </div>
      </MainLayout>
    </>
  );
}

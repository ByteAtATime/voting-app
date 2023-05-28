import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Voting App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">ByteAtATime's Voting App</span>
          </h1>
          <p className="text-center text-lg">
            A single question. If you vote wrong, you die.
          </p>
          <p className="text-center text-lg">
            Sure, a voting app is kinda cliche, but I'm a beginner, which is a good excuse.
          </p>
          <Link href="/vote" className="btn btn-info flex text-xl">Vote!</Link>
        </div>
      </div>
    </>
  );
};

export default Home;

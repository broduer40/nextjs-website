import NavigationBar from "../../../../components/navigationBars/NavigationBar";
import ResourceCardsManager from "./components/ResourceCardsManager";
import Head from "next/head";

export default function Resources() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-nanobloxGray-light">
      <Head>
        <title>Nanoblox</title>
        <meta
          name="description"
          content="Find resources and documentations to learn what Nanoblox has to offer to developers and users."
        />
      </Head>
      <NavigationBar />
      <div className="container mx-auto my-2 flex-grow">
        <ResourceCardsManager className="px-4 pt-4" />
      </div>
    </div>
  );
}

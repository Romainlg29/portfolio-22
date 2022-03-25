import Seo from "../../components/Utils/Seo";
import CryptomatorSyncing from "../../components/Scene/Posts/CryptomatorSyncing";
import { useMediaQuery } from "react-responsive";

const SyncingSecurity = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo
        title={`Romain Le Gall - Enhance your syncing security!`}
        description={
          "This short guide will be based on my previous guide about Syncing your devices easily with Syncthing. To begin with, we’ll be using Cryptomator a free, open-source program that crypt your data with keys."
        }
        keywords={
          "Syncthing, Cryptomator, syncing, tutorial, easy, guide, free"
        }
      />
      <CryptomatorSyncing
        title={"Enhance your syncing security!"}
        date={"January 5th 2021"}
        id={2}
        isPhone={isPhone}
      />
    </>
  );
};
export default SyncingSecurity;

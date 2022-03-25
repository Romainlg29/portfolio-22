import Seo from "../../components/Utils/Seo";
import Synchronize from "../../components/Scene/Posts/SynchronizeDevices";
import { useMediaQuery } from "react-responsive";

const SynchronizeDevices = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo
        title={`Romain Le Gall - How to synchronize your devices easily!`}
        description={
          "Syncing your devices is very useful these times, you can share folders, files… between a fleet of personal devices. Syncthing is one of the most used resource to sync. Especially because it’s a free and open-sources project. Today, this article will deal with Syncthing and how to synchronize 2 devices (Linux & Windows)."
        }
        keywords={
          "Syncing, folders, files, Syncthing, devices, easy, fast, open sources, windows, linux"
        }
      />
      <Synchronize
        title={"Enhance your syncing security!"}
        date={"January 5th 2021"}
        id={1}
        isPhone={isPhone}
      />
    </>
  );
};
export default SynchronizeDevices;

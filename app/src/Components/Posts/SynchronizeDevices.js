import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PostHeader from "./PostHeader";
import InformationToast from "./Presenter/InformationToast";

const SynchronizeDevices = ({ title, date }) => {
  const [infoText, setInfoText] = useState("");

  return (
    <motion.div
      className="w-screen h-screen flex flex-col items-center overflow-y-scroll"
      style={{ backgroundColor: "#F1F4F8" }}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <AnimatePresence exitBeforeEnter>
        {infoText && infoText !== "" ? (
          <InformationToast text={infoText} setText={setInfoText} />
        ) : null}
      </AnimatePresence>
      <PostHeader title={title} date={date} />
      <div className="w-11/12 lg:w-3/5 mt-2 md:mt-6">
        <img
          className={"my-4 p-2 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/header.png`}
          alt="Synchronize your devices easily !"
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Syncing your devices is very useful these times, you can share
          folders, files… between a fleet of personal devices.{" "}
          <a
            href={"https://syncthing.net/"}
            className={"font-bold"}
            style={{ color: "rgb(60, 108, 171)" }}
          >
            Syncthing
          </a>{" "}
          is one of the most used resource to sync. Especially because it’s a
          free and open-sources project.
        </p>

        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Today, this article will deal with Syncthing and how to synchronize 2
          devices (Linux & Windows).
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/winkali.png`}
          alt="In this case, we'll use a windows 10 OS and a Kali Linux OS"
        />
        <p
          className={
            "mb-6 text-xl text-gray-700 text-center leading-8 font-bold"
          }
        >
          Windows configuration
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          First, we’re going to setup Syncthing on our Windows, go on the{" "}
          <a
            href={"https://syncthing.net/"}
            className={"font-bold"}
            style={{ color: "rgb(60, 108, 171)" }}
          >
            Syncthing website
          </a>{" "}
          and download the latest version available. Then{" "}
          <span className={"font-bold"}>execute</span> the .exe. A webpage
          should open.
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/windowsWeb.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          A default folder is set, it’s by default located in your
          C:\users\%youruser%. However, you can create a new one by clicking on
          “Add Folder”. Firstly, you must set up the{" "}
          <span className={"font-bold"}>
            Folder ID, this ID is important, it must be the same on your synced
            devices to acces the folder.
          </span>{" "}
          Then, add the <span className={"font-bold"}>Folder Path</span>, the
          path to your folder on your computer.
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/windowsCreateFolder.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          The <span className={"font-bold"}>Advanced tab</span> : allow us to
          personalize many settings.
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          <span className={"font-bold"}>Full Rescan Interval</span> is the time
          between two lookups, a lower value will refresh your folder quite
          frequently.
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          <span className={"font-bold"}>Folder Type</span> : define the folder’s
          type. Can send files, receive files or both.
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          <span className={"font-bold"}>File Pull Order</span> : define the sync
          order. Newest First will sync the Newest files first.
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/windowsCreatefolderAdvanced.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Once you did that, the{" "}
          <span className={"font-bold"}>Windows configuration is over.</span> If
          your other device is a Windows, skip the next part.
        </p>
        <p
          className={
            "mb-6 text-xl text-gray-700 text-center leading-8 font-bold"
          }
        >
          Linux configuration
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          First, we’re going to setup Syncthing on our Linux, go on the{" "}
          <a
            href={"https://syncthing.net/"}
            className={"font-bold"}
            style={{ color: "rgb(60, 108, 171)" }}
          >
            Syncthing website
          </a>{" "}
          and download the latest version available, unzip, extract the folder
          and <span className={"font-bold"}>install the executable file.</span>{" "}
          If the program won’t run, open the file’s properties and click “Allow
          this file to run as a program”.
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow shadow-blue-400"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/kaliInstall.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Now, a webpage had to open like the Windows’s configuration. If you
          added a folder to synchronize on your other device, you must{" "}
          <span className={"font-bold"}>
            do the same here with the SAME ID.
          </span>
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          The Linux’s configuration is now over. The next part will require both
          devices.
        </p>
        <p
          className={
            "mb-6 text-xl text-gray-700 text-center leading-8 font-bold"
          }
        >
          Syncing devices
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Once you’ve done the right configuration on both devices, you’ve to{" "}
          <span className={"font-bold"}>get the ID of one device</span> (Actions
          on top right corner then Show ID).
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/getid.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Then, you’ve to{" "}
          <span className={"font-bold"}>add a remote device</span> (Click on Add
          Remote Device), enter{" "}
          <span className={"font-bold"}>the previous ID</span> and set a{" "}
          <span className={"font-bold"}>name</span>.
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/setid.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Now, go on the <span className={"font-bold"}>Sharing tab</span>, click
          on the <span className={"font-bold"}>desired folder to share</span>{" "}
          and click <span className={"font-bold"}>Save.</span>
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/sharefolder1.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          On your other device, you should{" "}
          <span className={"font-bold"}>receive a “notification”</span>, click
          on “<span className={"font-bold"}>Add Device</span>“. This should look
          like the next picture.
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/adddevicekali.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Then, <span className={"font-bold"}>set a device name</span>, share
          your folder from the Sharing Tab and{" "}
          <span className={"font-bold"}>Save.</span>
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/sharefolder11.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          You should have <span className={"font-bold"}>a similar result</span>{" "}
          both devices.
        </p>
        <img
          className={"my-4 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/result.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          You’re now at{" "}
          <span className={"font-bold"}>
            the end of this little guide, your folder are successfully synced.
          </span>{" "}
          If you add files, folders on your synced folder, it’ll go on your
          other. However, your data are now synced but not protected.{" "}
          <span className={"font-bold"}>
            I advise you to add a crypting module
          </span>{" "}
          to your repertories. I did a guide with Cryptomator to help you.
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Also, to have a{" "}
          <span className={"font-bold"}>seamless experience</span> with
          Syncthing,{" "}
          <span className={"font-bold"}>
            I recommend you to start Syncthing on your device startup
          </span>{" "}
          (Ex. Application Autostart on Kali Linux, Task Planner on Windows 10).
        </p>
      </div>
    </motion.div>
  );
};
export default SynchronizeDevices;

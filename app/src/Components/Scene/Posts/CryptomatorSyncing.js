import { motion } from "framer-motion";
import PostHeader from "./PostHeader";
import { useEffect, useRef, useState } from "react";
import PostWrapper from "./Presenter/PostWrapper";

const CryptomatorSyncing = ({ title, date, id }) => {
  const docRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setHeight(docRef.current.clientHeight + 340);
    }, 1000);
  }, []);

  return (
    <PostWrapper pages={height / document.documentElement.offsetHeight}>
      <PostHeader title={title} date={date} id={id} />
      <div className="w-screen flex flex-col items-center" ref={docRef}>
        <div className="w-11/12 lg:w-3/5 mt-2 md:mt-6">
          <img
            className={"my-4 p-2 rounded-xl bg-white shadow"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Cryptomator/header.png`}
            alt=""
          />
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Syncing folders, files are so useful nowadays but your data are
            transiting trough your network which probably contains some security
            leaks.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            This short guide will be based on my previous guide about Syncing
            your devices easily with Syncthing. To begin with, we’ll be using
            Cryptomator a free, open-source program that crypt your data with
            keys.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Firstly,{" "}
            <a
              href={"https://cryptomator.org/downloads/"}
              className={"font-bold"}
              style={{ color: "rgb(60, 108, 171)" }}
            >
              download Cryptomator
            </a>{" "}
            on both devices and install. If the program won’t run on Linux, open
            the file’s properties and click “Allow this file to run as a
            program”.
          </p>
          <img
            className={"my-4 rounded-xl"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Cryptomator/kali-cryptoperm.png`}
            alt=""
          />
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Once, you’ve installed Cryptomator. You need to{" "}
            <span className={"font-bold"}>
              create a Vault. Set a name, the path
            </span>
            , in our case, this will be{" "}
            <span className={"font-bold"}>your shared folder’s path.</span>
            Then, <span className={"font-bold"}>
              create a strong password
            </span>{" "}
            and <span className={"font-bold"}>create a backup key.</span>
          </p>
          <img
            className={"my-4 rounded-xl"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Cryptomator/crypto-ma.png`}
            alt=""
          />
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Now, you can{" "}
            <span className={"font-bold"}>unlock it and put files</span> they’ll{" "}
            <span className={"font-bold"}>
              NOT be crypted until you lock your vault.
            </span>
          </p>
          <img
            className={"my-4 rounded-xl"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Cryptomator/noncrypted.png`}
            alt=""
          />
          <img
            className={"my-4 rounded-xl"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Cryptomator/crypted.png`}
            alt=""
          />
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            You’ve done the first part, the second one is to{" "}
            <span className={"font-bold"}></span>uncrypt the folder content{" "}
            <span className={"font-bold"}></span>from your other device.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            This time, you’ve to{" "}
            <span className={"font-bold"}>Add a Vault</span> but you’ll{" "}
            <span className={"font-bold"}>click on Open Existing Vault</span>,
            then <span className={"font-bold"}>find your masterkey</span> which
            is located{" "}
            <span className={"font-bold"}>inside your synced folder</span>.
          </p>
          <img
            className={"my-4 rounded-xl"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Cryptomator/keyadded.png`}
            alt=""
          />
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Now,{" "}
            <span className={"font-bold"}>
              your synced folder is pretty secured !
            </span>{" "}
            Don’t forget to lock it when you’re away !
          </p>
        </div>
      </div>
    </PostWrapper>
  );
};
export default CryptomatorSyncing;

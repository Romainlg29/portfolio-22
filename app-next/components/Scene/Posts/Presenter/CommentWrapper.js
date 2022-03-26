import { useEffect, useState } from "react";

const CommentWrapper = ({ id }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const send = async () => {
    if (comment === "") return;
    const com = await fetch("https://romain-legall.fr/api/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: id,
        comment: comment,
      }),
    });
    const res = await com.json();
    if (res.result) {
      setComments([...comments, { comment: comment, period: new Date() }]);
      setComment("");
    }
  };

  useEffect(() => {
    const getComments = async () => {
      const a = await fetch(`https://romain-legall.fr/api/post?post=${id}`);
      setComments(await a.json());
    };
    getComments();
  }, []);

  return (
    <div className="w-full mt-24 flex flex-col items-center justify-center">
      <p className="text-xl text-gray-700 text-center leading-8">
        Would you like to ask a question ?
      </p>
      <textarea
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        type={"text"}
        className={
          "w-3/4 h-28 mt-4 p-2 border-none outline-none rounded-xl shadow resize-none overflow-y-scroll"
        }
        placeholder={"Type your comment here!"}
      />
      <div className="w-3/4 flex justify-end">
        <div
          className="flex mt-2 py-1 px-2 items-center bg-white rounded-xl shadow cursor-pointer hover:shadow-md transition-all"
          onClick={send}
        >
          <p className="text-md mr-2">Send</p>
          <img
            className={"w-6 h-6"}
            src={`/Assets/Icons/send.svg`}
            alt=""
          />
        </div>
      </div>
      <div className="w-full mt-24 flex flex-col items-center justify-center">
        {comments &&
          comments.map((e) => {
            return (
              <div className="w-3/4 mt-4 p-2 border-none outline-none rounded-xl shadow bg-white">
                <p className="p-2">{e.comment}</p>
                <div className="flex justify-end">
                  <p className="text-sm">
                    {Math.ceil(
                      Math.abs(new Date() - new Date(e.period)) /
                        (1000 * 60 * 60 * 24)
                    )}
                    d
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default CommentWrapper;

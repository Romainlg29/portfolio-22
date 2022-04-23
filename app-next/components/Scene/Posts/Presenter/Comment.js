import { useState } from "react";

const Comment = ({ comment_id, id, comment, period, responses }) => {
  const [newResponse, setNewResponse] = useState(null);
  const [response, setResponse] = useState("");

  const send = async () => {
    if (response === "") return;
    const com = await fetch("https://romain-legall.fr/api/comment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment_id,
        response: response,
      }),
    });
    const res = await com.json();
    if (res.result) {
      responses.push({
        id: id,
        response: response,
        period: new Date(),
      });
      setNewResponse(null);
      setResponse("");
    }
  };

  return (
    <div className="w-full mt-4 mb-2">
      <div className="w-full p-2 border-none outline-none rounded-xl shadow bg-white">
        <p className="text-sky-800 text-sm">Comment #{id}</p>
        <p className="my-2 px-2">{comment}</p>
        <div className="mt-2 flex justify-end">
          <img
            className={
              "w-5 h-5 mr-2 cursor-pointer hover:scale-105 transition-all"
            }
            src={`/Assets/Icons/comment.svg`}
            alt="comment button"
            onClick={() =>
              newResponse === null ? setNewResponse(id) : setNewResponse(null)
            }
          />
          <p className="text-sm">
            {Math.ceil(
              Math.abs(new Date() - new Date(period)) / (1000 * 60 * 60 * 24)
            )}
            d
          </p>
        </div>
      </div>
      {newResponse === id && (
        <div className="w-full mt-2 p-2 border-none outline-none rounded-xl shadow bg-white">
          <p className="text-sky-800 text-sm">Response to: Comment #{id}</p>
          <textarea
            onChange={(e) => setResponse(e.target.value)}
            value={response}
            type={"text"}
            className={
              "w-full h-24 mt-4 p-2 border-none outline-none rounded-xl resize-none overflow-y-scroll"
            }
            placeholder={"Type your response here! (It's anonymous.)"}
          />
          <div className="flex justify-end" onClick={send}>
            <img
              className={
                "w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              }
              src={`/Assets/Icons/send.svg`}
              alt=""
            />
          </div>
        </div>
      )}

      {responses &&
        responses.map((r) => {
          // Random uuid 
          const uuid = Math.random() * 1000000
          return (
            <div key={`comment_response_${uuid}`} className="w-full mt-2 p-2 border-none outline-none rounded-xl shadow bg-white">
              <p className="text-blue-900 text-sm">
                Response to: Comment #{id}
              </p>
              <p className="my-2 px-2">{r.response}</p>
              <div className="mt-2 flex justify-end">
                <p className="text-sm">
                  {Math.ceil(
                    Math.abs(new Date() - new Date(r.period)) /
                      (1000 * 60 * 60 * 24)
                  )}
                  d
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Comment;

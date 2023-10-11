import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Response from "./Response";
import getCookie from "../utils/getCookie";
import Alert from "./Alert";

const csrftoken = getCookie("csrftoken");

const Main = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(null);
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const generateImages = (prompt) => {
    setLoading(true);
    const url = "http://127.0.0.1:8000/api/generate-images/";

    const requestData = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    };
    async function getResponse() {
      try {
        const response = await fetch(url, requestData);
        // console.log(response);
        // console.log(response.headers);
        // console.log(response.status);
        if (response.status !== 200) {
          setMessage("Please provide a proper prompt or try again.");
          setVisible(true);
          setLoading(false);
          return;
        }
        const data = await response.json();
        // console.log(data);
        // console.log(data.prompt, data.images_url);
        // console.log(typeof data.prompt, typeof data.images_url);
        setList([data, ...list]);
        // console.log(list);
        setLoading(false);
        setVisible(false);
        setPrompt("");
      } catch (error) {
        console.log(error);
      }
    }

    getResponse();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImages(prompt);
  };

  return (
    <section className="mt-12 w-full max-w-3xl">
      <Alert setVisible={setVisible} visible={visible} message={message} />
      {/* prompt */}
      <div className="flex flex-col gap-2 w-full sticky top-5 z-10">
        <form
          className="flex w-full justify-center items-center z-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here"
            className="prompt_input"
            required
          />
          <button type="submit" className="submit_btn">
            <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#57667f" }} />
          </button>
        </form>
      </div>

      <div className="image-gallery mt-12">
        {loading === true && (
          <div className="mb-8">
            <Skeleton height={28} />
            <div className="flex justify-center md:justify-between items-stretch flex-wrap mx-0 gap-2 mt-3">
              <Skeleton className="w-[200px] md:w-[240px]" height={200} />
              <Skeleton className="w-[200px] md:w-[240px]" height={200} />
              <Skeleton className="w-[200px] md:w-[240px]" height={200} />
            </div>
          </div>
        )}
        {list.map((response, index) => {
          return <Response response={response} loading={loading} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Main;

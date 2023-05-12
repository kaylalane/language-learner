import { useState, useEffect } from "react";

export default function RedditPost(props) {
  const [recentPost, setRecentPost] = useState({
    title: "",
    author: "",
    selftext: "",
    link: "",
  });
  
  useEffect(() => {
    getPost();

    const interval = setInterval(() => {
      getPost();
    }, 10000);

    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getPost() {
    try {
      const res = await fetch("https://www.reddit.com/r/languagelearning/.json");
      
      if (!res.ok) {
        throw new Error("Network response was not OK");
      }

      const j = await res.json();
      setRecentPost({
        title: j.data.children[props.id].data.title,
        author: j.data.children[props.id].data.author_fullname,
        selftext: j.data.children[props.id].data.selftext,
        link: j.data.children[props.id].data.permalink,
        picture: j.data.children[props.id].data.url_overridden_by_dest,
      });
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
  
  return (
    <a
      href={"https://www.reddit.com" + recentPost.link}
      target={"_blank"}
      rel="noreferrer"
      className="p-4 w-10/12 max-w-[800px] bg-primary/5 rounded-md "
    >
      <h3 className="text-xl font-extrabold">{recentPost.title}</h3>

      <p className="text-base italic">Posted by u/{recentPost.author}</p>
      <p className="text-sm">{recentPost.selftext}</p>
      {recentPost.picture && 
        <img src={recentPost.picture} alt={`r/languagelearning - ${recentPost.title}`}/>
        
        }
    </a>
  );
}

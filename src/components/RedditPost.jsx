import { useState, useEffect } from "react"

export default function RedditPost(props) {
  const [recentPost, setRecentPost] = useState({
    title: "",
    author: "",
    selftext:"",
    link:""
  });
  
  useEffect(() => {
    getPost();

    const interval=setInterval(()=>{
     getPost()
      },10000)
 
 
     return()=>clearInterval(interval)
 
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getPost() {

    const res = await fetch(
      'https://www.reddit.com/r/languagelearning/.json'
    );
    
    const j = await res.json();
    setRecentPost({
      title:j.data.children[props.id].data.title,
      author:j.data.children[props.id].data.author_fullname,
      selftext:j.data.children[props.id].data.selftext,
      link: j.data.children[props.id].data.permalink
    })
    
  }

  return (
      <article className="reddit-post">
        <a href={"https://www.reddit.com" + recentPost.link} target={"_blank"}>
          <h3 className="text-xl font-extrabold">{recentPost.title}</h3>
        </a>
        <p className="italic">{recentPost.author}</p>
        <p>{recentPost.selftext}</p>
      </article>
  );
};


import { lazy, useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RedditPost from "./components/RedditPost";
import { resources } from "./components/data";
import Resource from "./components/Resource";
//const RedditPost = lazy(() => import("./SearchParams"));
const languages = [
  "All",
  "Arabic",
  "Dutch",
  "English",
  "Korean",
  "Mandarin",
  "Russian",
  "Spanish",
  "Swahili",
];

const redditLinks = [
  {
    title: "Arabic",
    linkTitle: "r/learn_arabic",
    link: "https://www.reddit.com/r/learn_arabic/",
  },
  {
    title: "Dutch",
    linkTitle: "r/learndutch",
    link: "https://www.reddit.com/r/learndutch",
  },
  {
    title: "English",
    linkTitle: "r/englishlearning",
    link: "https://www.reddit.com/r/EnglishLearning/",
  },
  {
    title: "Korean",
    linkTitle: "r/korean",
    link: "https://www.reddit.com/r/korean/",
  },
  {
    title: "Mandarin",
    linkTitle: "r/chineselanguage",
    link: "https://www.reddit.com/r/chineselanguage/",
  },
  {
    title: "Russian",
    linkTitle: "r/russian",
    link: "https://www.reddit.com/r/russian/",
  },
  {
    title: "Spanish",
    linkTitle: "r/learnspanish",
    link: "https://www.reddit.com/r/learnspanish/",
  },
  {
    title: "Swahili",
    linkTitle: "r/learnswahili",
    link: "https://www.reddit.com/r/learnswahili/",
  },
];

function App() {
  const [language, setLanguage] = useState("All");
  const [results, setResults] = useState(resources);

  function handleOnChange(prop) {
    console.log("handle change " + prop);
    setLanguage(prop);
  }

  return (
    <div className="App">
      <Navbar />

      <section className="flex flex-col sm:flex-row items">
        <div className="form">
          <h2 className="text-xl">Languages</h2>
          <div className="flex flex-row flex-wrap sm:flex-col gap-4 py-2 items-start">
            {languages.map((lang) => (
              <button
                className="text-base hover:text-primary"
                id={lang}
                key={lang}
                value={lang}
                onClick={(e) => {
                  handleOnChange(e.target.value);
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {results
            .filter(
              (lang) =>
                lang.languages.includes(language) ||
                lang.languages.includes("All")
            )
            .map((filteredResource) => (
              <Resource
                key={filteredResource.title}
                title={filteredResource.title}
                description={filteredResource.description}
                link={filteredResource.link}
                types={filteredResource.types}
                cost={filteredResource.cost}
                features={filteredResource.features}
              />
            ))}
        </div>
      </section>

      <section
        id="reddit"
        className="py-6 flex flex-col md:flex-row items-center md:items-start gap-4"
      >
        <aside className="subreddits">
          <h2 className="text-2xl pb-4">Subreddits</h2>
          <ul className="grid gap-2 text-base">
            {redditLinks.map((subreddit) => (
              <li className="grid grid-cols-2 text-base" key={subreddit.title}>
                {subreddit.title}{" "}
                <a
                  href={subreddit.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-solid	 decoration-2 decoration-accent transition ease-in-out delay-300 duration-300	underline-offset-2 hover:underline-offset-4"
                >
                  {subreddit.linkTitle}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="">
          <h2 className="text-2xl text-center pb-4">
            Recent Reddit Posts on r/languagelearning
          </h2>
          <div className="flex flex-col gap-4 items-center">
            <RedditPost id={3} />
            <RedditPost id={4} />
            <RedditPost id={5} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import Footer from "./components/Footer";
import RedditPost from "./components/RedditPost";
import { resources } from "./components/data";
import Resource from "./components/Resource";
import Dropdown from "./components/Dropdown";
import { init, sendForm } from "emailjs-com";
import { useForm } from "react-hook-form";
init("Oz4Q-rOGmPUD7nUq-");

//const RedditPost = lazy(() => import("./SearchParams"));
const languages = [
  "Language",
  "Arabic",
  "Dutch",
  "English",
  "Korean",
  "Mandarin",
  "Russian",
  "Spanish",
  "Swahili",
];

const types = [
  "All",
  "Dictionary",
  "Flashcards",
  "Forum",
  "Keyboard",
  "Language Exchange",
  "Lessons",
  "Podcasts",
  "Reference",
  "Translator",
  "Trivia Game",
  "Quiz",
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
  const [languageFilter, setLanguageFilter] = useState("All");
  const [results, setResults] = useState(resources);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    sendForm("default_service", "template_ncz93v9", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  function handleFilterChange(prop) {
    setLanguageFilter(prop);
  }

  return (
    <div className="App">
      <section className="  h-screen w-screen flex flex-col sm:flex-row items-center justify-center gap-4  bg-primary text-bg">
        <div className="basis-1/2 text-base px-8 sm:p-0">
          <h1 className="text-2xl font-bold ">Polyglot Resources</h1>
          <p className="py-2">
            Welcome to Polyglot Resources, your one-stop destination for
            language resources!
          </p>
          <p className="py-2">
            Our website features a variety of resources, including online
            courses, textbooks, podcasts, language exchange platforms, and more.
          </p>
          <p className="py-2">
            Most of these resources come from the hard work of the Reddit
            language learning community, and this website only compiles their
            knowledge. Check out the reddit language learning thread{" "}
            <a
              href="https://www.reddit.com/r/languagelearning/"
              alt="Reddit's Language Learning Thread"
              className="text-accent"
              target="_blank"
              rel="noreferrer"
            >
              here!
            </a>
          </p>
        </div>
        <div className=" basis:none sm:basis-1/4 invisible sm:visible">
          <img src="/language.svg" className=" w-full" />
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center">
        <div className="flex p-8 justify-between">
          <h2 className="text-2xl text-primary font-bold">
            Polyglot Resources
          </h2>
          <div className="flex gap-4">
            <Dropdown
              defaultValue={languages[0]}
              list={languages}
              changeItem={handleFilterChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {results
            .filter(
              (resource) =>
                resource.languages.includes(languageFilter) ||
                resource.languages.includes("All")
            )
            .map((filteredResource) => (
              <Resource
                key={filteredResource.title}
                title={filteredResource.title}
                description={filteredResource.description}
                link={filteredResource.link}
                types={filteredResource.types}
              />
            ))}
        </div>
      </section>

      <section className=" p-8">
        <h2 className="text-2xl text-center pb-4 font-extrabold">
          Connect with the language community on Reddit!
        </h2>
        <div className=" flex flex-col items-center sm:items-start sm:flex-row gap-4 justify-center">
          <RedditPost id={3} />
          <RedditPost id={4} />
          <RedditPost id={5} />
        </div>
      </section>

      <section className=" flex justify-center">
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="basis-3/4 flex flex-col justify-center max-w-3xl gap-4 text-base"
        >
          <h2 className="text-2xl text-center text-primary font-extrabold">
            Suggestions?
          </h2>
          <div className=" flex gap-2">
            {/* include validation with required or other standard HTML validation rules */}
            <input
              className="w-1/2 bg-white border-black border-2 p-2  rounded-md focus:border-accent focus-visible:border-accent focus:outline-none focus-visible:outline-none "
              style={errors.nameRequired && { border: "2px solid red" }}
              placeholder="Name"
              {...register("nameRequired", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            <input
              className="w-1/2 bg-white border-black border-2 p-2 rounded-md focus:border-accent focus-visible:border-accent focus:outline-none focus-visible:outline-none "
              style={errors.mail && { border: "2px solid red" }}
              placeholder="Email"
              {...register("mail", {
                required: "Email Address is required",
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
          </div>
          <textarea
            className=" bg-white border-black border-2 p-2 rounded-md focus:ring-0 focus:border-accent focus-visible:border-accent focus:outline focus-visible:outline-offset-0"
            style={errors.messageRequired && { border: "2px solid red" }}
            placeholder="Send me a message!"
            {...register("messageRequired", { required: true })}
            aria-invalid={errors.mail ? "true" : "false"}
          />

          <input
            type="submit"
            role="button"
            className="button w-full p-2 text-white border-none bg-primary rounded-md focus-visible:outline-primaryButton"
            aria-label="Submit feedback form"
          />
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default App;

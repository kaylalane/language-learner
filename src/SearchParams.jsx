import { useState, useEffect } from "react";
import { resources } from "./components/data";
import Resource from "./components/Resource";

const SearchParams = () => {
  const [language, setLanguage] = useState("All");
  const [results, setResults] = useState(resources);
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
  const types = ["All", "Language exchange", "Flashcards"];

  function handleOnChange(prop) {
    console.log("handle change " + prop);
    setLanguage(prop);
  }

  return (
   
      <section className="search-params">
        <div className="form">
          <h2 className="text-xl">Languages</h2>
          {languages.map((lang) => (
            <button
              className="languages"
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

        <div className="results">
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
              />
            ))}
        </div>
      </section>
  );
};
export default SearchParams;

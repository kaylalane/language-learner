import { useState, useEffect } from "react";
import RedditPost from "./RedditPost";

export default function Reddit() {
  return (
    <section className="reddit">
      <div className="posts">
        <h2 className="text-2xl">Recent Reddit Posts on Language Learning</h2>
        <RedditPost id={3} />
        <RedditPost id={4} />
        <RedditPost id={5} />
      </div>
      <aside className="subreddits">
        <h2 className="text-2xl">Subreddits by Language</h2>
        <ul className="grid grid-cols-2 gap-y-2">
          <li>Arabic</li>
          <li>
            <a href="https://www.reddit.com/r/learn_arabic/" target="_blank">/learn_arabic</a>
          </li>
          <li>Dutch:</li>
          <li><a href="https://www.reddit.com/r/EnglishLearning/" target={"_blank"}>
            r/learndutch
          </a></li>
          <li>English:</li>
          <li>
            <a
              href="https://www.reddit.com/r/EnglishLearning/"
              target={"_blank"}
            >
              {" "}
              r/EnglishLearning
            </a>
          </li>
          <li>Korean: </li>
          <li>
            <a href="https://www.reddit.com/r/korean/" target={"_blank"}>
              {" "}
              r/korean
            </a>
          </li>
          <li>Mandarin: </li>
          <li>
            <a
              href="https://www.reddit.com/r/chineselanguage/"
              target={"_blank"}
            >
              {" "}
              r/chineselanguage
            </a>
          </li>
          <li>Russian: </li>
          <li>
            <a href="https://www.reddit.com/r/russian/" target={"_blank"}>
              {" "}
              r/russian
            </a>
          </li>
          <li>Spanish: </li>
          <li>
            <a href="https://www.reddit.com/r/learnspanish/" target={"_blank"}>
              {" "}
              r/learnspanish
            </a>
          </li>
          <li>Swahili: </li>
          <li>
            <a href="https://www.reddit.com/r/learnswahili/" target={"_blank"}>
              {" "}
              r/learnswahili
            </a>
          </li>
        </ul>
      </aside>
    </section>
  );
}

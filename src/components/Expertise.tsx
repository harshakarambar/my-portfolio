"use client";

import { useState } from "react";

const groups: [string, string[]][] = [
  [
    "AI / GenAI",
    [
      "LLMs",
      "RAG",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "MCP",
    ],
  ],
  [
    "Programming & Data",
    [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
      "MySQL",
      "NLP",
      "Data Wrangling",
    ],
  ],
  [
    "Engineering",
    [
      "REST APIs",
      "Docker",
      "CI/CD",
      "Git / GitHub",
      "Automation",
    ],
  ],
];

export default function Expertise() {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="expertise section"
      id="expertise"
      aria-labelledby="expertise-title"
    >
      <div className="section-head">
        <p className="eyebrow">03 / TECHNICAL DEPTH</p>

        <h2 id="expertise-title">
          The tools behind the work.
        </h2>
      </div>

      <div className="expertise__list">
        {groups.map(([title, items], index) => {
          const isOpen = open === index;

          return (
            <div
              className={`skill-group ${
                isOpen ? "skill-group--open" : ""
              }`}
              key={title}
            >
              <button
                type="button"
                className="skill-group__button"
                onClick={() =>
                  setOpen(isOpen ? -1 : index)
                }
                aria-expanded={isOpen}
              >
                <span className="index">
                  0{index + 1}
                </span>

                <strong>{title}</strong>

                <span aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className="skill-group__content"
                aria-hidden={!isOpen}
              >
                <div className="tag-row">
                  {items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
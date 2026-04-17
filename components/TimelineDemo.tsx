import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "Jun–Aug 2025",
      content: (
        <div>
          <div>
        <p className="mb-2 text-lg font-semibold text-neutral-800 md:text-sm dark:text-neutral-200">
          Walmart Global Tech: SDE Intern
        </p>
        <ul className="list-disc pl-5 mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300 space-y-1">
          <li>Developed PySpark and SQL pipelines to process large-scale data, improving storage efficiency on GCP by 42%.</li>
          <li>Optimized data transformation workflows, enabling faster query execution and improved pipeline performance.</li>
          <li>Integrated GenAI APIs into internal tools to enhance automation and support intelligent data-driven functionalities.</li>
          <li>Ensured secure handling of API keys and credentials by following best practices for authentication and access control.</li>
        </ul>
      </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/TitansAi1.webp"
              alt="Walmart Dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/TitansAi2.webp"
              alt="Walmart Pipeline"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/TitansAi3.webp"
              alt="Walmart GCP"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/TitansAi4.webp"
              alt="Walmart GenAI"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jun–Oct 2024",
      content: (
        <div>
          <div>
        <p className="mb-2 text-lg font-semibold text-neutral-800 md:text-sm dark:text-neutral-200">
          Titans AI: Software Developer Freelancer
        </p>
        <ul className="list-disc pl-5 mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300 space-y-1">
          <li>Delivered production-grade chatbots and RAG pipelines using OpenAI and LangChain for client-specific knowledge retrieval.</li>
          <li>Added multimodal features including YouTube search and audio input, improving conversational coverage and UX.</li>
          <li>Created responsive SaaS frontend components with Next.js (TypeScript) and Aceternity UI.</li>
        </ul>
      </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/BridgeYU1.webp"
              alt="TitansAI Dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/BridgeYU2.webp"
              alt="TitansAI RAG"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/BridgeYU3.webp"
              alt="TitansAI Chatbot"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/BridgeYU4.webp"
              alt="TitansAI Frontend"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Achievements",
      content: (
        <div>
  <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    Google Girl Hackathon 2025 Finalist &amp; Open Source Contributor
  </p>
  <div className="mb-8 space-y-2">
    <div className="flex flex-col text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
      <span className="font-medium">🏆 Google Girl Hackathon 2025</span>
      <span>
        Top finalist among <strong>38,000+ participants</strong> — one of the most competitive women-in-tech programs by Google.
      </span>
    </div>
    <div className="flex flex-col text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-3">
      <span className="font-medium">✅ Open Source Contributions</span>
      <span>
        Contributed to <strong>10+ open-source projects</strong>, improving development workflows by 20%.{' '}
        <a
          href="https://github.com/bristiHalder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub ↗
        </a>
      </span>
    </div>
    <div className="flex flex-col text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mt-3">
      <span className="font-medium">🎓 Positions of Responsibility</span>
      <span>Student-Team Relationship Coordinator at <strong>Google Developer Student Club</strong> (Sept 2023 – Aug 2024)</span>
      <span>Designing Team Executive at <strong>Science and Technology Club, RGIPT</strong> (Aug 2023 – Aug 2024)</span>
    </div>
  </div>
</div>
      ),
    },
    {
      title: "2022–2026",
      content: (
        <div>
          <div>
        <p className="mb-2 text-lg font-semibold text-neutral-800 md:text-sm dark:text-neutral-200">
          RGIPT: B.Tech in Computer Science
        </p>
        <ul className="list-disc pl-5 mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300 space-y-1">
          <li>Enrolled at Rajiv Gandhi Institute of Petroleum Technology, EIB Campus, Bengaluru.</li>
          <li>Specializing in AI/ML, Data Science, and software engineering with a strong research focus.</li>
          <li>Key courses: Data Structures, Algorithms, GenAI, ML, AI, Deep Learning, DBMS, Computer Networks.</li>
          <li>Earlier schooling at Father Agnel School, Noida (CBSE Board, 2020–2021).</li>
        </ul>
      </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/HealtyBites1.webp"
              alt="RGIPT Campus"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/HealtyBites2.webp"
              alt="RGIPT Projects"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/HealtyBites3.webp"
              alt="RGIPT Coursework"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/HealtyBites4.webp"
              alt="RGIPT Activities"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

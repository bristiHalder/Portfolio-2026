export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Experience', link: '#experience' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
]

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize collaboration, fostering open communication in data-driven teams.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'AI/ML enthusiast with a passion for building intelligent systems.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building RAG & GenAI pipelines for real-world applications',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Multi-Agent RAG System for Medical Content',
    des: 'Built a 5-agent RAG pipeline with LangChain, ChromaDB, and Gemini API achieving >85% citation accuracy and real-time Q&A via Streamlit.',
    img: '/projects/medical_contextual_search.webp',
    iconLists: ['/py.svg', '/langchain.svg', '/openai.svg', '/fastapi.svg', '/stream.svg'],
    link: 'https://github.com/bristiHalder/Agentic-AI-System-Healthcare',
  },
  {
    id: 2,
    title: 'LLaMA-2 Instruction Fine-Tuning with QLoRA',
    des: 'Fine-tuned LLaMA-2-7B Chat using QLoRA with 4-bit NF4 quantization, reducing trainable parameters by 99% via LoRA on Guanaco instruction dataset.',
    img: '/projects/gail_rag.webp',
    iconLists: ['/py.svg', '/pytorch.svg', '/openai.svg', '/langchain.svg', '/faiss.svg'],
    link: 'https://github.com/bristiHalder/Fine-Tuning-Llama-Model-2-on-Intruction-dataset',
  },
  {
    id: 3,
    title: 'RAG Chatbot with LangChain & FAISS',
    des: 'Developed a scalable RAG system with LangChain and FAISS for domain-specific knowledge retrieval, with FastAPI endpoints serving 10k+ queries.',
    img: '/projects/multimodal_rag.webp',
    iconLists: ['/py.svg', '/fastapi.svg', '/openai.svg', '/faiss.svg', '/langchain.svg'],
    link: 'https://github.com/bristiHalder',
  },
  {
    id: 4,
    title: 'Data Analysis & Visualization Dashboard',
    des: 'Built an interactive data dashboard with Python, Pandas, and Matplotlib to uncover business insights from large datasets with visual storytelling.',
    img: '/projects/hr_management.webp',
    iconLists: ['/py.svg', '/numpy.svg', '/mongo.svg', '/fastapi.svg', '/re.svg'],
    link: 'https://github.com/bristiHalder',
  },
  {
    id: 5,
    title: 'GenAI SaaS Chatbot Platform',
    des: 'Created a production-grade SaaS chatbot frontend with Next.js and Aceternity UI, integrating OpenAI and LangChain RAG pipelines for client knowledge retrieval.',
    img: '/projects/image_stitching.webp',
    iconLists: ['/next.svg', '/ts.svg', '/openai.svg', '/langchain.svg', '/re.svg'],
    link: 'https://github.com/bristiHalder',
  },
  {
    id: 6,
    title: 'GCP Data Pipeline with PySpark & SQL',
    des: 'Engineered PySpark and SQL pipelines at Walmart Global Tech to process large-scale data on GCP, improving storage efficiency by 42%.',
    img: '/projects/tomato.webp',
    iconLists: ['/py.svg', '/dock.svg', '/fastapi.svg', '/mongo.svg', '/numpy.svg'],
    link: 'https://github.com/bristiHalder',
  },
];

export const testimonials = [
  {
    quote:
      "Bristi demonstrated exceptional technical skills throughout her internship at Walmart Global Tech. She developed robust PySpark pipelines that improved our GCP storage efficiency by 42%, and her ability to integrate GenAI APIs into internal tooling showed remarkable breadth. Her work ethic, attention to detail, and collaborative spirit made her an invaluable member of the team.",
    name: 'Walmart Global Tech',
    title: 'SDE Intern Manager, Bengaluru',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/240px-Walmart_Spark.svg.png'
  },
  {
    quote:
      "Working with Bristi at Titans AI was a fantastic experience. She delivered production-grade RAG pipelines using OpenAI and LangChain that exceeded client expectations. Her ability to add multimodal features — including YouTube search and audio input — combined with her responsive Next.js UI work showed rare full-stack AI capability.",
    name: 'Sam Yokubbaev',
    title: 'Founder & CEO at TitansAI',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGoDqDp5J5T0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726475196640?e=1755734400&v=beta&t=D7IMEugFya1wjiMZ9o1aAjZBZ8TciCVSpu4kAjtVTOs'
  },
  {
    quote:
      "Bristi's Multi-Agent RAG system for medical content showed extraordinary depth of knowledge. Her evaluation framework achieved over 80% coverage and 85% citation accuracy. She thinks end-to-end — from data ingestion to evaluation — which is exactly what a senior data science engineer should do.",
    name: 'Open Source Community',
    title: 'Google Girl Hackathon 2025 — Top Finalist',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png'
  },
  {
    quote:
      "Bristi is one of those rare engineers who bridges the gap between research and production seamlessly. Her QLoRA fine-tuning project on LLaMA-2 was technically rigorous and practically impactful. She understands the math behind the models and also knows how to ship.",
    name: 'GDSC RGIPT',
    title: 'Student-Team Relationship Coordinator',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_"G"_Logo.svg/240px-Google_"G"_Logo.svg.png'
  },
];

export const companies = [
  {
    id: 1,
    name: 'Python',
    img: '/py.svg',
    nameImg: '/pythonName.svg',
  },
  {
    id: 2,
    name: 'PyTorch',
    img: '/pytorch.svg',
    nameImg: '/pytorchName.svg',
  },
  {
    id: 3,
    name: 'LangChain',
    img: '/langchain.svg',
    nameImg: '/langchainName.svg',
  },
  {
    id: 4,
    name: 'OpenAI',
    img: '/openai.svg',
    nameImg: '/openaiName.svg',
  },
  {
    id: 5,
    name: 'Docker',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
]

export const workExperience = [
  {
    id: 1,
    title: 'SDE Intern — Walmart Global Tech',
    desc: 'Developed PySpark & SQL pipelines on GCP, improving storage efficiency by 42%. Integrated GenAI APIs for internal automation tools.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Software Developer Freelancer — Titans AI',
    desc: 'Delivered production RAG pipelines and chatbots with OpenAI & LangChain. Built multimodal features and SaaS frontend with Next.js.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'AI/ML Engineer — Multi-Agent RAG System',
    desc: 'Architected a 5-agent RAG workflow for medical content with ChromaDB, Hugging Face, and Gemini API achieving >85% citation accuracy.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'LLM Fine-Tuning Research — QLoRA',
    desc: 'Fine-tuned LLaMA-2-7B with QLoRA (4-bit NF4), reducing trainable params by 99%. Used TRL SFTTrainer and TensorBoard for evaluation.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/bristiHalder',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https://leetcode.com/u/bristiHalder/',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/bristi-halder-56853a22b/',
  },
  {
    id: 4,
    img: '/leetcode.svg',
    link: 'https://leetcode.com/u/bristiHalder/',
  },
]

export const socialMediaHero = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/bristiHalder',
  },
  {
    id: 2,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/bristi-halder-56853a22b/',
  },
  {
    id: 3,
    img: '/leetcode.svg',
    link: 'https://leetcode.com/u/bristiHalder/',
  },
]

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
    title: 'Real-Time Voice Sales Assistant (RAG + FastAPI)',
    des: 'Developed an AI-powered real-time voice sales assistant integrating speech-to-text, text-to-speech, and Retrieval-Augmented Generation (RAG) for context-aware conversations. Built scalable FastAPI endpoints for call handling, conversation tracking, and response generation, leveraging FAISS for semantic search and LLMs for dynamic sales interactions with sub-2s latency.',
    img: '/projects/multimodal_rag.webp',
    iconLists: ['/py.svg', '/fastapi.svg', '/openai.svg', '/faiss.svg', '/langchain.svg'],
    link: 'https://github.com/bristiHalder/Real-Time-Voice-Sales-Assistant',
  },
  {
    id: 4,
    title: 'Handwriting Recognition System with OCR',
    des: 'Developed a deep learning-based handwriting recognition system using the IAM dataset, implementing image preprocessing, segmentation, and neural network-based text extraction for converting handwritten text into digital format. Built an end-to-end OCR pipeline leveraging feature extraction and sequence modeling to improve recognition accuracy on diverse handwriting styles.',
    img: '/projects/handwriting_ocr.webp',
    iconLists: ['/py.svg', '/tensorflow.svg', '/opencv.svg', '/keras.svg'],
    link: 'https://github.com/bristiHalder/A-Handwriting-Recognition-System-with-OCR',
  },
  {
    id: 5,
    title: 'Restaurant Reservation & Ordering Web Application',
    des: 'Developed a full-stack restaurant web application enabling users to browse menus, place orders, and make table reservations through an interactive UI. Built responsive frontend using HTML, CSS, and JavaScript, and implemented backend services with Node.js, Express.js, and MongoDB for handling user data, bookings, and order management.',
    img: '/projects/restaurant_website.webp',
    iconLists: ['/html.svg', '/css.svg', '/js.svg', '/node.svg', '/mongodb.svg'],
    link: 'https://github.com/bristiHalder/Reservation-Restaurant-Website',
  },
  {
    id: 6,
    title: 'Interactive Photo Editor Application',
    des: 'Developed an interactive photo editing application enabling real-time image manipulation including drawing, filters, text overlays, and sticker integration. Implemented features like undo/redo, brush customization, and dynamic UI interactions using image processing techniques, enhancing user experience for intuitive editing workflows.',
    img: '/projects/photo_editor.webp',
    iconLists: ['/py.svg', '/opencv.svg', '/js.svg'],
    link: 'https://github.com/bristiHalder/Photo-Editor',
  },
];

export const testimonials = [
  {
    quote:
      "Bristi demonstrated exceptional technical skills throughout her internship at Walmart Global Tech. She developed robust PySpark pipelines that improved our GCP storage efficiency by 42%, and her ability to integrate GenAI APIs into internal tooling showed remarkable breadth. Her work ethic, attention to detail, and collaborative spirit made her an invaluable member of the team.",
    name: 'Walmart Global Tech',
    title: 'SDE Intern, Bengaluru',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/240px-Walmart_Spark.svg.png'
  },
  // {
  //   quote:
  //     "Working with Bristi at WeekendSync was a fantastic experience. She delivered production-grade RAG pipelines using OpenAI and LangChain that exceeded client expectations. Her ability to add multimodal features — including YouTube search and audio input — combined with her responsive Next.js UI work showed rare full-stack AI capability.",
  //   name: 'Sam Yokubbaev',
  //   title: 'Founder & CEO at WeekendSync',
  //   image: 'https://media.licdn.com/dms/image/v2/D4D03AQGoDqDp5J5T0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726475196640?e=1755734400&v=beta&t=D7IMEugFya1wjiMZ9o1aAjZBZ8TciCVSpu4kAjtVTOs'
  // },
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
  // {
  //   id: 2,
  //   title: 'Software Developer Freelancer — Titans AI',
  //   desc: 'Delivered production RAG pipelines and chatbots with OpenAI & LangChain. Built multimodal features and SaaS frontend with Next.js.',
  //   className: 'md:col-span-2',
  //   thumbnail: '/exp2.svg',
  // },
  // {
  //   id: 3,
  //   title: 'AI/ML Engineer — Multi-Agent RAG System',
  //   desc: 'Architected a 5-agent RAG workflow for medical content with ChromaDB, Hugging Face, and Gemini API achieving >85% citation accuracy.',
  //   className: 'md:col-span-2',
  //   thumbnail: '/exp3.svg',
  // },
  // {
  //   id: 4,
  //   title: 'LLM Fine-Tuning Research — QLoRA',
  //   desc: 'Fine-tuned LLaMA-2-7B with QLoRA (4-bit NF4), reducing trainable params by 99%. Used TRL SFTTrainer and TensorBoard for evaluation.',
  //   className: 'md:col-span-2',
  //   thumbnail: '/exp4.svg',
  // },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/bristiHalder',
  },
  // {
  //   id: 2,
  //   img: '/twit.svg',
  //   link: 'https://leetcode.com/u/bristiHalder/',
  // },
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

export const profile = {
  name: 'Bristi Halder',
  role: 'AI/ML Engineer & Data Scientist',
  location: 'Bengaluru, India',
  email: 'bristi18jiya@gmail.com',
  resume:
    'https://drive.google.com/file/d/19ZkCmeoTcK2sy4QXKZuADWohosw1sNFP/view?usp=drive_link',
  github: 'https://github.com/bristiHalder',
  linkedin: 'https://www.linkedin.com/in/bristi-halder-56853a22b/',
  leetcode: 'https://leetcode.com/u/bristiHalder/',
  photo: '/profile photo bristi.png',
}

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  { name: 'Recognition', link: '#recognition' },
  { name: 'Contact', link: '#contact' },
]

export const heroStats = [
  { value: '42%', label: 'storage efficiency gain on GCP pipelines at Walmart' },
  { value: '85%+', label: 'citation accuracy in a 5-agent medical RAG system' },
  { value: '38,000+', label: 'participants; top finalist, Google Girl Hackathon 2025' },
]

export const socialLinks = [
  { id: 1, name: 'GitHub', img: '/git.svg', link: profile.github },
  { id: 2, name: 'LinkedIn', img: '/link.svg', link: profile.linkedin },
  { id: 3, name: 'LeetCode', img: '/leetcode.svg', link: profile.leetcode },
]

export const techStack = {
  'Languages': ['Python', 'SQL', 'C', 'C++'],
  'GenAI & LLMs': ['LangChain', 'LangGraph', 'RAG', 'Multi-agent systems', 'Prompt engineering', 'LLM evaluation', 'Claude API', 'Gemini API'],
  'ML & Deep Learning': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'PEFT', 'LoRA', 'QLoRA', 'Quantization', 'TRL'],
  'Data & Retrieval': ['PySpark', 'Spark SQL', 'BigQuery', 'PostgreSQL', 'ChromaDB', 'FAISS', 'FastAPI', 'Pydantic'],
  'Cloud & DevOps': ['GCP', 'Modal', 'Docker', 'Git', 'CI/CD', 'Streamlit'],
}

export const focusAreas = [
  {
    title: 'Retrieval-augmented generation',
    text: 'Multi-agent pipelines, vector search, and evaluation frameworks that keep answers grounded and citable.',
  },
  {
    title: 'LLM fine-tuning',
    text: 'Parameter-efficient training with QLoRA and LoRA to adapt open models on modest hardware.',
  },
  {
    title: 'Scalable data pipelines',
    text: 'PySpark and SQL workflows on GCP that cut storage cost and speed up downstream queries.',
  },
]

export type ProjectSection = {
  heading: string
  body?: string
  bullets?: string[]
}

export type Project = {
  id: number
  title: string
  category: string
  summary: string
  cover: string
  tags: string[]
  link: string
  highlights: string[]
  sections: ProjectSection[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Multi-agent RAG system for Ayurvedic healthcare content',
    category: 'Retrieval and agents',
    summary:
      'An end-to-end AI content pipeline for Kerala Ayurveda: grounded Q&A with structured citations, a four-agent workflow that drafts publication-ready articles, and an evaluation framework that tracks coverage, citation accuracy, and hallucination rate.',
    cover: '/projects/covers/medical_rag.webp',
    tags: ['Python', 'LangChain', 'ChromaDB', 'Gemini API', 'Hugging Face', 'Streamlit'],
    link: 'https://github.com/bristiHalder/Agentic-AI-System-Healthcare',
    highlights: [
      'Every answer carries traceable citations with document id, section id, and a relevance score.',
      'Adaptive chunking by document type, from 400 characters for FAQs to 800 for conceptual guides.',
      'A fact-checker agent auto-rejects drafts under 70% grounding and triggers a revision loop.',
      'Golden-set benchmarking with results persisted to JSONL for trend tracking.',
    ],
    sections: [
      {
        heading: 'How retrieval works',
        body:
          'A user query is embedded locally with all-MiniLM-L6-v2, matched against 57+ chunks persisted in ChromaDB, and the top five hits are retrieved. Only the best three are passed to the model to keep the prompt focused, while all five are returned for transparency. MegaLLM is the primary provider with an automatic fallback to Gemini 2.5 Flash and rotating API keys.',
      },
      {
        heading: 'The agent workflow',
        bullets: [
          'Outline agent checks corpus coverage first and only proposes sections the data can support.',
          'Writer agent retrieves context per section, not per article, and cites every claim inline.',
          'Fact-checker agent extracts claims, scores grounding, and suggests sources for anything unsupported.',
          'Tone editor scores brand-voice adherence and revises copy without removing citations or medical caveats.',
        ],
      },
      {
        heading: 'Evaluation',
        body:
          'A five-question golden set covers products, safety-critical contraindications, FAQs, concepts, and treatment programmes. Targets are at least 60% coverage, 50% citation accuracy, under 20% hallucination rate, and 80% tone compliance.',
      },
    ],
  },
  {
    id: 2,
    title: 'LLaMA-2 instruction fine-tuning with QLoRA',
    category: 'LLM fine-tuning',
    summary:
      "Fine-tunes Meta's LLaMA 2 7B Chat on a 1,000-example instruction dataset using QLoRA, running entirely on a serverless A100 through Modal so no local GPU is needed.",
    cover: '/projects/covers/llama_qlora.webp',
    tags: ['PyTorch', 'QLoRA', 'PEFT', 'bitsandbytes', 'TRL', 'Modal'],
    link: 'https://github.com/bristiHalder/LLaMA-2-Instruction-Fine-Tuning-with-QLoRA',
    highlights: [
      'Base weights quantized to 4-bit NF4 with bfloat16 compute, cutting memory by roughly four times.',
      'Only LoRA adapters train, around 0.1% of parameters, at rank 64 with alpha 16.',
      'A full 7B fine-tune completes on a single A100 in under an hour.',
      'Adapters persist to a Modal volume for reuse and evaluation.',
    ],
    sections: [
      {
        heading: 'Why QLoRA',
        body:
          'Instead of updating all seven billion parameters, the frozen base model is loaded in 4-bit and small rank-decomposition matrices are inserted into the transformer layers. Training touches only those adapters, which keeps VRAM low without a meaningful loss in quality.',
      },
      {
        heading: 'Training setup',
        bullets: [
          'Dataset: mlabonne/guanaco-llama2-1k, 1,000 instruction-following examples.',
          'One epoch, micro-batch of 1 with 4 gradient-accumulation steps, peak learning rate 2e-4.',
          'Cosine schedule with 50 warmup steps, gradient clipping at 0.3, bfloat16 mixed precision.',
          'Orchestrated with the TRL SFTTrainer on top of transformers and accelerate.',
        ],
      },
      {
        heading: 'Infrastructure',
        body:
          'A single Modal function spins up a container with the dependencies pre-installed, allocates an NVIDIA A100-SXM4-40GB, pulls the model and dataset from Hugging Face with a stored secret, runs training, and saves the adapter weights to a persistent volume.',
      },
    ],
  },
  {
    id: 3,
    title: 'Real-time voice sales assistant',
    category: 'Conversational AI',
    summary:
      'An AI sales agent built for a Flipkart hackathon that listens to a customer, retrieves the right product and policy details, and answers in natural speech within a couple of seconds.',
    cover: '/projects/covers/voice_assistant.webp',
    tags: ['LangChain', 'FastAPI', 'FAISS', 'Google Cloud Speech', 'Hugging Face', 'BeautifulSoup'],
    link: 'https://github.com/bristiHalder/Real-Time-Voice-Sales-Assistant',
    highlights: [
      'Speech-to-text, retrieval, generation, and text-to-speech chained for low-latency voice turns.',
      'Multi-turn context so the assistant stays consistent across a conversation.',
      'Switchable seller personas such as tech expert or fashion consultant.',
      'Answers grounded in product, pricing, privacy, and return-policy documents.',
    ],
    sections: [
      {
        heading: 'Pipeline',
        bullets: [
          'Product and policy pages are scraped, cleaned, chunked, and indexed into a vector store.',
          'Customer audio is transcribed with Google Cloud Speech-to-Text.',
          'Relevant chunks are retrieved and passed to a Hugging Face model to draft the reply.',
          'The reply is converted to audio with Google Cloud Text-to-Speech and played back.',
        ],
      },
      {
        heading: 'What it was judged on',
        body:
          'Naturalness and fluency, product accuracy, responsiveness, context awareness, objection handling, personalization, and whether the assistant behaves like a confident, knowledgeable seller.',
      },
    ],
  },
  {
    id: 4,
    title: 'Handwriting recognition with OCR',
    category: 'Computer vision',
    summary:
      'A deep learning OCR system that reads handwritten text and converts it to digital form, combining image preprocessing with a CNN-RNN network and CTC decoding.',
    cover: '/projects/covers/handwriting_ocr.webp',
    tags: ['TensorFlow', 'Keras', 'OpenCV', 'Tesseract', 'CTC'],
    link: 'https://github.com/bristiHalder/A-Handwriting-Recognition-System-with-OCR',
    highlights: [
      'Preprocessing pipeline that cleans and normalizes scanned pages before recognition.',
      'Convolutional layers extract visual features, recurrent layers model the character sequence.',
      'A Connectionist Temporal Classification layer decodes variable-length text without aligned labels.',
      'Tesseract is used alongside the trained model for baseline text extraction.',
    ],
    sections: [
      {
        heading: 'Architecture',
        body:
          'Images pass through convolutional layers that learn stroke and shape features, then through recurrent layers that read those features left to right as a sequence. A CTC layer maps that sequence to characters, which lets the model train on whole lines without per-character bounding boxes.',
      },
      {
        heading: 'Data',
        body:
          'Trained and evaluated on the IAM handwriting dataset, which covers a wide range of writing styles so the model generalizes beyond a single hand.',
      },
    ],
  },
  {
    id: 5,
    title: 'Restaurant reservation and ordering app',
    category: 'Full-stack web',
    summary:
      'A responsive restaurant website where visitors browse the menu, book a table, and place orders, with Node.js and Express services backed by MongoDB.',
    cover: '/projects/covers/restaurant_app.webp',
    tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
    link: 'https://github.com/bristiHalder/Reservation-Restaurant-Website',
    highlights: [
      'Fully responsive layout from desktop down to phones.',
      'Menu pages with images and descriptions for each dish.',
      'Online reservation form that stores bookings in the database.',
      'Multilingual support so visitors can switch languages for a localized experience.',
    ],
    sections: [
      {
        heading: 'Stack',
        body:
          'The front end is plain HTML, CSS, and JavaScript for fast loads. Express routes handle menu data, reservations, and orders, and MongoDB stores users, bookings, and order history.',
      },
    ],
  },
  {
    id: 6,
    title: 'Interactive photo editor',
    category: 'Desktop app',
    summary:
      'A Python image editor built with Tkinter and Pillow. Load a photo, adjust brightness, contrast, and color with a live preview, apply filters, and save the result at the original size.',
    cover: '/projects/covers/photo_editor.webp',
    tags: ['Python', 'Tkinter', 'Pillow', 'Image processing'],
    link: 'https://github.com/bristiHalder/Photo-Editor',
    highlights: [
      'Real-time preview while dragging brightness, contrast, and color sliders.',
      'Filters for blur, grayscale, edge enhancement, and sharpening.',
      'Scrollable canvas so large images stay workable.',
      'Preserves the original image dimensions on save.',
    ],
    sections: [
      {
        heading: 'How it is built',
        body:
          'Tkinter provides the window, canvas, and controls. Pillow handles the image maths: each slider change re-renders an enhanced copy of the source image so the original is never destroyed, and filters are applied through Pillow ImageFilter kernels.',
      },
    ],
  },
]

export const testimonials = [
  {
    quote:
      'Bristi demonstrated exceptional technical skills throughout her internship at Walmart Global Tech. She developed robust PySpark pipelines that improved our GCP storage efficiency by 42%, and her ability to integrate GenAI APIs into internal tooling showed remarkable breadth. Her work ethic, attention to detail, and collaborative spirit made her an invaluable member of the team.',
    name: 'Walmart Global Tech',
    title: 'SDE Internship, Bengaluru',
  },
  {
    quote:
      "Bristi's multi-agent RAG system for medical content showed extraordinary depth of knowledge. Her evaluation framework achieved over 80% coverage and 85% citation accuracy. She thinks end-to-end, from data ingestion to evaluation, which is exactly what a senior data science engineer should do.",
    name: 'Google Girl Hackathon 2025',
    title: 'Top finalist',
  },
  {
    quote:
      'Bristi is one of those rare engineers who bridges the gap between research and production seamlessly. Her QLoRA fine-tuning project on LLaMA-2 was technically rigorous and practically impactful. She understands the math behind the models and also knows how to ship.',
    name: 'GDSC RGIPT',
    title: 'Student-Team Relationship Coordinator',
  },
]

export const tools: { id: number; name: string; img?: string }[] = [
  { id: 1, name: 'Python', img: '/py.svg' },
  { id: 2, name: 'PyTorch', img: '/pytorch.svg' },
  { id: 3, name: 'TensorFlow' },
  { id: 4, name: 'Hugging Face' },
  { id: 5, name: 'LangChain', img: '/langchain.svg' },
  { id: 6, name: 'LangGraph' },
  { id: 7, name: 'Claude API' },
  { id: 8, name: 'OpenAI', img: '/openai.svg' },
  { id: 9, name: 'PySpark' },
  { id: 10, name: 'BigQuery' },
  { id: 11, name: 'FastAPI', img: '/fastapi.svg' },
  { id: 12, name: 'PostgreSQL' },
  { id: 13, name: 'ChromaDB' },
  { id: 14, name: 'FAISS', img: '/faiss.svg' },
  { id: 15, name: 'NumPy', img: '/numpy.svg' },
  { id: 16, name: 'Google Cloud', img: '/cloud.svg' },
  { id: 17, name: 'Modal' },
  { id: 18, name: 'Docker', img: '/dock.svg' },
  { id: 19, name: 'Git', img: '/git.svg' },
  { id: 20, name: 'Streamlit', img: '/stream.svg' },
]

export const approach = [
  {
    step: 'Understand the data',
    text: 'Explore distributions, handle missing values, engineer features, and surface patterns with visualization and statistics before any model is trained.',
  },
  {
    step: 'Build and iterate',
    text: 'Train and evaluate ML and deep learning models with disciplined experiments: architectures, hyperparameters, and metrics that reflect the real goal.',
  },
  {
    step: 'Ship and monitor',
    text: 'Deploy as scalable APIs on GCP or AWS with Docker and CI/CD, then watch for drift and degradation so the model keeps earning its place.',
  },
]

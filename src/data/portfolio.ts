export const portfolioData = {
  personal: {
    name: "Tanmay Singh",
    title: "Aspiring AI Engineer",
    siteUrl: "https://tanmayportfolio-five.vercel.app",
    phone: "+91 8860028629",
    email: "tanmaysingh8970@gmail.com",
    linkedin: "https://www.linkedin.com/in/tanmaysingh2711/",
    github: "https://github.com/TanmaySingh2711",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/tanmaysiaq6p",
    hackerrank: "https://www.hackerrank.com/profile/tanmaysingh4628",
    leetcode: "https://leetcode.com/u/vcYjoLhKrp/",
    resume: "/resume.pdf",
    summary:
      "Final-year B.E. student in Artificial Intelligence and Data Science who builds AI software that solves practical problems. Skilled in Python, machine learning, deep learning, computer vision, and web development. Seeking an entry-level AI Engineer role.",
  },
  about: [
    "I am an aspiring AI Engineer and a final-year B.E. student in Artificial Intelligence & Data Science at K. S. School of Engineering and Management, Bengaluru (2023 - 2027, CGPA 7.3/10). I build AI software that solves practical problems, working mainly in Python along with TypeScript, JavaScript, and SQL.",
    "I am skilled in machine learning, deep learning, computer vision, and web development. I also build with generative and agentic AI, using RAG, FAISS, Sentence-Transformers, Ollama, and AI agents.",
    "My projects include a local RAG assistant that answers questions on research papers with page-level citations, reaching 97.1% answer accuracy on a 68-question test set; an AI buyer agent that completes Razorpay test payments with human approval above Rs. 3,000; a reinforcement learning agent that finds bugs in a Mario-style game on its own; and a hand-gesture game controller with 99.0% test accuracy.",
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Artificial Intelligence & Data Science",
      institution: "K. S. School of Engineering and Management",
      location: "Bengaluru, India",
      cgpa: "7.3/10",
      duration: "2023 - 2027",
    },
  ],
  skills: [
    // Same groups and order as "Technical Skills" in public/resume.pdf.
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      category: "AI & ML",
      items: ["PyTorch", "Stable-Baselines3", "Gymnasium", "OpenCV"],
    },
    {
      category: "Generative AI & Agentic AI",
      items: ["RAG", "FAISS", "Sentence-Transformers", "Ollama", "AI Agents"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Next.js", "React", "Flask", "Pygame", "NumPy", "Matplotlib"],
    },
    {
      category: "APIs & Databases",
      items: ["Google Gemini API", "Razorpay API", "REST APIs", "PostgreSQL"],
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "GitHub Actions", "Vercel", "CUDA"],
    },
  ],
  projects: [
    {
      name: "CNN-Based Gesture Controlled Pac-Man",
      stack: ["Python", "PyTorch", "OpenCV", "CUDA", "Pygame"],
      githubUrl: "https://github.com/TanmaySingh2711/gesture-controlled-game",
      image: "/projects/gesture-controlled-pac-man.png",
      imageAlt: "Start screen of the gesture-controlled Pac-Man game listing the four hand gestures and keyboard controls",
      description: [
        "Trained a MobileNetV2 CNN on a 2,000-image HaGRID dataset to classify hand gestures in real time.",
        "Reached 99.0% test accuracy on the left, right, up, and down commands.",
        "Built an OpenCV webcam pipeline with CUDA-enabled PyTorch inference to turn gestures into game controls.",
        "Added confidence thresholding and temporal smoothing to keep the controls responsive.",
        "Made a Pac-Man-style Pygame game with ghost AI, power-ups, and levels that runs at about 60 FPS.",
      ],
    },
    {
      name: "Glitch Hunter – AI Game Testing System",
      stack: ["Python", "Stable-Baselines3", "Gymnasium", "Flask"],
      githubUrl: "https://github.com/TanmaySingh2711/glitch_hunter_project",
      image: "/projects/glitch-hunter.png",
      imageAlt: "Glitch Hunter dashboard home page with the Open Live Testing button and the four agent steps",
      description: [
        "Trained a PPO reinforcement learning agent for 16 million steps across 8 parallel environments.",
        "The agent plays a Mario-style Pygame game on its own for continuous gameplay testing.",
        "Detects movement, clipping, score, and coin bugs by checking game-state invariants while it plays.",
        "Saves a screenshot, GIF, and PDF report as evidence for every bug it finds.",
        "Built a live Flask and Socket.IO dashboard that streams gameplay, rewards, and detected glitches.",
      ],
    },
    {
      name: "Razorpay Agentic Commerce",
      stack: ["TypeScript", "Next.js", "PostgreSQL", "Gemini API", "Razorpay API"],
      githubUrl: "https://github.com/TanmaySingh2711/razorpay-agentic-commerce",
      image: "/projects/razorpay-agentic-commerce.png",
      imageAlt: "Razorpay Agentic Commerce home page with the headline An AI that shops for you, never trusted with the money",
      description: [
        "Built an AI buyer agent with Google Gemini that understands shopping requests in plain words.",
        "The agent proposes products that match the requirements the user sets.",
        "Server code, not the AI, validates prices, spending limits, inventory, and authorization before payment.",
        "Added a secure policy and human-approval step before every purchase.",
        "Integrated Razorpay Test Mode with payment tracking, retries, and audit logs, deployed on Vercel.",
      ],
    },
    {
      name: "Academic Research Assistant",
      stack: ["Python", "RAG", "FAISS", "Ollama", "Flask"],
      githubUrl: "https://github.com/TanmaySingh2711/academic-research-assistant",
      image: "/projects/academic-research-assistant.png",
      imageAlt: "Research Assistant home page with the headline Ask your research papers, see the exact page, and the models it uses",
      description: [
        "Built a fully local RAG app that answers questions about research PDFs with page-level citations.",
        "Runs Llama 3.2 (3B) through Ollama, with no API keys or cloud services.",
        "Combines FAISS vector search and BM25 keyword search with cross-encoder re-ranking.",
        "On a real paper, raised correct answers from 65% to over 90%, and the top-ranked right passage from 44.4% to 83.3%.",
        "Flask web app with streamed answers, chat history, and offline OCR, answering in about 1 to 1.5 seconds.",
      ],
    },
  ],
  hackathons: [
    {
      name: "Hire-4-Thon",
      level: "National Level Hackathon",
      year: "2026",
      url: "/certificates/hire-4-thon-national-hackathon.pdf",
    },
    {
      name: "Hackathon-24",
      level: "College Level Hackathon",
      year: "2024",
      url: "/certificates/hackathon-24-kssem.pdf",
    },
  ],
  certifications: [
    {
      name: "Introduction to Machine Learning",
      issuer: "VOIS",
      year: "2025",
      url: "/certificates/introduction-to-machine-learning-vois.pdf",
    },
    {
      name: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      year: "2024",
      url: "/certificates/getting-started-with-ai-ibm.pdf",
    },
    {
      name: "Generative AI Literacy",
      issuer: "IT-ITeS SSC / FutureSkills Prime",
      year: "2025",
      url: "/certificates/generative-ai-literacy-futureskills.pdf",
    },
  ],
  courses: [
    {
      name: "Cloud Computing Workshop (AWS)",
      provider: "Cloud Institution",
      year: "2026",
      url: "/certificates/cloud-computing-aws-workshop-cloud-institution.pdf",
    },
    {
      name: "Agentic AI Projects Workshop",
      provider: "Hebbale Academy",
      year: "2025",
      url: "/certificates/agentic-ai-projects-workshop-hebbale-academy.pdf",
    },
    {
      name: "Advanced Excel, Power BI, and Tableau Workshop",
      provider: "SFJ Business Solutions",
      year: "2025",
      url: "/certificates/excel-power-bi-tableau-workshop-sfj.pdf",
    },
  ],
};

export const portfolioData = {
  personal: {
    name: "Tanmay Singh",
    title: "Aspiring AI Engineer",
    location: "Bengaluru, Karnataka, India",
    siteUrl: "https://tanmayportfolio-five.vercel.app",
    phone: "+91 8860028629",
    email: "tanmaysingh8970@gmail.com",
    linkedin: "https://linkedin.com/in/tanmay-singh-216380334/",
    github: "https://github.com/TanmaySingh2711",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/tanmaysiaq6p",
    hackerrank: "https://www.hackerrank.com/profile/tanmaysingh4628",
    leetcode: "https://leetcode.com/u/vcYjoLhKrp/",
    resume: "/resume.pdf",
    summary:
      "Final-year B.E. student in Artificial Intelligence and Data Science who builds AI software that solves practical problems. Skilled in Python, machine learning, deep learning, computer vision, and web development. Built a hand-gesture game controller that recognizes gestures with 99% accuracy, a self-learning agent that plays a game to find bugs on its own, and an AI shopping assistant that completes secure test payments. Seeking an entry-level AI Engineer role.",
  },
  about: [
    "I am an aspiring AI Engineer and currently a final-year B.E. student specializing in Artificial Intelligence & Data Science. I build AI software that solves practical problems, working mainly in Python along with TypeScript, JavaScript, and SQL.",
    "My core interests lie in machine learning, deep learning, computer vision, and web development. So far I have built a hand-gesture game controller that recognizes gestures with 99% accuracy, a self-learning agent that plays a game to find bugs on its own, and an AI shopping assistant that completes secure test payments.",
    "As a continuous learner, I thrive on adapting to new technologies and methodologies to build scalable, intelligent systems that make a tangible impact.",
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
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      category: "AI & ML",
      items: [
        "PyTorch",
        "scikit-learn",
        "Stable-Baselines3",
        "Gymnasium",
        "OpenCV",
        "NumPy",
        "Matplotlib",
        "Google Gemini API",
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Next.js", "React", "Flask", "Pygame"],
    },
    {
      category: "APIs & Databases",
      items: ["REST APIs", "Razorpay API", "PostgreSQL"],
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "GitHub Actions", "Docker", "Vercel", "CUDA"],
    },
  ],
  projects: [
    {
      name: "CNN-Based Gesture Controlled Pac-Man",
      stack: ["Python", "PyTorch", "OpenCV", "CUDA", "Pygame"],
      githubUrl: "https://github.com/TanmaySingh2711/gesture-controlled-game",
      description:
        "Built and trained a MobileNetV2-based Convolutional Neural Network (CNN) for real-time hand gesture classification using a 2,000-image HaGRID dataset, achieving 99.0% test accuracy across left, right, up, and down commands. Developed a real-time computer vision pipeline using OpenCV, CUDA-enabled PyTorch inference, confidence thresholding, and temporal smoothing to convert webcam gestures into responsive game controls. Engineered a Pac-Man-style Pygame application with maze navigation, ghost AI, pellets, power-ups, scoring, lives, and level progression, maintaining approximately 60 FPS gameplay with 30 FPS gesture recognition.",
    },
    {
      name: "Glitch Hunter – AI Game Testing System",
      stack: ["Python", "Stable-Baselines3", "Gymnasium", "Flask"],
      githubUrl: "https://github.com/TanmaySingh2711/glitch_hunter_project",
      description:
        "Trained a PPO reinforcement learning agent in two stages for 16 million steps across 8 parallel environments to autonomously explore and interact with a Mario-style Pygame game for continuous gameplay testing. Developed a runtime glitch detection system that monitors game-state invariants to identify abnormal movement, clipping, score, and coin-related bugs, saving screenshot, GIF, and PDF report evidence for each bug. Built a live Flask and Socket.IO dashboard to stream AI gameplay, actions, rewards, and detected glitches for real-time testing and analysis.",
    },
    {
      name: "Razorpay Agentic Commerce",
      stack: ["TypeScript", "Next.js", "PostgreSQL", "Gemini API", "Razorpay API"],
      githubUrl: "https://github.com/TanmaySingh2711/razorpay-agentic-commerce",
      description:
        "Built and deployed on Vercel an AI buyer agent using Google Gemini to understand shopping requests and propose suitable products within user-defined requirements. Developed a secure policy and human-approval system where the server validates prices, spending limits, inventory, and authorization before payment. Integrated Razorpay Test Mode with payment state tracking, retries, inventory reservation, and audit logging for reliable, complete purchases.",
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
};

export const getCertificateButtonType = (url: string) => {
  return url.toLowerCase().endsWith(".pdf") ? "View Certificate" : "Verify Certificate";
};

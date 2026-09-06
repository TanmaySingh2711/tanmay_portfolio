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
      "Final-year B.E. student in Artificial Intelligence & Data Science with a strong foundation in Java, Python, C, SQL, and Git/GitHub. Deeply interested in Artificial Intelligence, Machine Learning, and software development, with a focus on building practical, real-world solutions. A quick learner who is continuously improving and adapting to new technologies.",
  },
  education: [
    {
      degree: "Bachelor of Engineering, Artificial Intelligence & Data Science",
      institution: "K. S. School of Engineering and Management",
      location: "Bengaluru, India",
      cgpa: "7.3/10",
      expectedGraduation: "2027",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Java", "Python", "C", "SQL"],
    },
    {
      category: "Libraries",
      items: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "scikit-learn",
        "Gymnasium",
        "Stable-Baselines3",
      ],
    },
    {
      category: "Frameworks",
      items: ["Flask", "Streamlit"],
    },
    {
      category: "Web",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "Git Bash", "VS Code", "Antigravity"],
    },
  ],
  projects: [
    {
      name: "Razorpay Agentic Commerce",
      stack: ["TypeScript", "Next.js", "Gemini API", "Razorpay API"],
      githubUrl: "https://github.com/TanmaySingh2711/razorpay-agentic-commerce",
      description:
        "Built an AI buyer agent using Google Gemini to understand shopping requests and propose suitable products within user-defined requirements. Developed a secure policy and human-approval system where the server validates prices, spending limits, inventory, and authorization before payment. Integrated Razorpay Test Mode with payment state tracking, retries, inventory reservation, and audit logging for reliable end-to-end purchases.",
    },
    {
      name: "Glitch Hunter – AI Game Testing System",
      stack: ["Python", "Stable-Baselines3", "Gymnasium", "Flask"],
      githubUrl: "https://github.com/TanmaySingh2711/glitch_hunter_project",
      description:
        "Trained a PPO reinforcement learning agent to autonomously explore and interact with a Mario-style game environment for continuous gameplay testing. Developed a runtime glitch detection system that monitors game-state invariants to identify abnormal movement, clipping, score, and coin-related bugs. Built a live Flask dashboard to stream AI gameplay, actions, rewards, and detected glitches for real-time testing and analysis.",
    },
    {
      name: "Intelligent Support Ticket Routing API",
      stack: ["Python", "Flask", "scikit-learn", "SQLite"],
      githubUrl: "https://github.com/TanmaySingh2711/ticket-routing-api",
      description:
        "Trained a Naive Bayes text classifier to process unstructured customer complaints and accurately predict the required department. Deployed the machine learning model via a Flask REST API to accept JSON payloads and return real-time routing decisions to client applications. Integrated a local SQLite database to securely log incoming tickets and track model predictions for persistent auditing.",
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

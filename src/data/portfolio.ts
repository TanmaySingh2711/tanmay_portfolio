export const portfolioData = {
  personal: {
    name: "Tanmay Singh",
    title: "Aspiring AI Engineer",
    location: "Bengaluru, Karnataka, India",
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
      cgpa: "8.25/10",
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
      name: "Automated Invoice & Tax Discrepancy Detector",
      stack: ["Python", "Pandas", "Flask"],
      githubUrl: "https://github.com/TanmaySingh2711/invoice-discrepancy-detector",
      description:
        "Built a data processing pipeline using Pandas to parse CSV files and verify actual mathematical totals against claimed vendor amounts. Designed an interactive Flask web dashboard allowing non-technical users to seamlessly upload and analyze raw billing data. Implemented automated filtering logic to isolate and highlight exact mathematical errors, significantly reducing manual auditing time.",
    },
    {
      name: "Medical Bill Pricing Anomaly Inspector",
      stack: ["Python", "Pandas", "scikit-learn", "Flask"],
      githubUrl: "https://github.com/TanmaySingh2711/medical-bill-inspector",
      description:
        "Trained an Isolation Forest machine learning model using Scikit-Learn to autonomously detect pricing anomalies in complex datasets. Developed a Flask user interface featuring a file uploader for quick comparisons between personal bills and baseline regional costs. Engineered a side-by-side diagnostic table that visually isolates and highlights highly inflated line items for the user.",
    },
    {
      name: "Privacy Policy \"Dark Pattern\" Auditor",
      stack: ["Python", "scikit-learn", "BeautifulSoup", "Flask"],
      githubUrl: "https://github.com/TanmaySingh2711/privacy-policy-auditor",
      description:
        "Engineered a web scraper using BeautifulSoup to extract raw paragraph text directly from live privacy policy URLs. Trained a custom text classification pipeline using Scikit-Learn to identify predatory legal phrasing and evaluate privacy risks. Integrated the machine learning model with a Flask frontend to generate a dynamic, color-coded report highlighting sketchy clauses.",
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

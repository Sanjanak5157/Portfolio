// ============================================================
//  PORTFOLIO DATA  —  Edit everything here to make it yours!
// ============================================================

// ── Personal info ────────────────────────────────────────────
export const PERSONAL = {
  name:        "Sanjana k",          // ← your full name
  tagline:     "B.Tech CSE(AI&ML) 2026 · Open to Opportunities",
  bio:         "Aspiring of AI/ML | AIOT-INTERN | Data Analytics- INTERN | Full Stack Developer | Open to Opportunities .",
  email:       "ksanjana5157@gmail.com", // ← your Gmail
  phone:       "+91 9632068336",       // ← your number
  location:    "Mysuru, India",

  // Your photo — replace src/assets/profile.jpg with your own image
  // (keep the same filename, or update the import in About.jsx)
  photo: "/src/assets/Sanjana_photos_new_2026.jpeg",

  // Social / profile links — paste your actual URLs
  github:     "https://github.com/Sanjanak5157?tab=repositories",
  linkedin:   "https://linkedin.com/in/sanjana-k-39250a263",
  code360:   "https://www.naukri.com/code360/profile/e00e25e9-78af-449b-bc87-e5a6a481c2df", 
  leetcode:   "https://leetcode.com/u/Sanjanakleetcode/",
  // naukri:     "https://naukri.com/mnjuser/profile?id=alexjohnson",
  // unstop:     "https://unstop.com/u/alexjohnson",
  // kaggle:     "https://kaggle.com/alexjohnson",
  // duolingo:   "https://duolingo.com/profile/alexjohnson",
  // hackerrank: "https://hackerrank.com/alexjohnson",

  // Google Drive share link of your resume PDF form vvce email id, with "Anyone with the link can view" access
  resumeLink: "https://drive.google.com/file/d/1VhbSrJb3I-JgJIeFFBENy1yb50sPNdn6/view?usp=drive_link",

  // Hero stats — change numbers to yours
  stats: [
    { value: "4+",  label: "Projects Built" },
    { value: "1",   label: "Research Papers" },
    // { value: "3",   label: "" },
    { value: "2",   label: "Internships" },
  ],
};

// ── Skills ───────────────────────────────────────────────────
// Add / remove categories and items freely
export const SKILLS = {
  "Backend":       [ "Python", "Java", "REST APIs","SQL" ],
  "DevOps/Cloud":  ["Docker", "jenkins", "GitHub Actions","open router"],
  "Core Skills":   ["Oops", "Machine learning", "CN", "OS", "Cloud computing"],
  "Frontend":      ["React", "Tailwind CSS", "HTML/CSS"],    
  "AI / ML":       ["TensorFlow",  "Scikit-learn",  "Pandas", "NumPy", ],
  "Tools":         ["Git", "intellij idea", "Postman","MySQL", "MongoDB", "VS Code", "tabulea"],
  "Soft Skills":   ["Communication", "Networking", "Teamwork", "Leadership", "Adaptability"],
  // "Mobile":        ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
   // "Database": 
};
export const CERTIFICATES = {
  React: "https://drive.google.com/file/d/1D2Jg00Sd6TjwIydCYlxao9BwhYyFrqSX/view?usp=drive_link",
  Python: "https://drive.google.com/file/d/1D2Jg00Sd6TjwIydCYlxao9BwhYyFrqSX/view?usp=drive_link",
  SQL: "/certificates/sql.pdf",
};
// ── Education ────────────────────────────────────────────────
// Most recent first. collegeLink is optional (leave "" to hide)
export const EDUCATION = [
  {
    degree:      "B.Tech in Computer Science Engineering (Artificial Intelligence & Machine Learning)",
    school:      "Vidyavardhaka College of Engineering",
    collegeLink: "https://vvce.ac.in/",     // ← college website
    period:      "2022 – 2026",
    grade:       "CGPA: 8.29 / 10",
    accentColor: "#7c3aed",
    desc:        "Relevant coursework:  Machine Learning, Deep Learning, Database Systems, Computer Networks, Operating Systems, Data Structures, Algorithms.",
  },
  // {
  //   degree:      "Higher Secondary (Class XII)",
  //   school:      "XYZ Senior Secondary School",
  //   collegeLink: "",
  //   period:      "2019 – 2021",
  //   grade:       "92.4%",
  //   accentColor: "#06d6a0",
  //   desc:        "Physics, Chemistry, Mathematics, Computer Science. School topper in CS.",
  // },
  // {
  //   degree:      "Secondary (Class X)",
  //   school:      "XYZ School",
  //   collegeLink: "",
  //   period:      "2019",
  //   grade:       "94.2%",
  //   accentColor: "#f72585",
  //   desc:        "State board. Scored 100/100 in Mathematics.",
  // },
];

// ── Projects ─────────────────────────────────────────────────
// liveLink: set to "" if there is no live demo (the button will be hidden)
// githubLink: set to "" if private / no repo
export const PROJECTS = [
  {
    title:       "AI-Powered Loan Approval",
    date:        "",
    desc:        "Developed an AI-powered loan approval system using machine learning (Gradient Boosting) to predict eligibility and assess financial risk. Integrated a chatbot interface, LLM-based explainability, and SMS notifications to provide transparent and user-friendly decision insights. Built a complete automated pipeline with an analytics dashboard, credit score visualization, and recommendation engine, simulating enterprise-level systems like SAS.",
    tags:        ["Ml", "python","React", "LLM","SAS", "Open router", "Docker"],
    accentColor: "#7c3aed",
    liveLink:    "",  // ← has live demo
    githubLink:  "https://github.com/Sanjanak5157/Ai-loan.git",
  },
  {
    title:       "Tourism Promotion",
    date:        "Dec 2025",
    desc:        "Developed a tourism promotion web application using React.js for the frontend and Python (Flask) for the backend and Integrated an AI chatbot combining Machine Learning and LLM-based responses to provide tourist guidance, deployed by docker and also provide google map of place.",
    tags:        ["Python", "React", "ML",  "Google Maps API"],
    accentColor: "#38bdf8",
    liveLink:    "",                                    // ← no live demo → button hidden
    githubLink:  "https://github.com/Sanjanak5157/TOURTIES_PROMOTE_COORG.git",
  },
  {
    title:       "Plant Disease Prediction:",
    date:        "May 2024",
    desc:        "Developed a Deep learning model to classify plant leaf images and predict diseases using CNN-based architecture. Integrated the trained model with a Flask backend, exposing APIs for real-time predictions. Enhance agricultural performance by making decisions and improve crop health management.",
    tags:        ["Python", "TensorFlow/Keras", "Streamlit"],
    accentColor: "#06d6a0",
    liveLink:    "",        // ← has live demo
    githubLink:  "https://github.com/Sanjanak5157/Plant_Disease_Prediction.git",
  },
  {
    title:       "Stock_Span_Analysis_DSA",
    date:        "Aug 2025",
    desc:        "Use the simple stack-based algorithm to solve the stock span problem, which calculates the number of consecutive days before the current day where the stock price was less than or equal to the current day's price. This implementation efficiently computes the stock span for each day in O(n) time complexity.",
    tags:        ["Dsa", "HTML/CSS"],
    accentColor: "#f72585",
    liveLink:    "",                                    // ← no live demo
    githubLink:  "https://github.com/Sanjanak5157/Stock_Span_Analysis_DSA.git",
  },
];
export const EXPERIENCE = [
  {
    role:       "AIoT-Based Intelligent Occupancy Detection and Estimation System Using ToF Sensor(Intern)",
    company:    "Digitoad Technologies",
    period:     "Jan 2026 – Apr 2026",
    desc:       "This system uses a ToF sensor inbuild/external to estimate room occupancy levels. An AI model improves detection accuracy by learning distance and movement patterns, while occupancy data is shared in real time over BLE/Wi-Fi.",
    tags:       ["Python", "Stm32cubIDE", "React", "Tof Sensor", "tera term","Board: B-L4S5I-IOT01A"],
    githubLink: "https://github.com/Sanjanak5157/Tof_sensor_occupancy_detection_stm32cubeide_B-L4S5I-IOT01A_inbuilt_vl53l0x.git",
    certLink:   "https://drive.google.com/file/d/1eojK3h6AZ6FyHAIXmZp3lmN_wuZNXmDi/view?usp=drive_link",
  },
  {
    role:       " Data Analytics Intern",
    company:    "IBM SkillsBuild & CSRBOX",
    period:     "Jun 2024-Aug 2024",
    desc:       "Developed machine learning model to predict possible diseases based on chemical and symptom-related data with web application using Python, Scikit-learn, and REST APIs and led a 4-member team (online), Focused on backend logic optimization, ensuring accurate real-time risk classification with clean, maintainable code.",
    tags:       ["python", "ML", "Google colab"],
    githubLink: "https://github.com/Sanjanak5157/Stock_Price_Prediction_using_Machine_Learning_in_Python.git",
    certLink:   "https://drive.google.com/file/d/1UcurIw5-b-dz-qsJg7R0LhYhdBtmA4df/view?usp=drive_link",
  },
];

// ── Achievements ─────────────────────────────────────────────

export const PAPERS = [
  {
    title:      "WILDWATCH: Intelligent Animal Monitoring and Protection for Farmlands",
    authors:    "Sanjana K",
    journal:    "IEEE TEMS-TQCEBT 2026",
    year:       "2026",
    abstract:   "Abstract—Human-wild life conflict has a number of adverse effects including environmental damage, posing of health risks and the incurring of huge financial losses; such effects are still evident in the agricultural sustainability where Wild animal intrusion poses a significant threat by costing the rural population through loss of farmland produce and human-wildlife interactions. This implies an AI and IoT based intrusion detection system which monitors, reports, and responds to intrusion of wild animals within the farmlands. The system leverages real time image classification, voice recognition, recorded intrusion to produce a monthly report, and automated repelling response like buzzers combining using machine learning and deep learning techniques and an Internet of Things-based alert mechanism is included by the system, providing farmers and authorities with immediate notifications by SMS. The complete system is made to be economical, environmentally friendly, and scalable, guaranteeing its widespread use in agricultural areas where wildlife intrusions are a problem.",
    tags:       ["Deep Learning", "Animal Imaging", "CNN", "Raspberry Pi"],
    paperLink:  "https://drive.google.com/file/d/1HtPrhkaHdlZLMqeItfY4gczCy8dZ9JdD/view?usp=drive_link",   // ← published paper URL
    certLink:   "https://drive.google.com/file/d/13nbR_QQlOOQNemPieMG_pYeGW-SfP1Cx/view?usp=drive_link", // ← certificate URL
  },
  // {
  //   title:      "Efficient NLP for Low-Resource Languages",
  //   authors:    "A. Johnson, D. Kumar",
  //   journal:    "ACL Findings 2024",
  //   year:       "2024",
  //   abstract:   "Transfer learning framework for NLP in low-resource languages, reducing training data by 60% while maintaining competitive performance.",
  //   tags:       ["NLP", "Transfer Learning", "Transformers"],
  //   paperLink:  "https://aclanthology.org/your-paper",
  //   certLink:   "https://drive.google.com/cert",
  // },
];

export const CERTIFICATIONS = [
  {
    title:      "Data Analytics",
    issuer:     "Google Cloud Career Launchpad",
    date:       "26 Dec 2024",
    // credId:     "",
    icon:       "ri-pie-chart-2-fill",
    color:      "#FF9900",
    certLink:   "https://drive.google.com/file/d/1zeDUI4ezUsCOaVNL7Lh0lpZDK1mmDr1p/view?usp=drive_link",
  },
  {
    title:      "Cloud Computing 101",
    issuer:     "Amazon Web Services Training and Certification (AWS)",
    date:       "May 23 2026",
    // credId:     "META-FE-0005678",
    icon:       "ri-cloud-line",
    color:      "#61DAFB",
    certLink:   "https://www.credly.com/badges/62ff7ba2-f3ca-4369-804d-ff15f2cf2cee",
  },
  {
    title:     "Software Engineering",
    issuer:     "JP Morgan Chase & Co.",
    date:       "jun 2026",
    credId:     "",
    icon:       "ri-database-2-line",
    color:      "#3776AB",
    certLink:   "https://drive.google.com/file/d/1qylDXtSHqK3nNdKb24DCR642D1R3eXBK/view?usp=drive_link",
  },
  // {
  //   title:      "Postman API Fundamentals Student Expert",
  //   issuer:     "Postman",
  //   date:       "Feb 2024",
  //   credId:     "PM-API-0003456",
  //   icon:       "ri-server-line",
  //   color:      "#FF6C37",
  //   certLink:   "https://drive.google.com/cert",
  // },
];
// export const HACKATHONS = [
//   {
//     title:     "Smart India Hackathon 2024",
//     result:    "🏆 Winner",
//     organizer: "Government of India",
//     date:      "Dec 2024",
//     desc:      "Built an AI-powered crop disease detection system using computer vision on edge devices for rural farmers. Selected among 1,50,000+ teams.",
//     prize:     "₹1,00,000",
//     tags:      ["Computer Vision", "Edge AI", "Flutter", "TFLite"],
//     certLink:  "https://drive.google.com/cert",
//   },
//   {
//     title:     "HackWithInfy 2024",
//     result:    "Top 50 Nationally",
//     organizer: "Infosys",
//     date:      "Sep 2024",
//     desc:      "Real-time supply chain optimization using graph algorithms and predictive analytics. National finalist from 85,000+ participants.",
//     prize:     "National Finalist",
//     tags:      ["Graph Algorithms", "Python", "React", "FastAPI"],
//     certLink:  "https://drive.google.com/cert",
//   },
//   {
//     title:     "MLH Global Hack 2023",
//     result:    "Best Use of AI 🎖️",
//     organizer: "Major League Hacking",
//     date:      "Nov 2023",
//     desc:      "Sign-language-to-text real-time converter using MediaPipe + LSTM. Won Best AI category.",
//     prize:     "Best AI Award",
//     tags:      ["MediaPipe", "LSTM", "React", "Python"],
//     certLink:  "https://drive.google.com/cert",
//   },
// ];

// export const WORKSHOPS = [
//   {
//     title:     "Google Cloud Study Jams — Cloud & ML",
//     organizer: "Google Developers",
//     date:      "Aug 2024",
//     desc:      "30+ hands-on labs covering GCP, BigQuery, Vertex AI, and MLOps. Earned Google Cloud skill badges.",
//     tags:      ["GCP", "BigQuery", "Vertex AI", "MLOps"],
//     certLink:  "https://drive.google.com/cert",
//   },
//   {
//     title:     "Full Stack Bootcamp",
//     organizer: "NPTEL / IIT Bombay",
//     date:      "Jun 2024",
//     desc:      "8-week intensive on React, Node.js and cloud deployment. Scored 90/100.",
//     tags:      ["React", "Node.js", "MongoDB", "AWS"],
//     certLink:  "https://drive.google.com/cert",
//   },
//   {
//     title:     "ML Specialization",
//     organizer: "Coursera / DeepLearning.AI",
//     date:      "Mar 2024",
//     desc:      "Andrew Ng's 3-course ML specialization with distinction — supervised, unsupervised, and RL.",
//     tags:      ["Machine Learning", "Python", "TensorFlow"],
//     certLink:  "https://drive.google.com/cert",
//   },
// ];

// ── Certifications ───────────────────────────────────────────
// Separate from papers/hackathons/workshops — these are course
// completion / professional certifications


// // ── Extracurricular ──────────────────────────────────────────
// export const EXTRACURRICULAR = [
//   {
//     title:    "Technical Head — Coding Club",
//     org:      "ABC University",
//     period:   "2023 – 2025",
//     icon:     "ri-code-box-line",
//     desc:     "Led weekly coding sessions, organised inter-college hackathons, and mentored 50+ junior students in DSA and web development.",
//   },
//   {
//     title:    "NSS Volunteer",
//     org:      "National Service Scheme",
//     period:   "2021 – 2023",
//     icon:     "ri-heart-line",
//     desc:     "Participated in community service drives, digital literacy camps for rural schools, and plantation initiatives.",
//   },
//   {
//     title:    "State-Level Chess Player",
//     org:      "State Chess Federation",
//     period:   "2019 – Present",
//     icon:     "ri-gamepad-line",
//     desc:     "Represented district at state championships; chess sharpened analytical thinking and strategic problem-solving skills.",
//   },
//   {
//     title:    "Open-Source Contributor — GSSoC",
//     org:      "GirlScript Foundation",
//     period:   "May – Aug 2023",
//     icon:     "ri-github-line",
//     desc:     "12 merged PRs across 3 projects — accessibility improvements and performance optimisations. Top-100 contributor.",
//   },
// ];

// ── Experience ───────────────────────────────────────────────
// githubLink / certLink: set "" to hide the button

  // {
  //   role:       "Open Source Contributor",
  //   company:    "GirlScript Summer of Code",
  //   period:     "May 2023 – Aug 2023",
  //   desc:       "12 merged PRs across 3 projects. Accessibility improvements and performance optimisations. Top-100 contributor.",
  //   tags:       ["React", "TypeScript", "GitHub"],
  //   githubLink: "https://github.com/alexjohnson",
  //   certLink:   "https://drive.google.com/gssoc-cert",
  // },


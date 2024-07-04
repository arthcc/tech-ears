import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

const phrases = {
  backEnd: [
    "Optimizing database queries for performance",
    "Implementing RESTful APIs for seamless integration",
    "Ensuring secure authentication and authorization",
    "Refactoring legacy code for better maintainability",
    "Scaling the server infrastructure for high traffic",
    "Automating deployment with CI/CD pipelines",
    "Monitoring server health with logging and alerts",
    "Managing microservices with container orchestration",
    "Integrating third-party services via APIs",
    "Handling data migrations with minimal downtime",
    "Optimizing database indexes for faster query performance",
    "Implementing GraphQL endpoints for flexible data retrieval",
    "Securing API endpoints against potential vulnerabilities",
    "Refactoring monolithic applications into microservices",
    "Designing caching strategies to improve response times",
    "Automating database backups and disaster recovery",
    "Analyzing server logs to optimize resource utilization",
    "Deploying serverless functions for cost-efficient scaling",
    "Integrating OAuth for third-party authentication",
    "Managing secrets and environment variables securely",
    "Designing robust database schemas for scalability",
    "Implementing rate limiting to protect against abuse",
    "Writing unit tests for server-side code",
    "Managing load balancers for even traffic distribution",
    "Configuring web servers for optimal performance",
    "Implementing session management for user state persistence",
    "Optimizing server response times with middleware",
    "Handling concurrency in multi-threaded environments",
    "Implementing data encryption for sensitive information",
    "Utilizing NoSQL databases for flexible data storage",
    "Managing distributed databases for global applications",
    "Ensuring data integrity with ACID transactions",
    "Implementing automated server provisioning with IaC tools",
    "Building CI/CD pipelines for automated testing",
    "Designing event-driven architectures for responsive systems",
    "Utilizing message queues for asynchronous processing",
    "Implementing full-text search capabilities",
    "Optimizing server memory usage for efficiency",
    "Handling API versioning for backward compatibility",
    "Monitoring application performance with APM tools"
  ],

  frontEnd: [
    "Building responsive UIs with modern frameworks",
    "Enhancing user experience with intuitive designs",
    "Debugging front-end issues with browser dev tools",
    "Implementing state management for complex apps",
    "Optimizing load times with code splitting",
    "Ensuring cross-browser compatibility",
    "Using CSS preprocessors for better styling",
    "Integrating front-end with back-end APIs",
    "Creating interactive components with JavaScript",
    "Testing UI components for consistency",
    "Implementing lazy loading to improve initial page load times",
    "Creating animations with CSS transitions and keyframes",
    "Ensuring accessibility standards with ARIA roles",
    "Using TypeScript for enhanced code integrity",
    "Testing responsiveness across multiple device types",
    "Optimizing SEO with structured data and meta tags",
    "Integrating WebSockets for real-time updates",
    "Utilizing WebAssembly to optimize performance-critical code",
    "Implementing PWA features for offline functionality",
    "Auditing performance metrics with Lighthouse",
    "Creating pixel-perfect designs with CSS Grid and Flexbox",
    "Utilizing component libraries for rapid UI development",
    "Building reusable UI components for consistency",
    "Implementing dark mode with CSS variables",
    "Optimizing images for faster load times",
    "Handling user input validation and feedback",
    "Creating custom hooks in React for shared logic",
    "Utilizing Vue.js for reactive data binding",
    "Building forms with dynamic validation rules",
    "Implementing internationalization (i18n) for global reach",
    "Managing complex forms with Formik and Yup",
    "Utilizing Webpack for asset bundling and optimization",
    "Implementing drag-and-drop interfaces with JavaScript",
    "Creating data visualizations with D3.js",
    "Ensuring smooth scrolling with JavaScript",
    "Building server-rendered applications with Next.js",
    "Implementing authentication flows with JWT",
    "Creating responsive typography with CSS units",
    "Building custom themes with CSS-in-JS",
    "Utilizing IndexedDB for client-side storage"
  ],

  softSkills: [
    "Communicating effectively with team members",
    "Collaborating on code reviews for quality assurance",
    "Managing time efficiently to meet deadlines",
    "Adapting to new technologies and tools",
    "Providing constructive feedback during meetings",
    "Prioritizing tasks based on project goals",
    "Mentoring junior developers to foster growth",
    "Resolving conflicts with a positive attitude",
    "Documenting code and processes for clarity",
    "Balancing work and life for overall well-being",
    "Facilitating productive team retrospectives for continuous improvement",
    "Building consensus during decision-making processes",
    "Adopting Agile methodologies to streamline project workflows",
    "Demonstrating empathy in customer support interactions",
    "Managing expectations with stakeholders effectively",
    "Leading workshops to share best practices and insights",
    "Promoting a culture of knowledge sharing within the team",
    "Fostering diversity and inclusion initiatives",
    "Staying informed about industry trends and best practices",
    "Engaging in community outreach and mentorship programs",
    "Leading team meetings with a clear agenda",
    "Facilitating brainstorming sessions for creative solutions",
    "Managing remote teams with effective communication tools",
    "Encouraging peer-to-peer learning and collaboration",
    "Handling feedback with an open mindset",
    "Promoting team engagement through regular check-ins",
    "Organizing team-building activities for morale boosting",
    "Navigating cultural differences with sensitivity",
    "Setting clear goals and expectations for team members",
    "Fostering a growth mindset within the team",
    "Encouraging innovation through a safe-to-fail environment",
    "Providing timely recognition and appreciation",
    "Conducting performance reviews with constructive feedback",
    "Managing stress and preventing burnout",
    "Encouraging work-life balance with flexible schedules",
    "Building trust through transparency and integrity",
    "Promoting a positive and inclusive team culture",
    "Handling difficult conversations with tact and empathy",
    "Aligning team efforts with organizational goals",
    "Encouraging continuous learning and development"
  ]
};

const getRandomPhrase = () => {
  const categories = Object.keys(phrases);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const phrasesInCategory = phrases[randomCategory];
  return phrasesInCategory[Math.floor(Math.random() * phrasesInCategory.length)];
};

const [inputValue, setInputValue] = useState("");
const [corrections, setCorrections] = useState([]);
const [audioSrc, setAudioSrc] = useState(null);
const [randomPhrase, setRandomPhrase] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [rounds, setRounds] = useState(0);
const [showShareProgress, setShowShareProgress] = useState(false);
const [userResponses, setUserResponses] = useState([]);
const [currentStep, setCurrentStep] = useState(0);
const [correctCount, setCorrectCount] = useState(0);

const fetchRandomPhrase = async () => {
  const phrase = getRandomPhrase();
  setRandomPhrase(phrase);

  try {
    const data = {
      input: { text: phrase },
      voice: { languageCode: "en-US", ssmlGender: "MALE" },
      audioConfig: { audioEncoding: "MP3" }
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    const apiKey = process.env.GOOGLE_API_KEY;
    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      options
    );

    if (!response.ok) {
      throw new Error(`Error with the Text-to-Speech API: ${response.statusText}`);
    }

    const responseData = await response.json();
    const audioContent = responseData.audioContent;
    const audioBase64 = `data:audio/mp3;base64,${audioContent}`;
    setAudioSrc(audioBase64);
  } catch (error) {
    setErrorMessage("Failed to load audio. Please try again later.");
  }
};

const compareAnswer = (inputValue, correctAnswer) => {
  const inputWords = inputValue.toLowerCase().split(" ");
  const correctWords = correctAnswer.map(word => word.toLowerCase());
  return correctAnswer.map((word, index) => {
    if (correctWords[index] !== inputWords[index]) {
      return (
        <span key={index} className="text-text-wrong ml-1">
          {word}
        </span>
      );
    } else {
      return (
        <span key={index} className="text-text-correct ml-1">
          {word}
        </span>
      );
    }
  });
};

useEffect(() => {
  const cookieRounds = getCookie("rounds");
  const expirationDate = new Date(getCookie("expirationDate"));
  const now = new Date();

  if (cookieRounds && expirationDate > now) {
    setRounds(+cookieRounds);
    const storedStep = localStorage.getItem("currentStep");
    const storedCorrectCount = localStorage.getItem("correctCount");
    if (storedStep) {
      setCurrentStep(parseInt(storedStep));
    }
    if (storedCorrectCount) {
      setCorrectCount(parseInt(storedCorrectCount));
    }
  } else {
    setRounds(0);
    setCurrentStep(0);
    setCorrectCount(0);
    localStorage.removeItem("currentStep");
    localStorage.removeItem("correctCount");
    setCookie("rounds", "0", { expires: new Date(now.getTime() + 24 * 60 * 60 * 1000) });
    setCookie("expirationDate", new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(), {
      expires: new Date(now.getTime() + 24 * 60 * 60 * 1000)
    });
  }

  fetchRandomPhrase();
}, []);

const handleChange = e => {
  setInputValue(e.target.value);
};

const handleSubmit = e => {
  e.preventDefault();
  const newCorrections = compareAnswer(inputValue.trim(), randomPhrase.split(" "));
  setCorrections(prevCorrections => [...prevCorrections, newCorrections]);
  setUserResponses(prevResponses => [...prevResponses, inputValue.trim()]);

  const isCorrect = newCorrections.every(correction =>
    correction.props.className.includes("text-text-correct")
  );
  if (isCorrect) {
    setCorrectCount(prev => prev + 1);
    localStorage.setItem("correctCount", (correctCount + 1).toString());
  }

  setInputValue("");

  if (rounds + 1 === 5) {
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    const now = new Date();
    setCookie("rounds", `${rounds + 1}`, {
      expires: new Date(now.getTime() + ONE_DAY_MS)
    });
    setCookie("expirationDate", new Date(now.getTime() + ONE_DAY_MS).toISOString(), {
      expires: new Date(now.getTime() + ONE_DAY_MS)
    });
    setRounds(prev => prev + 1);
    setShowShareProgress(true);
  } else {
    setRounds(prevRounds => prevRounds + 1);
    fetchRandomPhrase();
  }

  const newStep = currentStep + 1;
  setCurrentStep(newStep);
  localStorage.setItem("currentStep", newStep.toString());
};

const handleShareProgress = () => {
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  const now = new Date();

  setCookie("rounds", `${rounds + 1}`, {
    expires: new Date(now.getTime() + ONE_DAY_MS)
  });
  setCookie("expirationDate", new Date(now.getTime() + ONE_DAY_MS).toISOString(), {
    expires: new Date(now.getTime() + ONE_DAY_MS)
  });
  const tweetText = `I just used TechEars to practice my English ✨, I got ${correctCount} phrases correctly! Join me at: tech-ears.vercel.app`;
  const twitterUrl = `https://twitter.com/compose/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(twitterUrl, "_blank");
};

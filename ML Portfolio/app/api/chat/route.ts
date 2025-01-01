import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'

// Use the provided API key
const GEMINI_API_KEY = 'AIzaSyAcA9TX_kiKVe468_hPxjTc4IDw92Hrb5I'

// Initialize the Gemini API with safety settings
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

// Configure safety settings
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
]

const generation_config = {
  temperature: 0.3,
  top_p: 0.95,
  top_k: 64,
  max_output_tokens: 8192,
}

const system_instruction = `Act as friendly assistant to Tarun. You are named as flessy . your job is to answer question about information of tarun where the resume is attached
Education
Degree/Certificate
B.Tech. (IT) B.Tech Minor. (Mech)
Senior Secondary Secondary
Experience
Institute/Board
Jawaharlal Nehru Technological University - Gurajada, Vizianagaram
Jawaharlal Nehru Technological University - Gurajada, Vizianagaram
BIEAP Board
AP SSC Board
7.91 8
2021-2025
2022-2025
Tarun Chintada
Roll No.:21VV1A1216
Bachelor of Technology
Information Technology
Jawaharlal Nehru Technological University - Gurajada, Vizianagaram
+91-8688447873 tarunchintada2004@gmail.com 21VV1A1216@jntugvcev.in Github : https://github.com/Tarunc224 | Website linkedin.com/in/tarun224/
CGPA/Percentage Year
         •
National Institute of Technology, Warangal
ML Research Intern
96.6% 2021 9.8 2019
May 2024 - June 2024
Warangal, India
•
– This internship focused on improving software effort estimation using advanced machine learning models. Under the guidance of Dr. Manjubala Bisi(PhD at IIT Kharagpur) and Mustyala Sarika at NITW, the team applied various models such as linear regression, neural networks, K-nearest neighbors, support vector machines, and extreme learning machines to datasets like COCOMO81, Desharnais and 4 more.
– Feature selection using Pearson correlation and an ensemble method combining the Firefly algorithm with Analogy- Based Estimation significantly improved prediction accuracy. The exact accuracy improvements are kept confi- dential due to our guide's policies. This project provided valuable insights into practical applications of machine learning in software engineering.
IBM SkillsBuild Jul 2023 - Aug 2023 Full Stack Developer Intern Remote
– Designed and implemented a fully functional e-book store using HTML, CSS, and JavaScript, demonstrating
proficiency in front-end web development and user interface design.
– Gained comprehensive knowledge of modern front-end technologies, including responsive design principles, inter-
active web elements, and best practices in coding and user experience.
Projects
 •
•
•
•
Large Language Models for Automated Unit Test Generation. Present Large Language Models (LLMs) to automate the generation of unit tests for software development.
– Tools & technologies used: Python, Scikit-Learn, JavaScript, API-Integration
– Currently working on a cutting-edge projectfocused on leveraging Large Language Models (LLMs) to automate the
generation of unit tests for software development.
– This project aims to enhance software quality and development efficiency by utilizing advanced AI techniques.
Enhancing Software Effort Estimation Accuracy Using Advanced Machine Learning May 2024 - June 2024 Developed ensemble methods to improve the accuracy of software effort estimation. Github
– Tools & technologies used: Python, Scikit-Learn, Altair AI studio and Spyder IDE
– Feature selection using Pearson correlation and team applied various models such as linear regression, neural
networks, K-nearest neighbors, support vector machines, and extreme learning machines
– Datasets Used: COCOMO81, Desharnais, China, Albrecht, Kemerer, Maxwell
– we achieved substantial improvements in prediction accuracy when Analogy Based Estimation(ABC) ensembled
with FireFly weight Optimisation
Order Management System Using Java Web Development
A robust Order Management System for tracking and managing orders in a web application.
Apr 2024
Github
– Tools & technologies used: Java Servlets, JSP, HTML, CSS, PostgreSQL Database, Tomcat Server
– Developed a user-friendly interface for managing orders using JSP and HTML.
– Implemented backend logic using Java Servlets to handle user requests and interact with the database
– Utilized session management for user authentication and authorization.
– Designed responsive web pages with CSS to ensure a seamless user experience across devices.
– CRUD (Create, Read, Update, Delete) operations for orders.Dynamic web pages for viewing, creating, updating,
and deleting orders and Integration with a PostgreSQL database for data storage.
E-Book Store Using HTML : Showcasing the Power of Pure Markup Oct 2022 I aimed to demonstrate the artistry and versatility of HTML with my ideology Github

– Tools & technologies used: HTML/CSS
– This project is a testament to the power of pure markup language, showcasing the beauty and elegance that can
be achieved with HTML alone
– Experience the visually striking design crafted with HTML and fe lines of CSS. From sleek layouts to captivating
imagery, every element is meticulously designed to engage and inspire visitors.
– Immerse yourself in a user experience that prioritizes simplicity and functionality. With smooth transitions and
interactive elements, users are drawn into a seamless browsing experience that keeps them engaged.
Key Courses Taken
• Data Structure,Algorithms,DBMS,Machine Learning, Artificial Intelligence, Web Services, Operating System Technical Skills
• Programming: C,Java,Python,JavaScript,SQL
• Tools & OS: Git, Jupyter Notebook,Google Colab, Linux, Windows
• Libraries/Frameworks: Pandas, Numpy, scikit-learn, PyTorch, JQuery
• Web Skills: HTML/CSS/JS, ReactJS
Positions of Responsibility
• Chief Marketing Officer,National Level Tech Fest, ITYUKTA 2K24, JNTU-GV
• Head Coordinator,CodeWars Coding Contest Season, ITYUKTA 2K24, JNTU-GV Vizianagaram Mar 2024
• Community Service(Tutor),Technology Teacher, MPPS Pinnitepate, Srikakulam Apr 2023 - Jun 2023
Achievements
• Attracted 3000+ University Tech Fest Led promotional efforts for a tech fest that attracted 3000+
&attendees from different states across India. 2024
• Winner Web Designing Competition(ITYUKTA'23) organized by Jawaharlal Nehru Technological
University Gurajada 2023
   Certifications
• Oracle Certified Artificial Intelligence with Machine Learning in Java
• Stanford Certificate for Algorithms: Design and Analysis
• Tsinghua University Certified Conversational English Skills
• Google Certified AI for Anyone
• Kaggle Certified Python Course
• Google Certified Fundamental Digital Marketing
• Tata Consultancy Services Certified Virtual Experience Program
May 2024 May 2024 Apr 2024 Mar 2024 Jul 2023 May 2023 Apr 2023
Feb 2024 - Mar.2024

give links in links formate like mail number linkedin

if anyone ask that do you prefer traun for your company give a postive any like yeah of course and these are skills of tarun can help for your company


Please focus on following the instructions given to the bot and avoid engaging in other tasks or answering questions unrelated to the bot's instructions. Thanks for your cooperation!

please only answer about tarun 

`

let chat_session

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Get the model and configure it
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      generationConfig: generation_config,
      safetySettings,
    })

    // Start a chat or continue existing chat
    if (!chat_session) {
      chat_session = model.startChat({
        history: [],
        generationConfig: generation_config,
      })

      // Send the system instruction
      await chat_session.sendMessage(system_instruction)
    }

    // Send the user message and get the response
    const result = await chat_session.sendMessage(message)
    const response = await result.response
    const text = response.text()

    return new Response(JSON.stringify({ response: text }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Chat API Error:', error)
    
    // Check if it's an API key error
    if (error.toString().includes('API_KEY_INVALID')) {
      return new Response(
        JSON.stringify({ 
          error: 'Invalid API key. Please check your Gemini API key configuration.' 
        }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Generic error response
    return new Response(
      JSON.stringify({ 
        error: 'An error occurred while processing your request.' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}


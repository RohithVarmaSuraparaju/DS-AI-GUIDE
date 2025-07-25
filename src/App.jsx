import { useState } from 'react'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { CompanyCard } from './components/CompanyCard'
import { ProjectCard } from './components/ProjectCard'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { CheckCircle, Users, Briefcase, TrendingUp, Globe, BookOpen } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('introduction')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const companyData = {
    google: {
      company: "Google (Alphabet Inc.)",
      requirements: {
        education: "Master's or PhD in Computer Science, AI, ML, or related quantitative field",
        experience: "2+ years for Software Engineer III, varies by role",
        skills: ["Python", "C++", "Java", "TensorFlow", "GCP", "NLP", "Computer Vision", "Generative AI", "Deep Learning"]
      },
      takeaways: [
        "Master's degree is often minimum qualification, PhD preferred for research roles",
        "Strong programming skills in Python, C++, and Java are crucial",
        "Deep understanding of ML/AI algorithms, especially generative AI and deep learning",
        "Familiarity with cloud platforms (GCP) and ML frameworks (TensorFlow) is advantageous",
        "Project experience demonstrating deployment of AI/ML solutions is important"
      ]
    },
    amazon: {
      company: "Amazon",
      requirements: {
        education: "Not explicitly specified, but strong technical background implied",
        experience: "Varies by role, focus on practical application",
        skills: ["Data Modeling", "Machine Learning", "Large-scale Data", "Customer Analytics", "Business Impact"]
      },
      takeaways: [
        "Strong emphasis on turning data into actionable insights",
        "Experience with large-scale data and customer-centric problem-solving",
        "Focus on business impact and practical application of ML",
        "Ability to work with challenging projects using real-life data"
      ]
    },
    microsoft: {
      company: "Microsoft",
      requirements: {
        education: "Master's + 7 years OR Bachelor's + 10 years OR PhD + 5 years in data science",
        experience: "3+ years in hypothesis testing, p-values, and experiment design",
        skills: ["SQL", "Python", "C#", "Java", "Statistical Analysis", "Hypothesis Testing", "Experiment Design"]
      },
      takeaways: [
        "Master's degree is strong foundation, but significant experience required for senior roles",
        "Strong statistical foundations (hypothesis testing, p-values, experiment design) are critical",
        "Proficiency in SQL, Python, C#, or Java is highly desired",
        "Focus on practical application of data science for business impact"
      ]
    },
    apple: {
      company: "Apple",
      requirements: {
        education: "Strong foundation in ML/AI concepts",
        experience: "Varies by role, emphasis on practical application",
        skills: ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "Large-scale Data", "Performance Optimization"]
      },
      takeaways: [
        "Strong foundation in core ML/AI concepts including deep learning, NLP, computer vision",
        "Interdisciplinary skills highly valued, spanning engineering, research, and data science",
        "Focus on practical application and integration of ML/AI into products",
        "Experience with large-scale data and computational performance is crucial"
      ]
    },
    meta: {
      company: "Meta (Facebook)",
      requirements: {
        education: "Bachelor's degree or equivalent, Master's/PhD preferred",
        experience: "4+ years in applied analytics, 2+ years managing teams (for manager roles)",
        skills: ["SQL", "Python", "R", "Statistical Analysis", "Large Datasets", "Product Analytics", "Leadership"]
      },
      takeaways: [
        "Master's degree is preferred, but Bachelor's with sufficient experience also considered",
        "Strong technical skills in SQL, Python/R are essential",
        "Emphasis on leadership, project management, and communication skills",
        "Experience with large datasets and solving real-world business problems is highly valued",
        "Understanding of product strategy and ability to influence decisions with data is crucial"
      ]
    }
  }

  const projectData = [
    {
      title: "Generative AI for Content Creation/Summarization",
      concept: "Develop a project that leverages large language models (LLMs) or other generative AI techniques to create or summarize content. This directly addresses the growing demand for Generative AI skills seen at companies like Google and Meta.",
      skills: ["NLP", "Deep Learning", "LLMs", "Transformers", "Python", "TensorFlow/PyTorch", "API Integration", "Cloud Deployment"],
      ideas: [
        {
          title: "News Article Summarizer",
          description: "Build a system that takes a news article as input and generates a concise summary. Explore different summarization techniques (extractive vs. abstractive) and evaluate their performance."
        },
        {
          title: "Creative Writing Assistant",
          description: "Develop an AI that can generate short stories, poems, or marketing copy based on user prompts. Focus on coherence and creativity."
        },
        {
          title: "Code Comment Generator",
          description: "Create a tool that automatically generates comments for Python code functions, demonstrating understanding of code structure and context."
        }
      ]
    },
    {
      title: "Computer Vision for Real-world Applications",
      concept: "Implement a computer vision project that solves a practical problem, showcasing your ability to work with image and video data.",
      skills: ["Computer Vision", "Deep Learning", "CNNs", "Object Detection", "Python", "OpenCV", "TensorFlow/PyTorch", "Image Preprocessing"],
      ideas: [
        {
          title: "Defect Detection in Manufacturing",
          description: "Train a model to identify defects in product images (e.g., circuit boards, textiles). This highlights practical application in an industrial setting."
        },
        {
          title: "Traffic Sign Recognition System",
          description: "Develop a system that can accurately identify various traffic signs from images or video frames. Consider real-time processing challenges."
        },
        {
          title: "Plant Disease Detection",
          description: "Build an image classification model to identify common plant diseases from leaf images, demonstrating application in agriculture."
        }
      ]
    },
    {
      title: "Predictive Analytics for Business Optimization",
      concept: "Create a project focused on building predictive models to optimize business processes or outcomes. This aligns with the data-driven decision-making emphasis at Amazon and Microsoft.",
      skills: ["Supervised Learning", "Feature Engineering", "Model Selection", "Python/R", "scikit-learn", "Pandas", "NumPy", "SQL", "Data Visualization"],
      ideas: [
        {
          title: "Customer Churn Prediction",
          description: "Predict which customers are likely to churn for a subscription service. Analyze factors contributing to churn and suggest retention strategies."
        },
        {
          title: "Sales Forecasting",
          description: "Build a model to forecast future sales for a retail business, considering seasonality, promotions, and external factors."
        },
        {
          title: "Fraud Detection",
          description: "Develop a system to identify fraudulent transactions in financial data. Focus on imbalanced datasets and appropriate evaluation metrics."
        }
      ]
    },
    {
      title: "Recommendation Systems",
      concept: "Implement a recommendation system, a core component of many tech products (e.g., Amazon, Netflix, Meta).",
      skills: ["Collaborative Filtering", "Content-Based Filtering", "Hybrid Models", "Matrix Factorization", "Python", "Surprise Library", "Evaluation Metrics"],
      ideas: [
        {
          title: "Movie/Book Recommender",
          description: "Build a system that recommends movies or books to users based on their past preferences and similar users."
        },
        {
          title: "Product Recommendation Engine",
          description: "For an e-commerce platform, recommend products to users based on their browsing history and purchase patterns."
        },
        {
          title: "News Article Recommender",
          description: "Personalize news feeds for users based on their reading habits."
        }
      ]
    },
    {
      title: "Time Series Analysis and Forecasting",
      concept: "Develop a project that involves analyzing and forecasting time-dependent data, relevant for various applications from finance to operations.",
      skills: ["Time Series Analysis", "ARIMA", "Prophet", "LSTM", "Stationarity", "Seasonality", "Python", "Pandas", "Statistical Modeling"],
      ideas: [
        {
          title: "Stock Price Prediction",
          description: "Forecast stock prices using historical data. (Note: Emphasize that this is for demonstration of skills, not financial advice)."
        },
        {
          title: "Energy Consumption Forecasting",
          description: "Predict future energy consumption for a city or building, considering weather data and historical patterns."
        },
        {
          title: "Website Traffic Forecasting",
          description: "Forecast future website traffic to help with resource allocation and marketing strategies."
        }
      ]
    }
  ]

  const bestPractices = [
    {
      title: "Quality over Quantity",
      description: "Focus on a few high-quality, well-documented projects rather than many superficial ones. Showcase your best work that demonstrates a range of skills.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      title: "Real-world Problems",
      description: "Choose projects that solve real-world problems or address business needs. Avoid common datasets like Titanic or Iris.",
      icon: <Globe className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Storytelling and Communication",
      description: "Each project should tell a clear story, from problem definition to solution and impact. Explain your thought process clearly.",
      icon: <BookOpen className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Technical Skills Demonstration",
      description: "Showcase proficiency in relevant programming languages, libraries, frameworks, and tools. Deploy projects when possible.",
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <div className="w-80 flex-shrink-0">
          <Navigation 
            activeSection={activeSection} 
            onSectionClick={scrollToSection} 
          />
        </div>
        
        <main className="flex-1 p-8 max-w-4xl">
          <section id="introduction" className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
              <h1 className="text-3xl font-bold mb-4">
                Comprehensive Data Science and AI Portfolio Guide
              </h1>
              <p className="text-xl opacity-90">
                For Master's Students Targeting Top Tech Companies
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                This guide is designed to assist Master's students in Data Science and Artificial Intelligence 
                in creating a compelling portfolio that stands out to top tech companies. It synthesizes insights 
                from industry job requirements and best practices for portfolio development, providing a roadmap 
                for showcasing your skills and projects effectively.
              </p>
            </div>
          </section>

          <section id="companies" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top Tech Companies and Their DS/AI Requirements
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                "Google", "Amazon", "Microsoft", "Apple", "Meta", "Netflix", "OpenAI", "IBM", "Stripe", "Airbnb",
                "Capital One", "Cisco", "Deloitte", "Accenture", "Grammarly", "Coinbase", "Walmart", "PwC", "John Deere", "Hinge"
              ].map((company) => (
                <Badge key={company} variant="outline" className="text-center py-2">
                  {company}
                </Badge>
              ))}
            </div>

            <div id="google">
              <CompanyCard {...companyData.google} />
            </div>
            
            <div id="amazon">
              <CompanyCard {...companyData.amazon} />
            </div>
            
            <div id="microsoft">
              <CompanyCard {...companyData.microsoft} />
            </div>
            
            <div id="apple">
              <CompanyCard {...companyData.apple} />
            </div>
            
            <div id="meta">
              <CompanyCard {...companyData.meta} />
            </div>
          </section>

          <section id="best-practices" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Data Science and AI Portfolio Best Practices
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {bestPractices.map((practice, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      {practice.icon}
                      <span className="ml-3">{practice.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{practice.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">Key Considerations for Master's Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <strong>Leverage academic projects:</strong> Transform university projects into portfolio pieces by focusing on real-world application and clear communication of impact.
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <strong>Highlight internship experience:</strong> Emphasize your contributions and the technologies used in any internship projects.
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <strong>Focus on depth:</strong> While diversity is good, demonstrating deep understanding in key areas relevant to DS/AI roles is crucial.
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <strong>Showcase problem-solving:</strong> Recruiters look for your ability to approach and solve complex problems, not just run algorithms.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="structure" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Portfolio Structure & Project Recommendations
            </h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recommended Portfolio Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">1. Homepage/About Me</h4>
                    <p className="text-sm text-gray-600">
                      A concise introduction to who you are, your academic background (Master's in DS/AI), 
                      career aspirations, and key skills overview.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">2. Project Showcase</h4>
                    <p className="text-sm text-gray-600">
                      The core of your portfolio. Each project should include: problem statement, data source, 
                      methodology, results, challenges, future work, code repository, and live demo if possible.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">3. Skills Section</h4>
                    <p className="text-sm text-gray-600">
                      Technical skills (programming languages, libraries, tools, cloud platforms) and 
                      soft skills (communication, problem-solving, teamwork).
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">4. Resume/CV & Contact</h4>
                    <p className="text-sm text-gray-600">
                      Link to updated resume/CV and clear contact information for recruiters.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div id="project-recommendations">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Project Recommendations
              </h3>
              <p className="text-gray-700 mb-6">
                These project ideas are designed to showcase a diverse range of Data Science and AI skills, 
                aligning with the requirements observed in top tech companies. They emphasize real-world 
                applications, complex problem-solving, and the use of advanced techniques.
              </p>
              
              {projectData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            <Card className="bg-green-50 border-green-200 mt-8">
              <CardHeader>
                <CardTitle className="text-green-800">General Advice for Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <strong>Start with a clear problem:</strong> Define the problem you're trying to solve before diving into data.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <strong>Clean and explore data thoroughly:</strong> This is a significant part of any data science project.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <strong>Document everything:</strong> From data sources to model choices and evaluation metrics.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <strong>Focus on insights and impact:</strong> Don't just build a model; explain what you learned and how your solution can be used.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <strong>Use version control:</strong> Use Git and GitHub for all your projects.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <strong>Seek feedback:</strong> Share your projects with peers and mentors for constructive criticism.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-center text-gray-600">
              <p className="mb-2">
                By focusing on these types of projects and adhering to the recommended structure, 
                a Master's student can build a compelling portfolio that stands out to top tech companies 
                in the Data Science and AI domain.
              </p>
              <p className="text-sm">
                Created with ❤️ for aspiring Data Scientists and AI Engineers
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App


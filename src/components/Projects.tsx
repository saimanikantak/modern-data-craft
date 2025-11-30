import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import dataPipelineImg from "@/assets/project-data-pipeline.jpg";
import mlSystemImg from "@/assets/project-ml-system.jpg";
import cicdImg from "@/assets/project-cicd.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";

const Projects = () => {
  const projects = [
    {
     title: "Cloud-Based Data Analytics Pipeline with AWS",
  description: "Designed and deployed a fully automated data pipeline using AWS services to process streaming and batch datasets. Leveraged AWS Glue for ETL, S3 for data storage, and Athena for querying processed data. Built interactive dashboards in Amazon QuickSight to visualize KPIs and business insights in real time.",
  tags: ["AWS S3", "AWS Glue", "AWS Lambda", "AWS Athena", "AWS QuickSight", "Python", "ETL", "Data Pipeline"],
       image: mlSystemImg,
  github: "#",
  demo: "#"
    },
    {
      title: "ML Prediction System",
      description: "Developed a machine learning model for predictive analytics with 92% accuracy, deployed using Docker and Kubernetes for scalability.",
      tags: ["Python", "TensorFlow", "Docker", "Kubernetes"],
      image: mlSystemImg,
      github: "#",
      demo: "#"
    },
    {
  title: "Customer Churn Analysis & Business Strategy",
  description: "Performed root cause analysis on customer churn data using SQL and analytical frameworks. Delivered KPIs, stakeholder report, and recommendations that could potentially reduce churn by 18% based on pattern analysis and segmentation insights.",
  tags: ["Business Analytics", "SQL", "Excel", "KPIs", "Requirement Documentation"],
       image: mlSystemImg,
  github: "#",
  demo: "#"
},
    {
  title: "Customer Behavior Prediction Model",
  description: "Developed and deployed a machine learning model to predict customer churn using classification algorithms. Implemented data preprocessing, feature engineering, and model evaluation with real-world deployment using Streamlit.",
  tags: ["Python", "Machine Learning", "Scikit-Learn", "EDA", "Streamlit "],
      image: mlSystemImg,
  github: "#",
  demo: "#"
}

  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing data engineering, ML, and analytic Expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 px-6 pb-6">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-gradient-primary"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

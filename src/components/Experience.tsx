import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electronic & Communication Engineering",
      institution: "Sagi Rama Krishnam Raju Engineering College, Bhimavaram",
      year: "2020 - 2024",
      description:"Completed coursework in SQL, Python, data modeling, statistics, cloud computing, and database management systems. Gained hands-on experience in working with datasets, building ETL workflows, performing data analysis, and visualizing insights using tools like Excel, Power BI, and Python libraries."

    }
  ];

  const experience = [
    {
      title: " Quality Associate",
      company: "Amazon",
      duration: " june 2025 - present",
      description: "Working as a Quality Associate in the LMAQ team at Amazon, where I review, validate, and analyze large datasets to ensure high accuracy standards. Utilize SQL, Excel, and internal analytical tools to track metrics, identify patterns, and uncover root causes of data inconsistencies. Contribute to process optimization by generating reports, monitoring KPIs, and providing data-driven insights to improve workflow efficiency and reduce error rates."

    },
    
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-slide-in"
              >
                <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                <p className="text-primary mb-2">{edu.field}</p>
                <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mb-3">{edu.year}</p>
                <p className="text-foreground/80 leading-relaxed">{edu.description}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>

            {experience.map((exp, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                <p className="text-primary mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-3">{exp.duration}</p>
                <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

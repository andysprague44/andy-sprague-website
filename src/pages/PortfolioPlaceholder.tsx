import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Driven Media Asset Management",
      description: "Built a comprehensive pipeline with face recognition and transcription capabilities for automatic media organization and searchability.",
      image: "/placeholder.svg",
      tech: ["Python", "FastAPI", "OpenCV", "AWS", "Machine Learning"],
      category: "AI/ML",
      year: "2025",
      status: "Live",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Climate Risk Portfolio Engine",
      description: "End-to-end risk aggregation platform reducing analysis time from 1 week to 30 minutes. Processes high-volume climate and energy market data.",
      image: "/placeholder.svg",
      tech: ["Azure", "Databricks", "Python", "Spark", "SQL"],
      category: "FinTech",
      year: "2023",
      status: "Enterprise",
      links: {
        case_study: "#"
      }
    },
    {
      id: 3,
      title: "Renewable Energy Pricing System",
      description: "Scalable pricing API and UI that reduced renewable energy deal pricing time from 3 days to 15 minutes.",
      image: "/placeholder.svg",
      tech: ["C#", "ServiceStack", "React", "Azure", "SQL Server"],
      category: "CleanTech",
      year: "2022",
      status: "Production",
      links: {
        case_study: "#"
      }
    },
    {
      id: 4,
      title: "Real-time ETL Data Pipeline",
      description: "Re-architected AWS data pipelines to refresh every 15 minutes vs daily, enabling faster business decisions and saving $2K monthly.",
      image: "/placeholder.svg",
      tech: ["AWS", "Python", "Lambda", "DynamoDB", "CloudWatch"],
      category: "Data Engineering",
      year: "2023",
      status: "Optimized",
      links: {
        github: "#"
      }
    },
    {
      id: 5,
      title: "ML Matching Algorithm Optimization",
      description: "Optimized apartment matching algorithm reducing latency by 50% and improving user experience for millions of renters.",
      image: "/placeholder.svg",
      tech: ["Python", "TensorFlow", "AWS", "Redis", "PostgreSQL"],
      category: "AI/ML",
      year: "2024",
      status: "Live",
      links: {
        case_study: "#"
      }
    },
    {
      id: 6,
      title: "Custom Business Websites",
      description: "Three responsive, modern websites for local business, non-profit, and climate campaign with custom CMS integration.",
      image: "/placeholder.svg",
      tech: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase"],
      category: "Web Development",
      year: "2025",
      status: "Live",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const categories = ["All", "AI/ML", "FinTech", "CleanTech", "Data Engineering", "Web Development"];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Work</h1>
          <p className="text-xl text-muted-foreground mb-12">
            A showcase of projects that demonstrate my ability to build scalable, 
            impactful solutions across different domains.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 border-border/50 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-primary overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/80 text-6xl font-bold">
                        {project.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-white/20 text-white border-white/30"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.links.demo && (
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </Button>
                      )}
                      {project.links.github && (
                        <Button size="sm" variant="outline" className="flex-1">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.links.case_study && (
                        <Button size="sm" variant="outline" className="flex-1">
                          <Tag className="h-3 w-3 mr-1" />
                          Case Study
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technologies I Work With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { name: "Python", projects: "5 projects" },
                { name: "AWS", projects: "4 projects" },
                { name: "React", projects: "3 projects" },
                { name: "Machine Learning", projects: "3 projects" },
                { name: "Azure", projects: "3 projects" },
                { name: "FastAPI", projects: "2 projects" },
                { name: "TypeScript", projects: "2 projects" },
                { name: "Databricks", projects: "2 projects" },
              ].map((tech) => (
                <div key={tech.name} className="text-center">
                  <div className="text-lg font-semibold">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.projects}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              I'm always excited to discuss new opportunities and challenging projects.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="mailto:andy.sprague44@gmail.com">
                Start a Conversation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
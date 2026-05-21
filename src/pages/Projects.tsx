import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const projects = [
  {
    name: "Checklark",
    url: "https://checklark.com",
    description: "Agentic workflow that surfaces conferences and events for PR professionals to find relevant speaking opportunities for their clients.",
    tags: ["Agentic AI", "LLM Workflows", "Public Relations"],
    color: "text-primary",
  },
  {
    name: "Golfaluma",
    url: "https://golfaluma.com",
    description: "Real-time group messaging PWA for coordinating casual golf rounds with friends — tee time scheduling, player invites, and round tracking.",
    tags: ["PWA", "Real-time Messaging", "TypeScript"],
    color: "text-secondary",
  },
  {
    name: "International House Association",
    url: "https://www.ih-assoc.org/",
    description: "Marketing website for a non-profit fostering a global community committed to peacebuilding, cultural exchange, and intellectual collaboration.",
    tags: ["Non-profit", "Marketing", "React"],
    color: "text-accent",
  },
  {
    name: "Pollution Free India",
    url: "https://www.pollutionfreeindia.org/",
    description: "Grassroots campaign site demanding action on Delhi air pollution — uses AI to generate a personalised email for visitors to send directly to the Delhi Chief Minister.",
    tags: ["Climate", "AI", "Civic Tech"],
    color: "text-warm-accent",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="container mx-auto px-4 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Side Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Things I've built outside of work — tools, campaigns, and communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ name, url, description, tags, color }, index) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="block"
              >
                <Card className="h-full hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`text-xl font-bold ${color} group-hover:underline underline-offset-2`}>{name}</h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;

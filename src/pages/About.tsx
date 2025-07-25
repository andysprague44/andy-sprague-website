import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown, ExternalLink, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const jobs = [
    {
      id: "apartmentlist",
      title: "Staff Software Engineer",
      company: "apartmentlist.com",
      period: "Sep 2024-Present",
      location: "USA Remote",
      color: "bg-primary",
      achievements: [
        { text: "Reduced latency of flagship AI/ML matching algorithm by 50%", impact: "3s → 1.5s", metric: "50% faster" },
        { text: "Added 6 urgency signals driving increased revenue per user", impact: "+1.4%", metric: "Revenue boost" },
        { text: "Introduced technical design docs and agile workflows", impact: "Team efficiency", metric: "Process improvement" },
      ],
      responsibilities: [
        "Collaborated with data science and MLOps teams to improve self-serve ML pipelines",
        "Mentored engineers in adopting new workflows and LLM usage best practices",
        "Optimized system uptime and SLO performance"
      ]
    },
    {
      id: "ecocart",
      title: "Senior Software Engineer",
      company: "EcoCart",
      period: "Nov 2023-Dec 2023",
      location: "USA Remote",
      color: "bg-secondary",
      note: "Impacted by 30% reduction in force",
      achievements: [
        { text: "Re-built data ETL pipelines in AWS", impact: "Daily → 15min", metric: "96x faster" },
        { text: "Cost optimization through improved architecture", impact: "$2,000/month", metric: "10% AWS savings" },
      ],
      responsibilities: [
        "Provided comprehensive technology assessment report",
        "Improved systems, security, and agile practices",
        "Enabled faster business decision making through real-time data"
      ]
    },
    {
      id: "nephila-lead",
      title: "Technology Lead",
      company: "Nephila Climate",
      period: "Feb 2018-Aug 2023",
      location: "San Francisco CA",
      color: "bg-accent",
      achievements: [
        { text: "Improved project completion and user adoption rates", impact: "5x improvement", metric: "Delivery excellence" },
        { text: "Portfolio risk aggregation engine", impact: "1 week → 30min", metric: "Time savings" },
        { text: "Renewable energy pricing system", impact: "3 days → 15min", metric: "Process automation" },
      ],
      responsibilities: [
        "Owned strategic technology and research planning",
        "Orchestrated end-to-end project lifecycles with agile methodologies",
        "Mentored junior engineers, data scientists, and research analysts",
        "Led migration to Azure cloud from on-premise infrastructure",
        "Designed cloud data strategy and lakehouse for high-volume data processing"
      ]
    },
    {
      id: "nephila-analyst",
      title: "Analyst Developer",
      company: "Nephila Advisors",
      period: "Jun 2015-Feb 2018",
      location: "San Francisco CA",
      color: "bg-warm-accent",
      achievements: [
        { text: "Risk aggregation platform on Azure Synapse Analytics", impact: "60x faster", metric: "Runtime improvement" },
        { text: "Spark/Cassandra big-data system for 1+ TB data", impact: "Scalable processing", metric: "Enterprise scale" },
      ],
      responsibilities: [
        "Lead developer for green-field risk aggregation platform",
        "Core developer of big-data system for MGA submissions",
        "Built Nephila's first cloud solution"
      ]
    },
    {
      id: "ubs",
      title: "Business Analyst/Developer",
      company: "UBS Investment Bank IT",
      period: "Sep 2012-Jun 2015",
      location: "London UK",
      color: "bg-muted",
      achievements: [
        { text: "Reduced support costs through incident reduction", impact: "13% reduction", metric: "Cost savings" },
        { text: "Coordinated migrations with zero downtime", impact: "100+ traders", metric: "Seamless transition" },
      ],
      responsibilities: [
        "Managed overnight processing of all IB risk positions using 10,000 node grid",
        "Coordinated migrations from unsupported vendor technologies",
        "Maintained critical trading infrastructure"
      ]
    }
  ];

  const skills = {
    "Languages": [
      { name: "Python", level: 95 },
      { name: "Go", level: 85 },
      { name: "Ruby", level: 80 },
      { name: "C#", level: 75 },
      { name: "Scala", level: 70 },
      { name: "Java", level: 70 }
    ],
    "Cloud & Data": [
      { name: "AWS", level: 90 },
      { name: "Databricks", level: 85 },
      { name: "Docker", level: 85 },
      { name: "Terraform", level: 80 },
      { name: "BigQuery", level: 75 },
      { name: "Azure", level: 75 }
    ]
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Petaluma, CA, 94952</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>andy.sprague44@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>707-753-0151</span>
            </div>
          </div>
          
          <Card className="mb-12">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                An experienced technology professional with a passion for meaningful work that drives positive change, 
                bringing 15 years of expertise in climate and financial services technology. Able to move fast in 
                dynamic startup environments by taking a pragmatic approach to project delivery, using critical 
                thinking to break down complex problems and find creative solutions without over-engineering. 
                Has strong communication skills to enable effective collaboration with senior management, 
                stakeholders, and team members alike.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skillList.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-3 h-3 rounded-full ${job.color}`}></div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <span className="font-medium">{job.company}</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        {job.note && (
                          <Badge variant="outline" className="mt-2">
                            {job.note}
                          </Badge>
                        )}
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform ${
                          expandedJob === job.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </CardHeader>
                  
                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          {/* Key Achievements */}
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-primary" />
                              Key Achievements
                            </h4>
                            <div className="space-y-3">
                              {job.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                  <div className="flex-1">
                                    <p className="text-sm">{achievement.text}</p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-sm font-semibold text-primary">
                                      {achievement.impact}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                      {achievement.metric}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Responsibilities */}
                          <div>
                            <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Master of Physics (MPHYS), 2:1</h3>
              <p className="text-muted-foreground mb-4">Oxford University, Christ Church College, UK</p>
              <p className="text-sm leading-relaxed">
                Required strong critical thinking, analytical and reasoning skills, and the ability to learn 
                then understand complex concepts. Master's project in Astrophysics, created a C++ model 
                of the early universe to understand blazars.
              </p>
            </CardContent>
          </Card>
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
              Let's Build the Future Together
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Ready to discuss how my experience can help your startup succeed?
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="mailto:andy.sprague44@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
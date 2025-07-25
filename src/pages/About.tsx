import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown, ExternalLink, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Footer from "@/components/Footer";

const About = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const jobs = [
    {
      id: "apartmentlist",
      title: "Staff Software Engineer",
      company: "Apartment List",
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
      id: "brightwheel",
      title: "Senior Data Engineer",
      company: "Brightwheel",
      period: "Jan 2024-Sep 2024",
      location: "USA Remote",
      color: "bg-primary",
      achievements: [
        { text: "Data model which ran customer queries 3x faster, and removed the need to run a nightly batch job", impact: "3.5h -> 0h", metric: "3x faster" },
        { text: "Tripled closed wons in hubspot by reducing time taken to create the lead from 90s to 1s", impact: "3x conversion", metric: "Speed to lead" },
      ],
      responsibilities: [
        "Led cross-functional teams across software & data engineering, DevOps, and marketing ops",
        "Developed and maintained data and event-stremaing pipelines for internal data analytics, customer facing apps, and CRM integrations",
        "Stood up self-managed cloud deployments for event streaming architectures using AWS CDK"
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
      { name: "C#", level: 95 },
      { name: "Scala", level: 70 },
      { name: "Java", level: 50 }
    ],
    "Frameworks": [
      { name: "Flask (Python)", level: 85 },
      { name: "ServiceStack (C#)", level: 95 },
      { name: "Echo (Go)", level: 95 },
      { name: "Ruby on Rails", level: 95 },
      { name: "React", level: 70 },
      { name: "Express", level: 70 },
    ],
    "Deployment": [
      { name: "AWS", level: 80 },
      { name: "Azure", level: 90 },
      { name: "GCP", level: 95 },
      { name: "Databricks", level: 85 },
      { name: "Docker", level: 85 },
      { name: "Terraform", level: 70 },
    ], 
  };

  const softSkills = {
    "Soft Skills": [
      { name: "Pragmatism", level: 95 },
      { name: "Problem-solving", level: 95 },
      { name: "Analytical thinking", level: 95 },
      { name: "Effective communication", level: 90 },
      { name: "Technical leadership", level: 85 },
      { name: "Influence", level: 75 },

    ]
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="container mx-auto px-4 pt-12 pb-4">
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
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card id="about-me" className="mb-12 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-dashed border-primary/20">
              {/* Fun background elements */}
              <div className="absolute top-1/2 right-8 text-3xl opacity-10 animate-spin" style={{ animationDuration: '10s' }}>⚡</div>
              
              <CardContent className="p-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <motion.span 
                      className="text-3xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      👋
                    </motion.span>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      Hey there! Nice to meet you
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="text-xl">🎯</span>
                        <strong>Passionate problem solver</strong>
                      </span>{" "}
                      with 15 years of expertise in climate and financial services technology. 
                      I love meaningful work that drives positive change!
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="text-xl">⚡</span>
                        <strong>Speed & pragmatism</strong>
                      </span>{" "}
                      are my superpowers in dynamic startup environments. I break down complex problems 
                      and find creative solutions without over-engineering.
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="text-xl">🤝</span>
                        <strong>Collaboration enthusiast</strong>
                      </span>{" "}
                      with strong communication skills to work effectively with everyone from 
                      senior management to fellow developers.
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="mt-6 flex flex-wrap gap-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    {["Climate Tech 🌱", "Startup Velocity 🏃‍♂️", "Problem Solver 🧩", "Pragmatism 💡"].map((tag, index) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-white/70 rounded-full text-sm font-medium border border-primary/20"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 300 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Qualifications Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Climate Change",
                subtitle: "Climate For Action fellowship by terra.do",
                detail: "Fossas cohort",
                icon: "🌱",
                delay: 0.1
              },
              {
                title: "CFA Level 1",
                subtitle: "Chartered Financial Analyst",
                detail: "Investment Analysis & Portfolio Management",
                icon: "📊",
                delay: 0.2
              },
              {
                title: "ITIL V3 Foundation",
                subtitle: "IT Service Management",
                detail: "Best Practices & Frameworks",
                icon: "⚙️",
                delay: 0.3
              }
            ].map((qualification, index) => (
              <motion.div
                key={qualification.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: qualification.delay,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50/50 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl overflow-hidden group">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="text-4xl mb-4"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatDelay: 5 
                      }}
                    >
                      {qualification.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                      {qualification.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {qualification.subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {qualification.detail}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <div 
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="cursor-pointer transition-all duration-200 hover:bg-muted/50 rounded-md p-2 -m-2"
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={hoveredSkill === skill.name ? skill.level : 0} 
                          className="h-2 transition-all duration-[3000ms]" 
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Soft Skills Section */}
  <section className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills["Soft Skills"].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full cursor-pointer transition-all duration-200 hover:shadow-md"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={hoveredSkill === skill.name ? skill.level : 0} 
                      className="h-2 transition-all duration-[3000ms]" 
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container mx-auto px-4 py-6">
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
      <section className="container mx-auto px-4 py-6">
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

      <Footer />
    </div>
  );
};

export default About;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, Calendar, TrendingUp, Wrench, Layers, Lightbulb, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const About = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

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
        { text: "Ran an internal dev academy for non-technical staff, enabling cross-functional contributors to write and ship code to production", impact: "Org-wide", metric: "Engineering culture" },
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
        "Developed and maintained data and event-streaming pipelines for internal data analytics, customer facing apps, and CRM integrations",
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
        { text: "Improved project completion and user adoption rates of data science projects by applying agile methodologies", impact: "5x improvement", metric: "Delivery excellence" },
        { text: "Greenfield build of a portfolio risk aggregation engine to replace manual spreadsheets", impact: "1 week → 30min", metric: "Time savings" },
        { text: "Built a Renewable Energy Pricing System to automate deal lifecycle management", impact: "3 days → 15min", metric: "Process automation" },
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
    "Languages": ["Python", "Go", "TypeScript", "C#", "Ruby", "Scala", "Java"],
    "Data": ["Spark", "dbt", "Google Cloud Pub/Sub", "AWS Lambda", "Databricks", "BigQuery", "Redshift", "Postgres"],
    "Deployment": ["AWS", "Azure", "GCP", "Docker", "Terraform", "Kubernetes", "AWS CDK", "Vercel"],
    "AI": ["Claude Code", "Cursor", "Exa", "Firecrawl", "n8n"],
  };

  const softSkills = [
    "Influence without authority",
    "Technical strategy",
    "Engineering mentorship",
    "Cross-team alignment",
    "Design doc culture",
    "Pragmatism",
    "Analytical thinking",
    "Stakeholder communication",
  ];

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
              <span>Petaluma, CA, 94954</span>
            </div>
          </div>

          {/* Bio card */}
          <motion.div
            id="about-me"
            className="mb-12 grid grid-cols-1 md:grid-cols-[200px_1fr] border border-border rounded-xl overflow-hidden hover:shadow-elegant transition-shadow duration-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Left: facts panel */}
            <div className="bg-muted/40 border-b md:border-b-0 md:border-r border-border p-6 flex flex-col gap-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Profile</p>
              {[
                { label: "Currently", value: "Staff SWE, Apartment List" },
                { label: "Based In", value: "Petaluma, CA" },
                { label: "Industries", value: "Climate Tech · Ed Tech · Multi Family" },
                { label: "Fun fact", value: "Can solve a Rubik's cube in under 2 mins" },
              ].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-0.5">{label}</p>
                  <p className="text-sm font-medium leading-snug">{value}</p>
                </motion.div>
              ))}
            </div>

            {/* Right: prose */}
            <div className="p-6 md:p-8 flex flex-col justify-center gap-4">
              {[
                "Fifteen years building software for organizations that care about something beyond profit: climate risk, early education, and multi-family housing.",
                "Speed and pragmatism over ceremony: pragmatic solutions, shipped fast, without over-engineering.",
                "I measure success by raising the ceiling of the team around me, not just my own ticket count.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-base leading-relaxed text-foreground/80"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
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
                title: "Climate Change: Learning for Action",
                subtitle: "Fellowship by terra.do, Fossas cohort",
                detail: "Climate Change",
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
            ].map((qualification) => (
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
                    <div className="text-4xl mb-4">{qualification.icon}</div>
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
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1.5 rounded-md text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
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
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How I AI */}
      <section className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">How I AI</h2>
          <p className="text-muted-foreground mb-8">
            LLMs are a process multiplier. I use them to ship faster, think clearer, and help teams do the same.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Wrench,
                title: "How I work",
                color: "text-primary",
                points: [
                  "LLM-augmented development is core to how I ship: this site was built with Claude Code",
                  "Run careful agentic flows for well-scoped tickets end-to-end to PR, with human-in-the-loop review before merge",
                  "Use LLMs for execution, code review, architectural exploration, mental model building, and cutting through ambiguity, but not as a replacement for judgement",
                ],
                delay: 0.1,
              },
              {
                icon: Layers,
                title: "How I multiply teams",
                color: "text-secondary",
                points: [
                  "Ran a dev academy at Apartment List teaching non-technical staff to build and ship code with cursor",  
                  "Mentored engineers on practical LLM use: skills, workflows, and best practices",
                  "Introduced spec-driven development: well-defined specs unlock the full leverage of agentic tools and cut review cycles",
                ],
                delay: 0.2,
              },
              {
                icon: Lightbulb,
                title: "What I believe",
                color: "text-accent",
                points: [
                  "Engineers are not going to be replaced by AI, but engineers who do not use AI are going to be replaced by engineers who do",
                  "Curiosity and a product mindset are the most important traits for success in the age of AI: try new things, learn new things, and be willing to fail fast",
                  "Pragmatism beats hype: the question is always \"Does this make the outcome better?\", not \"Are we using AI?\"",
                ],
                delay: 0.3,
              },
            ].map(({ icon: Icon, title, color, points, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-white to-purple-50/30">
                  <CardContent className="p-6">
                    <div className={`mb-4 ${color}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-4">{title}</h3>
                    <ul className="space-y-3">
                      {points.map((p, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Side Projects */}
      <section className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Side Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Checklark",
                url: "https://checklark.com",
                description: "Agentic workflow that surfaces conferences and events for PR professionals to find relevant speaking opportunities for their clients.",
                tags: ["Agentic AI", "LLM Workflows", "Public Relations"],
                color: "text-primary",
                delay: 0.1,
              },
              {
                name: "Golfaluma",
                url: "https://golfaluma.com",
                description: "Real-time group messaging PWA for coordinating casual golf rounds with friends — tee time scheduling, player invites, and round tracking.",
                tags: ["PWA", "Real-time Messaging", "TypeScript"],
                color: "text-secondary",
                delay: 0.2,
              },
              {
                name: "International House Association",
                url: "https://www.ih-assoc.org/",
                description: "Marketing website for a non-profit fostering a global community committed to peacebuilding, cultural exchange, and intellectual collaboration.",
                tags: ["Non-profit", "Marketing", "React"],
                color: "text-accent",
                delay: 0.3,
              },
              {
                name: "Pollution Free India",
                url: "https://www.pollutionfreeindia.org/",
                description: "Grassroots campaign site demanding action on Delhi air pollution — uses AI to generate a personalised email for visitors to send directly to the Delhi Chief Minister.",
                tags: ["Climate", "AI", "Civic Tech"],
                color: "text-warm-accent",
                delay: 0.4,
              },
            ].map(({ name, url, description, tags, color, delay }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
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

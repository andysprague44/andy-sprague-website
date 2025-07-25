import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { getEmailJSConfig } from '@/config/emailjs';
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get EmailJS configuration
      const config = getEmailJSConfig();
      
      // Template parameters that will be sent to your email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'andy.sprague44@gmail.com',
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.publicKey
      );

      if (result.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try emailing me directly at andy.sprague44@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to discuss your next project? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Prefer to reach out directly? Here's how you can contact me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:andy.sprague44@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      andy.sprague44@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Carrier Pigeon</p>
                    <p className="text-muted-foreground">Petaluma, CA, 94952</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect Online</CardTitle>
                <CardDescription>
                  Find me on these platforms for more about my work and interests.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://linkedin.com/in/andy-sprague"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Professional network</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                
                <a
                  href="https://github.com/andysprague44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">Code repositories</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                
                {/* <a
                  href="https://andysprague.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <ExternalLink className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">Personal Website</p>
                    <p className="text-sm text-muted-foreground">andysprague.com</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a> */}
              </CardContent>
            </Card>

            {/* Availability */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Current Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-glow"></div>
                  <span className="font-medium text-secondary">Available for new opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm actively seeking full-time opportunities with early-stage startups. 
                  Open to both remote and hybrid roles.
                </p>
              </CardContent>
            </Card> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What type of roles am I looking for?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I'm seeking full-time or consulting opportunities with early-stage startups where I can make a 
                    significant impact. I prefer roles that combine technical leadership with hands-on 
                    development in areas like climate tech, fintech, or AI/ML.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Am I available for consulting?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! Through my LLC lumadigital.io, I offer technical consultancy and full-stack 
                    web development services. I can help with architecture design, MVP development, 
                    and technical due diligence.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's my typical response time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I typically respond to emails within 24 hours on weekdays. I'm based in PST/PDT timezone.
                  </p>
                </CardContent>
              </Card>
              
              {/* <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I see examples of my work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! Check out my portfolio section for some of my public-facing work. 
                    For confidential projects, I can provide more details during our conversation.
                  </p>
                </CardContent>
              </Card> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
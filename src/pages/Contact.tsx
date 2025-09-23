import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle, Bug, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { saveContactMessage, sendContactEmail } from "@/lib/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { name, email, subject, message, category } = formData;
      const { id } = await saveContactMessage({ name, email, subject, message, category });

      // Fire-and-forget email; don't block UX on email latency
      sendContactEmail({ name, email, subject, message, category }, "yusufchakki3@gmail.com").catch(() => {});

      toast({
        title: "Message Sent Successfully!",
        description: id ? "Your message has been saved and emailed." : "Your message has been saved.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", category: "" });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-primary-foreground/90">
              Have questions about government internships? Need help with your application? 
              We're here to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-3">
              <Mail className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold">Email Support</h3>
              <p className="text-sm text-muted-foreground">
                support@govinternhub.gov.in
              </p>
              <Badge variant="secondary">24/7 Available</Badge>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-3">
              <Phone className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold">WhatsApp Support</h3>
              <p className="text-sm text-muted-foreground">
                +91 98765 43210
              </p>
              <Badge variant="secondary">Mon-Fri 9AM-6PM</Badge>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-3">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold">Office Address</h3>
              <p className="text-sm text-muted-foreground">
                Digital India Building<br />
                New Delhi - 110001
              </p>
              <Badge variant="secondary">Visit by Appointment</Badge>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-3">
              <Clock className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                Within 24 hours
              </p>
              <Badge variant="secondary">Fast Support</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Email Address *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Query Category</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[
                          { id: "general", label: "General Inquiry", icon: MessageSquare },
                          { id: "help", label: "Need Help", icon: HelpCircle },
                          { id: "bug", label: "Report Bug", icon: Bug },
                          { id: "suggestion", label: "Suggestion", icon: Lightbulb }
                        ].map(({ id, label, icon: Icon }) => (
                          <Button
                            key={id}
                            type="button"
                            variant={formData.category === id ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleInputChange("category", id)}
                            className="justify-start"
                          >
                            <Icon className="h-4 w-4 mr-1" />
                            {label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Subject *</label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief description of your query"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Message *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please provide detailed information about your query..."
                        className="min-h-32"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">How do I apply for internships?</h4>
                    <p className="text-xs text-muted-foreground">
                      Browse internships, click "Apply Now" to go to the official application portal.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Are all internships verified?</h4>
                    <p className="text-xs text-muted-foreground">
                      Yes, every internship is verified through official government channels.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">How does AI matching work?</h4>
                    <p className="text-xs text-muted-foreground">
                      Our AI analyzes your skills and preferences to recommend suitable internships.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Is the platform free to use?</h4>
                    <p className="text-xs text-muted-foreground">
                      Yes, GovIntern Hub is completely free for all students.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help Center
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    User Guide
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Bug className="h-4 w-4 mr-2" />
                    Report Issue
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="bg-accent">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Support Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground">24/7 Available</p>
                <p className="text-xs text-muted-foreground">Response within 24 hours</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                <p className="text-sm text-muted-foreground">Monday - Friday</p>
                <p className="text-xs text-muted-foreground">9:00 AM - 6:00 PM IST</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground">Monday - Friday</p>
                <p className="text-xs text-muted-foreground">10:00 AM - 5:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
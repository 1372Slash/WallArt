'use client';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    // Reset form logic would go here
  };

  const contactInfo = [
    { icon: <Mail />, text: 'hello@slash.dev' },
    { icon: <Phone />, text: '+1 (123) 456-7890' },
    { icon: <MapPin />, text: 'Earth, Solar System' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary rounded-3xl -mx-4 px-4 mb-24">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-headline text-5xl md:text-7xl mb-12 text-center"
        >
          Let's Create Together
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="font-headline text-3xl mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              Have a project in mind, or just want to say hi? Fill out the form or use the contact information provided. I'm always excited to hear about new ideas.
            </p>
            <div className="space-y-4">
                {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 text-lg">
                        <span className="text-primary">{info.icon}</span>
                        <span>{info.text}</span>
                    </div>
                ))}
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input type="text" placeholder="Your Name" required className="bg-background" />
            <Input type="email" placeholder="Your Email" required className="bg-background" />
            <Textarea placeholder="Your Message" required rows={5} className="bg-background" />
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

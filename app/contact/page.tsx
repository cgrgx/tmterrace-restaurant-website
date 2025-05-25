"use client";

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { MotionDiv } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['Top Floor, Landmark Building', 'Central Bharatpur, Nepal'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+977 1234 5678', '+977 9876 5432'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@tmterrace.com', 'reservations@tmterrace.com'],
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    details: ['Mon-Fri: 11:00 AM - 10:00 PM', 'Sat-Sun: 10:00 AM - 11:00 PM'],
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Contact Banner"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <MotionDiv animation="fadeInUp">
            <h1 className="text-white text-4xl md:text-5xl font-bold font-playfair mb-6">
              Contact Us
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Get in touch with us for reservations, inquiries, or feedback
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <MotionDiv
                key={index}
                animation="fadeInUp"
                delay={0.1 * index}
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-playfair mb-4">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-300">{detail}</p>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <MotionDiv animation="fadeInUp">
              <SectionHeading
                title="Send Us a Message"
                subtitle="We'd love to hear from you"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </MotionDiv>

            <MotionDiv animation="fadeInRight">
              <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56584.84445624!2d84.3901954!3d27.6812779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea11c0e!2sBharatpur%2C%20Nepal!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Stay Updated
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Subscribe to our newsletter for updates, special offers, and exclusive events.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
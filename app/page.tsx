import Image from 'next/image';
import Link from 'next/link';
import { Utensils, Clock, Award, MapPin, ArrowRight, ChefHat, Users, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { MotionDiv } from '@/components/ui/motion-div';
import ScrollToTop from '@/components/ui/scroll-to-top';

const foodItems = [
  {
    name: "Nepalese Thali Set",
    description: "Traditional Nepalese meal with rice, lentils, vegetables, and your choice of protein.",
    price: "Rs. 650",
    image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Momo Special",
    description: "Handmade dumplings filled with spiced meat or vegetables, served with tomato sauce.",
    price: "Rs. 350",
    image: "https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Grilled Trout",
    description: "Fresh trout marinated with herbs and spices, grilled to perfection.",
    price: "Rs. 750",
    image: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich, creamy tomato sauce with Indian spices.",
    price: "Rs. 550",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    review: "The terrace view at sunset is absolutely stunning! The food was delicious and the staff made us feel like family. Will definitely return!",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    review: "Best dining experience in Bharatpur! The Nepalese Thali was authentic and flavorful. Great place for family gatherings.",
    rating: 5,
  },
  {
    name: "Aarav Patel",
    review: "We celebrated our anniversary here and couldn't have chosen a better place. The ambiance, service, and food were all exceptional.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="TM Terrace Restaurant"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <MotionDiv animation="fadeInUp" delay={0.2}>
            <span className="text-primary font-medium text-lg md:text-xl uppercase tracking-widest">Welcome to</span>
          </MotionDiv>
          
          <MotionDiv animation="fadeInUp" delay={0.4}>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 font-playfair leading-tight">
              TM Terrace Restaurant&apos;s
            </h1>
          </MotionDiv>
          
          <MotionDiv animation="fadeInUp" delay={0.6}>
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Experience exceptional rooftop dining in Bharatpur with breathtaking views 
              and a warm, family-friendly atmosphere.
            </p>
          </MotionDiv>
          
          <MotionDiv animation="fadeInUp" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                View Our Menu
              </Button>
              <Button size="lg" variant="outline" className="text-base text-white border-white hover:text-primary hover:border-primary">
                Book A Table
              </Button>
            </div>
          </MotionDiv>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 scroll-indicator">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv animation="fadeInRight">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="TM Terrace Restaurant Dining Area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-primary font-playfair text-xl font-bold">10+ Years</p>
                  <p className="text-gray-600 dark:text-gray-300">of culinary excellence</p>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv animation="fadeInUp">
              <SectionHeading 
                title="Our Story" 
                subtitle="From humble beginnings to Bharatpur's favorite terrace dining destination"
              />
              
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                TM Terrace Restaurant's was founded with a simple vision: to create an exceptional dining experience that combines the beauty of Bharatpur's skyline with delicious, thoughtfully prepared food that brings people together.
              </p>
              
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Perched atop one of Bharatpur's premier buildings, our restaurant offers panoramic views alongside a menu that celebrates both local Nepalese cuisine and international favorites. Our family-friendly atmosphere ensures that everyone feels welcome.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <ChefHat className="text-primary h-5 w-5" />
                  <span>Expert Chefs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-primary h-5 w-5" />
                  <span>Family Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-primary h-5 w-5" />
                  <span>Award Winning</span>
                </div>
              </div>
              
              <Button className="gap-2">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Special Menu Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv animation="fadeInUp">
            <SectionHeading 
              title="Our Special Menu" 
              subtitle="Discover our chef's carefully crafted selection of dishes"
              center={true}
            />
          </MotionDiv>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {foodItems.map((item, index) => (
              <MotionDiv 
                key={index} 
                animation="fadeInUp"
                delay={0.2 * index}
                className="menu-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md"
              >
                <div className="h-48 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-playfair mb-2">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">{item.price}</span>
                    <Button size="sm" variant="outline">
                      <Utensils className="h-4 w-4 mr-2" />
                      Order
                    </Button>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="default">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Parallax Booking Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Restaurant Atmosphere"
            fill
            className="object-cover brightness-[0.3] parallax"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <MotionDiv animation="fadeInUp" className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Reserve Your Table Today
            </h2>
            <p className="mb-8 text-lg text-gray-200">
              Experience the perfect blend of ambiance, taste, and hospitality. Book your table now for an unforgettable dining experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="text-base">
                Make a Reservation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv animation="fadeInUp">
            <SectionHeading 
              title="What Our Guests Say" 
              subtitle="Read the experiences of our valued customers"
              center={true}
            />
          </MotionDiv>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <MotionDiv 
                key={index}
                animation="fadeInUp"
                delay={0.2 * index}
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  <div className="mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                    ))}
                  </div>
                  <p className="italic text-gray-600 dark:text-gray-300 mb-6 flex-grow">"{testimonial.review}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <MotionDiv animation="fadeInUp">
              <SectionHeading 
                title="Find Us" 
                subtitle="Visit us for an unforgettable dining experience"
              />
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Top Floor, Landmark Building<br />
                      Central Bharatpur, Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-primary h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 11:00 AM - 10:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-primary h-6 w-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contact</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Phone: +977 1234 5678<br />
                      Email: info@tmterrace.com
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8 gap-2">
                Get Directions
                <MapPin className="h-4 w-4" />
              </Button>
            </MotionDiv>
            
            <MotionDiv animation="fadeInRight">
              <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
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
      
      {/* Instagram Gallery Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Follow Us on Instagram</h2>
              <p className="text-gray-600 dark:text-gray-300">@tmterrace</p>
            </div>
          </MotionDiv>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <MotionDiv 
                key={i}
                animation="fadeInUp"
                delay={0.1 * i}
              >
                <Link href="#" className="block aspect-square relative overflow-hidden rounded-lg group">
                  <Image
                    src={`https://images.pexels.com/photos/${5000000 + i * 100}/pexels-photo-${5000000 + i * 100}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={`Gallery image ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </MotionDiv>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline">
              View More on Instagram
              <Instagram className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      <ScrollToTop />
    </>
  );
}
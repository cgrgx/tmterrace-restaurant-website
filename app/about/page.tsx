"use client";

import Image from 'next/image';
import { ChefHat, Users, Award, Clock, Heart } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { MotionDiv } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';

const stats = [
  {
    value: '10+',
    label: 'Years of Experience',
    icon: Clock,
  },
  {
    value: '50+',
    label: 'Team Members',
    icon: Users,
  },
  {
    value: '1000+',
    label: 'Happy Customers',
    icon: Heart,
  },
  {
    value: '15+',
    label: 'Awards Won',
    icon: Award,
  },
];

const chefs = [
  {
    name: 'Rajesh Kumar',
    position: 'Executive Chef',
    image: 'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'With over 15 years of culinary expertise, Chef Rajesh brings authentic Nepalese flavors to life.',
  },
  {
    name: 'Priya Sharma',
    position: 'Head Chef',
    image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Specializing in fusion cuisine, Chef Priya combines traditional and modern cooking techniques.',
  },
  {
    name: 'David Chen',
    position: 'Pastry Chef',
    image: 'https://images.pexels.com/photos/8477934/pexels-photo-8477934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Creating delightful desserts that perfectly complement our menu offerings.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us Banner"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <MotionDiv animation="fadeInUp">
            <h1 className="text-white text-4xl md:text-5xl font-bold font-playfair mb-6">
              Our Story
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              A journey of passion, flavor, and hospitality
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv animation="fadeInRight">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Restaurant Interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <ChefHat className="h-8 w-8 text-primary mb-2" />
                  <p className="text-2xl font-bold font-playfair">Since 2014</p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv animation="fadeInUp">
              <SectionHeading
                title="Our Journey"
                subtitle="From humble beginnings to culinary excellence"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                TM Terrace Restaurant's journey began in 2014 with a simple vision: to create an exceptional dining experience that combines breathtaking views with delicious, thoughtfully prepared food. Located in the heart of Bharatpur, our rooftop restaurant has become a beloved destination for both locals and visitors.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Over the years, we've grown from a small family-run establishment to one of the city's premier dining destinations, while maintaining our commitment to authentic flavors, warm hospitality, and creating memorable experiences for our guests.
              </p>
              <Button size="lg">Learn More</Button>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <MotionDiv
                key={index}
                animation="fadeInUp"
                delay={0.1 * index}
                className="text-center"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold font-playfair text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Chefs */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionDiv animation="fadeInUp">
            <SectionHeading
              title="Meet Our Chefs"
              subtitle="The culinary experts behind our exceptional dishes"
              center={true}
            />
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {chefs.map((chef, index) => (
              <MotionDiv
                key={index}
                animation="fadeInUp"
                delay={0.2 * index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-playfair mb-2">{chef.name}</h3>
                  <p className="text-primary font-medium mb-4">{chef.position}</p>
                  <p className="text-gray-600 dark:text-gray-300">{chef.description}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <MotionDiv animation="fadeInUp">
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide everything we do"
              center={true}
            />
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <MotionDiv animation="fadeInUp" delay={0.1}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-4">Passion for Food</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We pour our hearts into every dish, ensuring each meal is crafted with love and attention to detail.
                </p>
              </div>
            </MotionDiv>

            <MotionDiv animation="fadeInUp" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-4">Family First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We treat every guest like family, creating a warm and welcoming atmosphere for all.
                </p>
              </div>
            </MotionDiv>

            <MotionDiv animation="fadeInUp" delay={0.3}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-4">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive for excellence in everything we do, from food quality to service standards.
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  );
}
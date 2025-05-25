"use client";

import { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { MotionDiv } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'interior', name: 'Interior' },
  { id: 'food', name: 'Food' },
  { id: 'events', name: 'Events' },
];

const galleryItems = [
  {
    id: 1,
    category: 'interior',
    image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Main Dining Area',
    description: 'Our spacious main dining area with panoramic views',
  },
  {
    id: 2,
    category: 'interior',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Terrace View',
    description: 'Evening ambiance on our rooftop terrace',
  },
  {
    id: 3,
    category: 'food',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Signature Dish',
    description: 'Our chef\'s special creation',
  },
  {
    id: 4,
    category: 'food',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Butter Chicken',
    description: 'Classic Indian curry with tender chicken',
  },
  {
    id: 5,
    category: 'events',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Corporate Event',
    description: 'Hosting a successful business dinner',
  },
  {
    id: 6,
    category: 'events',
    image: 'https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Wedding Reception',
    description: 'A beautiful celebration under the stars',
  },
  {
    id: 7,
    category: 'interior',
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Private Dining',
    description: 'Intimate dining space for special occasions',
  },
  {
    id: 8,
    category: 'food',
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Grilled Specialties',
    description: 'Fresh from our grill to your table',
  },
  {
    id: 9,
    category: 'events',
    image: 'https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Birthday Party',
    description: 'Celebrating special moments together',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = galleryItems.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Gallery Banner"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <MotionDiv animation="fadeInUp">
            <h1 className="text-white text-4xl md:text-5xl font-bold font-playfair mb-6">
              Our Gallery
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Take a visual journey through our restaurant's ambiance, dishes, and memorable moments
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionDiv animation="fadeInUp">
            <div className="flex justify-center mb-12">
              <div className="flex gap-4 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <MotionDiv
                key={item.id}
                animation="fadeInUp"
                delay={0.1 * index}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Experience the Magic in Person
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Join us for an unforgettable dining experience with breathtaking views and exceptional cuisine.
            </p>
            <Button variant="secondary" size="lg">
              Make a Reservation
            </Button>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
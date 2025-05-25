"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { MotionDiv } from '@/components/ui/motion-div';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'main-courses', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'beverages', name: 'Beverages' },
];

const menuItems = [
  {
    id: 1,
    name: 'Momo Special',
    description: 'Handmade dumplings filled with spiced meat or vegetables, served with tomato sauce.',
    price: 'Rs. 350',
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 2,
    name: 'Sekuwa Platter',
    description: 'Grilled marinated meat skewers, a popular Nepalese street food.',
    price: 'Rs. 450',
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Samosa Chaat',
    description: 'Crispy samosas topped with yogurt, chutneys, and spices.',
    price: 'Rs. 300',
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Nepalese Thali Set',
    description: 'Traditional Nepalese meal with rice, lentils, vegetables, and your choice of protein.',
    price: 'Rs. 650',
    category: 'main-courses',
    image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 5,
    name: 'Butter Chicken',
    description: 'Tender chicken cooked in a rich, creamy tomato sauce with Indian spices.',
    price: 'Rs. 550',
    category: 'main-courses',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 6,
    name: 'Grilled Trout',
    description: 'Fresh trout marinated with herbs and spices, grilled to perfection.',
    price: 'Rs. 750',
    category: 'main-courses',
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 7,
    name: 'Vegetable Biryani',
    description: 'Fragrant basmati rice cooked with seasonal vegetables and aromatic spices.',
    price: 'Rs. 450',
    category: 'main-courses',
    image: 'https://images.pexels.com/photos/7625190/pexels-photo-7625190.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 8,
    name: 'Sel Roti with Yogurt',
    description: 'Traditional Nepalese sweet rice bread served with fresh yogurt.',
    price: 'Rs. 250',
    category: 'desserts',
    image: 'https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 9,
    name: 'Kheer',
    description: 'Creamy rice pudding flavored with cardamom, saffron, and nuts.',
    price: 'Rs. 200',
    category: 'desserts',
    image: 'https://images.pexels.com/photos/14705134/pexels-photo-14705134.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 10,
    name: 'Gulab Jamun',
    description: 'Soft milk solids balls soaked in rose-flavored sugar syrup.',
    price: 'Rs. 220',
    category: 'desserts',
    image: 'https://images.pexels.com/photos/14705150/pexels-photo-14705150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 11,
    name: 'Masala Chai',
    description: 'Traditional spiced tea with milk and sugar.',
    price: 'Rs. 120',
    category: 'beverages',
    image: 'https://images.pexels.com/photos/5946630/pexels-photo-5946630.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 12,
    name: 'Mango Lassi',
    description: 'Refreshing yogurt drink blended with sweet mango and a hint of cardamom.',
    price: 'Rs. 180',
    category: 'beverages',
    image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenuItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Menu Banner"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <MotionDiv animation="fadeInUp">
            <h1 className="text-white text-4xl md:text-5xl font-bold font-playfair mb-6">
              Our Menu
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Discover our carefully crafted dishes, made with fresh ingredients and prepared with passion
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <MotionDiv animation="fadeInUp">
              <Tabs 
                defaultValue="all" 
                className="w-full" 
                onValueChange={setActiveCategory}
              >
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full bg-gray-100 dark:bg-gray-800">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="text-sm md:text-base"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </MotionDiv>

            <MotionDiv animation="fadeInUp" className="w-full md:w-64">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search menu..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </MotionDiv>
          </div>

          {filteredMenuItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredMenuItems.map((item, index) => (
                <MotionDiv
                  key={item.id}
                  animation="fadeInUp"
                  delay={0.1 * index}
                >
                  <div className="menu-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
                    <div className="h-48 relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {item.featured && (
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold font-playfair mb-2">{item.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{item.description}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-primary font-bold">{item.price}</span>
                        <Button size="sm" variant="outline">Order Now</Button>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No menu items found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Dietary Options */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv animation="fadeInUp">
            <SectionHeading
              title="Special Dietary Options"
              subtitle="We cater to various dietary preferences and restrictions"
              center={true}
            />
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <MotionDiv animation="fadeInUp" delay={0.1}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-4">Vegetarian</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  We offer a wide variety of delicious vegetarian options prepared with fresh, local ingredients.
                </p>
                <Button variant="link" className="mt-auto mx-auto">View Vegetarian Menu</Button>
              </div>
            </MotionDiv>

            <MotionDiv animation="fadeInUp" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-4">Gluten-Free</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  Our gluten-free options are carefully prepared to ensure they meet dietary requirements without compromising on taste.
                </p>
                <Button variant="link" className="mt-auto mx-auto">View Gluten-Free Options</Button>
              </div>
            </MotionDiv>

            <MotionDiv animation="fadeInUp" delay={0.3}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-4">Vegan</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  Our plant-based menu options are created with creativity and care, using only the finest vegan ingredients.
                </p>
                <Button variant="link" className="mt-auto mx-auto">View Vegan Options</Button>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Chef's Recommendation */}
      <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <MotionDiv animation="fadeInUp">
            <SectionHeading
              title="Chef's Recommendations"
              subtitle="Our master chef's specially curated selection for an unforgettable dining experience"
              center={true}
            />
          </MotionDiv>

          <div className="mt-12 relative">
            <div className="flex flex-col md:flex-row items-center">
              <MotionDiv animation="fadeInRight" className="w-full md:w-1/2 mb-8 md:mb-0">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Chef Special Dish"
                    fill
                    className="object-cover"
                  />
                </div>
              </MotionDiv>

              <MotionDiv animation="fadeInUp" className="w-full md:w-1/2 md:pl-12">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold font-playfair mb-4">Himalayan Trout with Herb Butter</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our signature dish features locally sourced Himalayan trout, pan-seared to perfection and topped with a melting herb butter. Served with seasonal vegetables and garlic mashed potatoes, this dish represents the pinnacle of our culinary expertise.
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <span className="text-primary font-bold text-xl">Rs. 850</span>
                    </div>
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <Button>Order Chef's Special</Button>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <MotionDiv animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Ready to Experience Our Culinary Delights?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Book your table now and enjoy the perfect blend of delicious food, ambient atmosphere, and exceptional service.
            </p>
            <Button variant="secondary" size="lg">
              Reserve Your Table
            </Button>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
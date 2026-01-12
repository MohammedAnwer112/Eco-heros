
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import CookieConsent from './components/CookieConsent';
import { Heart, Globe, Bug, TreePine, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F9EB]">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Feature 1: Simpler 5th Grade Level */}
        <Feature
          title="What is a 'Green Job'?"
          subtitle="It's like being a superhero, but for the Earth!"
          content={[
            "A green job is any work that helps our planet stay healthy and happy. It's about fixing things we broke and keeping animals safe.",
            "We need the Earth for our snacks, our clean water, and even for playing outside! Green jobs make sure we have all those things forever.",
            "In our 5th grade class, we learned that you can be a scientist, a forest ranger, or even an inventor who makes cars that run on sunshine!"
          ]}
          imageUrl="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
          imageAlt="A group of smiling kids in a garden"
          reverse={true}
        />

        {/* Feature 2: Future Outlook */}
        <Feature
          title="Why This Matters to Us"
          content={[
            "When we grow up, every single job will need to be a little bit green. Even a baker can be green by using local flour and not wasting energy!",
            "Mr. Zain Altimemi showed us that we have the power to change the future. Our project proves that kids can lead the way.",
            "If we start learning now, we'll be the best leaders the world has ever seen. It's time to get excited about our green future!"
          ]}
          imageUrl="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
          imageAlt="Classroom experiment with plants"
          reverse={false}
        />

        {/* Project Section */}
        <section className="py-24 px-6 md:px-12 bg-white rounded-t-[100px] shadow-inner relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h3 className="text-4xl font-black text-[#1B4332]">Our Classroom Resources</h3>
              <p className="text-xl text-gray-600">Everything we learned for our big science project!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <ProjectCard 
                icon={<Bug className="w-10 h-10 text-emerald-600" />}
                title="Bug & Plant Directory"
                desc="Learn about the tiny creatures that keep our gardens growing strong!"
                color="bg-emerald-50"
              />
              <ProjectCard 
                icon={<Globe className="w-10 h-10 text-blue-600" />}
                title="Earth Map"
                desc="See where the most amazing forests and oceans are on our planet."
                color="bg-blue-50"
              />
              <ProjectCard 
                icon={<Sparkles className="w-10 h-10 text-yellow-600" />}
                title="How to Be Green"
                desc="Simple steps you can do at home today to help Mr. Zain's class save the world!"
                color="bg-yellow-50"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Supervision Info */}
      <footer className="bg-[#1B4332] text-white py-16 px-6 md:px-12 rounded-t-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="space-y-4">
              <h4 className="text-3xl font-black flex items-center justify-center md:justify-start gap-3">
                <Heart className="w-8 h-8 text-pink-400 fill-current" /> Eco-Heroes
              </h4>
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                <p className="text-lg font-bold">Grade 5 Science Project</p>
                <p className="text-yellow-300 font-medium">Supervised by: Mr. Zain Altimemi</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 font-bold">
              <a href="#" className="hover:text-yellow-300 transition-colors">Our Team</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Class Blog</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Resources</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Photos</a>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                   <TreePine className="w-6 h-6" />
                </div>
                <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                   <Globe className="w-6 h-6" />
                </div>
              </div>
              <p className="text-xs opacity-50 font-bold uppercase tracking-[0.2em] mt-4">
                Made with Love in Mr. Zain's Class © 2024
              </p>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
};

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, desc, color }) => (
  <div className={`p-10 ${color} rounded-[40px] border-4 border-[#1B4332] hover:shadow-[12px_12px_0_0_#1B4332] transition-all transform hover:-translate-y-2 group cursor-pointer`}>
    <div className="mb-6 transform transition-transform group-hover:scale-125 group-hover:rotate-12">
      {icon}
    </div>
    <h4 className="text-2xl font-black text-[#1B4332] mb-4">{title}</h4>
    <p className="text-gray-700 font-medium text-lg leading-relaxed">{desc}</p>
    <button className="mt-8 bg-[#1B4332] text-white px-6 py-2 rounded-full font-bold text-sm flex items-center group-hover:bg-yellow-400 group-hover:text-[#1B4332] transition-colors">
      EXPLORE <span className="ml-2">➜</span>
    </button>
  </div>
);

export default App;

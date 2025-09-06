import { motion } from "framer-motion";
import { useState } from "react";
import wave1 from "/src/assets/AboutMe/Wave1.png";
import wave2 from "/src/assets/AboutMe/Wave2.png";
import windows from "/src/assets/AboutMe/Window.png";
import newyawk from "/src/assets/AboutMe/NewYawk.png";
import ruckus from "/src/assets/AboutMe/Ruckus.png";
import workshop from "/src/assets/AboutMe/Workshop.png";
import meandcat from "/src/assets/AboutMe/MeAndCat.png";
import dance from "/src/assets/AboutMe/Dance2.png";
import triton from "/src/assets/AboutMe/Triton.png";

const AboutMe = () => {
  const [img, setImg] = useState(wave1);
  return (
    <div className="min-h-screen font-mono">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 md:px-8 lg:px-16 py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full max-w-7xl items-center">
            {/* Text Content */}
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-[#748877]/90 to-[#5a6b5a]/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white/70 text-sm ml-4">cd about-me</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-4xl text-white mb-6 bg-gradient-to-r from-white to-amber-50 bg-clip-text text-transparent">
                  my story
                </h1>
                <p className="text-white/90 text-lg md:text-lg leading-relaxed">
                  I'm a <span className="text-amber-50 font-semibold">full-stack developer</span> with a passion for 
                  <span className="text-amber-50 font-semibold"> problem-solving</span> and 
                  <span className="text-amber-50 font-semibold"> art</span>. I am currently based in San Diego, pursuing my 
                  Bachelor's degree in <span className="text-amber-50 font-semibold">Mathematics-Computer Science</span> at UCSD, 
                  minoring in <span className="text-amber-50 font-semibold">Cognitive Science</span>.
                </p>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              className="flex-1 flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] lg:w-[35vw] lg:h-[35vw] max-w-md max-h-md">
                <motion.div
                  className="relative w-full h-full flex justify-center items-center"
                  onHoverStart={() => setImg(wave1)}
                  onHoverEnd={() => setImg(wave2)}
                  transition={{ type: "tween", duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={img}
                    alt="Anagha's Profile"
                    className="w-full h-full object-contain z-10 drop-shadow-2xl"
                  />
                  <div className="absolute inset-4 border-10 border-amber-50/30 rounded-full animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Free Time Section */}
      <div className="px-4 md:px-8 lg:px-16 py-20">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#748877]/90 to-[#5a6b5a]/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Image */}
              <motion.div 
                className="w-full lg:w-[40%] flex justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <img
                    className="w-[40vw] h-[40vw] lg:h-[30vw] rounded-2xl object-cover shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    src={windows}
                    alt="Free time activities"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-amber-50 rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold bg-gradient-to-r from-white to-amber-50 bg-clip-text text-transparent">
                    ./in_my_free_time...
                  </h2>
                </div>
                <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                  <p>
                    You can find me <span className="text-amber-50 font-semibold">designing and creating</span> various sites and apps, as well
                    as trying out different <span className="text-amber-50 font-semibold">Blender rendering techniques</span>.
                  </p>
                  <p>
                    When I'm not working, I'm likely at practice for my dance team, 
                    <span className="text-amber-50 font-semibold"> Raas Ruckus</span>, preparing to travel the country 
                    competing in <span className="text-amber-50 font-semibold">Raas-Garba style dance</span>.
                  </p>
                  <p>
                    Outside of school, I love making memories with my family and friends, 
                    playing games like <span className="text-amber-50 font-semibold">Bopl Battle</span>, and 
                    <span className="text-amber-50 font-semibold"> exploring new places</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Gallery Section */}
      <div className="px-4 md:px-8 lg:px-16 py-20">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-amber-50 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold bg-gradient-to-r from-white to-amber-50 bg-clip-text text-transparent">
                cd my-gallery
              </h2>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A collection of moments, memories, and creative expressions that define who I am
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { src: newyawk, title: "New York Adventures", description: "Exploring the city that never sleeps" },
              { src: ruckus, title: "Raas Ruckus", description: "Dance team performances and competitions" },
              { src: workshop, title: "Creative Workshop", description: "Art and design sessions" },
              { src: meandcat, title: "Family Moments", description: "Quality time with loved ones" },
              { src: dance, title: "Dance Passion", description: "Expressing myself through movement" },
              { src: triton, title: "UCSD Life", description: "Campus experiences and memories" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#748877]/50 to-[#5a6b5a]/50 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={item.src}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;

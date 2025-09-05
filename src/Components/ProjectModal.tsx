import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  inspiration: string;
  challenges: string[];
  process: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-[#D7C59F] bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-[#748877] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-amber-50/20">
                <div>
                  <h2 className="text-2xl md:text-3xl font-mono text-white font-bold">
                    {project.title}
                  </h2>
                  <p className="text-amber-50/80 text-sm md:text-base mt-1">
                    {project.category}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-amber-50 transition-colors p-2"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6 space-y-6">
                {/* Project Image */}
                {project.images[0] && (
                  <div className="w-full">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}

                {/* Description */}
                <div>
                  <h3 className="text-xl font-mono text-white font-semibold mb-3">
                    ./description
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    {project.longDescription}
                  </p>
                  
                  {/* Tools integrated into description */}
                  <div className="mb-4">
                    <h4 className="text-lg font-mono text-amber-50 font-semibold mb-2">
                      Built with:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="bg-amber-50/20 text-amber-50 px-3 py-1 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Live Project Section */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="mb-4">
                      <h4 className="text-lg font-mono text-amber-50 font-semibold mb-2">
                        View Project:
                      </h4>
                      <div className="flex gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-amber-50/20 hover:bg-amber-50/30 text-amber-50 px-4 py-2 rounded-lg transition-colors group"
                          >
                            <span>View Live Project</span>
                            <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors group"
                          >
                            <FaGithub />
                            <span>View Code</span>
                            <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>


                {/* Inspiration */}
                <div>
                  <h3 className="text-xl font-mono text-white font-semibold mb-3">
                    ./inspiration
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {project.inspiration}
                  </p>
                </div>

                {/* Challenges */}
                <div>
                  <h3 className="text-xl font-mono text-white font-semibold mb-3">
                    ./challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-white/90 flex items-start">
                        <span className="text-amber-50 mr-2">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <h3 className="text-xl font-mono text-white font-semibold mb-3">
                    ./process
                  </h3>
                  <ol className="space-y-2">
                    {project.process.map((step, index) => (
                      <li key={index} className="text-white/90 flex items-start">
                        <span className="text-amber-50 mr-2 font-mono">
                          {index + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Additional Images */}
                {project.images.length > 1 && (
                  <div>
                    <h3 className="text-xl font-mono text-white font-semibold mb-3">
                      ./process_images
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.images.slice(1).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${project.title} process ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

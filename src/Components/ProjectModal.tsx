import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiCompass,
  FiLayers,
  FiTool,
} from "react-icons/fi";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  inspiration: string;
  challenges: string[];
  process: string[];
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
            className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4"
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
                

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-mono text-white font-semibold mb-3 flex items-center gap-2">
                      <FiLayers className="text-amber-50" />
                      Case Study Overview
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-white/20 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-wider text-amber-50/90 mb-2">
                          Problem Space
                        </p>
                        <p className="text-white/90 leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/20 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-wider text-amber-50/90 mb-2">
                          Design Intent
                        </p>
                        <p className="text-white/90 leading-relaxed">
                          {project.inspiration}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-mono text-white font-semibold mb-3 flex items-center gap-2">
                      <FiAlertCircle className="text-amber-50" />
                      Key Challenges
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.challenges.map((challenge, index) => (
                        <div
                          key={index}
                          className="rounded-lg border border-white/20 bg-white/5 p-3 text-white/90 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <FiAlertCircle className="text-amber-50 mt-0.5 shrink-0" />
                          <span>{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-mono text-white font-semibold mb-3 flex items-center gap-2">
                      <FiCompass className="text-amber-50" />
                      Process
                    </h3>
                    <ol className="space-y-3">
                      {project.process.map((step, index) => (
                        <li
                          key={index}
                          className="rounded-lg border border-white/20 bg-white/5 p-3 text-white/90 flex items-start gap-3"
                        >
                          <span className="text-amber-50 font-mono text-sm mt-0.5">
                            {index + 1}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-mono text-white font-semibold mb-3 flex items-center gap-2">
                      <FiTool className="text-amber-50" />
                      Tools
                    </h3>
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

                  {(project.liveUrl || project.githubUrl) && (
                    <div>
                      <h3 className="text-xl font-mono text-white font-semibold mb-3 flex items-center gap-2">
                        <FiCheckCircle className="text-amber-50" />
                        Explore Deliverable
                      </h3>
                      <div className="flex flex-wrap gap-4">
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
                

              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

import resume from '/src/assets/Resume/Resume.png'

const Resume = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className='rounded-4xl bg-[#748877] w-full max-w-4xl mx-auto my-8 md:my-16 lg:my-32 p-4 md:p-8 font-mono flex flex-col items-center justify-center min-h-screen'>
        <img className='p-4 md:p-8 lg:p-12 rounded-4xl bg-[#748877] hover:shadow-2xl transform transition-transform hover:translate-y-[-1rem] md:hover:translate-y-[-2rem] lg:hover:translate-y-[-3vw] max-w-full h-auto' src={resume} alt="" />
      </div>
    </div>
  )
}

export default Resume

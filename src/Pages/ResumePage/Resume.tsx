import resume from '/src/assets/Resume/Resume.png'

const Resume = () => {
  return (
    <div>
      <div className='rounded-4xl bg-[#748877] w-[50vw] m-32 p-4 font-mono flex flex-col items-center justify-center min-h-screen'>
        <img className='p-12 rounded-4xl bg-[#748877] hover:shadow-2xl transform transition-transform hover:translate-y-[-3vw]' src={resume} alt="" />
      </div>
    </div>
  )
}

export default Resume

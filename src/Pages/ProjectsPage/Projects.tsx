import { IoLogoFigma } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiLogoBlender } from "react-icons/bi";
import { SiCanva } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import annu from "/src/assets/Projects/Annu.png";
import ascend from "/src/assets/Projects/Ascendtials.png";
import consulting from "/src/assets/Projects/Consulting.png";
import ds3 from "/src/assets/Projects/DS3.png";
import mirror from "/src/assets/Projects/Mirror.png";
import greektragedy from "/src/assets/Projects/GreekTragedy.png";
import lemur from "/src/assets/Projects/Lemur.png";
import marvel from "/src/assets/Projects/Marvel.png";
import pearlgirl from "/src/assets/Projects/PearlGirl.png";
import wanda from "/src/assets/Projects/Wanda.png";


const Projects = () => {
  const VideoLoop = (fileId: string) => {
    const videoUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    return (
      <div className="w-[20vw] h-[20vw] border-2 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
        <iframe
          src={videoUrl}
          width="640"
          height="480"
          allow="autoplay"
          title="Google Drive Video"
        ></iframe>
      </div>
    );
  };

  const project = (caption: string, path: string, type: string) => {
    return (
      <div className="flex flex-col items-center transform transition-transform hover:translate-y-[-5px] hover:shadow-gray-900">
        {type === "video" ? (
          VideoLoop(path)
        ) : (
          <img
            className="w-[20vw] h-[20vw] border-2 flex items-center justify-center rounded-lg overflow-hidden shadow-md object-cover"
            src={path}
          />
        )}

        <p className="text-[0.8vw] text-white mt-2 pl-2">{caption}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-[#748877] text-white font-mono w-[90vw] h-[20vw] rounded-4xl mx-32 my-20 pb-4 flex flex-col justify center">
        <div className=" flex justify-center items-center gap-20">
          <h1 className="text-5xl">cd my-projects</h1>
          <div className="text-[1vw] mt-8 w-[40vw] pt-4">
            Over the years, I've gained so many invaluable experiences and
            chances to follow my passions. <br className="pt-4" />
            <p className="text-[1vw] w-[40vw] pt-4">
              Here are some memorable projects that have stuck with me—but
              there’s still so much more to be done. I’m currently working on
              new projects that I can’t wait to share soon!
            </p>
            <div className="mt-8 pb-8 flex flex-row items-center gap-4">
              <p className="mr-2 text-2xl">Skills:</p>
              <div className="flex flex-row gap-3 text-4xl">
                <IoLogoFigma className="hover:scale-120" />
                <FaJava className="hover:scale-120" />
                <FaPython className="hover:scale-120" />
                <BiLogoBlender className="hover:scale-120" />
                <SiCanva className="hover:scale-120" />
                <FaReact className="hover:scale-120" />
                <FaHtml5 className="hover:scale-120" />
                <FaCss3Alt className="hover:scale-120" />
                <FaWordpress className="hover:scale-120" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <svg
          className="mx-auto"
          width="900"
          height="200"
          viewBox="0 0 923 432"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M891.107 232.377C886.738 233.941 887.973 240.4 892.59 240.129L910.574 239.071L923.007 204.858L903.03 175.413L884.774 161.09C876.935 154.939 867.392 151.312 857.385 150.679L768.898 145.085C765.736 144.885 762.558 144.986 759.406 145.387L708.353 151.88C701.776 152.717 695.413 154.846 689.631 158.145L659.369 175.412C644.485 183.905 626.404 184.308 611.385 176.482L574.268 157.144C569.194 154.499 563.688 152.756 557.993 151.991L492.746 143.226L439.272 135.412C436.183 134.96 433.053 134.8 429.925 134.933L354.627 138.131L295.507 143.288C291.108 143.672 286.77 144.634 282.607 146.151L211.352 172.107L193.717 157.936C130.093 106.813 34.342 130.977 1.09847 206.547V206.547C-0.498125 210.176 -0.266295 214.356 1.69089 217.754V217.754C40.0501 284.348 125.579 308.011 193.533 270.06L211.352 260.109L266.682 288.712C272.009 291.466 277.805 293.227 283.789 293.912L354.627 302.015L441.879 308.011L530.464 302.504C535.669 302.18 540.803 301.047 545.68 299.145L596.329 279.396L651.776 253.273C655.165 251.676 658.371 249.708 661.333 247.405L726.797 196.523C733.124 191.605 740.513 188.251 748.352 186.738L813.596 174.146C824.684 172.006 836.119 173.657 846.049 178.83L892.274 202.915L901.67 228.597L891.107 232.377Z"
            fill="#748877"
          />
          <path
            d="M168.244 212.163C166.341 211.089 164.046 210.862 161.905 211.535L156.765 213.152C150 215.28 148.769 224.301 154.781 227.695L159.348 230.273C161.251 231.347 163.546 231.574 165.687 230.9L170.827 229.284C177.592 227.156 178.823 218.135 172.811 214.741L168.244 212.163Z"
            fill="#879D8A"
          />
          <path
            d="M189.12 231.849C187.217 230.775 184.922 230.547 182.781 231.221L177.641 232.838C170.876 234.966 169.645 243.987 175.657 247.38L180.224 249.958C182.127 251.032 184.422 251.259 186.563 250.586L191.703 248.969C198.468 246.841 199.699 237.82 193.687 234.427L189.12 231.849Z"
            fill="#7E9080"
          />
          <path
            d="M212.323 216.405C210.421 215.331 208.125 215.104 205.984 215.777L200.845 217.394C194.079 219.522 192.848 228.543 198.86 231.936L203.428 234.514C205.33 235.588 207.626 235.816 209.767 235.142L214.906 233.525C221.672 231.397 222.903 222.376 216.891 218.983L212.323 216.405Z"
            fill="#7E9080"
          />
          <path
            d="M238.428 202.815C236.525 201.741 234.23 201.513 232.089 202.187L226.949 203.803C220.184 205.932 218.953 214.952 224.965 218.346L229.532 220.924C231.435 221.998 233.73 222.225 235.871 221.552L241.011 219.935C247.776 217.807 249.007 208.786 242.995 205.393L238.428 202.815Z"
            fill="#879D8A"
          />
          <path
            d="M254.381 221.347C252.478 220.273 250.182 220.046 248.041 220.719L242.902 222.336C236.136 224.464 234.905 233.485 240.917 236.879L245.485 239.457C247.387 240.531 249.683 240.758 251.824 240.084L256.964 238.468C263.729 236.34 264.96 227.319 258.948 223.925L254.381 221.347Z"
            fill="#7E9080"
          />
          <path
            d="M277.584 207.139C275.681 206.065 273.386 205.837 271.245 206.511L266.105 208.128C259.34 210.256 258.109 219.277 264.121 222.67L268.688 225.248C270.591 226.322 272.886 226.549 275.027 225.876L280.167 224.259C286.932 222.131 288.163 213.11 282.151 209.717L277.584 207.139Z"
            fill="#879D8A"
          />
          <path
            d="M259.456 185.518C257.553 184.444 255.258 184.216 253.117 184.89L247.977 186.507C241.212 188.635 239.981 197.656 245.993 201.049L250.56 203.627C252.463 204.701 254.758 204.928 256.9 204.255L262.039 202.638C268.805 200.51 270.035 191.489 264.023 188.096L259.456 185.518Z"
            fill="#7E9080"
          />
          <path
            d="M319.641 233.702C317.738 232.628 315.443 232.401 313.302 233.074L308.162 234.691C301.397 236.819 300.166 245.84 306.178 249.234L310.745 251.812C312.648 252.886 314.943 253.113 317.084 252.439L322.224 250.823C328.989 248.695 330.22 239.674 324.208 236.28L319.641 233.702Z"
            fill="#7E9080"
          />
          <path
            d="M345.745 218.258C343.843 217.184 341.547 216.957 339.406 217.631L334.266 219.247C327.501 221.375 326.27 230.396 332.282 233.79L336.849 236.368C338.752 237.442 341.047 237.669 343.189 236.996L348.328 235.379C355.094 233.251 356.324 224.23 350.313 220.836L345.745 218.258Z"
            fill="#879D8A"
          />
          <path
            d="M322.542 198.49C320.639 197.416 318.344 197.189 316.202 197.863L311.063 199.479C304.297 201.607 303.067 210.628 309.079 214.022L313.646 216.6C315.549 217.674 317.844 217.901 319.985 217.227L325.125 215.611C331.89 213.483 333.121 204.462 327.109 201.068L322.542 198.49Z"
            fill="#7E9080"
          />
          <path
            d="M363.873 199.726C361.97 198.652 359.675 198.424 357.534 199.098L352.394 200.715C345.629 202.843 344.398 211.864 350.41 215.257L354.977 217.835C356.88 218.909 359.175 219.136 361.317 218.463L366.456 216.846C373.222 214.718 374.452 205.697 368.44 202.304L363.873 199.726Z"
            fill="#7E9080"
          />
          <path
            d="M339.944 253.47C338.042 252.396 335.746 252.168 333.605 252.842L328.466 254.459C321.7 256.587 320.469 265.608 326.481 269.001L331.049 271.579C332.951 272.653 335.247 272.881 337.388 272.207L342.527 270.59C349.293 268.462 350.524 259.441 344.512 256.048L339.944 253.47Z"
            fill="#7E9080"
          />
          <path
            d="M296.437 176.869C294.534 175.795 292.239 175.568 290.098 176.241L284.958 177.858C278.193 179.986 276.962 189.007 282.974 192.401L287.541 194.979C289.444 196.053 291.739 196.28 293.88 195.606L299.02 193.99C305.785 191.862 307.016 182.841 301.004 179.447L296.437 176.869Z"
            fill="#7E9080"
          />
          <path
            d="M363.873 238.644C361.97 237.57 359.675 237.343 357.534 238.016L352.394 239.633C345.629 241.761 344.398 250.782 350.41 254.176L354.977 256.754C356.88 257.828 359.175 258.055 361.317 257.381L366.456 255.765C373.222 253.636 374.452 244.616 368.44 241.222L363.873 238.644Z"
            fill="#7E9080"
          />
          <path
            d="M315.199 277.19C303.627 271.181 288.013 276.121 282.414 287.564L259.907 333.562L245.87 354.433C241.418 361.051 234.256 365.996 225.978 368.164L194.15 376.503C186.57 378.489 181.25 384.785 181.378 391.619V391.619C181.544 400.536 190.746 406.695 200.751 404.587L245.15 395.231C248.287 394.57 251.324 393.504 254.159 392.068L269.573 384.262C273.598 382.224 277.138 379.48 279.959 376.214L292.316 361.908C293.997 359.96 295.405 357.849 296.504 355.623L323.372 301.234C327.858 292.152 324.396 281.967 315.199 277.19V277.19Z"
            fill="#748877"
          />
          <path
            d="M545.645 280.135C553.31 270.215 568.477 267.292 579.222 273.664L605.795 289.421C607.936 290.69 609.871 292.198 611.555 293.909L642.898 325.736C644.232 327.092 645.799 328.257 647.548 329.195V329.195C652.14 331.658 657.743 332.426 663.199 331.342L732.49 317.568C738.078 316.457 743.691 318.351 746.725 322.373V322.373C751.078 328.142 748.716 336.21 741.575 339.962L693.445 365.247C690.832 366.619 688.033 367.677 685.129 368.39L659.309 374.723L627.003 364.343C624.212 363.447 621.606 362.2 619.261 360.64L569.862 327.781L546.967 305.357C539.987 298.521 539.444 288.16 545.645 280.135V280.135Z"
            fill="#748877"
          />
          <path
            d="M549.889 200.559C564.005 198.561 573.072 185.392 569.92 171.466L565.304 151.067C564.629 148.084 563.499 145.198 561.953 142.508L541.151 106.3C540.215 104.67 539.576 102.902 539.265 101.08V101.08C538.508 96.6388 539.75 92.1891 542.665 88.9006L585.443 40.6446C589.219 36.3851 589.312 29.9583 585.666 25.2369V25.2369C581.69 20.0886 574.53 18.5655 569.127 21.7187L518.646 51.1802C516.492 52.4374 514.523 53.9668 512.785 55.7315L495.208 73.5852L493.337 101.549C493.105 105.007 493.496 108.508 494.491 111.893L509.298 162.277L522.753 186.796C528.098 196.537 539.052 202.092 549.889 200.559V200.559Z"
            fill="#748877"
          />
          <path
            d="M325.806 165.822C315.848 176.45 297.524 177.337 287.044 167.7L235.974 120.739L206.091 99.2818C200.165 95.0266 192.555 92.8345 184.696 93.1188L138.652 94.7847C130.116 95.0935 122.478 90.7238 119.63 83.9029V83.9029C115.198 73.2889 123.971 61.6303 137.227 60.5173L189.99 56.087C193.089 55.8268 196.201 55.952 199.228 56.4587L224.088 60.6199C228.105 61.2924 231.909 62.626 235.291 64.5483L259.763 78.4575C261.737 79.5791 263.55 80.8915 265.169 82.3702L325.009 137.028C333.597 144.872 333.936 157.146 325.806 165.822V165.822Z"
            fill="#748877"
          />
          <path
            d="M158.501 368.796C157.063 368.321 155.391 369.067 154.783 370.456V370.456C154.318 371.517 154.601 372.684 155.489 373.365L156.274 373.968C157.163 374.65 158.346 374.932 159.539 374.747L160.079 374.664C161.109 374.504 162.145 374.614 163.068 374.98L179.058 381.327L193.927 385.068C195.163 385.379 196.521 384.718 197.029 383.559V383.559C197.567 382.332 196.954 381.011 195.67 380.625L180.146 375.964L164.736 372.655C163.445 372.378 162.324 371.697 161.552 370.722L161.207 370.285C160.789 369.757 160.212 369.36 159.541 369.139L158.501 368.796Z"
            fill="#748877"
          />
          <path
            d="M142.43 390.365C140.423 390.584 139.058 392.391 139.399 394.379L139.472 394.803C139.732 396.325 140.844 397.605 142.336 398.1L142.394 398.12C143.879 398.613 145.483 398.264 146.558 397.214L146.655 397.119C147.408 396.384 148.422 395.961 149.502 395.932L165.45 395.499C166.532 395.469 167.605 395.342 168.656 395.117L181.334 392.409C183.059 392.041 184.154 390.418 183.855 388.672V388.672C183.531 386.784 181.707 385.46 179.814 385.739L164.602 387.983L149.6 391.98C148.179 392.359 146.634 392.1 145.367 391.272L144.9 390.967C144.163 390.485 143.287 390.271 142.43 390.365V390.365Z"
            fill="#748877"
          />
          <path
            d="M146.317 410.083C144.565 410.896 144.006 412.876 145.075 414.479L145.617 415.291C146.439 416.525 147.935 417.298 149.498 417.298L149.686 417.298C151.231 417.298 152.568 416.489 153.099 415.233V415.233C153.527 414.22 154.488 413.483 155.687 413.247L169.758 410.482C172.964 409.852 175.826 408.387 177.99 406.267L184.326 400.062C185.351 399.058 185.483 397.537 184.653 396.293V396.293C183.414 394.434 180.619 393.977 178.957 395.361L170.321 402.555C169.36 403.355 168.256 404.01 167.047 404.497L153.793 409.834C152.569 410.327 151.159 410.413 149.806 410.078L148.926 409.86C148.033 409.639 147.102 409.718 146.317 410.083V410.083Z"
            fill="#748877"
          />
          <path
            d="M172.158 426.816C171.349 428.301 171.981 430.01 173.56 430.605L175.923 431.496C177.07 431.928 178.427 431.773 179.518 431.085L179.877 430.858C181.126 430.071 181.695 428.646 181.256 427.404V427.404C180.903 426.402 181.2 425.259 182.028 424.432L190.693 415.784C193.219 413.263 194.768 410.079 195.072 406.785L195.733 399.61C195.869 398.136 195.008 396.808 193.564 396.263V396.263C191.222 395.381 188.429 396.879 187.981 399.259L186.283 408.276C186.043 409.548 185.552 410.787 184.832 411.931L178.142 422.572C177.446 423.679 176.327 424.528 175.021 424.94L174.14 425.218C173.285 425.488 172.565 426.068 172.158 426.816V426.816Z"
            fill="#748877"
          />
          <path
            d="M118.914 112.959C117.831 114.26 115.765 114.593 114.323 113.699V113.699C113.277 113.05 112.815 111.901 113.153 110.788L113.291 110.333C113.629 109.222 114.56 108.297 115.79 107.848L116.095 107.737C117.043 107.391 117.851 106.794 118.398 106.036L126.876 94.2688C127.358 93.6004 127.897 92.9632 128.49 92.3629L137.322 83.4187C138.299 82.4289 139.96 82.2242 141.129 82.9494V82.9494C142.379 83.7245 142.601 85.2664 141.622 86.3692L131.979 97.2274L121.35 107.152C120.408 108.031 119.875 109.175 119.863 110.346L119.859 110.814C119.852 111.479 119.6 112.135 119.141 112.687L118.914 112.959Z"
            fill="#748877"
          />
          <path
            d="M91.1622 102.952C89.365 103.705 87.1202 102.921 86.1772 101.211L85.7876 100.505C85.0582 99.1824 85.1743 97.657 86.0886 96.5537V96.5537C87.035 95.4116 88.6681 94.9238 90.278 95.3023L90.3541 95.3202C91.4499 95.5779 92.5801 95.4491 93.5104 94.9606L107.001 87.8765C107.971 87.3673 109 86.9485 110.074 86.6262L122.176 82.9955C123.939 82.4667 125.961 83.2819 126.84 84.8756V84.8756C127.795 86.6067 127.052 88.6033 125.194 89.2964L111.232 94.5066L96.1864 98.2077C94.7261 98.5669 93.5754 99.5218 93.0559 100.805L92.8677 101.27C92.5644 102.02 91.9568 102.619 91.1622 102.952V102.952Z"
            fill="#748877"
          />
          <path
            d="M81.726 84.6598C79.708 84.8069 77.9244 83.2752 77.764 81.2575L77.7322 80.8571C77.6101 79.321 78.3778 77.8692 79.7088 77.1191L79.841 77.0446C81.1259 76.3205 82.7222 76.3718 83.9906 77.178V77.178C85.0134 77.8281 86.2641 77.995 87.4012 77.6331L101.302 73.2088C104.174 72.2949 107.258 72.1824 110.223 72.8833L119.975 75.1883C121.407 75.5267 122.467 76.7567 122.582 78.2145V78.2145C122.751 80.3298 120.911 82.0126 118.807 81.668L106.466 79.6466C105.213 79.4414 103.941 79.415 102.688 79.5684L88.0014 81.3665C86.701 81.5257 85.4992 82.1106 84.5833 83.03L83.9878 83.6279C83.3865 84.2314 82.5847 84.5972 81.726 84.6598V84.6598Z"
            fill="#748877"
          />
          <path
            d="M92.4934 58.6167C90.8002 57.7279 90.3525 55.7501 91.4993 54.2257L92.1627 53.3438C93.0415 52.1755 94.5567 51.4892 96.1022 51.5592L96.3102 51.5686C97.8543 51.6386 99.1469 52.5109 99.5977 53.7871V53.7871C99.961 54.8159 100.879 55.5981 102.065 55.8886L115.866 59.2695C119.071 60.0548 121.88 61.6722 123.936 63.9164L129.818 70.3387C130.787 71.3967 130.832 72.922 129.93 74.1212V74.1212C128.574 75.924 125.72 76.2348 124.122 74.7537L116.016 67.2406C115.098 66.3896 114.024 65.6777 112.834 65.1308L99.9654 59.2151C98.7662 58.6639 97.3582 58.5114 95.9872 58.7843L95.0949 58.9619C94.1891 59.1422 93.2595 59.0189 92.4934 58.6167V58.6167Z"
            fill="#748877"
          />
          <path
            d="M761.334 349.205C762.767 349.715 764.47 349.009 765.122 347.633V347.633C765.619 346.584 765.37 345.411 764.499 344.706L763.746 344.096C762.875 343.392 761.695 343.081 760.492 343.239L759.957 343.309C758.923 343.445 757.89 343.312 756.978 342.925L741.193 336.218L726.458 332.145C725.226 331.804 723.842 332.433 723.298 333.58V333.58C722.723 334.794 723.3 336.131 724.58 336.548L739.938 341.555L755.236 345.211C756.52 345.518 757.621 346.224 758.362 347.217L758.692 347.659C759.094 348.197 759.66 348.608 760.327 348.846L761.334 349.205Z"
            fill="#748877"
          />
          <path
            d="M778.089 328.013C780.103 327.84 781.523 326.06 781.244 324.059L781.186 323.645C780.973 322.117 779.902 320.812 778.429 320.284L778.364 320.261C776.897 319.734 775.286 320.046 774.18 321.071L774.077 321.166C773.302 321.884 772.276 322.283 771.196 322.288L755.235 322.36C754.154 322.365 753.08 322.468 752.026 322.668L739.257 325.09C737.525 325.418 736.382 327.016 736.627 328.767V328.767C736.891 330.662 738.67 332.027 740.567 331.792L755.852 329.893L770.975 326.236C772.407 325.89 773.942 326.183 775.182 327.04L775.64 327.355C776.362 327.854 777.23 328.087 778.089 328.013V328.013Z"
            fill="#748877"
          />
          <path
            d="M774.815 308.216C776.594 307.442 777.21 305.463 776.183 303.823L775.696 303.046C774.904 301.781 773.422 300.965 771.851 300.929L771.674 300.925C770.129 300.89 768.771 301.667 768.201 302.912V302.912C767.741 303.916 766.76 304.63 765.556 304.838L751.365 307.29C748.162 307.844 745.277 309.233 743.062 311.29L736.504 317.378C735.453 318.353 735.278 319.872 736.07 321.136V321.136C737.25 323.021 740.013 323.549 741.705 322.213L750.596 315.19C751.577 314.415 752.695 313.789 753.913 313.332L767.344 308.291C768.58 307.828 769.989 307.774 771.332 308.14L772.205 308.378C773.091 308.619 774.022 308.562 774.815 308.216V308.216Z"
            fill="#748877"
          />
          <path
            d="M749.509 290.905C750.365 289.437 749.777 287.709 748.205 287.073L745.912 286.146C744.767 285.683 743.394 285.807 742.277 286.473L741.917 286.688C740.644 287.447 740.034 288.854 740.434 290.108V290.108C740.756 291.118 740.425 292.252 739.573 293.058L730.614 301.533C728.025 303.982 726.388 307.109 725.984 310.377L725.094 317.571C724.913 319.037 725.735 320.383 727.165 320.961V320.961C729.477 321.896 732.307 320.479 732.826 318.126L734.814 309.108C735.092 307.846 735.62 306.624 736.371 305.502L743.4 295.003C744.128 293.915 745.272 293.094 746.59 292.712L747.478 292.454C748.343 292.203 749.08 291.641 749.509 290.905V290.905Z"
            fill="#748877"
          />
          <path
            d="M582.856 1.80186C583.903 0.457852 585.966 0.0598067 587.442 0.916996V0.916996C588.51 1.53694 589.01 2.67509 588.711 3.80371L588.596 4.23862C588.297 5.36465 587.393 6.32284 586.174 6.80604L585.884 6.92115C584.949 7.29139 584.163 7.91032 583.643 8.68421L575.605 20.6577C575.144 21.3448 574.623 22.002 574.047 22.6233L565.568 31.7721C564.619 32.7965 562.961 33.0521 561.766 32.3584V32.3584C560.488 31.6164 560.217 30.0717 561.165 28.9326L570.391 17.8448L580.649 7.64959C581.561 6.74275 582.054 5.58248 582.023 4.41166L582.011 3.94709C581.993 3.28065 582.222 2.61531 582.664 2.04845L582.856 1.80186Z"
            fill="#748877"
          />
          <path
            d="M610.984 11.0425C612.75 10.2438 615.013 10.956 616.008 12.624L616.455 13.3736C617.224 14.6613 617.161 16.1739 616.291 17.2949V17.2949C615.383 18.4665 613.758 19.0015 612.13 18.6647L612.064 18.6509C610.96 18.4226 609.834 18.582 608.92 19.0958L595.708 26.525C594.75 27.0638 593.728 27.513 592.658 27.8662L580.729 31.8035C578.973 32.383 576.914 31.6256 575.977 30.0564V30.0564C574.959 28.3507 575.642 26.3297 577.489 25.5816L591.227 20.0162L606.121 15.9216C607.572 15.5227 608.692 14.5356 609.165 13.2392L609.335 12.7708C609.611 12.0136 610.199 11.3976 610.984 11.0425V11.0425Z"
            fill="#748877"
          />
          <path
            d="M621.079 29.0776C623.09 28.8773 624.927 30.3579 625.161 32.3664L625.208 32.7742C625.386 34.3058 624.671 35.7769 623.366 36.5626L623.24 36.639C621.982 37.3968 620.383 37.3878 619.086 36.6157V36.6157C618.041 35.9931 616.784 35.8594 615.66 36.2513L601.934 41.0381C599.093 42.029 596.01 42.2234 593.016 41.6002L583.194 39.5561C581.749 39.2554 580.644 38.0545 580.476 36.6011V36.6011C580.23 34.4909 582.012 32.7598 584.131 33.0492L596.529 34.7421C597.791 34.9143 599.065 34.907 600.313 34.7203L614.924 32.5355C616.218 32.3418 617.399 31.7253 618.281 30.7823L618.854 30.1691C619.433 29.5499 620.222 29.1629 621.079 29.0776V29.0776Z"
            fill="#748877"
          />
          <path
            d="M611.258 55.3906C612.986 56.2357 613.498 58.2153 612.396 59.786L611.805 60.6283C610.958 61.8348 609.453 62.5717 607.897 62.5424L607.701 62.5387C606.156 62.5096 604.836 61.6739 604.339 60.4088V60.4088C603.938 59.3889 602.994 58.6326 601.801 58.3741L587.837 55.3494C584.631 54.6548 581.79 53.1262 579.67 50.9545L573.522 44.6549C572.52 43.6287 572.425 42.1049 573.285 40.8793V40.8793C574.573 39.0433 577.394 38.6466 579.03 40.0714L587.447 47.4025C588.39 48.2241 589.482 48.903 590.684 49.415L603.781 54.9958C604.995 55.5132 606.405 55.6272 607.766 55.318L608.651 55.1169C609.55 54.9127 610.481 55.0104 611.258 55.3906V55.3906Z"
            fill="#748877"
          />
          <path
            d="M331.243 168.221C329.34 167.147 327.045 166.919 324.904 167.593L319.764 169.21C312.999 171.338 311.768 180.359 317.78 183.752L322.347 186.33C324.25 187.404 326.545 187.631 328.686 186.958L333.826 185.341C340.591 183.213 341.822 174.192 335.81 170.799L331.243 168.221Z"
            fill="#7E9080"
          />
          <path
            d="M403.755 181.193C401.852 180.119 399.557 179.892 397.415 180.566L392.276 182.182C385.51 184.31 384.279 193.331 390.291 196.725L394.859 199.303C396.761 200.377 399.057 200.604 401.198 199.931L406.338 198.314C413.103 196.186 414.334 187.165 408.322 183.771L403.755 181.193Z"
            fill="#7E9080"
          />
          <path
            d="M137.636 226.907C135.734 225.833 133.438 225.606 131.297 226.279L126.158 227.896C119.392 230.024 118.161 239.045 124.173 242.438L128.741 245.016C130.643 246.09 132.939 246.318 135.08 245.644L140.219 244.027C146.985 241.899 148.216 232.878 142.204 229.485L137.636 226.907Z"
            fill="#7E9080"
          />
          <path
            d="M112.257 210.228C110.354 209.154 108.059 208.926 105.918 209.6L100.778 211.217C94.0128 213.345 92.7819 222.366 98.7938 225.759L103.361 228.337C105.264 229.411 107.559 229.638 109.7 228.965L114.84 227.348C121.605 225.22 122.836 216.199 116.824 212.806L112.257 210.228Z"
            fill="#7E9080"
          />
          <path
            d="M86.8781 194.166C84.9753 193.092 82.6801 192.865 80.5389 193.538L75.3992 195.155C68.6339 197.283 67.403 206.304 73.4149 209.697L77.9822 212.276C79.885 213.349 82.1802 213.577 84.3214 212.903L89.4611 211.287C96.2264 209.158 97.4573 200.138 91.4454 196.744L86.8781 194.166Z"
            fill="#7E9080"
          />
          <path
            d="M128.21 191.077C126.307 190.003 124.012 189.776 121.87 190.449L116.731 192.066C109.965 194.194 108.735 203.215 114.746 206.609L119.314 209.187C121.216 210.261 123.512 210.488 125.653 209.814L130.793 208.198C137.558 206.07 138.789 197.049 132.777 193.655L128.21 191.077Z"
            fill="#7E9080"
          />
          <path
            d="M155.039 176.869C153.136 175.795 150.841 175.568 148.7 176.241L143.56 177.858C136.795 179.986 135.564 189.007 141.576 192.401L146.143 194.979C148.046 196.053 150.341 196.28 152.483 195.606L157.622 193.99C164.388 191.862 165.618 182.841 159.606 179.447L155.039 176.869Z"
            fill="#7E9080"
          />
          <path
            d="M486.418 228.142C484.515 227.068 482.22 226.841 480.079 227.514L474.939 229.131C468.174 231.259 466.943 240.28 472.955 243.674L477.522 246.252C479.425 247.326 481.72 247.553 483.861 246.879L489.001 245.263C495.766 243.135 496.997 234.114 490.985 230.72L486.418 228.142Z"
            fill="#7E9080"
          />
          <path
            d="M553.129 189.842C551.226 188.768 548.931 188.541 546.79 189.214L541.65 190.831C534.885 192.959 533.654 201.98 539.666 205.373L544.233 207.951C546.136 209.025 548.431 209.253 550.572 208.579L555.712 206.962C562.477 204.834 563.708 195.813 557.696 192.42L553.129 189.842Z"
            fill="#7E9080"
          />
          <path
            d="M576.333 207.756C574.43 206.682 572.135 206.455 569.993 207.129L564.854 208.745C558.088 210.873 556.858 219.894 562.87 223.288L567.437 225.866C569.34 226.94 571.635 227.167 573.776 226.494L578.916 224.877C585.681 222.749 586.912 213.728 580.9 210.334L576.333 207.756Z"
            fill="#7E9080"
          />
          <path
            d="M619.84 223.818C617.937 222.744 615.642 222.517 613.501 223.19L608.361 224.807C601.596 226.935 600.365 235.956 606.377 239.349L610.944 241.927C612.847 243.001 615.142 243.229 617.283 242.555L622.423 240.938C629.188 238.81 630.419 229.789 624.407 226.396L619.84 223.818Z"
            fill="#7E9080"
          />
          <path
            d="M438.56 223.2C436.657 222.126 434.362 221.899 432.221 222.572L427.081 224.189C420.316 226.317 419.085 235.338 425.097 238.732L429.664 241.31C431.567 242.384 433.862 242.611 436.004 241.937L441.143 240.321C447.909 238.193 449.139 229.172 443.127 225.778L438.56 223.2Z"
            fill="#879D8A"
          />
          <path
            d="M495.12 189.224C493.217 188.15 490.922 187.923 488.781 188.596L483.641 190.213C476.876 192.341 475.645 201.362 481.657 204.756L486.224 207.334C488.127 208.408 490.422 208.635 492.563 207.961L497.703 206.345C504.468 204.217 505.699 195.196 499.687 191.802L495.12 189.224Z"
            fill="#7E9080"
          />
          <path
            d="M468.29 205.286C466.387 204.212 464.092 203.984 461.951 204.658L456.811 206.275C450.046 208.403 448.815 217.424 454.827 220.817L459.394 223.395C461.297 224.469 463.592 224.696 465.734 224.023L470.873 222.406C477.639 220.278 478.869 211.257 472.857 207.864L468.29 205.286Z"
            fill="#879D8A"
          />
          <path
            d="M513.248 212.699C511.345 211.625 509.05 211.397 506.909 212.071L501.769 213.688C495.004 215.816 493.773 224.837 499.785 228.23L504.352 230.808C506.255 231.882 508.55 232.11 510.691 231.436L515.831 229.819C522.596 227.691 523.827 218.67 517.815 215.277L513.248 212.699Z"
            fill="#879D8A"
          />
          <path
            d="M492.219 255.323C490.317 254.249 488.021 254.022 485.88 254.696L480.741 256.312C473.975 258.44 472.744 267.461 478.756 270.855L483.324 273.433C485.226 274.507 487.522 274.734 489.663 274.061L494.802 272.444C501.568 270.316 502.799 261.295 496.787 257.901L492.219 255.323Z"
            fill="#7E9080"
          />
          <path
            d="M569.807 236.791C567.904 235.717 565.609 235.489 563.468 236.163L558.328 237.78C551.563 239.908 550.332 248.929 556.344 252.322L560.911 254.9C562.814 255.974 565.109 256.201 567.25 255.528L572.39 253.911C579.155 251.783 580.386 242.762 574.374 239.369L569.807 236.791Z"
            fill="#7E9080"
          />
          <path
            d="M447.987 285.593C446.084 284.519 443.789 284.292 441.648 284.965L436.508 286.582C429.743 288.71 428.512 297.731 434.524 301.124L439.091 303.702C440.994 304.776 443.289 305.004 445.43 304.33L450.57 302.713C457.335 300.585 458.566 291.564 452.554 288.171L447.987 285.593Z"
            fill="#7E9080"
          />
          <path
            d="M443.383 138.829C441.931 138.173 440.297 137.977 438.696 138.268L436.916 138.591C429.318 139.971 427.534 150.096 434.247 153.554V153.554C436.01 154.462 438.086 154.671 440.047 154.132L441.735 153.667C448.99 151.671 450.08 141.856 443.383 138.829V138.829Z"
            fill="#7E9080"
          />
          <ellipse
            cx="9.52307"
            cy="20.24"
            rx="9.52307"
            ry="20.24"
            transform="matrix(-0.440513 0.897746 0.942043 0.335492 61.9097 236.457)"
            fill="#D9D9D9"
          />
          <ellipse
            cx="9.52307"
            cy="20.24"
            rx="9.52307"
            ry="20.24"
            transform="matrix(-0.440513 -0.897746 0.942043 -0.335492 64.5059 181.165)"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className="bg-[#748877] text-white font-mono w-[90vw] rounded-4xl mt-36 mx-32 px-36 py-20 flex-col justify-end align-end items-center mb-20">
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./website development</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "Website Redesign for local non-profit organization, ASCENDtials",
              ascend,
              "photo"
            )}
            {project(
              "Main website redesign for UCSD's Data Science Student Society",
              ds3,
              "photo"
            )}
            {project(
              "Consulting website redesign for UCSD's Data Science Student Society",
              consulting,
              "photo"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./3d modeling</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "Blender - Blue car with glowing headlights and tinted windows",
              "1sOA-_QFZFkpbGOEOtuwEAWA38iR4Ix9g",
              "video"
            )}
            {project(
              "Blender - Winter Scene",
              "18aq7hg7TeZZ6sfiAg56FdL3J-bwkjS8W",
              "video"
            )}
            {project(
              "Blender - Donut with sprinkles",
              "1yD8b8MLdYxxpAwOsmEdku4q7WXXrmU-w",
              "video"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./hardware</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "'Magic Mirror'for IEEE quarterly projects. Uses ChatGpt AI to compliment photograph",
              mirror,
              "photo"
            )}
            {project(
              "Self playing guitar made with my team for IEEE quarterly projects, using arduinos and a 3D printed stand",
              "1aG2AoE3aque1Vt77wHr2rR48--pKkqy4",
              "video"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./2d art and design</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "Family portrait - pencil sketch",
              annu,
              "photo"
            )}
            {project(
              "Portrait - pencil sketch",
              greektragedy,
              "photo"
            )}
            {project(
              "Lemur - pencil sketch",
              lemur,
              "photo"
            )}
            {project(
              "Car designed for my younger brother, featuring his favorite superheroes",
              marvel,
              "photo"
            )}
            {project(
              "Mona Lisa, recreated with prismacolor color pencils",
              "13ngqzH-4pSXEm8JskU_xrJQKl0RXgtTj",
              "video"
            )}
            {project(
              "Wandavision portrait, made with tempera and prismacolor pencils",
              wanda,
              "photo"
            )}
            {project(
              "Portrait, made with oil paint",
              pearlgirl,
              "photo"
            )}
            {project(
              "Bat animation for a previous project, made in Pixelart",
              "1qlBA1u3uLQxWiIp7ikoHpx_FT9uqtQ4r",
              "video"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

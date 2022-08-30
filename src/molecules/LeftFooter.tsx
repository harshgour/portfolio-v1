import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "../atoms/Link";

type Props = {};

const LeftFooter = (props: Props) => {
	return (
		<>
			<div className='profile flex flex-row items-center justify-start mb-8 text-[11pt]'>
				<img
					src='/images/og-image.jpg'
					className='h-14 w-14 object-scale-down rounded-full mr-6'
				/>
				<a
					href='mailto:harshgour.dev@gmail.com'
					className='mail-link font-semibold no-underline dark:text-[#A5A5A7] dark:hover:text-[#ffffff] text-[#5A5A58] hover:text-[#000000]'>
					harshgour.dev@gmail.com
				</a>
			</div>
			<div className='details font-light text-[11pt] self-stretch flex items-center justify-start flex-wrap'>
				<Link href='https://github.com/harshgour' target='_blank'>
					<FaGithub size={18} />
					<span className='ml-4 mr-2'>GitHub</span>
					<HiOutlineExternalLink size={16} />
				</Link>
				<Link href='https://www.linkedin.com/in/harshgour/' target='_blank'>
					<FaLinkedin size={18} />
					<span className='ml-4 mr-2'>Linkedin</span>
					<HiOutlineExternalLink size={16} />
				</Link>
			</div>
		</>
	);
};

export default LeftFooter;

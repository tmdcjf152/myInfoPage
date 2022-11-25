import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { bagie, blue } from '../styles/theme';

const Skill = () => {
	return (
		<SkillBlock>
			<span className='title-text'>Skill</span>
			<div className='skill-inner-box'>
			<Fade left delay={500}>
				<div className='skill-box'>
					<h1>FRONT</h1>
					<div className='skill-box-style'>
						{/* HTML */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/9xLoV3.png' alt='' />
								<span className='skill-name'>HTML</span>
							</div>
						</div>
						</Fade>
						{/* CSS */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/OSlnYw.png' alt='' />
								<span className='skill-name'>CSS</span>
							</div>
						</div>
						</Fade>
						{/* JS */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='' />
								<span className='skill-name'>JavaScript</span>
							</div>
						</div>
						</Fade>
						{/* TS */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/Mrc2j3.png' alt='' />
								<span className='skill-name'>TypeScript</span>
							</div>
						</div>
						</Fade>
						{/* React */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/KGvCgh.png' alt='' />
								<span className='skill-name'>React.js</span>
							</div>
						</div>
						</Fade>
						{/* Vite */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/6MtPMV.png' alt='' />
								<span className='skill-name'>Vite</span>
							</div>
						</div>
						</Fade>
						{/* Sass */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/rbDvJ9.png' alt='' />
								<span className='skill-name'>Sass</span>
							</div>
						</div>
						</Fade>
						{/* Styled-Components */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/3PGR4d.png' alt='' />
								<span className='skill-name'>Styled Components</span>
							</div>
						</div>
						</Fade>
					</div>
				</div>
				</Fade>
				<Fade left delay={1000}>
				<div className='skill-box'>
					<h1>ETC</h1>
					<div className='skill-box-style'>
						{/* Git */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/Swv1vK.png' alt='' />
								<span className='skill-name'>Git</span>
							</div>
						</div>
						</Fade>
						{/* GItHub */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/vAWxVd.png' alt='' />
								<span className='skill-name'>GItHub</span>
							</div>
						</div>
						</Fade>
						{/* Figma */}
						<Fade >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/DgT1xY.png' alt='' />
								<span className='skill-name'>Figma</span>
							</div>
						</div>
						</Fade>
						{/* Slack */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/54M9ho.png' alt='' />
								<span className='skill-name'>Slack</span>
							</div>
						</div>
						</Fade>
						{/* Notion */}
						<Fade  >
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/7shGGO.png' alt='' />
								<span className='skill-name'>Notion</span>
							</div>
						</div>
						</Fade>
					</div>
				</div>
				</Fade>
				<Fade left delay={1500}>
				<div className='skill-box'>
					<h1>BACK</h1>
					<Fade  >
					<div className='skill-box-style'>
						{/* Node.js */}
						<div className='skill-name-box'>
							<div className='skill-logo'>
								<img src='https://ifh.cc/g/VdMWLY.png' alt='' />
								<span className='skill-name'>Node.js</span>
							</div>
						</div>
					</div>
					</Fade>
				</div>
				</Fade>
			</div>
		</SkillBlock>
	);
};

export default Skill;

const SkillBlock = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 10px 20px 20px 20px;
	background: ${bagie};
	color: #000;
	.title-text {
		display: block;
		width: 100%;
		height: 100px;
		padding: 100px;
		text-align: center;
		font-size: 50px;
		color: #000;
		font-family: 'Do Hyeon', sans-serif;
	}
	.skill-inner-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		margin-bottom: 100px;
		.skill-box {
			width: 33%;
			height: 100vh;
			padding: 10px;
			z-index: 1;
			.skill-box-style {
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				width: 100%;
				height: 100%;
				padding: 10px;
				border: 4px solid #fff;
				background: #ffffff;
				box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
				.skill-name-box {
					width: 100px;
					height: 100px;
					padding: 10px;
					margin-bottom: 30px;
					.skill-logo {
						width: 100%;
						height: 100%;
						.skill-name {
							display: flex;
							justify-content: center;
							align-items: center;
							text-align: center;
							font-size: 20px;
							color: #000;
						}
					}
				}
			}
		}
	}
`;

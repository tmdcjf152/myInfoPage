import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { bagie, blue } from '../styles/theme';

const ContactPage = () => {
	return (
		<ContactPageBlock>
			<div className='contact-inner-box'>
				<Fade left>
					<div className='background'></div>
				</Fade>

				<div className='text-inner-box'>
					<Fade right delay={1000}>
						<span className='sub-title'>사이트를 방문해주셔서</span>
					</Fade>
					<Fade right delay={1500}>
						<span className='title'>감사합니다.</span>
					</Fade>

					<span className='text'>
						<Fade right  cascade delay={2000}>
							현업에 대한 경력은 없지만 기술 습득력 및 사회 적응력 하나는 최고라고 자부합니다.
						</Fade>
						<br />
						<Fade right  cascade delay={3000}>
							항상 일할 때 고객님들과 사장님들에게 인정받아오며 일을 해왔습니다.
							<br />
						</Fade>
						<Fade right  cascade delay={4000}>
							책임감 강한 직원이 필요하다면 연락주세요 :-)
						</Fade>
						<br />
						<Fade right  cascade delay={5000}>
							같이 일해보면 정말 잘 뽑았다고 생각할 겁니다.
							<br />
						</Fade>
						<Fade right  cascade delay={6000}>
							연락은 우측에 적힌 전화번호와 이메일로 주시면 감사하겠습니다.
						</Fade>
						<br />
						<Fade right  cascade delay={7000}>
							꼭! 같이 협업하는 날이 왔으면 좋겠습니다.
							<br />
						</Fade>
					</span>

				<div className='contact-text'>
					<span className='contact'>
					<Fade right  cascade delay={8000}>
						PHONE 010 8013-7313
						</Fade>
						<br/>
						<Fade right  cascade delay={9000}>
					E-MAIL tmdcjf1523@gmail.com
					</Fade></span>
				</div>

				</div>
			</div>
		</ContactPageBlock>
	);
};

export default ContactPage;

const ContactPageBlock = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	padding: 110px 20px 20px 20px;
	background: #fff;
	color: #000;
	.contact-inner-box {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		.background {
			position: absolute;
			bottom: 70px;
			left: -100px;
			width: 50%;
			height: 100%;
			background: ${bagie};
			z-index: 0;
		}
		.text-inner-box {
			position: relative;
			bottom: 70px;
			right: 400px;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			width: 50%;
			height: 100%;
			padding-left: 100px;
			.title {
				font-size: 50px;
				padding-bottom: 30px;
			}
			.sub-title {
				font-size: 30px;
				padding-bottom: 30px;
			}
			.text {
				font-size: 14px;
			}
			.contact{
				font-size: 20px;
				font-weight: bold;
				color: ${blue};
			}
		}

		
	}
`;

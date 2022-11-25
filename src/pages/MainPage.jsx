import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard';
import { bagie, blue } from '../styles/theme';
import Fade from 'react-reveal/Fade';

const MainPage = () => {
	return (
		<MainPageBlock>
			<div className='main-inner-box'>
				<Fade left>
				<div className='background'></div>
				</Fade>
			<Fade left delay={500}>
					<div className='profile-card-inner-box'>
						<ProfileCard />
					</div>
				</Fade>

				<div className='text-inner-box'>
				<Fade right delay={1000}>
					<span className='title'>안녕하세요</span>
					</Fade>
					<Fade right delay={1500}>
					<span className='sub-title'>프론트엔드 개발자 최승철 입니다.</span>
					</Fade>
					<Fade right delay={2000}>
					<span className='text'>
						부트 캠프를 수료하고 새로운 직업에 도전하는 신입 개발자 최승철입니다.
						<br />
						부트 캠프에서 협업을 하면서 동료와의 커뮤니케이션 방법에 대해 배웠고 <br />
						담당한 기능에 대해서는 끝까지 파고들며 끝까지 기능을 완성시키는 끈기를 가지고 있습니다.
						<br />
						또한 문제를 맡다 드렸을 때 문제의 해결 방법을 고민하고 문제를 해결하는 방법을 배우고 <br />
						코드 또한 어떻게 작성해야 효율성이 있을지 고민하고 작성하는 방법을 배웠습니다.
						<br />
						저는 웹디자인 퍼블리셔 프론트엔드 개발자 이 세 가지의 관심이 많고 앞으로 좋은 <br />
						프론트엔드 개발자가 되기 위해 끊임없이 학습하는 개발자가 되겠습니다.
					</span>
					</Fade>
				</div>
			</div>
		</MainPageBlock>
	);
};

export default MainPage;

const MainPageBlock = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	padding: 60px 20px 20px 20px;
	background: #fff;
	color: #000;
	.main-inner-box {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		.background {
			position: absolute;
			bottom: 60px;
			left: -100px;
			width: 50%;
			height: 100%;
			background: ${bagie};
			z-index: 0;
		}
		.profile-card-inner-box {
			display: flex;
			justify-content: right;
			align-items: center;
			width: 50%;
			height: 100%;
		}
		.text-inner-box {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			width: 50%;
			height: 100%;
			padding-left: 100px;
			.title {
				font-size: 100px;
				padding-bottom: 50px;
			}
			.sub-title {
				font-size: 40px;
				padding-bottom: 50px;
			}
			.text {
				font-size: 16px;
				line-height: 1.5;
			}
		}
	}
`;

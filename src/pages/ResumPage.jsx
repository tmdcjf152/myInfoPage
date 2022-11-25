import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { bagie, blue } from '../styles/theme';

const ResumPage = () => {
	return (
		<ResumPageBlock>
			<div className='resume-inner-box'>
				<span className='title-text'>Resume</span>

				<div className='resume-content-box'>
					<div className='content-inner-box'>
						<span className='sub-title'>Experience</span>
						{/* 부사관 */}
						<Fade right>
							<div className='content-box'>
								<div className='content'>
									<div className='since-box'>
										<span className='since'>2013 - 2018</span>
										<span className='company'>육군 제 7보병사단</span>
										<div className='company-sub'>부사관 / 육군</div>
									</div>
									<div className='text-box'>
										<span className='career'>- 신병 및 소속병사 관리</span>
										<span className='career'>- 연대 지휘통제실 상황 업무</span>
									</div>
								</div>
							</div>
						</Fade>
						{/* 헤어샵 */}
						<Fade right >
							<div className='content-box'>
								<div className='content'>
									<div className='since-box'>
										<span className='since'>2018 - 2021</span>
										<span className='company'>헤어샵</span>
										<div className='company-sub'>헤어디자이너</div>
									</div>
									<div className='text-box'>
										<span className='career'>- 헤어 인턴 2년 근무</span>
										<span className='career'>- 헤어 디자이너 1년 근무</span>
									</div>
								</div>
							</div>
						</Fade>
					</div>
					<div className='content-inner-box'>
						<span className='sub-title'>Education</span>
						{/* 부트캠프 */}
						<Fade right>
						<div className='content-box'>
							<div className='content'>
								<div className='since-box'>
									<span className='since'>2022.07 - 2022.10</span>
									<span className='company'>부트캠프(JUSTCODE) 수료</span>
									<div className='company-sub'>FRONTEND 과정</div>
								</div>
								<div className='text-box'>
									<span className='career '>
										HTML, CSS, JavaScript의 기초 개념과 문법을 학습
										<br />
										React, NodeJS등 현업에서 많은 기업들이 요구하는 기술들을 습득
										<br />
										Web 서비스 파악 및 개발 조식과 문화 이해
										<br />
										웹 개발에 필요한 기본 컴퓨터 공학 지식 습득 (Database, Modeling, HTTP)
										<br />
										코드 버전 관리를 위한 Git과 개발 협업을 위한 Github 사용법 학습
										<br />
										HTTP 네트워크 통신을 통한 데이터 요청 및 처리 방법 학습
										<br />
										로그인/회원가입 기능 구현을 통한 인증/인가 프로세스 학습
										<br />
										알고리즘 문제를 통한 프로그래밍 언어 심화 학습 및 코딩 테스트 훈련
										<br />
									</span>
								</div>
							</div>
						</div>
						</Fade>
						{/* 디코드랩 */}
						<Fade right >
						<div className='content-box'>
							<div className='content'>
								<div className='since-box'>
									<span className='since'>2022.03 - 2022.05</span>
									<span className='company'>DCODEJAB 컴퓨터학원 수료</span>
									<div className='company-sub'>UI/UX FRONTEND 과정</div>
								</div>
								<div className='text-box'>
									<span className='career '>
										UI/UX 디자인의 기초 개념 학습
										<br />
										웹접근성을 생각한 웹페이지 설계 학습
										<br /> 
										ES6 를 이용한 각종 모션그래픽 학습
										<br /> 
										React 기본 개념 학습
									</span>
								</div>
							</div>
						</div>
						</Fade>
					</div>
				</div>
			</div>
		</ResumPageBlock>
	);
};

export default ResumPage;

const ResumPageBlock = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 110px 20px 20px 20px;
	background: ${bagie};
	color: #000;
	.resume-inner-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		.title-text {
			display: block;
			width: 100%;
			height: 100px;
			padding: 100px;
			text-align: center;
			font-size: 50px;
			font-family: 'Do Hyeon', sans-serif;
		}
		.resume-content-box {
			width: 100%;
			height: 100%;
			padding: 100px;
			.sub-title {
				display: block;
				font-size: 30px;
				margin-bottom: 20px;
				font-family: 'Do Hyeon', sans-serif;
			}
			.content-inner-box {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 100%;
				height: 100%;
				padding: 10px;
				margin-bottom: 100px;
				.content-box {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					width: 100%;
					height: 100%;
					padding: 10px;
					margin-top: 50px;
					background: #ffffff;
					box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
					.content {
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						width: 100%;
						margin: 50px 0px;
						padding-left: 100px;
						.since-box {
							display: flex;
							flex-direction: column;
							.since {
								margin-bottom: 10px;
								font-size: 30px;
								color: ${blue};
								font-family: 'Do Hyeon', sans-serif;
							}
							.company {
								font-size: 20px;
								color: #000;
								font-family: 'Do Hyeon', sans-serif;
							}
							.company-sub {
								font-size: 17px;
								color: #000;
								font-family: 'Do Hyeon', sans-serif;
							}
						}
						.text-box {
							display: flex;
							flex-direction: column;
							.career {
								margin-bottom: 10px;
								font-size: 18px;
								color: #000;
								margin-left: 100px;
							}
						}
					}
				}
			}
		}
	}
`;

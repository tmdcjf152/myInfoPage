import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { bagie, blue } from '../styles/theme';
import { FaUserCircle } from 'react-icons/fa';
import { BsCalendarCheck } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';

const ResumPage = () => {
	return (
		<ResumPageBlock>
			<div className='resume-inner-box'>
				<span className='title-text'>Resume</span>

				<div className='resume-content-box'>
					{/* INFOMATION */}
					<div className='content-inner-box'>
						<span className='sub-title'>My infomation</span>
						{/* 부사관 */}
						<Fade right>
							<div className='content-box'>
								<div className='content'>
									<span className='info-text'>
										<FaUserCircle />
										이름 : 최승철
									</span>
									<span className='info-text'>
										<BsCalendarCheck />
										생년월일 : 96. 01. 05
									</span>
									<span className='info-text'>
										<FaMapMarkerAlt />
										주소지 : 경기도 부천시
									</span>
									<span className='info-text'>
										<AiFillPhone />
										연락처 : 010-8013-7313
									</span>
									<span className='info-text'>
										<AiFillMail />
										이메일 : tmdcjf1523@gmail.com
									</span>
								</div>
							</div>
						</Fade>
					</div>
					{/* EXPERIENCE */}
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
						<Fade right>
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
					{/* EDUCATION */}
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
						<Fade right>
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

					{/* COVER LETTER */}
					<div className='content-inner-box'>
						<span className='sub-title'>Cover Letter</span>
						{/* 성장과정 */}
						<Fade right>
							<div className='title-box'>
								<span>성장과정</span>
							</div>
							<div className='content-box'>
								<div className='cover-letter-content'>
									<div className='cover-letter-text'>
										저는 어렸을 때부터 무엇을 하든 시작하면 끝을 보라는 어머니의 말씀을 들으며 자라 왔습니다. 직업군인이 되기 위해 입대했지만 많은 동기가 중간에
										포기하고 퇴교를 하면서 저 또한 점점 높아지는 훈련 강도가 듦 어진 군장 무게처럼 무거워지면서 퇴교에 대한 마음이 커졌지만 내가 결정해서
										시작했으니 끝을 보자는 마음으로 훈련에 임하여 18년도에 하사로 임관하게 되었습니다. <br />
										학생 때는 한없이 내향적이었던 저는 임관 이후 분대원들을 이끌어야 한다는 마음가짐으로 어느 순간 외향적인 성격이 되어 남들 앞에서도 당당한
										성격을 가지게 되었습니다. 딱딱한 군대 분위기를 없애기 위해 먼저 병사들에게 다가가면서 먼저 손 내미는 것이 익숙해졌고 사람들과 친해지는 방법
										또한 배우게 되었습니다. 전역 이후에는 미용을 시작하면서 고객님들과 서슴없는 소통으로 처음 방문해 주시는 분들도 편한 마음으로 재방문할 수
										있도록 노력했으며 서비스직에 종사하면서 상대방에게 말하기 전에 먼저 상대 입장에서 한 번 더 생각해 상대방이 기분 나쁘지 않도록 말하는 법을
										배웠습니다. 이처럼 처음 시작하면 어중간하게 끝을 내는 것이 아닌 제가 할 수 있는 최선을 다해 노력하고 배워가는 자세를 가지고 있습니다.
									</div>
								</div>
							</div>
						</Fade>
						{/* 성격의 장단점 */}
						<Fade right>
							<div className='title-box'>
								<span>성격의 장단점</span>
							</div>
							<div className='content-box'>
								<div className='cover-letter-content'>
									<div className='cover-letter-text'>
										“저는 시작하기 전 항상 체계적으로 계획을 세웁니다” 무엇을 시작하던지 계획을 세워두어야지 중간에 일이 틀어지지 않는다고 생각하기 때문입니다.
										물론 계획을 세우더라도 중간에 틀어지는 일이 있을 수 있지만 계획을 세우면 중간에 틀어지더라도 빠르게 대처가 가능하다고 생각합니다. 저의
										장점은 공손함입니다. 공손함이 있어야 기술을 터득하더라도 제대로 터득할 수 있다고 생각하며 상대방을 대할 때 또한 무례한 행동을 하지 않아 팀에
										분위기를 무너트리지 않을 수 있다고 생각합니다. 단점으로는 완벽함입니다. 조금이라도 마음에 들지 않으면 처음부터 다시 하려는 단점이 있지만
										반대로 생각하면 빈틈없이 일 처리를 하는 장점이 될 수도 있다고 생각합니다.
									</div>
								</div>
							</div>
						</Fade>
						{/* 지원동기 */}
						<Fade right>
							<div className='title-box'>
								<span>지원동기</span>
							</div>
							<div className='content-box'>
								<div className='cover-letter-content'>
									<div className='cover-letter-text'>
										“처음이 어렵지 해보면 별거 아니다” 제가 정말 좋아하는 말입니다. 저에게 항상 용기를 주는 말이기 때문입니다. 모든 사람은 시작하기 전에
										두려움을 가지고 살아간다고 생각합니다. 하지만 막상 시작하면 정말 해볼 만하다는걸 매번 느끼게 되는 것 같습니다. 저는 까지 제가 하는 일에는
										대충하는 일은 일절 없었습니다. 내 부대처럼 혹은 내 가게처럼 좀 더 효율적이게 할 수 있는 부분은 상급자에게 효율적인 방안을 제시하고 좀 더
										쉽게 일할 수 있는 환경을 만들어왔습니다. 저의 가능성을 알아보고 믿어주는 회사가 있다면 저는 회사의 발전을 위해 최선을 다할 수 있다는 것을
										말씀드리고 싶습니다. 저는 미용을 배우면서 ”왜? “라는 말을 많이 하라고 배웠습니다. 항상 모든 행동에는 이유가 있다고 생각합니다. 무엇을 배우든
										항상 스스로 생각하며 더 많은 것을 터득하고 회사와 함께 발전하는 보여드리겠습니다. 
									</div>
								</div>
							</div>
						</Fade>
						{/* 입사후 포부 */}
						<Fade right>
							<div className='title-box'>
								<span>입사후 포부</span>
							</div>
							<div className='content-box'>
								<div className='cover-letter-content'>
									<div className='cover-letter-text'>
										회사의 Sementig Tag 같은 직원이 되겠습니다. 시멘틱 태그는 하는 일은 똑같지만 각각의 의미가 부여되어있습니다. 저 또한 귀사의 의미 있는
										팀원으로서 맡은 자리에서 임무를 완수하는 직원이 되겠다고 약속드릴 수 있습니다. 제가 만약 입사를 할 수 있는 기회가 생긴다면 입사 후에는 일단
										1년 동안 사용은 할 수 있지만 이해도가 부족한 기술에 대해서 공부를 하고 막힘없이 하드코딩을 할 수 있도록 노력하겠습니다. 그렇게 3년 후에는
										이전에는 조언을 듣는 개발자였다면 조언을 해줄 수 있는 프론트 개발자가 되고 싶습니다. 최종 꿈은 풀 스택 개발자가 되어 누군가를 가르치는
										것입니다. 군대에서도 미용실에서도 교육을 담당하는 분들은 늘 선망의 대상이었습니다. 반짝하는 열정이 아니라 빛처럼 영원한 열정으로 최종
										목표까지 달려가 보겠습니다.  
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
	padding: 10px 20px 20px 20px;
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
				margin-bottom: 50px;
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
					margin-bottom: 100px;
					background: #ffffff;
					box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
					.content {
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						flex-wrap: wrap;
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
						.info-text {
							position: relative;
							display: block;
							width: 50%;
							margin-bottom: 20px;
							font-size: 25px;
							font-family: 'Do Hyeon', sans-serif;
							&:nth-of-type(3) {
								width: 100%;
							}
							svg {
								position: absolute;
								top: 0px;
								left: -40px;
							}
						}
					}
					.cover-letter-content {
						padding: 20px;
						.cover-letter-text {
							font-size: 20px;
							line-height: 1.3;
						}
					}
				}
				.title-box {
					width: 100%;

					font-size: 30px;
					margin-bottom: 20px;
					span {
						padding-left: 10px;
						position: relative;
						font-family: 'Do Hyeon', sans-serif;
						&::before {
							position: absolute;
							top: -5px;
							left: -10px;
							display: block;
							content: '';
							width: 5px;
							height: 40px;
							background: ${blue};
						}
					}
				}
			}
		}
	}
`;

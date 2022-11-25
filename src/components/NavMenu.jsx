import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSquareFull } from 'react-icons/fa';
import styled from 'styled-components';
import { blue } from '../styles/theme';


const NavMenu = () => {
	const [menu, setMenu] = useState('main');

	return (
		<NavMenuBlock>
			<div className='header-inner-box'>
				{/* 전체박스 */}
				<div className='header-nav-inner-box'>
					{/* 헤더 왼쪽박스 */}
					<div className='header-logo-box'>
						<Link to='/' className='nema-box' onClick={()=>{setMenu('main')}}>
							<div className='logo'>
								<FaSquareFull />
							</div>
							<div className='name'>
								<div className='first'>
									<span>Choi</span>
								</div>
								<div className='last'>
									<span>Seungchul</span>
								</div>
							</div>
							<div className='position'>
								<span>/ FRONTEND DEVELOPER</span>
							</div>
						</Link>
					</div>
					{/* 헤더 오른쪽박스 */}
					<div className='header-menu-box'>
						<Link
							className={menu === 'main' ? 'active' : null}
							to='/'
							onClick={() => {
								setMenu('main');
							}}>
							ABOUT ME
						</Link>
						<Link
							className={menu === 'skill' ? 'active' : null}
							to='/skill'
							onClick={() => {
								setMenu('skill');
							}}>
							SKILL
						</Link>
						<Link className={menu === 'resume' ? 'active' : null} to='/resume' onClick={() => {
								setMenu('resume');
							}}>
							RESUME
						</Link>
						<Link className={menu === 'project' ? 'active' : null} to='/project' onClick={() => {
								setMenu('project');
							}}>
							PROJECTS
						</Link>
						<Link className={menu === 'contact' ? 'active' : null} to='/contact' onClick={() => {
								setMenu('contact');
							}}>
							CONTACT
						</Link>
					</div>
				</div>
			</div>
		</NavMenuBlock>
	);
};

export default NavMenu;

const NavMenuBlock = styled.header`
	.header-inner-box {
		width: 100%;
		height: 100px;
		.header-nav-inner-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100px;
			background: #fff;
			.header-logo-box {
				position: relative;
				width: 50%;
				height: 100%;
				.nema-box {
					position: absolute;
					top: 15px;
					left: 10px;
					display: flex;
					justify-content: left;
					align-items: center;
					.logo {
						padding: 0px 10px;
					}
					.name {
						font-size: 20px;
					}
					.position {
						width: 400px;
						position: absolute;
						bottom: -20px;
						left: 50px;
					}
				}
			}
			.header-menu-box {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				width: 50%;
				height: 100%;
				a {
					padding-right: 15px;
					&::after {
						display: block;
						content: '';
						width: 0%;
						height: 5px;
						background: #000;
					}
					&:hover {
						color: ${blue};
						&::after {
							display: block;
							content: '';
							width: 100%;
							height: 5px;
							background: ${blue};
							transition: all 0.5s;
						}
					}
				}
				.active {
					color: ${blue};
					&::after {
						display: block;
						content: '';
						width: 100%;
						height: 5px;
						background: ${blue};
					}
				}
			}
		}
	}
`;

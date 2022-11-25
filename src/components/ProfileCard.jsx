import styled from 'styled-components';
import profile from '../assets/images/프로필사진.jpg'

const ProfileCard = () => {
	return (
		<ProfileCardBlock>
			<div className='card-inner-box'>
				<div className='img-inner-box'>
                    <img src={profile} alt="" />
				</div>
                <div className="name-inner-box">
                <span className='kr-name'>최승철</span>
                <span className='en-name'>Choi Seungchul</span>
                <span className='position-name'>FRONTEND DEVELOPER</span>
                </div>
			</div>
		</ProfileCardBlock>
	);
};

export default ProfileCard;

const ProfileCardBlock = styled.div`
	width: 400px;
	height: 550px;
	background: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 1;
	.card-inner-box {
        display: flex;
        justify-content: flex-startl;
        align-items: center;
        flex-direction: column;
		width: 100%;
		height: 500px;
        padding: 20px;
        background: #f5ece6;
        .img-inner-box{
            width: 250px;
            height: 250px;
            border-radius: 50%;
            border: 3px solid #fff;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .name-inner-box{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            color: #000;
            .kr-name{
                font-size: 30px;
            }
            .en-name{
                position: relative;
                font-size: 25px;
                margin-bottom: 50px;
                &::after{
                    position: absolute;
                    top: 50px;
                    left: 32px;
                    display: block;
                    content: '';
                    width: 100px;
                    height: 3px;
                    background: blue;
                }
            }
            .position-name{
                font-size: 15px;
            }
        }
	}
`;

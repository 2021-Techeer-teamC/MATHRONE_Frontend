import { styled, Grid, Button } from '@mui/material';

export const ProfileImgDiv = styled(Grid)(
	() => `
	display: flex;
	position: relative;
	margin: 15px auto;
	width: 150px;
	height: 150px;
	border-radius: 30%;
	overflow: hidden;
	border-radius: 50%;
	border: 3px solid #009688;
	box-shadow: 0px 10px 10px #808080;
	text-align: center;
	align-items: center;
	
	&:hover {
		background: rgb(1, 1, 1, 0.4);
	}

	img {
      width: 100%;
	  height: 100%;
	  object-fit: cover;
	}

	.profile__icon {
	  font-size: 53px !important;
	  color: #315c72;
	  margin: auto;
	}

	.profile__button--edit {
	  position: absolute;
	  top: 45%;
	  left: 40%;
	  z-index: 100;
	  color: white;
	}

	`
);

export const ProfileInfoBox = styled(Grid)(
	() => `
	font-family: "NotoSans-Medium";
	margin-left: 20px !important;
	box-sizing: border-box;
	display: flex;
	flex-flow: column wrap;
	width: 100%;

	div {
	  margin-bottom: 5px;
	}

	p {
  	  margin: 0px;
	}

	label {
	  color: rgb(0, 0, 0, 0.5);
	  margin: 0px;
	  font-size: 12px;
	}
	`
);

export const SubscriptionBtn = styled(Button)(
	() => `
    margin-top: 8px !important;
    background-color: #009688 !important;

	&:hover {
	  background-color: #009688 !important;
	  opacity: 0.7;
	}
	`
)
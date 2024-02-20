import styledc from 'styled-components';
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
	
	&: hover {
		background: rgb(1, 1, 1, 0.4);
	}

	.profile__icon {
	  font-size: 53px !important;
	  color: #315c72;
	  margin: auto;
	}

	.profile__button--edit {
	  position: absolute;
	  top: 40%;
	  left: 35%;
	  z-index: 100;
	  color: white;
	}
	`
);

export const ProfileImg = styledc.div<{src: string, hover: boolean}>`
  width: 150px;
  height: 150px;
  border-radius: 30%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  opacity: ${(props) => props.hover? '0.5' : '1'};
`;

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

	.MuiFormControl-root {
	  margin-bottom: 0px;
	  width: 180px;
	  font-family: "NotoSans-Medium" !important;
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

export const ProfileEditButton = styled(Button)(
	() => `
	position: absolute;
	bottom: 0px;
	right: 0px;
	color: #009688;
	text-decoration: underline;
	`
)
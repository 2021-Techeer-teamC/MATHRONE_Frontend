import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { profileItem } from '../../../../types/profileItem';
import { FlexDiv } from '../../../../components/shared-style';
import { SubscriptionBtn } from '../../style';
import { formatPhoneNumber } from '../../../../utils/StringFormatter';
import { validatePhoneNum } from '../../../../utils/Validator';

type ProfileInfoSectionProps = {
  account: profileItem,
  editMode: boolean,
  handleProfileEdit: (newInfo: any) => void;
}

const ProfileInfoSection = ({ account, editMode, handleProfileEdit }: ProfileInfoSectionProps) => {
  // TEST: re-rendering test
  // console.log('rendering');
  const [phoneNumError, setPhoneNumError] = useState<boolean>(false);

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	if(e.target.name === 'phoneNum') {
		if(!validatePhoneNum(e.target.value)) setPhoneNumError(true);
		else setPhoneNumError(false);	
	}
	const newInfo = {
	  [e.target.name]: e.target.value
	};
	handleProfileEdit(newInfo);
  }
	
  const handleUpgradeClick = () => {
    alert('click upgrade button');
  };

  return (
	<>
	  <FlexDiv>
	    <div className="flex__col--fixed">
		  <label>Email Address</label>
		  <p>{account.email || '정보가 없습니다'}</p>
		</div>
		<div className="flex__col--fixed">
		  <label>Phone Number</label>
		  {
			!editMode ? 
			  <p>{account.phoneNum? formatPhoneNumber(account.phoneNum) : '정보가 없습니다'}</p>
			  : <TextField
				  id="phoneNum"
				  name="phoneNum"
				  defaultValue={account.phoneNum}
				  variant="standard"
				  size="small"
				  type="number"
				  onChange={handleInfoChange}
				  error={phoneNumError}
				  helperText={phoneNumError && "잘못된 형식입니다"}
        		/>
		  }
		</div>
		<div>
		  <label>Nickname</label>
		  {
			!editMode ? 
			  <p>{account.nickname? account.nickname : '정보가 없습니다'}</p>
			  : <TextField
				  id="nickname"
				  name="nickname"
				  defaultValue={account.nickname}
				  variant="standard"
				  size="small"
				  type="text"
				  onChange={handleInfoChange}
        		/>
		  }
		</div>
	  </FlexDiv>
	  <FlexDiv>
		<div className="flex__col--fixed">
		  <label>Rank</label>
		  <p>{account.rankInfo.rank || '정보가 없습니다'}</p>
		</div>
		<div>
		  <label>Score</label>
		  <p>{account.rankInfo.score || '정보가 없습니다'}</p>
		</div>
	  </FlexDiv>
	  <FlexDiv>
		<div>
		  <label>Subscription</label>
		  {
		  account.premium?
			<p>...구독 정보...</p>
			: <p>
				<SubscriptionBtn
				  variant="contained"
				  onClick={handleUpgradeClick}
				>
				Premium Upgrade
				</SubscriptionBtn>
			</p>
		  }
		</div>
	  </FlexDiv>
	</>
  );
}

export default ProfileInfoSection;

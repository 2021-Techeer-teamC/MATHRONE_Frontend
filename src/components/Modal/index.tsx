import { useState, useRef, useEffect } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import { useStore } from '../../store';
import CloseIcon from '@mui/icons-material/Close';
import {
  ImgUploadFormDiv,
  StyledModal,
  ModalCloseButton,
  ModalSubmitButton,
  ImgUploadForm,
} from './style';
import profileService from '../../services/profileService';

type ImgUploadModalProps = {
  title: string,
  open: boolean;
  handleModalClose: () => void;
}

const ImgUploadModal = ({title, open, handleModalClose}: ImgUploadModalProps) => {
  const { userStore } = useStore();
  const { editProfileImg } = userStore;
  const inputButton = useRef<HTMLInputElement>(null);
  const [fileObj, setFileObj] = useState<File | null>(null);
  const [fileSrc, setFileSrc] = useState<string>('');
  const [fileName, setFileName] = useState<string>('No selected file');
  
  const handleClose = () => {
	handleImgClearClick();
    handleModalClose();
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
	  setFileSrc(URL.createObjectURL(e.target.files[0]));
	  setFileName(e.target.files[0].name);
	  setFileObj(e.target.files[0]);
    }
  }

  const handleImgUploadFormClick = () => {
	if(inputButton.current) inputButton.current.click();
  };
  
  const handleImgClearClick = () => {
    setFileName('No selected file');
	setFileSrc('');
  }

  const handleImgSubmit = async () => {
    try {
	  if(!fileSrc) {
		throw new Error('이미지 파일이 없습니다');
	  }
      await editProfileImg(fileObj);
	  handleClose();
    } catch (error) {
      console.error('Error: ', error);
	  handleClose();
    }
  }

  useEffect(() => {
	return(() => {
	  if(fileSrc) URL.revokeObjectURL(fileSrc);
	})
  })

  return (
	<StyledModal
	  onClose={handleClose}
	  aria-labelledby="customized-dialog-title"
	  open={open}
	>
	<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
	  {title}
	</DialogTitle>
	<ModalCloseButton
	  aria-label="close"
	  onClick={handleClose}
	>
	  <CloseIcon />
	</ModalCloseButton>
	<DialogContent dividers>
	  <ImgUploadFormDiv>
		<ImgUploadForm
		  encType="multipart/form-data"
		  onClick={handleImgUploadFormClick}
		>
		  <input
		  ref={inputButton}
		  type="file"
		  accept="image/*"
		  className="input-field"
		  onChange={onSelectFile}
		  hidden
		/>
		{fileSrc ?
		  <img src={fileSrc} alt={fileName} /> : <p>클릭하여 이미지 파일을 선택해주세요</p>
		}
		</ImgUploadForm>
	  </ImgUploadFormDiv>
	  <p className="modal__text">
		<span>{fileName}</span>
		{
	      fileSrc && 
		    <IconButton
			  aria-label="clear"
			  onClick={handleImgClearClick}
			  className="modal__text__button--clear"
			  size="small"
			>
			  <CloseIcon />
			</IconButton>
		}
	  </p>
	</DialogContent>
	<DialogActions>
	  <ModalSubmitButton autoFocus onClick={handleImgSubmit}>
	    저장하기
	  </ModalSubmitButton>
	</DialogActions>
	</StyledModal>
  );
}

export default ImgUploadModal;

/*
REFERENCE:
https://www.youtube.com/watch?app=desktop&v=FtpN8QI9PuA&ab_channel=CharlesKasasira
https://codesandbox.io/p/sandbox/react-image-crop-demo-with-react-hooks-y831o?file=%2Fsrc%2FApp.tsx%3A38%2C43
https://www.npmjs.com/package/react-image-crop
https://velog.io/@rkio/styled-components-attrs
https://coding-factory.tistory.com/919
*/
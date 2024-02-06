import { useState, useRef } from 'react';
import {
  styled,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  ImgUploadFormDiv,
  StyledModal,
  ModalCloseButton,
  ModalSubmitButton,
} from './style';
// https://www.youtube.com/watch?app=desktop&v=FtpN8QI9PuA&ab_channel=CharlesKasasira
// https://codesandbox.io/p/sandbox/react-image-crop-demo-with-react-hooks-y831o?file=%2Fsrc%2FApp.tsx%3A38%2C43
// https://www.npmjs.com/package/react-image-crop
// https://velog.io/@rkio/styled-components-attrs
// https://coding-factory.tistory.com/919

type ImgUploadModalProps = {
  title: string,
  open: boolean;
  handleModalClose: () => void;
}

const ImgUploadModal = ({title, open, handleModalClose}: ImgUploadModalProps) => {
  const inputButton = useRef<HTMLInputElement>(null);
  const [fileSrc, setFileSrc] = useState<string>('');
  const [fileName, setFileName] = useState<string>('No selected file');
  const handleClose = () => {
	setFileSrc('');
    handleModalClose();
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setFileSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0]);
	  setFileName(e.target.files[0].name);
    }
  }

  const handleImgUploadFormClick = () => {
	if(inputButton.current) inputButton.current.click();
  };
  
  const handleImgClearClick = () => {
    setFileName('No selected file');
	setFileSrc('');
  }

  const handleImgSubmit = () => {
    // api request for updating profile image;
  }

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
		<form
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
		</form>
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
	  <ModalSubmitButton autoFocus onClick={handleClose}>
	    저장하기
	  </ModalSubmitButton>
	</DialogActions>
	</StyledModal>
  );
}

export default ImgUploadModal;

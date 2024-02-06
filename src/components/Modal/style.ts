import styledc from 'styled-components';
import { Dialog, styled, IconButton, Button } from '@mui/material';

export const StyledModal = styled(Dialog)(
  () => `
    .MuiDialogContent-root {
      padding: 16px;
    }

    .MuiDialogActions-root {
      padding: 8px;
    }

    .modal__text {
      text-align: center;
      align-items: center;
      margin-top: 8px;
      margin-bottom: 0px;
    }

    .modal__text span,
    .modal__text__button--clear {
      vertical-align: middle;
    }

    .modal__text__button--clear svg {
      font-size: 1rem;
      margin-top: auto;
      margin-bottom: auto;
    }
  `
);

export const ModalCloseButton = styled(IconButton)(
  () => `
    position: absolute;
    right: 8px;
    top: 8px;
    color: #9e9e9e;
  `
);

export const ImgUploadFormDiv = styledc.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dashed black;
    height: 300px;
    width: 500px;
    cursor: pointer;
    border-radius: 5px;
  }

  img {
    height: 300px;
    object-fit: contain;
  }

  &:hover p {
    color: rgb(1, 1, 1, 0.4);
  }

  &:hover img {
    opacity: 0.8;
  }
`;

export const ModalSubmitButton = styled(Button)(
  () => `
    color: #009688;
  `
);
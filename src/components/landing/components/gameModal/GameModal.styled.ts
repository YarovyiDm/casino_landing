import {Box, styled} from "@mui/material";

export const ModalWrapper = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '100vh',
    bgcolor: '#000',
    borderRadius: '12px',
    overflow: 'hidden',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column'
});

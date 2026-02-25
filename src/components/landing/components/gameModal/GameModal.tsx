import {Box, IconButton, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import {ModalWrapper} from "./GameModal.styled";

type ModalProps = {
    isGameOpen: boolean;
    handleCloseGame: () => void;
}

const GameModal = ({isGameOpen, handleCloseGame}: ModalProps) => {
    const gameUrl = 'https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en';

    return (
        <Modal
            open={isGameOpen}
            onClose={handleCloseGame}
            aria-labelledby="game-modal"
        >
            <ModalWrapper>
                <Box
                    sx={{
                        background: 'linear-gradient(180deg, #0A1628 0%, #1B2B47 100%)',
                        padding: '16px 24px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}
                >
                    <IconButton
                        onClick={handleCloseGame}
                        sx={{
                            color: 'white',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>
                <Box
                    component="iframe"
                    src={gameUrl}
                    title="Casino Game"
                    sx={{
                        width: '100%',
                        height: '100%',
                        border: 'none'
                    }}
                />
            </ModalWrapper>
        </Modal>
    )
}

export default GameModal;
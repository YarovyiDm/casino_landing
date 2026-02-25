import {SelectChangeEvent} from "@mui/material";
import React, { useState } from "react";
import casinoLogo from "../../assets/CasinoRoyale.svg";
import slotImage from "../../assets/image 11.png";
import {COUNTRIES} from "../../constants/counties";
import {
    CasinoLogo,
    LandingContainer,
    OpenGameButton,
    SlotIcon,
    TopBlock
} from "./Landing.styled";
import GameModal from "./components/gameModal/GameModal";
import Footer from "./components/footer/Footer";
import MobileFooter from "./components/mobileFooter/MobileFooter";

const Landing = () => {
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].code);
    const [isGameOpen, setIsGameOpen] = useState(false);

    const handleCountryChange = (event: SelectChangeEvent<string>) => {
        setSelectedCountry(event.target.value);
    };

    const handleOpenGame = () => {
        setIsGameOpen(true);
    };

    const handleCloseGame = () => {
        setIsGameOpen(false);
    };

    const currentCountry = COUNTRIES.find(c => c.code === selectedCountry) || COUNTRIES[0];

    return (
        <LandingContainer>
            <TopBlock>
                <CasinoLogo src={casinoLogo} alt="Casino Royale" />
                <SlotIcon src={slotImage} alt="777" />
                <OpenGameButton
                    variant="contained"
                    color="primary"
                    $gradient={currentCountry.gradient}
                    $hoverGradient={currentCountry.hoverGradient}
                    onClick={handleOpenGame}
                >
                    {currentCountry.translations.openGame}
                </OpenGameButton>
            </TopBlock>
            <GameModal
                isGameOpen={isGameOpen}
                handleCloseGame={handleCloseGame}
            />
            <Footer selectedCountry={selectedCountry} handleCountryChange={handleCountryChange} currentCountry={currentCountry} />
            <MobileFooter selectedCountry={selectedCountry} handleCountryChange={handleCountryChange} currentCountry={currentCountry} />
        </LandingContainer>
    )
}

export default Landing;

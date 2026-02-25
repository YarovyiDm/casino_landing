import {Box, MenuItem, Typography} from "@mui/material";
import {
    AgeIcon,
    AgeRestriction, BottomBlock,
    CasinoLogo,
    CharacterImage, CountryOption, CountrySelector, DownloadButton,
    DownloadCard, DownloadIcon,
    DownloadLogoContainer,
    DownloadSection, DownloadSubtitle,
    DownloadTitle, LicenseLogo, LicenseSection, LicenseText, SocialIcon, SocialIcons, SocialTitle
} from "../../Landing.styled";
import characterImage from "../../../../assets/110253 1.png";
import casinoLogo from "../../../../assets/CasinoRoyale.svg";
import downloadIcon from "../../../../assets/download.svg";
import adultIcon from "../../../../assets/Container.svg";
import licenseLogo from "../../../../assets/License logo.svg";
import {COUNTRIES} from "../../../../constants/counties";
import instagramIcon from "../../../../assets/skill-icons_instagram.svg";
import telegram from "../../../../assets/telegram.svg";
import xIcon from "../../../../assets/x.svg";
import mailIcon from "../../../../assets/mail.svg";
import React from "react";
import {FooterProps} from "../../Landing.types";

const Footer = ({selectedCountry, handleCountryChange, currentCountry}: FooterProps) => {
    return (
        <BottomBlock>
            <Box sx={{display: "flex", alignItems: "center", gap: "64px"}}>
                <CharacterImage src={characterImage} alt="Casino Character" />
                <DownloadSection>
                    <DownloadCard $downloadBlockBorderColor={currentCountry.downloadBlockBorderColor}>
                        <DownloadLogoContainer>
                            <CasinoLogo src={casinoLogo} alt="Casino Royale" style={{ width: '180px', marginBottom: 0 }} />
                        </DownloadLogoContainer>
                        <DownloadTitle>{currentCountry.translations.downloadCasino}</DownloadTitle>
                        <DownloadSubtitle>{currentCountry.translations.playAnywhere}</DownloadSubtitle>
                        <DownloadButton
                            variant="contained"
                            color="primary"
                            sx={{width: "250px"}}
                            $gradient={currentCountry.gradient}
                            $hoverGradient={currentCountry.hoverGradient}
                        >
                            <DownloadIcon src={downloadIcon} alt="Download" />
                            {currentCountry.translations.installApp}
                        </DownloadButton>
                    </DownloadCard>
                </DownloadSection>
                <Box sx={{display: "flex", flexDirection: 'column', gap: "24px"}}>
                    <AgeRestriction>
                        <AgeIcon src={adultIcon}/>
                        <Typography style={{ color: 'rgba(255, 255, 255, 0.7)'}}>
                            {currentCountry.translations.only18}
                        </Typography>
                    </AgeRestriction>

                    <LicenseSection>
                        <LicenseLogo src={licenseLogo} alt="License" />
                        <LicenseText>
                            {currentCountry.translations.certified}
                        </LicenseText>
                    </LicenseSection>
                </Box>
            </Box>
            <Box sx={{display: "flex", flexDirection: 'column', gap: "108px"}}>
                <Box>
                    <CountrySelector
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        variant="outlined"
                    >
                        {COUNTRIES.map((country) => (
                            <MenuItem key={country.code} value={country.code}>
                                <CountryOption>
                                    <span style={{ fontSize: '20px' }}>{country.flag}</span>
                                    <span>{country.name}</span>
                                </CountryOption>
                            </MenuItem>
                        ))}
                    </CountrySelector>
                </Box>
                <Box>
                    <Box sx={{display: "flex", flexDirection: 'column', gap: "12px", alignItems: 'flex-end'}}>
                        <SocialTitle>{currentCountry.translations.socialMedia}</SocialTitle>
                        <SocialIcons>
                            <SocialIcon src={instagramIcon} alt="Instagram" />
                            <SocialIcon src={telegram} alt="Telegram" />
                            <SocialIcon src={xIcon} alt="X" />
                            <SocialIcon src={mailIcon} alt="Mail" />
                        </SocialIcons>
                    </Box>
                </Box>
            </Box>
        </BottomBlock>
    )
}

export default Footer;
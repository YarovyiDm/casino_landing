import mainBackground from "../../assets/mainBackground.png";
import styled from "styled-components";
import {Box, Button, Typography, Select} from "@mui/material";

export const LandingContainer = styled(Box)`
    width: 100%;
    overflow-x: hidden;
`

export const TopBlock = styled(Box)`
    height: 944px;
    width: 100%;
    background-image: url(${mainBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;
    @media (max-width: 1200px) {
        height: 854px;
    }
`

export const CasinoLogo = styled.img`
    width: 213px;
    height: auto;
`

export const SlotIcon = styled.img`
    width: 220px;
    height: auto;
`

export const OpenGameButton = styled(Button)<{ $gradient: string; $hoverGradient: string }>`
    width: 360px;
    height: 60px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background: ${props => props.$gradient} !important;
    &:hover {
        background: ${props => props.$hoverGradient} !important;
    }
    @media (max-width: 375px) {
        width: 340px;
    }
`

export const BottomBlock = styled(Box)`
    background: linear-gradient(to right, #02011F 0%, #06225D 100%);
    padding: 60px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    position: relative;
    min-height: 500px;
    @media (min-width: 1201px) {
        display: flex;
        flex-direction: row;
        gap: 40px;
        padding: 40px 20px;
    }
    @media (max-width: 1200px) {
        display: none;
    }
`

export const BottomBlockMobile = styled(Box)`
    background: linear-gradient(to right, #02011F 0%, #06225D 100%);
    padding: 60px 32px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 40px 20px;
    }
    @media (min-width: 1201px) {
        display: none;
    }
`

export const CharacterImage = styled.img`
    width: 280px;
    height: auto;
`

export const DownloadSection = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

export const DownloadCard = styled(Box)<{ $downloadBlockBorderColor: string;}>`
    background: rgba(255, 255, 255, 0.05);
    border: 2px dashed ${props => props.$downloadBlockBorderColor};
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const DownloadLogoContainer = styled(Box)`
    margin-bottom: 8px;
`

export const DownloadTitle = styled(Box)`
    color: white;
    font-size: 32px;
    font-weight: 700;
`

export const DownloadSubtitle = styled(Typography)`
    color: #BABABA;
    font-size: 14px;
    margin-bottom: 16px;
`

export const DownloadButton = styled(Button)<{ $gradient: string; $hoverGradient: string }>`
    background: ${props => props.$gradient} !important;
    padding: 14px 40px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    text-transform: none;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white !important;
    &:hover {
        background: ${props => props.$hoverGradient} !important;
    }
`

export const DownloadIcon = styled.img`
    width: 20px;
    height: 20px;
`

export const AgeRestriction = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
    color: rgba(255, 255, 255, 0.7);
`

export const AgeIcon = styled.img`
    width: 58px;
    height: 58px;
`

export const LicenseSection = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const LicenseLogo = styled.img`
    width: 58px;
    height: 58px;
`

export const LicenseText = styled(Typography)`
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    max-width: 200px;
    text-align: left;
    @media (max-width: 1200px) {
        max-width: unset;
        text-align: center;
    }
`

export const CertificateWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`

export const SocialTitle = styled(Typography)`
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    margin-bottom: 8px;
`

export const SocialIcons = styled(Box)`
    display: flex;
    gap: 4px;
`

export const SocialIcon = styled.img`
    width: 52px;
    height: 52px;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`

export const CountrySelector = styled(Select)`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    color: white!important;
    width: 290px;
    min-width: 180px;
    height: 56px;
    
    .MuiSvgIcon-root {
        color: white;
    }
`

export const CountryOption = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
`
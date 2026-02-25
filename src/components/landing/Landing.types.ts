import {SelectChangeEvent} from "@mui/material";

export type FooterProps = {
    selectedCountry: string;
    handleCountryChange: (event: SelectChangeEvent<string>) => void;
    currentCountry: {
        code: string
        name: string
        flag: string
        gradient: string
        hoverGradient: string
        downloadBlockBorderColor: string
    }
}
import {SelectChangeEvent} from "@mui/material";

export type Country = {
    code: string;
    name: string;
    flag: string;
    gradient: string;
    hoverGradient: string;
    downloadBlockBorderColor: string;
    translations: {
        openGame: string;
        downloadCasino: string;
        playAnywhere: string;
        installApp: string;
        only18: string;
        certified: string;
        socialMedia: string;
    };
};

export type FooterProps = {
    selectedCountry: string;
    handleCountryChange: (event: SelectChangeEvent<string>) => void;
    currentCountry: Country;
}

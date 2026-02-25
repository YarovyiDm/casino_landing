import { Country } from '../components/landing/Landing.types';

export const COUNTRIES: Country[] = [
    {
        code: 'UA',
        name: 'Ukraine',
        flag: '🇺🇦',
        gradient: 'linear-gradient(to right, #FF8D6B, #FFBA47)',
        hoverGradient: 'linear-gradient(to right, #e87a5a, #e8a93a)',
        downloadBlockBorderColor: '#FF8D6B',
        translations: {
            openGame: 'ВІДКРИТИ ГРУ',
            downloadCasino: 'Завантажити Казино',
            playAnywhere: 'Грайте Mini будь-де, будь-коли',
            installApp: 'Встановити додаток',
            only18: 'Тільки 18+',
            certified: 'Казино сертифіковане Ігровим управлінням Анжуана',
            socialMedia: 'Ми в соцмережах:'
        }
    },
    {
        code: 'PL',
        name: 'Poland',
        flag: '🇵🇱',
        gradient: 'linear-gradient(to right, #DC143C, #FFFFFF)',
        hoverGradient: 'linear-gradient(to right, #c01133, #e6e6e6)',
        downloadBlockBorderColor: '#DC143C',
        translations: {
            openGame: 'OTWÓRZ GRĘ',
            downloadCasino: 'Pobierz Kasyno',
            playAnywhere: 'Graj w Mini wszędzie, zawsze',
            installApp: 'Zainstaluj aplikację',
            only18: 'Tylko 18+',
            certified: 'Kasyno jest certyfikowane przez Anjuan Gaming Authority',
            socialMedia: 'Jesteśmy w mediach społecznościowych:'
        }
    },
    {
        code: 'GB',
        name: 'United Kingdom',
        flag: '🇬🇧',
        gradient: 'linear-gradient(to right, #012169, #C8102E)',
        hoverGradient: 'linear-gradient(to right, #011557, #a80d26)',
        downloadBlockBorderColor: '#012169',
        translations: {
            openGame: 'OPEN THE GAME',
            downloadCasino: 'Download Casino',
            playAnywhere: 'Play Mini anywhere, anytime',
            installApp: 'Install App',
            only18: 'Only 18+',
            certified: 'Casino is certified by the Anjuan Gaming Authority',
            socialMedia: 'Us on social media:'
        }
    }
];

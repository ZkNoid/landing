import { IBM_Plex_Mono } from "next/font/google";
import localFont from 'next/font/local'

export const rockswellStd = localFont({
    src: './fonts/RockwellStd.otf',
    variable: '--rockwell-std',
    display: 'swap',
    // declarations: [{prop: 'descent-override', value: '50%'}]
});

export const rockswellStdFix = localFont({
    src: './fonts/RockwellStd.otf',
    display: 'swap',
    declarations: [{ prop: 'descent-override', value: '50%' }]
});

export const plexMono = IBM_Plex_Mono({
    weight: "700",
    subsets: ['latin'],
    variable: '--plex-mono',
    display: 'swap',
});

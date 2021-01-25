export const colors = {
    blue1: '#0b7bb1',
    blue2: '#0a7cb07a',
    blue3: '#00bbb22b',
    blue4: '#0c5b81',
    red1: '#d40000',
    gray1: '#e5e5e5',
    yellow1: '#ffc905',
};

export const size = {
    mobile: 450,
    tablet: 768,
    laptop: 1024,
    // max: 2560
};

export const device = {
    mobile: `@media (max-width: ${size.mobile}px)`,
    tablet: `@media only screen and (max-width: ${size.tablet}px)`,
    laptop: `@media only screen and (max-width: ${size.laptop}px)`,
    // max: `@media (min-width: ${size.max}px)`
};
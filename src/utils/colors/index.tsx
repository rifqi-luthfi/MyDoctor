type ColorSet = {
    [key: string]: string;
};

const mainColors: ColorSet = {
    green1: '#0BCAD4',
    dark1: '#112340',
    grey1: '#7D8797',
    grey2: '#E9E9E9',
    white: '#FFFFFF',
    black: '#000000',
};

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    white: mainColors.white,
    black: mainColors.black,
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
    },
    button: {
        primary: {
            background: mainColors.green1,
            text: mainColors.white,
        },
        secondary: {
            background: mainColors.white,
            text: mainColors.dark1,
        },
    },
    border: mainColors.grey2,
};

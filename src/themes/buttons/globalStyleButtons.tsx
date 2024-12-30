// export type ButtonMode = 'outlined' | 'flat' | undefined;
// export type ButtonMode = 'outlined' | 'text' | 'contained' | 'elevated' | 'contained-tonal' | undefined

export const globalStyleButtons = {
    primaryColor: '#9e0c14',
    secondaryColor: '#0e112d',
    accentDefault: '#ff4081'
    
}
export const papersButtonVariables = {
    primaryButton: {
        primary: globalStyleButtons.primaryColor,
        accent: globalStyleButtons.accentDefault,
    },
    secondaryButton: {
        primary: globalStyleButtons.secondaryColor,
        accent: globalStyleButtons.accentDefault
    }
};

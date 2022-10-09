export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const capitalizeFirstLetterOnly = (string) => {
    const lowerString = string.toLowerCase()

    return lowerString.charAt(0).toUpperCase() + lowerString.slice(1)
}
export const ltrim = str => {
    if(str == null) return str;
    return str.replace(/^\s+/g, '');
}
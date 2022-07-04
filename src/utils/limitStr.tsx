export function limitStr(str: string, wordCount: number): string {
    str = str.trim();

    if(str.split(' ').length > wordCount) {
        return str.split(' ').slice(0, wordCount).join(' ') + '...';
    }

    return str;
}
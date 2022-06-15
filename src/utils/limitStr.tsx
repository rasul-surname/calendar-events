export function limitStr(str: string, wordCount: number): string {
    return str.split(' ').slice(0, wordCount).join(' ') + '...';
}
export function truncateString(str: string, maxLength: number): string {
  // 문자열 길이가 maxLength 이하라면 그대로 반환
  if (str.length <= maxLength) return str;
  
  // 초과하는 경우 maxLength까지 잘라내고 ellipsis 추가
  return str.slice(0, maxLength) + '...';
}
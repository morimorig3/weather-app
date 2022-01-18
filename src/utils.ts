export const formatDate = (d: Date): string => {
  const DAY_MAP = ["日", "月", "火", "水", "木", "金", "土"] as const;
  return `${d.getMonth() + 1}/${d.getDate()} ${DAY_MAP[d.getDay()]}曜日`;
};

export const formatTime = (d: Date): string =>
  `${d.getHours()}時${d.getMinutes()}分`;

export const unixtimeToDate = (number: number): Date => new Date(number * 1000);

import dotenvConfig from "../dotenvConfig";

export function getCalendarUrl(access_token: string) {
  return `${dotenvConfig.FRONTEND_URL}/advent-calendar/${access_token}`;
}

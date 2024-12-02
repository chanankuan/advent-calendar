export interface INote {
  day: number;
  description: string;
  opened_at: Date | null;
}

export interface ICalendar {
  id: number;
  title: string;
  access_token: string;
  notes: INote[];
}

export interface IUser {
  name: string;
  username: string;
}

import { months } from "./constant";
import { lastStrLength } from "./functions";

export function convertToTime(date: string | Date) {
  const dateBrute = new Date(date);
  let res = dateBrute.toLocaleTimeString();

  return res;
}

export function convertToStringDate(params: string | Date) {
  const date = new Date(params);

  const j = date.getDate();
  const m = date.getMonth();
  const an = date.getFullYear();

  const month = months.filter((month) => month.value == m)[0];

  const res = `${lastStrLength(j)} ${month.title} ${an}`;

  return res;
}

export function getYear(params: string | Date) {
  const date = new Date(params);

  return date.getFullYear();
}

export function getAge(params: string | Date) {
  const now = new Date();
  const date = new Date(params);

  const res = now.getFullYear() - date.getFullYear();

  return res;
}

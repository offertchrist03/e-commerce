export const urlRegex = /^(https:\/\/)*([.-]?\w+)*(\.\w{2,})+$/;

export const usernameRegex = /^([a-zA-z])\w+$/;

export const passwordStrongRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d0-9]{8,}$/;

export const passwordRegex = /^[a-zA-Z\d0-9]{8,}$/;

export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

export const numberRegex = /[0-9]+/;

export const phoneRegex = /^([0-9]+){10,}$/;

export const months = [
  { value: 0, title: "janvier" },
  { value: 1, title: "fevrier" },
  { value: 2, title: "mars" },
  { value: 3, title: "avril" },
  { value: 4, title: "mai" },
  { value: 5, title: "juin" },
  { value: 6, title: "juillet" },
  { value: 7, title: "aout" },
  { value: 8, title: "septembre" },
  { value: 9, title: "octobre" },
  { value: 10, title: "novembre" },
  { value: 11, title: "decembre" },
];

export const rateText = [
  "tres mauvais",
  "mauvais",
  "acceptable",
  "assez bien",
  "bien",
  "bien +",
  "tres bien",
  "tres bien +",
  "extraordinaire",
  "extraordinaire +",
];

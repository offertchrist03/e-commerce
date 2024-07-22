export function capitalizeEach(
  params: string = "ceCi est Une PHRase",
  each: string[],
) {
  let newStr = "";
  for (let index = 0; index < params.length; index++) {
    let char = params[index];
    if (
      index === 0 ||
      each.includes(params[index - 1]) ||
      params[index - 1] === " "
    ) {
      char = char.toUpperCase();
    } else {
      char = char.toLowerCase();
    }
    newStr = newStr + char;
  }

  return newStr;
}

export const stringFuse = (...strings: string[]) => {
  return strings.filter(Boolean).join(" ");
};

export function countString(param: string, search: string) {
  let count = 0;
  for (let index = 0; index < param.length; index++) {
    const char = param[index];
    if (char === search) {
      count++;
    }
  }
  return count;
}

export function reverseString(params: string = "reverse") {
  let res: string = "";
  const maximums = params.length;
  for (let index = maximums - 1; index >= 0; index--) {
    const element = params[index];
    res = res + element;
  }
  return res;
}

export const getLastStringInUrl = (url: string, stop: string): string => {
  let res = "";
  const reversed = reverseString(url);
  for (let index = 0; index < reversed.length; index++) {
    const char = reversed[index];
    if (char === stop) {
      break;
    } else {
      res = res + char;
    }
  }
  return reverseString(res);
};

export function lastStrLength(params: number | string, limit: number = 2) {
  const str = params + "";
  if (str.length >= limit) {
    return str;
  }

  let zero = "";
  for (let index = 1; index < 5; index++) {
    zero = zero + "0";
  }

  let res = () => {
    let res = zero + params;
    res = reverseString(res);

    let trueRes = "";
    for (let index = 0; index < limit; index++) {
      trueRes = trueRes + res[index];
    }

    return reverseString(trueRes);
  };

  return res();
}

export const randomUniqueItem = (array: string[], exclude: string) => {
  const arr = array.filter((item) => item !== exclude);
  const res = arr[Math.floor(Math.random() * arr.length)];
  return res;
};

export function removeChar(
  params: string,
  charToRemove: string,
  charReplace: string,
) {
  let res = "";

  if (params.length <= 1) return params;

  for (let index = 0; index < params.length; index++) {
    const element = params[index];

    if (element === charToRemove) {
      res = res + charReplace;
    } else {
      res = res + element;
    }
  }

  return res;
}

export function createArrayNumber(param: number, start: number = 0) {
  let arrayRes = [];
  let init = start;

  for (let index = 0; index < param; index++) {
    arrayRes.push(init);
    init++;
  }

  return arrayRes;
}

export function pickStringUntil(string: string, end: string = " ") {
  let res = "";
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element === end && index > 0) {
      break;
    }
    res = res + element;
  }
  return res;
}

export function compareArrays(arr1: string[], arr2: string[]) {
  const array1 = arr1.map((item) => item.toLowerCase());
  const array2 = arr2.map((item) => item.toLowerCase());

  let res = false;
  let matches: string[] | null = [];

  array1.map((str) => {
    if (array2.includes(str)) {
      res = true;
      matches?.push(str);
    }
  });

  return { match: res, index: matches };
}

export function phoneFormatMG(
  params: string,
  start = "",
  showStart = true,
  error = `"not a phone number"`,
  spaceIndexes = [2, 4, 7],
  space = " ",
  length = 10,
  hidden = false,
  hideIndexes = [],
  hideChar = "*",
  regex = /^([0-9]+)$/,
) {
  if (!regex.test(params)) {
    return error + " : TYPE INVALID";
  }

  let res = "";
  let theLength = length;

  if (params.startsWith(start)) {
    theLength = theLength + start.length;
  }

  if (params.length !== theLength) {
    return (
      error + ` : LENTGH ${params.length > theLength ? "A LOT" : "INSUFFISENT"}`
    );
  }

  for (let index = 0; index < params.length; index++) {
    let element = params[index];

    if (
      !params.startsWith(start) &&
      index === 0 &&
      element.toString() === "0"
    ) {
      element = "";
    }

    if (
      index > 0 &&
      hidden &&
      compareArrays([index.toString()], hideIndexes).match
    ) {
      element = hideChar;
    }

    if (spaceIndexes.includes(index)) {
      element = element + space;
    }

    res = res + element;
  }

  if (showStart && !params.startsWith(start)) {
    res = start + space + res;
  }

  return res;
}

export function truncateTextByCharLimits(
  text: string,
  limit: number = 11,
  ellipse: string = ".",
) {
  if (limit >= text.length) {
    return text;
  }

  let newStr = "";

  for (let index = 0; index < limit; index++) {
    const char = text[index];
    newStr = newStr + char;
  }
  newStr = newStr + ellipse + ellipse + ellipse;

  return newStr;
}

export function threesomeString(params: number | string, space: string = ",") {
  let res: string = "";

  let uses: string = params + "";
  uses = reverseString(uses);

  for (let index = 1; index < uses.length + 1; index++) {
    let element = uses[index - 1];
    if (index % 3 === 0 && index < uses.length) {
      element = element + space;
    }
    res = res + element;
  }

  res = reverseString(res);

  return res;
}

export function readNumberth(params: number, isMasculin: boolean = false) {
  let suffixe = "";
  const gender = isMasculin ? "" : "e";

  switch (params) {
    case 0:
      suffixe = "null";
      break;

    case 1:
      suffixe = "er" + gender;
      break;

    default:
      suffixe = "em" + gender;
      break;
  }

  const res = params + " " + suffixe;

  return res;
}

export function writeBetweenEachArrayString(params: string[], string: string) {
  let res = "";

  params.map((param, index) => {
    let add = string;
    if (index >= params.length - 1) {
      add = "";
    }
    const str = param + add;
    res = res + str;
  });

  return res;
}

export function responseAlwaysIncludeInTheLength(
  params: number,
  length: number,
) {
  let index = params;
  let increment = 0;

  while (index >= length) {
    index -= length;
    increment++;
  }

  return { index: index, increment: increment, initialLength: length };
}

export function removeStrDoubles(arrays: string[][], exclude: string[] = []) {
  let res: string[] = [];

  if (arrays && arrays.length > 0) {
    arrays.map((array) => {
      array.map((arr) => {
        if (!res.includes(arr)) {
          res.push(arr);
        }
      });
    });
  }

  if (exclude && exclude.length > 0) {
    const excluded = res.filter((str) => !exclude.includes(str));
    res = excluded;
  }

  return res;
}

export function maybePlural(params: string, plurality: boolean) {
  let res = "";

  plurality ? (res = params + "s") : (res = params);

  return res;
}

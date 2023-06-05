import {UrlSegment} from "@angular/router";

export function joinPath(url: UrlSegment[]) : string{
  let finalPath: string = "";
  url.forEach((segment: UrlSegment): void => {
    finalPath += segment.path + "/";
  });
  return finalPath.substring(0, finalPath.length - 1);
}

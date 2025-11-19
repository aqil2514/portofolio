import { InternationalizedArray, Locale } from "@/@types/Sanity";

export function getInternationalizationValue(rawData:InternationalizedArray[], locale:Locale){
    const data = rawData.find((data) => data._key === locale);
    if(!data) return "";

    return data.value;
}
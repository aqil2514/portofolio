import { WhoAmIItemButtonId } from "@/@types/About";

interface Props{
    buttonId:WhoAmIItemButtonId;
}

export function WhoAmIButton({buttonId}:Props){
    if(buttonId === "none") return null;
}
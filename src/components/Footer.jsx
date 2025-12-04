import { Instagram, Twitter, Linkedin } from "../assets/icons";

export function Footer() {
    return(
        <div className="flex h-32 border border-t-gray-200 align-baseline p-10">
            <div className="w-3/4"><span className="font-bold text-lg">Let’s work together</span></div>
            <div className="flex gap-6">
                <Instagram/>
                <Twitter/>
                <Linkedin/>
            </div>
        </div>
    )
}
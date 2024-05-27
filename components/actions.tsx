import React from "react";
import {Bell, Heart} from "lucide-react";
import { NavButton } from "./nav-button"
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";

export const Actions = () => {
    return (
        <div className="flex gap-x-4">
            <NavButton icon={Heart} />
            <NavButton icon={Bell} />
            <Avatar>
                <AvatarImage src=""/>
                <AvatarFallback className="bg-sky-500/50">
                    CN
                </AvatarFallback>
            </Avatar>
        </div>
    )
}

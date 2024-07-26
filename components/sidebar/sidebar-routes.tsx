"use client"

import { Compass, Layout } from "lucide-react"
import { SidebarItem } from "./sidebar-item";

const guest_routes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },

    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    }
]

export const SidebarRoutes = () => {
    const routes = guest_routes;
    
    return (
        <div className="flex flex-col w-full">
            {routes.map((item) =>(
                <SidebarItem 
                key={item.href} 
                label={item.label} 
                icon={item.icon} 
                href={item.href} />
            ))}
        </div>
    )
}
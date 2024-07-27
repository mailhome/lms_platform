"use client"

import { Compass, List, Layout, BarChart } from "lucide-react"
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

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

const teacher_routes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },

    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    }
]



export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");

    const routes = isTeacherPage ? teacher_routes : guest_routes;

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
import { Link } from 'react-router';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from '@/components/ui/sidebar';
import { menuLinks } from '@/lib/menu-links';
import { useLayoutStore } from '@/store/LayoutStore';

export default function SideBar() {
    const { closeSidebar } = useLayoutStore();

    return (
        <Sidebar className='fixed bg-neutral-950 top-28 h-full'>
            <SidebarContent className='bg-neutral-950 text-white w-full'>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuLinks.map((item) => (
                                <SidebarMenuItem
                                    className='px-4 py-2'
                                    key={item.id}
                                    onClick={() => closeSidebar()}
                                >
                                    <SidebarMenuButton asChild>
                                        <Link to={item.path}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

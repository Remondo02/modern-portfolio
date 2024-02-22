import * as React from 'react'
import { cn } from '@/lib/utils'
import {
  NavigationMenu as NavigationMenuUi,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { Menu } from 'lucide-react'

interface Props {
  pathName: string
}

const menuItems: { title: string; href: string }[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export function NavigationMenu({ pathName }: Props) {
  const cleanSlashPathName = pathName.replace(/\/$/, '')
  return (
    <NavigationMenuUi>
      <NavigationMenuList>
        {menuItems.map((menuItem) => (
          <NavigationMenuItem
            key={menuItem.title}
            className="hidden md:inline-block"
          >
            <NavigationMenuLink
              active={
                menuItem.href ===
                (pathName === '/' ? pathName : cleanSlashPathName)
              }
              href={menuItem.href}
              className={cn(navigationMenuTriggerStyle(), 'transition-none')}
            >
              {menuItem.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className="inline-block md:hidden">
          <NavigationMenuTrigger className="transition-none">
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[200px] gap-3 p-4">
              {menuItems.map((menuItem) => (
                <ListItem
                  key={menuItem.title}
                  title={menuItem.title}
                  href={menuItem.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuUi>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

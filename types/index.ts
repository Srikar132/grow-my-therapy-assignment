
export interface DropdownItem {
  name: string
  href: string
  description?: string
}

export interface NavItemsProps {
  name: string
  href: string
  dropdownItems?: DropdownItem[]
  className?: string
  isMobile?: boolean
  onClose?: () => void
}

export interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  navLinks: Array<{
    name: string
    href: string
  }>
}

export interface CounselingCardData {
  image: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

export interface CounselingCardProps {
  data: CounselingCardData;
  onButtonClick?: () => void;
}


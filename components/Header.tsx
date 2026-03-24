import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/assets/icons/logo-icon.svg" alt="AlphaStream logo" width={32} height={32} className="cursor-pointer"/>
                    <span className="text-xl font-bold text-white tracking-tight cursor-pointer">
                        AlphaStream
                    </span>
                </Link>
                <nav className="hidden sm:block">
                    <NavItems></NavItems>
                </nav>

                <UserDropdown />
            </div>
        </header>
    )
}
export default Header

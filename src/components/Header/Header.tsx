import { useMediaQuery } from 'usehooks-ts';

import DeskNav from './Nav/DeskNav';
import MobileNav from './Nav/MobileNav';

export default function Header() {
    return (
        <header className='flex bg-neutral-950 text-white items-center justify-between p-4 fixed z-50 top-0 w-full h-28'>
            <h1 className='w-full text-center md:text-start text-xl font-bold'>
                NinjaQuiz
            </h1>
            <NavChooser />
        </header>
    );
}

function NavChooser() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return isMobile ? <MobileNav /> : <DeskNav />;
}

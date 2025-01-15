export default function AuthWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='relative z-10 w-full mx-auto col-span-5'>
            {children}
        </main>
    );
}

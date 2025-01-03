export default function ContentSection({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className='mt-5 w-full max-xl:px-10 mx-auto mb-6'>
            {children}
        </section>
    );
}

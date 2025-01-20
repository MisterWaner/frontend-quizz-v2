export default function AuthWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className={`relative py-8 xl:px-28 px-4 w-full mx-auto`}>{children}</main>;
}

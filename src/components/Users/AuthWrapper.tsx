export default function AuthWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className={`relative p-8 w-full mx-auto`}>{children}</main>;
}

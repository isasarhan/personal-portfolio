
export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="pt-44 md:px-36">{children}</div>
    );
}

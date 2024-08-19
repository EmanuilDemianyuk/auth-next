

const ProtectedLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-blue-300">
            {children}
        </div>
    )
}

export default ProtectedLayout;
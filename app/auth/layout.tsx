

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full flex justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-yellow-100 to-orange-200">
            {children}
        </div>
    )
}

export default AuthLayout
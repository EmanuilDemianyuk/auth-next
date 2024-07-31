import CardWrapper from "@/components/auth/CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headrLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <div
                className="w-full flex justify-center items-center"
            >
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
        </CardWrapper>
    )
}

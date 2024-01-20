"use client"; // this component is going to have interactive elements so we need to use client side rendering

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild 
}: LoginButtonProps) => {
    const onClick = () => {
        console.log("LOGIN BUTTON CLICKED");
    }

    if (mode === "modal") {
        return (
            <span>
                TODO: impliment modal
            </span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
};

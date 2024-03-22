"use client";

import { ScaleLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

import { CardWrapper } from "./card-wrapper";
import { useCallback, useEffect } from "react";

export const NewVerificationForm = () => {
    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        console.log("Token(new-verification-component): ", token);
    }, [token]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper
            headerLabel="Confirming your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <div className="flex items-center w-full justify-center">
                <ScaleLoader/>
            </div>
        </CardWrapper>
    );
}

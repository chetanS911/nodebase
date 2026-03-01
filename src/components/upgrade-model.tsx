"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { authClient } from "@/lib/auth-client";
import { useQueryClient } from "@tanstack/react-query";

interface UpgradeModalProps {
    open: boolean;
    onOpenChange: ( open: boolean) => void;
};

export const UpgradeModal = ({
    open,
    onOpenChange
}: UpgradeModalProps) => {
    const queryClient = useQueryClient();

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Upgrade to Pro</AlertDialogTitle>
                    <AlertDialogDescription>
                        You need an active subscription to perform this 
                        action. Upgrade to Pro to unlock all feature.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={async () => {
                            await authClient.checkout({ 
                                slug: "pro",
                            });
                            await queryClient.invalidateQueries({ queryKey: ["subscription"] });
                        }}
                    >
                        Upgrade Now
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};
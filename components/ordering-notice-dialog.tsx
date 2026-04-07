"use client"

import { useState, useEffect } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "ordering-notice-dismissed"

export function OrderingNoticeDialog() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!sessionStorage.getItem(STORAGE_KEY)) {
            setOpen(true)
        }
    }, [])

    function handleOpenChange(value: boolean) {
        setOpen(value)
        if (!value) {
            sessionStorage.setItem(STORAGE_KEY, "1")
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl">Important Ordering Notice</DialogTitle>
                    <DialogDescription className="text-base leading-relaxed pt-2">
                        Skip the fees on Skip, DoorDash, and Uber Eats! For our best
                        prices and zero service charges, please call the restaurant
                        directly to place your pickup order.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex-col gap-2 sm:flex-col">
                    <DialogClose asChild>
                        <Button variant="primary-brand" size="lg" className="w-full">
                            Got It
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

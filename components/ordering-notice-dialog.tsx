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
                    <DialogTitle className="text-xl">Order Direct &amp; Save 20%</DialogTitle>
                    <DialogDescription className="text-base leading-relaxed pt-2">
                        Online prices through third-party apps include high service fees.
                        Save up to 20% on your total by calling us directly for pickup.
                        Get the same pizza for a better price.
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

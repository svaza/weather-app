import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";

interface AppAlertDialogProp {
    open: boolean;
    title: string;
    children: React.ReactNode;
}
export function AppAlertDialog(props: AppAlertDialogProp) {

    const [open, setOpen] = useState(props.open);

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);


    return (
        <>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.children}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );

}

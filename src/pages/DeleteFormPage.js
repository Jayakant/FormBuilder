import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/coreApiService/Auth";
import {Dialog, DialogContent, Button, DialogActions, DialogTitle, Slide} from "@mui/material";
import { useParams } from "react-router-dom";

export default function DeleteFormPage() {

    const auth = useAuth();

    const nav = useNavigate();

    const { label } = useParams()

    const [dialogOpen, setDialogOpen] = React.useState(true)

    const [formFieldIndex, setFormFieldIndex] = React.useState(0);


    React.useEffect(() => {
        for (let ind in auth.formArray) {
            if (auth.formArray[ind].label === label) {
                setFormFieldIndex(ind);
            }
        }
    }, [])

    function handleClose() {
        nav(`/main/formPage`)
    }

    function handleDelete() {

        let formArrayClone = auth.formArray;

        for (let indexVal in formArrayClone) {
            if (indexVal == formFieldIndex) {
                formArrayClone.splice(indexVal, 1);
            }
        }
        nav(`/main/formPage`)
    }

    return (<>

        <Dialog
            open={dialogOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            fullWidth maxWidth="sm"
        >
            <DialogTitle>{"Confirm Delete"}</DialogTitle>
            <DialogContent>
                Are you sure to Delete
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDelete}>Confirm</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </>)
}


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});
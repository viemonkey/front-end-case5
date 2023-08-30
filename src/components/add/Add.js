import { Button, TextField } from "@mui/material";
import "./Add.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlogs } from "../../services/blogs/BlogService";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
};
const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
        backgroundColor: "rgb(146, 144, 144)",
        borderRadius: "100px 100px 100px 100px !important"
    },
});


export default function Add() {
    const [imageUpload, setImageUpload] = React.useState(null);
    const [percent, setPercent] = React.useState(0);
    const [urlFile, setUrlFile] = React.useState("");
    const [isLoading, setisLoading] = React.useState(false);

    const uploadFile = () => {
        if (imageUpload === null) return
        const storageRef = ref(storage, `/files/${imageUpload.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageUpload);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setUrlFile(url);
                    setisLoading(false);
                })
            }

        );

    }
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => {
        return state.user.user
    })

    const handleAdd = (values) => {
        values.image = urlFile;
        let data = { ...values, user: { id: user.idUser } }
        console.log(data);
        console.log(values)
        dispatch(addBlogs(data))
        navigate('/home')
    }

    React.useEffect(() => {
        if (imageUpload) {
            setisLoading(true);
            uploadFile()
        }
    }, [imageUpload]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <div>
            <div className="inp-add-post">
                <CssTextField id="outlined-basic" className="input" placeholder="Bạn đang nghĩ gì?" onClick={handleOpen} hidden />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ textAlign: "center", marginBottom: "10px" }}>
                        Add a new posts
                    </Typography>
                    <TextField fullWidth label="fullWidth" id="fullWidth" name="title" />
                    <TextField fullWidth id="fullWidth" name="image" type={"file"}
                        onChange={(event) => {
                            setImageUpload(event.target.files[0]);
                        }}
                    />
                    {isLoading && (
                        <div className="progress">
                            <div className="progress-bar"
                                role="progressbar"
                                style={{ width: `${percent}%` }}
                                aria-valuenow={percent}
                                aria-valuemin={0} a
                                aria-valuemax={100}>
                                {percent}%
                            </div>
                        </div>
                    )}
                    {urlFile && !isLoading && < img src={urlFile} alt="" width={"300px"} height={"300px"} />}
                    <Button sx={{ margin: "20px 0 0 30px", width: "80%" }} variant="outlined" type={"submit"} onClick={handleAdd}>Add</Button>
                </Box>
            </Modal>
        </div>
    );
}
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 8,
};

export const Success = ({ setOpen, open }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex justify-center flex-col items-center ">
          <CheckCircleIcon
            className="text-green-600"
            sx={{ fontSize: "140px" }}
          />
          <Typography
            id="modal-modal-description"
            className="text-center"
            sx={{ mt: 2 }}
          >
            Your order has been placed successfully!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

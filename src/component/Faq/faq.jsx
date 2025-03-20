import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";

export const FAQ = ({ question, answer }) => {
  const isMd = useMediaQuery("(min-width:568px) and (max-width:1023px)");

  return (
    <Accordion className="my-4 py-1">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography
          component="span"
          sx={{
            fontSize: isMd ? "20px" : "18px",
            fontWeight: isMd ? "600" : "500",
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ fontSize: "16px" }}>
        {answer}
      </AccordionDetails>
    </Accordion>
  );
};

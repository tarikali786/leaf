import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";

export const FAQ = () => {
  const isMd = useMediaQuery("(min-width:568px) and (max-width:1023px)"); // Medium screens (md)

  return (
    <div>
      <Accordion className="my-4 py-1">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            sx={{
              fontSize: isMd ? "20px" : "18px",
              fontWeight: isMd ? "600" : "500",
            }}
          >
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: "16px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

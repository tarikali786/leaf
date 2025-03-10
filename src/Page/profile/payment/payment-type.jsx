import { Tabs, Tab } from "@mui/material";
export const PaymentType = ({ setValue, value }) => {
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      orientation="vertical"
      onChange={handleTabChange}
      sx={{ borderRight: 1, borderColor: "divider", width: "fit-content" }}
    >
      <Tab label="CREDIT CARD " />
      <Tab label="DEBIT CARD" />
      <Tab label="NET BANKING" />
      <Tab label="CASH ON DELIVERY" />
    </Tabs>
  );
};

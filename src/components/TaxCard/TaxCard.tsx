import { Box, Checkbox, Grid2, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { useTranslation } from "react-i18next";
import { formatMoney } from "../../helpers/formatMoney/formatMoney";

interface Props {
  name: string;
  displayName: string;
  checked: boolean;
  income: number;
  procent: number;
  handleCheckBox: (name: string, checked: boolean) => void;
}

const TaxCard: React.FC<Props> = ({
  name,
  displayName,
  checked,
  income,
  procent,
  handleCheckBox,
}) => {
  const { t } = useTranslation();

  const handleClick = () => {
    handleCheckBox(name, !checked);
  };

  const formattedProcent = `(${procent}% ${t("text.fromIncome")}`;

  const totalTax = (income * procent) / 100;

  return (
    <Grid2
      sx={{
        minHeight: "70px",
        width: "100%",
        px: 3,
        py: 2,
        boxShadow: "-1px 10px 22px 0px rgba(0, 0, 0, 0.75)",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Checkbox
          name={name.toLowerCase()}
          checked={checked}
          icon={<PanoramaFishEyeIcon sx={{ fontSize: "30px" }} />}
          checkedIcon={
            <CheckCircleIcon sx={{ color: "black", fontSize: "30px" }} />
          }
        />
        <Box>
          <Typography variant="h5" fontWeight={"bold"} textAlign={"right"}>
            {displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: "#9D9D9D" }}>
            {formattedProcent}
          </Typography>
        </Box>
      </Box>
      {checked && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: "30px" }}>
            {formatMoney(totalTax)}
          </Typography>
          <InfoIcon fontSize="large" />
        </Box>
      )}
    </Grid2>
  );
};

export default TaxCard;

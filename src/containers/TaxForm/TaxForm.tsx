import { useEffect, useState } from "react";
import { Tax } from "../../types";
import { Box, Button, Grid2, Typography } from "@mui/material";
import TaxCard from "../../components/TaxCard/TaxCard";
import { useSelector } from "react-redux";
import { selectUserData, setTaxesData } from "../../app/UserDataSlice";
import { calculateTotalTax } from "../../helpers/calculateTotalTax.ts/calculateTotalTax";
import { useTranslation } from "react-i18next";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import KG from "../../components/SVG/KG";
import RU from "../../components/SVG/RU";
import { formatMoney } from "../../helpers/formatMoney/formatMoney";
import AnimatedNumbers from "react-animated-numbers";

const TaxForm = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [navigate, userData]);

  const [taxes, setTaxes] = useState<Tax[]>([
    { name: "ipn", displayName: "ИПН", checked: false, procent: 3 },
    { name: "co", displayName: "СО", checked: false, procent: 3.5 },
    { name: "opv", displayName: "ОПВ", checked: false, procent: 10 },
    { name: "vosms", displayName: "ВОСМС", checked: false, procent: 5 },
  ]);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleCheckbox = (name: string, checked: boolean) => {
    setTaxes((prevState) =>
      prevState.map((tax) => (tax.name === name ? { ...tax, checked } : tax))
    );
  };

  const onFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    const checkedTaxes = taxes.filter((tax) => tax.checked);
    if (checkedTaxes.length < 1) {
      alert("Выберите хотя бы один налог!");
      return;
    }

    dispatch(setTaxesData(checkedTaxes));
    navigate("/results");
  };

  const totalTax = calculateTotalTax(taxes, userData ? userData.income : 0);

  return (
    <Grid2
      container
      direction="column"
      spacing={2}
      wrap="nowrap"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100 %",
      }}
    >
      <Grid2
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <ArrowBackIosIcon
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <Typography variant={"h6"} fontStyle={"italic"} fontSize={"24px"}>
          {t("text.taxTitle")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{ border: "1px solid black", p: 0 }}
            onClick={() => handleChangeLanguage("kg")}
          >
            <KG />
          </Button>
          <Button
            sx={{ border: "1px solid black", p: 0 }}
            onClick={() => handleChangeLanguage("ru")}
          >
            <RU />
          </Button>
        </Box>
      </Grid2>
      <Grid2 container justifyContent="space-between" alignItems="center">
        <Typography
          variant="h5"
          fontStyle={"italic"}
          sx={{ maxWidth: "180px" }}
        >
          {t("text.yourIncome")}
        </Typography>
        <Typography variant="h5" fontStyle={"italic"}>
          {formatMoney(userData ? userData.income : 0)}
        </Typography>
      </Grid2>

      <Grid2 container direction="column" spacing={2}>
        {taxes.map((tax) => (
          <TaxCard
            key={tax.name}
            name={tax.name}
            displayName={tax.displayName}
            checked={tax.checked}
            income={userData ? userData.income : 0}
            procent={tax.procent}
            handleCheckBox={handleCheckbox}
          />
        ))}
      </Grid2>

      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          flexGrow: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            fontStyle={"italic"}
            sx={{ maxWidth: "200px" }}
          >
            {t("text.yourTotalPayment")}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" fontStyle={"italic"}>
              <AnimatedNumbers
                includeComma
                transitions={() => ({
                  type: "spring",
                  duration: 1.5,
                })}
                animateToNumber={totalTax}
              />
            </Typography>
            <Typography variant="h5" fontStyle={"italic"} sx={{ ml: 1 }}>
              KGS
            </Typography>
          </Box>
        </Box>
      </Grid2>

      <Grid2 sx={{ mt: 4 }}>
        <Button
          onClick={onFormSubmit}
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "black",
            fontStyle: "italic",
            fontSize: "20px",
            textTransform: "none",
          }}
        >
          {t("text.toPay")}
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default TaxForm;

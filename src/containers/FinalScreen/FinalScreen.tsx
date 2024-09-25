import { Button, Grid2, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSelector } from "react-redux";
import {
  selectTaxes,
  selectUserData,
  setTaxesData,
  setUserData,
} from "../../app/UserDataSlice";
import { calculateTotalTax } from "../../helpers/calculateTotalTax.ts/calculateTotalTax";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../types";
import { useTranslation } from "react-i18next";
import { formatMoney } from "../../helpers/formatMoney/formatMoney";

const initialState: UserData = {
  name: "",
  surname: "",
  inn: "",
  taxMode: "simple",
  income: 0,
};

const FinalScreen: React.FC = () => {
  const userData = useSelector(selectUserData);
  const taxes = useSelector(selectTaxes);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onClose = () => {
    dispatch(setUserData(initialState));
    dispatch(setTaxesData([]));
    navigate("/");
  };

  const formattedTaxMode =
    userData?.taxMode === "simple"
      ? t("mainForm.simple")
      : userData?.taxMode === "general"
      ? t("mainForm.general")
      : "";

  const taxAmount = (income: number, tax: number) => {
    return formatMoney((income * tax) / 100);
  };
  const totalTax = calculateTotalTax(taxes, userData?.income ?? 0);
  const formattedIncome = formatMoney(userData?.income ?? 0);

  return (
    <Grid2
      container
      direction={"column"}
      wrap="nowrap"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Grid2 sx={{ mb: "80px" }}>
        <Typography
          variant="h4"
          fontStyle={"italic"}
          sx={{ textAlign: "center" }}
        >
          {t("text.thanks")}
        </Typography>
        <Typography
          variant="h4"
          fontStyle={"italic"}
          sx={{ textAlign: "center" }}
        >
          {t("text.success")}
        </Typography>
        <CheckCircleIcon
          sx={{ fontSize: "60px", display: "block", mx: "auto" }}
        />
      </Grid2>
      <Grid2 container direction={"column"} spacing={1}>
        <Grid2 sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" fontStyle={"italic"}>
            {t("mainForm.name")}
          </Typography>
          <Typography variant="body1" fontStyle={"italic"}>
            {userData?.name}
          </Typography>
        </Grid2>
        <Grid2 sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" fontStyle={"italic"}>
            {t("mainForm.surname")}
          </Typography>
          <Typography variant="body1" fontStyle={"italic"}>
            {userData?.surname}
          </Typography>
        </Grid2>
        <Grid2 sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" fontStyle={"italic"}>
            {t("mainForm.inn")}
          </Typography>
          <Typography variant="body1" fontStyle={"italic"}>
            {userData?.inn}
          </Typography>
        </Grid2>
        <Grid2 sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" fontStyle={"italic"}>
            {t("mainForm.taxMode")}
          </Typography>
          <Typography variant="body1" fontStyle={"italic"}>
            {formattedTaxMode}
          </Typography>
        </Grid2>
        <Grid2 sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" fontStyle={"italic"}>
            {t("mainForm.income")}
          </Typography>
          <Typography variant="body1" fontStyle={"italic"}>
            {formattedIncome}
          </Typography>
        </Grid2>
        {taxes.map((tax) => (
          <Grid2
            key={tax.name}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="body1" fontStyle={"italic"}>
              {tax.displayName}
            </Typography>
            <Typography variant="body1" fontStyle={"italic"}>
              {taxAmount(userData ? userData.income : 0, tax.procent)}
            </Typography>
          </Grid2>
        ))}
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "60px",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="body1"
            fontStyle={"italic"}
            sx={{ maxWidth: "120px" }}
          >
            {t("text.totalPaid")}
          </Typography>
          <Typography variant="body1" fontStyle={"italic"}>
            {formatMoney(totalTax)}
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2 sx={{ mt: "auto" }}>
        <Button
          fullWidth
          variant="text"
          sx={{
            color: "black",
            fontStyle: "italic",
            fontSize: "20px",
            textTransform: "none",
          }}
          onClick={onClose}
        >
          {t("text.onMain")}
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default FinalScreen;

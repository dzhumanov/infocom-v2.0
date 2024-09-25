import { Button, Grid2, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setUserData } from "./UserDataSlice";
import { UserData } from "../../types";
import { useTranslation } from "react-i18next";

interface Props {
  onClose: () => void;
}

const initialState: UserData = {
  name: "",
  surname: "",
  inn: "",
  taxMode: "simple",
  income: 0,
};

const MainForm: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();

  const [state, setState] = useState<UserData>({
    name: "",
    surname: "",
    inn: "",
    taxMode: "simple",
    income: 0,
  });
  const [innError, setInnError] = useState<string>("");
  const [incomeError, setIncomeError] = useState<string>("");

  const dispatch = useAppDispatch();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "inn" && value.length > 12) {
      return;
    }

    if (name === "income" && value.length > 9) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      [name]: name === "income" ? parseFloat(value) : value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (state.inn.length !== 12) {
      setInnError("ИНН должен содержать 12 цифр");
      return;
    } else {
      setInnError("");
    }

    if (state.income <= 0 || state.income > 150000000) {
      setIncomeError("Доход не может быть равен нулю и не больше 150 000 000");
      return;
    } else {
      setIncomeError("");
    }

    dispatch(setUserData(state));
    setState(initialState);
    onClose();
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={onFormSubmit}
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Grid2 container spacing={2} sx={{ mb: 2 }}>
          <Grid2 size={6}>
            <Typography
              variant="body1"
              fontStyle={"italic"}
              sx={{ mb: "10px" }}
            >
              {t("mainForm.name")}
            </Typography>
            <TextField
              fullWidth
              id="name"
              placeholder={t("mainForm.name")}
              value={state.name}
              onChange={inputChangeHandler}
              name="name"
              required
              sx={{
                "& .MuiOutlinedInput-input": {
                  padding: "8px",
                },
              }}
            />
          </Grid2>
          <Grid2 size={6}>
            <Typography
              variant="body1"
              fontStyle={"italic"}
              sx={{ mb: "10px" }}
            >
              {t("mainForm.surname")}
            </Typography>
            <TextField
              fullWidth
              id="surname"
              placeholder={t("mainForm.surname")}
              value={state.surname}
              onChange={inputChangeHandler}
              name="surname"
              required
              sx={{
                "& .MuiOutlinedInput-input": {
                  padding: "8px",
                },
              }}
            />
          </Grid2>
        </Grid2>
        <Grid2 sx={{ mb: 4 }}>
          <Typography variant="body1" fontStyle={"italic"} sx={{ mb: "10px" }}>
            {t("mainForm.inn")}
          </Typography>
          <TextField
            fullWidth
            type="number"
            id="inn"
            placeholder={t("mainForm.inn")}
            value={state.inn}
            onChange={inputChangeHandler}
            name="inn"
            required
            error={!!innError}
            helperText={innError}
            sx={{
              "& .MuiOutlinedInput-input": {
                padding: "8px",
              },
            }}
          />
        </Grid2>
        <Grid2 sx={{ mb: 4 }}>
          <Typography variant="body1" fontStyle={"italic"} sx={{ mb: "10px" }}>
            {t("mainForm.taxMode")}
          </Typography>
          <TextField
            fullWidth
            select
            id="taxMode"
            value={state.taxMode}
            onChange={inputChangeHandler}
            name="taxMode"
            required
            sx={{
              "& .MuiOutlinedInput-input": {
                padding: "8px",
              },
            }}
          >
            <MenuItem value="simple">{t("mainForm.simple")}</MenuItem>
            <MenuItem value="general">{t("mainForm.general")}</MenuItem>
          </TextField>
        </Grid2>
        <Grid2>
          <Typography variant="body1" fontStyle={"italic"} sx={{ mb: "10px" }}>
            {t("mainForm.income")}
          </Typography>
          <TextField
            fullWidth
            type="number"
            id="income"
            placeholder="0 сом"
            value={state.income}
            onChange={inputChangeHandler}
            name="income"
            required
            error={!!incomeError}
            helperText={incomeError}
            sx={{
              "& .MuiOutlinedInput-input": {
                padding: "8px",
              },
            }}
          />
        </Grid2>
        <Grid2 sx={{ mt: "auto" }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "black",
              fontStyle: "italic",
              fontSize: "20px",
              textTransform: "none",
            }}
          >
            {t("text.taxButtonCalculate")}
          </Button>
        </Grid2>
      </form>
    </>
  );
};

export default MainForm;

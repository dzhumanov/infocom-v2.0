import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "ru",
  resources: {
    ru: {
      translation: {
        text: {
          taxButton: "Налоговый вычет",
          taxTitle: "Заплатить налоги за ИП",
          taxText:
            "Теперь ИП на упрощенке обязан уплачивать за себя ИПН и социальный налог. В связи с этими изменениями ИП должен платить за себя:",
          taxButtonCalculate: "Рассчитать",
          yourIncome: "Ваш доход за полугодие:",
          yourTotalPayment: "Итого к оплате за полугодие:",
          toPay: "Оплатить",
          fromIncome: "от дохода)",
          thanks: "Спасибо!",
          success: "Налоги успешно оплачены!",
          totalPaid: "Итого оплачено за полугодие:",
          onMain: "Вернуться на главную",
        },
        mainForm: {
          name: "Имя",
          surname: "Фамилия",
          inn: "ИНН",
          taxMode: "Режим налогооблажения",
          simple: "Упрощённый",
          general: "Общедоступный",
          income: "Ваш доход за пол года",
        },
      },
    },
    kg: {
      translation: {
        text: {
          taxButton: "Салык чегерүү",
          taxTitle: "Жеке ишкерлер үчүн салыктарды төлөө",
          taxText:
            "Эми жөнөкөйлөштүрүлгөн жеке ишкер өзү үчүн жеке киреше салыгын жана социалдык салыкты төлөөгө милдеттүү. Бул өзгөрүүлөргө байланыштуу жеке ишкер өзү төлөшү керек:",
          taxButtonCalculate: "Эсептөө",
          yourIncome: "Сиздин кирешеңиз алты айлык:",
          yourTotalPayment: "Алты ай үчүн жалпы төлөө:",
          toPay: "Төлөө",
          fromIncome: "кирешеден)",
          thanks: "Рахмат!",
          success: "Салыктар ийгиликтүү төлөндү!",
          totalPaid: "Жарым жыл үчүн жалпы төлөм:",
          onMain: "Башкы бетке",
        },
        mainForm: {
          name: "Атыңыз",
          surname: "Фамилияңыз",
          inn: "ИНН",
          taxMode: "Салык режими",
          simple: "Жөнөкөйлөтүлгөн",
          general: "Жалпы",

          income: "Алты айлык кирешеңиз",
        },
      },
    },
  },
});

export default i18n;

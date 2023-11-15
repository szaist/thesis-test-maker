import { j as defineStore, k as useToast } from '../server.mjs';

const toastAutoHideAfter = 5e3;
const useToastMessages = defineStore("toast-messages", () => {
  const toast = useToast();
  const addMessage = (message) => {
    toast.add(message);
  };
  const showInfo = ({ message, detail }) => {
    addMessage({
      severity: "info",
      life: toastAutoHideAfter,
      summary: message,
      detail: detail != null ? detail : ""
    });
  };
  const showSuccess = ({ message, detail }) => {
    addMessage({
      severity: "success",
      life: toastAutoHideAfter,
      summary: message,
      detail: detail != null ? detail : ""
    });
  };
  const showError = ({ message, detail }) => {
    addMessage({
      severity: "error",
      life: toastAutoHideAfter,
      summary: message,
      detail: detail != null ? detail : ""
    });
  };
  const showWarn = ({ message, detail }) => {
    addMessage({
      severity: "warn",
      life: toastAutoHideAfter,
      summary: message,
      detail: detail != null ? detail : ""
    });
  };
  return {
    showInfo,
    showSuccess,
    showWarn,
    showError
  };
});

export { useToastMessages as u };
//# sourceMappingURL=toast-message-6430ad2e.mjs.map

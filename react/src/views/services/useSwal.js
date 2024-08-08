// src/hooks/useSwal.js
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const useSwal = () => {
  const showAlert = (options) => {
    const customOptions = {
      ...options,
      customClass: {
        container: 'my-swal-container', // Add custom class
        ...options.customClass // Merge with any custom class provided in options
      }
    };
    return MySwal.fire(customOptions);
  };

  const showMessage = (type, text) => {
    switch (type) {
      case 'success':
        return showSuccess(text);
      case 'error':
        return showError(text);
      case 'warning':
        return showWarning(text);
      case 'info':
        return showInfo(text);
      default:
        return showSuccess(text); // Default to success if type is unknown
    }
  };

  const showSuccess = (text) => {
    return showAlert({
      title: 'Success!',
      text: text || 'Operation was successful.',
      icon: 'success',
      confirmButtonText: 'Got it'
    });
  };

  const showError = (text) => {
    return showAlert({
      title: 'Error!',
      text: text || 'Something went wrong.',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  };

  const showWarning = (text) => {
    return showAlert({
      title: 'Warning!',
      text: text || 'Please be careful.',
      icon: 'warning',
      confirmButtonText: 'Understood'
    });
  };

  const showInfo = (text) => {
    return showAlert({
      title: 'Information',
      text: text || 'Here is some information.',
      icon: 'info',
      confirmButtonText: 'Acknowledge'
    });
  };

  return {
    showMessage
  };
};

export default useSwal;

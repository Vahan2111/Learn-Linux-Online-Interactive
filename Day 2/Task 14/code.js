
function saveFormData() {
    const formData = {};

    document.querySelectorAll('form input').forEach(input => {
      formData[input.id] = input.value;
    });

    localStorage.setItem('formData', JSON.stringify(formData));
  }
  
  function loadFormData() {
    const savedData = localStorage.getItem('formData');
  
    if (savedData) {
      const formData = JSON.parse(savedData);
  
      document.querySelectorAll('form input').forEach(input => {
        if (formData[input.id]) {
          input.value = formData[input.id];
        }
      });
    }
  }
  
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  document.querySelectorAll('form input').forEach(input => {
    input.addEventListener('input', throttle(saveFormData, 1000));
  });
  loadFormData();
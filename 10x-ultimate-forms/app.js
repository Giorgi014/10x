document.querySelectorAll('input[data-mask]').forEach(input => {
    input.addEventListener('input', ({ target }) => {
        const mask = target.dataset.mask;
        const rawValue = target.value.replace(/\D/g, '');
        let formattedValue = '';
        let valueIndex = 0;

        for (const char of mask) {
            if (char === '0') {
                if (valueIndex < rawValue.length) {
                    formattedValue += rawValue[valueIndex];
                    valueIndex++;
                } else {
                    break;
                }
            } else {
                formattedValue += char;
            }
        }

        target.value = formattedValue;
    });
});

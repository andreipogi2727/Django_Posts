
const handleAlerts = (type, msg) => {
    if (alertBox) {
        alertBox.innerHTML = `
            <div class="alert alert-${type}" role="alert">
                ${msg}
            </div>`;
    } else {
        console.error('alertBox element not found.');
    }
};

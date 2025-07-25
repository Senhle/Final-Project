function showLoginPage() {
    const dashboard = document.getElementById('dashboard');
    const loginPage = document.getElementById('loginPage');
    if (dashboard && loginPage) {
        dashboard.style.display = 'none';
        loginPage.style.display = 'flex';
    }
}

function login() {
    const pin = document.getElementById('pin')?.value;
    const dashboard = document.getElementById('dashboard');
    const loginPage = document.getElementById('loginPage');
    const mainBalance = document.getElementById('mainBalance');
    const savingsSection = document.getElementById('savingsSection');
    const insuranceSection = document.getElementById('insuranceSection');
    const liveBetterSection = document.getElementById('liveBetterSection');

    if (!pin || !dashboard || !loginPage) {
        alert('Required elements are missing.');
        return;
    }

    loginPage.style.display = 'none';
    dashboard.style.display = 'none';

    if (pin === '1234') {
        // Redirect to dashboard.html for normal mode
        localStorage.setItem('mode', 'normal');
        window.location.href = 'dashboard.html';
    } else if (pin === '5678') {
        // Redirect to dashboard.html for danger mode
        localStorage.setItem('mode', 'danger');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid PIN');
        loginPage.style.display = 'flex';
        return;
    }

    document.getElementById('pin').value = '';
}

function emergencyAlert() {
    console.log('Emergency alert sent to guardian/security at', new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' }));
    alert('Emergency alert simulated (check console)');
}
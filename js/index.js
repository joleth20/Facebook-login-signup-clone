window.addEventListener('DOMContentLoaded', () => {
    
    const iconTrigger = document.querySelector('#iconTrigger');
    const changeType = document.querySelector('#changeType');
    
    iconTrigger.addEventListener('click', () => {
        if (iconTrigger.className.includes('fa-eye-slash') || changeType.type === 'password') {
            iconTrigger.classList.remove('fa-eye-slash');
            iconTrigger.classList.add('fa-eye');
            changeType.type = 'text'; 
        } else {
            iconTrigger.classList.add('fa-eye-slash');
            iconTrigger.classList.remove('fa-eye');
            changeType.type = 'password'; 
        }
    });



});

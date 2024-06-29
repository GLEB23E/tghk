const callback = () => {
    const form = document.getElementById('application-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        const data = {
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            phoneNumber: formData.get('phone-number'),
            email: formData.get('email'),
            preferredTime: formData.get('preferred-time')
        };
        
        console.log('Form submitted:', data);
        
        // Here you can add code to send data to the server, display a success message, etc.
        
        alert('Спасибо за вашу заявку!');
        form.reset();
    });
}
export default callback


const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
    event.preventDefault();

    // const isSomeEmpty = [...event.currentTarget.querySelectorAll('input')].filter(({ type }) => type != 'submit').some(({ value }) => {
    //     return value === '';
    // });    

    const isSomeEmpty = [...event.currentTarget.elements].filter(({ type }) => type != 'submit').some(({ value }) => {
        return value === '';
    });    

    if (isSomeEmpty) {
        alert("Будь ласка заповніть усі поля!");
    }
    else {
        const { elements:
            { email, password }
        } = event.currentTarget;
        
        console.log(`Email: ${email.value}\nPassword: ${password.value}`);
        event.currentTarget.reset();
    }
})
const ratePassword = (countLegit, congfiguration, message) => {
    for (const {element} of congfiguration){
        if (element.classList.contains('text-green-600')){
            countLegit++;
        }
    }
    if (countLegit === 0){
        message.innerHTML = '';
    }
    else if (countLegit === 1){
        message.innerHTML = 'Weak!';
        message.style.color = 'red';
    }
    else if (countLegit === 2 || countLegit === 3){
        message.innerHTML = 'Medium!';
        message.style.color = 'orange';
    }
}

export default function strongPass() {
    const byId = (id) => document.getElementById(id);
    const congfiguration = [
        {
            regex: new RegExp('(?=.*[A-Z])'),
            element: byId('first-child'),
        },
        {
            regex: new RegExp('(?=.*[!@#$%^&*_])'),
            element: byId('second-child'),
        },
        {
            regex: new RegExp('(?=.*[0-9])'),
            element: byId('third-child'),
        },
        {
            regex: new RegExp('(?=.{6,12}$)'),
            element: byId('fourth-child'),
        },
    ];
    const pw = document.getElementById('pw1');
    const submitButton = document.getElementById('submit-btn');
    const againPassword = document.getElementById('again-password');
    const form = document.getElementById('form');
    const message = document.getElementById('message');
    pw.addEventListener('keyup', () => {
        for (const {regex, element} of congfiguration) {
            if (regex.test(pw.value)) {
                element.classList.add('text-green-600');
                element.classList.add('line-through');
            }
            else{
                element.classList.remove('text-green-600');
                element.classList.remove('line-through');
            }
        }

        ratePassword(0, congfiguration, message);

        let checked = true;
        for (const {element} of congfiguration){
            if (!element.classList.contains('text-green-600') && !element.classList.contains('line-through')){
                checked = false;
                break;
            }
        }
        if (checked){
            submitButton.classList.remove('bg-gray-400');
            submitButton.classList.remove('cursor-not-allowed');
            submitButton.classList.add('cursor-pointer');
            submitButton.classList.add('bg-cyan-500');
            submitButton.classList.add('hover:bg-cyan-400');
            againPassword.classList.remove('hidden');
            againPassword.classList.add('block');
            form.style.height = "400px";
            submitButton.disabled = false;
            message.innerHTML = '';
        }
        else{
            submitButton.classList.add('bg-gray-400');
            submitButton.classList.add('cursor-not-allowed');
            submitButton.classList.remove('cursor-pointer');
            submitButton.classList.remove('bg-cyan-500');
            submitButton.classList.remove('hover:bg-cyan-400');
            againPassword.classList.add('hidden');
            againPassword.classList.remove('block');
            form.style.height = "300px";
            submitButton.disabled = true;
        }
    })
}
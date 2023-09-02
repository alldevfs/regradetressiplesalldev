document.querySelector('.calc').addEventListener('click', () => {
    const firstValue = document.querySelector('.firstform').value
    const seconValue = document.querySelector('.secondform').value
    const thirdValue = document.querySelector('.thirdform').value

    // verificar se estão vazias
    if (!firstValue || !seconValue || !thirdValue) {
        alert(`Informe os três primeiros valores para calcular!`);
        document.querySelector('.response').value = "invalido";
        return;
    } else {
        // realizar calculo dos valores recebidos e adiciona-lo no campo label de texto.
        let response = parseFloat((seconValue * thirdValue) / firstValue);
        document.querySelector('.response').value = response;
    }
})

// zerar os campos
document.querySelector('.reload').addEventListener('click', () => {
    document.querySelector('.firstform').value = '';
    document.querySelector('.secondform').value = '';
    document.querySelector('.thirdform').value = '';
    document.querySelector('.response').value = '';
})
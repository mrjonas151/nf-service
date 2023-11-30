function calcularNotaFiscal() {
    const valorServico = parseFloat(document.getElementById('valorServico').value);
    const taxaImposto = parseFloat(document.getElementById('imposto').value);

    if(valorServico && taxaImposto){
        const imposto = (taxaImposto / 100) * valorServico;
        const total = valorServico + imposto;

        document.getElementById('valorExibicao').innerText = valorServico.toFixed(2);
        document.getElementById('impostoExibicao').innerText = taxaImposto.toFixed(2) + "%";
        document.getElementById('impostoPagar').innerText =  "R$ " + imposto.toFixed(2);
        document.getElementById('totalPagar').innerText = "R$ " + total.toFixed(2);

        document.getElementById('notaFiscal').style.display = 'block';
    }else{
        document.getElementById('valorExibicao').innerText = "Complete todos os campos para calcular!";
        document.getElementById('impostoExibicao').innerText = "Complete todos os campos para calcular!";
        document.getElementById('impostoPagar').innerText = "Complete todos os campos para calcular!";
        document.getElementById('totalPagar').innerText = "Complete todos os campos para calcular!";

        document.getElementById('notaFiscal').style.display = 'block';
    }

    
}

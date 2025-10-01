const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', function () {
    const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase().trim();
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    const cartas = document.querySelectorAll('.carta');
    
    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria.toLowerCase().trim();
        const precoCarta = parseFloat(carta.dataset.preco); 
        
        let mostrarCarta = true;

        // Filtro por categoria
        if (categoriaSelecionada !== '' && categoriaSelecionada !== categoriaCarta) {
            mostrarCarta = false;
        }

        // Filtro por preço
        if (precoMaximoSelecionado !== '' && precoCarta > parseFloat(precoMaximoSelecionado)) {
            mostrarCarta = false;
        }

        // Exibir ou esconder
        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});
// Custom Select
const customSelect = document.querySelector('.custom-select');
const customTrigger = document.querySelector('.custom-select-trigger');
const customOptions = document.querySelectorAll('.custom-option');
const hiddenSelect = document.querySelector('#categoria');

customTrigger.addEventListener('click', () => {
  customSelect.classList.toggle('open');
});

customOptions.forEach(option => {
  option.addEventListener('click', () => {
    const value = option.dataset.value;
    const text = option.textContent;

    // Atualiza campo fake
    customTrigger.textContent = text;

    // Atualiza select real (pra funcionar no filtro)
    hiddenSelect.value = value;

    // Fecha menu
    customSelect.classList.remove('open');
  });
});

// Fechar dropdown ao clicar fora
document.addEventListener('click', e => {
  if (!customSelect.contains(e.target)) {
    customSelect.classList.remove('open');
  }
});


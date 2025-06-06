import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');
export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const qtd = Number(qtdCaracteres.value);
    const temCheckbox = chkMaiusculas.checked || chkMinusculas.checked || 
                       chkNumeros.checked || chkSimbolos.checked;
    // const senha = geraSenha(
    //     qtdCaracteres.value,
    //     chkMaiusculas.checked,
    //     chkMinusculas.checked,
    //     chkNumeros.checked,
    //     chkSimbolos.checked
    // );
return (!qtd || qtd <= 0) && temCheckbox ? 'Escolha a quantidade de caracteres' :
           (!qtd || qtd <= 0) ? 'Nada selecionado.' :
           qtd < 8 ? 'Mínimo de 8 caracteres' :
           !temCheckbox ? 'Selecione pelo menos uma opção' :
           geraSenha(qtd, chkMaiusculas.checked, chkMinusculas.checked, 
                    chkNumeros.checked, chkSimbolos.checked) || 'Erro ao gerar senha';
    
}
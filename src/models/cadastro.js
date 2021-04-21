
const validaCPF = (cpf) => {
    if (cpf.length !== 11) {
        return {
            valido: false,
            texto: "CPF deve ter 11"
        }
    } else {
        return {
            valido: true,
            texto: ""
        }
    }
}


const validaSenha = (senha) => {
    if (senha.length < 4 || senha.length > 72) {
        return {
            valido: false,
            texto: "A senha deve ter entre 4 à 72 dígitos"
        }
    } else {
        return {
            valido: true,
            texto: ""
        }
    }
}

export { validaCPF, validaSenha }
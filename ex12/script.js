function calcular() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `[ERRO] Verifique os dados e tente novamente!`
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Impossível contar, considerando passo valendo 1!')
            p = 1
        }
        if (i < f) {
            for(let c = i;c <= f; c += p) {
                res.innerHTML += ` ${c}`
            } 
        } else {
            for(let c = i;c >= f;c -= p) {
                res.innerHTML += ` ${c}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
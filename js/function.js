// Bom dia, Boa tarde, Boa noite

var agora = new Date()
var hora = agora.getHours()

Alert('Agora São exatamente ${hora} horas')

if (hora < 12){
    Alert('Bom dia!');
    else is (hora <= 18){
        Alert('Boa tarde!')

    }else{
        console.log('Boa Noite!')
    }
}
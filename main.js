function escolhaSigno() {
    var signo = document.querySelector('#signos').value;
    var texto;
    var imagem = document.querySelector("#img");

    switch (signo) {
        case "Áries":
            texto = "Os mais estressadinho do zodíaco, os arianos são impulsivos, determinados e nada pacientes."
        imagem.src = "img/aries.png"

            break;

        case "Touro":
            texto = "O que falar dos taurinos? Tão calmos e apegados, mas pisa no calo deles para ver o que acontece. Não vamos esquecer da fome sem fim que eles têm!"

            break;

            case "Sagitário":
            texto = "Quem é desse signo raramente está triste com a vida e não gosta de ficar remoendo coisas do passado. O fato de serem pessoas que prezam a liberdade, em todos os sentidos, os transformam em seres melhores, por se libertarem facilmente de cargas negativas."

            break;

            case "Câncer": 
            texto = "Sentimentais, mas ao mesmo tempo tão rancorosos, né? Os cancerianos, assim como os outros dois signos do elemento água (Peixes e Escorpião), colocam o lado emocional em primeiro lugar."

            break;

            case "Leão":
            texto = "Os leoninos são pessoas extremamente vaidosas e sempre muito agitadas. É bem fácil de saber, pelo menos, duas frases que eles diriam. Afinal, não tinha como serem diferentes, já que são regidos pelo Sol, o centro de tudo."

            break;

            case "Virgem":
            texto = "Esses virginianos, organizados, perfeccionistas, mas, assim como Gêmeos, também gostam de ser os donos da razão. Ainda mais se o assunto for de algo que eles sabem bastante."

            break;

            case "Libra":
            texto = "Os librianos são pessoas passivas e acabam ficando em cima do muro para evitar problemas, por isso se tornam indecisos. Além disso, os nativos de Libra apreciam a vaidade e a elegância. A influência do planeta Vênus é inevitável."

            break;

            case "Escorpião":
            texto = "Os escorpianos estão sempre prontos para o ataque, caso sejam atingidos. Desconfiados e enigmáticos, gostam de estar no controle de tudo. Não vamos esquecer que são ciumentos, demais!"

            break;

            case "Peixes":
            
            texto = "Sentimentais, companheiros, passivos, entre outros ''jeitinhos'' únicos que só os piscianos têm."

            break;

            case "Aquário":
            texto = "Prontos para defender seus direitos e participar de manifestações. O signo de Aquário gosta de mostrar para que veio à terra. Além disso, são totalmente desapegados com as pessoas. "

            break;

            case "Gêmeos": 
            texto = "Donos da razão e falantes, com essa junção não dá nem para tentar discutir com eles. Claramente a primeira frase que tem tudo a ver com eles é sobre estar sempre com a razão. Realmente eles têm, porque vencem a discussão pelo cansaço."

            break;

        default:
            texto = "Insira um signo válido"
    }

    document.querySelector(".frase").innerHTML = texto;

} 
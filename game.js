const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};


function startGame(){
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option =>{
        if(showOption(option)){
            const button = document.createElement('button');
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button);
        }
    })
}

function showOption(option){
    return true;
}


function selectOption(option){
    const nextTextNodeId = option.nextText;
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Dobra, zacznijmy od początku, bo nie wiem czy znasz się na rzeczy. Kojarzysz krypto i wiesz o co biega z inwestycjami?',
        options: [
            {
                text: 'noo..mniej więcej rozumiem',
                nextText: 2
            },
            {
                text: 'wiadomo, jestem mistrzem inwestycji',
                nextText: 3
            },
            {
                text: 'ee..no tak średnio, powiesz coś więcej?',
                nextText: 4
            }
        ]
    },
    {
        id: 2,
        text: 'w dużym skrócie, bierzesz hajs, obczajasz krypto, sprawdzasz jak wygląda sytuacja z daną firmą co wprowadziła dane krypto i inwestujesz jak jest na dipie i hold, bo jak wypłacisz to rynek się jebie i przez ciebie umrą ludzie.',
        options: [
            {
                text: 'okej?',
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        text: 'dobra nie pierdol i tak pewnie więcej przejebałeś niż zarobiłeś',
        options: [
            {
                text: 'okej?',
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: 'Dobra mniejsza, wszystko wyjdzie w praktyce',
        options: [
            {
                text: 'okej?',
                nextText: 5
            }
        ]
    },













    {
        id: 5,
        text: 'Dobra mniejsza, wszystko wyjdzie w praktyce. Więc tak, mam na oku kilka krypto, nie będę ci teraz opowiadać o niej jak się prowadzi, wzrosty, spadki, tutaj chodzi o zysk i szczęście, a jak nie pyknie to reszta zawsze idzie na dźwignie, żeby do końca się ujebać w długach. Dobra bez przedłużania, to jest poważny biznes i nie ma czasu na pierdolenie. Wybieraj ADA czy BTC?',
        options: [
            {
                text: 'Może opowiesz mi coś więcej o tych krypto?',
                nextText: 6
            }
            
        ]
    },
    {
        id: 6,
        text: 'No ADA to jest ryzykowna, teraz spada, więc jest dobry moment na kupno, ale możesz stracić jeszcze więcej, albo dużo zyskać, a BTC to jest stabilnie do góry, ale powoli.',
        options: [
            {
                text: 'Dobra wybieram ADA, coś czuję, że szczęście się do mnie uśmiechnie',
                nextText: 7,
            },
            {
                text: 'Hmm.. BTC jest stabilne, nie ma co ryzykować, lepszy mały zysk niż duża strata',
                nextText: 7,
            }
            
        ]
    },
    {
        id: 7,
        text: '-Dobra, to przelejj 500zł i lecimy dalej\r' +
        '- em...Dobra już, to kiedy mogę liczyć na zysk?\r' +
        '- noo w dobrym tempie za 3-4 dni będziesz mieć efekt\r'+
        '-Szybciej niż się spodziewałem\r'+
        '-Mówiłem ci, giełda to dynamiczna kobieta, nie lubi stać w miejscu, ale nie raz cię jeszcze wyrucha\r'+
        '-eee..ok?\r\r\r'+
        '- Dobra to teraz idę się zająć gotowaniem, wiesz.. muriatic acid i takie tam, znasz się na chemii?',
        options: [
            {
                text: 'Jasne, zawsze się interesowałem chemią',
                nextText: 8,
            } 
        ]
    },
    {
        id: 8,
        text: 'No to świetnie, bo mam tutaj problem, co się dodaje po muratic acid, bo nie mogę znaleźć tej cholernej listy, a za godzinę muszę mieć gotową partię',
        options: [
            {
                text: 'Jasne, zawsze się interesowałem chemią',
                nextText: 8,
            } 
        ]
    }
]
startGame();
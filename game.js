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
                text: 'okej?',
                nextText: 5
            }
            
        ]
    }
]



startGame();
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
                text: 'Noo..mniej więcej rozumiem',
                nextText: 2
            },
            {
                text: 'Wiadomo, jestem mistrzem inwestycji',
                nextText: 3
            },
            {
                text: 'Eee..no tak średnio, powiesz coś więcej?',
                nextText: 4
            }
        ]
    },
    {
        id: 2,
        text: 'W dużym skrócie, bierzesz hajs, obczajasz krypto, sprawdzasz jak wygląda sytuacja z daną firmą co wprowadziła dane krypto i inwestujesz jak jest na dipie i hold, bo jak wypłacisz to rynek się jebie i przez ciebie umrą ludzie.',
        options: [
            {
                text: 'Okej?',
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        text: 'Dobra nie pierdol i tak pewnie więcej przejebałeś niż zarobiłeś',
        options: [
            {
                text: 'Chuja wiesz zjebie, ale dobra',
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: 'Dobra mniejsza, wszystko wyjdzie w praktyce',
        options: [
            {
                text: 'Okej?',
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
        text: '- Dobra, to przelejj 500zł i lecimy dalej\r\r' +
        '- em...Dobra już, to kiedy mogę liczyć na zysk?\r\r' +
        '- noo w dobrym tempie za 3-4 dni będziesz mieć efekt\r\r'+
        '- Szybciej niż się spodziewałem\r\r'+
        '- Mówiłem ci, giełda to dynamiczna kobieta, nie lubi stać w miejscu, ale nie raz cię jeszcze wyrucha\r\r'+
        '- eee..ok?\r\r\r'+
        '- Dobra to teraz idę się zająć gotowaniem, wiesz.. muriatic acid i takie tam, znasz się na chemii?',
        options: [
            {
                text: 'Jasne, zawsze się interesowałem chemią',
                nextText: 8,
            } 
        ]
    },
    //////////////////////////////////////////////////////////////////
    {
        id: 8,
        text: 'No to świetnie, bo mam tutaj problem, co się dodaje po muratic acid, bo nie mogę znaleźć tej cholernej listy, a za godzinę muszę mieć gotową partię',
        options: [
            {
                text: 'Proste, dodajesz Caustic Soda, żeby rozpocząć reakcję jonizowania struktur chlorku sodu z kwasem, dzięki czemu reakcja zajdzie szybciej, bo potrzebujesz substancji aktywnej',
                nextText: 9,
            },
            {
                text: 'Dodaj calcium acetate, bez katalizatora nic nie zrobisz, a wyjebie ci całą partie',
                nextText: 10,
            } 
        ]
    },
    ////////////////////////////////////////////////////////////////////
    {
        id: 9,
        text: '- W sumie brzmi sensownie, kuźwa jak syczy, powinno być tak?\r\r'+
        '- Mówię przecież, że musi dojść do reakcji\r\r\r'+
        '- Dobra kurwa, pierwszy raz to gotuję...o jest git, dobra dzięki, bo się bałem, że spierdolę. Dobra to widzimy się jutro, pamiętaj być punktualnie, bo szef wpadnie to musi być wszystko ideolo.\r'
        ,
        options: [
            {
                text: 'Do następnego!',
                nextText: 11,
            },
            {
                text: 'Dobra spierdalaj',
                nextText: 11,
            },
        ]
    },
    {
        id: 11,
        text: 'Mija tydzień. Zjawiasz się w pracy punktualnie. Wchodzisz do środka i pukasz do drzwi. Otwiera ci wielki, łysy chłop, który ma więcej żył na łapie niż twoja stara fałd na dupie. Robisz kilka kroków i twoim oczom ukazuje się szef, Również dobrze zbudowany mężczyzna, włosy spięte w kok, biały garnitur i wielki glock na biurku. Przed nim siedzi Wiktor - twój kumpel, z którym ostatnio rozmawiałeś. Gestem ręki szef zaprasza cię do siebie, więc zajmujesz wskazane ci miejsce.',
        options: [
            {
                text: 'To po co tu jesteśmy?',
                nextText: 12,
            },
            {
                text: 'Rozumiem, że spotkaliśmy się w interesach, a nie dla pogawędek?',
                nextText: 13,
            },
        ]
    },
    {
        id: 12,
        text: '- Jak pewnie pamiętasz ostatnio z Wiktorem przygotowywaliście dla mnie towar i wyszedł on..zadziwiająco dobry, więc jestem skłonny kontynuować z tobą współpracę w tej kwestii.\r\r'+
        '- To znaczy?\r\r'+
        '- To znaczy, że możesz będziesz gotować z Wiktorem, czyli ty robisz swoje, a my w zamian płacimy ci oraz masz te same przywileje co Wiktor.\r\r'+
        '- A jeśli odmówię?\r\r'+
        '- Chyba się nie zrozumieliśmy, już zaczęliśmy współpracę, od ciebie zależy, czy ją kontynuujemy, czy ją zakończymy. Podpowiem tylko, że zakończenie tej współpracy skończyłoby się nie najlepiej dla ciebie.\r\r'
        ,
        options: [
            {
                text: 'Rozumiem...',
                nextText: 14,
            },
        ]
    },
    {
        id: 13,
        text: '- Jak pewnie pamiętasz ostatnio z Wiktorem przygotowywaliście dla mnie towar i wyszedł on..zadziwiająco dobry, więc jestem skłonny kontynuować z tobą współpracę w tej kwestii.\r\r'+
        '- To znaczy?\r\r'+
        '- To znaczy, że możesz będziesz gotować z Wiktorem, czyli ty robisz swoje, a my w zamian płacimy ci oraz masz te same przywileje co Wiktor, ale wiadomo, odejście z firmy nie wchodzi w grę.\r\r',
        
        options: [
            {
                text: 'Rozumiem',
                nextText: 14,
            },
        ]
    },
    {
        id: 14,
        text: 'W świetle takich warunków nie pozostało ci nic innego jak przystać na takie warunki, kontynuowałeś współpracę z szefem Wiktora, a raczej z waszym szefem i wiodło ci się coraz lepiej. Co do krypto to straciłeś niemal całość, bo przez następne tygodnie miałeś tylko czerwoną świecę, aż w końcu usunąłeś apkę',
    },


/////////////////////////////////////////////////////////////////////////////////////////
    {
        id: 10,
        text: '- Hmm...No skoro tak mówisz...Ty, a powinno to się tak kopcić?\r\r'+
        '- No..zachodzi reakcja katalizacji i teraz się łączą obie substancje\r\r'+
        '- Kurwa jak jebie, ja pierdole cała partia w pizdu, zobacz jak to dymi skurwysyństwo!\r\r'+
        '- Nie o to ci chodziło?\r\r'+
        '- Kurwa ja tu mete gotuję, a dym czarny jak twoja stara gdy wraca z piwnicy niosąc węgiel\r\r'+
        '- Chciałeś pomocy to ci powiedziałem co i jak\r\r'+
        '- I żałuję, bo cała partia w pizdu, dobra zejdź mi z oczu, muszę wykombinować jak to teraz naprawić, bo mnie zajebią chłopaki…\r\r'+
        '- To kiedy się widzimy?\r\r'+
        '- Za tydzień jak zawsze, bądź punktualnie, albo nie przychodź wcale, bo pewnie nie dożyję następnego tygodnia dzięki tobie..\r\r'
        ,
        options: [
            {
                text: 'Nie mam bladego pojęcia o czym mówisz',
                nextText: 100,
            },
        ]
    },

    {
        id: 100,
        text: '- Ehh..no nic, to poszukam tego przepisu, mam nadzieję, że się wyrobię w godzinę z tym wszystkim\r\r'+
        '- Dobra to ja się będę zbierał\r\r'+
        '- Jasne, widzimy się za tydzień, tylko pamiętaj, żeby być punktualnie, bo szef cie zajebie\r\r'
        ,
        options: [
            {
                text: 'Rozumiem, do następnego.',
                nextText: 101,
            },
            {
                text: 'Dobra spierdalaj',
                nextText: 101,
            },
        ]
    },
    {
        id: 101,
        text: 'Mija tydzień. Zjawiasz się w pracy punktualnie. Niestety nie widzisz, żeby twój kumpel też się zjawił. Wchodzisz do środka i pukasz do drzwi. Otwiera ci wielki, łysy chłop, który ma więcej żył na łapie niż twoja stara fałd na dupie. Robisz kilka kroków i twoim oczom ukazuje się szef. Również dobrze zbudowany mężczyzna, włosy spięte w kok, biały garnitur i wielki glock na biurku.  Gestem ręki zaprasza cię do siebie, więc zajmujesz wskazane ci miejsce.'
        ,
        options: [
            {
                text: 'Gdzie jest Wiktor? Ten koleś z którym pracowałem?',
                nextText: 102,
            },
            {
                text: 'Co jest powodem naszego spotkania?',
                nextText: 103,
            },
        ]
    },
    {
        id: 102,
        text: '- Wiktor nie wywiązał się ze swojej części umowy, więc my też tego nie zrobiliśmy.\r\r'+
        '- A dokładniej?\r\r'+
        '- Miał nam dostarczyć 300g metamfetaminy tydzień temu, a w zamian oferowaliśmy mu ochronę. Nie dostarczył towaru, nie było ochrony, nie było ochrony..cóż..dzisiejszy świat bywa ciężki.\r\r'
        
        ,
        options: [
            {
                text: '...',
                nextText: 105,
            },
        ]
    },
    {
        id: 103,
        text: '- Jak się domyślasz, nie jesteśmy fundacją charytatywną tylko poważną organizacją i jeśli coś wyjąć to najpierw musisz coś włożyć. Współpracujesz z nami już trochę czasu i miałeś kilka możliwości się wykazać\r\r'+
        '- Przecież nic od was nie brałem, ani nie korzystałem z waszych usług\r\r'+
        '- Wręcz przeciwnie, po pierwsze Wiktor z nami współpracował i dowiedzieliśmy się o tym co jest powodem jego niepowodzenia związanego z produkcją i wiemy też, że maczałeś w tym palce.\r\r'+
        '- Jak ja nic nie zrobiłem, on miał gotować i pytał mnie o rady, przecież to na jego głowie było zajęcie się towarem, nie mojej\r\r'+
        '- Z tego co nam mówił odegrałeś znaczącą rolę w przygotowaniu towaru, więc też za to odpowiadasz, on już swoją cenę zapłacił jak się domyślasz po jego...nieobecności, czas na ciebie, masz dwie opcje. Albo zapłacisz za towar 700zł, tu i teraz, albo spotkasz się z Wiktorem w pobliskim jeziorze, a tego byśmy raczej nie chcieli.\r\r'
        
        ,
        options: [
            {
                text: '...',
                nextText: 105,
            },
        ]
    },
    {
        id: 105,
        text: '. Przypomina ci się, że Wiktor uczył cię inwestowania, więc wyciągasz telefon i sprawdzasz ile zarobiłeś. Patrzysz na saldo w portfelu…”-50% w ciągu ostatniego tygodnia”..masz na koncie ledwo 250zł i kwota ciągle spada. Krótko mówiąc jesteś w czarnej dupie i właśnie pod kamienicę podjechał samochód, który za chwilę zabierze twoje zwłoki na małą wycieczkę'
    },
]
startGame();
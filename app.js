var kliknutiBrojevi = {};
window.onload = function() {
    var stranica = $('#stranica');

    for (var i = 0; i < 10; i++) {
        var kolona = $('<div>', {class: 'kolona'});
        var number = $('<div>', {class: 'num'});
        number.append(i+1);
        kolona.append(number);

        kliknutiBrojevi[i+1] = [];

        for (var j = 0; j < 39; j++) {
            var button = $('<button>', {class: 'dugme', broj: j+1, kolona: i+1});
            button.kolona = i+1;
            button.append(j+1);
            kolona.append(button);

  
            $(button).click(function(event) {
                var dugme = event.target;
                var kolona = dugme.getAttribute('kolona');

                if (dugme.innerHTML === 'X') {
                    dugme.innerHTML = dugme.getAttribute('broj');
                    kliknutiBrojevi[kolona].splice(kliknutiBrojevi[kolona].indexOf(dugme.getAttribute('broj')), 1);
                    return;
                }

                if (kliknutiBrojevi[kolona].length === 7) {
                    alert('Ne mozete izabrati vise od 7 brojeva u koloni');
                    return;
                }

                kliknutiBrojevi[kolona].push(parseInt(dugme.innerHTML));
                
                dugme.innerHTML = 'X';
            });
        }

        stranica.append(kolona);
    }
};

// ZA DOMACI
// 1. Generiši automatski 7 brojeva, i prikaži ih dole
// 2. Ispiši ispod svake kolone koliko je pogodaka bilo
// 3. Kod dobitnika ispiši "ČESTITAMO! DOBILI ste silne milione!"
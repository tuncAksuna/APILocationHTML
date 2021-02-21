var x = document.getElementById('kul_dene');

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "GeoLocation bu tarayıcı tarafından desteklenmiyor ! ";
    }
}

function showPosition(position) {
    x.innerHTML = `
            <div class="alert alert-warning" role="alert">
                <h5 class="alert-heading">Güncel Konumunuz</h5>
                    <strong>Enlem</strong>  :   ${position.coords.latitude}  
                        <br>
                    <strong>Boylam</strong> :  ${position.coords.longitude}
            </div>
            `;
}

function closeLocation() {
    x.innerHTML = `
            <div class="alert alert-success" role="alert">
                <h5 class="alert-heading">Konum Kapatıldı</h5>
                <p> Tekrar Konumunuzu Öğrenmek İçin 'Güncel Konum' Butonuna Tıklayınız</p>
            </div>
            `;
}
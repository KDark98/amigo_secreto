var friends = [];

function agregarAmigo() {
    var inputNombre = document.getElementById("amigo").value.trim();
    if (inputNombre === "") {
        alert("No has introducido el nombre de ningún amigo");
        return;
    }
    friends.push(inputNombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista() {
    var lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    friends.forEach(function(nombre) {
        var li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (friends.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    var indiceAleatorio = Math.floor(Math.random() * friends.length);
    var amigoSecreto = friends[indiceAleatorio];
    friends = [];
    document.getElementById("listaAmigos").innerHTML = "";
    var resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li class="winner">¡${amigoSecreto} es el amigo secreto! 🫣</li>`;
}

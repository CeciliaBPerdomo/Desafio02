const container = require('./after02');
const productos = require('./productos');

const nuevoContenedor = new container('./productos.txt');
//nuevoContenedor.escribir('Hola');
//nuevoContenedor.borrar();

//nuevoContenedor.escribir(JSON.stringify(productos));
nuevoContenedor.leer();

const main = async() => {
    //console.log(await nuevoContenedor.borrarPorId(1));

    const prod = {title: 'Compas', price: 11.22, thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3ACompas-2z.jpg&psig=AOvVaw0ax_S4h7G21XWzO_NfNjuk&ust=1647635416958000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLC4xbL-zfYCFQAAAAAdAAAAABAD'};
    console.log(await nuevoContenedor.guardar(prod));
};

main();
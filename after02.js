const fs = require('fs');

class container {
 constructor(filename){
     this.filename = filename;
 }
 
 async escribir(dato){
     try{
        const contenido = await fs.promises.writeFile(this.filename, dato);
        return contenido;
        console.log('Escrito correctamente');
     } catch(error){
         console.log(error);
     }
 }

 async borrar(){
     try{
        await fs.promises.writeFile(this.filename, '[]');
        console.log('Borrado con exito');
     }catch(error){
         //console.log(error);
         throw new Error(error);
     }
 }

 async leer(){
    try{
        let contenido = await fs.promises.readFile(this.filename, 'utf-8');
        return contenido;
     }catch(error){
         throw new Error(error);
     }  
 }

 async leerPorId(id) {
    try{
        const contenido = await this.leer();
        const contenidoParseado = JSON.parse(contenido);
        //console.log(contenido);
        //return contenidoParseado[id];
        const elemento = contenidoParseado.filter(e => e.id === id);
        return elemento;
     }catch(error){
         throw new Error(error);
     }
 }


 async borrarPorId(id) {
    try{
        const contenido = await this.leer();
        const contenidoParseado = JSON.parse(contenido);
        //console.log(contenido);
        //return contenidoParseado[id];
        const elementos = contenidoParseado.filter(e => e.id !== id);
        await this.escribir(JSON.stringify(elementos));
        let contenidoNuevo = await this.leer();
        return contenidoNuevo;
     }catch(error){
         throw new Error(error);
     }
 }

 async guardar(producto) {
     try{
        const contenido = await this.leer();
        const contProd = JSON.parse(contenido);
        let ultId = 0;
        const cantidadItems = contProd.length;
        console.log(cantidadItems);

        if(cantidadItems !== 0){
            ultId = contProd[cantidadItems - 1].id;
        }

        producto['id'] = ultId + 1;
        contenido.push(producto); 

        contenido = JSON.stringify(contenido);
        await fs.promises.writeFile(this.filename, contenido);

        return producto['id'];
     } catch(error){
        throw new Error(error);
    }

 }

}
module.exports = container;
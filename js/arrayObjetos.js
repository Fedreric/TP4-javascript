let listaProductos = [
    {
        nombreProducto: "Hidratante facial",
        precio: 3500,
        categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
        nombreProducto: "Protector solar factor 50",
        precio: 3300,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar toque seco factor 50",
        precio: 4100,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar con color factor 50",
        precio: 3850.5,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Gel de limpieza facial",
        precio: 1740.99,
        categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
        nombreProducto: "Exfoliante de azúcar cherry",
        precio: 1200,
        categoria: "Labios",
    },
    {
        nombreProducto: "Pads de hidrogel para contorno de ojos",
        precio: 2800,
        categoria: "Ojos",
    },
    {
        nombreProducto: "Mascarilla facial",
        precio: 3250.99,
        categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
        nombreProducto: "Protector solar en barra",
        precio: 3800,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Mascara de hidratación y reparación",
        precio: 1200,
        categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];
function generarTabla(lista) {
    document.write('<section class = "contenedor">');
    document.write(`<table>
                           <tbody>`);
        document.write(`<th>Producto</th>`);
        document.write(`<th>Precio</th>`);
        document.write(`<th>Categoria</th>`);   
    for (let i = 0; i < lista.length; i++) {
        document.write('<tr>');
        document.write(`<td style="
                            padding: 10px;"
                            >${lista[i].nombreProducto}
                            </td>`)
        document.write(`<td style="
                            padding: 10px;"
                            >${lista[i].precio}
                            </td>`);
        document.write(`<td style="
                            padding: 10px;"
                            >${lista[i].categoria}
                            </td>`);
        document.write('</tr>');
    }

    document.write(`    </tbody>
                    </table>`);
    document.write('</section>');
}
document.write(`<h1>Lista de productos</h1>`);
generarTabla(listaProductos);

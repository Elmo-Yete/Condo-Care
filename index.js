function mostrarServicio(tipo) {
  // Obtener la referencia a la sección de servicios
  const serviciosSection = document.getElementById("services");

  // Limpiar el contenido actual
  serviciosSection.innerHTML = "";

  // Crear el contenido dinámico según el tipo de servicio
  if (tipo === "condominio") {
    const contenidoCondominio = document.createElement("section");
    contenidoCondominio.className =
      "flex flex-col bg-second justify-between items-center gap-10";

    // Contenido específico para Condominio - División 1
    const contenidoDiv1 = document.createElement("div");
    contenidoDiv1.className = "bg-background flex rounded-xl w-[1120px]";
    contenidoDiv1.innerHTML = `
        <img src="./assets/Condominio.png" alt="" class="w-3/6" />
        <span class="p-5 flex flex-col gap-6">
          <h4 class="text-4xl my-2 font-bold">Administración</h4>
          <p class="flex-wrap text-3xl font-light">
            Mantener en perfecto estado las áreas comunes del condominio y vigilar
            que el reglamento de condóminos se cumpla al pie de la letra
          </p>
        </span>
      `;
    contenidoCondominio.appendChild(contenidoDiv1);

    // División 2
    contenidoCondominio.innerHTML +=
      '<h3 class="text-5xl font-bold my-6">Con 3 divisiones fundamentales</h3>';

    const contenidoDiv2 = document.createElement("div");
    contenidoDiv2.className = "bg-background flex w-full h-fit justify-around";
    contenidoDiv2.innerHTML = `
        <span class="p-4 w-3/6">
          <h4 class="text-3xl my-2 font-semibold">Administrador</h4>
          <p class="text-2xl font-light text-start">
            El responsable de todo lo que pase en el condominio, de estar en
            constante comunicación con los condóminos sobre los eventos relevantes
            de las torres en cuestión de mantenimiento y de la administración
            financiera y contable de las cuotas de mantenimiento.
          </p>
        </span>
        <img
          src="./assets/estudiante-afroamericano-ocupado-hace-investigacion-habla-companero-grupo-telefono-celular-tiene-documentos 2.png"
          alt=""
          class="w-fit bg-cover h-[350px]"
        />
      `;
    contenidoCondominio.appendChild(contenidoDiv2);

    // División 3
    const contenidoDiv3 = document.createElement("div");
    contenidoDiv3.className =
      "bg-background flex w-full h-fit justify-around items-center";
    contenidoDiv3.innerHTML = `
        <img src="./assets/Dots-Rig.png" alt="" class="h-fit" />
        <span class="p-10">
          <h4 class="text-3xl my-5 font-semibold">Encargado de mantenimiento</h4>
          <p class="text-2xl font-light text-start">
            Limpieza de torres, albercas, mantenimiento de jardines y el correcto
            funcionamiento de los hidráulicos de agua potable y luz, son una de las
            principales funciones del encargado, así como la recolección de basura,
            albañilería y pintado del condominio.
          </p>
        </span>
        <img src="./assets/Dots-Rig.png" alt="" />
      `;
    contenidoCondominio.appendChild(contenidoDiv3);

    // División 4
    const contenidoDiv4 = document.createElement("div");
    contenidoDiv4.className =
      "bg-background flex w-full h-fit justify-around mb-10";
    contenidoDiv4.innerHTML = `
        <img
          src="./assets/hombre-negocios-vista-lateral-calcular-numeros-finanzas 2.png"
          alt=""
          class="w-fit bg-cover h-[250px]"
        />
        <span class="flex flex-col gap-8 p-6">
          <h4 class="text-3xl my-2 font-semibold">Finanzas</h4>
          <p class="text-2xl font-light text-start">
            Llevar la contabilidad de las cuotas de mantenimiento, es decir, un
            registro de los ingresos y egresos, pago de nómina, pago de impuestos,
            trámite ante las autoridades correspondientes, elaboración de estados
            financieros y reportes trimestrales al Administrador General, al Comité
            de Vigilancia y a los Condóminos.
          </p>
        </span>
      `;
    contenidoCondominio.appendChild(contenidoDiv4);

    // Agrega el contenido generado a la sección de servicios
    serviciosSection.appendChild(contenidoCondominio);
  } else if (tipo === "departamento") {
    const contenidoDepartamento = document.createElement("section");
    contenidoDepartamento.className =
      "flex flex-col justify-center items-center bg-second gap-10";

    // Contenido específico para Departamento - Artículo 1
    const contenidoArticulo1 = document.createElement("article");
    contenidoArticulo1.className =
      "flex flex-col gap-3 bg-background w-4/6 p-6 rounded-xl";
    contenidoArticulo1.innerHTML = `
      <h3 class="text-3xl font-bold">Administracion de departamentos</h3>
      <p class="text-2xl font-light">
        Este tipo de mantenimiento y servicios en general puede ser muy útil tanto
        para propietarios que lo habitan como para propietarios que rentan el
        inmueble. Nuestro enfoque proactivo en el mantenimiento y mejora de su
        propiedad tiene un impacto directo en la plusvalía de su inmueble ,
        logrando así obtener su máximo potencial
      </p>
    `;
    contenidoDepartamento.appendChild(contenidoArticulo1);

    // Contenido específico para Departamento - Artículo 2
    const contenidoArticulo2 = document.createElement("article");
    contenidoArticulo2.className =
      "bg-background flex justify-center w-full my-5";
    contenidoArticulo2.innerHTML = `
      <div class="w-[800px]">
        <img src="./assets/hombre-tiro-completo-trabajando-como-plomero 1.png" alt="" />
      </div>
    `;
    contenidoDepartamento.appendChild(contenidoArticulo2);

    // Contenido específico para Departamento - Artículo 3
    const contenidoArticulo3 = document.createElement("article");
    contenidoArticulo3.className =
      "bg-second flex items-center justify-between w-full mb-10";
    contenidoArticulo3.innerHTML = `
      <img src="./assets/Long.png" alt="" />
      <div class="bg-background rounded-lg w-2/3 text-center p-10">
        <h4 class="text-3xl font-bold">Que incluye el mantenimiento?</h4>
        <ul class="list-disc list-inside flex flex-col gap-12 text-2xl text-start">
          <li>Infraestructura necesaria para mantener funcionando tu departamento, en esto se incluye:</li>
          <li class="ml-6">Especialistas en cada área para reparaciones necesarias</li>
          <li class="ml-6">Programas de mantenimiento preventivo</li>
          <li class="ml-6">Inventario de utensilios, ropa blanca, toallas, y adornos a la entrega y recepción de renta en cualquier plazo.</li>
          <li class="ml-6">Entrega y recepción de llaves del departamento.</li>
          <li class="ml-6">Recomendación de personal de limpieza para el departamento.</li>
          <li class="ml-6">Recepción de compras en línea.</li>
          <li class="ml-6">Llevar controles y elaborar reportes sobre el mantenimiento que se le tiene que dar a los aires acondicionados, madera, herrería, ventiladores, chapas y toldos.</li>
          <li class="ml-6">Asesoría en trámites necesarios.</li>
          <li class="ml-6">Constante comunicación con el inquilino</li>
        </ul>
      </div>
      <img src="./assets/Long.png" alt="" class="me-10" />
    `;
    contenidoDepartamento.appendChild(contenidoArticulo3);

    // Agrega el contenido generado a la sección de servicios
    serviciosSection.appendChild(contenidoDepartamento);
  }
}

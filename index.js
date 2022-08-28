function compra() {
  let total = 0;
  let cursoAcomprar = prompt(
    "Elige que deseas adquirir de nuestra tienda: G-Curso de guitarra, B-Curso de bajo, T-Curso de teclado"
  );
  let continuarLaCompra = true;
  let decision;

  while (continuarLaCompra === true) {
    if (cursoAcomprar === null) {
      return;
    } else if (cursoAcomprar === "G") {
      total = total + 6000;
    } else if (cursoAcomprar === "B") {
      total = total + 7500;
    } else if (cursoAcomprar === "T") {
      total = total + 5500;
    } else {
      alert("Por favor, elige uno de nuestros cursos disponibles");
      cursoAcomprar = prompt(
        "Elige que deseas adquirir de nuestra tienda: G-Curso de guitarra, B-Curso de bajo, T-Curso de teclado"
      );
      continue;
    }

    decision = parseInt(
      prompt("Algún curso mas que desees agregar? 1.Si - 2.No")
    );
    if (decision === 1) {
      cursoAcomprar = prompt(
        "Elige que deseas adquirir de nuestra tienda: G-Curso de guitarra, B-Curso de bajo, T-Curso de teclado"
      );
    } else if (decision === 2) {
      continuarLaCompra = false;
    }
  }

  alert("El valor total de tu compra (SIN IVA) es de " + total);

  let valorTotalConIVA = precioConIVA(total);
  alert("El valor total de tu compra con IVA es de " + valorTotalConIVA);

  let cuotas = parseInt(prompt("En cuantas cuotas deseas pagar? Puede ser entre 1 y 6 cuotas"))
  while(cuotas <1 || cuotas >6){
    cuotas = parseInt(prompt("En cuantas cuotas deseas pagar? Puede ser entre 1 y 6 cuotas"))
  }
  let valorCuota = precioCuota(valorTotalConIVA, cuotas)
  alert("Son "+cuotas+" pagos de "+valorCuota)

}

// Valor del IVA 2022 = 22%
function precioConIVA(valor) {
  const IVA = valor * 0.22;
  return valor + IVA;
}

function precioCuota(valor, cuotas) {
    return valor/cuotas
}

compra();

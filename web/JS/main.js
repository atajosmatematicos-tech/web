      document.querySelectorAll(".btn[data-toggle]").forEach((btn) => {
               btn.addEventListener("click", () => {
           
                   const servicio = btn.closest(".servicio");
           
                   const contenido = servicio.querySelector(
                       ".grid, .referencias"
                  );
           
                  if (!contenido) return;
          
                  contenido.classList.toggle("hidden");
          
                  const abierto = !contenido.classList.contains("hidden");
                  btn.textContent = abierto ? "Ocultar" : "Ver más";
              });
          });
          
          /*icon*/
          function mostrarAlerta(event) {
              event.preventDefault();
          }
          
          document.addEventListener('contextmenu', mostrarAlerta);
/* =====================================================================
   TU PORTAFOLIO · PLANTILLA RETÍCULA
   Este es el ÚNICO archivo que necesitas editar.

   REGLAS RÁPIDAS
   1. Cambia solo el texto que está entre comillas "así".
   2. Los textos bilingües se escriben así: { es: "Hola", en: "Hello" }.
      Si solo quieres un idioma, deja  idiomas: ["es"]  más abajo.
   3. No borres comas, llaves { } ni corchetes [ ]. Cada bloque termina en coma.
   4. Para ocultar una sección o un elemento sin borrarlo: mostrar: false
   5. Dentro de un texto puedes usar **negrita** y [un enlace](https://...).
   6. Si la página sale en blanco o con un aviso rojo, pega este archivo en tu IA
      y pídele: "corrige la sintaxis sin cambiar el contenido".

   TIPOS DE SECCIÓN (elige el que mejor cuente cada parte de tu perfil)
     texto        → párrafos. El primero sale más grande.
     proyectos    → método STAR(R): situacion, accion, resultado, aprendizaje.
     trayectoria  → experiencia o formación con fechas. Cada cargo lleva una barra
                    cuyo largo es su duración real. Usa  desde  y  hasta  ("2022", "2022-03" o "actual").
     publicaciones→ artículos, pósters y congresos.
     lista        → premios, becas, voluntariado: filas con fecha a la izquierda.
     habilidades  → grupos de habilidades.
     frase        → una sola idea grande sobre un campo de color. **Entre asteriscos** va resaltado.
     contacto     → cierre con tu correo en grande.

   Todo lo de abajo es un EJEMPLO ficticio: reemplázalo con tu información.
   ===================================================================== */

window.CONTENIDO = {
  idiomas: ["es", "en"],          // ["es"] solo español · ["en"] solo inglés · ["en", "es"] inglés primero
  colorPrincipal: "#0e7a4f",       // el color de los campos grandes: https://htmlcolorcodes.com
  // fuentes: { texto: "IBM Plex Sans" },   // opcional: quita las // y usa un nombre de fonts.google.com
  animaciones: true,              // false = página sin animaciones (más sobria)
  actualizado: { es: "septiembre 2026", en: "September 2026" },

  /* ---------- PORTADA ---------- */
  perfil: {
    nombre: "Jorge Ernesto Nicho Galagarza",
    nombreCorto: "Jorge Nicho",
    foto: "imagenes/foto.jpg",   // sube tu foto (vertical o cuadrada) a la carpeta imagenes. Sin foto, se ven tus iniciales.
    titular: {
      es: "Computer Science · Ingeniero de inteligencia artificial",
      en: "Biomedical engineer · Low-cost diagnostics for primary care"
    },
    ubicacion: { es: "Lima, Perú", en: "Lima, Peru" },
    bio: {
      es: "Llevé un lector de glucosa de bajo costo del prototipo a 3 centros de salud rurales. Combino electrónica, investigación clínica y experiencia en industria.",
      en: "I took a low-cost glucose reader from prototype to 3 rural health centres. I combine electronics, clinical research and industry experience."
    },
    // NUEVO: lo que buscas. Sale en una barra negra bajo la portada. Si no lo quieres, bórralo.
    objetivo: {
      es: "Máster en Inteligencia Artificial en Europa, desde September de 2027",
      en: "Master's in Artifitial Intelligence in Europe, from September 2027"
    },
    correo: "jgalagarza12@gmail.com",
    cv: { es: "documentos/cv.pdf", en: "documentos/cv.pdf" },   // sube tu CV en PDF a la carpeta documentos
    enlaces: [
      { texto: "LinkedIn", url: "https://www.linkedin.com/in/tu-usuario" },
      { texto: "GitHub", url: "https://github.com/tu-usuario" },
      { texto: "ORCID", url: "https://orcid.org/0000-0000-0000-0000" }
    ],
    // 3 o 4 cifras reales. Solo el número ("12", "94 %", "3,5"): así cuentan desde cero.
    cifras: [
      { numero: "3", texto: { es: "centros de salud usan mi prototipo", en: "health centres use my prototype" } },
      { numero: "94 %", texto: { es: "de concordancia con el laboratorio", en: "agreement with lab results" } },
      { numero: "2", texto: { es: "publicaciones revisadas por pares", en: "peer-reviewed publications" } },
      { numero: "2", texto: { es: "años en I+D industrial", en: "years in industrial R&D" } }
    ]
  },

  /* ---------- SECCIONES (se muestran en este orden) ----------
     intro: una frase corta con lo que el comité debe llevarse de esa sección (sale bajo el título).
     Si no quieres una, bórrala. */
  secciones: [
    {
      id: "sobre-mi",
      titulo: { es: "Sobre mí", en: "About me" },
      intro: { es: "De la investigación a la industria, siempre con el paciente rural en mente.", en: "From research to industry, always with the rural patient in mind." },
      tipo: "texto",
      parrafos: [
        {
          es: "Diseño dispositivos de diagnóstico que pueda usar **una técnica de salud en un puesto rural**, sin laboratorio ni internet.",
          en: "I design diagnostic devices that **a health technician in a rural post** can use, with no lab and no internet."
        },
        {
          es: "Empecé en investigación universitaria, pasé a la industria para aprender a fabricar y validar, y hoy quiero unir ambas cosas en un máster que me enseñe a escalar estas tecnologías con rigor clínico.",
          en: "I started in university research, moved to industry to learn how to manufacture and validate, and now want to bring both together in a master's that teaches me to scale these technologies with clinical rigour."
        }
      ]
    },

    {
      id: "proyectos",
      titulo: { es: "Proyectos", en: "Projects" },
      intro: {
        es: "Tres proyectos contados con el método STAR: el problema, lo que hice yo y la evidencia.",
        en: "Three projects told with the STAR method: the problem, what I did and the evidence."
      },
      tipo: "proyectos",
      items: [
        {
          titulo: { es: "Lector de glucosa para puestos rurales", en: "Glucose reader for rural health posts" },
          imagen: "imagenes/proyecto-1.svg",   // ideal 1600 × 1000 px. Las fotos se tiñen del color principal; al pasar el mouse salen a color.
          etiquetas: [{ es: "Dispositivos médicos", en: "Medical devices" }, "Arduino", { es: "Validación clínica", en: "Clinical validation" }],
          situacion: {
            es: "En los puestos de salud de mi región las tiras de glucosa se agotan y el equipo de referencia está a 4 horas.",
            en: "Health posts in my region run out of glucose strips, and the reference equipment is 4 hours away."
          },
          accion: {
            es: "Diseñé el circuito óptico y el firmware, y coordiné la validación con 2 médicos y 1 tecnóloga.",
            en: "I designed the optical circuit and firmware, and coordinated validation with 2 doctors and 1 lab technologist."
          },
          resultado: {
            es: "**94 % de concordancia** con el laboratorio en 210 muestras; hoy se usa en 3 centros de salud.",
            en: "**94% agreement** with the lab across 210 samples; now used in 3 health centres."
          },
          aprendizaje: {
            es: "Validar con usuarios reales desde el primer mes me ahorró dos rediseños.",
            en: "Validating with real users from month one saved me two redesigns."
          },
          enlaces: [
            { texto: { es: "Ver video", en: "Watch video" }, url: "https://youtube.com" },
            { texto: { es: "Póster (PDF)", en: "Poster (PDF)" }, url: "documentos/poster.pdf" }
          ]
        },
        {
          titulo: { es: "Detección de arritmias con un ECG de una derivación", en: "Arrhythmia detection from a single-lead ECG" },
          imagen: "imagenes/proyecto-2.svg",
          etiquetas: ["Python", "Machine learning", { es: "Tesis", en: "Thesis" }],
          situacion: {
            es: "Los electrocardiogramas de 12 derivaciones son caros y escasos fuera de las capitales.",
            en: "12-lead ECGs are expensive and scarce outside capital cities."
          },
          accion: {
            es: "Entrené y comparé 3 modelos con 8 000 registros públicos y adapté el mejor a un microcontrolador.",
            en: "I trained and compared 3 models on 8,000 public recordings and ported the best one to a microcontroller."
          },
          resultado: {
            es: "**Sensibilidad de 91 %** para fibrilación auricular; publicado en una revista indexada.",
            en: "**91% sensitivity** for atrial fibrillation; published in an indexed journal."
          },
          enlaces: [{ texto: { es: "Código", en: "Code" }, url: "https://github.com/tu-usuario" }]
        },
        {
          titulo: { es: "Registro de vacunas sin conexión", en: "Offline vaccination record" },
          imagen: "imagenes/proyecto-3.svg",
          etiquetas: [{ es: "Hackatón", en: "Hackathon" }, "Figma", { es: "Salud pública", en: "Public health" }],
          situacion: {
            es: "Reto de 48 horas: las brigadas de vacunación pierden registros cuando no hay señal.",
            en: "48-hour challenge: vaccination teams lose records when there is no signal."
          },
          accion: {
            es: "Lideré un equipo de 4, diseñé el flujo y lo probé con 6 enfermeras de brigada.",
            en: "I led a team of 4, designed the flow and tested it with 6 field nurses."
          },
          resultado: {
            es: "**1.er puesto** entre 28 equipos.",
            en: "**1st place** out of 28 teams."
          }
        }
      ]
    },

    {
      // Frase grande sobre un campo de color. Las palabras se ensamblan al bajar. **Entre asteriscos** va resaltado.
      // Una sola idea, máximo 20 palabras. Si no la quieres: mostrar: false
      id: "frase",
      tipo: "frase",
      texto: {
        es: "Quiero que un buen diagnóstico **no dependa de dónde naciste**.",
        en: "I want a good diagnosis to **not depend on where you were born**."
      }
    },

    {
      id: "experiencia",
      titulo: { es: "Experiencia", en: "Experience" },
      intro: {
        es: "La barra de cada cargo mide cuánto duró.",
        en: "Each bar shows how long the role lasted."
      },
      tipo: "trayectoria",
      items: [
        {
          titulo: { es: "Ingeniera de I+D", en: "R&D Engineer" },
          lugar: { es: "Empresa de dispositivos médicos (ejemplo), Lima", en: "Medical device company (example), Lima" },
          desde: "2024-03",
          hasta: "actual",   // "actual" si sigues ahí
          logros: [
            {
              es: "Rediseñé la prueba de calibración y **reduje el tiempo por lote de 6 a 2 horas**.",
              en: "Redesigned the calibration test and **cut time per batch from 6 to 2 hours**."
            },
            {
              es: "Preparé la documentación técnica de 2 dispositivos para su registro sanitario.",
              en: "Prepared the technical files of 2 devices for regulatory registration."
            }
          ]
        },
        {
          titulo: { es: "Asistente de investigación", en: "Research assistant" },
          lugar: { es: "Laboratorio de Bioinstrumentación, Universidad (ejemplo)", en: "Bioinstrumentation Lab, University (example)" },
          desde: "2022-01",
          hasta: "2024-02",
          descripcion: {
            es: "Desarrollé el prototipo del lector de glucosa y supervisé a 3 tesistas.",
            en: "Developed the glucose reader prototype and supervised 3 thesis students."
          }
        },
        {
          titulo: { es: "Practicante de ingeniería clínica", en: "Clinical engineering intern" },
          lugar: { es: "Hospital regional (ejemplo)", en: "Regional hospital (example)" },
          desde: "2021-06",
          hasta: "2021-12"
        }
      ]
    },

    {
      id: "publicaciones",
      titulo: { es: "Publicaciones", en: "Publications" },
      intro: { es: "Mi trabajo técnico ya pasó revisión por pares.", en: "My technical work has already passed peer review." },
      tipo: "publicaciones",
      items: [
        {
          tipo: { es: "Artículo", en: "Article" },
          autores: "**Condori-Ramos L.**, Paredes J., Quispe A.",
          anio: "2025",
          titulo: {
            es: "Detección de fibrilación auricular con ECG de una derivación en un microcontrolador de bajo costo",
            en: "Atrial fibrillation detection from single-lead ECG on a low-cost microcontroller"
          },
          medio: "Revista de Ingeniería Biomédica (ejemplo)",
          enlaces: [{ texto: "DOI", url: "https://doi.org/10.0000/ejemplo" }]
        },
        {
          tipo: { es: "Póster", en: "Poster" },
          autores: "**Condori-Ramos L.**, Paredes J.",
          anio: "2024",
          titulo: {
            es: "Validación de un lector óptico de glucosa en puestos de salud rurales",
            en: "Validation of an optical glucose reader in rural health posts"
          },
          medio: { es: "Congreso Nacional de Ingeniería Biomédica, Lima", en: "National Biomedical Engineering Congress, Lima" },
          nota: { es: "Mención honrosa.", en: "Honourable mention." },
          enlaces: [{ texto: { es: "Ver póster (PDF)", en: "View poster (PDF)" }, url: "documentos/poster.pdf" }]
        }
      ]
    },

    {
      id: "formacion",
      titulo: { es: "Formación", en: "Education" },
      intro: { es: "Base en ingeniería con beca completa y formación en liderazgo.", en: "An engineering foundation on a full scholarship, plus leadership training." },
      tipo: "trayectoria",
      items: [
        {
          titulo: { es: "Ingeniería Biomédica", en: "BEng in Biomedical Engineering" },
          lugar: { es: "Universidad (ejemplo) · Becaria PRONABEC", en: "University (example) · PRONABEC scholar" },
          desde: "2017",
          hasta: "2021",
          descripcion: { es: "Quinto superior. Tesis en detección de arritmias.", en: "Top fifth of class. Thesis on arrhythmia detection." }
        },
        {
          titulo: "Aspire Leaders Program",
          lugar: "Aspire Institute",
          desde: "2024-02",
          hasta: "2024-06",
          descripcion: { es: "Liderazgo para estudiantes de primera generación universitaria.", en: "Leadership for first-generation university students." }
        }
      ]
    },

    {
      id: "premios",
      titulo: { es: "Premios y becas", en: "Awards and scholarships" },
      intro: { es: "Reconocimientos externos a mis resultados.", en: "External recognition of my results." },
      tipo: "lista",
      items: [
        { titulo: { es: "1.er puesto, Hackatón de Salud Digital", en: "1st place, Digital Health Hackathon" }, lugar: { es: "Ministerio de Salud (ejemplo)", en: "Ministry of Health (example)" }, fecha: "2023" },
        { titulo: { es: "Mención honrosa, mejor póster", en: "Honourable mention, best poster" }, lugar: { es: "Congreso Nacional de Ingeniería Biomédica", en: "National Biomedical Engineering Congress" }, fecha: "2024" },
        { titulo: { es: "Beca de pregrado completa", en: "Full undergraduate scholarship" }, lugar: "PRONABEC", fecha: "2017 – 2021" }
      ]
    },

    {
      id: "habilidades",
      titulo: { es: "Habilidades", en: "Skills" },
      intro: { es: "Lo que ya sé hacer el primer día.", en: "What I can do from day one." },
      tipo: "habilidades",
      grupos: [
        { nombre: { es: "Ingeniería", en: "Engineering" }, items: [{ es: "Diseño de PCB", en: "PCB design" }, "Arduino / ESP32", "SolidWorks", { es: "Normas ISO 13485", en: "ISO 13485 standards" }] },
        { nombre: { es: "Datos", en: "Data" }, items: ["Python", "MATLAB", "scikit-learn", { es: "Estadística clínica", en: "Clinical statistics" }] },
        { nombre: { es: "Idiomas", en: "Languages" }, items: [{ es: "Español (nativo)", en: "Spanish (native)" }, { es: "Inglés (C1, IELTS 7.0)", en: "English (C1, IELTS 7.0)" }, { es: "Quechua (básico)", en: "Quechua (basic)" }] }
      ]
    },

    {
      id: "contacto",
      titulo: { es: "Contacto", en: "Contact" },
      tipo: "contacto",
      parrafos: [
        {
          es: "Busco programas de máster y pasantías de investigación en dispositivos médicos. Respondo en menos de 48 horas.",
          en: "I am looking for master's programmes and research internships in medical devices. I reply within 48 hours."
        }
      ]
    }
  ]
};

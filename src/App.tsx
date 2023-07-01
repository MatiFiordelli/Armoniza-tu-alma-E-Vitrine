import Layout from './Components/Layout'
import Router from './Components/Router'
import ContextProvider from './Context/ContextProvider'

/* const arrayTitles: string[] =
    [
        'Sahumerios y Defumación', 'Bombitas de Defumación', 'Hornitos', 'Cascadas de Humo',
        'Lamparas de Sal', 'Velas Aromáticas', 'Fragancias', 'Equipos Analógicos',
        'Aceites Esenciales', 'Perlas Aromáticas', 'Sahumadores y Quemadores', 'Buditas',
        'Atrapasueños'
    ]

const arrayDescriptions: string[] =
    [
        `El incienso es una resina aromática derivada de un tipo especial de madera. 
            La recolección de resina de incienso ha sido y sigue siendo hasta el día de hoy un proceso 
            muy laborioso, razón por la cual la sustancia aromática es tan valorada. El incienso se puede 
            utilizar a diario. Contiene un acetato de incensol, que tiene un efecto antidepresivo, calma 
            el sistema nervioso. El incienso tiene un olor específico. Una persona que viene a la iglesia 
            por primera vez puede sentir un aroma brillante que se recuerda durante mucho tiempo. Durante 
            el culto se ve caddy sobre las brasas del cadillac, un recipiente metálico con forma de cuenco 
            suspendido de varias cadenas.
            La quema de incienso produce humo fragante - pimiam. Pero no todos los inciensos tienen un aroma 
            agradable y no dejan una desagradable sensación de ardor después de la inhalación, y no todos 
            producen humo durante mucho tiempo. Para hacer un incienso de tan alta calidad, debe tener años 
            de experiencia en este campo y conocer el secreto que se transmite de los monjes de los ancianos 
            a los más jóvenes. Todo está en el incienso del Monasterio Dohiariou.`,

        `Las bombitas de defumación activada sirven para la limpieza energética de espacios a través del humo de un conjunto de 
            hierbas.
            Se prenden sobre un quemador, una ollita o algun recipiente que soporte el calor. Idealmente conviene que utilizarlo 
            exclusivamente para esa función.
            Opcional: Se puede colocar la bombita sobre un carboncito de defumación si cuesta prenderla.
            Arrancar sahumando con las ventanas cerradas desde atrás hacia adelante, haciendo foco en las esquinas.
            Una vez que se termina el humo, abrir las ventanas y ventilar bien todo
            Tirar lo que sobra en tierra, no en la basura.`,

        `Hornitos, realizado especialmente para aromaterapia, con materiales de alta calidad, con su Vasija Esmaltada que permite 
            retener la preparacion correctamente, tanto para esencias liquidas como solidas.
            La calidad de todas sus piezas ( porta lamparas de ceramica ) permite estar prendido las 24hs sin peligro.
            Tambien por su tamaño mediano, trasmite una luz calida muy agradable, que embellece todos tus ambiantes.`,

        `Porta Conos Cascada con base.
            Las fuentes de humo contribuyen a la armonización del hogar, son utilizados para meditación y aromaterapia. Utilizan un 
            tipo de sahumerio en particular, los conitos aromáticos inversos. Encender el conito y observar como desciende el humo por 
            la fuente te ayuda a relajarte y a meditar.`,

        `Lamparas de sal del Himalaya para bienestar, Feng Shui, relajación. El principal beneficio es su capacidad para ionizar el aire. Estas piedras emiten iones negativos que aportan equilibrio al entorno. Transmiten buena energía, según el Feng Shui. Aportan al ambiente un toque de color rosado y luz suave que invita a la relajación. Mejoran la calidad del sueño al eliminar las ondas electromagnéticas del aire. Los iones negativos que emiten estas lámparas pueden ser beneficiosos para el organismo a nivel circulatorio, respiratorio o nervioso. Reducen la electricidad estática del aire.`,

        `Estos Veloncitos sin aroma, se deben encender sin sacarle el celofán que recubre sus lados, para prologar su duración. 
            En caso de utilizarlo para velas para eventos, podemos sacar la cinta de la marca para una mejor terminación de la 
            decoración.
            Velas de noche.
            El uso más común es en hornillos difusores. Para aumentar la duración del producto recomendamos encender la vela dentro de 
            las latitas contenedoras.`,

        `Amplia gama de fragancias en diferentes formatos. Aromatizadores para tela y ambientes, spray para el hogar, aerosoles, 
            varillas difusoras, aceites esenciales, jabones de manos, body splash, perfumes, cremas y mucho más!`,

        `Los Equipos Aromatizadores Analógicos permiten mantener agradablemente perfumados tus ambientes de manera fácil y cómoda.
            Poseen un regulador de intensidad de aromatización con intervalos de 8, 15 y 30 minutos. También incorpora un sistema de 
            pulverización instantánea
            Funciona con 2 pilas AA. Con toque lateral.`,

        `Aceites aromáticos con varias fragancias duraderas para usar en hornitos aromatizadores en cualquier ambiente.`,

        `Las Perlas Aromaticas se pueden usar como esencia sólida para hornito con o sin agua, como aromatizante de placard, como resina para sahumar colocando las perlas arriba del carbon sahumado`,

        `Quemadores de incenso y Sahumadores, también llamado incensario, es un instrumento de cerámica, barro o metal que se 
            utiliza para la quema de hierbas y resinas. El humo que resulta de esta combustión se utiliza milenariamente para limpiar 
            o purificar a las personas, casas, ambientes de trabajo y lugares de meditación.
            El Sahumador es el recipiente donde se realiza el quemado de las hierbas, resinas y flores en un carbón vegetal.`,

		`Son un excelente instrumento para renovar la energía de tus ambientes, ayudan al Feng Shui y generando un ambiente armonioso y relajado.
			Como elemento decorativo son elegantes y llamativos. Despertando la curiosidad de todas las personas cercanas.`,

        `Los atrapasueños son instrumentos de poder de la medicina chamánica. Su aro representa la rueda de la vida, la 
            malla o la red son los sueños, anhelos e ilusiones que tejemos en el Tiempo de los sueños, en el alma y en el movimiento que 
            generamos con nuestras actividades cotidianas. En el centro de la red está el vacío, el espíritu creador, el “Gran Misterio”.
            Según la tradición, los atrapasueños ayudan a mantener con nosotros las buenas ideas y los sueños agradables, así como a proteger a 
            quien lo posee. El Tiempo de los sueños es influenciado por buenas y malas energías; estas últimas son atrapadas por la malla y se 
            disipan por el agujero central con los primeros rayos de sol.
            Deja que la telaraña atrape tus buenos recuerdos y los malos pasen por el agujero del centro y se desvanezcan.`
    ] */


export default function App() {

	return (
        <ContextProvider>
                <Layout>
                    <Router />
                </Layout>
        </ContextProvider>
	);
}


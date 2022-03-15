// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "d265b691-05a2-4ce8-868d-ff3a9f6fd41f";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    escena1: new undum.SimpleSituation(
        `<h1>¡Annah, Annah!</h1>\
        <p>Te despierta de repente la voz de tu madre.<br/>
— ¿Qué quieres?, ¿por qué me llamas tan exaltada? – le decía mientras me frotaba los ojos tratando de despertarme antes.<br/>
— ¿Has olvidado qué ía es hoy? Es la graduación de tu hermana. Todos estamos preparados, y tú todavía durmiendo… - exclamó con cierta decepción<br/>
Cierto. Hoy se suponía que era el gran día. Por fin, mi hermana Cassie se graduaba como Oficial del Cuerpo de Hechicería. Tras años de esforzarse para ser la mejor, hoy debía recoger sus frutos. Y, como no, todo el pueblo solamente hablaba de nuestra familia.
No era muy común que los campesinos normales y corrientes lleguen a la Escuela de Magia, y mucho menos, que se gradúen como oficiales. Para bien o para mal, somos el orgullo y la envidia del pueblo.
<br/>— Sí mamá – mientras sonreía levemente. – Sé lo importante que es para ti este día. Voy a prepararme tan rápido como pueda y os veo en la estación.
<p class='transient'>Pulsa <a href='escena2'>aquí para comenzar a prepararte...</a></p>`
    ),
    escena2: new undum.SimpleSituation(
        `<h1>Seleccionar vestido</h1>
		<p>Acto seguido, Annah se levanta de la cama y se acerca al armario para abrirlo. Como la casa es vieja, se escuchan los crujidos de la madera al tocar la puerta.<br/>
Al abrir, lo primero en lo que fija la mirada son en los dos vestidos que tenía preparados para la ocasión. El de la izquierda, un llamativo vestido corto, color rojo carmesí. Con un gran lazo que recorre la cintura, y dos tirantes negros.<br/>
— Todo el mundo me mirará si elijo este vestido, igual es demasiado atrevido. – se dijo a sí misma, pensando en la ceremonia de graduación de su hermana.<br/>
El vestido de la derecha, era un vestido mucho más recatado y discreto. Se trataba de un vestido color azabache, que ya había usado en otras ocasiones especiales. Si lo mirabas de cerca, se podían apreciar algunas marcas de uso.<br/>
— Este otro es más discreto. Seguro que nadie se fija en mí – pensó al mirarlo.<br/>
<span class="transient"><br/>Puedes ponerte <a href="./vestido1">el vestido rojo carmesí</a> o bien, <a href="./vestido2">el vestido negro azabache</a></span></p>`, {
            actions: {
                'vestido1': function(character, system, action) {
                    system.setQuality("vestido1", 1);
                    system.doLink("escena2b");

                },
                'vestido2': function(character, system, action) {
                    system.setQuality("vestido2", 1);
                    system.doLink("escena2b");
                },
            }
        }),

    escena2b: new undum.SimpleSituation(
        `<p>Ahora que Annah ya ha escogido un vestido, comienza a vestirse.<br/>
		Al terminar de ponérselo, va al baño, se peina el cabello, se coloca los pendientes – los cuales le pertenecieron a su abuela, y ella se los dejó a Annah –, un fino anillo plateado y una chaqueta, ya que el vestido era bastante poco abrigado.
<p class='transient'><a href='escena3'>¡Debo de ir a la estación!</a></p>`, {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p align='center'>Me veo genial con este vestido, pero debo darme prisa en terminar.</p>"
                );
                system.setQuality("pendientes", 2);
            },
            exit: function(character, system, to) {
                system.setCharacterText("<p align='center'>Estoy lista. ¡Voy corriendo a la estación!</p>");
            }
        }),
    escena3: new undum.SimpleSituation(
        `<h1>Camino a la Estación</h1>\
			<p>Nada más salir de su casa, Annah comienza a caminar rápidamente, ya que toda su familia la esperaba en la estación.<br/>
	Son las 9:47 am. Tan solo dispone de 13 minutos para llegar a la estación y subirse en el tren.<br/>De repente, cuando va a peinarse un poco, Annah nota que ha perdido uno de los pendientes.<br/>
	¿Qué debería hacer?
	</p>`, {
            choices: ["opcion3a", "opcion3b"],
            enter: function(character, system, from) {
                system.animateQuality("pendientes", 1);
            }
        }),
    opcion3a: new undum.SimpleSituation(
        `<h1>Comienzas a buscar el pendiente</h1>
		<p>El pendiente es demasiado importante para mí, es lo único que me queda de ella – se dijo a sí misma, en referencia al pendiente que perteneció a su abuela.<br/>
		Es entonces cuando Annah comienza a detenerse, y pensar dónde se le ha podido caer el pendiente. Comienza a retroceder por el camino que venía, pero no encontraba nada.<br/>
		Ya desesperada comenzó a acalorarse y se quitó la chaqueta que llevaba encima del vestido. En ese momento, escuchó cómo algo metálico caía y golpeaba el suelo.<br/>
		Se agachó para mirarlo más de cerca — ¡mi pendiente! – exclamó. Resulta que siempre había estado con ella. No se le había caído al suelo de camino a la estación, tan solo, se le había enganchado en la ropa.<br/>
		Acto seguido, se lo guarda en un bolsillo de la chaqueta, y emprende una carrera hacia la estación. Eran ya las 9:54 am. Si antes ya iba apresurada, ahora lo estaba mucho más.<br/>
		Finalmente, consigue llegar cuando faltaban tan solo dos minutos para que partiera el tren. Allí se reunió con su padre, su madre y su hermana, y comenzaron el viaje a la capital.<br/>
		<p class='transient'><br/>Pulsa <a href='escena4'>aquí para continuar...</a></p>`, {
            optionText: "Buscar pendiente",
            displayOrder: 1,
            exit: function(character, system, to) {
                system.animateQuality("pendientes", 2);
            }
        }
    ),
    opcion3b: new undum.SimpleSituation(
        `<h1>Sigues tu camino...</h1>
		<p>No tengo tiempo para esto, y no puedo estropearle el día a mi hermana…<br/>
Continuó así sin el pendiente. Llegó a las 9:54 am a la estación, y allí estaba su padre, su madre y su hermana, esperando para subirse en el tren.<br/>
Con la prisa que había tenido desde que salió de casa, tenía bastante calor. Es por eso que, se quitó la chaqueta mientras le contaba a su familia lo que le había sucedido con el pendiente.<br/>
Justo ahí, su hermana se agacha, recoge algo metálico y se lo entrega a Annah.<br/>
— Toma anda, ¡vas a perder la cabeza un día de estos!<br/>
— ¿De qué hablas? – mientras miraba lo que le había dado su hermana. Era el pendiente que había perdido.<br/>
Resultó que no se le había caído en el suelo, ¡sino que había estado con ella todo el rato enganchado a la chaqueta!<br/>
Se guardó el pendiente en el bolsillo, y se subieron al tren, camino a la capital.<br/>
<p class='transient'><br/>Pulsa <a href='escena4'>aquí para continuar...</a></p>`, {
            optionText: "Continuar sin él",
            displayOrder: 2,
            exit: function(character, system, to) {
                system.animateQuality("pendientes", 2);
            }
        }
    ),
    escena4: new undum.SimpleSituation(
        `<h1>En la Capital...</h1>\
        <p>Al bajar del tren, parecía que estábamos en otro mundo. Nada tenían que ver las vivas, ricas y mágicas calles de la capital, con los cuatro gatos que habitaban el pueblo.<br/>
Como la mayoría de gente adinerada vivía en la capital, se podían permitir ir a la Escuela de Magia, incluso aunque fueran unos completos inútiles.<br/>
Tiendas de bastones mágicos, de criaturas extrañas, de ingredientes variopintos, etc. <br/>
Recorrer las calles de la capital se estaban convirtiendo en toda una aventura. Seguí observando todo lo que me rodeaba, hasta que llegamos al salón de eventos de la Escuela de Magia. <br/>
Allí nos recibió una señora a la que mi hermana parecía conocer. Nos sentó en los sitios que había reservados para nosotros. A mí me dio ganas de ir al servicio, por lo que pregunté donde estaba, y me dirigía a él.<br/>
<p class='transient'>Pulsa <a href='escena5'>aquí para continuar...</a></p>`
    ),
    escena5: new undum.SimpleSituation(
        `<h1>En la Capital...</h1>\
        <p>Para una chica de pueblo como yo, es inevitable que ciertas cosas me llamen la atención. Ver gente volando, otros que con solo mirarte podrían convertirte en una bonita estatua de piedra, etc. <br/>
Pero si hay algo que me gusta, son los animales. Es por eso que, una vez salí del baño, empecé a recorrer la Escuela hasta que encontré el famoso bestiario. No me ha sido especialmente difícil, ya que está en los jardines.<br/>
Allí hay toda clase de criaturas, dragones encadenados, trolls, melux, y todo tipo de criaturas que más allá de las historias que nos cuentan cuando somos pequeños, no nos podemos hacer ni una idea de cómo son en la realidad.<br/>
Las grandes verjas que contenían todas las jaulas de las bestias estaban cerradas, pero he observado que hay un hueco por el que quizá podría colarme…<br/>
</p>`, {
            choices: ["opcion5a", "opcion5b"],
        }
    ),
    opcion5a: new undum.SimpleSituation(
        `<h1>Entras al Bestiario</h1>
		<p>Por un hueco que había al lado de una verja, consigo meterme. Al fin estoy dentro del bestiario.<br/>
Nada más entrar, comienzo a moverme lentamente por la zona. No puedo ver mucho, ya que no hay iluminación más allá de la luz de la luna.<br/>
De repente, noto que algo toca brevemente mi zapato. No consigo ver nada, por lo que quizá es simplemente una rama.<br/>
No le doy mucha importancia, y continúo en la zona. No veo ninguna bestia. Parece estar abandonado, ya que todas las jaulas parecen estar vacías.<br/>
Lo único que hay, es un silencio terriblemente absoluto. Lo único que escucho, es mi respiración y los pasos que voy dando. <br/>
Es cuando algo me vuelve a tocar el pie. No puedo apreciar bien lo que es, pero es muy parecido a una serpiente.<br/>
		<p class='transient'><br/>Pulsa <a href='escena6'>aquí para continuar...</a></p>`, {
            optionText: "Colarme por el agujero",
            displayOrder: 1
        }
    ),
    opcion5b: new undum.SimpleSituation(
        `<h1>Volver al salón de eventos</h1>
		<p>Por lo oscuro que está todo, creo que es mejor no entrar y volver al evento con mi familia.<br/>
— ¡Oye, quien anda ahí! – exclama alguien que no estaba muy lejos de mí.<br/>
Parece como si fuera un vigilante o el amo de llaves de la Escuela. ¿Qué puedo hacer ahora? Si me pillan por esta zona, me voy a meter en un lío, y mi hermana va a tener consecuencias por ello.<br/>
No puedo arruinarle esta noche especial, así que, creo que es mejor que me esconda dentro del bestiario.<br/>
<p class='transient'><br/>Pulsa <a href='opcion5a'>aquí para colarte por el agujero...</a></p>`, {
            optionText: "Volver al salón de eventos",
            displayOrder: 2
        }
    ),
    escena6: new undum.SimpleSituation(
        `<h1>El Despertar</h1>\
        <p>Más que por el animal que pueda ser en sí, me asusto por la situación. Estoy totalmente sola, en unos jardines que parecen abandonados, y hay algo que me está tocando. Así que comienzo a correr, tratando de buscar el angosto hueco por el que me había colado.<br/>
Algo me vuelve a tocar el pie. Sacudo mis piernas como si quisiera machacar uva para hacer vino, pero da igual, porque cada vez más cosas tocan mis pies.<br/>
Annah se tropieza, se cae y se golpea en la cabeza con una piedra, a la vez que se desgarra el vestido.<br&>
No puede moverse, pero sí nota cómo las extrañas criaturas comienzan a morder.<br/>
Debido a la situación, me despierto. Me doy cuenta de que todo es un mal sueño. Soy Dani, vivo en Jaén, y es un miércoles a las 6 de la mañana. Tengo clase práctica de Desarrollo Ágil en unas horas, y ya no me puedo dormir.<br/><br/>
</p><h1>Todo esto ha sido… como un sueño.</h1>`, {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p align='center'>6am - Jaén, España.</p>"
                );
                system.setQuality("pendientes", 0);
                system.setQuality("vestido1", 0);
                system.setQuality("vestido2", 0);
            },
        })
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "escena1";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    pendientes: new undum.NonZeroIntegerQuality(
        "Pendientes", {
            priority: "0001",
            group: 'grupo1'
        }
    ),
    vestido1: new undum.OnOffQuality(
        "Vestido carmesí", {
            priority: "0001",
            group: 'grupo1',
            onDisplay: "&#10003;"
        }
    ),
    vestido2: new undum.OnOffQuality(
        "Vestido azabache", {
            priority: "0001",
            group: 'grupo1',
            onDisplay: "&#10003;"
        }
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    grupo1: new undum.QualityGroup(null, {
        priority: "0001"
    }),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setCharacterText("<p align='center'>ZzzzzZzzZZzzz...</p>");
};
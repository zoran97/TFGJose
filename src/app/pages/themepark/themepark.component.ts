import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-themepark',
  templateUrl: './themepark.component.html',
  styleUrls: ['./themepark.component.scss'],
})
export class ThemeparkComponent implements OnInit {



  
  themeparklist = [
    {
    title: "Parque Warner",
    subtitle: "Parque Warner Madrid",
    location: "San Martin de la Vega, Madrid",
    photo: 'https://ayto-smv.es/wp-content/uploads/2015/09/PARQUE-WARNER.jpg',
    info: "Parque Warner Madrid es un parque temático ubicado en la localidad de San Martín de la Vega,en la Comunidad de Madrid, España. Fue inaugurado el 2 de abril pero las fuertes lluvias de ese día hicieron suspender la programación de ese evento y las retransmisiones por televisión. Oficialmente abierto al público el 5 de abril de 2002 y se divide en 5 áreas temáticas ambientadas en escenarios de películas y dibujos animados producidos por Warner Bros. y DC Comics.",
    web:'https://www.parquewarner.com/',
    coaster: '/rollercoasters',
  },
    {
    title: "Portaventura",
    subtitle: "Portaventura park",
    location: "Salou, Tarragona",
    photo: 'https://www.ccoo.cat/wp-content/uploads/2021/05/portaventuraparksresorts-imatge-web.png',
    info: "PortAventura Park es el nombre del parque temático de atracciones del complejo en el que reside su principal actividad que fue inaugurado el 1 de mayo de 1995. El parque posee una ambientación y espectáculos repartidos por sus 5 áreas temáticas ",
    web:'https://www.portaventuraworld.com/',
    coaster: '/rollercoasters',
  },
    {
    title: "Parque de Atracciones de Madrid",
    subtitle: "Parque de atracciones de Madrid",
    location: "Madrid",
    photo: 'https://www.colectivia.com/blog/wp-content/uploads/2019/09/atracciones-aprque-madrid.jpg',
    info: "La historia del Parque de Atracciones de Madrid comenzó el 15 de mayo de 1969. A lo largo de su historia a sufrido muchas modificaciones. Tiene 4 zonas donde poder disfrutar de todas sus atracciones.",
    web:'https://www.parquedeatracciones.es/',
    coaster: '/rollercoasters',
  },

  {
    title: "Isla Mágica",
    subtitle: "Isla mágica",
    location: "Sevilla",
    photo: 'https://mudakids.com/wp-content/uploads/isla-magica.jpg',
    info: "Isla Mágica es un parque temático situado en Sevilla, ambientado en el descubrimiento de América e inaugurado en 1997. Se formó aprovechando algunas instalaciones de la Exposición Universal de 1992. El parque cuenta con seis zonas temáticas y con una zona acuática llamada Agua Mágica. En el momento de su apertura fue el primer parque temático urbano del mundo, ya que normalmente se encuentran apartados de los núcleos urbanos.",
    web:'https://www.islamagica.es/',
    coaster: '/rollercoasters',
  },

  {
    title: "Terra Mítica",
    subtitle: "Terra Mítica",
    location: "Benidorm, Valencia",
    photo: 'https://www.lovevalencia.com/wp-content/uploads/2014/06/TMBenidorm_hor.jpg',
    info: "Terra Mítica es un parque temático situado en Benidorm. Su temática se basa en antiguas civilizaciones del Mediterráneo, representadas en cinco zonas temáticas: Egipto, Grecia, Roma, Las Islas e Iberia.",
    web:'https://www.terramiticapark.com/',
    coaster: '/rollercoasters',
  },


  ]

  constructor() {}

  ngOnInit() {
    
  }

}

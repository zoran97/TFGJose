import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rollercoasters',
  templateUrl: './rollercoasters.component.html',
  styleUrls: ['./rollercoasters.component.scss']
})
export class RollercoastersComponent implements OnInit {


  RollerCoasterList = [

    {
      Name: "Batman Gotham City Scape",
      Park: "Parque Warner",
      Maker:"Intamin Amusement Rides",
      Height:"45 m",
      Lenght:"1010 m",
      Speed:"104 Km/h",
      Year:"2023",
      Photo:"https://tur43.es/wp-content/uploads/2023/05/5-1024x683.jpg",
      Video: "https://www.youtube.com/watch?v=wFtz8lne7o4&ab_channel=AttractionsMagazine",
    },

    {      
    Name: "Superman, La atracción de acero",
    Park: "Parque Warner",
    Maker:"Bolliger & Mabillard (B&M)",
    Height:"50 m",
    Lenght:"1100 m",
    Speed:"100 Km/h",
    Year:"2002",
    Photo:"https://www.taquilla.com/data/images/t_microimgs/01/superman-parque-warner-superman-parque-warner.jpg",
    Video:"https://www.youtube.com/watch?v=anirw7hzFtI&ab_channel=CoasterAdventures",
    },

    {
    Name: "Shadows of Arkham",
    Park: "Parque Warner",
    Maker:"Bolliger & Mabillard (B&M)",
    Height:"32 m",
    Lenght:"823 m",
    Speed:"80 Km/h",
    Year:"2002",
    Photo:"https://thumbnail.pa-community.com/0c/29/3bfa40fb01e9a1e8ba3c50d17988/3e2202dcb9dbfbbd06b47ae3238c3ea3.jpg",
    Video:"https://www.youtube.com/watch?v=7ptLR8L8v-s&ab_channel=ParqueWarner",
    },

    {
      Name: "Stunt Fall",
      Park: "Parque Warner",
      Maker:"Vekoma",
      Height:"54 m",
      Lenght:"367 m",
      Speed:"99 Km/h",
      Year:"2002",
      Photo:"https://thumbnail.pa-community.com/41/08/f46924175d00ce67c689d2e9b035/8afed7b5ee4a0a15fa05d070e6edb95b.jpg",
      Video:"https://www.youtube.com/watch?v=AtM4TCvelPo&ab_channel=ParqueWarner",
    },

    {
      Name: "Coaster Express",
      Park: "Parque Warner",
      Maker:"Roller Coaster Corporation of America",
      Height:"36.6 m",
      Lenght:"1394.2 m",
      Speed:"95 Km/h",
      Year:"2002",
      Photo:"https://thumbnail.pa-community.com/c4/3c/0a376b025a1735593a646328ae17/d0c5d86efcd5507eee5708e9081c9269.jpg",
      Video:"https://www.youtube.com/watch?v=-jNexF9YVR0&ab_channel=ParqueWarner",
    },

    {
      Name: "Tom & Jerry",
      Park: "Parque Warner",
      Maker:"Zierer",
      Height:"8 m",
      Lenght:"360 m",
      Speed:"36 Km/h",
      Year:"2002",
      Photo:"https://thumbnail.pa-community.com/16/5f/7483f47852a8dd24f4b9aed7b2a4/d27988b5a24c481f44bf83c8c83a5e08.jpg",
      Video:"https://www.youtube.com/watch?v=FEpWuOLuRno&ab_channel=GrupoParquesReunidos",
    },

    {
      Name: "Correcaminos Bip Bip",
      Park: "Parque Warner",
      Maker:"Mack Rides GmbH & Co KG",
      Height:"16 m",
      Lenght:"480 m",
      Speed:"60 Km/h",
      Year:"2009",
      Photo:"https://thumbnail.pa-community.com/72/59/ddf4e1c816fdd9876701344f2643/6ed679817054bc2dfc2116b701ad6e1d.jpg",
      Video:"https://www.youtube.com/watch?v=FoVC3HNn-9s&ab_channel=HumberRides",
    },

    {
      Name: "Furius Baco",
      Park: "Portaventura park",
      Maker:"Intamin Amusement Rides",
      Height:"14 m",
      Lenght:"850 m",
      Speed:"135 Km/h",
      Year:"2007",
      Photo:"https://thumbnail.pa-community.com/70/40/25856f5010774c46a05841f2260c/7317b8cf88b033dc8ab620d5fca275af.jpg",
      Video:"https://www.youtube.com/watch?v=JO7BMbC_gSg&t=94s&ab_channel=CoasterForce",
    },

    {
      Name: "Dragon Khan",
      Park: "Portaventura park",
      Maker:"Bolliger & Mabillard (B&M)",
      Height:"45 m",
      Lenght:"1266 m",
      Speed:"110 Km/h",
      Year:"1995",
      Photo:"https://thumbnail.pa-community.com/d5/95/7ac5f5088a31af906d6ea4753f49/dcc0fb82e7defdb1ece83784f523160e.jpg",
      Video:"https://www.youtube.com/watch?v=-CLcCzrbi6w&ab_channel=CoasterForce",
    },

    {
      Name: "Shambhala: Expedición al Himalaya",
      Park: "Portaventura park",
      Maker:"Bolliger & Mabillard (B&M)",
      Height:"76 m",
      Lenght:"1650 m",
      Speed:"134 Km/h",
      Year:"2012",
      Photo:"https://thumbnail.pa-community.com/cf/b0/18dbdac870bb2d198a5de94b7d92/8c3068096c7363550745ad0a6c533f72.jpg",
      Video:"https://www.youtube.com/watch?v=lKKykTVXyqE&ab_channel=PortAventuraWorld",
    },

    {
      Name: "Stampida",
      Park: "Portaventura park",
      Maker:"Custom Coaster Inc",
      Height:"26 m",
      Lenght:"1950 m",
      Speed:"72 Km/h",
      Year:"1997",
      Photo:"https://thumbnail.pa-community.com/e6/de/178482972e561a8c17a061125a85/7e0b0092e8ccba0400674b393f01fc9a.jpg",
      Video:"https://www.youtube.com/watch?v=ooAE6L6UrcM&ab_channel=PortAventuraWorld",
    },

    {
      Name: "Tomahawk",
      Park: "Portaventura park",
      Maker:"Tomahawk",
      Height:"14 m",
      Lenght:"440 m",
      Speed:"40 Km/h",
      Year:"1997",
      Photo:"https://thumbnail.pa-community.com/4e/28/be223c1a2c0dae7752500f09ccee/17ee83f3f851c710001ab2df7059c9f4.jpg",
      Video:"https://www.youtube.com/watch?v=a5RWB5d28YM&ab_channel=CoasterForce",
    },

    {
      Name: "Diablo, tren de la mina",
      Park: "Portaventura park",
      Maker:"Arrow Dynamics",
      Height:"17 m",
      Lenght:"1007 m",
      Speed:"60 Km/h",
      Year:"1995",
      Photo:"https://thumbnail.pa-community.com/ba/5c/bb807a5a81fbeab0e84a8a2f1b85/3c7bed096ebacf7734c1ab05c8e30a48.jpg",
      Video:"https://www.youtube.com/watch?v=_7tgUbQUjfg&ab_channel=HumberRides",
    },

    {
      Name: "Tami-Tami",
      Park: "Portaventura park",
      Maker:"Tami-Tami",
      Height:"8.5 m",
      Lenght:"207 m",
      Speed:"34.9 Km/h",
      Year:"1998",
      Photo:"https://i.pinimg.com/564x/90/ff/a8/90ffa852b299b9fa21120932756bf934.jpg",
      Video:"https://www.youtube.com/watch?v=dtdF0Q5L5yA&ab_channel=ThemeParkWorldwide",
    },

    {
      Name: "Red Force",
      Park: "Portaventura park",
      Maker:"Intamin Amusement Rides",
      Height:"112 m",
      Lenght:"880 m",
      Speed:"189 Km/h",
      Year:"2017",
      Photo:"https://thumbnail.pa-community.com/9d/15/86a1b5ace8b117f38e3d1fd5b6f8/96bd8e875c8f546a37ddb64df84d2a58.jpg",
      Video:"https://www.youtube.com/watch?v=h1qylK3XZ3o&ab_channel=videoreviewPARKS",
    },

    {
      Name: "Junior Red Force",
      Park: "Portaventura park",
      Maker:"SBF Visa Group",
      Height:"8 m",
      Lenght:"250 m",
      Speed:"45 Km/h",
      Year:"2018",
      Photo:"https://www.pafans.com/static/resort/ferrari-land/junior-red-force/junior-red-force-hcvjw.jpg",
      Video:"https://www.youtube.com/watch?v=tdFd-BE2HGI&ab_channel=ThemeParkWorldwide",
    },


    {
      Name: "Abismo",
      Park: "Parque de Atracciones de Madrid",
      Maker:"Maurer Söhne",
      Height:"46 m",
      Lenght:"410 m",
      Speed:"105 Km/h",
      Year:"2006",
      Photo:"https://thumbnail.pa-community.com/7e/15/c68d50d5b730d6d6681f0011fc90/a45d14edab4c5f817c2632bd6714462d.jpg",
      Video:"https://www.youtube.com/watch?v=c9obwQdRt44&ab_channel=CoasterForce",
    },

    {
      Name: "Tarántula",
      Park: "Parque de Atracciones de Madrid",
      Maker:"Maurer Söhne",
      Height:"25.5 m",
      Lenght:"630 m",
      Speed:"70 Km/h",
      Year:"2005",
      Photo:"https://thumbnail.pa-community.com/4f/9e/af0deeeaaef34b280320bf31bddb/cf59624e2711701832de10a22919b6a5.jpg",
      Video:"https://www.youtube.com/watch?v=rJh5nA051JY&ab_channel=CoasterForce",
    },

    {
      Name: "Tornado",
      Park: "Parque de Atracciones de Madrid",
      Maker:"Intamin Amusement Rides",
      Height:"30 m",
      Lenght:"800 m",
      Speed:"80 Km/h",
      Year:"1999",
      Photo:"https://thumbnail.pa-community.com/3b/5b/caf6cd80ff911a48f19423bf9891/da64bd7aa09dcd6c44533125df61af48.jpg",
      Video:"https://www.youtube.com/watch?v=dvFQfqBwC9g&ab_channel=CoasterForce",
    },

    {
      Name: "TNT Tren de la mina",
      Park: "Parque de Atracciones de Madrid",
      Maker:"Gerstlauer",
      Height:"18 m",
      Lenght:"450 m",
      Speed:"55 Km/h",
      Year:"2012",
      Photo:"https://thumbnail.pa-community.com/8d/3c/9226542623028b0b50c5510de364/5bf97ba8c17059c30e84ad012d25f962.jpg",
      Video:"https://www.youtube.com/watch?v=r82gZYm5fFE&ab_channel=PosesionFriki",
    },

    {
      Name: "Vértigo",
      Park: "Parque de Atracciones de Madrid",
      Maker:"Mack Ride",
      Height:"14 m",
      Lenght:"370 m",
      Speed:"43 Km/h",
      Year:"2009",
      Photo:"https://thumbnail.pa-community.com/2e/d0/063bc3c47a533f95e96578fc9ed7/8951b07aa872130bb8b0605eea30ae18.png",
      Video:"https://www.youtube.com/watch?v=y9oB3zkDP5g&ab_channel=GrupoParquesReunidos",
    },

    {
      Name: "Paw Patrol",
      Park: "Parque de Atracciones de Madrid",
      Maker:"Zamperla",
      Height:"4 m",
      Lenght:"80 m",
      Speed:"15 Km/h",
      Year:"2007",
      Photo:"https://images.ecestaticos.com/lngS_QFUsl79j37FmiCl74PZk6s=/0x149:2271x1513/640x360/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F61f%2F48c%2Fc19%2F61f48cc19a00fbf8f1cb4c71bdec55c0.jpg",
      Video:"https://www.youtube.com/watch?v=GT5h7RGXOFQ&ab_channel=DREAMCOASTER",
    },
    {
      Name: "Padrinos voladores",
      Park: "Parque de Atracciones de Madrid",
      Maker:"Zamperla",
      Height:"6.2 m",
      Lenght:"110 m",
      Speed:"12.6 Km/h",
      Year:"2007",
      Photo:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Padrinos_Voladores_-_Parque_de_Atracciones_de_Madrid.jpg",
      Video:"https://www.youtube.com/watch?v=jH3DS05haw4&ab_channel=JJParquesn",
    },

    {
      Name: "Jaguar",
      Park: "Isla Mágica",
      Maker:"Vekoma",
      Height:"33.3  m",
      Lenght:"765 m",
      Speed:"80 Km/h",
      Year:"1997",
      Photo:"https://thumbnail.pa-community.com/08/2f/0288b6a04577430ba5c553d2f560/5e9e733d6f1cab7e02eb9cea7fb836fd.jpg",
      Video:"https://www.youtube.com/watch?v=KMCjTbRpCRA&ab_channel=DREAMCOASTER",
    },

    {
      Name: "Tren de Potosí",
      Park: "Isla Mágica",
      Maker:"C&C",
      Height:"5 m",
      Lenght:"100 m",
      Speed:"10 Km/h",
      Year:"1997",
      Photo:"https://thumbnail.pa-community.com/83/fe/bdb3f0ea6d68b453d6b051b6fef2/6e103065813ec40d3c3a7add4b6b084a.jpg",
      Video:"https://www.youtube.com/watch?v=IbkD6tk28e8&ab_channel=theParks.it",
    },


    {
      Name: "Alucinakis",
      Park: "Terra Mítica",
      Maker:"Zamperla",
      Height:"8 m",
      Lenght:"250 m",
      Speed:"30 Km/h",
      Year:"2000",
      Photo:"https://www.terramitica.com.es/wp-content/uploads/2014/03/alucinakis_1.jpg",
      Video:"https://www.youtube.com/watch?v=NU9vRvsnO-I&ab_channel=CoasterForce",
    },

    {
      Name: "Inferno",
      Park: "Terra Mítica",
      Maker:"Intamin Amusement Rides",
      Height:"25.4 m",
      Lenght:"142 m",
      Speed:"59.9 Km/h",
      Year:"2007",
      Photo:"https://thumbnail.pa-community.com/82/d2/cc3e03f8fd3fded4a9b7da0865d7/b444040c9c938032facd38a40d7fa1f6.jpg",
      Video:"https://www.youtube.com/watch?v=MqrzuAMXLJM&ab_channel=videoreviewPARKS",
    },

    {
      Name: "titánide",
      Park: "Terra Mítica",
      Maker:"Vekoma",
      Height:"31 m",
      Lenght:"662 m",
      Speed:"90 Km/h",
      Year:"2003",
      Photo:"https://thumbnail.pa-community.com/11/37/35aa47f2b9e18d6efe211817f98b/5dd2eef78f9a1105b5c3ccf48fa27e3c.png",
      Video:"https://www.youtube.com/watch?v=rXIJn75EXgc&ab_channel=IgnacioHernando",
    },



  ]

  constructor() {}

  ngOnInit() {
   
  }

}


import pic01 from '../assets/eme.png'
import pic02 from '../assets/qantas.png'
import pic03 from '../assets/pia.png'
import pic04 from '../assets/tukrish2.png'
import pic05 from '../assets/delta.png'
import cover01 from '../assets/E-portrait2.png'
import cover02 from '../assets/cover2.jpeg'
import cover03 from '../assets/cover3.jpeg'
import cover04 from '../assets/cover4.jpeg'
import cover05 from '../assets/cover5.png'


export const AirlineData = [
    {
        width: 200,
        height: 170,
        left: 184,
        top: 135,
        imageWidth: 105,
        imageHeight: 105,
        topImg: 0,
        leftImg: 10,
        color01: "#E80B0B",
        color02: "#DC4F00" ,
        image: pic01,
        id: 1,     
        name: 'Discover Dubai',
        slogans: 'Explore the scenic beauty of huge buildings',
        description: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks. ',
        coverImage: cover01,
        price: 375
    },
    {
        width: 134,
        height: 170,
        left: 30,
        top: 135,
        imageWidth: 60,
        imageHeight: 60,
        topImg: 20,
        leftImg: 10,
        color01: "#000",
        color02: "#676767" ,
        image:  pic02,
        id: 2,
        name: 'Discover Australia',
        slogans: 'Explore the beautiful country',
        description: 'Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country in Oceania and the worlds sixth-largest country',
        coverImage: cover02,
        price: 970
    },
    {
        width: 354,
        height: 154,
        left: 30,
        top: 325,
        imageWidth: 134,
        imageHeight: 75,
        topImg: 10,
        leftImg: 10,
        color01: "#FF6091",
        color02: "#5127DD" ,
        image: pic04 ,
        id: 3,
        name: 'Discover Turkey',
        slogans: 'Explore the Historical places',
        description: 'Turkey is situated at the crossroads of the Balkans, Caucasus, Middle East, and eastern Mediterranean. It is among the larger countries of the region in terms of territory and population, and its land area is greater than that of any European state. Nearly all of the country is in Asia, comprising the oblong peninsula of Asia Minor—also known as Anatolia (Anadolu)—and, in the east, part of a mountainous region sometimes known as the Armenian Highland. The remainder—Turkish Thrace (Trakya)—lies in the extreme southeastern part of Europe, a tiny remnant of an empire that once extended over much of the Balkans.',
        coverImage: cover03,
        price: 390
    },
    {
        width: 200,
        height: 140,
        left: 30,
        top: 500,
        imageWidth: 100,
        imageHeight: 35,
        topImg: 30,
        leftImg: 10,
        color01: "#A7FFE5",
        color02: "#00CFC3" ,
        image: pic03 ,
        id: 4,
        name: 'Discover Pakistan',
        slogans: 'Explore the beautiful country',
        description: 'The history of Pakistan traces back to the beginnings of human life in Southern Asia. Pakistan is home and heir to the famous Indus Valley civilization, which is amongst the oldest in the world. The earliest archaeological traces of Ancient Pakistanis are from 7000 BC in Mehrgarh, which grew to be the "Indus Valley Civilization". By 3300 BC, this civilization had well-planned towns and well-laid roads, but gave no evidence of weapons or fortifications. This declined and disintegrated around 1900 BC, possibly due to drought and geological disturbances. Most historians say that the Vedic people, or Aryans, were later migrants, who encountered a civilization in decline and perhaps hastened that decline.',
        coverImage: cover04,
        price: 360
    },
    {
        width: 134,
        height: 140,
        left: 250,
        top: 500,
        imageWidth: 65,
        imageHeight: 65,
        topImg: 10,
        leftImg: 10,
        color01: "#278EFF",
        color02: "#6271FF" ,
        image:  pic05,
        id: 5,
        name: 'Discover USA',
        slogans: 'Explore the Tech country',
        description: 'The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles Hollywood is famed for filmmaking.',
        coverImage: cover05,
        price: 540
    },
]
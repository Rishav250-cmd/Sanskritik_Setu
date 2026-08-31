
import React, { useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  MapPin,
  Menu,
  Search,
  Sparkles,
  Utensils,
  X,
} from 'lucide-react';

import ThreeBackground from './Background';

const img = '/images/hero.jpg';

const imgs = [
  '/images/Andhrapradesh.jpg',
  '/images/arunachal.jpg',
  '/images/assam.jpg',
  '/images/bihar.jpg',
  '/images/chhattisgarh.jpg',
  '/images/goa.jpg',
  '/images/Gujarat.jpg',
  '/images/haryana.jpg',
  '/images/Himachal.jpg',
  '/images/jharkhand.jpg',
  '/images/Karnataka.jpg',
  '/images/kerala.jpg',
  '/images/madhyaparadesh.jpg',
  '/images/maharashtra.jpg',
  '/images/manipur.jpg',
  '/images/meghalaya.jpg',
  '/images/mizoram.jpg',
  '/images/nagaland.jpg',
  '/images/odisha.jpg',
  '/images/punjab.jpg',
  '/images/rajasthan.jpg',
  '/images/sikkim.jpg',
  '/images/tamilnadu.jpg',
  '/images/telangana.jpg',
  '/images/tripura.jpg',
  '/images/uttarpradesh.jpg',
  '/images/uttarakhand.jpg',
  '/images/westbengal.jpg',
];

const names = [
  ['Andhra Pradesh', 'South India'],
  ['Arunachal Pradesh', 'Northeast India'],
  ['Assam', 'Northeast India'],
  ['Bihar', 'East India'],
  ['Chhattisgarh', 'Central India'],
  ['Goa', 'West India'],
  ['Gujarat', 'West India'],
  ['Haryana', 'North India'],
  ['Himachal Pradesh', 'North India'],
  ['Jharkhand', 'East India'],
  ['Karnataka', 'South India'],
  ['Kerala', 'South India'],
  ['Madhya Pradesh', 'Central India'],
  ['Maharashtra', 'West India'],
  ['Manipur', 'Northeast India'],
  ['Meghalaya', 'Northeast India'],
  ['Mizoram', 'Northeast India'],
  ['Nagaland', 'Northeast India'],
  ['Odisha', 'East India'],
  ['Punjab', 'North India'],
  ['Rajasthan', 'West India'],
  ['Sikkim', 'Northeast India'],
  ['Tamil Nadu', 'South India'],
  ['Telangana', 'South India'],
  ['Tripura', 'Northeast India'],
  ['Uttar Pradesh', 'North India'],
  ['Uttarakhand', 'North India'],
  ['West Bengal', 'East India'],
];

const taglines = [
  'Temple traditions, folk rhythms and a cuisine alive with spice.',
  'Mountain communities, vibrant textiles and living indigenous traditions.',
  'Bihu beats, silk weaving and the warm spirit of the Brahmaputra valley.',
  'Ancient learning, folk art and festivals carried through generations.',
  'Forest communities, folk dances and crafts rooted deeply in the land.',
  'A coastal culture where heritage meets music, food and celebration.',
  'Garba nights, colourful textiles and a culture full of energy.',
  'Rural traditions, folk performance and a proud sporting culture.',
  'Mountain temples, woollen crafts and Himalayan festivals.',
  'Adivasi heritage, forest knowledge and rhythmic community celebrations.',
  'Classical arts, grand temples and a culture spanning coast and plateau.',
  'Backwaters, classical performance and a graceful rhythm of everyday life.',
  'Heritage cities, tribal art and stories carved into stone and memory.',
  'From Lavani stages to Ganesh pandals, tradition thrives alongside modernity.',
  'Graceful dance, handloom artistry and a living cultural landscape.',
  'Living root bridges, matrilineal communities and music in the hills.',
  'Community spirit, bamboo crafts and graceful dances of the hills.',
  'Many tribes, many textiles, one extraordinary festival of cultural pride.',
  'Temple architecture, Odissi and exquisite craft traditions beside the sea.',
  'Bold flavours, powerful folk music and a culture built around community.',
  'Desert colours, royal architecture and folk traditions that refuse to fade.',
  'Himalayan spirituality, monasteries and a meeting point of communities.',
  'Dravidian temples, classical arts and a culinary tradition of great depth.',
  'Deccan heritage, vibrant folk arts and a festival culture full of colour.',
  'Royal history, tribal crafts and graceful dances of the northeast.',
  'A cradle of poetry, pilgrimage, craft and centuries of living traditions.',
  'Mountain spirituality, folk songs and traditions shaped by the Himalayas.',
  'Poetry, art, food and festivals flowing through the cultural heart of Bengal.',
];

const cultureData = {
  'Andhra Pradesh': {
    customs:
      'Andhra Pradesh comes alive through classical dance, colourful crafts and centuries-old temple traditions. From the graceful movements of Kuchipudi to the intricate patterns of Kalamkari and the playful Kondapalli toys, its artistic traditions showcase the creativity and skill passed down through generations.',
    food:
      'Andhra cuisine is known for its bold spices, tangy flavours and generous use of chillies. Dishes such as Pulihora, Pesarattu and Gongura are loved for their distinctive taste. Telugu is the main language, while traditional sarees, textiles and jewellery add to the region’s cultural identity.',
    festivals:
      'Festivals in Andhra Pradesh fill homes and communities with colour, music and celebration. Sankranti is especially important, with decorated houses, colourful rangoli, traditional food and family gatherings. Ugadi, the Telugu New Year, is welcomed with rituals, festive dishes and hopes for a fresh beginning.',
  },

  'Arunachal Pradesh': {
    customs:
      'Arunachal Pradesh is home to diverse indigenous communities, each with its own traditions, crafts and celebrations. Colourful woven textiles, bamboo crafts, traditional dances and community rituals reflect a close relationship with nature and a cultural heritage carefully preserved across generations.',
    food:
      'Food in Arunachal Pradesh reflects its mountain environment and diverse communities. Thukpa, momos, bamboo-shoot dishes and rice-based meals are popular. Alongside Hindi and English, many indigenous languages are spoken, while traditional handwoven clothing adds colour and identity to everyday life.',
    festivals:
      'The festivals of Arunachal Pradesh bring villages to life with music, dance, rituals and shared feasts. Losar, Solung, Nyokum and Mopin are celebrated by different communities, offering visitors a glimpse into ancient beliefs, agricultural traditions and the strong sense of community found across the mountains.',
  },

  'Assam': {
    customs:
      'Assamese culture flows through the rhythms of Bihu, the elegance of Sattriya dance and the beauty of traditional handloom weaving. Muga silk, folk music and Satras preserve stories and artistic traditions that have shaped the cultural identity of the Brahmaputra valley for centuries.',
    food:
      'Assamese cuisine celebrates simple ingredients and delicate flavours. Rice, fish, khar, tenga and pitha are important parts of traditional meals. Assamese is the principal language, while the state’s many communities contribute their own languages, clothing styles and culinary traditions to its rich cultural landscape.',
    festivals:
      'Bihu is the heartbeat of Assam’s festive calendar. Rongali Bihu welcomes spring with traditional songs, energetic dances, new clothes and community gatherings. Bhogali Bihu celebrates the harvest through feasts and bonfires, while other Bihu traditions bring people together throughout the agricultural year.',
  },

  'Bihar': {
    customs:
      'Bihar carries a heritage shaped by ancient learning, spirituality, folk traditions and beautiful craftsmanship. Madhubani painting stands out for its vibrant colours and detailed patterns, while traditional music, crafts and community rituals continue to connect present generations with the artistic traditions of the past.',
    food:
      'Bihari food is hearty, flavourful and deeply connected to everyday family life. Litti chokha, sattu, thekua and khaja are some of its beloved specialities. Hindi is widely spoken alongside Maithili, Bhojpuri and Magahi, while traditional clothing and handicrafts add to the region’s distinctive identity.',
    festivals:
      'Chhath Puja is one of Bihar’s most cherished celebrations, when families gather beside rivers and ponds to offer prayers to the Sun. Devotional songs, beautifully prepared offerings and days of rituals create an atmosphere of faith, gratitude and togetherness.',
  },

  'Chhattisgarh': {
    customs:
      'Chhattisgarh’s cultural identity is deeply connected with its forests and indigenous communities. Tribal dances, folk music, bell-metal crafts, woodwork and colourful paintings express stories of nature, everyday life and spirituality, keeping traditional knowledge alive within villages and communities.',
    food:
      'Rice forms the foundation of Chhattisgarh’s cuisine, accompanied by dishes such as chila, fara and angakar roti. Local ingredients and simple cooking methods create distinctive flavours. Chhattisgarhi and Hindi are widely spoken, while traditional tribal languages enrich the state’s linguistic diversity.',
    festivals:
      'Chhattisgarh celebrates its heritage through lively tribal festivals and village fairs. Bastar Dussehra, Madai and Hareli combine rituals, music, dance and traditional crafts. These celebrations are not simply festivals but important occasions where communities gather, share traditions and strengthen their connection with the land.',
  },

  'Goa': {
    customs:
      'Goan culture reflects a fascinating meeting of Indian and Portuguese influences. Konkani traditions, colourful folk dances, music, traditional homes and local crafts create a distinctive cultural character. The state’s coastal lifestyle adds another layer to a heritage shaped by centuries of cultural exchange.',
    food:
      'Goan cuisine brings together seafood, coconut, spices and local cooking traditions. Fish curry, vindaloo, xacuti and the sweet bebinca are among its famous flavours. Konkani is central to Goan identity, while Marathi, English and other languages are also commonly heard across the state.',
    festivals:
      'Goa is known for celebrations filled with music, colour and community spirit. Carnival brings lively parades and performances to the streets, while Shigmo celebrates spring with traditional processions. Christmas and other local festivals showcase Goa’s unique blend of Indian and Portuguese traditions.',
  },

  'Gujarat': {
    customs:
      'Gujarat comes alive with colour, rhythm and craftsmanship. From the intricate patterns of Bandhani and Patola textiles to the energetic steps of Garba and Dandiya, its traditions reflect a deep love for art and community. Traditional crafts continue to tell stories through colour, fabric and design.',
    food:
      'Gujarati cuisine is known for its wonderful balance of sweet, savoury and spicy flavours. Dhokla, thepla, undhiyu and fafda are popular favourites. Gujarati is the principal language, while colourful traditional clothing, embroidered textiles and silver jewellery add character to the state’s cultural identity.',
    festivals:
      'Navratri transforms Gujarat into a celebration of music, dance and colour. People gather in beautifully decorated spaces to perform Garba and Dandiya through the night. Uttarayan fills the skies with kites, while Janmashtami and other festivals bring families and communities together.',
  },

  'Haryana': {
    customs:
      'Haryanvi culture is rooted in village life, community traditions and a strong connection with the land. Folk songs, traditional dances, wrestling, colourful clothing and local crafts reflect a culture where stories, skills and customs are shared from one generation to another.',
    food:
      'Haryana’s traditional food is simple, nutritious and closely connected to its farming lifestyle. Bajra roti, kadhi, churma and lassi are popular favourites. Hindi and Haryanvi are widely spoken, while traditional attire and rural customs remain important parts of everyday cultural life.',
    festivals:
      'Festivals in Haryana often bring entire communities together through fairs, folk performances and shared meals. Teej celebrates the monsoon with songs and traditions, while Baisakhi, Holi and Diwali fill villages and towns with music, colour, rituals and joyful gatherings.',
  },

  'Himachal Pradesh': {
    customs:
      'Himachal Pradesh carries the charm of mountain traditions through wooden temples, woollen crafts, folk dances and colourful local clothing. Village communities preserve distinctive customs and rituals, while traditional architecture and handicrafts reveal the close relationship between people, mountains and nature.',
    food:
      'Himachali food is hearty and comforting, shaped by the cool mountain climate. Dham, madra, sidu and chana dishes are traditional favourites. Hindi and several Pahari languages are spoken, while woollen shawls, caps and handwoven textiles form an important part of local identity.',
    festivals:
      'Himachal’s festivals combine devotion, music and community celebration against a spectacular mountain backdrop. Kullu Dussehra is famous for its colourful processions and deities, while local temple fairs and seasonal festivals bring villages together through traditional dances, music and shared celebrations.',
  },

  'Jharkhand': {
    customs:
      'Jharkhand’s heritage is deeply connected to its forests and indigenous communities. Sohrai and Khovar paintings, traditional dances, music, weaving and crafts express stories of nature and everyday life. These traditions preserve an intimate relationship between people, land and generations of cultural knowledge.',
    food:
      'Jharkhand’s cuisine uses simple local ingredients and flavours closely connected to village life. Dhuska, rugra, pittha and rice-based dishes are popular. Hindi is widely spoken alongside languages such as Santhali, Nagpuri and Mundari, reflecting the state’s rich tribal and linguistic diversity.',
    festivals:
      'Sarhul, Karma, Sohrai and Tusu are among Jharkhand’s vibrant traditional celebrations. Communities gather to honour nature, celebrate harvests and share music and dance. Colourful rituals, folk songs and community feasts make these festivals an important expression of the state’s indigenous heritage.',
  },

  'Karnataka': {
    customs:
      'Karnataka blends magnificent temples, classical arts and vibrant folk traditions. Yakshagana combines storytelling, music and dramatic costumes, while Mysore paintings and sandalwood crafts showcase exceptional artistic skill. From ancient architecture to living performance traditions, Karnataka offers a remarkable cultural journey.',
    food:
      'Karnataka’s cuisine ranges from comforting home-style dishes to rich festive sweets. Bisi bele bath, ragi mudde, dosa and Mysore pak are popular favourites. Kannada is the principal language, while traditional sarees, Mysore silk and regional clothing reflect the state’s diverse cultural identity.',
    festivals:
      'Mysuru Dasara is one of Karnataka’s most spectacular celebrations, transforming the city with lights, music, processions and cultural performances. Ugadi, Karaga and other regional festivals bring people together through traditional rituals, food, dance and celebrations rooted in local history.',
  },

  'Kerala': {
    customs:
      'Kerala’s cultural landscape is filled with graceful dance, dramatic storytelling and ancient traditions. Kathakali, Mohiniyattam and Kalaripayattu showcase exceptional skill, while temple arts, handloom weaving and traditional architecture reveal a heritage shaped by centuries of creativity and devotion.',
    food:
      'Kerala’s cuisine combines coconut, spices, rice and fresh ingredients into memorable flavours. Appam, puttu, seafood and the elaborate Sadya feast are local favourites. Malayalam is the principal language, while traditional kasavu clothing and handwoven textiles add elegance to the state’s cultural identity.',
    festivals:
      'Onam is Kerala’s most iconic celebration, welcoming the harvest with flower carpets, traditional games, boat races and the grand Sadya feast. Families come together in colourful celebrations, while performances and cultural events fill communities with music, laughter and a strong sense of togetherness.',
  },

  'Madhya Pradesh': {
    customs:
      'Madhya Pradesh is a meeting point of tribal heritage, ancient architecture and traditional arts. Gond paintings use distinctive patterns to tell stories of nature, while folk dances, crafts and historic temples reveal the state’s diverse cultural layers.',
    food:
      'Madhya Pradesh offers comforting flavours shaped by its central location. Poha, bhutte ka kees, dal bafla and malpua are popular specialities. Hindi is the main language, while regional dialects and traditional clothing reflect the varied communities living across the state.',
    festivals:
      'Festivals across Madhya Pradesh bring together history, art and community spirit. The Khajuraho Dance Festival celebrates classical Indian dance against a historic temple backdrop, while Bhagoria and other local fairs feature music, colourful traditions, crafts and joyful gatherings.',
  },

  'Maharashtra': {
    customs:
      'Maharashtra’s heritage combines powerful folk traditions with remarkable art and craftsmanship. Lavani brings rhythm and storytelling to the stage, while Warli painting, Paithani weaving and Warkari traditions preserve stories of devotion, nature and everyday life.',
    food:
      'Maharashtrian cuisine offers bold, comforting and varied flavours. Vada pav, misal pav, puran poli and bhakri are popular favourites, with regional dishes adding even more variety. Marathi is the principal language, while traditional sarees, jewellery and textiles add colour to celebrations.',
    festivals:
      'Ganesh Chaturthi turns cities and neighbourhoods across Maharashtra into vibrant spaces filled with music, art and devotion. Elaborate idols, cultural programmes and processions bring communities together. Gudi Padwa, Diwali and Makar Sankranti are also celebrated with traditional food, decorations and family gatherings.',
  },

  'Manipur': {
    customs:
      'Manipur has a graceful and distinctive cultural identity shaped by classical dance, handloom traditions and indigenous customs. Manipuri dance is celebrated for its elegance, while traditional weaving, martial arts and community practices preserve stories and skills passed through generations.',
    food:
      'Manipuri cuisine makes beautiful use of rice, fish, vegetables and fermented ingredients. Traditional dishes often highlight fresh local produce and distinctive flavours. Meitei and several tribal languages are spoken, while handwoven textiles and traditional clothing remain important expressions of cultural identity.',
    festivals:
      'Festivals in Manipur combine devotion, sport, dance and community life. Yaoshang brings days of colour and celebration, while Lai Haraoba preserves ancient rituals and dances. Ningol Chakouba celebrates family bonds, bringing married daughters and relatives together for a special traditional feast.',
  },

  'Meghalaya': {
    customs:
      'Meghalaya’s cultural richness comes from its Khasi, Jaintia and Garo communities. Traditional weaving, music, dance and indigenous crafts reflect strong connections with nature and community life. Matrilineal traditions in several communities give the state a distinctive social and cultural character.',
    food:
      'Meghalaya’s cuisine features rice, pork, bamboo shoots and traditionally prepared meats. Local dishes are often simple yet full of distinctive flavours. Khasi, Garo and English are widely used, while traditional woven clothing and jewellery add character to cultural celebrations.',
    festivals:
      'Meghalaya’s festivals are filled with music, dance and community traditions. Wangala celebrates the harvest with the famous hundred-drum performances, while Nongkrem Dance and Behdienkhlam bring communities together through rituals, colourful clothing and traditional performances.',
  },

  'Mizoram': {
    customs:
      'Mizo culture places great importance on community, cooperation and traditional arts. Bamboo crafts, handwoven textiles, folk songs and graceful group dances reflect a heritage shaped by the hills. Many customs continue to be celebrated through community gatherings and cultural performances.',
    food:
      'Mizo cuisine makes use of rice, vegetables, bamboo shoots and locally available ingredients. Bai and sawhchiar are among the traditional dishes enjoyed across the region. Mizo is the main language, while English is also widely used in education and public life.',
    festivals:
      'Chapchar Kut is one of Mizoram’s most colourful festivals, marking the arrival of spring with traditional dances, music and celebrations. Mim Kut and Pawl Kut honour seasonal cycles and harvest traditions, bringing communities together through food, performances and cultural activities.',
  },

  'Nagaland': {
    customs:
      'Nagaland is home to diverse Naga communities, each with distinctive traditions, textiles, crafts and stories. Colourful shawls, beadwork, traditional music and dances reflect community identity, while age-old customs continue to be celebrated through gatherings and cultural events.',
    food:
      'Naga cuisine is known for bold flavours and traditional preservation methods. Smoked meats, bamboo shoots, rice and fermented foods are common ingredients. English is widely used alongside several Naga languages, while traditional shawls, jewellery and crafts add vibrant cultural detail.',
    festivals:
      'The Hornbill Festival brings Nagaland’s diverse communities together in a spectacular celebration of culture. Traditional dances, music, food, crafts and games allow visitors to experience the heritage of different Naga tribes in one vibrant gathering.',
  },

  'Odisha': {
    customs:
      'Odisha is a treasure house of classical dance, temple architecture and traditional craftsmanship. Odissi dance, Pattachitra painting, silver filigree and stone carving demonstrate generations of artistic excellence, while ancient temples continue to shape the cultural and spiritual life of the state.',
    food:
      'Odia cuisine is known for balanced flavours and dishes prepared with rice, vegetables, lentils and seafood. Dalma, pakhala bhata and chhena poda are popular favourites. Odia is the principal language, while traditional handloom sarees and silver jewellery add elegance to festive occasions.',
    festivals:
      'Rath Yatra in Puri is one of India’s most spectacular religious celebrations. Enormous chariots carrying the deities move through the streets as crowds gather in devotion. Durga Puja, Raja and other festivals add music, rituals, food and community celebrations throughout the year.',
  },

  'Punjab': {
    customs:
      'Punjab’s cultural identity is full of rhythm, energy and community spirit. Bhangra and Giddha bring traditional stories to life through music and dance, while Phulkari embroidery, folk songs and vibrant clothing showcase the creativity of Punjabi communities.',
    food:
      'Punjabi cuisine is famous around the world for its rich flavours and hearty meals. Sarson da saag, makki di roti, chole and lassi are beloved favourites. Punjabi is the main language, while colourful traditional clothing and Phulkari embroidery add a distinctive visual identity.',
    festivals:
      'Baisakhi is a joyful celebration of harvest, community and renewal, marked by energetic Bhangra and Giddha performances. Lohri brings families together around bonfires, music and traditional foods, while Gurpurabs and Diwali are observed with devotion, lights and community gatherings.',
  },

  'Rajasthan': {
    customs:
      'Rajasthan is a celebration of colour, craftsmanship and royal heritage. Intricate block printing, puppetry, mirror work, traditional jewellery and folk music reveal the creativity of desert communities. Vibrant clothing and textiles bring colour to everyday life and festive occasions.',
    food:
      'Rajasthani cuisine developed around the desert environment and is rich in flavour. Dal baati churma, gatte ki sabzi, ker sangri and ghevar are famous specialities. Hindi and various Rajasthani dialects are spoken, while colourful turbans, odhnis and traditional jewellery complete the cultural picture.',
    festivals:
      'Rajasthan’s fairs and festivals feel like living spectacles of colour and tradition. The Pushkar Fair brings together traders, performers and visitors, while the Desert Festival showcases folk music, dance and crafts. Gangaur and Teej add processions, rituals and celebrations to the festive calendar.',
  },

  'Sikkim': {
    customs:
      'Sikkim’s cultural identity brings together Lepcha, Bhutia and Nepali traditions. Buddhist monasteries, traditional weaving, folk music and colourful rituals reflect the state’s peaceful mountain heritage. Ancient customs continue alongside vibrant community celebrations and distinctive local craftsmanship.',
    food:
      'Sikkim’s cuisine reflects its Himalayan setting and cultural diversity. Momos, thukpa, gundruk and fermented foods are popular choices. Nepali is widely spoken alongside Sikkimese languages and English, while traditional woollen clothing and handwoven textiles add warmth and character.',
    festivals:
      'Festivals such as Losar, Pang Lhabsol and Saga Dawa combine spirituality, community and colourful traditions. Monasteries come alive with prayers and masked dances, while families and communities gather to share food, observe rituals and celebrate their cultural heritage.',
  },

  'Tamil Nadu': {
    customs:
      'Tamil Nadu carries one of India’s most celebrated classical traditions. Bharatanatyam, Carnatic music, magnificent Dravidian temples, Tanjore paintings and handwoven textiles reveal a culture where art, devotion and craftsmanship have flourished for centuries.',
    food:
      'Tamil cuisine is known for its variety, aromatic spices and comforting flavours. Idli, dosa, sambar, pongal and Chettinad dishes are enjoyed across the state. Tamil is the principal language, while traditional silk sarees, veshtis and temple jewellery add elegance to cultural celebrations.',
    festivals:
      'Pongal is Tamil Nadu’s beloved harvest festival, celebrated with decorated homes, colourful kolam designs and freshly prepared traditional dishes. Families express gratitude for nature and the harvest, while events such as Jallikattu and temple celebrations add to the festive atmosphere.',
  },

  'Telangana': {
    customs:
      'Telangana’s heritage blends folk arts, colourful festivals and distinctive crafts. Bathukamma celebrates women, flowers and community, while Perini dance, Cheriyal paintings and handloom traditions preserve stories of the region’s history and artistic imagination.',
    food:
      'Telangana cuisine is known for bold spices and distinctive regional flavours. Hyderabadi biryani, sarva pindi, sakinalu and traditional curries are popular favourites. Telugu and Urdu are widely spoken, while handloom sarees and traditional attire add colour to festivals and special occasions.',
    festivals:
      'Bathukamma fills Telangana with colourful flower arrangements, songs and graceful dances as women gather in communities. Bonalu is another important celebration, featuring decorated pots, traditional processions and devotional rituals that bring neighbourhoods together.',
  },

  'Tripura': {
    customs:
      'Tripura’s heritage brings together indigenous tribal traditions and Bengali cultural influences. Bamboo crafts, handloom weaving, folk music and traditional dances reflect the creativity of its communities, while ancient customs continue to live alongside modern cultural practices.',
    food:
      'Tripura’s traditional cuisine, known as Mui Borok, makes generous use of rice, fish, bamboo shoots and fermented ingredients. Bengali and Kokborok are widely spoken, while traditional woven garments and bamboo crafts reflect the artistic identity of local communities.',
    festivals:
      'Kharchi Puja is one of Tripura’s important traditional celebrations, bringing together rituals, devotion and community gatherings. Garia Puja celebrates agricultural traditions, while Ker Puja reflects indigenous customs through ceremonies, music and collective participation.',
  },

  'Uttar Pradesh': {
    customs:
      'Uttar Pradesh is a crossroads of art, spirituality and centuries-old traditions. Kathak dance, Chikankari embroidery, Banarasi silk, classical music and magnificent architecture reflect a cultural heritage shaped by royal courts, pilgrimage centres and generations of skilled artisans.',
    food:
      'The food of Uttar Pradesh ranges from rich Awadhi cuisine to beloved everyday street foods. Biryani, kebabs, kachori, peda and Banarasi specialities are widely enjoyed. Hindi and Urdu are commonly spoken, while traditional textiles and clothing vary beautifully across the state.',
    festivals:
      'Uttar Pradesh hosts some of India’s most spectacular celebrations. Diwali illuminates Ayodhya, Holi fills Mathura and Vrindavan with colour, while the Kumbh Mela brings millions of pilgrims together. Music, processions, rituals and fairs turn these occasions into unforgettable cultural experiences.',
  },

  'Uttarakhand': {
    customs:
      'Uttarakhand’s heritage is deeply rooted in Himalayan life and spirituality. Folk songs, traditional dances, woollen crafts, wooden architecture and ancient temple customs reflect communities that have adapted to the mountains while preserving their unique cultural traditions.',
    food:
      'Uttarakhand’s cuisine uses simple local ingredients to create hearty mountain dishes. Kafuli, aloo ke gutke, bhatt ki dal and mandua roti are traditional favourites. Hindi, Garhwali and Kumaoni are widely spoken, while woollen clothing and handcrafted items reflect the mountain lifestyle.',
    festivals:
      'Harela celebrates nature, agriculture and the arrival of the monsoon, while Phool Dei welcomes spring with flowers and traditional customs. The Nanda Devi Raj Jat is a remarkable pilgrimage filled with rituals, songs and community participation across the Himalayan landscape.',
  },

  'West Bengal': {
    customs:
      'West Bengal has a rich cultural world of literature, music, art and craftsmanship. Baul singers, Kantha embroidery, terracotta art, theatre and traditional crafts express a deep love for storytelling, while the state’s intellectual and artistic traditions continue to influence India.',
    food:
      'Bengali cuisine is celebrated for its delicate balance of spices, fish, rice and sweets. Shorshe ilish, fish curry, mishti doi and rasgulla are much-loved favourites. Bengali is the principal language, while traditional sarees, handloom textiles and artistic crafts add to the region’s identity.',
    festivals:
      'Durga Puja transforms West Bengal into a spectacular celebration of art, devotion and community. Elaborate idols and creative pandals fill cities and neighbourhoods with colour, music and lights. The festival brings families and communities together before the idols are carried in grand processions.',
  },
};

const states = names.map(([name, region], i) => ({
  name,
  region,
  tagline: taglines[i],
  image: imgs[i],
  customs: cultureData[name].customs,
  food: cultureData[name].food,
  festivals: cultureData[name].festivals,
}));

const cards = [
  ['customs', 'Customs & Traditions', Sparkles],
  ['food', 'Food, Dress & Languages', Utensils],
  ['festivals', 'Festivals, Fairs & Events', CalendarDays],
];

function Card({ state, type, title, Icon }) {
  const [open, setOpen] = useState(false);

  const number =
    type === 'customs' ? '01' : type === 'food' ? '02' : '03';

  const tag =
    type === 'customs'
      ? 'Heritage'
      : type === 'food'
        ? 'Flavours'
        : 'Celebration';

  const secondTag = type === 'food' ? 'Languages' : 'Community';

  return (
    <article
      className={`overflow-hidden rounded-[25px] border transition-all duration-300 ${
        open
          ? 'border-amber-300/40 bg-white/[0.07]'
          : 'border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.02] hover:-translate-y-1 hover:border-white/25'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="grid min-h-[145px] w-full grid-cols-[48px_1fr_34px] items-center gap-4 bg-transparent p-[22px] text-left text-white"
      >
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-900">
          <Icon size={21} />
        </span>

        <span>
          <small className="block text-[8px] font-black tracking-[0.2em] text-white/25">
            {number}
          </small>

          <strong className="mt-1.5 block text-[15px] leading-tight">
            {title}
          </strong>
        </span>

        <span
          className={`grid h-[34px] w-[34px] place-items-center rounded-full bg-white/10 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <ChevronDown size={17} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden px-[22px]">
          <p className="text-xs leading-[1.8] text-white/50">
            {state[type]}
          </p>

          <div className="flex gap-1.5 pb-6 pt-3.5">
            <span className="rounded-full bg-white/10 px-2.5 py-1.5 text-[8px] uppercase tracking-[0.1em] text-white/45">
              {tag}
            </span>

            <span className="rounded-full bg-white/10 px-2.5 py-1.5 text-[8px] uppercase tracking-[0.1em] text-white/45">
              {secondTag}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function State({ state, i }) {
  return (
    <section
      className="relative border-t border-white/10 py-[75px] md:py-[90px] md:pb-[110px]"
      id={`state-${i}`}
    >
      <div className="pointer-events-none absolute right-0 top-10 select-none text-[115px] font-black leading-none text-white/[0.025] md:text-[180px]">
        {String(i + 1).padStart(2, '0')}
      </div>

      <div
        className={`relative z-10 grid items-center gap-12 md:grid-cols-[0.8fr_1fr] md:gap-[90px] ${
          i % 2
            ? 'md:[&>.state-photo]:order-2 md:[&>.state-copy]:order-1 md:grid-cols-[1fr_0.8fr]'
            : ''
        }`}
      >
        <div className="state-photo relative grid min-h-[300px] place-items-center md:min-h-[370px]">
          <div className="absolute h-[250px] w-[90%] rotate-[-10deg] rounded-full border border-white/10 md:h-[300px]" />

          <div className="absolute h-[270px] w-[80%] rotate-[12deg] rounded-full border border-white/10 md:h-[320px]" />

          <img
            src={state.image}
            alt={state.name}
            className="relative z-20 h-[300px] w-[82%] rounded-[32px] border border-white/10 object-cover shadow-[0_35px_70px_rgba(0,0,0,0.5)] md:h-[350px]"
          />

          <div className="absolute bottom-1 left-[5%] z-30 flex items-center gap-1.5 rounded-full bg-[#09101f]/85 px-3 py-2.5 text-[9px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-md md:bottom-3">
            <MapPin size={14} />
            {state.region}
          </div>
        </div>

        <div className="state-copy">
          <div className="text-[9px] font-black uppercase tracking-[0.23em] text-amber-300">
            STATE {String(i + 1).padStart(2, '0')} / 28
          </div>

          <h2 className="mt-3 text-[48px] font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl md:text-[clamp(48px,5.3vw,76px)]">
            {state.name}
          </h2>

          <p className="mt-4 max-w-[610px] text-lg leading-[1.45] text-white/85">
            {state.tagline}
          </p>

          <p className="mt-5 max-w-[580px] text-[13px] leading-[1.8] text-white/40">
            Discover the people, practices and celebrations that make this
            state a unique chapter in India's shared cultural story.
          </p>
        </div>
      </div>

      <div className="relative z-20 mt-[60px] grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {cards.map(([type, title, Icon]) => (
          <Card
            key={type}
            state={state}
            type={type}
            title={title}
            Icon={Icon}
          />
        ))}
      </div>
    </section>
  );
}

function Culture() {
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState('');

  const visible = states.filter((state) =>
    state.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-transparent font-sans text-slate-900">

      {/* =========================================
          THREE.JS BACKGROUND
          ========================================= */}
      <ThreeBackground />

      {/* =========================================
          ALL CULTURE CONTENT
          ========================================= */}
      <div className="relative z-10">

        {/* NAVBAR */}
        <header className="fixed left-1/2 top-2 z-50 flex h-16 w-[calc(100%-16px)] -translate-x-1/2 items-center gap-4 rounded-[22px] border border-white/10 bg-[#09101f]/95 px-3.5 py-2 text-white shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-xl md:top-3.5 md:w-[min(1180px,calc(100%-28px))] md:gap-6">

          <a href="#top" className="flex items-center gap-2.5">
            <b className="grid h-[39px] w-[39px] place-items-center rounded-xl bg-white font-serif text-[21px] font-black text-[#0a1020]">
              S
            </b>

            <span>
              <strong className="block text-[13px]">
                Sanskritik Setu
              </strong>

              <small className="mt-0.5 block text-[8px] uppercase tracking-[0.22em] text-white/35">
                Indian Heritage
              </small>
            </span>
          </a>

          <div
            className={`absolute left-0 right-0 top-[70px] flex-col gap-5 rounded-[20px] border border-white/10 bg-[#09101f] p-5 md:static md:ml-auto md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0 ${
              menu ? 'flex' : 'hidden'
            }`}
          >
            <a
              href="#top"
              className="text-xs text-white/60 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#culture"
              className="text-xs text-white/60 transition hover:text-white"
            >
              Culture
            </a>

            <a
              href="#states"
              className="text-xs text-white/60 transition hover:text-white"
            >
              States
            </a>
          </div>

          <a
            href="#states"
            className="ml-auto hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[11px] font-extrabold text-[#0a1020] md:flex"
          >
            Explore India
            <ArrowRight size={14} />
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenu(!menu)}
            className="ml-auto text-white md:hidden"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </header>

        <main id="top">

          {/* =========================================
              HERO
              ========================================= */}
          <section className="relative flex min-h-[760px] items-center bg-transparent px-5 pb-16 pt-32 text-white sm:min-h-[820px] md:min-h-[880px] md:px-[7vw] md:py-[145px]">

            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(transparent_43px,rgba(255,255,255,0.05)_44px),linear-gradient(90deg,transparent_43px,rgba(255,255,255,0.05)_44px)] [background-size:44px_44px] [mask-image:linear-gradient(#000,transparent_92%)]" />

            <div className="relative z-10 mx-auto grid w-full max-w-[1180px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-[70px]">

              <div>
                <div className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[9px] font-black uppercase tracking-[0.23em] text-white/50">
                  28 states • one living heritage
                </div>

                <h1 className="mt-6 text-[55px] font-black leading-[0.88] tracking-[-0.065em] sm:text-7xl md:text-[clamp(58px,7vw,92px)]">
                  Culture
                  <br />
                  <span className="text-slate-300">
                    and Traditions
                  </span>
                </h1>

                <p className="mt-7 max-w-[520px] text-[15px] leading-[1.85] text-white/55">
                  Discover the customs, flavours, languages, attire and
                  celebrations that make every corner of India a living story.
                </p>

                <a
                  href="#culture"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-xs font-black text-[#0a1020]"
                >
                  Begin the journey
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* HERO IMAGES */}
              <div className="relative h-[410px] sm:h-[500px] md:h-[560px]">

                <div className="absolute bottom-10 left-[2%] h-[185px] w-[56%] rotate-[-6deg] overflow-hidden rounded-[28px] border border-white/10 opacity-80 shadow-[0_25px_60px_rgba(0,0,0,0.4)] md:h-[250px] md:w-[46%]">
                  <img
                    src={imgs[0]}
                    alt="Indian heritage"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute right-[6%] top-[85px] z-20 h-[340px] w-[88%] rotate-1 overflow-hidden rounded-[36px] border border-white/10 shadow-[0_35px_80px_rgba(0,0,0,0.5)] transition duration-500 hover:-translate-y-2 hover:scale-[1.02] md:right-[18%] md:h-[350px] md:w-[55%]">

                  <img
                    src={img}
                    alt="Indian culture"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050a16]/90" />

                  <div className="absolute bottom-6 left-7">
                    <small className="block text-[9px] uppercase tracking-[0.2em] text-white/50">
                      Living heritage
                    </small>

                    <strong className="mt-1 block text-[22px]">
                      Across every region
                    </strong>
                  </div>
                </div>

                <div className="absolute right-0 top-5 z-40 rounded-[17px] border border-white/10 bg-white/[0.08] px-4 py-3 shadow-xl backdrop-blur-md">
                  <b className="text-[22px]">28</b>
                  <span className="ml-1 text-[9px] uppercase tracking-[0.15em] text-white/45">
                    states
                  </span>
                </div>

                <div className="absolute bottom-1 left-0 z-40 rounded-[17px] border border-white/10 bg-white/[0.08] px-3.5 py-3 text-[9px] uppercase tracking-[0.13em] text-white/65 backdrop-blur-md">
                  Customs • Food • Festivals
                </div>

                <div className="absolute left-0 top-0 z-30 hidden h-[165px] w-[245px] overflow-hidden rounded-[20px] border-[3px] border-white/30 shadow-xl transition duration-300 hover:z-50 hover:scale-110 md:block">
                  <img
                    src={imgs[3]}
                    alt="Indian culture"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute left-[-4%] top-[205px] z-30 hidden h-[150px] w-[220px] overflow-hidden rounded-[20px] border-[3px] border-white/30 shadow-xl transition duration-300 hover:z-50 hover:scale-110 md:block">
                  <img
                    src={imgs[7]}
                    alt="Indian tradition"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-[3%] z-30 hidden h-[180px] w-[270px] overflow-hidden rounded-[20px] border-[3px] border-white/30 shadow-xl transition duration-300 hover:z-50 hover:scale-110 md:block">
                  <img
                    src={imgs[10]}
                    alt="Indian heritage"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute right-[-4%] top-0 z-30 hidden h-[160px] w-[235px] overflow-hidden rounded-[20px] border-[3px] border-white/30 shadow-xl transition duration-300 hover:z-50 hover:scale-110 md:block">
                  <img
                    src={imgs[14]}
                    alt="Indian art"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 right-[-5%] z-30 hidden h-[175px] w-[260px] overflow-hidden rounded-[20px] border-[3px] border-white/30 shadow-xl transition duration-300 hover:z-50 hover:scale-110 md:block">
                  <img
                    src={imgs[19]}
                    alt="Indian culture"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-7 left-5 right-5 flex items-center gap-3.5 text-[9px] tracking-[0.18em] text-white/30 md:left-[7vw] md:right-[7vw]">
              SCROLL TO DISCOVER
              <i className="block h-px w-[70px] bg-white/20" />
              01 — 28
            </div>
          </section>

          {/* =========================================
              INTRO
              ========================================= */}
          <section
            className="bg-transparent px-5 py-24 md:px-[7vw] md:py-[115px]"
            id="culture"
          >
            <div className="text-[9px] font-black uppercase tracking-[0.23em] text-white/50">
              A visual journey through India
            </div>

            <div className="mx-auto mt-5 grid w-full max-w-[1180px] items-end gap-8 md:grid-cols-[1fr_0.8fr] md:gap-[100px]">

              <h2 className="text-[48px] font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl md:text-[clamp(48px,5vw,70px)]">
                Every state has
                <br />
                <span className="text-white/40">
                  its own rhythm.
                </span>
              </h2>

              <p className="text-sm leading-[1.9] text-white/55">
                Culture lives in what we cook, wear, speak, celebrate and pass
                on. Scroll through each state as a chapter and open the three
                cultural boxes to reveal more.
              </p>
            </div>

            <div className="mx-auto mt-[60px] grid w-full max-w-[1180px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] shadow-[0_25px_70px_rgba(0,0,0,0.2)] md:mt-[75px] md:min-h-[330px] md:grid-cols-[1.2fr_0.8fr]">

              <img
                src={imgs[3]}
                alt="Indian heritage architecture"
                className="h-[280px] w-full object-cover md:h-full md:min-h-[330px]"
              />

              <div className="flex flex-col justify-center p-9 md:p-[55px]">

                <small className="text-[9px] font-black tracking-[0.2em] text-white/40">
                  THE THREAD THAT CONNECTS US
                </small>

                <h3 className="my-3 text-[34px] font-black leading-[1.03] tracking-[-0.05em] text-white">
                  Different traditions.
                  <br />
                  One shared story.
                </h3>

                <p className="text-[13px] leading-[1.8] text-white/50">
                  The page is designed as a continuous visual journey, so the
                  user discovers all 28 states simply by scrolling.
                </p>
              </div>
            </div>
          </section>

          {/* =========================================
              STATES
              ========================================= */}
          <section
            className="bg-transparent px-5 pt-24 text-white md:px-[7vw] md:pt-[110px]"
            id="states"
          >
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-7 md:flex-row md:items-end">

              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.23em] text-white/40">
                  28 chapters of culture
                </div>

                <h2 className="mt-4 text-[50px] font-black leading-[0.93] tracking-[-0.06em]">
                  Find your state.
                  <br />
                  <span className="text-white/20">
                    Follow its story.
                  </span>
                </h2>
              </div>

              <label className="flex w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-3 text-white/50 md:w-[260px]">

                <Search size={16} />

                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search a state..."
                  className="w-full bg-transparent text-[11px] text-white outline-none placeholder:text-white/30"
                />
              </label>
            </div>

            <div className="mx-auto mt-14 w-full max-w-[1180px] md:mt-[65px]">

              {visible.length > 0 ? (
                visible.map((state) => (
                  <State
                    key={state.name}
                    state={state}
                    i={states.indexOf(state)}
                  />
                ))
              ) : (
                <div className="border-t border-white/10 py-20 text-center text-white/50">
                  No state found. Try another search.
                </div>
              )}

            </div>
          </section>

          {/* =========================================
              FOOTER
              ========================================= */}
          <footer className="flex flex-col justify-between gap-8 border-t border-white/10 bg-transparent px-5 py-10 text-white md:flex-row md:gap-8 md:px-[7vw] md:py-[45px]">

            <div className="grid grid-cols-[39px_auto] gap-x-3">

              <b className="row-span-2 grid h-[39px] w-[39px] place-items-center rounded-xl bg-white font-serif text-[21px] font-black text-[#0a1020]">
                S
              </b>

              <strong className="self-end text-[13px]">
                Sanskritik Setu
              </strong>

              <span className="text-[10px] text-white/30">
                Connecting India through its living heritage.
              </span>
            </div>

            <div className="flex items-start gap-6 text-[10px] uppercase tracking-[0.15em] text-white/40 md:items-center md:gap-7">

              <a href="#top" className="hover:text-white">
                Home
              </a>

              <a href="#culture" className="hover:text-white">
                Culture
              </a>

              <a href="#states" className="hover:text-white">
                28 States
              </a>
            </div>

          </footer>

        </main>
      </div>
    </div>
  );
}

export default Culture;


export type VideoGuide = { url: string; label: string; channel: string; language: string; note?: string };
export type ExerciseGuide = VideoGuide & {
  instruction: string;
  tracking: 'strength' | 'reps' | 'shots' | 'time';
  restSeconds: number;
};

// Direct YouTube lessons. Updated targeted links on 2026-10-26; chapter offsets
// are taken from the publishers' chapter lists. FastRep sets/reps are our own.
const video = (id: string, label: string, channel: string, seconds = 0): VideoGuide => ({
  url: `https://www.youtube.com/watch?v=${id}${seconds ? `&t=${seconds}s` : ''}`,
  label: `Katso: ${label}`, channel, language: 'englanniksi',
});
const exercise = (id: string, label: string, channel: string, instruction: string, tracking: ExerciseGuide['tracking'] = 'reps', restSeconds = 60, seconds = 0): ExerciseGuide => ({
  ...video(id, label, channel, seconds), instruction, tracking, restSeconds,
});
const scott = 'Scott Herman';
const e3 = 'E3 Rehab';
const shot = 'Coach Tom · Shot Science';
const meech = 'Coach Meech · ILoveBasketballTV';

export const exerciseGuides: Record<string, ExerciseGuide> = {
  'Koripallon dynaaminen lämmittely': exercise('8hdqQyX8y1o', 'koripallon dynaaminen alkulämmittely', 'Alan Stein · Shot Science', 'Liiku 5 minuuttia: kevyt juoksu, sivuaskel, polvennosto ja suunnanmuutos videon rytmissä. Aloita rauhallisesti ja lisää vauhtia asteittain. Pakaran aktivointi ja matalat hypyt tulevat seuraavissa liikkeissä.', 'time', 30),
  'Pakarasilta – aktivointi': exercise('8bbE64NuDTU', 'pakarasilta', scott, 'Asetu selälleen, jalkapohjat lattialla lähellä pakaroita. Paina kantapäät alustaan, nosta lantio ja purista pakarat hetkeksi; laske hallitusti. Älä työnnä alaselkää voimakkaalle kaarelle.', 'reps', 30),
  'Kevyet pogo-hypyt': exercise('bjzgqbQp_k0', 'pogo-hypyt koripalloilijalle (videon alku)', 'Coach Alan Stein · DeepGame', 'Seiso ryhdikkäästi ja tee 10 pientä joustoa päkiöiltä paikallaan. Polvissa on vain pieni jousto; pidä maakosketus kevyenä. Tämä on alkulämmittelyn matala versio, ei videon myöhemmät raskaat hypyt.', 'reps', 45),
  'Goblet-kyykky': exercise('JO7D6GJ98wY', 'goblet-kyykky', 'Jack Hanrahan', 'Pidä käsipaino tai kahvakuula lähellä rintaa. Laskeudu jalkojen väliin niin syvälle kuin pystyt pitämään kantapäät maassa ja selän hallinnassa. Nouse koko jalkapohjan kautta; älä anna polvien romahtaa sisään.', 'strength', 90),
  'Punnerrus': exercise('wxhNoKZlfY8', 'punnerrus', scott, 'Aseta kädet hieman hartioita leveämmälle ja pidä pää, lantio ja kantapäät samassa linjassa. Laske rintaa kohti lattiaa, kyynärpäät vinosti taakse, ja työnnä ylös. Jos asento pettää, tee liike kädet penkillä.', 'reps', 90),
  'Käsipainosoutu': exercise('pYcpY20QaE8', 'yhden käden käsipainosoutu', scott, 'Tue vastakkainen käsi vakaaseen penkkiin ja pidä selkä suorana. Vedä käsipainon kyynärpää kohti lantiota ja laske paino rauhassa. Pidä molemmat lonkat eteenpäin; tee yhtä monta toistoa kummallekin puolelle.', 'strength', 90),
  'Dead bug': exercise('BZYaCzbP09M', 'dead bug', e3, 'Asetu selällesi, kädet ylös ja polvet 90 asteeseen. Ojenna vastakkainen käsi ja jalka hitaasti lähelle lattiaa, palauta ja vaihda puolta. Pidä alaselkä ja kyljet hallinnassa; lyhennä ojennusta jos lantio liikkuu.', 'reps', 45),
  'Kyykkyhyppy': exercise('DeTBwEL4m7s', 'kyykkyhyppy', scott, 'Seiso hartianlevyisessä asennossa, tee lyhyt jousto ja ponnista suoraan ylös ilman lisäpainoa. Laskeudu pehmeästi molemmille jaloille ja pysäytä asento ennen seuraavaa hyppyä. Tee vain kolme laadukasta hyppyä kerrallaan.', 'reps', 180),
  'Vauhditon pituushyppy': exercise('CpmTk9kmdm8', 'vauhditon pituushyppy', 'Brandon Hall · STACK', 'Varaa eteen tyhjää, pitävää tilaa. Heilauta kädet taakse, ponnista kahdelta jalalta eteen ja laskeudu kahdelle jalalle polvista joustaen. Pysähdy tasapainoon ennen kuin kävelet takaisin.', 'reps', 180),
  'Sivuttaisloikka ja pito': exercise('atk4R0SclS8', 'sivuttaisloikka ja tasapaino', 'Tim Welsh · RADCENTRE', 'Ponnista yhdeltä jalalta sivulle ja laskeudu toiselle. Pidä alastulo vakaana noin sekunti ennen seuraavaa loikkaa. Aloita lyhyestä matkasta; polvi seuraa varpaiden suuntaa.', 'reps', 120),
  'Nilkka – polvi seinään': exercise('KmiPXKmoUbs', 'nilkan polvi seinään -liike', e3, 'Aseta varpaat muutaman sentin päähän seinästä. Vie polvi kohti seinää samaan suuntaan varpaiden kanssa pitäen kantapään maassa; palauta hitaasti. Siirrä jalkaa lähemmäs, jos kantapää nousee.', 'reps', 30),
  'Lonkan 90/90-kierto': exercise('ZLmzx9Un9gk', 'lonkan 90/90-liikkuvuus', 'Tom Merrick', 'Istu lattialle molemmat polvet koukussa noin 90 asteeseen, toinen jalka edessä. Käännä polvet rauhassa toiselle puolelle ja pidä istuinluut lähellä lattiaa. Ota käsistä tukea; älä paina polvia väkisin alas.', 'reps', 30, 35),
  'Rintarangan kierto konttausasennossa': exercise('ADeGAWCDjhQ', 'rintarangan kierto konttausasennossa', e3, 'Asetu konttausasentoon ja vie toinen käsi pään taakse. Kierrä kyynärpää kohti kattoa ja palauta alas rauhassa. Pidä lantio mahdollisimman paikallaan ja vaihda puolta sarjan jälkeen.', 'reps', 30),
  'Sivulankku': exercise('eRygfYEe1hs', 'sivulankku', e3, 'Aseta kyynärpää suoraan olkapään alle ja jalat päällekkäin tai toinen eteen. Nosta lantio niin, että vartalo on suorassa; hengitä koko pidon ajan. Tee sama aika molemmille puolille, kevennä polvilta tarvittaessa.', 'time', 45),
  'Bird dog': exercise('egKWoMZ6cXM', 'bird dog', e3, 'Asetu konttausasentoon ja tue keskivartalo. Ojenna vastakkainen käsi ja jalka pitkiksi, pysäytä hetkeksi ja palauta; vaihda puolta. Pidä lantio suunnattuna lattiaan, älä nosta jalkaa korkealle.', 'reps', 45),
  'Bulgarialainen askelkyykky': exercise('2C-uNgKwPLE', 'bulgarialainen askelkyykky', scott, 'Aseta takajalka vakaalle, matalalle penkille ja etujalka riittävän kauas eteen. Laskeudu lähes suoraan alas, pidä paino etujalalla ja nouse sen kautta. Harjoittele ensin ilman painoja ja ota tarvittaessa tukea.', 'strength', 120),
  'Romanialainen maastaveto käsipainoilla': exercise('6T4q4iagIS8', 'käsipainojen romanialainen maastaveto', 'Jeff Nippard', 'Pidä painot reisien edessä ja polvissa pieni pysyvä jousto. Työnnä lantio taakse niin, että painot liukuvat lähellä jalkoja; pysähdy, kun takareisissä tuntuu venytys ja selkä on vielä hallittu. Nouse ojentamalla lantio, älä tempaa käsillä.', 'strength', 120),
  'Yhden jalan pohjenousu': exercise('ORT4oJ_R8Qs', 'yhden jalan pohjenousu', scott, 'Ota sormenpäillä kevyt tuki seinästä. Nouse yhden jalan päkiälle mahdollisimman ylös ja laske kantapää rauhallisesti alas. Pidä nilkka suorassa ja tee sarja myös toiselle jalalle.', 'strength', 60),
  'Käsipainopystypunnerrus': exercise('GFblCmuEE18', 'käsipainopystypunnerrus', scott, 'Istu vakaalla penkillä, painot olkapäiden tasolla ja jalkapohjat maassa. Punnerra painot ylös hallitusti ja laske takaisin korvien tasolle. Pidä kyljet hallinnassa; älä kallistu voimakkaasti taakse.', 'strength', 90),
  'Vasarakääntö': exercise('zC3nLlEvin4', 'vasarakääntö', scott, 'Pidä käsipainot sivuilla, kämmenet toisiaan kohti. Koukuista kyynärpäätä ilman olkavarren heilumista ja laske paino hitaasti. Pidä vartalo paikallaan, valitse kevyempi paino jos tarvitset vauhtia.', 'strength', 60),
  'Ojentajapunnerrus käsipainoilla makuulla': exercise('MO_03opCc0g', 'ojentajapunnerrus käsipainoilla', scott, 'Asetu tukevalle penkille painot käsissä rinnan yläpuolella. Taivuta vain kyynärpäitä ja laske painot kohti pään sivuja, ojenna takaisin. Käytä painoja, jotka saat turvallisesti alkuasentoon ja alas yksin.', 'strength', 60),
  'Mikan-viimeistely': exercise('ho9GJkWyuYQ', 'Mikan-harjoite', 'Jordan Fliegel · CoachUp', 'Seiso aivan korin alla. Nouse vuorotellen oikealta ja vasemmalta, viimeistele laudan kautta ulommalla kädellä ja ota oma levypallo kiinni ennen seuraavaa puolta. Laske sarjaan yritykset yhteensä.', 'shots', 45),
  'Saman jalan ja käden viimeistely': exercise('aWuh9lNkMk8', 'saman jalan ja käden korinalusheitto', meech, 'Lähde läheltä koria. Ponnista oikealta oikealta jalalta ja viimeistele oikealla kädellä; tee vasen puoli peilikuvana. Ota oma levypallo, älä lisää vauhtia ennen kuin rytmi pysyy hallussa.', 'shots', 60, 193),
  'Eurostep-viimeistely': exercise('aWuh9lNkMk8', 'eurostep-viimeistely', meech, 'Kuljeta kohti koria, ota pallo käsiin ja astu kaksi sallittua askelta suunnanvaihdolla kuvitteellisen puolustajan ohi. Ponnista ja viimeistele hallitusti. Tee kumpikin puoli ja hae oma levypallo.', 'shots', 60, 285),
  'Drop step korin alla': exercise('4bndda2KIVA', 'drop step korin alla', shot, 'Aloita alablokista selkä kohti koria ja heitä pallo itsellesi pomppuun. Ota pallo haltuun, kierrä korinpuoleinen jalka lähelle koria ja viimeistele laudan kautta. Pidä tukijalka paikallaan ennen ensimmäistä askelta.', 'shots', 60),
  'Midrange viidestä paikasta': exercise('BYXRkytxlcI', 'viiden paikan midrange-heittosarja', 'Justin Razzano', 'Valitse viisi paikkaa keskimatkalta: kaksi kulmaa, kaksi kyynärpäätä ja keskikohta. Anna syöttö itsellesi, pysähdy tasapainoon ja heitä viisi kertaa jokaisesta. Hae levypallo itse ja merkitse myös yritykset.', 'shots', 45),
  'Yhden pompun pull-up': exercise('aWuh9lNkMk8', 'yhden pompun pull-up kyynärpäästä', meech, 'Aloita siiveltä pallo hallussa. Ota yksi terävä pomppu kohti kyynärpäätä, pysähdy molemmille jaloille ja nouse heittoon. Tee vasen ja oikea puoli; hae oma levypallo.', 'shots', 60, 379),
  'Midrange stepback': exercise('rysH_bds8mU', 'stepback-hypyn jalkatyö', 'Collin Castellaw · ShotMechanics', 'Harjoittele ensin askel taakse ja tasapainoinen pysähdys ilman palloa. Lisää yksi kuljetus ja ponnista taakse tilaa tehden; pysähdy ennen heittoa niin, ettei vartalo kaadu taakse. Heitä molemmilta puolilta ja hae levypallo itse.', 'shots', 60),
  'Kolmosen voimantuotto': exercise('prUyWk7awr8', 'jalkojen käyttö kaukoheitossa', shot, 'Aloita lähempää koria, pallo heittotaskussa ja polvissa kevyt jousto. Ojenna jalat ja nosta pallo samaan jatkuvaan rytmiin; pidä heittokäsi saatossa. Siirry kolmosviivalle vasta, kun et joudu työntämään palloa kahdella kädellä.', 'shots', 45),
  'Kolmoset vaihtelevalla jalkatyöllä': exercise('aWuh9lNkMk8', 'kolmosen vaihteleva jalkatyö', meech, 'Valitse viisi paikkaa kaaren takaa. Anna pallo itsellesi pompulla ja vaihtele 1–2-pysähdystä sekä pientä hyppypysähdystä heittoon. Tee viisi heittoa per paikka ja hae oma levypallo; pidä jalat tasapainossa.', 'shots', 60, 459),
  'Vapaaheitot': exercise('0343D3fjPnQ', 'vapaaheiton rutiini ja tekniikka', 'Collin Castellaw · ShotMechanics', 'Asetu viivalle aina samalla tavalla. Valitse katseelle kohde, hengitä ja käytä samaa valmistautumisrutiinia joka heitolla. Heitä 20 tavallista vapaaheittoa, hae pallo itse ja merkitse osumat erikseen.', 'shots', 45),
  'Seinäsyötöt': exercise('LKlxJyKflsI', 'seinäsyöttöharjoite', 'Steve Collins · Teach Hoops', 'Merkitse pallotteluun sopivaan vapaaseen seinään kohde rinnan korkeudelle. Syötä terävästi kahdella kädellä, astu syöttöön ja ota palautuva pallo kiinni valmiissa asennossa. Vaihda välillä pomppusyöttöön; laske syötöt.', 'reps', 45),
  'Soolosyöttö ja kiinniotto': exercise('gm6J905nD-8', 'kolme soolosyöttöharjoitetta', 'Jesse Muench · Get Handles', 'Heitä pallo itsellesi hallitulla kaarella tai pompulla, liiku sen alle ja ota kiinni tasapainossa. Tee videon kolme variaatiota, yksi per 45 sekunnin sarja. Varaa tilaa; seinää tai harjoitusparia ei tarvita.', 'time', 45),
  'Puolustusliuku': exercise('D4TX7F1cnT4', 'puolustajan liikkumistekniikka', 'Gordon McLeod · FIBA', 'Asetu matalaan puolustusasentoon kahden merkin väliin 3–4 metrin matkalle. Työnnä liike takimmaisella jalalla sivulle, pidä jalat erillään ja palaa samaa reittiä. Älä risti jalkoja; tee 20 sekuntia.', 'time', 60),
  'Closeout ja pysähdys': exercise('D4TX7F1cnT4', 'puolustuksen closeout-jalkatyö', 'Gordon McLeod · FIBA', 'Aseta merkki 3–5 metrin päähän kuvitteelliseksi heittäjäksi. Kiihdytä merkille, hidasta viimeisillä askelilla ja pysähdy matalaan asentoon yksi käsi ylhäällä. Pysy tasapainossa, älä hyppää ohi; palaa kävellen takaisin.', 'reps', 60),
  'Puolustuksen soolojalkatyö': exercise('3dkkDwwx8Bs', 'puolustuksen sooloharjoite (alkaa 2:23)', 'Charlie Miller · ATTACKBball', 'Aseta kaksi merkkiä ja katso videon soolo-osuus kohdasta 2:23. Liiku sivulle, vaihda suuntaa pysähtymättä pystyyn ja palauta puolustusasento jokaisen vaihdon jälkeen. Tee 30 sekuntia ensin rauhallisesti, sitten pelivauhdilla.', 'time', 60, 143),
};

export const skillGuides: Record<string, VideoGuide> = {
  crossover: video('6oa1UgVc_4U', 'crossoverin tekniikka', shot),
  hesitation: video('EyYbMJzrKYs', 'hesitation-harhautus', shot),
  footwork: { ...video('S7X5E-rtjjA', 'jump stop ja pivot', shot), note: 'Anna syöttö itsellesi ja tee pysähdys sekä pivotit ilman paria.' },
};
export const challengeGuides: Record<string, VideoGuide> = {
  free20: { ...exerciseGuides['Vapaaheitot'], note: 'Käytä videon valmistautumisrutiinia. FastRepin haasteessa heitetään 20 tavallista vapaaheittoa.' },
  minute: { ...exerciseGuides['Yhden pompun pull-up'], note: 'Video näyttää heittotekniikan. Haasteessa kirjaat omat heittosi 60 sekunnin ajan ja haet levypallot itse.' },
  around: { ...exerciseGuides['Midrange viidestä paikasta'], note: 'FastRepin haasteessa heität viisi kertaa jokaisesta viidestä paikasta. Anna syötöt itsellesi.' },
};

// Historical exercise names retain relevant guides where the movement is unchanged.
exerciseGuides['Alkulämmittely'] = exerciseGuides['Koripallon dynaaminen lämmittely'];
exerciseGuides['Heitto viidestä paikasta'] = exerciseGuides['Midrange viidestä paikasta'];
exerciseGuides['Pysähdys ja heitto'] = exerciseGuides['Yhden pompun pull-up'];
exerciseGuides['Nilkan liikkuvuus'] = exerciseGuides['Nilkka – polvi seinään'];
exerciseGuides['Lonkan avaus'] = exerciseGuides['Lonkan 90/90-kierto'];
exerciseGuides['Rintarangan kierto'] = exerciseGuides['Rintarangan kierto konttausasennossa'];
exerciseGuides['Alkulämmittely pallolla'] = exercise('BV2M_G0BMWA', 'viiden minuutin pallonkäsittelylämmittely', 'Coach Drew Hanlen · DeepGame', 'Aloita rauhallisella pomputuksella ja seuraa videon viiden minuutin pallonkäsittelyä. Tee liikkeet omassa rytmissä, katse välillä ylös. Pidä pallolle vapaa tila ja aloita kevyesti.', 'time', 30);
exerciseGuides['Lähiheitot yhdellä kädellä'] = exercise('wzY4SVCzF7Y', 'yhden käden lähietäisyyden heitot', 'Coach Pierre Parker · Dr. Dish Basketball', 'Aloita aivan korin alta, pallo heittokädellä ja toinen käsi vain tasapainottamassa. Ojenna kyynärpää pehmeästi kohti koria, pidä saatto ja hae oma levypallo. Tee 10 heittoa per sarja; videon muut vaiheet ovat lisäharjoituksia.', 'shots', 45);
exerciseGuides['Askelkyykky'] = exercise('vni4lElTvsY', 'askelkyykyn tekniikka', 'Jeff Nippard', 'Astu pitkä askel eteen, laskeudu hallitusti ja ponnista takaisin lähtöasentoon. Pidä etujalka tukevasti maassa ja polvi varpaiden suuntaan. Videolla liike tehdään kävellen; vanhassa ohjelmassa voit tehdä sen paikallaan.', 'reps', 90);

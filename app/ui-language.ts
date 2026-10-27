import { foodProfiles } from './food-ai';

export type AppLanguage = 'fi' | 'en';
export type AppTheme = 'light' | 'dark';

// The Finnish copy stays in the existing components. Exact UI phrases are
// translated here so that saved workout names and meal data are never rewritten.
const en: Record<string, string> = {
  'Siirry sisältöön':'Skip to content', 'FastRep etusivu':'FastRep home', 'OMA PELIKENTTÄSI':'YOUR COURT',
  'Päänavigaatio':'Main navigation', 'Tänään':'Today', 'Treenit':'Workouts', 'Heitto-AI':'Shot AI',
  'Makrot':'Macros', 'Kenttä':'Court', 'Ravinto':'Nutrition', 'Kehitys':'Progress', 'Lisää':'More',
  'Oma pelikenttä':'Your court', 'Oma profiili':'My profile', 'Avaa palkinnot':'View rewards',
  'Asetukset':'Settings', 'Ulkoasu':'Appearance', 'Kieli':'Language', 'Vaalea':'Light', 'Tumma':'Dark',
  'Suomi':'Finnish', 'Englanti':'English', 'Sulje':'Close', 'Tiedot tallentuvat tähän selaimeen.':'Your data is saved in this browser.',
  'Varmuuskopioi':'Back up', 'UUSI PÄIVÄ. UUSI TOISTO.':'NEW DAY. NEW REP.', 'Sun peli. Sun kehitys.':'Your game. Your progress.',
  'Kaikki valmiina seuraavaan harjoitukseen.':'Ready for your next workout.',
  'Päivän treeni on kirjattu. Anna myös palautumiselle aikaa.':'Today’s workout is logged. Make time to recover.',
  'Oma tavoite':'Your goal', 'VALMIINA TREENIIN':'READY TO TRAIN', 'JATKA SIITÄ MIHIN JÄIT':'PICK UP WHERE YOU LEFT OFF',
  'Aloita treeni':'Start workout', 'Jatka treeniä':'Resume workout', 'Valitse toinen harjoitus':'Choose another workout',
  'OMA VIIKKOTAVOITE':'WEEKLY GOAL', 'treeniä / 7 päivää':'workouts / 7 days',
  'Katso oma kehitys':'See your progress', 'Makrolaskuri':'Macro calculator', 'Tavoite ja kuva-AI':'Goal and photo AI',
  'Heittohaaste':'Shooting challenge', '20 heittoa. Oma ennätys.':'20 shots. Your personal best.',
  'Analysoi oma heittosi':'Analyze your shot', 'Viimeisimmät suoritukset':'Recent activity',
  'Päiväkirja':'Journal', 'Ensimmäinen toisto aloittaa tarinan.':'Every journey starts with one rep.',
  'Aloita harjoitus tai heittohaaste. Näet tuloksesi täällä.':'Start a workout or shooting challenge. Your results will appear here.',
  'Tutustu harjoituksiin':'Explore workouts', 'Ravinto tänään':'Nutrition today', 'kcal kirjattu':'kcal logged',
  'Proteiini':'Protein', 'Hiilihydraatit':'Carbs', 'Rasva':'Fat', 'Energia':'Energy',
  'Avaa makrolaskuri':'Open macro calculator', 'Laske makrotavoite':'Set macro target',
  'Heittotarkkuus alkaa ensimmäisestä haasteesta.':'Your shot accuracy begins with the first challenge.',
  'MAKROT':'MACROS', 'Laske ja seuraa makroja.':'Calculate and track macros.',
  'Aseta päivän tavoite, arvioi ateria kuvasta ja katso paljonko on jäljellä.':'Set a daily target, estimate a meal from a photo, and see what remains.',
  'OMA TAVOITE':'YOUR GOAL', 'ATERIA KUVASTA':'MEAL FROM A PHOTO',
  'Kuvaa ruoka, tarkista arvio.':'Photograph your food and check the estimate.',
  'AI ehdottaa ruokalajia. Anna annoksen paino grammoina ja korjaa ruoka tarvittaessa ennen tallennusta.':'AI suggests a dish. Enter the portion weight and correct the food before saving.',
  'Avaa kuva-AI':'Open photo AI',
  'ATERIA KUVASTA TAI TEKSTISTÄ':'MEAL FROM PHOTO OR TEXT',
  'Kerro mitä söit.':'Describe your meal.',
  'Lisää kuva tai kirjoita annoksen sisältö ja määrät. Näet arvion, voit täydentää grammoja ja korjata makrot ennen tallennusta.':'Add a photo or describe your meal and amounts. Review the estimate, fill in weights and correct macros before saving.',
  'Avaa ateria-arvio':'Open meal estimate',
  'Kuva ei paljasta annoksen painoa tai tarkkoja makroja. Kirjoitetusta kuvauksesta tunnistetaan rajattu joukko ruokia.':'A photo cannot reveal exact portion weight or macros. Text matching covers a limited food list.',
  'Kuva ei paljasta annoksen painoa tai tarkkoja makroja. Voit myös koostaa annoksen raaka-aineista.':'A photo cannot reveal portion weight or exact macros. You can also build the meal from ingredients.',
  'TÄNÄÄN':'TODAY', 'Tavoitteen etenemä':'Goal progress', 'Päivän kertymä':'Today’s total',
  'Tallenna tavoite laskurilla. Sitten näet tästä päivän jäljellä olevat määrät.':'Save a goal in the calculator to see what remains for today.',
  'Avaa ateriapäiväkirja':'Open food journal', 'Aseta oma päiväkohtainen tavoite':'Set your daily target',
  'Laskuri muuttaa proteiinin ja rasvan jälkeen jäljelle jäävän energian hiilihydraateiksi.':'The calculator assigns the remaining calories to carbohydrates after protein and fat.',
  'Päivän energia (kcal)':'Daily energy (kcal)', 'Proteiini (g)':'Protein (g)', 'Rasva (g)':'Fat (g)',
  'Laskettu hiilihydraatti':'Calculated carbohydrates',
  'Tämä on matemaattinen laskuri, ei henkilökohtainen ravitsemussuositus. Säädä tavoite oman valmentajan tai ravitsemusammattilaisen kanssa.':'This is a mathematical calculator, not a personal nutrition recommendation. Adjust the goal with your coach or dietitian.',
  'Tallenna makrotavoite':'Save macro target', 'Makrotavoite tallennettu.':'Macro target saved.',
  'Muokkaa makrotavoitetta':'Edit macro target', 'Aseta makrotavoite':'Set macro target',
  'Kuva + kuvaus = parempi arvio':'Photo + description = a better estimate',
  'AI tunnistaa kuvasta ruokalajiehdotuksen. Kirjoita annoksen sisältö ja määrät, niin voit laskea tutut raaka-aineet erikseen. Tarkista arvot aina itse.':'AI suggests a dish from the photo. Describe the ingredients and amounts to calculate known foods separately. Always check the values.',
  'Mitä annoksessa on?':'What is in the meal?',
  'Esim. 150 g kanaa, 200 g riisiä ja 100 g kasviksia':'E.g. 150 g chicken, 200 g rice and 100 g vegetables',
  'Voit käyttää pelkkää kuvausta tai lisätä kuvan. Kerro grammamäärät, jos tiedät ne.':'Use a description alone or add a photo. Include weights if you know them.',
  'Tunnistetut raaka-aineet':'Recognized ingredients', 'Paino':'Weight',
  'Kuvaile esimerkiksi kanaa, riisiä, pastaa, tofua, perunaa tai lohta. Kaikkia ruokia ei vielä tunnisteta tekstistä.':'Try chicken, rice, pasta, tofu, potatoes or salmon. Text recognition does not cover every food yet.',
  'Täydennä jokaisen raaka-aineen paino grammoina.':'Enter the weight of every ingredient in grams.',
  'Käytä kuvauslaskelmaa ja tarkista':'Use description estimate and review',
  'Tekstin tunnistus perustuu rajattuun ruokaluetteloon ja antamiisi määriin. Tämä ei ole vapaan tekstin AI-ravitsemusanalyysi.':'Text matching uses a limited food list and the amounts you provide. It is not an open-ended AI nutrition analysis.',
  'Ota kuva tai valitse galleriasta':'Take a photo or choose one', 'Kuvaa koko annos suoraan ylhäältä tai 45° kulmasta.':'Capture the whole meal from above or at a 45° angle.',
  'Vaihda kuva':'Change photo', 'Valitse ruokakuva':'Choose food photo', 'Tunnista ruokalaji':'Identify dish',
  'Tunnista kuva uudelleen':'Analyze photo again', 'AI analysoi…':'AI is analyzing…',
  'Ensimmäisellä kerralla noin 60 Mt ruokamalli ladataan selaimeen. Seuraava analyysi on nopeampi.':'A roughly 60 MB food model downloads into your browser the first time. Future analyses are faster.',
  'Väärä ruoka tai tunnistus ei toimi? Hae ruokalaji itse':'Wrong food or failed recognition? Search for a dish',
  'Esim. pizza, lohi tai spagetti':'E.g. pizza, salmon or spaghetti',
  'Ruokalajia ei löydy. Kokoa ateria Annos-välilehdellä tai kirjaa arvot itse.':'Dish not found. Build the meal from ingredients or enter values manually.',
  'Tunnistus on epävarma. Tarkista ruoka ennen kuin käytät arviota.':'Recognition is uncertain. Check the food before using the estimate.',
  'AI:n ehdottamat ruokalajit':'Dishes suggested by AI', 'ANNOSARVIO':'PORTION ESTIMATE', 'Valittu itse':'Chosen manually',
  'AI:n prosentti koskee vain ruokalajin tunnistusta 101 vaihtoehdosta. Se ei kerro makroarvion tarkkuutta.':'The AI percentage describes classification among 101 dishes. It does not measure macro accuracy.',
  'Annoksen paino (g)':'Portion weight (g)', 'Kuvasta ei voi mitata painoa.':'Weight cannot be measured from a photo.',
  'Anna määrä väliltä 1–3000 grammaa.':'Enter a weight from 1 to 3000 grams.',
  'Nämä ovat tyypillisen ruoan arvioita. Öljy, kastike, täytteet ja eri reseptit muuttavat makroja. Jos lautasella on monta erillistä ruokaa, kokoa annos raaka-aineista.':'These are rough estimates for a typical dish. Oils, sauces, toppings and recipes change the macros. Build mixed meals from ingredients.',
  'Käytä arviota ja tarkista':'Use estimate and review',
  'Useita ruokia lautasella? Kokoa annos raaka-aineista':'Several foods on the plate? Build a meal from ingredients',
  'Kuva pysyy laitteellasi eikä sitä tallenneta tai lähetetä palvelimelle. AI-malli ladataan Hugging Facesta ja analyysi tehdään selaimessa.':'The photo stays on your device; it is not saved or uploaded to our server. The AI model downloads from Hugging Face and runs in your browser.',
  'Kuva-AI':'Photo AI', 'Kirjaa':'Log', 'Annos':'Meal', 'Aiemmat':'Recent',
  'Muokkaa ateriaa':'Edit meal', 'Lisää ateria':'Add meal', 'Aterian lisäämistapa':'How to add a meal',
  'Aterian nimi':'Meal name', 'Esim. kana-riisikulho':'E.g. chicken and rice bowl',
  'Arvot on esitäytetty ruoka-arviosta. Muokkaa niitä tarvittaessa ennen tallennusta.':'Values are prefilled from a food estimate. Edit them before saving.',
  'Tallennetaan…':'Saving…', 'Tallenna muutokset':'Save changes', 'Lisää päiväkirjaan':'Add to journal',
  'Valitse aiempi ateria. Voit muuttaa määriä ennen tallennusta.':'Choose a recent meal. You can change amounts before saving.',
  'Ensimmäisen aterian jälkeen löydät sen täältä.':'Your first logged meal will appear here.',
  'Kirjaa ensimmäinen ateria':'Log your first meal',
  'Kokoa annos useasta raaka-aineesta. Arvot ovat arvioita; pakkauksen tiedot ovat tarkemmat.':'Build a meal from ingredients. Values are estimates; package labels are more accurate.',
  'Raaka-aine':'Ingredient', 'Määrä (g)':'Amount (g)', 'Käytä annoksen arvoja':'Use meal values',
  'RAVINTO':'NUTRITION', 'Energiaa kentälle.':'Fuel your game.',
  'Ateriat, päivän makrot ja oma tavoite yhdellä silmäyksellä.':'Meals, daily macros and your goal at a glance.',
  'Muokkaa tavoitetta':'Edit goal', 'Päiväkirjan päivä':'Journal date', 'Edellinen päivä':'Previous day',
  'Seuraava päivä':'Next day', 'PÄIVÄN ETENEMÄ':'DAILY PROGRESS', 'Tänään jäljellä':'Remaining today',
  'Päivän tavoitevertailu':'Daily goal comparison', 'Muokkaa':'Edit',
  'Laske päivän makrotavoite':'Calculate daily macro goal',
  'Aseta energia, proteiini ja rasva. Laskuri täydentää hiilihydraatit ja näyttää päivän jäljellä olevan määrän.':'Set calories, protein and fat. The calculator fills in carbohydrates and shows what remains.',
  'Päivän ateriat':'Today’s meals', 'Aloita yhdestä ateriasta.':'Start with one meal.',
  'Ei kirjauksia tälle päivälle.':'No meals logged for this day.',
  'Kirjaa itse, laske annos tai käytä aiempaa ateriaa.':'Enter values, build a meal or reuse a recent entry.',
  'Voit tarkastella toista päivää päivämäärävalitsimella.':'Choose a different day to view its meals.',
  'NOPEA LISÄYS':'QUICK ADD', 'Sama ateria uudestaan?':'Having the same meal again?',
  'Lisää viimeksi käyttämäsi annos tämän päivän päiväkirjaan.':'Add a recent meal to today’s journal.',
  'Ei vielä aiempia aterioita.':'No recent meals yet.',
  'JUMPSHOT-ANALYYSI':'SHOT ANALYSIS', 'Jumpshot-analyysi':'Shot analysis',
  'AI seuraa heittäjää, tunnistaa oikean heittosekvenssin ja antaa yhden selkeän päätavoitteen.':'AI follows the shooter, identifies the shooting sequence and suggests one clear focus.',
  'AI valmis videoon':'AI ready for video', '1. Valitse video':'1. Choose a video',
  'Kuvaa sivulta, pidä puhelin paikallaan ja varmista, että koko pelaaja näkyy.':'Record from the side, hold the phone steady and keep the full player in frame.',
  'Yksi kuvakulma. Monta havaintoa.':'One angle. Several observations.',
  'Valitse lyhyt sivulta kuvattu video tai kuvaa uusi.':'Choose a short side-view video or record a new one.',
  'Avaa kamera':'Open camera', 'Valitse video':'Choose video', 'TEKOÄLYANALYYSI':'AI ANALYSIS',
  'Valitse heittokäsi':'Choose shooting hand', 'Oikea':'Right', 'Vasen':'Left',
  'Valitse heittäjä videolta':'Select the shooter in the video',
  'Rajaa video mieluiten yhteen heittoon. Jos kuvassa on puolustaja, pysäytä video ennen heittoa ja merkitse heittäjä.':'Keep the video to one shot if possible. If a defender is visible, pause before the shot and select the shooter.',
  'Analysoi koko video':'Analyze entire video', '2. AI:N PALAUTE':'2. AI FEEDBACK', 'Odottaa videota':'Waiting for video',
  'Lisää yksi kokonainen heitto: lataus, release ja laskeutuminen. Epäselvästä videosta AI ei enää anna arvattua palautetta.':'Add one complete shot: load, release and landing. Unclear footage does not produce guessed feedback.',
  '3. TARKENNA KÄSIN':'3. REVIEW MANUALLY', 'Heittokäden kulma':'Shooting arm angle',
  'Kyynärpää':'Elbow', 'Polvi':'Knee', 'Vartalo':'Torso', 'Lisää ensin video':'Add a video first',
  'Mittausohje avautuu videon lisäämisen jälkeen.':'Measurement guidance appears after you add a video.',
  'Tallennetut kulmat ja heittojen välinen vaihtelu näkyvät tässä.':'Saved angles and shot-to-shot variation appear here.',
  '4. OMA ARVIO':'4. YOUR REVIEW', 'Tarkista koko suoritus':'Review the full movement',
  'Tasapainoinen lähtöasento':'Balanced starting position', 'Pallo nousee hallitusti heittolinjaan':'Ball rises smoothly into the shot line',
  'Kyynärpää pysyy pallon alla':'Elbow stays under the ball', 'Saatto jatkuu kohti koria':'Follow-through points toward the basket',
  'Laskeutuminen pysyy hallinnassa':'Controlled landing', 'Havainnot':'Notes',
  'Mikä toistui hyvin? Mitä kokeilet seuraavaksi?':'What went well? What will you try next?',
  'Tallenna analyysi':'Save analysis',
  'AI-palaute perustuu yhdestä kuvakulmasta tunnistettuihin nivelpisteisiin ja yleisiin liikeheuristiikkoihin. Se ei korvaa valmentajan arviota eikä näe palloa tai koria.':'AI feedback uses joint points from one camera angle and general movement rules. It cannot see the ball or hoop and does not replace a coach.',
  'KORISTAIDOT':'BASKETBALL SKILLS', 'Ota seuraava liike haltuun.':'Learn your next move.',
  'Selkeä harjoite. Rauhallinen aloitus. Lisää vauhtia hallinnan mukana.':'Simple drill. Start slow. Add speed as you improve.',
  'Avaa ohje':'Open guide', 'Merkitse harjoitelluksi':'Mark practiced',
  'Vaiheittaiset ohjeet ja YouTube-videot löytyvät harjoitteista. Liikkeiden automaattista videopalautetta ei vielä ole.':'Step-by-step guides and YouTube videos are included. Automatic video feedback for moves is not available yet.',
  'Haasteet':'Challenges', 'Koristaidot':'Basketball skills', 'Profiili päivitetty.':'Profile updated.',
  'Pelaajanimi':'Player name', 'Harjoittelun painotus':'Training focus', 'Ateriaideoiden valinta':'Meal ideas',
  'Kokonaisvaltainen kehitys':'Overall development', 'Voima':'Strength', 'Heittotaito':'Shooting',
  'Liikkuvuus':'Mobility', 'Kaikki':'All', 'Kasvis':'Vegetarian', 'Maidoton':'Dairy-free',
  'Painotus järjestää harjoituspohjat. Se ei luo henkilökohtaista PT-ohjelmaa.':'Focus changes the workout order. It does not create a personal training plan.',
  'Tallenna profiili':'Save profile', 'Tarvitset':'Equipment', 'Näin teet yksin':'How to train solo',
  'Jatka keskeneräistä treeniä':'Resume unfinished workout', 'Taitoharjoitus tallennettu.':'Skill drill saved.',
  'Kestoa ei kirjattu':'Duration not recorded', 'Tehty':'Done', 'Ei mittausta':'No measurement',
  'Taitoharjoitus tehty.':'Skill drill complete.',
  'Palkinnot':'Rewards', 'Taso':'Level',
  'Katso opetusvideo YouTubessa':'Watch tutorial on YouTube',
  'Voimaa koko kehoon':'Full-body strength', 'Kolmoset tasapainosta':'Balanced three-pointers',
  'Viimeistele korin alta':'Finish at the rim', 'Midrange pelivauhdissa':'Game-speed midrange',
  'Puolustajan jalkatyö':'Defensive footwork', 'Syötöt ja kiinniotot':'Passing and catching',
  'Vahvat jalat':'Strong legs', 'Vahva keskivartalo':'Strong core', 'Liikkuvuutta kentälle':'Court-ready mobility',
  'Kädet ja ylävartalo':'Arms and upper body', 'Räjähtävä ponnistus':'Explosive jumping',
};

Object.assign(en, {
  '11 TREENIALUETTA · YKSIN TEHTÄVÄT HARJOITUKSET':'11 TRAINING AREAS · SOLO WORKOUTS',
  'Valitse päivän suunta.':'Choose today’s focus.',
  'Voimaa salilla ja pelitaitoja kentällä. Välineet ja suoritusohjeet jokaisessa treenissä.':'Build strength in the gym and skills on the court. Every workout includes equipment and instructions.',
  'Kaikki treenit yksin':'Every workout is solo', 'Yksi tavoite. Selkeä treeni.':'One goal. One clear workout.',
  'Valitse yksi treeni päivän muuhun harjoitteluun sopivaksi. Kenttä- ja jalkatreenien alussa on dynaaminen korisalkulämpö, pakara-aktivointi ja kevyet hypyt.':'Choose one workout that fits your training day. Court and leg sessions begin with a basketball warm-up, glute activation and light jumps.',
  '01 · LÄMPÖ & LIIKE':'01 · WARM UP & MOVE', '02 · AKTIVOINTI':'02 · ACTIVATE',
  '03 · KEVYET HYPYT':'03 · LIGHT JUMPS',
  'Liikkuvuus-, keskivartalo- ja käsitreeneissä on kevyempi aloitus.':'Mobility, core and arm sessions start more gently.',
  'Treenialueen valinta':'Choose a training area', 'Kaikki alueet':'All areas',
  'Näytä harjoitus':'View workout', 'Yksin · Video-ohje jokaiselle harjoitteelle':'Solo · Video for every exercise',
  'Harjoitukset ovat valittavia treenipohjia. Niitä ei ole tarkoitus tehdä kaikkia samana päivänä. Sovita kuormitus joukkueharjoituksiin ja peleihin oman PT:n kanssa.':'These are workout options, not a list to complete in one day. Plan the load around team practice and games with your trainer.',
  'Myös pallonkäsittely mukaan.':'Work on your ball handling too.',
  'Crossover, hesitation ja pivotit video-ohjeineen.':'Crossover, hesitation and pivots with video guides.',
  'Avaa taitoharjoitukset':'Open skill drills',
  'Kyykky, työntö, veto ja keskivartalon tuki samassa treenissä.':'Squat, push, pull and core work in one session.',
  'Ponnistusvoimaa ylös, eteen ja sivulle. Laadukkaat hypyt, kunnolliset palautukset.':'Build jumping power up, forward and sideways. Focus on quality and full recovery.',
  'Nilkat, lonkat ja rintaranka liikkeelle hallitusti.':'Move your ankles, hips and upper back with control.',
  'Hallintaa ojennusta, kiertoa ja sivutaivutusta vastaan.':'Core control against extension, rotation and side bending.',
  'Yhden jalan voimaa, takaketjua ja pohkeita koripallon kuormitukseen.':'Single-leg strength, posterior chain and calves for basketball.',
  'Olkapäät, hauikset ja ojentajat. Hallittu liike ja sopiva kuorma.':'Shoulders, biceps and triceps with controlled reps and suitable weight.',
  'Kosketus lautaan, vaihtoehtoiset ponnistukset ja post-pelin jalkatyö.':'Backboard touch, varied takeoffs and post footwork.',
  'Viisi heittopaikkaa, pull-up ja stepback keskimatkalta.':'Five shooting spots, pull-ups and midrange stepbacks.',
  'Voimantuotto jaloista, omasta syötöstä heittäminen ja vaihteleva jalkatyö.':'Use your legs, shoot from a self-pass and vary your footwork.',
  'Syöttötarkkuutta seinään ja kiinniottoja omassa liikkeessä.':'Wall passing accuracy and catching while moving.',
  'Sivuttaisliike, closeout ja suunnanvaihto ilman harjoitusparia.':'Lateral slides, closeouts and direction changes without a partner.',
  'Käsipaino tai kahvakuula, tukeva penkki ja matto':'Dumbbell or kettlebell, sturdy bench and mat',
  'Tasainen pitävä alusta ja muutama metri vapaata tilaa':'Flat grippy surface and a few metres of space',
  'Matto ja vapaa seinä':'Mat and clear wall', 'Matto':'Mat',
  'Käsipainot, tukeva penkki ja seinä tasapainotueksi':'Dumbbells, stable bench and wall for balance',
  'Käsipainot ja tukeva penkki':'Dumbbells and stable bench', 'Koripallo ja kori':'Basketball and hoop',
  'Koripallo, kori ja kolmosviiva':'Basketball, hoop and three-point line',
  'Koripallo, pallotteluun sopiva vapaa seinä ja liikkumatilaa':'Basketball, safe clear wall and room to move',
  'Kentän viivat tai kaksi merkkiä ja 5–10 m vapaata tilaa':'Court lines or two markers and 5–10 m of clear space',
  'Tee ennen työsarjoja 1–2 kevyttä harjoitussarjaa. Valitse paino, jolla jäisi noin kaksi hallittua toistoa varastoon.':'Do 1–2 light warm-up sets before your working sets. Choose a weight that leaves about two controlled reps in reserve.',
  'Palauta hyppysarjojen välissä 2–3 minuuttia. Lopeta sarja, jos ponnistus tai laskeutumisen hallinta selvästi heikkenee.':'Rest 2–3 minutes between jump sets. Stop if your takeoff or landing quality clearly drops.',
  'Liiku omalla hallitulla liikeradalla. Tämä on kevyt oma treeninsä, ei maksimaalinen venyttely ennen hyppyjä.':'Stay within a controlled range. This is a light workout, not maximal stretching before jumping.',
  'Pidä hengitys liikkeessä ja lantio hallinnassa. Lyhennä vipuvartta tai pitoa, jos asento alkaa hajota.':'Keep breathing and control your hips. Shorten the lever or hold if your form breaks down.',
  'Tee kevyet lämmittelysarjat ennen painojen nostamista. Käytä vakaata penkkiä ja tarvittaessa tukea tasapainoon.':'Do light warm-up sets before heavier loads. Use a stable bench and balance support if needed.',
  'Aloita liikkeet kevyellä harjoitussarjalla. Valitse käsipainot, jotka saat turvallisesti alkuasentoon ja takaisin alas yksin.':'Start with a light practice set. Choose dumbbells you can safely position and lower alone.',
  'Ota oma levypallo joka heiton jälkeen. Drop step alkaa itselle annetusta pomppusyötöstä. Tee kumpikin puoli; määrät tarkoittavat heittoyrityksiä.':'Get your own rebound after each shot. Start the drop step with a self-pass. Work both sides; counts are attempts.',
  'Syötä pallo itsellesi alakierteisellä pompulla ja ota omat levypallot. Määrät ovat yrityksiä, eivät vaadittuja osumia.':'Self-pass with a backspin bounce and collect your rebounds. Counts are attempts, not required makes.',
  'Anna syöttö itsellesi ja hae levypallot itse. Palaa lähemmäs, jos heitto muuttuu puskemiseksi. Määrät tarkoittavat yrityksiä.':'Self-pass and collect your own rebounds. Move closer if your shot turns into a push. Counts are attempts.',
  'Seinä palauttaa syötön. Muissa harjoitteissa heität pallon itsellesi. Valitse paikka, jossa pallottelu on sallittua eikä lähellä ole ikkunoita.':'The wall returns passes. For other drills, toss the ball to yourself. Choose a safe place without nearby windows.',
  'Käytä viivaa tai merkkiä kuvitteellisena hyökkääjänä. Tämä treenaa liikkumista; vastustajan lukeminen ja kontaktipuolustus vaativat myös pelitilanteita.':'Use a court line or marker as an imaginary attacker. This trains movement; reading an opponent and defending contact require game practice.',
  'Koripallon dynaaminen lämmittely':'Dynamic basketball warm-up', 'Pakarasilta – aktivointi':'Glute bridge activation',
  'Kevyet pogo-hypyt':'Light pogo jumps', 'Goblet-kyykky':'Goblet squat', 'Punnerrus':'Push-up',
  'Käsipainosoutu':'Dumbbell row', 'Kyykkyhyppy':'Squat jump', 'Vauhditon pituushyppy':'Standing broad jump',
  'Sivuttaisloikka ja pito':'Lateral bound and hold', 'Nilkka – polvi seinään':'Knee-to-wall ankle mobility',
  'Lonkan 90/90-kierto':'90/90 hip rotation', 'Rintarangan kierto konttausasennossa':'Quadruped thoracic rotation',
  'Sivulankku':'Side plank', 'Bulgarialainen askelkyykky':'Bulgarian split squat',
  'Romanialainen maastaveto käsipainoilla':'Dumbbell Romanian deadlift', 'Yhden jalan pohjenousu':'Single-leg calf raise',
  'Käsipainopystypunnerrus':'Dumbbell overhead press', 'Vasarakääntö':'Hammer curl',
  'Ojentajapunnerrus käsipainoilla makuulla':'Lying dumbbell triceps extension',
  'Mikan-viimeistely':'Mikan finishes', 'Saman jalan ja käden viimeistely':'Same-leg same-hand finish',
  'Eurostep-viimeistely':'Eurostep finish', 'Drop step korin alla':'Drop step at the rim',
  'Midrange viidestä paikasta':'Five-spot midrange', 'Yhden pompun pull-up':'One-dribble pull-up',
  'Vapaaheitot':'Free throws', 'Kolmosen voimantuotto':'Three-point power from the legs',
  'Kolmoset vaihtelevalla jalkatyöllä':'Three-pointers with varied footwork',
  'Seinäsyötöt':'Wall passes', 'Soolosyöttö ja kiinniotto':'Solo pass and catch',
  'Puolustusliuku':'Defensive slide', 'Closeout ja pysähdys':'Closeout and stop',
  'Puolustuksen soolojalkatyö':'Solo defensive footwork',
  'TREENI KÄYNNISSÄ':'WORKOUT IN PROGRESS', 'Harjoitteet':'Exercises',
  'Pienennä harjoitus, edistyminen säilyy':'Minimize workout without losing progress',
  'Jatka ajastinta':'Resume timer', 'Tauko':'Pause', 'Sarja':'Set', 'Paino, kg':'Weight, kg',
  'Toistot':'Reps', 'Heittoyritykset':'Shot attempts', 'Valmis':'Done',
  'Palautusajastin':'Rest timer', 'Palautusaika päättyi':'Rest period finished',
  'Voit jatkaa oman tuntemuksen mukaan.':'Continue when you feel ready.',
  'Palautusajan pituus':'Rest duration', 'Edellinen':'Previous', 'Seuraava harjoite':'Next exercise',
  'Muistiinpanot ja oma fiilis':'Notes and effort', 'Miltä harjoitus tuntui?':'How hard did it feel?',
  'Muistiinpanot':'Notes', 'Valitse halutessasi':'Optional', 'Kevyt':'Easy', 'Sopiva':'Moderate',
  'Raskas':'Hard', 'Erittäin raskas':'Very hard',
  'Esim. viimeiseen sarjaan jäi hyvin varaa.':'E.g. I had reps left in the final set.',
  'Tallenna valmis treeni':'Save completed workout',
  'Voit pienentää treenin ja palata siihen. Keskeneräinen treeni säilyy, kunnes lataat sivun uudelleen.':'You can minimize and return to the workout. It stays in progress until you reload the page.',
  'Poistetaanko keskeneräisen treenin kirjaukset?':'Discard this unfinished workout?',
  'Jatka treeniä':'Continue workout', 'Poista keskeneräinen treeni':'Discard unfinished workout',
  'Keskeytä treeni':'End workout', 'Katso video-ohje':'Watch video guide',
  'OMA KEHITYS':'YOUR PROGRESS', 'Työsi näkyy täällä.':'Your work shows here.',
  'Harjoitukset, ennätykset ja ansaitut palkinnot.':'Workouts, records and rewards earned.',
  'kolikkoa':'coins', 'Kehitys & päiväkirja':'Progress & journal', 'VIIMEISET 7 PÄIVÄÄ':'LAST 7 DAYS',
  'Treenit päivittäin':'Daily workouts', 'KIRJATUT HEITTOHAASTEET':'LOGGED SHOOTING CHALLENGES',
  'Löydä oma lähtötasosi.':'Discover your starting point.',
  'Ensimmäinen heittohaaste aloittaa seurannan.':'Tracking starts with your first shooting challenge.',
  'Käsin kirjatut tulokset':'Manually entered results', 'Omat ennätykset':'Personal bests',
  'Ei vielä tulosta':'No result yet', 'Suodata kirjauksia':'Filter entries',
  'Kaikki kirjaukset':'All entries', 'Heittohaasteet':'Shooting challenges', 'Ateriat':'Meals',
  'Taitoharjoitukset':'Skill drills', 'Heittoarviot':'Shot reviews',
  'Oma tarinasi alkaa ensimmäisestä kirjauksesta.':'Your journey starts with the first entry.',
  'Valmiit harjoitukset ja muut suoritukset kertyvät tähän.':'Completed workouts and other sessions appear here.',
  'Valitse harjoitus':'Choose workout',
  'Näytetään 40 viimeisintä tämän suodattimen kirjausta.':'Showing the latest 40 entries in this filter.',
  'Päiväkirja ja tilastot perustuvat viimeisimpiin 300 kirjaukseen. XP ja kolikot sisältävät koko historian.':'Journal and charts use the latest 300 entries. XP and coins include the full history.',
  'OMA PELAAJAKORTTI':'YOUR PLAYER CARD', 'Tee profiilista omasi.':'Make your profile yours.',
  'Profiilikehykset ostetaan treeneistä ansaituilla kolikoilla.':'Spend coins earned through training on profile frames.',
  'Käytössä':'Equipped', 'Ota käyttöön':'Equip', 'Saavutukset':'Achievements',
  'Ensimmäinen treeni':'First workout', 'Pelintekijä':'Playmaker', 'Seuraava taso':'Next level',
  'Tallenna yksi valmis harjoitus':'Log one completed workout',
  'Tallenna viisi heittohaastetta':'Log five shooting challenges',
  'Kerää 250 kokemuspistettä':'Earn 250 XP',
  'Näin ansaitset':'How to earn rewards',
  'Palkinto päivän ensimmäisestä suorituksesta kussakin kategoriassa.':'A reward for the first completed activity in each category every day.',
  'Treeni':'Workout', 'Heittoarvio':'Shot review', 'Taitoharjoitus':'Skill drill',
});

const presetNames: Record<string, string> = {
  'Kaurahiutaleet, kuivat':'Dry rolled oats', 'Banaani':'Banana', 'Maustamaton rahka':'Plain quark',
  'Riisi, keitetty':'Cooked rice', 'Kana, kypsä':'Cooked chicken', 'Tofu':'Tofu',
  'Kasvikset':'Vegetables', 'Peruna, keitetty':'Boiled potato', 'Pasta, keitetty':'Cooked pasta',
  'Oliiviöljy':'Olive oil',
};
Object.assign(en, presetNames);
for (const [label, profile] of Object.entries(foodProfiles)) {
  en[profile.name] ??= label.replaceAll('_', ' ').replace(/^./, first => first.toUpperCase());
}

const patterns: [RegExp, (...groups: string[]) => string][] = [
  [/^(\d+) treeniä omaan tavoitteeseen\.$/, n => `${n} workouts to reach your goal.`],
  [/^(\d+) kirjausta$/, n => `${n} entries`],
  [/^Tyypillinen annos (\d+) g$/, n => `Typical portion ${n} g`],
  [/^Tyypillinen annos: (\d+) g\. Kuvasta ei voi mitata painoa\.$/, n => `Typical portion: ${n} g. A photo cannot measure weight.`],
  [/^(\d+) harjoitetta$/, n => `${n} exercises`],
  [/^(\d+) osumaa$/, n => `${n} makes`],
  [/^(\d+) annos$/, n => `${n} portion`],
  [/^(\d+) annosta$/, n => `${n} portions`],
  [/^Tavoite: (.+)$/, goal => `Goal: ${en[goal] || goal}`],
  [/^(\d+) (treeni|treeniä) · (.+)$/, (n, _unit, area) => `${n} workout${n === '1' ? '' : 's'} · ${en[area] || area}`],
  [/^NOIN (\d+) MIN · (\d+) HARJOITETTA$/, (minutes, count) => `ABOUT ${minutes} MIN · ${count} EXERCISES`],
  [/^Viimeksi (.+)$/, date => `Last trained ${date}`],
  [/^HARJOITE (\d+) \/ (\d+)$/, (n, count) => `EXERCISE ${n} / ${count}`],
  [/^(\d+)\/(\d+) sarjaa$/, (done, total) => `${done}/${total} sets`],
  [/^Palautus sarjojen välissä: (\d+) s$/, seconds => `Rest between sets: ${seconds} s`],
  [/^Vielä (\d+) sarjaa jäljellä$/, n => `${n} sets remaining`],
  [/^Viikkotavoite (\d+) harjoitusta\. Lepopäivä kuuluu harjoitteluun\.$/, n => `Weekly goal: ${n} workouts. Rest days are part of training.`],
  [/^(\d+) osumaa \/ (\d+) heittoa$/, (made, attempts) => `${made} makes / ${attempts} shots`],
  [/^(\d+) haasteen yhteistulos\. Eri haasteet sisältyvät lukuun\.$/, n => `Total across ${n} challenges.`],
  [/^(\d+) XP seuraavalle tasolle$/, n => `${n} XP to next level`],
  [/^(\d+) harjoitusta viikossa$/, n => `${n} workouts per week`],
  [/^Oma tavoite: (\d+) treeniä \/ 7 päivää$/, n => `Your goal: ${n} workouts / 7 days`],
  [/^(\d+) kolikkoa\. Avaa palkinnot\.$/, n => `${n} coins. View rewards.`],
  [/^(\d+) sarjaa jäljellä$/, n => `${n} sets remaining`],
  [/^En tunnistanut: (.+)\. Lisää näiden arvot käsin ennen tallennusta tai kokoa annos Annos-välilehdellä\.$/, foods => `Not recognized: ${foods}. Enter their values manually or build the meal from ingredients.`],
];

export function translateUi(source: string): string {
  const trimmed = source.trim();
  if (!trimmed) return source;
  const translated = en[trimmed] ?? patterns.map(([pattern, fn]) => {
    const match = trimmed.match(pattern);
    return match ? fn(...match.slice(1)) : null;
  }).find(Boolean);
  return translated ? source.replace(trimmed, translated) : source;
}

export function watchLanguage(root: HTMLElement, language: AppLanguage) {
  const texts = new WeakMap<Text, { source: string; last: string }>();
  const attrs = new WeakMap<Element, Record<string, { source: string; last: string }>>();
  const names = ['aria-label', 'placeholder', 'title', 'alt'];
  function visit() {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      if (node.parentElement?.closest('script,style,textarea,pre,code,[contenteditable]')) continue;
      const current = node.nodeValue || '';
      const previous = texts.get(node);
      const source = previous && current === previous.last ? previous.source : current;
      const next = language === 'en' ? translateUi(source) : source;
      if (next !== current) node.nodeValue = next;
      texts.set(node, { source, last: next });
    }
    root.querySelectorAll('*').forEach(element => {
      const records = attrs.get(element) || {};
      for (const name of names) {
        const current = element.getAttribute(name);
        if (current === null) continue;
        const previous = records[name];
        const source = previous && current === previous.last ? previous.source : current;
        const next = language === 'en' ? translateUi(source) : source;
        if (next !== current) element.setAttribute(name, next);
        records[name] = { source, last: next };
      }
      attrs.set(element, records);
    });
  }
  let frame = 0;
  const observer = new MutationObserver(() => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; visit(); }); });
  visit();
  observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: names });
  return () => { observer.disconnect(); cancelAnimationFrame(frame); language = 'fi'; visit(); };
}


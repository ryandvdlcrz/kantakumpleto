// q: {t: question, o: [choices], a: index of correct choice, or an array of indexes when several answers are correct (multi-select)}  or  {t, j: "word"} for type-from-jumbled-letters
export const SONGS = [
  { id: "s1", title: "Bahay Kubo", yt: "er3EID03smc", q: [
    { t: "Singkamas at talong, ________ at ________", o: ["sigarilyas at manok", "sigarilyas at mani"], a: 1 },
    { t: "At saka mayron pang ________, ________", o: ["labanos, atchara", "labanos, mustasa", "labanos, kutsara"], a: 1 },
    { t: "Alin sa sumusunod na gulay ang hindi kabilang sa awiting Bahay Kubo?", o: ["Singkamas", "Kamatis", "Sili", "Patatas", "Bawang", "Luya", "Talong", "Sigarilyas", "Linga", "Okra"], a: [2, 3, 9] } ] },
  { id: "s2", title: "Leron Leron Sinta", yt: "T56VYfIdxkI", q: [
    { t: "Dala-dala’y ________, sisidlan ng bunga", j: "buslo" },
    { t: "Sino ang ginigising sa awitin upang manampalok?", o: ["Neneng", "Nena", "Nene"], a: 0 },
    { t: "Pagdating sa dulo’y ________, kumapit ka ________ baka ka mahulog", o: ["lalamba-lambayog, Neneng", "nabali ang sanga, Neneng"], a: 1 } ] },
  { id: "s3", title: "Santa Clara", yt: "XD9OYI3WLDQ", q: [
    { t: "Pagdating ko po sa Obando ay magsasayaw ng ________", j: "pandanggo" },
    { t: "Kaninong patron lumalapit o namamanata sa pamamagitan ng pagsasayaw ng pandanggo ang mga mag-asawa upang magka-anak?", o: ["Sta. Maria de Betania", "Sta. Quiteria", "Sta. Clara"], a: 2 },
    { t: "Saang lugar nagsasayaw ng pandanggo ang mga mag-asawa?", o: ["Calumpit", "Obando", "Plaridel"], a: 1 } ] },
  { id: "s4", title: "Magtanim Ay Di Biro", yt: "b7VwknTs6TE", q: [
    { t: "Magtanim ay ’di ________.", j: "biro" },
    { t: "Maghapong ________.", o: ["nakayuko", "nakatayo", "nakaupo"], a: 0 },
    { t: "Braso ko’y ________.", o: ["nangangawit", "namamanhid", "nananakit"], a: 1 } ] },
  { id: "s5", title: "Paru-parong Bukid", yt: "2XTRrM3lvRs", q: [
    { t: "Anong uri ng awitin ang “Paru-parong Bukid”?", o: ["Awiting-pampatulog", "Awiting-bayan", "Awiting-panrelihiyon"], a: 1 },
    { t: "Anong kilos ang inilalarawan sa mga salitang “lilipad-lipad” at “papaga-pagaspas” sa awit?", o: ["Mabagal na paglalakad", "Paglangoy sa tubig", "Paglipad at pagpapakampay ng pakpak"], a: 2 },
    { t: "Isang bara ang tapis, isang dangkal ang ________. At saka lalakad nang ________.", o: ["saya, mabilis-mabilis", "manggas, pakendeng-kendeng", "tapis, dahan-dahan"], a: 1 } ] },
  { id: "s6", title: "Atin Cu Pung Singsing", yt: "wA2_WKlFjFw", q: [
    { t: "Ano sa wikang Tagalog ang linya ng awitin na “Atin cu pung singsing, metung yang timpucan”?", o: ["Ako ay may singsing, may batong kay inam", "Ako ay may lobo, lumipad sa langit", "Ako ay may singsing, may batong kay ganda"], a: 2 },
    { t: "Atin cu pung ________, metung yang timpucan.", j: "singsing" },
    { t: "Binigay sa akin ng mahal kong ________.", o: ["nanay", "tatay", "kaibigan"], a: 0 } ] },
  { id: "s7", title: "Si Pilemon", yt: "9bFNxnLlRnw", q: [
    { t: "Si Pilemon, si Pilemon namasol sa ________.", o: ["kabukiran", "kadagatan", "kagubatan"], a: 1 },
    { t: "Nakakuha, nakakuha og isdang ________.", o: ["tambasakan", "tilapia", "bangus"], a: 0 },
    { t: "Ang halin pulos kura, igo lang ipanuba. Ang salitang “tuba” ay tumutukoy sa anong uri ng inumin?", o: ["Tubig", "Gatas", "Alak na gawa sa katas ng niyog"], a: 2 } ] },
  { id: "s8", title: "Tong Tong Tong Pakitong-kitong", yt: "BwXqnXl-crs", q: [
    { t: "Tong tong tong tong ________.", o: ["pakitong-kitong", "pakindat-kindat", "pakaway-kaway"], a: 0 },
    { t: "Alimango sa ________.", o: ["ilog", "dagat", "bukid"], a: 1 },
    { t: "Mahirap mahuli sapagkat ________.", o: ["lumalangoy", "nangangagat", "lumilipad"], a: 1 } ] },
  { id: "s9", title: "Ang Pipit", yt: "v-ZNinrJYHM", q: [
    { t: "May pumukol sa pipit sa ________ ng isang ________.", o: ["sanga – kahoy", "dahon – puno", "sanga – halaman"], a: 0 },
    { t: "At nahagip ng bato ang ________ ng munting ibon. Dahil sa sakit di na nakaya pang ________.", o: ["katawan – kumanta", "pakpak – lumipad", "buntot – dumapo"], a: 1 },
    { t: "Mamang kay ________ ang puso mo’y di na ________. Pag pumanaw ang buhay ko may isang pipit na ________.", o: ["mabait – lumimot – aawit", "malupit – nahabag – iiyak", "malungkot – nasaktan – lilipad"], a: 1 } ] },
  { id: "s10", title: "Katakataka", yt: "8HezuCQixps", q: [
    { t: "Kataka-takang ________ ang katulad ko sa iyo. Biru-biro ang ________, ang wakas pala ay ano?", o: ["umibig – simula", "mahibang – simula", "malungkot – wakas"], a: 0 },
    { t: "Aayaw-ayaw pa ako ngunit iyan ay di ________. Dahil sa iyo, puso kong ito’y ________ mo.", o: ["totoo – binihag", "madali – minahal", "maaari – iniwan"], a: 0 },
    { t: "Ala-ala ka maging ________ at ________. Alipin mo’y walang kailangan, marinig ko lang sa labi mo hirang na ako’y ________ lagi habang buhay.", o: ["umaga – tanghali – aalalahanin", "gabi – araw – iibigin", "hapon – gabi – mamahalin"], a: 1 } ] }
];
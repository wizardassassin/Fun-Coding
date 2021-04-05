// A place where I bench things

import {
    performance
} from "perf_hooks";

import {
    isPrime
} from "mathjs";

function test1(a) {
    return String(a).length
}

function test2(a) {
    return Math.ceil(Math.log10(a + 1))
}

function test3(a) {

}

let start, stop, result;

let dump = {
    a: 0,
    b: 0,
    c: 0
};

let acc = {
    a: 0,
    b: 0,
    c: 0
}

let int1 = [1000000016531, 1000000010201, 1000000006021, 1000000005707, 1000000000039, 1000000000061, 1000000000063, 1000000000091, 1000000000121, 1000000000163, 1000000000169, 1000000000177, 1000000000189, 1000000000193, 1000000000211, 1000000000271, 1000000000303, 1000000000331, 1000000000333, 1000000000339, 1000000000459, 1000000000471, 1000000000537, 1000000000543, 1000000000547, 1000000000561, 1000000000609, 1000000000661, 1000000000669, 1000000000721, 1000000000751, 1000000000787, 1000000000789, 1000000000799, 1000000000841, 1000000000903, 1000000000921, 1000000000931, 1000000000933, 1000000000949, 1000000000997, 1000000001051, 1000000001083, 1000000001123, 1000000001159, 1000000001197, 1000000001201, 1000000001213, 1000000001243, 1000000001261, 1000000001263, 1000000001293, 1000000001303, 1000000001339, 1000000001389, 1000000001419, 1000000001443, 1000000001491, 1000000001509, 1000000001587, 1000000001591, 1000000001621, 1000000001641, 1000000001717, 1000000001771, 1000000001773, 1000000001837, 1000000001881, 1000000001911, 1000000001939, 1000000001947, 1000000001953, 1000000001963, 1000000001999, 1000000002059, 1000000002119, 1000000002139, 1000000002143, 1000000002167, 1000000002173, 1000000002217, 1000000002227, 1000000002277, 1000000002341, 1000000002373, 1000000002403, 1000000002431, 1000000002493, 1000000002511, 1000000002587, 1000000002613, 1000000002623, 1000000002637, 1000000002667, 1000000002679, 1000000002713, 1000000002721, 1000000002739, 1000000002761, 1000000002803, 1000000002821, 1000000002857, 1000000002871, 1000000002889, 1000000002901, 1000000002973, 1000000002997, 1000000003027, 1000000003031, 1000000003043, 1000000003061, 1000000003087, 1000000003091, 1000000003129, 1000000003159, 1000000003187, 1000000003237, 1000000003259, 1000000003273, 1000000003279, 1000000003283, 1000000003367, 1000000003381, 1000000003427, 1000000003463, 1000000003543, 1000000003553, 1000000003567, 1000000003571, 1000000003579, 1000000003619, 1000000003669, 1000000003757, 1000000003789, 1000000003799, 1000000003801, 1000000003841, 1000000003843, 1000000003859, 1000000003883, 1000000003889, 1000000003993, 1000000004023, 1000000004053, 1000000004099, 1000000004153, 1000000016357, 1000000016377, 1000000016381, 1000000016387, 1000000016399, 1000000016417, 1000000016419, 1000000016479, 1000000016507, 1000000016531, 1000000011091, 1000000011103, 1000000011113, 1000000011121, 1000000011151, 1000000011169, 1000000011191, 1000000011217, 1000000011229, 1000000011239, 995551, 995567, 995573, 995587, 995591, 995593, 995611, 995623, 995641, 995651, 995663, 995669, 995677, 995699, 995713, 995719, 995737, 995747, 995783, 995791, 995801, 995833, 995881, 995887, 995903, 995909, 995927, 995941, 995957, 995959, 995983, 995987, 995989, 996001, 996011, 996019, 996049, 996067, 996103, 996109, 996119, 996143, 996157, 996161, 996167, 996169, 996173, 996187, 996197, 996209, 996211, 996253, 996257, 996263, 996271, 996293, 996301, 996311, 996323, 996329, 996361, 996367, 996403, 996407, 996409, 996431, 996461, 996487, 996511, 996529, 996539, 996551, 996563, 996571, 996599, 996601, 996617, 996629, 996631, 996637, 996647, 996649, 996689, 996703, 996739, 996763, 996781, 996803, 996811, 996841, 996847, 996857, 996859, 996871, 996881, 996883, 996887, 996899, 996953, 996967, 996973, 996979, 997001, 997013, 997019, 997021, 997037, 997043, 997057, 997069, 997081, 997091, 997097, 997099, 997103, 997109, 997111, 997121, 997123, 997141, 997147, 997151, 997153, 997163, 997201, 997207, 997219, 997247, 997259, 997267, 997273, 997279, 997307, 997309, 997319, 997327, 997333, 997343, 997357, 997369, 997379, 997391, 997427, 997433, 997439, 997453, 997463, 997511, 997541, 997547, 997553, 49711, 49727, 49739, 49741, 49747, 49757, 49783, 49787, 49789, 49801, 49807, 49811, 49823, 49831, 49843, 49853, 49871, 49877, 49891, 49919, 49921, 49927, 49937, 49939, 49943, 49957, 49991, 49993, 49999, 50021, 50023, 50033, 50047, 50051, 50053, 50069, 50077, 50087, 50093, 50101, 50111, 50119, 50123, 50129, 50131, 50147, 50153, 50159, 50177, 50207, 50221, 50227, 50231, 50261, 50263, 50273, 50287, 50291, 50311, 50321, 50329, 50333, 50341, 50359, 50363, 50377, 50383, 50387, 50411, 50417, 50423, 50441, 50459, 50461, 50497, 50503, 50513, 50527, 50539, 50543, 50549, 50551, 50581, 50587, 50591, 50593, 50599, 50627, 50647, 50651, 50671, 50683, 50707, 50723, 50741, 50753, 50767, 50773, 50777, 50789, 50821, 50833, 50839, 50849, 50857, 50867, 50873, 50891, 50893, 50909, 50923, 50929, 50951, 50957, 50969, 50971, 50989, 50993, 51001, 51031, 51043, 51047, 51059, 51061, 51071, 51109, 51131, 51133, 51137, 51151, 51157, 51169, 51193, 51197, 51199, 51203, 51217, 51229, 51239, 51241, 51257, 51263, 51283, 51287, 51307, 51329, 51341, 51343, 51347, 51349, 51361, 51383, 51407, 51413, 51419, 51421, 51427, 51431, 51437, 51439, 51449, 51461, 51473, 51479, 51481, 51487, 51503, 51511, 51517, 51521, 51539, 51551, 51563, 51577, 51581, 51593, 51599, 51607, 51613, 51631, 51637, 51647, 51659, 51673, 51679, 51683, 51691, 51713, 51719, 51721, 51749, 51767, 51769, 51787, 51797, 51803, 51817, 51827, 51829, 51839, 51853, 51859, 51869, 51871, 51893, 51899, 51907, 51913, 51929, 51941, 51949, 51971, 51973, 51977, 51991, 52009, 52021, 52027, 52051, 52057, 52067, 52069, 52081, 52103, 52121, 52127, 52147, 52153, 52163, 52177, 52181, 52183, 52189, 52201, 52223, 52237, 52249, 52253, 52259, 52267, 52289, 52291, 52301, 52313, 52321, 52361, 52363, 52369, 52379, 52387, 52391, 52433, 52453, 52457, 52489, 52501, 52511, 52517, 52529, 52541, 52543, 52553, 52561, 52567, 52571, 52579, 52583, 52609, 52627, 52631, 52639, 52667, 52673, 52691, 52697, 52709, 52711, 52721, 52727, 52733, 52747, 52757, 52769, 52783, 52807, 52813, 52817, 52837, 52859, 52861, 52879, 52883, 52889, 52901, 52903, 52919, 52937, 52951, 52957, 52963, 52967, 52973, 52981, 52999, 53003, 53017, 53047, 53051, 53069, 53077, 53087, 53089, 53093, 53101, 53113, 53117, 53129, 53147, 53149, 53161, 53171, 53173, 53189, 53197, 53201, 53231, 53233, 53239, 53267, 53269, 53279, 53281, 53299, 53309, 53323, 53327, 53353, 53359, 53377, 53381, 53401, 53407, 53411, 53419, 53437, 53441, 53453, 53479, 53503, 53507, 53527, 53549, 53551, 53569, 53591, 53593, 53597, 53609, 53611, 53617, 53623, 53629, 53633, 53639, 53653, 53657, 53681, 53693, 53699, 53717, 53719, 53731, 53759, 53773, 53777, 53783, 53791, 53813, 53819, 53831, 53849, 53857, 53861, 53881, 53887, 53891, 53897, 53899, 53917, 53923, 53927, 53939, 53951, 53959, 53987, 53993, 54001, 54011, 54013, 54037, 54049, 54059, 54083, 54091, 54101, 54121, 54133, 54139, 54151, 54163, 54167, 54181, 54193, 54217, 54251, 54269, 54277, 54287, 54293, 54311, 54319, 54323, 54331, 54347, 54361, 54367, 54371, 54377, 54401, 54403, 54409, 54413, 54419, 54421, 54437, 54443, 54449, 54469, 54493, 54497, 54499, 54503, 54517, 54521, 54539, 54541, 54547, 54559, 54563, 54577, 54581, 54583, 54601, 54617, 54623, 54629, 54631, 54647, 54667, 54673, 54679, 54709, 54713, 54721, 54727, 54751, 54767, 54773, 54779, 54787, 54799, 54829, 54833, 54851, 54869, 54877, 54881, 54907, 54917, 54919, 54941, 54949, 54959, 54973, 54979, 54983, 55001, 55009, 55021, 55049, 55051, 55057, 55061, 55073, 55079, 55103, 55109, 55117, 55127, 55147, 55163, 55171, 55201, 55207, 55213, 55217, 55219, 55229, 55243, 55249, 55259, 55291, 55313, 55331, 55333, 55337, 55339, 55343, 55351, 55373, 55381, 55399, 55411, 55439, 55441, 55457, 55469, 55487, 55501, 55511, 55529, 55541, 55547, 55579, 55589, 55603, 55609, 55619, 55621, 55631, 55633, 55639, 55661, 55663, 55667, 55673, 55681, 55691, 55697, 55711, 55717, 55721, 55733, 55763, 55787, 55793, 55799, 55807, 55813, 55817, 55819, 55823, 55829, 55837, 55843, 55849, 55871, 55889, 55897, 55901, 55903, 55921, 55927, 55931, 55933, 55949, 55967, 55987, 55997, 56003, 56009, 56039, 56041, 56053, 56081, 56087, 56093, 56099, 56101, 56113, 56123, 56131, 56149, 56167, 56171, 56179, 56197, 56207, 56209, 56237, 56239, 56249, 56263, 56267, 56269, 56299, 56311, 56333, 56359, 56369, 56377, 56383, 56393, 56401, 56417, 56431, 56437, 56443, 56453, 56467, 56473, 56477, 56479, 56489, 56501, 56503, 56509, 56519, 56527, 56531, 56533, 56543, 56569, 56591, 56597, 56599, 56611, 56629, 56633, 56659, 56663, 56671, 56681, 56687, 56701, 56711, 56713, 56731, 56737, 56747, 56767, 56773, 56779, 56783, 56807, 56809, 56813, 56821, 56827, 56843, 56857, 56873, 56891, 56893, 56897, 56909, 56911, 56921, 56923, 56929, 56941, 56951, 56957, 56963, 56983, 56989, 56993, 56999, 57037, 57041, 57047, 57059, 57073, 57077, 57089, 57097, 57107, 57119, 57131, 57139, 57143, 57149, 57163, 57173, 57179, 57191, 57193, 57203, 57221, 57223, 57241, 57251, 57259, 57269, 57271, 57283, 57287, 57301, 57329, 57331, 57347, 57349, 57367, 57373, 57383, 57389, 57397, 57413, 57427, 57457, 57467, 57487, 57493, 57503, 57527, 57529, 57557, 57559, 57571, 57587, 57593, 57601, 57637, 57641, 57649, 57653, 57667, 57679, 57689, 57697, 57709, 57713, 57719, 57727, 57731, 57737, 57751, 57773, 57781, 57787, 57791, 57793, 57803, 57809, 57829, 57839, 57847, 57853, 57859, 57881, 57899, 57901, 57917, 57923, 57943, 57947, 57973, 57977, 57991, 58013, 58027, 58031, 58043, 58049, 58057, 58061, 58067, 58073, 58099, 58109, 58111, 58129, 58147, 58151, 58153, 58169, 58171, 58189, 58193, 58199, 58207, 58211, 58217, 58229, 58231, 58237, 58243, 58271, 58309, 58313, 58321, 58337, 58363, 58367, 58369, 58379, 58391, 58393, 58403, 58411, 58417, 58427, 58439, 58441, 58451, 58453, 58477, 58481, 58511, 58537, 58543, 58549, 58567, 58573, 58579, 58601, 58603, 58613, 58631, 58657, 58661, 58679, 58687, 58693, 58699, 58711, 58727, 58733, 58741, 58757, 58763, 58771, 58787, 58789, 58831, 58889, 58897, 58901, 58907, 58909, 58913, 58921, 58937, 58943, 58963, 58967, 58979, 58991, 58997, 59009, 59011, 59021, 59023, 59029, 59051, 59053, 59063, 59069, 59077, 59083, 59093, 59107, 59113, 59119, 59123, 59141, 59149, 59159, 59167, 59183, 59197, 59207, 59209, 59219, 59221, 59233, 59239, 59243, 59263, 59273, 59281, 59333, 59341, 59351, 59357, 59359, 59369, 59377, 59387, 59393, 59399, 59407, 59417, 59419, 59441, 59443, 59447, 59453, 59467, 59471, 59473, 59497, 59509, 59513, 59539, 59557, 59561, 59567, 59581, 59611, 59617, 59621, 59627, 59629, 59651, 59659, 59663, 59669, 59671, 59693, 59699, 59707, 59723, 59729, 59743, 59747, 59753, 59771, 59779, 59791, 59797, 59809, 59833, 59863, 59879, 59887, 59921, 59929, 59951, 59957, 59971, 59981, 59999, 60013, 60017, 60029, 60037, 60041, 60077, 60083, 60089, 60091, 60101, 60103, 60107, 60127, 60133, 60139, 60149, 60161, 60167, 60169, 60209, 60217, 60223, 60251, 60257, 60259, 60271, 60289, 60293, 60317, 60331, 60337, 60343, 60353, 60373, 60383, 60397, 60413, 60427, 60443, 60449, 60457, 60493, 60497, 60509, 60521, 60527, 60539, 60589, 60601, 60607, 60611, 60617, 60623, 60631, 60637, 60647, 60649, 60659, 60661, 60679, 60689, 60703, 60719, 60727, 60733, 60737, 60757, 60761, 60763, 60773, 60779, 60793, 60811, 60821, 60859, 60869, 60887, 60889, 60899, 60901, 60913, 60917, 60919, 60923, 60937, 60943, 60953, 60961, 61001, 61007, 61027, 61031, 61043, 61051, 61057, 61091, 61099, 61121, 61129, 61141, 61151, 61153, 61169, 61211, 61223, 61231, 61253, 61261, 61283, 61291, 61297, 61331, 61333, 61339, 61343, 61357, 61363, 61379, 61381, 61403, 61409, 61417, 61441, 61463, 61469, 61471, 61483, 61487, 61493, 61507, 61511, 61519, 61543, 61547, 61553, 61559, 61561, 61583, 61603, 61609, 61613, 61627, 61631, 61637, 61643, 61651, 61657, 61667, 61673, 61681, 61687, 61703, 61717, 61723, 61729, 61751, 61757, 61781, 61813, 61819, 61837, 61843, 61861, 61871, 61879, 61909, 61927, 61933, 61949, 61961, 61967, 61979, 61981, 61987, 61991, 62003, 62011, 62017, 62039, 62047, 62053, 62057, 62071, 62081, 62099, 62119, 62129, 62131, 62137, 62141, 62143, 62171, 62189, 62191, 62201, 62207, 62213, 62219, 62233, 62273, 62297, 62299, 62303, 62311, 62323, 62327, 62347, 62351, 62383, 62401, 62417, 62423, 62459, 62467, 62473, 62477, 62483, 62497, 62501, 62507, 62533, 62539, 62549, 62563, 62581, 62591, 62597, 62603, 62617, 62627, 62633, 62639, 62653, 62659, 62683, 62687, 62701, 62723, 62731, 62743, 62753, 62761, 62773, 62791, 62801, 62819, 62827, 62851, 62861, 62869, 62873, 62897, 62903, 62921, 62927, 62929, 62939, 62969, 62971, 62981, 62983, 62987, 62989, 63029, 63031, 63059, 63067, 63073, 63079, 63097, 63103, 63113, 63127, 63131, 63149, 63179, 63197, 63199, 63211, 63241, 63247, 63277, 63281, 63299, 63311, 63313, 63317, 63331, 63337, 63347, 63353, 63361, 63367, 63377, 63389, 63391, 63397, 63409, 63419, 63421, 63439, 63443, 63463, 63467, 63473, 63487, 63493, 63499, 63521, 63527, 63533, 63541, 63559, 63577, 63587, 63589, 63599, 63601, 63607, 63611, 63617, 63629, 63647, 63649, 63659, 63667, 63671, 63689, 63691, 63697, 63703, 63709, 63719, 63727, 63737, 63743, 63761, 63773, 63781, 63793, 63799, 63803, 63809, 63823, 63839, 63841, 63853, 63857, 63863, 63901, 63907, 63913, 63929, 63949, 63977, 63997, 64007, 64013, 64019, 64033, 64037, 64063, 64067, 64081, 64091, 64109, 64123, 64151, 64153, 64157, 64171, 64187, 64189, 64217, 64223, 64231, 64237, 64271, 64279, 64283, 64301, 64303, 64319, 64327, 64333, 64373, 64381, 64399, 64403, 64433, 64439, 64451, 64453, 64483, 64489, 64499, 64513, 64553, 64567, 64577, 64579, 64591, 64601, 64609, 64613, 64621, 64627, 64633, 64661, 64663, 64667, 64679, 64693, 64709, 64717, 64747, 64763, 64781, 64783, 64793, 64811, 64817, 64849, 64853, 64871, 64877, 64879, 64891, 64901, 64919, 64921, 64927, 64937, 64951, 64969, 64997, 65003, 65011, 65027, 65029, 65033, 65053, 65063, 65071, 65089, 65099, 65101, 65111, 65119, 65123, 65129, 65141, 65147, 65167, 65171, 65173, 65179, 65183, 65203, 65213, 65239, 65257, 65267, 65269, 65287, 65293, 65309, 65323, 65327, 65353, 65357, 65371, 65381, 65393, 65407, 65413, 65419, 65423, 65437, 65447, 65449, 65479, 65497, 65519, 65521, 65537, 65539, 65543, 65551, 65557, 65563, 65579, 65581, 65587, 65599, 65609, 65617, 65629, 65633, 65647, 65651, 65657, 65677, 65687, 65699, 65701, 65707, 65713, 65717, 65719, 65729, 65731, 65761, 65777, 65789, 65809, 65827, 65831, 65837, 65839, 65843, 65851, 65867, 65881, 65899, 65921, 65927, 65929, 65951, 65957, 65963, 65981, 65983, 65993, 66029, 66037, 66041, 66047, 66067, 66071, 66083, 66089, 66103, 66107, 66109, 66137, 66161, 66169, 66173, 66179, 66191, 66221, 66239, 66271, 66293, 66301, 66337, 66343, 66347, 66359, 66361, 66373, 66377, 66383, 66403, 66413, 66431, 66449, 66457, 66463, 66467, 66491, 66499, 66509, 66523, 66529, 66533, 66541, 66553, 66569, 66571, 66587, 66593, 66601, 66617, 66629, 66643, 66653, 66683, 66697, 66701, 66713, 66721, 66733, 66739, 66749, 66751, 66763, 66791, 66797, 66809, 66821, 66841, 66851, 66853, 66863, 66877, 66883, 66889, 66919, 66923, 66931, 66943, 66947, 66949, 66959, 66973, 66977, 67003, 67021, 67033, 67043, 67049, 67057, 67061, 67073, 67079, 67103, 67121, 67129, 67139, 67141, 67153, 67157, 67169, 67181, 67187, 67189, 67211, 67213, 67217, 67219, 67231, 67247, 67261, 67271, 67273, 67289, 67307, 67339, 67343, 67349, 67369, 67391, 67399, 67409, 67411, 67421, 67427, 67429, 67433, 67447, 67453, 67477, 67481, 67489, 67493, 67499, 67511, 67523, 67531, 67537, 67547, 67559, 67567, 67577, 67579, 67589, 67601, 67607, 67619, 67631, 67651, 67679, 67699, 67709, 67723, 67733, 67741, 67751, 67757, 67759, 67763, 67777, 67783, 67789, 67801, 67807, 67819, 67829, 67843, 67853, 67867, 67883, 67891, 67901, 67927, 67931, 67933, 67939, 67943, 67957, 67961, 67967, 67979, 67987, 67993, 68023, 68041, 68053, 68059, 68071, 68087, 68099, 68111, 68113, 68141, 68147, 68161, 68171, 68207, 68209, 68213, 68219, 68227, 68239, 68261, 68279, 68281, 68311, 68329, 68351, 68371, 68389, 68399, 68437, 68443, 68447, 68449, 68473, 68477, 68483, 68489, 68491, 68501, 68507, 68521, 68531, 68539, 68543, 68567, 68581, 68597, 68611, 68633, 68639, 68659, 68669, 68683, 68687, 68699, 68711, 68713, 68729, 68737, 68743, 68749, 68767, 68771, 68777, 68791, 68813, 68819, 68821, 68863, 68879, 68881, 68891, 68897, 68899, 68903, 68909, 68917, 68927, 68947, 68963, 68993, 69001, 69011, 69019, 69029, 69031, 69061, 69067, 69073, 69109, 69119, 69127, 69143, 69149, 69151, 69163, 69191, 69193, 69197, 69203, 69221, 69233, 69239, 69247, 69257, 69259, 69263, 69313, 69317, 69337, 69341, 69371, 69379, 69383, 69389, 69401, 69403, 69427, 69431, 69439, 69457, 69463, 69467, 69473, 69481, 69491, 69493, 69497, 69499, 69539, 69557, 69593, 69623, 69653, 69661, 69677, 69691, 69697, 69709, 69737, 69739, 69761, 69763, 69767, 69779, 69809, 69821, 69827, 69829, 69833, 69847, 69857, 69859, 69877, 69899, 69911, 69929, 69931, 69941, 69959, 69991, 69997, 70001, 70003, 70009, 70019, 70039, 70051, 70061, 70067, 70079, 70099, 70111, 70117, 70121, 70123, 70139, 70141, 70157, 70163, 70177, 70181, 70183, 70199, 70201, 70207, 70223, 70229, 70237, 70241, 70249, 70271, 70289, 70297, 70309, 70313, 70321, 70327, 70351, 70373, 70379, 70381, 70393, 70423, 70429, 70439, 70451, 70457, 70459, 70481, 70487, 70489, 70501, 70507, 70529, 70537, 70549, 70571, 70573, 70583, 70589, 70607, 70619, 70621, 70627, 70639, 70657, 70663, 70667, 70687, 70709, 70717, 70729, 70753, 70769, 70783, 70793, 70823, 70841, 70843, 70849, 70853, 70867, 70877, 70879, 70891, 70901, 70913, 70919, 70921, 70937, 70949, 70951, 70957, 70969, 70979, 70981, 70991, 70997, 70999, 71011, 71023, 71039, 71059, 71069, 71081, 71089, 71119, 71129, 71143, 71147, 71153, 71161, 71167, 71171, 71191, 71209, 71233, 71237, 71249, 71257, 71261, 71263, 71287, 71293, 71317, 71327, 71329, 71333, 71339, 71341, 71347, 71353, 71359, 71363, 71387, 71389, 71399, 71411, 71413, 71419, 71429, 71437, 71443, 71453, 71471, 71473, 71479, 71483, 71503, 71527, 71537, 71549, 71551, 71563, 71569, 71593, 71597, 71633, 71647, 71663, 71671, 71693, 71699, 71707, 71711, 71713, 71719, 71741, 71761, 71777, 71789, 71807, 71809, 71821, 71837, 71843, 71849, 71861, 71867, 71879, 71881, 71887, 71899, 71909, 71917, 71933, 71941, 71947, 71963, 71971, 71983, 71987, 71993, 71999, 72019, 72031, 72043, 72047, 72053, 72073, 72077, 72089, 72091, 72101, 72103, 72109, 72139, 72161, 72167, 72169, 72173, 72211, 72221, 72223, 72227, 72229, 72251, 72253, 72269, 72271, 72277, 72287, 72307, 72313, 72337, 72341, 72353, 72367, 72379, 72383, 72421, 72431, 72461, 72467, 72469, 72481, 72493, 72497, 72503, 72533, 72547, 72551, 72559, 72577, 72613, 72617, 72623, 72643, 72647, 72649, 72661, 72671, 72673, 72679, 72689, 72701, 72707, 72719, 72727, 72733, 72739, 72763, 72767, 72797, 72817, 72823, 72859, 72869, 72871, 72883, 72889, 72893, 72901, 72907, 72911, 72923, 72931, 72937, 72949, 72953, 72959, 72973, 72977, 72997, 73009, 73013, 73019, 73037, 73039, 73043, 73061, 73063, 73079, 73091, 73121, 73127, 73133, 73141, 73181, 73189, 73237, 73243, 73259, 73277, 73291, 73303, 73309, 73327, 73331, 73351, 73361, 73363, 73369, 73379, 73387, 73417, 73421, 73433, 73453, 73459, 73471, 73477, 73483, 73517, 73523, 73529, 73547, 73553, 73561, 73571, 73583, 73589, 73597, 73607, 73609, 73613, 73637, 73643, 73651, 73673, 73679, 73681, 73693, 73699, 73709, 73721, 73727, 73751, 73757, 73771, 73783, 73819, 73823, 73847, 73849, 73859, 73867, 73877, 73883, 73897, 73907, 73939, 73943, 73951, 73961, 73973, 73999, 74017, 74021, 74027, 74047, 74051, 74071, 74077, 74093, 74099, 74101, 74131, 74143, 74149, 74159, 74161, 74167, 74177, 74189, 74197, 74201, 74203, 74209, 74219, 74231, 74257, 74279, 74287, 74293, 74297, 74311, 74317, 74323, 74353, 74357, 74363, 74377, 74381, 74383, 74411, 74413, 74419, 74441, 74449, 74453, 74471, 74489, 74507, 74509, 74521, 74527, 74531, 74551, 74561, 74567, 74573, 74587, 74597, 74609, 74611, 74623, 74653, 74687, 74699, 74707, 74713, 74717, 74719, 74729, 74731, 74747, 74759, 74761, 74771, 74779, 74797, 74821, 74827, 74831, 74843, 74857, 74861, 74869, 74873, 74887, 74891, 74897, 74903, 74923, 74929, 74933, 74941, 74959, 75011, 75013, 75017, 75029, 75037, 75041, 75079, 75083, 75109, 75133, 75149, 75161, 75167, 75169, 75181, 75193, 75209, 75211, 75217, 75223, 75227, 75239, 75253, 75269, 75277, 75289, 75307, 75323, 75329, 75337, 75347, 75353, 75367, 75377, 75389, 75391, 75401, 75403, 75407, 75431, 75437, 75479, 75503, 75511, 75521, 75527, 75533, 75539, 75541, 75553, 75557, 75571, 75577, 75583, 75611, 75617, 75619, 75629, 75641, 75653, 75659, 75679, 75683, 75689, 75703, 75707, 75709, 75721, 75731, 75743, 75767, 75773, 75781, 75787, 75793, 75797, 75821, 75833, 75853, 75869, 75883, 75913, 75931, 75937, 75941, 75967, 75979, 75983, 75989, 75991, 75997, 76001, 76003, 76031, 76039, 76079, 76081, 76091, 76099, 76103, 76123, 76129, 76147, 76157, 76159, 76163, 76207, 76213, 76231, 76243, 76249, 76253, 76259, 76261, 76283, 76289, 76303, 76333, 76343, 76367, 76369, 76379, 76387, 76403, 76421, 76423, 76441, 76463, 76471, 76481, 76487, 76493, 76507, 76511, 76519, 76537, 76541, 76543, 76561, 76579, 76597, 76603, 76607, 76667, 76673, 76679, 76697, 76717, 76733, 76753, 76757, 76771, 76777, 76781, 76801, 76819, 76829, 76831, 76837, 76847, 76871, 76873, 76883, 76907, 76913, 76919, 76943, 76949, 76961, 76963, 76991, 77003, 77017, 77023, 77029, 77041, 77047, 77069, 77081, 77093, 77101, 77137, 77141, 77153, 77167, 77171, 77191, 77201, 77213, 77237, 77239, 77243, 77249, 77261, 77263, 77267, 77269, 77279, 77291, 77317, 77323, 77339, 77347, 77351, 77359, 77369, 77377, 77383, 77417, 77419, 77431, 77447, 77471, 77477, 77479, 77489, 77491, 77509, 77513, 77521, 77527, 77543, 77549, 77551, 77557, 77563, 77569, 77573, 77587, 77591, 77611, 77617, 77621, 77641, 77647, 77659, 77681, 77687, 77689, 77699, 77711, 77713, 77719, 77723, 77731, 77743, 77747, 77761, 77773, 77783, 77797, 77801, 77813, 77839, 77849, 77863, 77867, 77893, 77899, 77929, 77933, 77951, 77969, 77977, 77983, 77999, 78007, 78017, 78031, 78041, 78049, 78059, 78079, 78101, 78121, 78137, 78139, 78157, 78163, 78167, 78173, 78179, 78191, 78193, 78203, 78229, 78233, 78241, 78259, 78277, 78283, 78301, 78307, 78311, 78317, 78341, 78347, 78367, 78401, 78427, 78437, 78439, 78467, 78479, 78487, 78497, 78509, 78511, 78517, 78539, 78541, 78553, 78569, 78571, 78577, 78583, 78593, 78607, 78623, 78643, 78649, 78653, 78691, 78697, 78707, 78713, 78721, 78737, 78779, 78781, 78787, 78791, 78797, 78803, 78809, 78823, 78839, 78853, 78857, 78877, 78887, 78889, 78893, 78901, 78919, 78929, 78941, 78977, 78979, 78989, 79031, 79039, 79043, 79063, 79087, 79103, 79111, 79133, 79139, 79147, 79151, 79153, 79159, 79181, 79187, 79193, 79201, 79229, 79231, 79241, 79259, 79273, 79279, 79283, 79301, 79309, 79319, 79333, 79337, 79349, 79357, 79367, 79379, 79393, 79397, 79399, 79411, 79423, 79427, 79433, 79451, 79481, 79493, 79531, 79537, 79549, 79559, 79561, 79579, 79589, 79601, 79609, 79613, 79621, 79627, 79631, 79633, 79657, 79669, 79687, 79691, 79693, 79697, 79699, 79757, 79769, 79777, 79801, 79811, 79813, 79817, 79823, 79829, 79841, 79843, 79847, 79861, 79867, 79873, 79889, 79901, 79903, 79907, 79939, 79943, 79967, 79973, 79979, 79987, 79997, 79999, 80021, 80039, 80051, 80071, 80077, 80107, 80111, 80141, 80147, 80149, 80153, 80167, 80173, 80177, 80191, 80207, 80209, 80221, 80231, 80233, 80239, 80251, 80263, 80273, 80279, 80287, 80309, 80317, 80329, 80341, 80347, 80363, 80369, 80387, 80407, 80429, 80447, 80449, 80471, 80473, 80489, 80491, 80513, 80527, 80537, 80557, 80567, 80599, 80603, 80611, 80621, 80627, 80629, 80651, 80657, 80669, 80671, 80677, 80681, 80683, 80687, 80701, 80713, 80737, 80747, 80749, 80761, 80777, 80779, 80783, 80789, 80803, 80809, 80819, 80831, 80833, 80849, 80863, 80897, 80909, 80911, 80917, 80923, 80929, 80933, 80953, 80963, 80989, 81001, 81013, 81017, 81019, 81023, 81031, 81041, 81043, 81047, 81049, 81071, 81077, 81083, 81097, 81101, 81119, 81131, 81157, 81163, 81173, 81181, 81197, 81199, 81203, 81223, 81233, 81239, 81281, 81283, 81293, 81299, 81307, 81331, 81343, 81349, 81353, 81359, 81371, 81373, 81401, 81409, 81421, 81439, 81457, 81463, 81509, 81517, 81527, 81533, 81547, 81551, 81553, 81559, 81563, 81569, 81611, 81619, 81629, 81637, 81647, 81649, 81667, 81671, 81677, 81689, 81701, 81703, 81707, 81727, 81737, 81749, 81761, 81769, 81773, 81799, 81817, 81839, 81847, 81853, 81869, 81883, 81899, 81901, 81919, 81929, 81931, 81937, 81943, 81953, 81967, 81971, 81973, 82003, 82007, 82009, 82013, 82021, 82031, 82037, 82039, 82051, 82067, 82073, 82129, 82139, 82141, 82153, 82163, 82171, 82183, 82189, 82193, 82207, 82217, 82219, 82223, 82231, 82237, 82241, 82261, 82267, 82279, 82301, 82307, 82339, 82349, 82351, 82361, 82373, 82387, 82393, 82421, 82457, 82463, 82469, 82471, 82483, 82487, 82493, 82499, 82507, 82529, 82531, 82549, 82559, 82561, 82567, 82571, 82591, 82601, 82609, 82613, 82619, 82633, 82651, 82657, 82699, 82721, 82723, 82727, 82729, 82757, 82759, 82763, 82781, 82787, 82793, 82799, 82811, 82813, 82837, 82847, 82883, 82889, 82891, 82903, 82913, 82939, 82963, 82981, 82997, 83003, 83009, 83023, 83047, 83059, 83063, 83071, 83077, 83089, 83093, 83101, 83117, 83137, 83177, 83203, 83207, 83219, 83221, 83227, 83231, 83233, 83243, 83257, 83267, 83269, 83273, 83299, 83311, 83339, 83341, 83357, 83383, 83389, 83399, 83401, 83407, 83417, 83423, 83431, 83437, 83443, 83449, 83459, 83471, 83477, 83497, 83537, 83557, 83561, 83563, 83579, 83591, 83597, 83609, 83617, 83621, 83639, 83641, 83653, 83663, 83689, 83701, 83717, 83719, 83737, 83761, 83773, 83777, 83791, 83813, 83833, 83843, 83857, 83869, 83873, 83891, 83903, 83911, 83921, 83933, 83939, 83969, 83983, 83987, 84011, 84017, 84047, 84053, 84059, 84061, 84067, 84089, 84121, 84127, 84131, 84137, 84143, 84163, 84179, 84181, 84191, 84199, 84211, 84221, 84223, 84229, 84239, 84247, 84263, 84299, 84307, 84313, 84317, 84319, 84347, 84349, 84377, 84389, 84391, 84401, 84407, 84421, 84431, 84437, 84443, 84449, 84457, 84463, 84467, 84481, 84499, 84503, 84509, 84521, 84523, 84533, 84551, 84559, 84589, 84629, 84631, 84649, 84653, 84659, 84673, 84691, 84697, 84701, 84713, 84719, 84731, 84737, 84751, 84761, 84787, 84793, 84809, 84811, 84827, 84857, 84859, 84869, 84871, 84913, 84919, 84947, 84961, 84967, 84977, 84979, 84991, 85009, 85021, 85027, 85037, 85049, 85061, 85081, 85087, 85091, 85093, 85103, 85109, 85121, 85133, 85147, 85159, 85193, 85199, 85201, 85213, 85223, 85229, 85237, 85243, 85247, 85259, 85297, 85303, 85313, 85331, 85333, 85361, 85363, 85369, 85381, 85411, 85427, 85429, 85439, 85447, 85451, 85453, 85469, 85487, 85513, 85517, 85523, 85531, 85549, 85571, 85577, 85597, 85601, 85607, 85619, 85621, 85627, 85639, 85643, 85661, 85667, 85669, 85691, 85703, 85711, 85717, 85733, 85751, 85781, 85793, 85817, 85819, 85829, 85831, 85837, 85843, 85847, 85853, 85889, 85903, 85909, 85931, 85933, 85991, 85999, 86011, 86017, 86027, 86029, 86069, 86077, 86083, 86111, 86113, 86117, 86131, 86137, 86143, 86161, 86171, 86179, 86183, 86197, 86201, 86209, 86239, 86243, 86249, 86257, 86263, 86269, 86287, 86291, 86293, 86297, 86311, 86323, 86341, 86351, 86353, 86357, 86369, 86371, 86381, 86389, 86399, 86413, 86423, 86441, 86453, 86461, 86467, 86477, 86491, 86501, 86509, 86531, 86533, 86539, 86561, 86573, 86579, 86587, 86599, 86627, 86629, 86677, 86689, 86693, 86711, 86719, 86729, 86743, 86753, 86767, 86771, 86783, 86813, 86837, 86843, 86851, 86857, 86861, 86869, 86923, 86927, 86929, 86939, 86951, 86959, 86969, 86981, 86993, 87011, 87013, 87037, 87041, 87049, 87071, 87083, 87103, 87107, 87119, 87121, 87133, 87149, 87151, 87179, 87181, 87187, 87211, 87221, 87223, 87251, 87253, 87257, 87277, 87281, 87293, 87299, 87313, 87317, 87323, 87337, 87359, 87383, 87403, 87407, 87421, 87427, 87433, 87443, 87473, 87481, 87491, 87509, 87511, 87517, 87523, 87539, 87541, 87547, 87553, 87557, 87559, 87583, 87587, 87589, 87613, 87623, 87629, 87631, 87641, 87643, 87649, 87671, 87679, 87683, 87691, 87697, 87701, 87719, 87721, 87739, 87743, 87751, 87767, 87793, 87797, 87803, 87811, 87833, 87853, 87869, 87877, 87881, 87887, 87911, 87917, 87931, 87943, 87959, 87961, 87973, 87977, 87991, 88001, 88003, 88007, 88019, 88037, 88069, 88079, 88093, 88117, 88129, 88169, 88177, 88211, 88223, 88237, 88241, 88259, 88261, 88289, 88301, 88321, 88327, 88337, 88339, 88379, 88397, 88411, 88423, 88427, 88463, 88469, 88471, 88493, 88499, 88513, 88523, 88547, 88589, 88591, 88607, 88609, 88643, 88651, 88657, 88661, 88663, 88667, 88681, 88721, 88729, 88741, 88747, 88771, 88789, 88793, 88799, 88801, 88807, 88811, 88813, 88817, 88819, 88843, 88853, 88861, 88867, 88873, 88883, 88897, 88903, 88919, 88937, 88951, 88969, 88993, 88997, 89003, 89009, 89017, 89021, 89041, 89051, 89057, 89069, 89071, 89083, 89087, 89101, 89107, 89113, 89119, 89123, 89137, 89153, 89189, 89203, 89209, 89213, 89227, 89231, 89237, 89261, 89269, 89273, 89293, 89303, 89317, 89329, 89363, 89371, 89381, 89387, 89393, 89399, 89413, 89417, 89431, 89443, 89449, 89459, 89477, 89491, 89501, 89513, 89519, 89521, 89527, 89533, 89561, 89563, 89567, 89591, 89597, 89599, 89603, 89611, 89627, 89633, 89653, 89657, 89659, 89669, 89671, 89681, 89689, 89753, 89759, 89767, 89779, 89783, 89797, 89809, 89819, 89821, 89833, 89839, 89849, 89867, 89891, 89897, 89899, 89909, 89917, 89923, 89939, 89959, 89963, 89977, 89983, 89989, 90001, 90007, 90011, 90017, 90019, 90023, 90031, 90053, 90059, 90067, 90071, 90073, 90089, 90107, 90121, 90127, 90149, 90163, 90173, 90187, 90191, 90197, 90199, 90203, 90217, 90227, 90239, 90247, 90263, 90271, 90281, 90289, 90313, 90353, 90359, 90371, 90373, 90379, 90397, 90401, 90403, 90407, 90437, 90439, 90469, 90473, 90481, 90499, 90511, 90523, 90527, 90529, 90533, 90547, 90583, 90599, 90617, 90619, 90631, 90641, 90647, 90659, 90677, 90679, 90697, 90703, 90709, 90731, 90749, 90787, 90793, 90803, 90821, 90823, 90833, 90841, 90847, 90863, 90887, 90901, 90907, 90911, 90917, 90931, 90947, 90971, 90977, 90989, 90997, 91009, 91019, 91033, 91079, 91081, 91097, 91099, 91121, 91127, 91129, 91139, 91141, 91151, 91153, 91159, 91163, 91183, 91193, 91199, 91229, 91237, 91243, 91249, 91253, 91283, 91291, 91297, 91303, 91309, 91331, 91367, 91369, 91373, 91381, 91387, 91393, 91397, 91411, 91423, 91433, 91453, 91457, 91459, 91463, 91493, 91499, 91513, 91529, 91541, 91571, 91573, 91577, 91583, 91591, 91621, 91631, 91639, 91673, 91691, 91703, 91711, 91733, 91753, 91757, 91771, 91781, 91801, 91807, 91811, 91813, 91823, 91837, 91841, 91867, 91873, 91909, 91921, 91939, 91943, 91951, 91957, 91961, 91967, 91969, 91997, 92003, 92009, 92033, 92041, 92051, 92077, 92083, 92107, 92111, 92119, 92143, 92153, 92173, 92177, 92179, 92189, 92203, 92219, 92221, 92227, 92233, 92237, 92243, 92251, 92269, 92297, 92311, 92317, 92333, 92347, 92353, 92357, 92363, 92369, 92377, 92381, 92383, 92387, 92399, 92401, 92413, 92419, 92431, 92459, 92461, 92467, 92479, 92489, 92503, 92507, 92551, 92557, 92567, 92569, 92581, 92593, 92623, 92627, 92639, 92641, 92647, 92657, 92669, 92671, 92681, 92683, 92693, 92699, 92707, 92717, 92723, 92737, 92753, 92761, 92767, 92779, 92789, 92791, 92801, 92809, 92821, 92831, 92849, 92857, 92861, 92863, 92867, 92893, 92899, 92921, 92927, 92941, 92951, 92957, 92959, 92987, 92993, 93001, 93047, 93053, 93059, 93077, 93083, 93089, 93097, 93103, 93113, 93131, 93133, 93139, 93151, 93169, 93179, 93187, 93199, 93229, 93239, 93241, 93251, 93253, 93257, 93263, 93281, 93283, 93287, 93307, 93319, 93323, 93329, 93337, 93371, 93377, 93383, 93407, 93419, 93427, 93463, 93479, 93481, 93487, 93491, 93493, 93497, 93503, 93523, 93529, 93553, 93557, 93559, 93563, 93581, 93601, 93607, 93629, 93637, 93683, 93701, 93703, 93719, 93739, 93761, 93763, 93787, 93809, 93811, 93827, 93851, 93871, 93887, 93889, 93893, 93901, 93911, 93913, 93923, 93937, 93941, 93949, 93967, 93971, 93979, 93983, 93997, 94007, 94009, 94033, 94049, 94057, 94063, 94079, 94099, 94109, 94111, 94117, 94121, 94151, 94153, 94169, 94201, 94207, 94219, 94229, 94253, 94261, 94273, 94291, 94307, 94309, 94321, 94327, 94331, 94343, 94349, 94351, 94379, 94397, 94399, 94421, 94427, 94433, 94439, 94441, 94447, 94463, 94477, 94483, 94513, 94529, 94531, 94541, 94543, 94547, 94559, 94561, 94573, 94583, 94597, 94603, 94613, 94621, 94649, 94651, 94687, 94693, 94709, 94723, 94727, 94747, 94771, 94777, 94781, 94789, 94793, 94811, 94819, 94823, 94837, 94841, 94847, 94849, 94873, 94889, 94903, 94907, 94933, 94949, 94951, 94961, 94993, 94999, 95003, 95009, 95021, 95027, 95063, 95071, 95083, 95087, 95089, 95093, 95101, 95107, 95111, 95131, 95143, 95153, 95177, 95189, 95191, 95203, 95213, 95219, 95231, 95233, 95239, 95257, 95261, 95267, 95273, 95279, 95287, 95311, 95317, 95327, 95339, 95369, 95383, 95393, 95401, 95413, 95419, 95429, 95441, 95443, 95461, 95467, 95471, 95479, 95483, 95507, 95527, 95531, 95539, 95549, 95561, 95569, 95581, 95597, 95603, 95617, 95621, 95629, 95633, 95651, 95701, 95707, 95713, 95717, 95723, 95731, 95737, 95747, 95773, 95783, 95789, 95791, 95801, 95803, 95813, 95819, 95857, 95869, 95873, 95881, 95891, 95911, 95917, 95923, 95929, 95947, 95957, 95959, 95971, 95987, 95989, 96001, 96013, 96017, 96043, 96053, 96059, 96079, 96097, 96137, 96149, 96157, 96167, 96179, 96181, 96199, 96211, 96221, 96223, 96233, 96259, 96263, 96269, 96281, 96289, 96293, 96323, 96329, 96331, 96337, 96353, 96377, 96401, 96419, 96431, 96443, 96451, 96457, 96461, 96469, 96479, 96487, 96493, 96497, 96517, 96527, 96553, 96557, 96581, 96587, 96589, 96601, 96643, 96661, 96667, 96671, 96697, 96703, 96731, 96737, 96739, 96749, 96757, 96763, 96769, 96779, 96787, 96797, 96799, 96821, 96823, 96827, 96847, 96851, 96857, 96893, 96907, 96911, 96931, 96953, 96959, 96973, 96979, 96989, 96997, 97001, 97003, 97007, 97021, 97039, 97073, 97081, 97103, 97117, 97127, 97151, 97157, 97159, 97169, 97171, 97177, 97187, 97213, 97231, 97241, 97259, 97283, 97301, 97303, 97327, 97367, 97369, 97373, 97379, 97381, 97387, 97397, 97423, 97429, 97441, 97453, 97459, 97463, 97499, 97501, 97511, 97523, 97547, 97549, 97553, 97561, 97571, 97577, 97579, 97583, 97607, 97609, 97613, 97649, 97651, 97673, 97687, 97711, 97729, 97771, 97777, 97787, 97789, 97813, 97829, 97841, 97843, 97847, 97849, 97859, 97861, 97871, 97879, 97883, 97919, 97927, 97931, 97943, 97961, 97967, 97973, 97987, 98009, 98011, 98017, 98041, 98047, 98057, 98081, 98101, 98123, 98129, 98143, 98179, 98207, 98213, 98221, 98227, 98251, 98257, 98269, 98297, 98299, 98317, 98321, 98323, 98327, 98347, 98369, 98377, 98387, 98389, 98407, 98411, 98419, 98429, 98443, 98453, 98459, 98467, 98473, 98479, 98491, 98507, 98519, 98533, 98543, 98561, 98563, 98573, 98597, 98621, 98627, 98639, 98641, 98663, 98669, 98689, 98711, 98713, 98717, 98729, 98731, 98737, 98773, 98779, 98801, 98807, 98809, 98837, 98849, 98867, 98869, 98873, 98887, 98893, 98897, 98899, 98909, 98911, 98927, 98929, 98939, 98947, 98953, 98963, 98981, 98993, 98999, 99013, 99017, 99023, 99041, 99053, 99079, 99083, 99089, 99103, 99109, 99119, 99131, 99133, 99137, 99139, 99149, 99173, 99181, 99191, 99223, 99233, 99241, 99251, 99257, 99259, 99277, 99289, 99317, 99347, 99349, 99367, 99371, 99377, 99391, 99397, 99401, 99409, 99431, 99439, 99469, 99487, 99497, 99523, 99527, 99529, 99551, 99559, 99563, 99571, 99577, 99581, 99607, 99611, 99623, 99643, 99661, 99667, 99679, 99689, 99707, 99709, 99713, 99719, 99721, 99733, 99761, 99767, 99787, 99793, 99809, 99817, 99823, 99829, 99833, 99839, 99859, 99871, 99877, 99881, 99901, 99907, 99923, 99929, 99961, 99971, 99989, 99991, 100003, 100019, 100043, 100049, 100057, 100069, 100103, 100109, 100129, 100151, 100153, 100169, 100183, 100189, 100193, 100207, 100213, 100237, 100267, 100271, 100279, 100291, 100297, 100313, 100333, 100343, 100357, 100361, 100363, 100379, 100391, 100393, 100403, 100411, 100417, 100447, 100459, 100469, 100483, 100493, 100501, 100511, 100517, 100519, 100523, 100537, 100547, 100549, 100559, 100591, 100609, 100613, 100621, 100649, 100669, 100673, 100693, 100699, 100703, 100733, 100741, 100747, 100769, 100787, 100799, 100801, 100811, 100823, 100829, 100847, 100853, 100907, 100913, 100927, 100931, 100937, 100943, 100957, 100981, 100987, 100999, 101009, 101021, 101027, 101051, 101063, 101081, 101089, 101107, 101111, 101113, 101117, 101119, 101141, 101149, 101159, 101161, 101173, 101183, 101197, 101203, 101207, 101209, 101221, 101267, 101273, 101279, 101281, 101287, 101293, 101323, 101333, 101341, 101347, 101359, 101363, 101377, 101383, 101399, 101411, 101419, 101429, 101449, 101467, 101477, 101483, 101489, 101501, 101503, 101513, 101527, 101531, 101533, 101537, 101561, 101573, 101581, 101599, 101603, 101611, 101627, 101641, 101653, 101663, 101681, 101693, 101701, 101719, 101723, 101737, 101741, 101747, 101749, 101771, 101789, 101797, 101807, 101833, 101837, 101839, 101863, 101869, 101873, 101879, 101891, 101917, 101921, 101929, 101939, 101957, 101963, 101977, 101987, 101999, 102001, 102013, 102019, 102023, 102031, 102043, 102059, 102061, 102071, 102077, 102079, 102101, 102103, 102107, 102121, 102139, 102149, 102161, 102181, 102191, 102197, 102199, 102203, 102217, 102229, 102233, 102241, 102251, 102253, 102259, 102293, 102299, 102301, 102317, 102329, 102337, 102359, 102367, 102397, 102407, 102409, 102433, 102437, 102451, 102461, 102481, 102497, 102499, 102503, 102523, 102533, 102539, 102547, 102551, 102559, 102563, 102587, 102593, 102607, 102611, 102643, 102647, 102653, 102667, 102673, 102677, 102679, 102701, 102761, 102763, 102769, 102793, 102797, 102811, 102829, 102841, 102859, 102871, 102877, 102881, 102911, 102913, 102929, 102931, 102953, 102967, 102983, 103001, 103007, 103043, 103049, 103067, 103069, 103079, 103087, 103091, 103093, 103099, 103123, 103141, 103171, 103177, 103183, 103217, 103231, 103237, 103289, 103291, 103307, 103319, 103333, 103349, 103357, 103387, 103391, 103393, 103399, 103409, 103421, 103423, 103451, 103457, 103471, 103483, 103511, 103529, 103549, 103553, 103561, 103567, 103573, 103577, 103583, 103591, 103613, 103619, 103643, 103651, 103657, 103669, 103681, 103687, 103699, 103703, 103723, 103769];

for (let int of int1) {
    start = performance.now();
    result = test1(int)
    dump.a += result
    stop = performance.now() - start;
    // console.log(result, stop, '1')
    acc.a += stop

    start = performance.now();
    result = test2(int)
    dump.b += result
    stop = performance.now() - start;
    // console.log(result, stop, '2')
    acc.b += stop

    start = performance.now();
    result = test3(int)
    dump.c += result
    stop = performance.now() - start;
    // console.log(result, stop, '3')
    acc.c += stop


}

console.log(acc)

console.log(dump)
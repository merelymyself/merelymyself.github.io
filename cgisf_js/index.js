function get_word(char) {
    var paths = ["abnormally absentmindedly accidentally acidly actually adventurously afterwards almost always angrily annually anxiously arrogantly awkwardly badly bashfully beautifully bitterly bleakly blindly blissfully boastfully boldly bravely briefly brightly briskly broadly busily calmly carefully carelessly cautiously certainly cheerfully clearly cleverly closely coaxingly colorfully commonly continually coolly correctly courageously crossly cruelly curiously daily daintily dearly deceivingly delightfully deeply defiantly deliberately delightfully diligently dimly doubtfully dreamily easily elegantly energetically enormously enthusiastically evenly eventually exactly excitedly faithfully famously fatally ferociously fervently fiercely fondly foolishly fortunately frankly frantically freely frenetically frightfully fully furiously generally generously gently gladly gleefully gracefully gratefully greatly greedily happily hastily healthily heavily helpfully helplessly highly honestly hopelessly hourly hungrily immediately innocently inquisitively instantly intensely intently interestingly inwardly irritably jaggedly jealously joshingly joyfully joyously jovially jubilantly judgmentally justly keenly kiddingly kindheartedly kindly knavishly knottily knowingly knowledgeably kookily lazily lightly likely limply lively loftily longingly loosely lovingly loudly loyally madly majestically meaningfully mechanically merrily miserably mockingly monthly mortally mostly mysteriously naturally nearly neatly needily nervously never nicely noisily obediently obnoxiously occasionally oddly offensively officially often only openly optimistically overconfidently owlishly painfully partially patiently perfectly physically playfully politely poorly positively potentially powerfully promptly properly punctually quaintly quarrelsomely queasily queerly questionably questioningly quicker quickly quietly quirkily quizzically rapidly rarely readily really reassuringly recklessly regularly reluctantly repeatedly reproachfully restfully righteously rightfully rigidly roughly rudely sadly safely scarcely scarily searchingly sedately seemingly seldom selfishly separately seriously shakily sharply sheepishly shrilly shyly silently sleepily slowly smoothly softly solemnly solidly sometimes speedily stealthily sternly strictly successfully suddenly surprisingly suspiciously sweetly swiftly sympathetically tenderly tensely terribly thankfully thoroughly thoughtfully tightly tomorrow too tremendously triumphantly truly truthfully ultimately unabashedly unaccountably unbearably unethically unexpectedly unfortunately unimpressively unnaturally unnecessarily utterly upbeat upliftingly upwardly urgently usefully uselessly usually utterly vacantly vaguely vainly valiantly viciously victoriously violently vivaciously voluntarily warmly weakly wearily wildly willfully wisely woefully wonderfully worriedly wrongly yawningly yearly yearningly yieldingly youthfully zealously zestfully zestily",
    "young old new fresh green aged elderly youthful novel original modern stale mature senior grey",
    "colourless alizarin amaranth amber amethyst apricot aqua aquamarine asparagus auburn azure beige bistre black blue blue-green blue-violet bondi-blue brass bronze brown buff burgundy camouflage-green caput-mortuum cardinal carmine carrot-orange celadon cerise cerulean champagne charcoal chartreuse cherry-blossom-pink chestnut chocolate cinnabar cinnamon cobalt copper coral corn cornflower cream crimson cyan dandelion denim ecru emerald eggplant falu-red fern-green firebrick flax forest-green french-rose fuchsia gamboge gold goldenrod green grey han-purple harlequin heliotrope indigo ivory jade kelly-green khaki lavender lawn-green lemon lemon-chiffon lilac lime lime-green linen magenta magnolia malachite maroon mauve midnight-blue mint-green misty-rose moss-green mustard myrtle navajo-white navy-blue ochre office-green olive olivine orange orchid papaya-whip peach pear periwinkle persimmon pine-green pink platinum plum powder-blue puce prussian-blue pumpkin purple quartz-grey raw-umber razzmatazz red robin-egg-blue rose royal-blue royal-purple ruby russet rust safety-orange saffron salmon sandy-brown sangria sapphire scarlet school-bus-yellow sea-green seashell sepia shamrock-green shocking-pink silver sky-blue slate-grey smalt spring-bud spring-green steel-blue tan tangerine taupe teal tawny terracotta thistle titanium-white tomato turquoise tyrian-purple ultramarine van-dyke-brown vermilion violet viridian wheat white wisteria yellow zucchini",
    "metal wood plastic concrete gold silver cotton leather polyester silk wool velvet nylon stone diamond copper iron quartz ruby metal plastic paper glass crystal",
    "error-noun.txt",
    "unusual amazing special unique incredible boring interesting curious uncommon abnormal surprising unfamiliar different customary typical normal conventional traditional nontraditional peculiar strange familiar regular pretty beautiful comfortable good bad great terrible ugly awful uncomfortable tasty nasty important excellent unimportant wonderful brilliant smart funny",
    "crashes boxes men women oxen geese societies activities bodies stories industries strategies technologies armies universities philosophies properties categories opportunities responsibilities cities counties deliveries difficulties charities possibilities injuries groceries penalties quantities ladies economies companies skies babies parties copies duties buddies salaries candies juries tries flies worries cries nobodies anybodies successes losses weaknesses businesses processes bosses classes stresses addresses glasses dresses crosses messes witnesses guesses kisses horses hosts husbands loans mistakes mountains nails noises occasions packages patients pauses phrases proofs races reliefs sands sentences shoulders smokes stomachs strings tourists towels vacations wheels wines arms asides associates bets blows borders branches breasts brothers bunches chips coaches documents drafts dusts experts floors gods golfs habits irons judges knifes landscapes leagues mails natives openings parents patterns pins pools pounds requests shames shelters shoes silvers tackles tanks trusts assists bakes bars bells bikes blames boys bricks chairs closets clues collars comments conferences devils diets fears fuels gloves jackets lunches monitors mortgages nurses paces panics peaks planes rewards rows sandwiches shocks spites sprays surprises tills transitions weekends welcomes yards alarms bends bicycles bites blinds bottles cables candles clerks clouds concerts counters flowers grandfathers harms knees lawyers leathers loads mirrors necks pensions plates purples ruins ships skirts slices snows specialists strokes switches trash tunes zones angers awards bids bitters boots bugs camps carpets cats champions channels clocks comforts cows cracks engineers entrances faults guys hells highlights incidents islands jokes legs lips mates motors nerves passages pens prides priests prizes promises residents resorts rings roofs ropes sails schemes scripts socks stations toes towers trucks cans wills others goods looks helps beings stills keeps starts humans locals generals plays feels sets changes pasts possibles particulars todays majors personals currents nationals cuts naturals physicals shows checks seconds calls moves increases singles individuals turns guards offers potentials professionals internationals cooks alternatives followings specials dances excuses colds purchases deals falls positives produces searches presents spends talks creatives tells costs drives greens supports glads removes returns runs complexes dues middles regulars reserves independents leaves originals reaches rests serves watches charges actives breaks negatives safes stays visits visuals affects covers reports rises walks whites juniors picks anythings classics finals lifts mixes privates stops teachers westerns concerns familiars officials broads gains maybes saves stands fails hellos leads listens valuables handles meets releases sells finishes normals rides secrets spreads springs toughs waits browns deeps displays flows objectives shoots touches chemicals dumps pushes conflicts jumps kicks opposites pitches remotes totals treats vasts abuses beats burns deposits prints raises sleeps somewheres advances doubles draws equals fixes hires internals joins kills taps wins attacks claims constants drags drinks minors pulls solids wears weirds wonders annuals counts doubts feeds forevers repeats rounds sings slides strips wishes combines commands digs divides equivalents hangs hunts initials mentions smells spirituals surveys ties adults briefs hates repairs scratches strikes hurts laughs royals seniors strains struggles swims trains uppers yellows converts dependents folds grabs hides permits quotes recovers resolves rolls sinks slips spares suspects sweets swings twists estimates males mines prompts regrets reveals shakes shifts bears dears delays drunks females invites pops representatives rubs smiles spells stupids tears tomorrows wakes wraps yesterdays ideas",
    "error-singular.txt",
    "big massive tiny large humongous huge enormous minuscule minute microscopic little tall small sizeable substantial great vast wide short mammoth giant nanoscopic slight petite",
    "abide accelerate accept accomplish achieve acquire act activate adapt add address administer admire admit adopt advise afford agree alert alight allow alter amuse analyze announce annoy answer anticipate apologize appear applaud appoint appraise appreciate approve arbitrate argue arise arrange arrest arrive ascertain ask assemble assess assist assure attach attack attain attempt attend attract audit avoid awake back bake balance ban bang bare bat bathe battle be beam bear beat become beg begin behave behold belong bend beset bet bid bind bite bleach bleed bless blind blink blot blow blush boast boil bolt bomb book bore borrow bounce bow box brake branch break breathe breed brief bring broadcast bruise brush bubble budget build bump burn burst bury bust buy calculate call camp care carry carve cast catalog catch cause challenge change charge chart chase cheat check cheer chew choke choose chop claim clap clarify classify clean clear cling clip close clothe coach coil collect color comb come command communicate compare compete compile complain complete compose compute conceive concentrate conceptualize concern conclude conduct confess confront confuse connect conserve consider consist consolidate construct consult contain continue contract control convert coordinate copy correct correlate cost cough counsel count cover crack crash crawl create creep critique cross crush cry cure curl curve cut cycle dam damage dance dare deal decay deceive decide decorate define delay delegate delight deliver demonstrate depend describe desert deserve design destroy detail detect determine develop devise diagnose dig direct disagree disappear disapprove disarm discover dislike dispense display disprove dissect distribute dive divert divide do double doubt draft drag drain dramatize draw dream dress drink drip drive drop drown drum dry dust dwell earn eat edit educate eliminate embarrass employ empty enact encourage end endure enforce engineer enhance enjoy enlist ensure enter entertain escape establish estimate evaluate examine exceed excite excuse execute exercise exhibit exist expand expect expedite experiment explain explode express extend extract face facilitate fade fail fancy fasten fax fear feed feel fence fetch fight file fill film finalize finance find fire fit fix flap flash flee fling float flood flow flower fly fold follow fool forbid force forecast forego foresee foretell forget forgive form formulate forsake frame freeze frighten fry gather gaze generate get give glow glue go govern grab graduate grate grease greet grin grind grip groan grow guarantee guard guess guide hammer hand handle handwrite hang happen harass harm hate haunt head heal heap hear heat help hide hit hold hook hop hope hover hug hum hunt hurry hurt hypothesize identify ignore illustrate imagine implement impress improve improvise include increase induce influence inform initiate inject injure inlay innovate input inspect inspire install institute instruct insure integrate intend intensify interest interfere interlay interpret interrupt interview introduce invent inventory investigate invite irritate itch jail jam jog join joke judge juggle jump justify keep kept kick kill kiss kneel knit knock knot know label land last laugh launch lay lead lean leap learn leave lecture lead lend let level license lick lie lift light lighten like list listen live load locate lock log long look lose love maintain make man manage manipulate manufacture map march mark market marry match mate matter mean measure meddle mediate meet melt melt memorize mend mentor milk mine mislead miss misspell mistake misunderstand mix moan model modify monitor moor motivate mourn move mow muddle mug multiply murder nail name navigate need negotiate nest nod nominate normalize note notice number obey object observe obtain occur offend offer officiate open operate order organize orient originate overcome overdo overdraw overflow overhear overtake overthrow owe own pack paddle paint park part participate pass paste pat pause pay peck pedal peel peep perceive perfect perform permit persuade phone photograph pick pilot pinch pine pinpoint pioneer place plan plant play plead please plug point poke polish pop possess post pour practice praise pray preach precede predict prefer prepare prescribe present preserve preset preside press pretend prevent prick print process procure produce profess program progress project promise promote proofread propose protect prove provide publicize pull pump punch puncture punish purchase push put qualify question queue quit race radiate rain raise rank rate reach read realign realize reason receive recognize recommend reconcile record recruit reduce refer reflect refuse regret regulate rehabilitate reign reinforce reject rejoice relate relax release rely remain remember remind remove render reorganize repair repeat replace reply report represent reproduce request rescue research resolve respond restore restructure retire retrieve return review revise rhyme rid ride ring rinse rise risk rob rock roll rot rub ruin rule run rush sack sail satisfy save saw say scare scatter schedule scold scorch scrape scratch scream screw scribble scrub seal search secure see seek select sell send sense separate serve service set settle sew shade shake shape share shave shear shed shelter shine shiver shock shoe shoot shop show shrink shrug shut sigh sign signal simplify sin sing sink sip sit sketch ski skip slap slay sleep slide sling slink slip slit slow smash smell smile smite smoke snatch sneak sneeze sniff snore snow soak solve soothe soothsay sort sound sow spare spark sparkle speak specify speed spell spend spill spin spit split spoil spot spray spread spring sprout squash squeak squeal squeeze stain stamp stand stare start stay steal steer step stick stimulate sting stink stir stitch stop store strap streamline strengthen stretch stride strike string strip strive stroke structure study stuff sublet subtract succeed suck suffer suggest suit summarize supervise supply support suppose surprise surround suspect suspend swear sweat sweep swell swim swing switch symbolize synthesize systemize tabulate take talk tame tap target taste teach tear tease telephone tell tempt terrify test thank thaw think thrive throw thrust tick tickle tie time tip tire touch tour tow trace trade train transcribe transfer transform translate transport trap travel tread treat tremble trick trip trot trouble troubleshoot trust try tug tumble turn tutor twist type undergo understand undertake undress unfasten unify unite unlock unpack untidy update upgrade uphold upset use utilize vanish verbalize verify vex visit wail wait wake walk wander want warm warn wash waste watch water wave wear weave wed weep weigh welcome wend wet whine whip whirl whisper whistle win wind wink wipe wish withdraw withhold withstand wobble wonder work worry wrap wreck wrestle wriggle wring write x-ray yawn yell zip zoom"];
    var chosen_path;
    var order_for_function = ['a', 'A', 'C', 'M', 'n', 'O', 'p', 's', 'S', 'v'];
    for (var i = 0; i < 10; i++) {
        if (char == order_for_function[i]) {
            chosen_path = paths[i];
        }
    }
    var all_words = String(chosen_path);
    var lines = all_words.split(" ");
    var spec_word = lines[0]
    return lines[Math.floor(Math.random() * lines.length)];
}

function get_structure() {
    var structure = ['x','x','p','v','a'];
    var adj_array = ['O','S','A','C','M'];
    var adj_array2 = ['x','x'];
    var second_loop = 0;
    for (var i = 0; i < 2; i++) {
        adj_array2[i] = adj_array[Math.floor(Math.random() * 5)];
    }
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 2; j++) {
            if (adj_array[i] == adj_array2[j]) {
                if (second_loop == 0) {
                    structure[0] = adj_array2[j];
                    second_loop++;
                }
                else {
                    structure[1] = adj_array2[j];
                }
            }
        }
    }
    return structure;
}

function consolidation() {
    var i = 0;
    var words = ["error","error","error","error","error"];
    for (var i = 0; i < 5; i++) {
        if (i == 0) {
            var str = get_word(get_structure()[i]);
            var str2 = str.charAt(0).toUpperCase() + str.slice(1);
            words[i] = str2;
        }
        else {
            words[i] = get_word(get_structure()[i]);
        }
    }
    return words[0].concat(" ",words[1]," ",words[2]," ",words[3]," ",words[4],".");
}

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("para").innerHTML = consolidation();
  document.getElementById("para").style.transition = "0s";
  document.getElementById("para").style.opacity = "0";
  document.getElementById("para").style.transform = "rotate(0.85turn)";
  setTimeout(function() {
    document.getElementById("para").style.transition = "0.6s";
    document.getElementById("para").style.transform = "rotate(1turn)";
    document.getElementById("para").style.opacity = "1";
    }, 100)

});

var i = 0;
function typeWriter() {
    var txt = 'Colourless Green Ideas Sleep Furiously... in Javascript!';
    if(i < 41) {
        setTimeout(typeWriter, 69);
        document.getElementById("cursor").insertAdjacentHTML("beforebegin", txt.charAt(i));
        i++;
    }
}
function typeWriter2() {
    var txt = 'Colourless Green Ideas Sleep Furiously... in Javascript!';
    if(i < 56) {
        setTimeout(typeWriter2, 69);
        document.getElementById("cursor").insertAdjacentHTML("beforebegin", txt.charAt(i));
        i++;
    }
}

window.onload = function() {
    typeWriter();
    setTimeout(function() {document.getElementById("cursor").classList.add("blinking-cursor");}, 3000);
    setTimeout(typeWriter2, 3500);
    setTimeout(function() {document.getElementById("cursor").classList.remove("blinking-cursor");}, 3500);
    setTimeout(function() {document.getElementById("cursor").classList.add("blinking-cursor");}, 4800);
    setTimeout(function() {document.getElementById("btn").style.opacity = "1";}, 5000);
}
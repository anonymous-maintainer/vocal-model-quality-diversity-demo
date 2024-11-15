const catIntensityMap = {
    "4_10.wav": 0.7906789762341135,
    "4_11.wav": 0.8763575572200618,
    "4_12.wav": 0.839332773006023,
    "4_13.wav": 0.7596207861861718,
    "5_8.wav": 0.8140172532586933,
    "5_9.wav": 0.8541773723481177,
    "5_10.wav": 0.9039111133464535,
    "5_11.wav": 0.9699130985041585,
    "5_12.wav": 0.9314323082162225,
    "5_13.wav": 0.8263371736359756,
    "5_14.wav": 0.7987501541668224,
    "6_7.wav": 0.8228904493315397,
    "6_8.wav": 0.861372792559035,
    "6_9.wav": 0.8323962428480871,
    "6_10.wav": 0.8550052394176938,
    "6_11.wav": 1.0,
    "6_12.wav": 0.948306649657136,
    "6_13.wav": 0.8566102775944585,
    "7_6.wav": 0.7672921072297753,
    "7_7.wav": 0.8416836229298439,
    "7_8.wav": 0.8139037383863916,
    "7_9.wav": 0.819494120420544,
    "7_10.wav": 0.8749579078237195,
    "7_11.wav": 0.9532850232204539,
    "7_12.wav": 0.8288452211190562,
    "7_13.wav": 0.8043112808234707,
    "8_6.wav": 0.807643388169466,
    "8_7.wav": 0.8509250159627159,
    "8_8.wav": 0.8440113290447488,
    "8_9.wav": 0.806912805249056,
    "8_10.wav": 0.8339855512499611,
    "8_11.wav": 0.851617226247564,
    "8_12.wav": 0.7994141109706564,
    "8_13.wav": 0.7051914569087826,
    "9_5.wav": 0.7118843258403833,
    "9_6.wav": 0.7735429394300471,
    "9_7.wav": 0.8413596096050213,
    "9_8.wav": 0.8295352272316268,
    "9_9.wav": 0.7996651862310167,
    "9_10.wav": 0.6891071108501282,
    "9_11.wav": 0.7430063366947295,
    "9_12.wav": 0.6557529748060102,
    "9_13.wav": 0.6766371063786641,
    "10_4.wav": 0.5130517556683045,
    "10_5.wav": 0.5977716219031004,
    "10_6.wav": 0.7147016587698856,
    "10_7.wav": 0.7549669769907458,
    "10_8.wav": 0.7516944824858975,
    "10_9.wav": 0.7648723268274517,
    "10_10.wav": 0.7108789227128031,
    "11_3.wav": 0.3093442577454864,
    "11_5.wav": 0.6007198025141791,
    "11_6.wav": 0.5994223465598031,
    "11_7.wav": 0.6384404038404295,
    "11_8.wav": 0.5728850140430821,
    "11_9.wav": 0.5425738380179842,
    "12_4.wav": 0.3686612388590363,
    "12_5.wav": 0.4506830980362729,
    "12_6.wav": 0.5093593663445536,
    "12_7.wav": 0.5602195395664453,
    "12_8.wav": 0.5801301283198967,
    "13_7.wav": 0.5345086714642147,
    "13_9.wav": 0.5299630670896941,
    "3_12.wav": 0.7999118531468217,
    "4_9.wav": 0.8385606113812837,
    "4_14.wav": 0.7351983569699083,
    "6_14.wav": 0.8095014052099219,
    "7_14.wav": 0.7645457085717555,
    "9_4.wav": 0.6510499724929318,
    "10_11.wav": 0.5590784796541373,
    "11_4.wav": 0.43112317305427444,
    "13_5.wav": 0.4179424232128997,
    "14_7.wav": 0.5361833414470251,
    "5_7.wav": 0.7493954306106028,
    "8_5.wav": 0.7292804549732188,
    "8_14.wav": 0.6642413424370992,
    "14_8.wav": 0.506462282454458,
    "3_10.wav": 0.7267247172172204,
    "3_11.wav": 0.7153977764510442,
    "5_15.wav": 0.7064214852293907,
    "7_16.wav": 0.5929190364440851,
    "10_3.wav": 0.3674678799499573,
    "12_9.wav": 0.5331123283262889,
    "13_6.wav": 0.46193990604815854,
    "3_13.wav": 0.7817522788887085,
    "6_15.wav": 0.6861804710135816,
    "7_5.wav": 0.7120806975523969,
    "7_15.wav": 0.6928772473414927,
    "11_10.wav": 0.5211441738065985,
    "3_9.wav": 0.6646341860507755,
    "6_6.wav": 0.7273582163677625,
    "8_4.wav": 0.6654841950327776,
    "8_16.wav": 0.6044919427985234,
    "9_14.wav": 0.6270349143894478,
    "9_16.wav": 0.5743830496747293,
    "10_12.wav": 0.550220712787235,
    "3_14.wav": 0.6900862642896739,
    "4_8.wav": 0.7502683830222228,
    "6_16.wav": 0.5474526731650341,
    "8_15.wav": 0.6894089822625248,
    "9_3.wav": 0.4792390516007751,
    "9_15.wav": 0.6361877397726156,
    "4_7.wav": 0.6347962057378411,
    "8_3.wav": 0.5324370500921194,
    "13_8.wav": 0.4987467777756515,
    "14_9.wav": 0.44828525916707734,
    "4_15.wav": 0.5617462294377026,
    "5_6.wav": 0.5969352387133605,
    "7_4.wav": 0.6441643386766811,
    "10_16.wav": 0.5396809620931461,
    "14_6.wav": 0.4799115245247729,
    "15_7.wav": 0.4366566473678025,
    "6_5.wav": 0.6652961390616298,
    "10_14.wav": 0.5489466010210728,
    "3_8.wav": 0.5823041435132562,
    "5_16.wav": 0.5475624810203233,
    "10_15.wav": 0.5418435556665212,
    "12_3.wav": 0.27800353288740254,
    "15_8.wav": 0.4270789176832827,
    "10_13.wav": 0.5837920599903558,
    "11_14.wav": 0.4821324284738582,
    "16_8.wav": 0.3599796053950523,
    "13_10.wav": 0.41834258067095204,
    "2_12.wav": 0.7466980246909375,
    "11_15.wav": 0.4798969970256699,
    "11_16.wav": 0.48258959384218386,
    "12_10.wav": 0.48789994580741886,
    "16_9.wav": 0.33878498610018903,
    "11_11.wav": 0.4994406912845325,
    "8_17.wav": 0.5140881173974216,
    "9_17.wav": 0.574265727595766,
    "10_17.wav": 0.5610236616892115,
    "11_12.wav": 0.4664725859579598,
    "14_5.wav": 0.37064158746090475,
    "6_17.wav": 0.44097031270491915,
    "12_11.wav": 0.46670432461606576,
    "16_6.wav": 0.3006015085956206,
    "14_10.wav": 0.3905673048513531,
    "15_9.wav": 0.40605271718836583,
    "16_7.wav": 0.3592069428220679,
    "2_10.wav": 0.5691961313570457,
    "4_6.wav": 0.4418283368588401,
    "2_11.wav": 0.5941307300589286,
    "13_4.wav": 0.3746740204533161,
    "15_10.wav": 0.3765727144912605,
    "14_11.wav": 0.37921551705222817,
    "7_17.wav": 0.4655060564141864,
    "11_13.wav": 0.4971085768250722,
    "6_4.wav": 0.5320861859413684,
    "12_12.wav": 0.4355575669184199,
    "13_11.wav": 0.41783471934023914,
    "5_5.wav": 0.5118423664153877,
    "10_2.wav": 0.2734401949450114,
    "17_8.wav": 0.27639098048696376,
    "15_6.wav": 0.4108683326669052,
    "11_17.wav": 0.5675359888733383,
    "17_7.wav": 0.2670546076668526,
    "15_5.wav": 0.31099047386798473,
    "17_6.wav": 0.21864006377672296,
    "17_9.wav": 0.2983114737887347,
    "10_18.wav": 0.5554238618280544,
    "9_18.wav": 0.5407809442493696,
    "12_14.wav": 0.40568512136623414,
    "12_16.wav": 0.4782952651073217,
    "14_4.wav": 0.28516849544502787,
    "18_8.wav": 0.2243072912716481,
    "11_18.wav": 0.48901796210045995,
    "13_12.wav": 0.332721608733171,
    "16_10.wav": 0.3461719689199686,
    "7_3.wav": 0.45974865823517336,
    "12_15.wav": 0.39360695861195655,
    "15_11.wav": 0.34485838243210576,
    "16_5.wav": 0.22578368593911416,
    "15_4.wav": 0.2517978281088272,
    "13_3.wav": 0.24763735274501103,
    "12_13.wav": 0.4406767570333885,
    "17_10.wav": 0.2183360883816977,
    "8_18.wav": 0.22270325499137317,
    "16_11.wav": 0.2701253202186419,
    "13_13.wav": 0.3357280997199599,
    "12_2.wav": 0.17250984388348706,
    "12_17.wav": 0.4771748442627049,
    "11_2.wav": 0.2151776096973962,
    "14_12.wav": 0.31750490503474027,
    "3_15.wav": 0.48407240064718504,
    "2_13.wav": 0.7613153939091306,
    "18_7.wav": 0.21832316391697845,
    "13_14.wav": 0.20539429085315594,
    "2_14.wav": 0.6720621464369906,
    "5_17.wav": 0.4350726490173249,
    "14_3.wav": 0.17494054495755015,
    "15_12.wav": 0.23924356414256545,
    "14_13.wav": 0.2874815738711808,
    "4_16.wav": 0.508364583319766,
    "13_15.wav": 0.3520404774197078,
    "16_4.wav": 0.09890080934200347,
    "18_6.wav": 0.12016756518413706,
    "15_13.wav": 0.18882021779025518,
    "14_14.wav": 0.1570514827517007,
    "18_9.wav": 0.20653675342054975,
    "3_7.wav": 0.349092497187927,
    "4_5.wav": 0.3338242960099172,
    "12_18.wav": 0.34020637665036146,
    "17_11.wav": 0.15299089646792413,
    "14_15.wav": 0.152999312398439,
    "18_10.wav": 0.19274204141018533,
    "3_6.wav": 0.2677167610570048,
    "19_9.wav": 0.1707016210985775,
    "2_9.wav": 0.359273368559346,
    "16_12.wav": 0.04601770691742399,
    "19_10.wav": 0.18164754062965788,
    "13_16.wav": 0.42495589902125736,
    "15_3.wav": 0.03542104850271078,
    "15_14.wav": 0.0,
    "13_2.wav": 0.121010761270008,
    "19_8.wav": 0.15598536469683463,
    "17_5.wav": 0.08710748575979471,
    "18_11.wav": 0.07038483144744687,
    "13_17.wav": 0.42182206699060654,
    "5_4.wav": 0.2985462181363102,
    "9_2.wav": 0.33984258803489126,
    "14_16.wav": 0.2941200398233817,
    "19_7.wav": 0.15244606515673517,
    "8_2.wav": 0.27553345728128775,
    "14_17.wav": 0.2901492234650971,
    "19_6.wav": 0.03007913679804502
}
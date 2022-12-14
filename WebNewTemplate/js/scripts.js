/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//new kakao.maps.LatLng(
    let cardInnerTxt1="차량수";
    let cardInnerTxt11="194K";
    let cardInnerTxt12="세종시 자동차등록현황 기준";

    let cardInnerTxt2="인구수";
    let cardInnerTxt21="275K";
    let cardInnerTxt22="세종특별시 2022년 인구 기준";

    let cardInnerTxt3="100x100 국토정보맵";
    let cardInnerTxt31="폴리곤";
    let cardInnerTxt32="인구, 건물, 주차장 격자 데이터";

    let cardInnerTxt4="주거용도면적 데이터 수";
    let cardInnerTxt41="5K";
    let cardInnerTxt42="세종특별시 2022년 건축물대장 기준";

    let cardInnerTxt5="전국 충전소 리스트";
    let cardInnerTxt51="세종시 한정";
    let cardInnerTxt52="좌표기준 295개";
    
    let cardInnerTxt6="대구, 대전 EV충전소";
    let cardInnerTxt61="머신러닝 학습용";
    let cardInnerTxt62="2022년 대구, 대전 등록기준";

    let cardInnerTxt7="그 외 Raw 데이터";
    let cardInnerTxt71="40K~";
    let cardInnerTxt72="전처리 전 기준";
    'use stric'
    var areas = [
        {
            name : '소담동',
            path : [
                    new kakao.maps.LatLng(36.48844985814939, 127.30479592976813),
                    new kakao.maps.LatLng(36.4920057050549, 127.29897551640525),
                    new kakao.maps.LatLng(36.48884574436441, 127.29610159329312),
                    new kakao.maps.LatLng(36.48838803968131, 127.29832094806422),
                    new kakao.maps.LatLng(36.48852302672848, 127.29602037601498),
                    new kakao.maps.LatLng(36.4852001925824, 127.29382696004039),
                    new kakao.maps.LatLng(36.48351871221254, 127.29579387856218),
                    new kakao.maps.LatLng(36.47973651695093, 127.29830890865053),
                    new kakao.maps.LatLng(36.478052470422455, 127.30008340880676),
                    new kakao.maps.LatLng(36.4780842934006, 127.30341086574843),
                    new kakao.maps.LatLng(36.47978208123174, 127.30865191452655),
                    new kakao.maps.LatLng(36.47977363163681, 127.30832808675622),
                    new kakao.maps.LatLng(36.484741742474135, 127.30681650356998),
                    new kakao.maps.LatLng(36.48844985814939, 127.30479592976813)
            ]
        }, {
            name : '보람동',
            path : [
                    new kakao.maps.LatLng(36.47973651695093, 127.29830890865053),
                    new kakao.maps.LatLng(36.48351871221254, 127.29579387856218),
                    new kakao.maps.LatLng(36.4852001925824, 127.29382696004039),
                    new kakao.maps.LatLng(36.48223461947484, 127.29056764701004),
                    new kakao.maps.LatLng(36.48045923210065, 127.2870730047185),
                    new kakao.maps.LatLng(36.47647213001228, 127.27748778478984),
                    new kakao.maps.LatLng(36.475865508455996, 127.2793135394937),
                    new kakao.maps.LatLng(36.471341210198254, 127.28606017645001),
                    new kakao.maps.LatLng(36.4730103745876, 127.28723093549175),
                    new kakao.maps.LatLng(36.47447974302854, 127.29422053925344),
                    new kakao.maps.LatLng(36.47739413203299, 127.29809197326664),
                    new kakao.maps.LatLng(36.478052470422455, 127.30008340880676),
                    new kakao.maps.LatLng(36.47973651695093, 127.29830890865053)
            ]
        }, {
            name : '대평동',
            path : [
                new kakao.maps.LatLng(36.47647213001228, 127.27748778478984),
                new kakao.maps.LatLng(36.47595402510393, 127.27525217614453),
                new kakao.maps.LatLng(36.471524948222125, 127.26609087465522),
                new kakao.maps.LatLng(36.46789451559289, 127.26348056008155),
                new kakao.maps.LatLng(36.466376638031086, 127.26557442058306),
                new kakao.maps.LatLng(36.465303795904035, 127.26994506957942),
                new kakao.maps.LatLng(36.463883709378, 127.2721487573367),
                new kakao.maps.LatLng(36.46753149579842, 127.27700958709559),
                new kakao.maps.LatLng(36.46926295847903, 127.28137843847715),
                new kakao.maps.LatLng(36.468574100269, 127.28270233548332),
                new kakao.maps.LatLng(36.471341210198254, 127.28606017645001),
                new kakao.maps.LatLng(36.475865508455996, 127.2793135394937),
                new kakao.maps.LatLng(36.47647213001228, 127.27748778478984)
            ]
        }, {
            name : '가람동',
            path : [
                    new kakao.maps.LatLng(36.476221953992365, 127.24083295208526),
                    new kakao.maps.LatLng(36.47469965252497, 127.24088747618359),
                    new kakao.maps.LatLng(36.47336386186326, 127.23766808668898),
                    new kakao.maps.LatLng(36.472265102951006, 127.23673279197389),
                    new kakao.maps.LatLng(36.46942042434668, 127.2399009453119),
                    new kakao.maps.LatLng(36.46794745013868, 127.24033432963724),
                    new kakao.maps.LatLng(36.46335307742324, 127.24536424086678),
                    new kakao.maps.LatLng(36.4631153988296, 127.24705589282847),
                    new kakao.maps.LatLng(36.46503696574441, 127.2520474018827),
                    new kakao.maps.LatLng(36.466064032964205, 127.25344563602731),
                    new kakao.maps.LatLng(36.47032989321143, 127.25660845427956),
                    new kakao.maps.LatLng(36.47345945433296, 127.24952957917012),
                    new kakao.maps.LatLng(36.475523689518795, 127.24745733887227),
                    new kakao.maps.LatLng(36.479514089491325, 127.2463462383551),
                    new kakao.maps.LatLng(36.47871397338785, 127.24381242351153),
                    new kakao.maps.LatLng(36.476221953992365, 127.24083295208526)
            ]
        }, {
            name : '한솔동',
            path : [
                    new kakao.maps.LatLng(36.479514089491325, 127.2463462383551),
                    new kakao.maps.LatLng(36.475523689518795, 127.24745733887227),
                    new kakao.maps.LatLng(36.47345945433296, 127.24952957917012),
                    new kakao.maps.LatLng(36.47032989321143, 127.25660845427956),
                    new kakao.maps.LatLng(36.47157916757379, 127.25738789091209),
                    new kakao.maps.LatLng(36.47345049644393, 127.25796924217254),
                    new kakao.maps.LatLng(36.47573386941012, 127.25678482435431),
                    new kakao.maps.LatLng(36.47868103361038, 127.26243864833984),
                    new kakao.maps.LatLng(36.48333873084473, 127.25908361813768),
                    new kakao.maps.LatLng(36.48343167570364, 127.2590191769831),
                    new kakao.maps.LatLng(36.4837037234343, 127.25882746651675),
                    new kakao.maps.LatLng(36.48270398969097, 127.25649154664026),
                    new kakao.maps.LatLng(36.479514089491325, 127.2463462383551)
            ]
        }, {
            name : '나성동',
            path : [
                new kakao.maps.LatLng(36.49182005063291, 127.26602974473786),
                    new kakao.maps.LatLng(36.493604620070165, 127.2579543951269),
                    new kakao.maps.LatLng(36.494722098959016, 127.25627669288001),
                    new kakao.maps.LatLng(36.49436806855512, 127.25547574290721),
                    new kakao.maps.LatLng(36.49081659738111, 127.25550602163737),
                    new kakao.maps.LatLng(36.48780502631667, 127.25629071158872),
                    new kakao.maps.LatLng(36.4837037234343, 127.25882746651675),
                    new kakao.maps.LatLng(36.48343167570364, 127.2590191769831),
                    new kakao.maps.LatLng(36.48333873084473, 127.25908361813768),
                    new kakao.maps.LatLng(36.47868103361038, 127.26243864833984),
                    new kakao.maps.LatLng(36.47979562211203, 127.26556481592554),
                    new kakao.maps.LatLng(36.48060157838698, 127.27085297179768),
                    new kakao.maps.LatLng(36.48249784071789, 127.27097863844155),
                    new kakao.maps.LatLng(36.48387466622594, 127.27285644378237),
                    new kakao.maps.LatLng(36.487609627231194, 127.27156704783286),
                    new kakao.maps.LatLng(36.49182005063291, 127.26602974473786)
            ]
        }, {
            name : '새롬동',
            path : [
                new kakao.maps.LatLng(36.48807510894317, 127.2400085604207),
                    new kakao.maps.LatLng(36.48635647457485, 127.2391791884625),
                    new kakao.maps.LatLng(36.484806888738326, 127.24182084971464),
                    new kakao.maps.LatLng(36.481759127056364, 127.24319620331391),
                    new kakao.maps.LatLng(36.47871397338785, 127.24381242351153),
                    new kakao.maps.LatLng(36.479514089491325, 127.2463462383551),
                    new kakao.maps.LatLng(36.48270398969097, 127.25649154664026),
                    new kakao.maps.LatLng(36.4837037234343, 127.25882746651675),
                    new kakao.maps.LatLng(36.48780502631667, 127.25629071158872),
                    new kakao.maps.LatLng(36.49081659738111, 127.25550602163737),
                    new kakao.maps.LatLng(36.49056245796365, 127.2489387046628),
                    new kakao.maps.LatLng(36.48945267060262, 127.24610314006031),
                    new kakao.maps.LatLng(36.48807510894317, 127.2400085604207)
            ]
        }, {
            name : '다정동',
            path : [
                new kakao.maps.LatLng(36.49931956177375, 127.23111807646553),
                    new kakao.maps.LatLng(36.49504178698681, 127.23784502063506),
                    new kakao.maps.LatLng(36.4919822902817, 127.23789518832388),
                    new kakao.maps.LatLng(36.48807510894317, 127.2400085604207),
                    new kakao.maps.LatLng(36.48945267060262, 127.24610314006031),
                    new kakao.maps.LatLng(36.49056245796365, 127.2489387046628),
                    new kakao.maps.LatLng(36.49081659738111, 127.25550602163737),
                    new kakao.maps.LatLng(36.49436806855512, 127.25547574290721),
                    new kakao.maps.LatLng(36.494722098959016, 127.25627669288001),
                    new kakao.maps.LatLng(36.498854917029576, 127.25179737333532),
                    new kakao.maps.LatLng(36.499560668714345, 127.24024744730718),
                    new kakao.maps.LatLng(36.49973628483737, 127.2346979534192),
                    new kakao.maps.LatLng(36.49931956177375, 127.23111807646553)
            ]
        }, {
            name : '어진동',
            path : [
                new kakao.maps.LatLng(36.498854917029576, 127.25179737333532),
                    new kakao.maps.LatLng(36.494722098959016, 127.25627669288001),
                    new kakao.maps.LatLng(36.493604620070165, 127.2579543951269),
                    new kakao.maps.LatLng(36.49182005063291, 127.26602974473786),
                    new kakao.maps.LatLng(36.49349867040566, 127.26798067596611),
                    new kakao.maps.LatLng(36.49595862549873, 127.26951114689386),
                    new kakao.maps.LatLng(36.49890218549088, 127.26949081946042),
                    new kakao.maps.LatLng(36.50077784690372, 127.27335011993374),
                    new kakao.maps.LatLng(36.5034978697959, 127.27212328972476),
                    new kakao.maps.LatLng(36.505698764580615, 127.27845188778403),
                    new kakao.maps.LatLng(36.50723959518627, 127.2791097049138),
                    new kakao.maps.LatLng(36.509581906931714, 127.27769864967857),
                    new kakao.maps.LatLng(36.50610198165512, 127.27386904120262),
                    new kakao.maps.LatLng(36.50628840200066, 127.27290033320526),
                    new kakao.maps.LatLng(36.508348346137716, 127.26692800157716),
                    new kakao.maps.LatLng(36.50873444639021, 127.26470978781319),
                    new kakao.maps.LatLng(36.508456758354065, 127.2598241752887),
                    new kakao.maps.LatLng(36.506883485879435, 127.25356984530445),
                    new kakao.maps.LatLng(36.49899514263426, 127.25436260795145),
                    new kakao.maps.LatLng(36.498854917029576, 127.25179737333532)
                
            ]
        }, {
            name : '중천동',
            path : [
                new kakao.maps.LatLng(36.506883485879435, 127.25356984530445),
                    new kakao.maps.LatLng(36.506973371680665, 127.25232317231414),
                    new kakao.maps.LatLng(36.5085613737317, 127.24426070289266),
                    new kakao.maps.LatLng(36.50872842314697, 127.24127803293312),
                    new kakao.maps.LatLng(36.505855739388366, 127.24118969609538),
                    new kakao.maps.LatLng(36.499560668714345, 127.24024744730718),
                    new kakao.maps.LatLng(36.498854917029576, 127.25179737333532),
                    new kakao.maps.LatLng(36.49899514263426, 127.25436260795145),
                    new kakao.maps.LatLng(36.506883485879435, 127.25356984530445)
            ]
        }, {
            name : '고운동',
            path : [
                new kakao.maps.LatLng(36.53542903122687, 127.2384602421691),
                    new kakao.maps.LatLng(36.53380080711567, 127.23660320964272),
                    new kakao.maps.LatLng(36.53312749691005, 127.23394050903867),
                    new kakao.maps.LatLng(36.533728859505, 127.23195527040099),
                    new kakao.maps.LatLng(36.533057142769174, 127.2260209484559),
                    new kakao.maps.LatLng(36.5300565076655, 127.22439593706227),
                    new kakao.maps.LatLng(36.52945506272244, 127.22744487683646),
                    new kakao.maps.LatLng(36.52703564729724, 127.22853294755367),
                    new kakao.maps.LatLng(36.526306555223144, 127.23074891550966),
                    new kakao.maps.LatLng(36.52261942116635, 127.22959989360317),
                    new kakao.maps.LatLng(36.52177426015374, 127.22794109569355),
                    new kakao.maps.LatLng(36.51967393549649, 127.22743034007453),
                    new kakao.maps.LatLng(36.51863057349274, 127.22591056630138),
                    new kakao.maps.LatLng(36.51527430371235, 127.22534580788343),
                    new kakao.maps.LatLng(36.51333151971787, 127.22352072712816),
                    new kakao.maps.LatLng(36.51141578948823, 127.22659642700464),
                    new kakao.maps.LatLng(36.51052689962441, 127.22727015067305),
                    new kakao.maps.LatLng(36.506504090784084, 127.22770271176118),
                    new kakao.maps.LatLng(36.5051044034139, 127.23020449486101),
                    new kakao.maps.LatLng(36.50235045835082, 127.23173924060508),
                    new kakao.maps.LatLng(36.49932004996044, 127.2311178341989),
                    new kakao.maps.LatLng(36.49973677296416, 127.23469771084898),
                    new kakao.maps.LatLng(36.49956115682415, 127.2402472042588),
                    new kakao.maps.LatLng(36.50758097641165, 127.24125850990603),
                    new kakao.maps.LatLng(36.516235016262655, 127.2414137017798),
                    new kakao.maps.LatLng(36.5200033851732, 127.24286612513781),
                    new kakao.maps.LatLng(36.5224991060178, 127.24609719671216),
                    new kakao.maps.LatLng(36.5252742358243, 127.24799823520495),
                    new kakao.maps.LatLng(36.52811506839947, 127.24866491139915),
                    new kakao.maps.LatLng(36.532190707331594, 127.2445717940551),
                    new kakao.maps.LatLng(36.53542903122687, 127.2384602421691)
            ]
        }, {
            name : '아름동',
            path : [
                new kakao.maps.LatLng(36.506973371680665, 127.25232317231414),
                    new kakao.maps.LatLng(36.511390917716355, 127.25238239130154),
                    new kakao.maps.LatLng(36.51611420218808, 127.25227847212635),
                    new kakao.maps.LatLng(36.5195031440895, 127.25400007916099),
                    new kakao.maps.LatLng(36.51883037730007, 127.25657009652654),
                    new kakao.maps.LatLng(36.520657399935374, 127.25924764440202),
                    new kakao.maps.LatLng(36.52546104602264, 127.26127112330666),
                    new kakao.maps.LatLng(36.526361780410284, 127.25750164849207),
                    new kakao.maps.LatLng(36.526697296148306, 127.25193192802865),
                    new kakao.maps.LatLng(36.5281145829736, 127.24866515491055),
                    new kakao.maps.LatLng(36.52527375013241, 127.24799847868472),
                    new kakao.maps.LatLng(36.522498620058705, 127.24609744005375),
                    new kakao.maps.LatLng(36.520002898964755, 127.24286636822445),
                    new kakao.maps.LatLng(36.516234529697975, 127.2414139447759),
                    new kakao.maps.LatLng(36.50872842314697, 127.24127803293312),
                    new kakao.maps.LatLng(36.5085613737317, 127.24426070289266),
                    new kakao.maps.LatLng(36.506973371680665, 127.25232317231414)
            ]
        }, {
            name : '도담동',
            path : [
                new kakao.maps.LatLng(36.506883485879435, 127.25356984530445),
                    new kakao.maps.LatLng(36.508456758354065, 127.2598241752887),
                    new kakao.maps.LatLng(36.50873444639021, 127.26470978781319),
                    new kakao.maps.LatLng(36.508348346137716, 127.26692800157716),
                    new kakao.maps.LatLng(36.50628840200066, 127.27290033320526),
                    new kakao.maps.LatLng(36.50844372693047, 127.27009115103517),
                    new kakao.maps.LatLng(36.510013826943904, 127.26991740715509),
                    new kakao.maps.LatLng(36.51021829680687, 127.26754415225275),
                    new kakao.maps.LatLng(36.512766374863986, 127.26673748792787),
                    new kakao.maps.LatLng(36.51510284770755, 127.2685643914483),
                    new kakao.maps.LatLng(36.51640358181863, 127.26547898287463),
                    new kakao.maps.LatLng(36.5191850114249, 127.26423577768402),
                    new kakao.maps.LatLng(36.52123656473019, 127.2650508192387),
                    new kakao.maps.LatLng(36.52292637582431, 127.26769640352082),
                    new kakao.maps.LatLng(36.52440196989615, 127.26515456198416),
                    new kakao.maps.LatLng(36.52546104602264, 127.26127112330666),
                    new kakao.maps.LatLng(36.520657399935374, 127.25924764440202),
                    new kakao.maps.LatLng(36.51883037730007, 127.25657009652654),
                    new kakao.maps.LatLng(36.5195031440895, 127.25400007916099),
                    new kakao.maps.LatLng(36.51611420218808, 127.25227847212635),
                    new kakao.maps.LatLng(36.511390917716355, 127.25238239130154),
                    new kakao.maps.LatLng(36.506973371680665, 127.25232317231414),
                    new kakao.maps.LatLng(36.506883485879435, 127.25356984530445)
            ]
        }, {
            name : '산울동',
            path : [
                new kakao.maps.LatLng(36.53256564187755, 127.26936199165812),
                    new kakao.maps.LatLng(36.535996720812335, 127.26918481409437),
                    new kakao.maps.LatLng(36.538046814103105, 127.26753337966916),
                    new kakao.maps.LatLng(36.542273994813634, 127.26934140305974),
                    new kakao.maps.LatLng(36.543476507284886, 127.26618619475461),
                    new kakao.maps.LatLng(36.542552061738675, 127.26372701327152),
                    new kakao.maps.LatLng(36.53963623381689, 127.2628333680311),
                    new kakao.maps.LatLng(36.53933475184772, 127.26019883680067),
                    new kakao.maps.LatLng(36.53731153577098, 127.2587296127653),
                    new kakao.maps.LatLng(36.538677610210655, 127.25608157639375),
                    new kakao.maps.LatLng(36.53739197879339, 127.2544487136274),
                    new kakao.maps.LatLng(36.536889496425, 127.25281070221968),
                    new kakao.maps.LatLng(36.53697390432452, 127.24860149160243),
                    new kakao.maps.LatLng(36.537855746668214, 127.24514213207136),
                    new kakao.maps.LatLng(36.53717477343707, 127.24199498637951),
                    new kakao.maps.LatLng(36.53919616743062, 127.24013270561676),
                    new kakao.maps.LatLng(36.53542903122687, 127.2384602421691),
                    new kakao.maps.LatLng(36.532190707331594, 127.2445717940551),
                    new kakao.maps.LatLng(36.52811506839947, 127.24866491139915),
                    new kakao.maps.LatLng(36.52669778170155, 127.25193168424686),
                    new kakao.maps.LatLng(36.526362265943916, 127.2575014042322),
                    new kakao.maps.LatLng(36.52544099268741, 127.26134618738362),
                    new kakao.maps.LatLng(36.528833415125206, 127.26397227465884),
                    new kakao.maps.LatLng(36.53041188596353, 127.26820543054578),
                    new kakao.maps.LatLng(36.53256564187755, 127.26936199165812)
            ]
        }, {
            name : '해밀동',
            path : [
                new kakao.maps.LatLng(36.52272636242494, 127.26743505966385),
                    new kakao.maps.LatLng(36.52347983022372, 127.26966798583044),
                    new kakao.maps.LatLng(36.52331385832939, 127.27299890153878),
                    new kakao.maps.LatLng(36.5217440042957, 127.27540983461667),
                    new kakao.maps.LatLng(36.5218221022205, 127.27940042662576),
                    new kakao.maps.LatLng(36.52266287859321, 127.28031613934957),
                    new kakao.maps.LatLng(36.52427860375613, 127.27732544441903),
                    new kakao.maps.LatLng(36.52770406931272, 127.27473625606319),
                    new kakao.maps.LatLng(36.52742028236461, 127.27354897528733),
                    new kakao.maps.LatLng(36.53014182424908, 127.27198986782656),
                    new kakao.maps.LatLng(36.5316058047276, 127.27280729883289),
                    new kakao.maps.LatLng(36.53256564187755, 127.26936199165812),
                    new kakao.maps.LatLng(36.53041188596353, 127.26820543054578),
                    new kakao.maps.LatLng(36.528833415125206, 127.26397227465884),
                    new kakao.maps.LatLng(36.52544099268741, 127.26134618738362),
                    new kakao.maps.LatLng(36.52440245556784, 127.26515431702308),
                    new kakao.maps.LatLng(36.52272636242494, 127.26743505966385)
            ]
        }, {
            name : '합강동',
            path : [
                new kakao.maps.LatLng(36.518279296745234, 127.34631709269465),
                    new kakao.maps.LatLng(36.522293334621615, 127.34340498354577),
                    new kakao.maps.LatLng(36.52311613830922, 127.34419440591495),
                    new kakao.maps.LatLng(36.52432510058794, 127.34092550500574),
                    new kakao.maps.LatLng(36.52656800117896, 127.33821105140346),
                    new kakao.maps.LatLng(36.529325029823525, 127.33721425213493),
                    new kakao.maps.LatLng(36.53236591367605, 127.33795398323166),
                    new kakao.maps.LatLng(36.53276421802192, 127.33229603952245),
                    new kakao.maps.LatLng(36.53362281272458, 127.32981622954503),
                    new kakao.maps.LatLng(36.53051962101384, 127.3242774263119),
                    new kakao.maps.LatLng(36.52774724489955, 127.32101427262512),
                    new kakao.maps.LatLng(36.52561012345766, 127.31971847379074),
                    new kakao.maps.LatLng(36.52043317969244, 127.3238351293832),
                    new kakao.maps.LatLng(36.51799251011792, 127.32502689520919),
                    new kakao.maps.LatLng(36.51659256828624, 127.32822886414354),
                    new kakao.maps.LatLng(36.51697008532441, 127.33390573222849),
                    new kakao.maps.LatLng(36.5181183847887, 127.34257175549276),
                    new kakao.maps.LatLng(36.518279296745234, 127.34631709269465)
            ]
        }, {
            name : '집현동',
            path : [
                new kakao.maps.LatLng(36.513041432421865, 127.34720746045528),
                    new kakao.maps.LatLng(36.51356686900201, 127.34757212911722),
                    new kakao.maps.LatLng(36.51256011483164, 127.34130182787673),
                    new kakao.maps.LatLng(36.51080877362894, 127.33591048916794),
                    new kakao.maps.LatLng(36.51083427864216, 127.33241981248133),
                    new kakao.maps.LatLng(36.509492996366795, 127.32800152689077),
                    new kakao.maps.LatLng(36.50857510596778, 127.32158107805327),
                    new kakao.maps.LatLng(36.50571799362084, 127.31360783709076),
                    new kakao.maps.LatLng(36.50304741358858, 127.31111029953047),
                    new kakao.maps.LatLng(36.503055735663466, 127.31403658655644),
                    new kakao.maps.LatLng(36.50089974416972, 127.31816888237739),
                    new kakao.maps.LatLng(36.497675414320575, 127.3207118131945),
                    new kakao.maps.LatLng(36.4939202949066, 127.3203884508238),
                    new kakao.maps.LatLng(36.490640496339765, 127.31924122380512),
                    new kakao.maps.LatLng(36.48735405845903, 127.31887820259402),
                    new kakao.maps.LatLng(36.485201036252654, 127.31645984724516),
                    new kakao.maps.LatLng(36.4843533846686, 127.31736425341062),
                    new kakao.maps.LatLng(36.480494593447176, 127.31814832798302),
                    new kakao.maps.LatLng(36.48017428285754, 127.31866272364371),
                    new kakao.maps.LatLng(36.480083486770965, 127.31884818172995),
                    new kakao.maps.LatLng(36.47932197168955, 127.32106864130778),
                    new kakao.maps.LatLng(36.48105101203337, 127.3228678679831),
                    new kakao.maps.LatLng(36.48149431018496, 127.32616974852691),
                    new kakao.maps.LatLng(36.486208041045444, 127.32618720741229),
                    new kakao.maps.LatLng(36.48725376970024, 127.33061531258657),
                    new kakao.maps.LatLng(36.48813604697852, 127.33199324678272),
                    new kakao.maps.LatLng(36.49149160829822, 127.33460892354162),
                    new kakao.maps.LatLng(36.49306782577487, 127.3345537201712),
                    new kakao.maps.LatLng(36.494907476061464, 127.33601094519494),
                    new kakao.maps.LatLng(36.49619628428246, 127.33547610343379),
                    new kakao.maps.LatLng(36.498283771342564, 127.33792118987483),
                    new kakao.maps.LatLng(36.49979521237001, 127.33824157069398),
                    new kakao.maps.LatLng(36.50029226790435, 127.34026829217287),
                    new kakao.maps.LatLng(36.50466731697008, 127.34387867667388),
                    new kakao.maps.LatLng(36.504659966820135, 127.34683533818013),
                    new kakao.maps.LatLng(36.50678498538301, 127.34875193933455),
                    new kakao.maps.LatLng(36.508474521899494, 127.3461989299424),
                    new kakao.maps.LatLng(36.51265757191533, 127.34703117308702),
                    new kakao.maps.LatLng(36.513041432421865, 127.34720746045528)
            ]
        }, {
            name : '조치원읍',
            path : [
                new kakao.maps.LatLng(36.57888881760152, 127.30127583494608),
                    new kakao.maps.LatLng(36.58333704959698, 127.30404849690734),
                    new kakao.maps.LatLng(36.58532406920624, 127.30182854269792),
                    new kakao.maps.LatLng(36.58595274891655, 127.2998211302684),
                    new kakao.maps.LatLng(36.58769612433801, 127.29986498262228),
                    new kakao.maps.LatLng(36.5906543673566, 127.30436149510368),
                    new kakao.maps.LatLng(36.592547202967715, 127.30499087537423),
                    new kakao.maps.LatLng(36.59664097356496, 127.30494763651343),
                    new kakao.maps.LatLng(36.59871381702127, 127.30612552322141),
                    new kakao.maps.LatLng(36.602037293603594, 127.30640970385669),
                    new kakao.maps.LatLng(36.60436461031783, 127.3049490312992),
                    new kakao.maps.LatLng(36.60766105144179, 127.3011745500853),
                    new kakao.maps.LatLng(36.60929524998419, 127.30158984065113),
                    new kakao.maps.LatLng(36.6143596692134, 127.30005157609351),
                    new kakao.maps.LatLng(36.616454892117545, 127.30026544753048),
                    new kakao.maps.LatLng(36.618660900614024, 127.29888333549995),
                    new kakao.maps.LatLng(36.61897454093013, 127.29640940085513),
                    new kakao.maps.LatLng(36.62097073820088, 127.29581682905885),
                    new kakao.maps.LatLng(36.62423974636785, 127.29630275907256),
                    new kakao.maps.LatLng(36.625036317732196, 127.29201185838167),
                    new kakao.maps.LatLng(36.63015601632137, 127.29073753302983),
                    new kakao.maps.LatLng(36.635188603228706, 127.29226162005835),
                    new kakao.maps.LatLng(36.63689142262138, 127.29056100879592),
                    new kakao.maps.LatLng(36.63612640398336, 127.28723011926049),
                    new kakao.maps.LatLng(36.63419079863508, 127.28492727256577),
                    new kakao.maps.LatLng(36.634600441480046, 127.28228205904597),
                    new kakao.maps.LatLng(36.63350267862867, 127.27947840359585),
                    new kakao.maps.LatLng(36.628821816419425, 127.2790525207296),
                    new kakao.maps.LatLng(36.624520636949136, 127.27401177256226),
                    new kakao.maps.LatLng(36.622822604893955, 127.27364700957148),
                    new kakao.maps.LatLng(36.62045309196954, 127.26801086428071),
                    new kakao.maps.LatLng(36.62187508815668, 127.26318092027125),
                    new kakao.maps.LatLng(36.61917238837439, 127.26222493422323),
                    new kakao.maps.LatLng(36.61854600970391, 127.25909360125777),
                    new kakao.maps.LatLng(36.61417277059348, 127.25981710685024),
                    new kakao.maps.LatLng(36.61166212038778, 127.26388794222805),
                    new kakao.maps.LatLng(36.61182457129261, 127.265333390201),
                    new kakao.maps.LatLng(36.6085752661265, 127.26622497688857),
                    new kakao.maps.LatLng(36.60611283936378, 127.26887189088504),
                    new kakao.maps.LatLng(36.60485690903071, 127.26843141571975),
                    new kakao.maps.LatLng(36.6026579622819, 127.27019315014157),
                    new kakao.maps.LatLng(36.59862290086682, 127.26986436179804),
                    new kakao.maps.LatLng(36.59685069865569, 127.2752015232653),
                    new kakao.maps.LatLng(36.59775970193333, 127.27857683917924),
                    new kakao.maps.LatLng(36.59736069154529, 127.28171815914422),
                    new kakao.maps.LatLng(36.59586082140945, 127.28213287888632),
                    new kakao.maps.LatLng(36.59440318107643, 127.2843530823538),
                    new kakao.maps.LatLng(36.59260966345998, 127.28462572956046),
                    new kakao.maps.LatLng(36.5897567762707, 127.28839924860932),
                    new kakao.maps.LatLng(36.58808918017896, 127.28884534421803),
                    new kakao.maps.LatLng(36.58708912020062, 127.29129594275335),
                    new kakao.maps.LatLng(36.585629300598434, 127.29108809164134),
                    new kakao.maps.LatLng(36.583474047527154, 127.28784357635917),
                    new kakao.maps.LatLng(36.58071609519568, 127.28891690543672),
                    new kakao.maps.LatLng(36.57913143265205, 127.29035808385089),
                    new kakao.maps.LatLng(36.5801136960937, 127.29400439362469),
                    new kakao.maps.LatLng(36.57849056669644, 127.29482915322475),
                    new kakao.maps.LatLng(36.57771084053068, 127.29853997741674),
                    new kakao.maps.LatLng(36.57888881760152, 127.30127583494608)
            ]
        }, {
            name : '세종동',
            path : [
                new kakao.maps.LatLng(36.52272636242494, 127.26743505966385),
                    new kakao.maps.LatLng(36.521237050694324, 127.26505057425801),
                    new kakao.maps.LatLng(36.519185497583, 127.2642355327548),
                    new kakao.maps.LatLng(36.51640406822584, 127.26547873781358),
                    new kakao.maps.LatLng(36.51510333421651, 127.26856414611073),
                    new kakao.maps.LatLng(36.51276686159904, 127.26673724272598),
                    new kakao.maps.LatLng(36.51021878377203, 127.26754390695858),
                    new kakao.maps.LatLng(36.51001431391396, 127.26991716165543),
                    new kakao.maps.LatLng(36.508444214044175, 127.27009090550641),
                    new kakao.maps.LatLng(36.506102468962325, 127.27386879532854),
                    new kakao.maps.LatLng(36.50958239389577, 127.27769840350749),
                    new kakao.maps.LatLng(36.50724008235782, 127.27910945860054),
                    new kakao.maps.LatLng(36.505699251897965, 127.27845164151323),
                    new kakao.maps.LatLng(36.5034978697959, 127.27212328972476),
                    new kakao.maps.LatLng(36.50077833470453, 127.27334987405585),
                    new kakao.maps.LatLng(36.49890267348731, 127.26949057389643),
                    new kakao.maps.LatLng(36.49595911376629, 127.2695109013013),
                    new kakao.maps.LatLng(36.49349915890894, 127.26798043048233),
                    new kakao.maps.LatLng(36.49238756856282, 127.26531381117721),
                    new kakao.maps.LatLng(36.48761011625561, 127.2715668019877),
                    new kakao.maps.LatLng(36.48387466622594, 127.27285644378237),
                    new kakao.maps.LatLng(36.48249833029529, 127.27097839248074),
                    new kakao.maps.LatLng(36.48060206821832, 127.2708527258022),
                    new kakao.maps.LatLng(36.47979611173501, 127.26556457071493),
                    new kakao.maps.LatLng(36.47863059269936, 127.26234995975273),
                    new kakao.maps.LatLng(36.47573435990949, 127.2567845799008),
                    new kakao.maps.LatLng(36.47345098676538, 127.25796899754808),
                    new kakao.maps.LatLng(36.47157965790071, 127.25738764627255),
                    new kakao.maps.LatLng(36.46606452408236, 127.25344539153657),
                    new kakao.maps.LatLng(36.46503745696568, 127.25204715750229),
                    new kakao.maps.LatLng(36.46311589025827, 127.24705564885802),
                    new kakao.maps.LatLng(36.46335356884033, 127.24536399704365),
                    new kakao.maps.LatLng(36.46794794116295, 127.24033408628837),
                    new kakao.maps.LatLng(36.4694209152378, 127.23990070201397),
                    new kakao.maps.LatLng(36.47226559359913, 127.23673254897435),
                    new kakao.maps.LatLng(36.47045825439833, 127.23506393171184),
                    new kakao.maps.LatLng(36.46479886154182, 127.24134261796685),
                    new kakao.maps.LatLng(36.460495292985435, 127.24450725380329),
                    new kakao.maps.LatLng(36.460888849931656, 127.24802933756503),
                    new kakao.maps.LatLng(36.46028738701318, 127.24897805554846),
                    new kakao.maps.LatLng(36.4590627799143, 127.25209393252848),
                    new kakao.maps.LatLng(36.459359194481394, 127.25537808541397),
                    new kakao.maps.LatLng(36.46062239190842, 127.2576418599618),
                    new kakao.maps.LatLng(36.46237481497946, 127.25882574191135),
                    new kakao.maps.LatLng(36.46349836127849, 127.2637614613519),
                    new kakao.maps.LatLng(36.463440122712676, 127.26658499552252),
                    new kakao.maps.LatLng(36.46218031063605, 127.26988297990627),
                    new kakao.maps.LatLng(36.46388420058377, 127.272148511223),
                    new kakao.maps.LatLng(36.46530428699232, 127.26994482366769),
                    new kakao.maps.LatLng(36.46637712904698, 127.2655741750558),
                    new kakao.maps.LatLng(36.46789500648166, 127.26348031474771),
                    new kakao.maps.LatLng(36.47152543876077, 127.26609062913138),
                    new kakao.maps.LatLng(36.47595451517972, 127.27525192987653),
                    new kakao.maps.LatLng(36.476186233128885, 127.27696910182321),
                    new kakao.maps.LatLng(36.48045972169107, 127.28707275747917),
                    new kakao.maps.LatLng(36.482235108881056, 127.29056739948757),
                    new kakao.maps.LatLng(36.484900992983164, 127.29350738552256),
                    new kakao.maps.LatLng(36.488523515523674, 127.2960201280828),
                    new kakao.maps.LatLng(36.48838803968131, 127.29832094806422),
                    new kakao.maps.LatLng(36.488846233129415, 127.29610134535692),
                    new kakao.maps.LatLng(36.495179395209995, 127.30132069139574),
                    new kakao.maps.LatLng(36.50010255169078, 127.30642912017105),
                    new kakao.maps.LatLng(36.50304741358858, 127.31111029953047),
                    new kakao.maps.LatLng(36.50571799362084, 127.31360783709076),
                    new kakao.maps.LatLng(36.50857510596778, 127.32158107805327),
                    new kakao.maps.LatLng(36.509492996366795, 127.32800152689077),
                    new kakao.maps.LatLng(36.51083427864216, 127.33241981248133),
                    new kakao.maps.LatLng(36.51080877362894, 127.33591048916794),
                    new kakao.maps.LatLng(36.51256011483164, 127.34130182787673),
                    new kakao.maps.LatLng(36.51356686900201, 127.34757212911722),
                    new kakao.maps.LatLng(36.517646601697656, 127.34648593065538),
                    new kakao.maps.LatLng(36.518279296745234, 127.34631709269465),
                    new kakao.maps.LatLng(36.5181183847887, 127.34257175549276),
                    new kakao.maps.LatLng(36.51697008532441, 127.33390573222849),
                    new kakao.maps.LatLng(36.51659256828624, 127.32822886414354),
                    new kakao.maps.LatLng(36.51799251011792, 127.32502689520919),
                    new kakao.maps.LatLng(36.52043317969244, 127.3238351293832),
                    new kakao.maps.LatLng(36.52561012345766, 127.31971847379074),
                    new kakao.maps.LatLng(36.527569199887196, 127.31440446081342),
                    new kakao.maps.LatLng(36.529760236662014, 127.31011937679072),
                    new kakao.maps.LatLng(36.53205274434966, 127.30428917413953),
                    new kakao.maps.LatLng(36.53193325751278, 127.30261007302158),
                    new kakao.maps.LatLng(36.538864099530116, 127.30106721659796),
                    new kakao.maps.LatLng(36.54124119719657, 127.29975595940907),
                    new kakao.maps.LatLng(36.54486775229693, 127.29879760144479),
                    new kakao.maps.LatLng(36.5463730467673, 127.29666124689527),
                    new kakao.maps.LatLng(36.555896424821036, 127.28437863249485),
                    new kakao.maps.LatLng(36.55656874847182, 127.28185385458741),
                    new kakao.maps.LatLng(36.55528968536148, 127.27735656948516),
                    new kakao.maps.LatLng(36.55544747882739, 127.27300237246777),
                    new kakao.maps.LatLng(36.55361642337461, 127.27298537306092),
                    new kakao.maps.LatLng(36.55137019357194, 127.27161168227877),
                    new kakao.maps.LatLng(36.550125506954245, 127.26760968318847),
                    new kakao.maps.LatLng(36.55279735140085, 127.26675884765284),
                    new kakao.maps.LatLng(36.55214724614118, 127.26417905555755),
                    new kakao.maps.LatLng(36.55174407353334, 127.25799566305177),
                    new kakao.maps.LatLng(36.549754769578094, 127.25353663139012),
                    new kakao.maps.LatLng(36.55035266831057, 127.25125198535781),
                    new kakao.maps.LatLng(36.552532661998605, 127.24720021954478),
                    new kakao.maps.LatLng(36.55298245881174, 127.24403130353264),
                    new kakao.maps.LatLng(36.55152158731693, 127.24144577914655),
                    new kakao.maps.LatLng(36.5530498901581, 127.23887124431478),
                    new kakao.maps.LatLng(36.552565729400314, 127.23615223798643),
                    new kakao.maps.LatLng(36.5531419039898, 127.23309676492153),
                    new kakao.maps.LatLng(36.55449419450559, 127.23099300250152),
                    new kakao.maps.LatLng(36.55339139145116, 127.22601314843683),
                    new kakao.maps.LatLng(36.55447719903959, 127.22412840132144),
                    new kakao.maps.LatLng(36.553258825846044, 127.22009353937288),
                    new kakao.maps.LatLng(36.55078801408732, 127.21848132636275),
                    new kakao.maps.LatLng(36.545906423615946, 127.21646540885786),
                    new kakao.maps.LatLng(36.54027620587875, 127.21244086552788),
                    new kakao.maps.LatLng(36.536648442928374, 127.21425997848823),
                    new kakao.maps.LatLng(36.534022034850786, 127.2122677629846),
                    new kakao.maps.LatLng(36.5307098802684, 127.21489356852052),
                    new kakao.maps.LatLng(36.531349983875, 127.21711753039565),
                    new kakao.maps.LatLng(36.53079628195453, 127.21993563321551),
                    new kakao.maps.LatLng(36.52957646780228, 127.22175428019092),
                    new kakao.maps.LatLng(36.5300565076655, 127.22439593706227),
                    new kakao.maps.LatLng(36.533057142769174, 127.2260209484559),
                    new kakao.maps.LatLng(36.533728859505, 127.23195527040099),
                    new kakao.maps.LatLng(36.53312749691005, 127.23394050903867),
                    new kakao.maps.LatLng(36.53380080711567, 127.23660320964272),
                    new kakao.maps.LatLng(36.53542903122687, 127.2384602421691),
                    new kakao.maps.LatLng(36.53919616743062, 127.24013270561676),
                    new kakao.maps.LatLng(36.53717477343707, 127.24199498637951),
                    new kakao.maps.LatLng(36.537855746668214, 127.24514213207136),
                    new kakao.maps.LatLng(36.53697390432452, 127.24860149160243),
                    new kakao.maps.LatLng(36.536889496425, 127.25281070221968),
                    new kakao.maps.LatLng(36.53739197879339, 127.2544487136274),
                    new kakao.maps.LatLng(36.538677610210655, 127.25608157639375),
                    new kakao.maps.LatLng(36.53731153577098, 127.2587296127653),
                    new kakao.maps.LatLng(36.53933475184772, 127.26019883680067),
                    new kakao.maps.LatLng(36.53963623381689, 127.2628333680311),
                    new kakao.maps.LatLng(36.542552061738675, 127.26372701327152),
                    new kakao.maps.LatLng(36.543476507284886, 127.26618619475461),
                    new kakao.maps.LatLng(36.542273994813634, 127.26934140305974),
                    new kakao.maps.LatLng(36.538046814103105, 127.26753337966916),
                    new kakao.maps.LatLng(36.535996720812335, 127.26918481409437),
                    new kakao.maps.LatLng(36.53256564187755, 127.26936199165812),
                    new kakao.maps.LatLng(36.5316058047276, 127.27280729883289),
                    new kakao.maps.LatLng(36.53014182424908, 127.27198986782656),
                    new kakao.maps.LatLng(36.52742028236461, 127.27354897528733),
                    new kakao.maps.LatLng(36.52770406931272, 127.27473625606319),
                    new kakao.maps.LatLng(36.52427860375613, 127.27732544441903),
                    new kakao.maps.LatLng(36.52266287859321, 127.28031613934957),
                    new kakao.maps.LatLng(36.5218221022205, 127.27940042662576),
                    new kakao.maps.LatLng(36.5217440042957, 127.27540983461667),
                    new kakao.maps.LatLng(36.52331385832939, 127.27299890153878),
                    new kakao.maps.LatLng(36.52347983022372, 127.26966798583044),
                    new kakao.maps.LatLng(36.52272636242494, 127.26743505966385)
            ]
        }, {
            name : '연동면',
            path : [
                new kakao.maps.LatLng(36.522293334621615, 127.34340498354577),
                    new kakao.maps.LatLng(36.518279296745234, 127.34631709269465),
                    new kakao.maps.LatLng(36.517646601697656, 127.34648593065538),
                    new kakao.maps.LatLng(36.51884266555108, 127.35249180592233),
                    new kakao.maps.LatLng(36.519081760116656, 127.3594068672653),
                    new kakao.maps.LatLng(36.521422477564315, 127.36204778791868),
                    new kakao.maps.LatLng(36.523545682316765, 127.36335096669912),
                    new kakao.maps.LatLng(36.52575676645205, 127.36194163888625),
                    new kakao.maps.LatLng(36.52628344401042, 127.35960645413233),
                    new kakao.maps.LatLng(36.528729228346045, 127.35835516879811),
                    new kakao.maps.LatLng(36.52982431354631, 127.355234744975),
                    new kakao.maps.LatLng(36.534343112987614, 127.35471835772634),
                    new kakao.maps.LatLng(36.53758887524879, 127.35556144484764),
                    new kakao.maps.LatLng(36.54146377367727, 127.35388074631287),
                    new kakao.maps.LatLng(36.54669928666394, 127.35461796643072),
                    new kakao.maps.LatLng(36.550142674117566, 127.35866610996436),
                    new kakao.maps.LatLng(36.5533311794965, 127.35715313424221),
                    new kakao.maps.LatLng(36.555459104747385, 127.35364384618272),
                    new kakao.maps.LatLng(36.55757139002465, 127.35385123661803),
                    new kakao.maps.LatLng(36.56221166198765, 127.3510014142927),
                    new kakao.maps.LatLng(36.5644533700251, 127.34712792037918),
                    new kakao.maps.LatLng(36.563647261095554, 127.34074824446252),
                    new kakao.maps.LatLng(36.56234905655985, 127.33823837310688),
                    new kakao.maps.LatLng(36.562839427120664, 127.33701682027818),
                    new kakao.maps.LatLng(36.56534773192894, 127.33658437860991),
                    new kakao.maps.LatLng(36.56809611974055, 127.33515456605949),
                    new kakao.maps.LatLng(36.56998610814284, 127.3365502308135),
                    new kakao.maps.LatLng(36.57106400102744, 127.3357644477852),
                    new kakao.maps.LatLng(36.572585774988006, 127.33250772215803),
                    new kakao.maps.LatLng(36.575053866296614, 127.33096834797516),
                    new kakao.maps.LatLng(36.57603136895166, 127.32741068090715),
                    new kakao.maps.LatLng(36.577712415244676, 127.32545492699346),
                    new kakao.maps.LatLng(36.5803301404163, 127.32478850480942),
                    new kakao.maps.LatLng(36.580555090380706, 127.3229555847845),
                    new kakao.maps.LatLng(36.58377967804562, 127.32143940712025),
                    new kakao.maps.LatLng(36.58287207168309, 127.31320591241763),
                    new kakao.maps.LatLng(36.582979418236164, 127.30619477313795),
                    new kakao.maps.LatLng(36.582599864949074, 127.30373773700731),
                    new kakao.maps.LatLng(36.57888929816169, 127.30127558836818),
                    new kakao.maps.LatLng(36.57397889590469, 127.30588360052501),
                    new kakao.maps.LatLng(36.57248471831957, 127.30668008152581),
                    new kakao.maps.LatLng(36.57031775751529, 127.3062889637908),
                    new kakao.maps.LatLng(36.56788705348907, 127.30396863058444),
                    new kakao.maps.LatLng(36.56434200471454, 127.302198446177),
                    new kakao.maps.LatLng(36.55999399823406, 127.30209029109479),
                    new kakao.maps.LatLng(36.557068927059746, 127.30101244786003),
                    new kakao.maps.LatLng(36.55670300178659, 127.29958826811722),
                    new kakao.maps.LatLng(36.5463730467673, 127.29666124689527),
                    new kakao.maps.LatLng(36.54486775229693, 127.29879760144479),
                    new kakao.maps.LatLng(36.54124119719657, 127.29975595940907),
                    new kakao.maps.LatLng(36.538864099530116, 127.30106721659796),
                    new kakao.maps.LatLng(36.53193325751278, 127.30261007302158),
                    new kakao.maps.LatLng(36.53205274434966, 127.30428917413953),
                    new kakao.maps.LatLng(36.529760236662014, 127.31011937679072),
                    new kakao.maps.LatLng(36.527569199887196, 127.31440446081342),
                    new kakao.maps.LatLng(36.52561012345766, 127.31971847379074),
                    new kakao.maps.LatLng(36.52774724489955, 127.32101427262512),
                    new kakao.maps.LatLng(36.53051962101384, 127.3242774263119),
                    new kakao.maps.LatLng(36.53362281272458, 127.32981622954503),
                    new kakao.maps.LatLng(36.53276421802192, 127.33229603952245),
                    new kakao.maps.LatLng(36.53236591367605, 127.33795398323166),
                    new kakao.maps.LatLng(36.529325029823525, 127.33721425213493),
                    new kakao.maps.LatLng(36.52656800117896, 127.33821105140346),
                    new kakao.maps.LatLng(36.52432510058794, 127.34092550500574),
                    new kakao.maps.LatLng(36.52311613830922, 127.34419440591495),
                    new kakao.maps.LatLng(36.522293334621615, 127.34340498354577)
            ]
        }, {
            name : '부강면',
            path : [
                new kakao.maps.LatLng(36.48958984823715, 127.36890547949095),
                    new kakao.maps.LatLng(36.490157284575595, 127.37081989021942),
                    new kakao.maps.LatLng(36.49253703269478, 127.37421442498514),
                    new kakao.maps.LatLng(36.49561878543816, 127.37759145666102),
                    new kakao.maps.LatLng(36.49953881054951, 127.3803368026992),
                    new kakao.maps.LatLng(36.50023020139954, 127.38385522601364),
                    new kakao.maps.LatLng(36.49863822933088, 127.38693267658245),
                    new kakao.maps.LatLng(36.49172098416338, 127.39612080862918),
                    new kakao.maps.LatLng(36.493443567825736, 127.40029580120319),
                    new kakao.maps.LatLng(36.49341422607196, 127.40278214746093),
                    new kakao.maps.LatLng(36.49525932332766, 127.40832766977809),
                    new kakao.maps.LatLng(36.495320320079735, 127.4098266084088),
                    new kakao.maps.LatLng(36.49775179527485, 127.41080383587379),
                    new kakao.maps.LatLng(36.500146901991336, 127.40788363100876),
                    new kakao.maps.LatLng(36.50188168409904, 127.40900214796298),
                    new kakao.maps.LatLng(36.50297811388002, 127.40762324769273),
                    new kakao.maps.LatLng(36.50631642498644, 127.40878542799751),
                    new kakao.maps.LatLng(36.50974794457296, 127.40904422565623),
                    new kakao.maps.LatLng(36.51050295899088, 127.40743190190997),
                    new kakao.maps.LatLng(36.51302747807511, 127.40535251430181),
                    new kakao.maps.LatLng(36.51737818195665, 127.40375396195947),
                    new kakao.maps.LatLng(36.520577799374145, 127.39763527471604),
                    new kakao.maps.LatLng(36.52365332748571, 127.40149342092418),
                    new kakao.maps.LatLng(36.523925248531214, 127.40432871287413),
                    new kakao.maps.LatLng(36.52307753626788, 127.40765550061387),
                    new kakao.maps.LatLng(36.52528812774868, 127.4086912707019),
                    new kakao.maps.LatLng(36.52852076947775, 127.40854455699576),
                    new kakao.maps.LatLng(36.53139574971101, 127.40562190214533),
                    new kakao.maps.LatLng(36.536606611856115, 127.4052437558853),
                    new kakao.maps.LatLng(36.53863852924753, 127.40266929909626),
                    new kakao.maps.LatLng(36.54124000023347, 127.40182492250419),
                    new kakao.maps.LatLng(36.54178323729095, 127.40019379282332),
                    new kakao.maps.LatLng(36.540549972894105, 127.39853296354482),
                    new kakao.maps.LatLng(36.540040283878746, 127.39546922296158),
                    new kakao.maps.LatLng(36.54038600307678, 127.38898170509684),
                    new kakao.maps.LatLng(36.541143606790385, 127.38781582657548),
                    new kakao.maps.LatLng(36.54153225895777, 127.38388462983065),
                    new kakao.maps.LatLng(36.54547566140301, 127.38387389644265),
                    new kakao.maps.LatLng(36.54786416122829, 127.38318628586362),
                    new kakao.maps.LatLng(36.54980571389105, 127.37852517269123),
                    new kakao.maps.LatLng(36.552585709001534, 127.37923096685712),
                    new kakao.maps.LatLng(36.555166289362006, 127.37809691039764),
                    new kakao.maps.LatLng(36.55787804218579, 127.37556191485207),
                    new kakao.maps.LatLng(36.55764914266284, 127.37375123323866),
                    new kakao.maps.LatLng(36.55995832462487, 127.37270508676673),
                    new kakao.maps.LatLng(36.560213643381566, 127.37500505035341),
                    new kakao.maps.LatLng(36.562935853328426, 127.37798440502878),
                    new kakao.maps.LatLng(36.565234972293936, 127.37396047685965),
                    new kakao.maps.LatLng(36.56662367884624, 127.37699092264451),
                    new kakao.maps.LatLng(36.56782845078194, 127.3775490468927),
                    new kakao.maps.LatLng(36.56619605247126, 127.36826008580658),
                    new kakao.maps.LatLng(36.56393714868106, 127.36609387677645),
                    new kakao.maps.LatLng(36.564453027833125, 127.36251768912184),
                    new kakao.maps.LatLng(36.56227642361185, 127.36048449326543),
                    new kakao.maps.LatLng(36.56168405287988, 127.35626013474266),
                    new kakao.maps.LatLng(36.5628238535216, 127.35487738505458),
                    new kakao.maps.LatLng(36.562142570348996, 127.35194815083517),
                    new kakao.maps.LatLng(36.557570908590996, 127.3538514887477),
                    new kakao.maps.LatLng(36.555458621662204, 127.35364409811207),
                    new kakao.maps.LatLng(36.553330697013955, 127.35715338683724),
                    new kakao.maps.LatLng(36.55014219155529, 127.35866636207427),
                    new kakao.maps.LatLng(36.54669880295685, 127.35461821729443),
                    new kakao.maps.LatLng(36.54146328887175, 127.35388099767565),
                    new kakao.maps.LatLng(36.537588390862055, 127.35556169668892),
                    new kakao.maps.LatLng(36.53434262887085, 127.3547186106052),
                    new kakao.maps.LatLng(36.52982382780343, 127.35523499733969),
                    new kakao.maps.LatLng(36.52872874330451, 127.35835542091962),
                    new kakao.maps.LatLng(36.5262829580606, 127.35960670733338),
                    new kakao.maps.LatLng(36.5257562808616, 127.36194189281196),
                    new kakao.maps.LatLng(36.52354519630797, 127.36335121888659),
                    new kakao.maps.LatLng(36.52142199213128, 127.36204804090539),
                    new kakao.maps.LatLng(36.519081273983126, 127.35940712044967),
                    new kakao.maps.LatLng(36.51854027544373, 127.36093425448786),
                    new kakao.maps.LatLng(36.515776183750724, 127.3639281269364),
                    new kakao.maps.LatLng(36.51353308031576, 127.36424215483187),
                    new kakao.maps.LatLng(36.51008118987002, 127.36315383325633),
                    new kakao.maps.LatLng(36.50587295479984, 127.35799582653668),
                    new kakao.maps.LatLng(36.5020018473984, 127.35377611670228),
                    new kakao.maps.LatLng(36.500056838906595, 127.35260997920537),
                    new kakao.maps.LatLng(36.497984535454606, 127.35261968022591),
                    new kakao.maps.LatLng(36.4946525770851, 127.35577378733193),
                    new kakao.maps.LatLng(36.491023728856725, 127.36351222507471),
                    new kakao.maps.LatLng(36.48958984823715, 127.36890547949095)
            ]
        }, {
            name : '금남면',
            path : [
                new kakao.maps.LatLng(36.479924868129224, 127.31293114392741),
                    new kakao.maps.LatLng(36.479784266963335, 127.30865793080365),
                    new kakao.maps.LatLng(36.478084783112415, 127.30341061708846),
                    new kakao.maps.LatLng(36.47816849983934, 127.30044227366544),
                    new kakao.maps.LatLng(36.47739462183989, 127.29809172505566),
                    new kakao.maps.LatLng(36.474480233126634, 127.29422029134727),
                    new kakao.maps.LatLng(36.47301086486263, 127.28723068817062),
                    new kakao.maps.LatLng(36.470641117981614, 127.28536457733577),
                    new kakao.maps.LatLng(36.46857459129565, 127.28270208802795),
                    new kakao.maps.LatLng(36.469263449553694, 127.28137819125622),
                    new kakao.maps.LatLng(36.46753198671766, 127.27700934100557),
                    new kakao.maps.LatLng(36.46388420058377, 127.272148511223),
                    new kakao.maps.LatLng(36.46218031063605, 127.26988297990627),
                    new kakao.maps.LatLng(36.463440122712676, 127.26658499552252),
                    new kakao.maps.LatLng(36.46349836127849, 127.2637614613519),
                    new kakao.maps.LatLng(36.46237481497946, 127.25882574191135),
                    new kakao.maps.LatLng(36.46062239190842, 127.2576418599618),
                    new kakao.maps.LatLng(36.459359194481394, 127.25537808541397),
                    new kakao.maps.LatLng(36.4590627799143, 127.25209393252848),
                    new kakao.maps.LatLng(36.46028738701318, 127.24897805554846),
                    new kakao.maps.LatLng(36.460888849931656, 127.24802933756503),
                    new kakao.maps.LatLng(36.460495292985435, 127.24450725380329),
                    new kakao.maps.LatLng(36.46007229215815, 127.24065229880986),
                    new kakao.maps.LatLng(36.45563807945201, 127.23197658682565),
                    new kakao.maps.LatLng(36.45004150378587, 127.2278333571795),
                    new kakao.maps.LatLng(36.44193024942021, 127.22666768232229),
                    new kakao.maps.LatLng(36.438328139912194, 127.22535220568511),
                    new kakao.maps.LatLng(36.43681653730538, 127.22267062313963),
                    new kakao.maps.LatLng(36.43460639852514, 127.21344917689635),
                    new kakao.maps.LatLng(36.433737540858495, 127.21770738309436),
                    new kakao.maps.LatLng(36.43186594993926, 127.21869579225722),
                    new kakao.maps.LatLng(36.43023931538304, 127.22120298645443),
                    new kakao.maps.LatLng(36.427235603038355, 127.22362594725968),
                    new kakao.maps.LatLng(36.42665017377269, 127.22511467131301),
                    new kakao.maps.LatLng(36.42229475954699, 127.22564315954972),
                    new kakao.maps.LatLng(36.42122129935153, 127.22693290198045),
                    new kakao.maps.LatLng(36.42279622751823, 127.22877984220422),
                    new kakao.maps.LatLng(36.421945164934534, 127.23170857675741),
                    new kakao.maps.LatLng(36.419909479316566, 127.23192531656736),
                    new kakao.maps.LatLng(36.418807996477895, 127.23562587022379),
                    new kakao.maps.LatLng(36.41839291764844, 127.23993658993145),
                    new kakao.maps.LatLng(36.418839820045655, 127.24366457268162),
                    new kakao.maps.LatLng(36.415461667196105, 127.24314957316973),
                    new kakao.maps.LatLng(36.4134314600573, 127.24557933541145),
                    new kakao.maps.LatLng(36.40919323616519, 127.24954152523587),
                    new kakao.maps.LatLng(36.406842715069324, 127.25057882772218),
                    new kakao.maps.LatLng(36.408123936352524, 127.25523666224238),
                    new kakao.maps.LatLng(36.40823232762245, 127.25790803172411),
                    new kakao.maps.LatLng(36.410354336238015, 127.2595635272952),
                    new kakao.maps.LatLng(36.4136905119125, 127.25857604555746),
                    new kakao.maps.LatLng(36.41551854071931, 127.25980794433913),
                    new kakao.maps.LatLng(36.417174752187115, 127.26549266822472),
                    new kakao.maps.LatLng(36.41553216658754, 127.27197100164518),
                    new kakao.maps.LatLng(36.41394868216297, 127.27568913291795),
                    new kakao.maps.LatLng(36.41539624175577, 127.2798616343021),
                    new kakao.maps.LatLng(36.415151339978244, 127.28573260673078),
                    new kakao.maps.LatLng(36.416155677749835, 127.29108010255665),
                    new kakao.maps.LatLng(36.418541106361786, 127.29112780511763),
                    new kakao.maps.LatLng(36.418577330344235, 127.29348600556534),
                    new kakao.maps.LatLng(36.419945161716555, 127.29518909484901),
                    new kakao.maps.LatLng(36.4222555607491, 127.2942479119526),
                    new kakao.maps.LatLng(36.42319411267465, 127.2982696893072),
                    new kakao.maps.LatLng(36.421826778979764, 127.30146641950958),
                    new kakao.maps.LatLng(36.424675802163456, 127.30350161357521),
                    new kakao.maps.LatLng(36.424882859719915, 127.31029524219089),
                    new kakao.maps.LatLng(36.42292218244653, 127.31412106226419),
                    new kakao.maps.LatLng(36.420494970660805, 127.31637136632328),
                    new kakao.maps.LatLng(36.42146295705519, 127.31920660603592),
                    new kakao.maps.LatLng(36.42369567493143, 127.32169778325613),
                    new kakao.maps.LatLng(36.42220897487532, 127.32631672595416),
                    new kakao.maps.LatLng(36.423321485485744, 127.32914910052973),
                    new kakao.maps.LatLng(36.426504804621274, 127.33272789201665),
                    new kakao.maps.LatLng(36.4283487880408, 127.33757265461107),
                    new kakao.maps.LatLng(36.43097213245151, 127.34100894663209),
                    new kakao.maps.LatLng(36.43616013555128, 127.34016008209781),
                    new kakao.maps.LatLng(36.438732143999836, 127.34310830786649),
                    new kakao.maps.LatLng(36.44315379714198, 127.34426046483381),
                    new kakao.maps.LatLng(36.446203278747845, 127.34731682732621),
                    new kakao.maps.LatLng(36.44776113675575, 127.34964678106029),
                    new kakao.maps.LatLng(36.44708948475408, 127.35215100946671),
                    new kakao.maps.LatLng(36.45027303718832, 127.35579857594647),
                    new kakao.maps.LatLng(36.453557297855156, 127.35576053724792),
                    new kakao.maps.LatLng(36.45589570085663, 127.35862153304207),
                    new kakao.maps.LatLng(36.45875477840628, 127.35677110469727),
                    new kakao.maps.LatLng(36.46172345471362, 127.35717058440669),
                    new kakao.maps.LatLng(36.46401932493677, 127.35606664549252),
                    new kakao.maps.LatLng(36.46492514241827, 127.35884737022508),
                    new kakao.maps.LatLng(36.46983136472433, 127.35978165592138),
                    new kakao.maps.LatLng(36.471202639572844, 127.3620818917374),
                    new kakao.maps.LatLng(36.475218815195085, 127.36389084980149),
                    new kakao.maps.LatLng(36.47702304164179, 127.36158143082449),
                    new kakao.maps.LatLng(36.480597835466334, 127.36082051886963),
                    new kakao.maps.LatLng(36.48318120726762, 127.35776330309004),
                    new kakao.maps.LatLng(36.485237280743355, 127.35906093196166),
                    new kakao.maps.LatLng(36.48731760463375, 127.3591287577394),
                    new kakao.maps.LatLng(36.490883920408805, 127.3609839344742),
                    new kakao.maps.LatLng(36.489611225626035, 127.36345025839965),
                    new kakao.maps.LatLng(36.48822687382222, 127.3681430545559),
                    new kakao.maps.LatLng(36.4895645833723, 127.36891086022341),
                    new kakao.maps.LatLng(36.49102421702758, 127.36351197139159),
                    new kakao.maps.LatLng(36.494653064967466, 127.35577353434235),
                    new kakao.maps.LatLng(36.49798502304916, 127.3526194275355),
                    new kakao.maps.LatLng(36.50005732631084, 127.35260972653411),
                    new kakao.maps.LatLng(36.502002334617245, 127.3537758639486),
                    new kakao.maps.LatLng(36.505873441638954, 127.35799557345645),
                    new kakao.maps.LatLng(36.51008167629299, 127.36315357977216),
                    new kakao.maps.LatLng(36.5135335664155, 127.364241901285),
                    new kakao.maps.LatLng(36.51577666964624, 127.36392787343598),
                    new kakao.maps.LatLng(36.51854076110237, 127.36093400126767),
                    new kakao.maps.LatLng(36.519081760116656, 127.3594068672653),
                    new kakao.maps.LatLng(36.51884266555108, 127.35249180592233),
                    new kakao.maps.LatLng(36.517646601697656, 127.34648593065538),
                    new kakao.maps.LatLng(36.51356686900201, 127.34757212911722),
                    new kakao.maps.LatLng(36.513041432421865, 127.34720746045528),
                    new kakao.maps.LatLng(36.51265757191533, 127.34703117308702),
                    new kakao.maps.LatLng(36.508474521899494, 127.3461989299424),
                    new kakao.maps.LatLng(36.50678498538301, 127.34875193933455),
                    new kakao.maps.LatLng(36.504659966820135, 127.34683533818013),
                    new kakao.maps.LatLng(36.50466731697008, 127.34387867667388),
                    new kakao.maps.LatLng(36.50029226790435, 127.34026829217287),
                    new kakao.maps.LatLng(36.49979521237001, 127.33824157069398),
                    new kakao.maps.LatLng(36.498283771342564, 127.33792118987483),
                    new kakao.maps.LatLng(36.49619628428246, 127.33547610343379),
                    new kakao.maps.LatLng(36.494907476061464, 127.33601094519494),
                    new kakao.maps.LatLng(36.49306782577487, 127.3345537201712),
                    new kakao.maps.LatLng(36.49149160829822, 127.33460892354162),
                    new kakao.maps.LatLng(36.48813604697852, 127.33199324678272),
                    new kakao.maps.LatLng(36.48725376970024, 127.33061531258657),
                    new kakao.maps.LatLng(36.486208041045444, 127.32618720741229),
                    new kakao.maps.LatLng(36.48149431018496, 127.32616974852691),
                    new kakao.maps.LatLng(36.48105101203337, 127.3228678679831),
                    new kakao.maps.LatLng(36.47932197168955, 127.32106864130778),
                    new kakao.maps.LatLng(36.480083486770965, 127.31884818172995),
                    new kakao.maps.LatLng(36.48017428285754, 127.31866272364371),
                    new kakao.maps.LatLng(36.480494593447176, 127.31814832798302),
                    new kakao.maps.LatLng(36.48073359956889, 127.31576167908405),
                    new kakao.maps.LatLng(36.479924868129224, 127.31293114392741)
            ]
        }, {
            name : '장군면',
            path : [
                new kakao.maps.LatLng(36.47871397338785, 127.24381242351153),
                    new kakao.maps.LatLng(36.481759127056364, 127.24319620331391),
                    new kakao.maps.LatLng(36.484806888738326, 127.24182084971464),
                    new kakao.maps.LatLng(36.48635647457485, 127.2391791884625),
                    new kakao.maps.LatLng(36.48807510894317, 127.2400085604207),
                    new kakao.maps.LatLng(36.4919822902817, 127.23789518832388),
                    new kakao.maps.LatLng(36.49504178698681, 127.23784502063506),
                    new kakao.maps.LatLng(36.49931956177375, 127.23111807646553),
                    new kakao.maps.LatLng(36.50234997044746, 127.23173948289721),
                    new kakao.maps.LatLng(36.5051039157555, 127.23020473699596),
                    new kakao.maps.LatLng(36.50650360323989, 127.22770295366827),
                    new kakao.maps.LatLng(36.51052641244891, 127.22727039250606),
                    new kakao.maps.LatLng(36.511415122146694, 127.22659666824963),
                    new kakao.maps.LatLng(36.51141578948823, 127.22659642700464),
                    new kakao.maps.LatLng(36.51333103277894, 127.2235209686132),
                    new kakao.maps.LatLng(36.515273816963635, 127.22534604950754),
                    new kakao.maps.LatLng(36.518630087057225, 127.2259108079434),
                    new kakao.maps.LatLng(36.519673449166326, 127.22743058183768),
                    new kakao.maps.LatLng(36.521773774020495, 127.22794133748138),
                    new kakao.maps.LatLng(36.52261893512095, 127.22960013552596),
                    new kakao.maps.LatLng(36.526306069524935, 127.23074915749767),
                    new kakao.maps.LatLng(36.527035161653224, 127.2285331893445),
                    new kakao.maps.LatLng(36.52945457729544, 127.22744511851174),
                    new kakao.maps.LatLng(36.53005602227608, 127.22439617846993),
                    new kakao.maps.LatLng(36.52957598204188, 127.22175452129736),
                    new kakao.maps.LatLng(36.53079579675594, 127.21993587451803),
                    new kakao.maps.LatLng(36.53134949879255, 127.21711777136255),
                    new kakao.maps.LatLng(36.530709394968135, 127.21489380927737),
                    new kakao.maps.LatLng(36.53402154989987, 127.2122680036613),
                    new kakao.maps.LatLng(36.53664795798815, 127.21426021914382),
                    new kakao.maps.LatLng(36.54027572141715, 127.2124411061953),
                    new kakao.maps.LatLng(36.54590593997564, 127.21646564917332),
                    new kakao.maps.LatLng(36.55228343572163, 127.21933772506038),
                    new kakao.maps.LatLng(36.553028841207144, 127.21869152412062),
                    new kakao.maps.LatLng(36.55590822557157, 127.2177547913926),
                    new kakao.maps.LatLng(36.55857791610493, 127.21874012966346),
                    new kakao.maps.LatLng(36.56178181036001, 127.21766336039839),
                    new kakao.maps.LatLng(36.56382682715302, 127.21777713710408),
                    new kakao.maps.LatLng(36.56498096792591, 127.21645832226753),
                    new kakao.maps.LatLng(36.56877565990153, 127.21654282961008),
                    new kakao.maps.LatLng(36.57026619240706, 127.21432723749547),
                    new kakao.maps.LatLng(36.5724358097722, 127.21319726528938),
                    new kakao.maps.LatLng(36.57847450903232, 127.21232526838718),
                    new kakao.maps.LatLng(36.578338025397414, 127.20807528929595),
                    new kakao.maps.LatLng(36.578304282330464, 127.20747121471722),
                    new kakao.maps.LatLng(36.57528925870361, 127.20686219083188),
                    new kakao.maps.LatLng(36.57265447146959, 127.20373183340506),
                    new kakao.maps.LatLng(36.56744323246057, 127.20310025534462),
                    new kakao.maps.LatLng(36.564944078672035, 127.19920097058406),
                    new kakao.maps.LatLng(36.56481202949627, 127.19378796301538),
                    new kakao.maps.LatLng(36.56219906682837, 127.19318712927281),
                    new kakao.maps.LatLng(36.560096492117665, 127.19090140488271),
                    new kakao.maps.LatLng(36.5573403062453, 127.18944309617348),
                    new kakao.maps.LatLng(36.554719918430685, 127.18926734137614),
                    new kakao.maps.LatLng(36.55232038647469, 127.1861145681738),
                    new kakao.maps.LatLng(36.54602490581185, 127.19182710070028),
                    new kakao.maps.LatLng(36.54579721069452, 127.18700820006858),
                    new kakao.maps.LatLng(36.54366221891503, 127.18503548730847),
                    new kakao.maps.LatLng(36.54410561432976, 127.18279319483595),
                    new kakao.maps.LatLng(36.54559890730033, 127.18117472372984),
                    new kakao.maps.LatLng(36.5453575658762, 127.17867323766723),
                    new kakao.maps.LatLng(36.54218903241206, 127.17424079318212),
                    new kakao.maps.LatLng(36.538254323938354, 127.17434348910743),
                    new kakao.maps.LatLng(36.53614313092276, 127.17266868823394),
                    new kakao.maps.LatLng(36.53345640421302, 127.1730186002339),
                    new kakao.maps.LatLng(36.53297965750747, 127.17492239024578),
                    new kakao.maps.LatLng(36.52888149621498, 127.17573367604813),
                    new kakao.maps.LatLng(36.522240841069724, 127.1817291746687),
                    new kakao.maps.LatLng(36.520766234448736, 127.18207238520421),
                    new kakao.maps.LatLng(36.5149100919724, 127.17353431648367),
                    new kakao.maps.LatLng(36.51361613848203, 127.1731866395372),
                    new kakao.maps.LatLng(36.50903742546513, 127.16998994070629),
                    new kakao.maps.LatLng(36.507362002290336, 127.17359268197605),
                    new kakao.maps.LatLng(36.50344363266315, 127.17585088963347),
                    new kakao.maps.LatLng(36.50211153546198, 127.17848791268113),
                    new kakao.maps.LatLng(36.49993254714318, 127.17719370809625),
                    new kakao.maps.LatLng(36.50055579851345, 127.17569567261263),
                    new kakao.maps.LatLng(36.4992061805963, 127.17346610756243),
                    new kakao.maps.LatLng(36.49478579560264, 127.17487644614073),
                    new kakao.maps.LatLng(36.49269541259277, 127.17673296451774),
                    new kakao.maps.LatLng(36.49175754339914, 127.17927003194612),
                    new kakao.maps.LatLng(36.49338250188512, 127.18335901483842),
                    new kakao.maps.LatLng(36.492621572397695, 127.18831484913187),
                    new kakao.maps.LatLng(36.490956440437074, 127.19010318150866),
                    new kakao.maps.LatLng(36.48959310817538, 127.19467573924726),
                    new kakao.maps.LatLng(36.48634472467802, 127.19504834484249),
                    new kakao.maps.LatLng(36.482603644022234, 127.19325598390871),
                    new kakao.maps.LatLng(36.48153634853021, 127.19345027852023),
                    new kakao.maps.LatLng(36.47947050570319, 127.19048220252053),
                    new kakao.maps.LatLng(36.474666022205945, 127.19201764027264),
                    new kakao.maps.LatLng(36.472568426765044, 127.19348322649117),
                    new kakao.maps.LatLng(36.47011727078698, 127.1938843499366),
                    new kakao.maps.LatLng(36.46561576079789, 127.19864186406492),
                    new kakao.maps.LatLng(36.46680245819214, 127.20108614643999),
                    new kakao.maps.LatLng(36.464977241923485, 127.20327695080921),
                    new kakao.maps.LatLng(36.45928974651283, 127.20473375403434),
                    new kakao.maps.LatLng(36.457488476435024, 127.20325300833747),
                    new kakao.maps.LatLng(36.454611878429816, 127.2032673096813),
                    new kakao.maps.LatLng(36.45415415656146, 127.20120266680608),
                    new kakao.maps.LatLng(36.452206185363764, 127.19839970689034),
                    new kakao.maps.LatLng(36.44911547758317, 127.20134270008613),
                    new kakao.maps.LatLng(36.44499938221627, 127.20098774599941),
                    new kakao.maps.LatLng(36.44197478088493, 127.20138989113534),
                    new kakao.maps.LatLng(36.43988395205198, 127.19893392272103),
                    new kakao.maps.LatLng(36.438863625597826, 127.20049014373716),
                    new kakao.maps.LatLng(36.43614524104971, 127.20712142762127),
                    new kakao.maps.LatLng(36.43567634165762, 127.21150086142869),
                    new kakao.maps.LatLng(36.43557652872865, 127.21827237776253),
                    new kakao.maps.LatLng(36.43681604330282, 127.22267086526784),
                    new kakao.maps.LatLng(36.43832764606562, 127.2253524480288),
                    new kakao.maps.LatLng(36.44192975591384, 127.22666792474445),
                    new kakao.maps.LatLng(36.45004101103437, 127.22783359962463),
                    new kakao.maps.LatLng(36.45563758724194, 127.23197682957327),
                    new kakao.maps.LatLng(36.460071800409956, 127.24065254225975),
                    new kakao.maps.LatLng(36.460494801299745, 127.24450749757975),
                    new kakao.maps.LatLng(36.46479886154182, 127.24134261796685),
                    new kakao.maps.LatLng(36.47045776357346, 127.23506417458515),
                    new kakao.maps.LatLng(36.472496436819554, 127.23550500914912),
                    new kakao.maps.LatLng(36.474239107156976, 127.23778652894156),
                    new kakao.maps.LatLng(36.47478872143497, 127.23995628310746),
                    new kakao.maps.LatLng(36.476221953992365, 127.24083295208526),
                    new kakao.maps.LatLng(36.47871397338785, 127.24381242351153)
            ]
        }, {
            name : '연서면',
            path : [
                new kakao.maps.LatLng(36.61986738370363, 127.2094923138521),
                    new kakao.maps.LatLng(36.618138263327744, 127.20760809582399),
                    new kakao.maps.LatLng(36.61757207546606, 127.2053834804573),
                    new kakao.maps.LatLng(36.616042320797014, 127.20339638812521),
                    new kakao.maps.LatLng(36.61550967212197, 127.19917009012072),
                    new kakao.maps.LatLng(36.613070030503586, 127.1966402269476),
                    new kakao.maps.LatLng(36.61050597498344, 127.19764191538134),
                    new kakao.maps.LatLng(36.607216158101075, 127.19651143883283),
                    new kakao.maps.LatLng(36.604649634634825, 127.19632318440743),
                    new kakao.maps.LatLng(36.6033811490871, 127.1942626106261),
                    new kakao.maps.LatLng(36.600739944017036, 127.19268355305302),
                    new kakao.maps.LatLng(36.597837884157684, 127.19272432584027),
                    new kakao.maps.LatLng(36.5945585465873, 127.18922807170514),
                    new kakao.maps.LatLng(36.59353044447221, 127.1913362936087),
                    new kakao.maps.LatLng(36.58683857369707, 127.18925564793126),
                    new kakao.maps.LatLng(36.58450213695044, 127.19118743938289),
                    new kakao.maps.LatLng(36.58352741059178, 127.19088824667212),
                    new kakao.maps.LatLng(36.58064492085815, 127.19403941206505),
                    new kakao.maps.LatLng(36.58100176834432, 127.19660197349123),
                    new kakao.maps.LatLng(36.58256713097931, 127.2003995279331),
                    new kakao.maps.LatLng(36.580768911223124, 127.20566523385683),
                    new kakao.maps.LatLng(36.578304282330464, 127.20747121471722),
                    new kakao.maps.LatLng(36.578338025397414, 127.20807528929595),
                    new kakao.maps.LatLng(36.57847450903232, 127.21232526838718),
                    new kakao.maps.LatLng(36.5724358097722, 127.21319726528938),
                    new kakao.maps.LatLng(36.57026619240706, 127.21432723749547),
                    new kakao.maps.LatLng(36.56877565990153, 127.21654282961008),
                    new kakao.maps.LatLng(36.56498096792591, 127.21645832226753),
                    new kakao.maps.LatLng(36.56382682715302, 127.21777713710408),
                    new kakao.maps.LatLng(36.56178181036001, 127.21766336039839),
                    new kakao.maps.LatLng(36.55857791610493, 127.21874012966346),
                    new kakao.maps.LatLng(36.55590822557157, 127.2177547913926),
                    new kakao.maps.LatLng(36.553028841207144, 127.21869152412062),
                    new kakao.maps.LatLng(36.552696111164074, 127.21967882792914),
                    new kakao.maps.LatLng(36.5544767155, 127.22412864271497),
                    new kakao.maps.LatLng(36.55339090803157, 127.22601338947824),
                    new kakao.maps.LatLng(36.554493711772984, 127.2309932445699),
                    new kakao.maps.LatLng(36.55314142112499, 127.23309700686069),
                    new kakao.maps.LatLng(36.55256524636928, 127.2361524805982),
                    new kakao.maps.LatLng(36.55304940672506, 127.23887148639315),
                    new kakao.maps.LatLng(36.55152110408712, 127.24144602222827),
                    new kakao.maps.LatLng(36.552981975926606, 127.244031546639),
                    new kakao.maps.LatLng(36.55253217900571, 127.24720046243888),
                    new kakao.maps.LatLng(36.550352184953866, 127.2512522291832),
                    new kakao.maps.LatLng(36.5497542858938, 127.25353687503078),
                    new kakao.maps.LatLng(36.551743590780184, 127.25799590664951),
                    new kakao.maps.LatLng(36.5521467630648, 127.26417930032815),
                    new kakao.maps.LatLng(36.55279686864612, 127.2667590926637),
                    new kakao.maps.LatLng(36.55012502348096, 127.26760992849493),
                    new kakao.maps.LatLng(36.55136971027789, 127.2716119276905),
                    new kakao.maps.LatLng(36.55361594082829, 127.27298561827054),
                    new kakao.maps.LatLng(36.555446996335796, 127.27300261806974),
                    new kakao.maps.LatLng(36.555289202850645, 127.27735681477793),
                    new kakao.maps.LatLng(36.556568265610025, 127.28185410035705),
                    new kakao.maps.LatLng(36.55589594256424, 127.28437887870813),
                    new kakao.maps.LatLng(36.54637256326964, 127.29666149469581),
                    new kakao.maps.LatLng(36.556702518788946, 127.29958851641238),
                    new kakao.maps.LatLng(36.557068444605456, 127.30101269560967),
                    new kakao.maps.LatLng(36.559993516055414, 127.30209053891141),
                    new kakao.maps.LatLng(36.564341522425636, 127.30219869288196),
                    new kakao.maps.LatLng(36.56788657131143, 127.30396887847753),
                    new kakao.maps.LatLng(36.57031727648246, 127.30628921060186),
                    new kakao.maps.LatLng(36.5724842373278, 127.30668032925944),
                    new kakao.maps.LatLng(36.573978413791494, 127.30588384955914),
                    new kakao.maps.LatLng(36.57888881760152, 127.30127583494608),
                    new kakao.maps.LatLng(36.57771084053068, 127.29853997741674),
                    new kakao.maps.LatLng(36.57849056669644, 127.29482915322475),
                    new kakao.maps.LatLng(36.5801136960937, 127.29400439362469),
                    new kakao.maps.LatLng(36.57913143265205, 127.29035808385089),
                    new kakao.maps.LatLng(36.58071609519568, 127.28891690543672),
                    new kakao.maps.LatLng(36.583474047527154, 127.28784357635917),
                    new kakao.maps.LatLng(36.585629300598434, 127.29108809164134),
                    new kakao.maps.LatLng(36.58708912020062, 127.29129594275335),
                    new kakao.maps.LatLng(36.58808918017896, 127.28884534421803),
                    new kakao.maps.LatLng(36.5897567762707, 127.28839924860932),
                    new kakao.maps.LatLng(36.59260966345998, 127.28462572956046),
                    new kakao.maps.LatLng(36.59440318107643, 127.2843530823538),
                    new kakao.maps.LatLng(36.59586082140945, 127.28213287888632),
                    new kakao.maps.LatLng(36.59736069154529, 127.28171815914422),
                    new kakao.maps.LatLng(36.59775970193333, 127.27857683917924),
                    new kakao.maps.LatLng(36.59685069865569, 127.2752015232653),
                    new kakao.maps.LatLng(36.59862290086682, 127.26986436179804),
                    new kakao.maps.LatLng(36.6026579622819, 127.27019315014157),
                    new kakao.maps.LatLng(36.60485690903071, 127.26843141571975),
                    new kakao.maps.LatLng(36.60611283936378, 127.26887189088504),
                    new kakao.maps.LatLng(36.6085752661265, 127.26622497688857),
                    new kakao.maps.LatLng(36.61182457129261, 127.265333390201),
                    new kakao.maps.LatLng(36.61166212038778, 127.26388794222805),
                    new kakao.maps.LatLng(36.61417277059348, 127.25981710685024),
                    new kakao.maps.LatLng(36.61854600970391, 127.25909360125777),
                    new kakao.maps.LatLng(36.61991501631771, 127.25058221471409),
                    new kakao.maps.LatLng(36.618297839425026, 127.24865788143616),
                    new kakao.maps.LatLng(36.61828323160848, 127.24577738662377),
                    new kakao.maps.LatLng(36.619610072462024, 127.24459166144595),
                    new kakao.maps.LatLng(36.617893174617436, 127.24130300086476),
                    new kakao.maps.LatLng(36.61863462271105, 127.24039385778374),
                    new kakao.maps.LatLng(36.61902215095362, 127.23566780833401),
                    new kakao.maps.LatLng(36.61751997608235, 127.22813775156699),
                    new kakao.maps.LatLng(36.615651320307514, 127.22570731062721),
                    new kakao.maps.LatLng(36.61811461041264, 127.22236956958969),
                    new kakao.maps.LatLng(36.6199320614345, 127.22145306414303),
                    new kakao.maps.LatLng(36.619667402305545, 127.217944628905),
                    new kakao.maps.LatLng(36.620515236623575, 127.21069135653705),
                    new kakao.maps.LatLng(36.61986738370363, 127.2094923138521)
            ]
        }, {
            name : '전의면',
            path : [
                new kakao.maps.LatLng(36.5945585465873, 127.18922807170514),
                    new kakao.maps.LatLng(36.597837884157684, 127.19272432584027),
                    new kakao.maps.LatLng(36.600739944017036, 127.19268355305302),
                    new kakao.maps.LatLng(36.6033811490871, 127.1942626106261),
                    new kakao.maps.LatLng(36.604649634634825, 127.19632318440743),
                    new kakao.maps.LatLng(36.607216158101075, 127.19651143883283),
                    new kakao.maps.LatLng(36.61050597498344, 127.19764191538134),
                    new kakao.maps.LatLng(36.613070030503586, 127.1966402269476),
                    new kakao.maps.LatLng(36.61550967212197, 127.19917009012072),
                    new kakao.maps.LatLng(36.616042320797014, 127.20339638812521),
                    new kakao.maps.LatLng(36.61757207546606, 127.2053834804573),
                    new kakao.maps.LatLng(36.618138263327744, 127.20760809582399),
                    new kakao.maps.LatLng(36.61986738370363, 127.2094923138521),
                    new kakao.maps.LatLng(36.62236826406699, 127.21014762886135),
                    new kakao.maps.LatLng(36.62603794866049, 127.20809941412632),
                    new kakao.maps.LatLng(36.62706406614572, 127.20585110759596),
                    new kakao.maps.LatLng(36.62932982913421, 127.20392919910874),
                    new kakao.maps.LatLng(36.630653622665456, 127.20429443516998),
                    new kakao.maps.LatLng(36.63449337572424, 127.20319127007515),
                    new kakao.maps.LatLng(36.636331554414014, 127.20415538990356),
                    new kakao.maps.LatLng(36.63991924016809, 127.20400569059052),
                    new kakao.maps.LatLng(36.64331490645131, 127.20175891026916),
                    new kakao.maps.LatLng(36.64811011074463, 127.20453823193512),
                    new kakao.maps.LatLng(36.65649869507575, 127.19999593690366),
                    new kakao.maps.LatLng(36.65978512346935, 127.20139094257242),
                    new kakao.maps.LatLng(36.66188969585545, 127.20627561426043),
                    new kakao.maps.LatLng(36.6655728177024, 127.20867398990161),
                    new kakao.maps.LatLng(36.66959990598313, 127.20660365256357),
                    new kakao.maps.LatLng(36.67164276882896, 127.20800065316818),
                    new kakao.maps.LatLng(36.67515151768723, 127.20830474437278),
                    new kakao.maps.LatLng(36.67429404255462, 127.20994948239198),
                    new kakao.maps.LatLng(36.672279985595466, 127.21110875259285),
                    new kakao.maps.LatLng(36.670187825726096, 127.21386782280288),
                    new kakao.maps.LatLng(36.67065342815291, 127.2189882234346),
                    new kakao.maps.LatLng(36.67495036039772, 127.2193296335889),
                    new kakao.maps.LatLng(36.67805203525274, 127.21714315136957),
                    new kakao.maps.LatLng(36.68163245972237, 127.21596883064667),
                    new kakao.maps.LatLng(36.68411892305261, 127.2160886875361),
                    new kakao.maps.LatLng(36.68761776424895, 127.22052862620346),
                    new kakao.maps.LatLng(36.687913084355856, 127.22556750026546),
                    new kakao.maps.LatLng(36.68558697113713, 127.22839101528264),
                    new kakao.maps.LatLng(36.68316904170122, 127.23326466944049),
                    new kakao.maps.LatLng(36.6850849365462, 127.24139183064621),
                    new kakao.maps.LatLng(36.68666677611546, 127.24376783268286),
                    new kakao.maps.LatLng(36.69086093625048, 127.24729300904006),
                    new kakao.maps.LatLng(36.694037187592585, 127.24882578835921),
                    new kakao.maps.LatLng(36.695067836785036, 127.248024758184),
                    new kakao.maps.LatLng(36.69589104033122, 127.24571110233461),
                    new kakao.maps.LatLng(36.69794625962451, 127.24387208227415),
                    new kakao.maps.LatLng(36.70108564500636, 127.24437012229718),
                    new kakao.maps.LatLng(36.70123513563927, 127.24175213830978),
                    new kakao.maps.LatLng(36.704408310010066, 127.23704755277447),
                    new kakao.maps.LatLng(36.70651220115264, 127.23687194381408),
                    new kakao.maps.LatLng(36.70879885782591, 127.2342561771197),
                    new kakao.maps.LatLng(36.70905030868665, 127.23224098724245),
                    new kakao.maps.LatLng(36.70782000679155, 127.23034365181634),
                    new kakao.maps.LatLng(36.70819527949869, 127.22862402096159),
                    new kakao.maps.LatLng(36.71165936030174, 127.22363741139812),
                    new kakao.maps.LatLng(36.71571947510436, 127.22363020572635),
                    new kakao.maps.LatLng(36.715587658467726, 127.21813991290384),
                    new kakao.maps.LatLng(36.71810718574307, 127.212305371698),
                    new kakao.maps.LatLng(36.7190135911591, 127.20791448646733),
                    new kakao.maps.LatLng(36.71614166766288, 127.20737271946143),
                    new kakao.maps.LatLng(36.71489854958213, 127.2056520803802),
                    new kakao.maps.LatLng(36.71310014967857, 127.20605822684027),
                    new kakao.maps.LatLng(36.71037064487783, 127.20424625625317),
                    new kakao.maps.LatLng(36.71026637897893, 127.2007760951454),
                    new kakao.maps.LatLng(36.70488669482238, 127.19947664098333),
                    new kakao.maps.LatLng(36.70262961531518, 127.19693340019597),
                    new kakao.maps.LatLng(36.70341772206773, 127.1916962261547),
                    new kakao.maps.LatLng(36.702952603095646, 127.18891799285645),
                    new kakao.maps.LatLng(36.70438128618157, 127.18432957250862),
                    new kakao.maps.LatLng(36.70630074866072, 127.1813092460939),
                    new kakao.maps.LatLng(36.70590534146708, 127.17833562111173),
                    new kakao.maps.LatLng(36.70937796123287, 127.17776145371822),
                    new kakao.maps.LatLng(36.71000874247359, 127.17448216690484),
                    new kakao.maps.LatLng(36.70749232690929, 127.16771764971942),
                    new kakao.maps.LatLng(36.7090250291062, 127.16749681722439),
                    new kakao.maps.LatLng(36.71083712305248, 127.16524039643203),
                    new kakao.maps.LatLng(36.710878988548366, 127.16309371139647),
                    new kakao.maps.LatLng(36.707624606587295, 127.15986110322977),
                    new kakao.maps.LatLng(36.707284827494455, 127.15714934892505),
                    new kakao.maps.LatLng(36.708928611583985, 127.15492664748291),
                    new kakao.maps.LatLng(36.708652163782055, 127.15292523813413),
                    new kakao.maps.LatLng(36.70613818656448, 127.15085535632792),
                    new kakao.maps.LatLng(36.69968816795644, 127.15452246370164),
                    new kakao.maps.LatLng(36.69745989608952, 127.1546389574236),
                    new kakao.maps.LatLng(36.69532414472019, 127.15805434176724),
                    new kakao.maps.LatLng(36.69272615426572, 127.16034992036259),
                    new kakao.maps.LatLng(36.690218164018916, 127.16144513665189),
                    new kakao.maps.LatLng(36.68840892246362, 127.15993892242311),
                    new kakao.maps.LatLng(36.68487310761767, 127.16227005312322),
                    new kakao.maps.LatLng(36.678497117499994, 127.16412387195685),
                    new kakao.maps.LatLng(36.67599297740355, 127.16257093279705),
                    new kakao.maps.LatLng(36.6730268926379, 127.15855676788482),
                    new kakao.maps.LatLng(36.67132692617801, 127.1587235591745),
                    new kakao.maps.LatLng(36.66903724392354, 127.15611708314391),
                    new kakao.maps.LatLng(36.664274180735376, 127.1548586380563),
                    new kakao.maps.LatLng(36.662754943897255, 127.15616289260016),
                    new kakao.maps.LatLng(36.661350477355214, 127.15904249764888),
                    new kakao.maps.LatLng(36.656118534535366, 127.160568962981),
                    new kakao.maps.LatLng(36.65244930781408, 127.15428963366752),
                    new kakao.maps.LatLng(36.65053619316314, 127.15443875377265),
                    new kakao.maps.LatLng(36.64521302563645, 127.15314467309885),
                    new kakao.maps.LatLng(36.642680135142, 127.15414435795192),
                    new kakao.maps.LatLng(36.641371216471576, 127.15634324985167),
                    new kakao.maps.LatLng(36.639173972596936, 127.15755994741905),
                    new kakao.maps.LatLng(36.63785023359707, 127.15642723260524),
                    new kakao.maps.LatLng(36.63536292415769, 127.15808231772839),
                    new kakao.maps.LatLng(36.631699350993316, 127.1562893147333),
                    new kakao.maps.LatLng(36.62861637237752, 127.15649015160999),
                    new kakao.maps.LatLng(36.62678811362053, 127.15764292604909),
                    new kakao.maps.LatLng(36.62542546334417, 127.1601765919189),
                    new kakao.maps.LatLng(36.624071601318256, 127.16011004870555),
                    new kakao.maps.LatLng(36.62389020772243, 127.15432163509631),
                    new kakao.maps.LatLng(36.61974907715311, 127.15042999867394),
                    new kakao.maps.LatLng(36.61833322525264, 127.15061975155895),
                    new kakao.maps.LatLng(36.61654403963509, 127.15495252689503),
                    new kakao.maps.LatLng(36.61514594856952, 127.15598532634057),
                    new kakao.maps.LatLng(36.61290586392443, 127.15505080460136),
                    new kakao.maps.LatLng(36.61068136440234, 127.1555733203596),
                    new kakao.maps.LatLng(36.60670242000491, 127.15547843765984),
                    new kakao.maps.LatLng(36.60535593605506, 127.15859883068838),
                    new kakao.maps.LatLng(36.604374965541915, 127.16271773097246),
                    new kakao.maps.LatLng(36.601124405391154, 127.1678351236266),
                    new kakao.maps.LatLng(36.59602946649144, 127.1734910714137),
                    new kakao.maps.LatLng(36.596890765153965, 127.1783907078154),
                    new kakao.maps.LatLng(36.59514454681685, 127.18194750016474),
                    new kakao.maps.LatLng(36.593292779397444, 127.18208740355212),
                    new kakao.maps.LatLng(36.59120240324755, 127.18432221804302),
                    new kakao.maps.LatLng(36.59232388317896, 127.18733636081924),
                    new kakao.maps.LatLng(36.5945585465873, 127.18922807170514)
            ]
        }, {
            name : '전동면',
            path : [
                new kakao.maps.LatLng(36.63350267862867, 127.27947840359585),
                    new kakao.maps.LatLng(36.63980320052106, 127.27565069910085),
                    new kakao.maps.LatLng(36.641866135204765, 127.27700934806741),
                    new kakao.maps.LatLng(36.64069641593414, 127.27951598208199),
                    new kakao.maps.LatLng(36.64229333244855, 127.28277825649643),
                    new kakao.maps.LatLng(36.645142415347294, 127.28161983152161),
                    new kakao.maps.LatLng(36.64999199942552, 127.28440272545781),
                    new kakao.maps.LatLng(36.65014508239219, 127.28589769183436),
                    new kakao.maps.LatLng(36.654196159562105, 127.28680777262433),
                    new kakao.maps.LatLng(36.656747309444555, 127.28889857003142),
                    new kakao.maps.LatLng(36.659321803469396, 127.28916019689792),
                    new kakao.maps.LatLng(36.659834664551994, 127.29293953602324),
                    new kakao.maps.LatLng(36.659569549210595, 127.29592766840562),
                    new kakao.maps.LatLng(36.660781871068046, 127.29675257219029),
                    new kakao.maps.LatLng(36.6621895114016, 127.29974584969244),
                    new kakao.maps.LatLng(36.66574599130386, 127.3023192804214),
                    new kakao.maps.LatLng(36.668087010441305, 127.30485202501674),
                    new kakao.maps.LatLng(36.67224812986162, 127.30609210771244),
                    new kakao.maps.LatLng(36.674237133224274, 127.30520559530387),
                    new kakao.maps.LatLng(36.6783155507304, 127.30753029176505),
                    new kakao.maps.LatLng(36.68202200329395, 127.30762542617462),
                    new kakao.maps.LatLng(36.685736041083395, 127.30182934145384),
                    new kakao.maps.LatLng(36.68576974199467, 127.29666170162642),
                    new kakao.maps.LatLng(36.68662081856025, 127.29555254876574),
                    new kakao.maps.LatLng(36.68708923396795, 127.29213730996162),
                    new kakao.maps.LatLng(36.6881905011143, 127.28953784495326),
                    new kakao.maps.LatLng(36.69042179969528, 127.28695217204258),
                    new kakao.maps.LatLng(36.69040784059234, 127.28135695820723),
                    new kakao.maps.LatLng(36.69213421095358, 127.2799710052686),
                    new kakao.maps.LatLng(36.69134874709783, 127.27770898645826),
                    new kakao.maps.LatLng(36.69526540014159, 127.2734771352192),
                    new kakao.maps.LatLng(36.69220381801746, 127.26522988372962),
                    new kakao.maps.LatLng(36.692627417750494, 127.26173986328257),
                    new kakao.maps.LatLng(36.6922195136519, 127.25791589976339),
                    new kakao.maps.LatLng(36.69372303330058, 127.2570981061838),
                    new kakao.maps.LatLng(36.694956095969786, 127.25409701412275),
                    new kakao.maps.LatLng(36.69701248671383, 127.25121774079928),
                    new kakao.maps.LatLng(36.695067836785036, 127.248024758184),
                    new kakao.maps.LatLng(36.694037187592585, 127.24882578835921),
                    new kakao.maps.LatLng(36.69086093625048, 127.24729300904006),
                    new kakao.maps.LatLng(36.68666677611546, 127.24376783268286),
                    new kakao.maps.LatLng(36.6850849365462, 127.24139183064621),
                    new kakao.maps.LatLng(36.68316904170122, 127.23326466944049),
                    new kakao.maps.LatLng(36.68558697113713, 127.22839101528264),
                    new kakao.maps.LatLng(36.687913084355856, 127.22556750026546),
                    new kakao.maps.LatLng(36.68761776424895, 127.22052862620346),
                    new kakao.maps.LatLng(36.68411892305261, 127.2160886875361),
                    new kakao.maps.LatLng(36.68163245972237, 127.21596883064667),
                    new kakao.maps.LatLng(36.67805203525274, 127.21714315136957),
                    new kakao.maps.LatLng(36.67495036039772, 127.2193296335889),
                    new kakao.maps.LatLng(36.67065342815291, 127.2189882234346),
                    new kakao.maps.LatLng(36.670187825726096, 127.21386782280288),
                    new kakao.maps.LatLng(36.672279985595466, 127.21110875259285),
                    new kakao.maps.LatLng(36.67429404255462, 127.20994948239198),
                    new kakao.maps.LatLng(36.67515151768723, 127.20830474437278),
                    new kakao.maps.LatLng(36.67164276882896, 127.20800065316818),
                    new kakao.maps.LatLng(36.66959990598313, 127.20660365256357),
                    new kakao.maps.LatLng(36.6655728177024, 127.20867398990161),
                    new kakao.maps.LatLng(36.66188969585545, 127.20627561426043),
                    new kakao.maps.LatLng(36.65978512346935, 127.20139094257242),
                    new kakao.maps.LatLng(36.65649869507575, 127.19999593690366),
                    new kakao.maps.LatLng(36.64811011074463, 127.20453823193512),
                    new kakao.maps.LatLng(36.64331490645131, 127.20175891026916),
                    new kakao.maps.LatLng(36.63991924016809, 127.20400569059052),
                    new kakao.maps.LatLng(36.636331554414014, 127.20415538990356),
                    new kakao.maps.LatLng(36.63449337572424, 127.20319127007515),
                    new kakao.maps.LatLng(36.630653622665456, 127.20429443516998),
                    new kakao.maps.LatLng(36.62932982913421, 127.20392919910874),
                    new kakao.maps.LatLng(36.62706406614572, 127.20585110759596),
                    new kakao.maps.LatLng(36.62603794866049, 127.20809941412632),
                    new kakao.maps.LatLng(36.62236826406699, 127.21014762886135),
                    new kakao.maps.LatLng(36.61986738370363, 127.2094923138521),
                    new kakao.maps.LatLng(36.620515236623575, 127.21069135653705),
                    new kakao.maps.LatLng(36.619667402305545, 127.217944628905),
                    new kakao.maps.LatLng(36.6199320614345, 127.22145306414303),
                    new kakao.maps.LatLng(36.61811461041264, 127.22236956958969),
                    new kakao.maps.LatLng(36.615651320307514, 127.22570731062721),
                    new kakao.maps.LatLng(36.61751997608235, 127.22813775156699),
                    new kakao.maps.LatLng(36.61902215095362, 127.23566780833401),
                    new kakao.maps.LatLng(36.61863462271105, 127.24039385778374),
                    new kakao.maps.LatLng(36.617893174617436, 127.24130300086476),
                    new kakao.maps.LatLng(36.619610072462024, 127.24459166144595),
                    new kakao.maps.LatLng(36.61828323160848, 127.24577738662377),
                    new kakao.maps.LatLng(36.618297839425026, 127.24865788143616),
                    new kakao.maps.LatLng(36.61991501631771, 127.25058221471409),
                    new kakao.maps.LatLng(36.61854600970391, 127.25909360125777),
                    new kakao.maps.LatLng(36.61917238837439, 127.26222493422323),
                    new kakao.maps.LatLng(36.62187508815668, 127.26318092027125),
                    new kakao.maps.LatLng(36.62045309196954, 127.26801086428071),
                    new kakao.maps.LatLng(36.622822604893955, 127.27364700957148),
                    new kakao.maps.LatLng(36.624520636949136, 127.27401177256226),
                    new kakao.maps.LatLng(36.628821816419425, 127.2790525207296),
                    new kakao.maps.LatLng(36.63350267862867, 127.27947840359585)
            ]
        }, {
            name : '소정면',
            path: [
                new kakao.maps.LatLng(36.71917587571916, 127.20792751220743),
                    new kakao.maps.LatLng(36.7208761278812, 127.20480791805522),
                    new kakao.maps.LatLng(36.72373855392578, 127.20366859112049),
                    new kakao.maps.LatLng(36.72507211319302, 127.20422094950024),
                    new kakao.maps.LatLng(36.72819286402725, 127.19728340391838),
                    new kakao.maps.LatLng(36.728640910436674, 127.1925852086022),
                    new kakao.maps.LatLng(36.72777693529083, 127.18942357121702),
                    new kakao.maps.LatLng(36.72798695846845, 127.18729971143078),
                    new kakao.maps.LatLng(36.730041547267305, 127.1843611002198),
                    new kakao.maps.LatLng(36.72855509842568, 127.17699547223145),
                    new kakao.maps.LatLng(36.728689619724186, 127.1735806788231),
                    new kakao.maps.LatLng(36.73222566261605, 127.17121920700247),
                    new kakao.maps.LatLng(36.73382187689024, 127.16469453433949),
                    new kakao.maps.LatLng(36.73284394725196, 127.15964389226207),
                    new kakao.maps.LatLng(36.72971548761106, 127.15764617486981),
                    new kakao.maps.LatLng(36.7274560973438, 127.15752563592584),
                    new kakao.maps.LatLng(36.72748190026078, 127.15544647717435),
                    new kakao.maps.LatLng(36.72895211118722, 127.15193372590673),
                    new kakao.maps.LatLng(36.72680758543351, 127.15205128271668),
                    new kakao.maps.LatLng(36.72588618490177, 127.1498118379124),
                    new kakao.maps.LatLng(36.721844018526824, 127.14761849820674),
                    new kakao.maps.LatLng(36.720560968059914, 127.14882775956617),
                    new kakao.maps.LatLng(36.71902841539776, 127.14591929982649),
                    new kakao.maps.LatLng(36.71752028823431, 127.14511370622796),
                    new kakao.maps.LatLng(36.71684660742239, 127.14093413082828),
                    new kakao.maps.LatLng(36.71301895768407, 127.13566974287873),
                    new kakao.maps.LatLng(36.71327659934183, 127.1344383102),
                    new kakao.maps.LatLng(36.71027079581815, 127.13164525482473),
                    new kakao.maps.LatLng(36.71022461464087, 127.12955855114195),
                    new kakao.maps.LatLng(36.70797180806679, 127.1279902418593),
                    new kakao.maps.LatLng(36.706159575329536, 127.13203071759473),
                    new kakao.maps.LatLng(36.70679198793575, 127.13437853515396),
                    new kakao.maps.LatLng(36.70503957981787, 127.13614355504119),
                    new kakao.maps.LatLng(36.70294094519934, 127.13603043513523),
                    new kakao.maps.LatLng(36.70135586336075, 127.13797224915862),
                    new kakao.maps.LatLng(36.69974287694222, 127.13819897171518),
                    new kakao.maps.LatLng(36.696885152695344, 127.14090333281435),
                    new kakao.maps.LatLng(36.69165662156763, 127.14286707199841),
                    new kakao.maps.LatLng(36.68998383053082, 127.14174893501219),
                    new kakao.maps.LatLng(36.68899772593497, 127.14382776950627),
                    new kakao.maps.LatLng(36.69094430152703, 127.1490259737394),
                    new kakao.maps.LatLng(36.68945429046552, 127.15088820776968),
                    new kakao.maps.LatLng(36.690981677559385, 127.15334319029827),
                    new kakao.maps.LatLng(36.69076424162104, 127.15622345467216),
                    new kakao.maps.LatLng(36.69565876976362, 127.15694311073763),
                    new kakao.maps.LatLng(36.69746036694293, 127.15463872285848),
                    new kakao.maps.LatLng(36.69968863795083, 127.15452222832387),
                    new kakao.maps.LatLng(36.706138656290726, 127.1508551236206),
                    new kakao.maps.LatLng(36.708652632457294, 127.1529250043584),
                    new kakao.maps.LatLng(36.70892908025016, 127.15492641288827),
                    new kakao.maps.LatLng(36.707285296846166, 127.15714911317541),
                    new kakao.maps.LatLng(36.707625076341984, 127.15986086833783),
                    new kakao.maps.LatLng(36.71087945710013, 127.16309347607307),
                    new kakao.maps.LatLng(36.710837592181676, 127.16524016053309),
                    new kakao.maps.LatLng(36.7090254968727, 127.16749658155702),
                    new kakao.maps.LatLng(36.70749279494215, 127.16771741473411),
                    new kakao.maps.LatLng(36.7100092103482, 127.17448193168765),
                    new kakao.maps.LatLng(36.709378429683014, 127.17776121784681),
                    new kakao.maps.LatLng(36.70590581062247, 127.17833538487636),
                    new kakao.maps.LatLng(36.70630121737353, 127.18130900935338),
                    new kakao.maps.LatLng(36.70438175547662, 127.18432933574219),
                    new kakao.maps.LatLng(36.702953073420915, 127.18891775504554),
                    new kakao.maps.LatLng(36.703418190931394, 127.19169598826707),
                    new kakao.maps.LatLng(36.70263008415004, 127.19693316179158),
                    new kakao.maps.LatLng(36.704887164033096, 127.19947640311723),
                    new kakao.maps.LatLng(36.710266846734925, 127.2007758558973),
                    new kakao.maps.LatLng(36.71037111349266, 127.20424601695798),
                    new kakao.maps.LatLng(36.71310061727206, 127.20605798719947),
                    new kakao.maps.LatLng(36.714899017563425, 127.20565184190455),
                    new kakao.maps.LatLng(36.71614213581979, 127.20737248103067),
                    new kakao.maps.LatLng(36.71917587571916, 127.20792751220743)
            ]
        }, {
            name : '반곡동',
            path: [
                new kakao.maps.LatLng(36.480494593447176,127.31814832798302),
                new kakao.maps.LatLng(36.485201036252654,127.31645984724516),
                new kakao.maps.LatLng(36.4873843235595,127.31935826595694),
                new kakao.maps.LatLng(36.487403758459905,127.31937012754253),
                new kakao.maps.LatLng(36.487915779688464,127.31976296719489),
                new kakao.maps.LatLng(36.48792235981281,127.31979631583107),
                new kakao.maps.LatLng(36.490640496339765,127.31924122380512),
                new kakao.maps.LatLng(36.493920150488634,127.32038884265307),
                new kakao.maps.LatLng(36.497675414320575,127.3207118131945),
                new kakao.maps.LatLng(36.50089974416972,127.31816888237739),
                new kakao.maps.LatLng(36.503055735663466,127.31403658655644),
                new kakao.maps.LatLng(36.50304741358858,127.31111029953047),
                new kakao.maps.LatLng(36.50010255169078,127.30642912017105),
                new kakao.maps.LatLng(36.495179395209995,127.30132069139574),
                new kakao.maps.LatLng(36.49200619351214,127.29897526825155),
                new kakao.maps.LatLng(36.48844985814939,127.30479592976813),
                new kakao.maps.LatLng(36.484741742474135,127.30681650356998),
                new kakao.maps.LatLng(36.47977363163681,127.30832808675622),
                new kakao.maps.LatLng(36.47978257075635,127.30865166543342),
                new kakao.maps.LatLng(36.479924868129224,127.31293114392741),
                new kakao.maps.LatLng(36.480494593447176,127.31814832798302)
            ]
        }
    ];
    
    
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(36.570000, 127.2500000), // 지도의 중심좌표
            draggable: false,
            level: 9 // 지도의 확대 레벨
            
        };
    
    var map = new kakao.maps.Map(mapContainer, mapOption),
        customOverlay = new kakao.maps.CustomOverlay({}),
        infowindow = new kakao.maps.InfoWindow({removable: true});
    
    // 지도에 영역데이터를 폴리곤으로 표시합니다 
    for (var i = 0, len = areas.length; i < len; i++) {
        displayArea(areas[i]);
    }
    
    // 다각형을 생상하고 이벤트를 등록하는 함수입니다
    function displayArea(area) {
    
        // 다각형을 생성합니다 
        var polygon = new kakao.maps.Polygon({
            map: map, // 다각형을 표시할 지도 객체
            path: area.path,
            strokeWeight: 2,
            strokeColor: '#004c80',
            strokeOpacity: 0.8,
            fillColor: '#fff',
            fillOpacity: 0.7 
        });
    
        // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다 
        // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
        kakao.maps.event.addListener(polygon, 'mouseover', function(mouseEvent) {
            polygon.setOptions({fillColor: '#09f'});
        
            customOverlay.setContent('<div class="area">' + area.name + '</div>');

    
            customOverlay.setPosition(mouseEvent.latLng); 
            customOverlay.setMap(map);
    
        });
    
        // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다 
        kakao.maps.event.addListener(polygon, 'mousemove', function(mouseEvent) {
    
            customOverlay.setPosition(mouseEvent.latLng); 
        });
    
        // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
        // 커스텀 오버레이를 지도에서 제거합니다 
        kakao.maps.event.addListener(polygon, 'mouseout', function() {
            polygon.setOptions({fillColor: '#fff'});
            customOverlay.setMap(null);
        }); 
    
    // 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다 
         kakao.maps.event.addListener(polygon, 'click', function(mouseEvent) {
            console.log("클릭 이벤트 발생", area.name)
             var content = '<div class="info">' + 
                         '   <div class="title">' + area.name + '</div>' +
                         '   <div class="size">총 면적 : 약 ' + Math.floor(polygon.getArea()) + ' m<sup>2</sup></div>' +
                         '</div>';
            
            infowindow.setContent(content); 
            infowindow.setPosition(mouseEvent.latLng); 
            infowindow.setMap(map);
            document
                .getElementById(area.name)
                .scrollIntoView({ behavior: "smooth" });
            // 1. checkbox element를 찾습니다.
            const checkbox = document.getElementById('icon');
            // 2. checked 속성을 체크합니다.
            checkbox.checked = true;    
            doDisplayForJS();       
         });
    }
    
    window.addEventListener('DOMContentLoaded', event => {
    
        // Activate Bootstrap scrollspy on the main nav element
        const sideNav = document.body.querySelector('#sideNav');
        if (sideNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#sideNav',
                offset: 74,
            });
        };
    
        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    
    });
    //햄버거로 열고닫을때 열고닫아주기
    function doDisplay(){
        var con = document.getElementById("subMenu");
        if(con.style.display=='none'){
            con.style.display='block';
        }else {
            con.style.display='none';
        }
    }
    //js 내에서 사용하는 지도폴리곤 클릭 시 열어주기만 하는 함수
    function doDisplayForJS(){
        var con = document.getElementById("subMenu");
        if(con.style.display=='none'){
            con.style.display='block';
        }else {
            
        }
    }
    // 스크립트 내에서 다른 네비게이션을 눌렀을 때 닫아주는 함수
    function displayNone(){
        var con = document.getElementById("subMenu");
        if(con.style.display=='none'){
            
        }else {
            con.style.display='none';
            // 1. checkbox element를 찾습니다.
            const checkbox = document.getElementById('icon');
            // 2. checked 속성을 체크합니다.
            checkbox.checked = false; 
        }
    }

    // 라디오버튼 번호에 따라 폴리움 map_xxx.html 바꿔주는 함수, Why부분
    function mapChanger(){
        var tmpMap = document.getElementById("preMap");
        const tmpRadioButton = document.getElementsByName('chk_info');
        
        tmpRadioButton.forEach((node) => {
            if(node.checked){
                if(node.value=="human"){
                    tmpMap.src="./foliumMap/11.html";
                }else if(node.value=="build"){
                    tmpMap.src="./foliumMap/22.html";
                }else if(node.value=="EV"){
                    tmpMap.src="./foliumMap/map_EV.html";
                }
            }
        });
    }
    
    // 라디오버튼 번호에 따라 폴리움 map_xxx.html 바꿔주는 함수, project 부분
    function mapChangerP(){
        var tmpMap1 = document.getElementById("preMap1");
        const tmpRadioButton2 = document.getElementsByName('chk_info_project');
        
        tmpRadioButton2.forEach((node) => {
            if(node.checked){
                if(node.value=="1"){
                    tmpMap1.src="./foliumMap/3.html";
                }else if(node.value=="2"){
                    tmpMap1.src="./foliumMap/1.html";
                }else if(node.value=="3"){
                    tmpMap1.src="./foliumMap/2.html";
                }else if(node.value=="4"){
                    tmpMap1.src="./foliumMap/4.html";
                }else if(node.value=="5"){
                    tmpMap1.src="./foliumMap/5.html";
                }
            }
        });
    }


    

    function dataChanger(x){
        var tmpStr1 = document.getElementById("dataCard01");
        var tmpStr2 = document.getElementById("dataCard02");
        var tmpStr3 = document.getElementById("dataCard03");
        var tmpicon = document.getElementById("cardIcon");
        
        


        if(x==0){
            
            tmpicon.innerText = "directions_car";
            tmpStr1.innerText = cardInnerTxt1;
            tmpStr2.innerText = cardInnerTxt11;
            tmpStr3.innerText = cardInnerTxt12;
            
        }
        else if(x==1){
            tmpicon.innerText = "family_restroom";
            tmpStr1.innerText = cardInnerTxt2;
            tmpStr2.innerText = cardInnerTxt21;
            tmpStr3.innerText = cardInnerTxt22;
        }
        else if(x==2){
            tmpicon.innerText = "view_comfy";
            tmpStr1.innerText = cardInnerTxt3;
            tmpStr2.innerText = cardInnerTxt31;
            tmpStr3.innerText = cardInnerTxt32;
        }
        else if(x==3){
            tmpicon.innerText = "business";
            tmpStr1.innerText = cardInnerTxt4;
            tmpStr2.innerText = cardInnerTxt41;
            tmpStr3.innerText = cardInnerTxt42;
        }
        else if(x==4){
            tmpicon.innerText = "battery_charging_full";
            tmpStr1.innerText = cardInnerTxt5;
            tmpStr2.innerText = cardInnerTxt51;
            tmpStr3.innerText = cardInnerTxt52;
        }
        else if(x==5){
            tmpicon.innerText = "view_comfy";
            tmpStr1.innerText = cardInnerTxt6;
            tmpStr2.innerText = cardInnerTxt61;
            tmpStr3.innerText = cardInnerTxt62;
        }
        else if(x==6){
            tmpicon.innerText = "more_horiz";
            tmpStr1.innerText = cardInnerTxt7;
            tmpStr2.innerText = cardInnerTxt71;
            tmpStr3.innerText = cardInnerTxt72;
        }

    }
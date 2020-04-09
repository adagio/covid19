exports.covidTopRegionalTrends = (req, res) => {
    let topRegionalTrends = {
        // labels: ['20-03', '21-03', '22-03', '23-03', '24-03', '25-03', '26-03'],
        // labels: ['21-03', '22-03', '23-03', '24-03', '25-03', '26-03', '27-03'],
        // labels: ['22-03', '23-03', '24-03', '25-03', '26-03', '27-03', '28-03'],
        // labels: ['23-03', '24-03', '25-03', '26-03', '27-03', '28-03', '29-03'],
        // labels: ['24-03', '25-03', '26-03', '27-03', '28-03', '29-03', '30-03'],
        // labels: ['25-03', '26-03', '27-03', '28-03', '29-03', '30-03', '31-03'],
        // labels: ['26-03', '27-03', '28-03', '29-03', '30-03', '31-03','01-04'],
        // labels: ['27-03', '28-03', '29-03', '30-03', '31-03','01-04','02-04'],
        // labels: ['28-03', '29-03', '30-03', '31-03','01-04','02-04','03-04'],
        // labels: ['29-03', '30-03', '31-03','01-04','02-04','03-04','04-04'],
        // labels: ['30-03', '31-03','01-04','02-04','03-04','04-04','05-04'],
        // labels: ['31-03','01-04','02-04','03-04','04-04','05-04','06-04'],
        // labels: ['01-04','02-04','03-04','04-04','05-04','06-04','07-04'],
        labels: ['02-04','03-04','04-04','05-04','06-04','07-04','08-04'],
        datasets: [{
            // data: [263,318,363,395,416,480,580],
            // data: [318,363,395,416,480,580, 635],
            // data: [363,395,416,480,580,635,671],
            // data: [395,416,480,580,635,671,852],
            // data: [416,480,580,635,671,852,950],
            // data: [480,580,635,671,852,950,1065],
            // data: [580,635,671,852,950,1065,1323],
            // data: [635,671,852,950,1065,1323,1414],
            // data: [671,852,950,1065,1323,1414,1595],
            // data: [852,950,1065,1323,1414,1595,1746],
            // data: [950,1065,1323,1414,1595,1746,2281],
            // data: [1065,1323,1414,1595,1746,2281,2561],
            // data: [1323,1414,1595,1746,2281,2561,2954],
            // data: [1414,1595,1746,2281,2561,2954,4340],
            data: [1595,1746,2281,2561,2954,4340,5256],
            label: 'Perú',
            borderColor: '#866969',
            fill: false
        }, {
            // data: [220,241,278,307,322,369,453],
            // data: [241,278,307,322,369,453, 494],
            // data: [278,307,322,369,453,494,518],
            // data: [307,322,369,453,494,518,639],
            // data: [322,369,453,494,518,639,718],
            // data: [369,453,494,518,639,718,799],
            // data: [453,494,518,639,718,799,990],
            // data: [494,518,639,718,799,990,1059],
            // data: [518,639,718,799,990,1059,1179],
            // data: [639,718,799,990,1059,1179,1257],
            // data: [718,799,990,1059,1179,1257,1639],
            // data: [799,990,1059,1179,1257,1639,1837],
            // data: [990,1059,1179,1257,1639,1837,2100],
            // data: [1059,1179,1257,1639,1837,2100,3016],
            data: [1179,1257,1639,1837,2100,3016,3704],
            label: 'Lima',
            borderColor: '#c45850',
            fill: false
        }, {
            // data: [5,6,6,8,8,10,15], Call
            // data: [6,6,8,8,10,15,17], Call
            // data: [6,8,8,10,15,17,18], Call
            // data: [8,8,10,15,17,18,29], Call
            // data: [8,10,15,17,18,29,24], Call
            // data: [9,10,15,15,15,21,26], Aqp
            // data: [15,17,18,29,24,25,37],
            // data: [17,18,29,24,25,37,40],
            // data: [18,29,24,25,37,40,59],
            // data: [29,24,25,37,40,59,64],
            // data: [24,25,37,40,59,64,89],
            // data: [25,37,40,59,64,89,109],
            // data: [37,40,59,64,89,109,161],
            // data: [40,59,64,89,109,161,320],
            data: [59,64,89,109,161,320,413],
            label: 'Callao',
            borderColor: '#3e95cd',
            fill: false
        }, {
            // data: [12,14,16,16,16,18,18],
            // data: [14,16,16,16,18,18,23],
            // data: [16,16,16,18,18,23,27],
            // data: [16,16,18,18,23,27,52],
            // data: [16,18,18,23,27,52,53],
            // data: [18,18,23,27,52,53,58],
            // data: [18,23,27,52,53,58,66],
            // data: [23,27,52,53,58,66,72],
            // data: [27,52,53,58,66,72,84],
            // data: [52,53,58,66,72,84,106],
            // data: [53,58,66,72,84,106,143],
            // data: [58,66,72,84,106,143,171],
            // data: [66,72,84,106,143,171,206],
            // data: [72,84,106,143,171,206,290],
            data: [84,106,143,171,206,290,315],
            label: 'Loreto',
            borderColor: '#3cba9f',
            fill: false
        }, {
            // data: [2,18,19,19,19,19,20], Piu
            // data: [18,19,19,19,19,20, 20], Piu
            // data: [19,19,19,19,20,20,20], Piu
            // data: [19,19,19,20,20,20,21], Piu
            // data: [6,10,10,10,11,17,25], Cus
            // data: [10,10,10,11,17,25,26], Cus
            // data: [10,10,11,17,25,26,34], Cus
            // data: [10,11,17,25,26,38,38], Cus
            // data: [11,17,25,26,38,38,44], Cus 03-04
            // data: [22,22,30,34,37,35,55], 
            // data: [22,30,34,37,35,55,100], 
            // data: [30,34,37,35,55,100,100], 
            // data: [34,37,35,55,100,100,108], 
            // data: [37,35,55,100,100,108,246], 
            data: [35,55,100,100,108,246,302], 
            label: 'Lambayeque',
            borderColor: '#8e5ea2',
            fill: false
        }, {
            // data: [2,18,19,19,19,19,20], Piu
            // data: [18,19,19,19,19,20, 20], Piu
            // data: [19,19,19,19,20,20,20], Piu
            // data: [19,19,19,20,20,20,21], Piu
            // data: [6,10,10,10,11,17,25], Cus
            // data: [10,10,10,11,17,25,26], Cus
            // data: [10,10,11,17,25,26,34], Cus
            // data: [10,11,17,25,26,38,38], Cus
            // data: [11,17,25,26,38,38,44], Cus 03-04
            // data: [22,22,30,34,37,35,55], Lamb 04-04
            // data: [10,13,15,19,32,34,44], LL 03-04 
            // data: [13,15,19,32,34,44,50], LL 04-04
            // data: [25,26,38,38,44,48,52], CUS 05-04
            // data: [26,30,30,30,37,51,60], 
            // data: [30,30,30,37,51,60,66], AQP 07-04
            // data: [32,34,44,50,56,58,82],             
            data: [34,44,50,56,58,82,96],             
            label: 'La Libertad',
            borderColor: '#e8c3b9',
            fill: false
        }
        ]
    };
    let origin_allowed = process.env.ORIGIN_ALLOWED || '*';

    res.set('Access-Control-Allow-Origin', origin_allowed);
    res.send(topRegionalTrends);
}
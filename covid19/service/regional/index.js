exports.covidRegionalTrends = (req, res) => {
let regionalTrends = {
        // labels: ['29-03','30-03', '31-03','01-04','02-04','03-04','04-04'],
        // labels: ['30-03', '31-03','01-04','02-04','03-04','04-04','05-04'],
        // labels: ['31-03','01-04','02-04','03-04','04-04','05-04','06-04'],
        // labels: ['01-04','02-04','03-04','04-04','05-04','06-04','07-04'],
        // labels: ['02-04','03-04','04-04','05-04','06-04','07-04','08-04'],
        labels: ['03-04','04-04','05-04','06-04','07-04','08-04','09-04'],
        datasets: [{
            // data: [950,1065,1323,1414,1595,1746,2281],
            // data: [1065,1323,1414,1595,1746,2281,2561],
            // data: [1323,1414,1595,1746,2281,2561,2954],
            // data: [1414,1595,1746,2281,2561,2954,4340],
            // data: [1595,1746,2281,2561,2954,4340,5256],
            data: [1746,2281,2561,2954,4340,5256,5897],
            label: 'Perú',
            borderColor: '#866969',
            fill: false
        }, {
            // data: [718,799,990,1059,1179,1257,1639],
            // data: [799,990,1059,1179,1257,1639,1837],
            // data: [990,1059,1179,1257,1639,1837,2100],
            // data: [1059,1179,1257,1639,1837,2100,3016],
            // data: [1179,1257,1639,1837,2100,3016,3704],
            data: [1257,1639,1837,2100,3016,3704,4210],
            label: 'Lima',
            borderColor: '#c45850',
            fill: false
        }, {
            // data: [53,58,66,72,84,106,143],
            // data: [58,66,72,84,106,143,171],
            // data: [66,72,84,106,143,171,206],
            // data: [72,84,106,143,171,206,290],
            // data: [84,106,143,171,206,290,315],
            data: [106,143,171,206,290,315,315],
            label: 'Loreto',
            borderColor: '#3cba9f',
            fill: false
        }, {
            // data: [22,30,34,37,35,55,100], 
            // data: [30,34,37,35,55,100,100], 
            // data: [34,37,35,55,100,100,108], 
            // data: [37,35,55,100,100,108,246], 
            // data: [35,55,100,100,108,246,302], 
            // data: [55,100,100,108,246,302,302], 
            data: [100,100,108,246,302,302,302], 
            label: 'Lambayeque',
            borderColor: '#8e5ea2',
            fill: false
        }, {
            // data: [24,25,37,40,59,64,89],
            // data: [25,37,40,59,64,89,109],
            // data: [37,40,59,64,89,109,161],
            // data: [40,59,64,89,109,161,320],
            // data: [59,64,89,109,161,320,413],
            data: [64,89,109,161,320,413,465],
            label: 'Callao',
            borderColor: '#3e95cd',
            fill: false
        }, {
            // data: [25,26,38,38,44,48,52], 
            // data: [26,38,38,44,48,52,54], 
            // data: [38,38,44,48,52,54,54], 
            // data: [38,44,48,52,54,54,54], 
            // data: [44,48,52,54,54,54,55], 
            data: [48,52,54,54,54,55,57], 
            label: 'Cusco',
            borderColor: '#e8c3b9',
            fill: false
        }, {
            // data: [21,26,30,30,30,37,51], 
            // data: [26,30,30,30,37,51,60], 
            // data: [30,30,30,37,51,60,66], 
            // data: [30,30,37,51,60,66,74], 
            // data: [30,37,51,60,66,74,77], 
            data: [37,51,60,66,74,77,83], 
            label: 'Arequipa',
            borderColor: '#c45855',
            fill: false
        }, {
            // data: [15,19,32,34,44,50,50],
            // data: [19,32,34,44,50,50,56],
            // data: [32,34,44,50,50,56,58],
            // data: [34,44,50,50,56,58,82],
            // data: [44,50,50,56,58,82,96],
            data: [50,50,56,58,82,96,101],
            label: 'La Libertad',
            borderColor: '#3cba85',
            fill: false
        }, {
            // data: [21,21,26,27,27,27,29],
            // data: [21,26,27,27,27,29,30],
            // data: [26,27,27,27,29,30,35],
            // data: [27,27,27,29,30,35,41],
            // data: [27,27,29,30,35,41,53],
            data: [27,29,30,35,41,53,68],
            label: 'Piura',
            borderColor: '#8e5e95',
            fill: false
        }, {
            // data: [8,10,13,15,16,20,26],
            // data: [10,13,15,16,20,26,26],
            // data: [13,15,16,20,26,26,27],
            // data: [15,16,20,26,26,27,27],
            // data: [16,20,26,26,27,27,27],
            data: [20,26,26,27,27,27,27],
            label: 'Tumbes',
            borderColor: '#3e95b5',
            fill: false
        }, {
            // data: [13,17,17,17,19,25,25],
            // data: [17,17,17,19,25,25,28],
            // data: [17,17,19,25,25,28,28],
            // data: [17,19,25,25,28,28,42],
            // data: [19,25,25,28,28,42,42],
            data: [25,25,28,28,42,42,56],
            label: 'Junín',
            borderColor: '#e8c3b0',
            fill: false
        }, {
            // data: [11,11,15,15,15,18,23],
            // data: [11,15,15,15,18,23,27],
            // data: [15,15,15,18,23,27,36],
            // data: [15,15,18,23,27,36,50],
            data: [15,18,23,27,36,50,57],
            label: 'Áncash',
            borderColor: '#c45850',
            fill: false
        }, {
            // data: [5,5,8,8,8,9,14],
            // data: [5,8,8,8,9,14,18],
            // data: [8,8,8,9,14,18,24],
            // data: [8,8,9,14,18,24,28],
            // data: [8,9,14,18,24,28,34],
            data: [9,14,18,24,28,34,37],
            label: 'Ica',
            borderColor: '#8e5e90',
            fill: false
        }, {
            // data: [1,2,3,3,3,3,9],
            // data: [2,3,3,3,3,9,9],
            // data: [3,3,3,3,9,9,9],
            // data: [3,3,3,9,9,9,9],
            // data: [3,3,9,9,9,9,9],
            data: [3,9,9,9,9,9,9],
            label: 'Tacna',
            borderColor: '#3e95c0',
            fill: false
        }, {
            // data: [5,6,6,6,6,8,8],
            // data: [6,6,6,6,8,8,8],
            // data: [6,6,6,8,8,8,8],
            // data: [6,6,8,8,8,8,11],
            // data: [6,8,8,8,8,11,15],
            data: [8,8,8,8,11,15,18],
            label: 'San Martín',
            borderColor: '#e8c3a5',
            fill: false
        }, {
            // data: [1,1,2,3,4,6,6],
            // data: [1,2,3,4,6,6,6],
            // data: [2,3,4,6,6,6,6],
            // data: [3,4,6,6,6,6,10],
            // data: [4,6,6,6,6,10,11],
            data: [6,6,6,6,10,11,11],
            label: 'Cajamarca',
            borderColor: '#c45845',
            fill: false
        }, {
            // data: [4,6,6,6,6,6,6],
            // data: [6,6,6,6,6,6,6],
            // data: [6,6,6,6,6,6,6],
            // data: [6,6,6,6,6,6,7],
            data: [6,6,6,6,6,7,9],
            label: 'Huánuco',
            borderColor: '#8e5e85',
            fill: false
        }, {
            // data: [1,1,1,1,1,1,3], 
            // data: [1,1,1,1,1,3,5], 
            // data: [1,1,1,1,3,5,5], 
            // data: [1,1,1,3,5,5,5], 
            // data: [1,1,3,5,5,5,7], 
            data: [1,3,5,5,5,7,9], 
            label: 'Ayacucho',
            borderColor: '#3e95b5',
            fill: false
        }, {
            // data: [1,1,1,1,1,1,3],
            // data: [1,1,1,1,1,3,5],
            // data: [1,1,1,1,3,5,5],
            // data: [1,1,1,3,5,5,5],
            // data: [1,1,3,5,5,5,5],
            data: [1,3,5,5,5,5,8],
            label: 'Pasco',
            borderColor: '#e8c395',
            fill: false
        }, {
            // data: [1,1,1,1,2,2,2],
            // data: [1,1,1,2,2,2,2],
            // data: [1,1,2,2,2,2,2],
            // data: [1,2,2,2,2,2,2],
            // data: [2,2,2,2,2,2,3],
            data: [2,2,2,2,2,3,3],
            label: 'Madre de Dios',
            borderColor: '#c45840',
            fill: false
        }, {
            // data: [0,0,0,0,1,1,1],
            // data: [0,0,0,1,1,1,1],
            // data: [0,0,1,1,1,1,1],
            // data: [0,1,1,1,1,1,1],
            // data: [1,1,1,1,1,1,1],
            data: [1,1,1,1,1,1,3],
            label: 'Apurimac',
            borderColor: '#8e5e80',
            fill: false
        }, {
            // data: [0,0,1,1,1,1,1],
            // data: [0,1,1,1,1,1,2],
            // data: [1,1,1,1,1,2,7],
            // data: [1,1,1,1,2,7,7],
            // data: [1,1,1,2,7,7,7],
            data: [1,1,2,7,7,7,7],
            label: 'Huancavelica',
            borderColor: '#3e95b0',
            fill: false
        }, {
            // data: [0,0,0,0,0,0,1],
            // data: [0,0,0,0,0,1,1],
            // data: [0,0,0,0,1,1,1],
            // data: [0,0,0,1,1,1,3],
            // data: [0,0,1,1,1,3,3],
            data: [0,1,1,1,3,3,3],
            label: 'Moquegua',
            borderColor: '#e8c390',
            fill: false
        }, {
            // data: [0,0,0,0,0,0,1],
            // data: [0,0,0,0,0,1,1],
            // data: [0,0,0,0,1,1,1],
            data: [0,0,0,1,1,1,1],
            label: 'Puno',
            borderColor: '#e8c390',
            fill: false
        }, {
            // data: [0,0,0,0,0,0,1],
            // data: [0,0,0,0,0,1,10],
            data: [0,0,0,0,1,10,16],
            label: 'Amazonas',
            borderColor: '#e8c390',
            fill: false
        }, {
            data: [15,18,23,27,36,50,67],
            label: 'Ancash',
            borderColor: '#e8c390',
            fill: false
        }, {
            data: [0,0,0,0,0,0,12],
            label: 'Ucayali',
            borderColor: '#e8c390',
            fill: false
        }, {
            data: [6,6,6,6,6,7,9],
            label: 'Huanuco',
            borderColor: '#e8c390',
            fill: false
        }]
    };

    // let selectedRegions = {
    //     labels: regionalTrends.labels,
    //     datasets: regionalTrends.datasets.filter(region => 
    //         (region.label == 'Ica') || 
    //         (region.label == 'Áncash') || 
    //         (region.label == 'Junín'))
    // }

    let selectedRegions = {
        labels: regionalTrends.labels,
        datasets: regionalTrends.datasets.filter(region => 
            (region.label == 'Arequipa') || 
            (region.label == 'La Libertad') || 
            (region.label == 'Piura'))
    }

    let origin_allowed = process.env.ORIGIN_ALLOWED || '*';

    res.set('Access-Control-Allow-Origin', origin_allowed);
    // res.send(regionalTrends);
    res.send(selectedRegions);
}
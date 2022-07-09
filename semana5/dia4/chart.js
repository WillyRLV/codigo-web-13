const contenedorBarChart = document.querySelector("#bar-chart").getContext("2d");

const barChart = new Chart (contenedorBarChart, {
    type:"bar",
    data:{
        labels:[
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueve",
            "Viernes",
            "Sabado",
            "Domingo",
        ],

        datasets: [
            {
            label:"Numero de usuario por día ",
            data: [20,40,10,100,50,75,200],
            borderWidth:3,
            borderColor:"#fff",
            backgroundColor:[ "#ab1","#ba1","#3ad","#24e","#56e","#e28","#a2e"]
        }]
    },

});


const contenededorDougnutChart = document.querySelector("#dougnat-chart").getContext("2d");

const dataForChart = {
    labels: [
        "Computadores", "Celulares", "Refrigeradoras","Parlantes"],
        datasets: [
            {
                label:"PRODUCTOS ELECTRONICOS",
                data: [100,200,520,267],
                borderColor:"#e3c",
            backgroundColor:[ "#ab1","#3ad","#24e","#56e","#a2e"]
            },
        ],

};

const config = {
    type:"doughnut",
    data:dataForChart,
};

const donutChart = new Chart(contenededorDougnutChart, config);


const containerLineChart = document.querySelector("#line-chart");
const configLineal = {
    type:"line",
    data: dataForChart,
};
const lineChart = new Chart(containerLineChart, configLineal);
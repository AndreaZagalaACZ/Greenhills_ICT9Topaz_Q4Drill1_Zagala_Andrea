// JavaScript Electricity Consumption Classifier
function classifyConsumption() {
    let consumption = document.getElementById('input').value.toLowerCase();

    switch (true) {
        case (consumption >= 0 && consumption <= 100):
            document.getElementById('display1').innerHTML = 'Lifeline Consumer : Discounted electricity rates';
            break;
        case (consumption > 100 && consumption < 201):
            document.getElementById('display1').innerHTML = 'Low Consumption : Normal residential rate';
            break;
        case (consumption >= 201 && consumption < 301):
            document.getElementById('display1').innerHTML = 'Average Consumption : Typical electricity usage';
            break;
        case (consumption >= 300 && consumption < 501):
            document.getElementById('display1').innerHTML = 'High Consumption : Higher electricity usage';
            break;
        case (consumption >= 500):
            document.getElementById('display1').innerHTML = 'Very High Consumption : Heavy electricity users';
            break;
        default:
            document.getElementById('display1').innerHTML = 'Invalid input. Try again.';
            break;
    }
}

// Footer Year
const year = document.getElementById("year");

year.innerText = new Date().getFullYear();


// Did You Know
const fact = document.getElementById("fact");
const factButton = document.getElementById("fact-button");

const facts = [
    "لكل منطقة في السعودية موروثها الخاص.",
    "السدو من الحرف التقليدية المرتبطة بالبادية السعودية.",
    "جدة التاريخية تُعرف بمبانيها القديمة ورواشينها المميزة.",
    "الخوص حرفة تعتمد على سعف النخيل لصناعة منتجات متعددة.",
    "الألوان والنقوش الشعبية تختلف من منطقة إلى أخرى."
];

let currentFact = 0;

factButton.addEventListener("click", function () {
    currentFact++;

    if (currentFact >= facts.length) {
        currentFact = 0;
    }

    fact.innerText = facts[currentFact];
});
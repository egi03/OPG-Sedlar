const healthFacts = [
    "🍉Lubenica je bogata antioksidansima poput likopena, koji pomaže u smanjenju upala i podržava zdravlje srca.",
    "🍈Dinje su niskokalorične, bogate vlaknima i hidratantne, što ih čini idealnima za zdravu hidrataciju.",
    "🌶️Paprika sadrži visoke razine vitamina C, posebno crvena paprika, što jača imunološki sustav i potiče zdravlje kože.",
    "🌾Žito je izvor složenih ugljikohidrata i vlakana, koji pružaju energiju i podržavaju zdravu probavu.",
    "🌱Soja je bogata esencijalnim aminokiselinama, proteinima i izoflavonima, koji mogu smanjiti rizik od srčanih bolesti.",
    "🌽Kukuruz je dobar izvor vlakana, vitamina B i antioksidansa, a sadrži lutein koji podržava zdravlje očiju.",
    "🥔Krumpir je bogat kalijem, koji je važan za regulaciju krvnog tlaka, i sadrži vitamin C koji jača imunitet.",
    "🥒Tikvice su bogate vitaminima A i C, te magnezijem i vlaknima, što pomaže u održavanju zdravlja srca i probave."
];

const randomFact = () => {
    const randomIndex = Math.floor(Math.random() * healthFacts.length);
    return healthFacts[randomIndex];
};

document.addEventListener("DOMContentLoaded", () => {
    const factElement = document.getElementById("fact");
    factElement.textContent = randomFact();
})
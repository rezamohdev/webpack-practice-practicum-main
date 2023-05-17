// we can now import images
// webpack will add the correct paths to the variables
const jordanImage = new URL("./images/jordan.jpg", import.meta.url);
const jamesImage = new URL("./images/james.jpg", import.meta.url);
const bryantImage = new URL("./images/bryant.jpg", import.meta.url);

const whoIsTheGoat = [
    // replace original paths with variables
    { name: "Michael Jordan", image: jordanImage },
    { name: "Lebron James", link: jamesImage },
    { name: "Kobe Bryant", link: bryantImage },
];
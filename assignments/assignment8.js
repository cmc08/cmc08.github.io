const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array)
{
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk by the boardwalk to cool off. Bob watched as they strolled. When :insertx: got to :inserty:, they paused and started sweating, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Dr. Doofenshmirtz", "Perry the Platypus", "Ferb"];
let insertY = ["the summit of the Matterhorn", "the Forbidden City", "Phineas and Ferb's house"];
let insertZ = ["created a heat-destroyer-inator", "metamorphisized into a pigeon and flew away into the sunset, never to be seen again", "got elected president of the United States of America"];

randomize.addEventListener("click", result);

function result() 
{
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if(customName.value !== "")
    {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }

    if(document.getElementById("uk").checked)
    {
        const weight = `${Math.round(300 * 0.0714286)} stone`;
        const temperature =  `${Math.round((94 - 32) * 5.0/9.0)} centigrade`;
        newStory = newStory.replaceAll("300 pounds", weight);
        newStory = newStory.replaceAll("94 fahrenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = "visible";

}
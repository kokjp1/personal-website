import { ProjectMeta } from "@/components/content/ProjectLayout";
import cover from "./whackamole.png";
import { ProjectGallery } from "@/components/lightbox/ProjectGallery";
import homeImg from "./home.png";
import gameImg from "./game.png";
import gameActiveImg from "./gameactive.png";
import finishedImg from "./finished.png";
import { SingleCodeBlock } from "@/components/content/SingleCodeBlock";

export const meta: ProjectMeta = {
  slug: "whackamole",
  title: "Whack-A-Mole",
  year: 2024,
  context: "CMD",
  description: "Project to learn more about Javascript",
  roles: ["💻 DEV"],
  tags: ["HTML", "CSS", "JavaScript"],
  cover,
};

export default function Body() {
  const galleryImages = [
    { src: gameImg, alt: "Gameplay grid", caption: "Gameplay — grid with randomized spawns" },
    { src: gameActiveImg, alt: "Active mole highlight", caption: "Active state — visible mole + hit feedback" },
    { src: finishedImg, alt: "Game over screen", caption: "Finished round — score summary" },
  ];

  // Snippet 1 (JS): endGame
  const jsSnippetEndGame = `function endGame() {
  gameStarted = false;
  backgroundmusic.pause();
  backgroundmusic.currentTime = 0; //backgroundmusic opgezocht https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick
  clearInterval(berrySpawnInterval);
  clearInterval(timer);
  timerDisplay.textContent = "Game Over Beertje!";
  gameoveraudio.play();

  const berrys = document.querySelectorAll(".berry");
  berrys.forEach(function (berry) {
    berry.style.visibility = "hidden";
    berry.classList.remove("avatarBerry");
  });
  let result = document.getElementById("result");
  result.textContent = "Time is up!";
  result.style.visibility = "visible";
}`;

  // Snippet 2 (JS): spawnBerry
  const jsSnippetSpawnBerry = `function spawnBerry() {
  const berrys = document.querySelectorAll(".berry");
  berrys.forEach((berry) => {
    berry.style.visibility = "hidden";
    berry.classList.remove("avatarBerry");
    berry.classList.remove("peek");
  });

  berry = berrys[Math.floor(Math.random() * berrys.length)];

  if (Math.random() < 0.1) {
    berry.classList.add("avatarBerry");
  }
  berry.classList.add("peek");
  berry.style.visibility = "visible";
}`;

  // Snippet 3 (CSS)
  const cssSnippet = `.hole::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('images/laptop.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  z-index: 2;
  pointer-events: none;
}`;

  return (
    <>
      <h2 className="text-lg font-semibold">overview</h2>
      <p className="mt-3 text-sm leading-6">
        A browser‑based Whack‑A‑Mole game built with vanilla JavaScript, HTML, and CSS to practice DOM manipulation. Introductory course to Javascript. I chose to make a whack-a-mole game. The idea behind it is that you have some CSS classes with visibility styling for the game board and heads, and use Javascript to apply and remove those classes based on some rules. (like when you hit a head, or the timer runs out) 
      </p>

      <h2 className="mt-8 text-lg font-semibold">goal</h2>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
        <li>Semantic HTML, CSS & Javascript code</li>
        <li>Experimenting with Javascript DOM manipulation</li>
        <li>Understanding how the DOM structure/javascript fundamentally works</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">code snippets</h2>
      <div className="mt-3 space-y-6">
        <SingleCodeBlock language="javascript" filename="endGame.js" code={jsSnippetEndGame} />
        <p className="text-sm">The logic that should apply when the game ends, basically resetting the game state and hiding all berry's</p>
        <SingleCodeBlock language="javascript" filename="spawnBerry.js" code={jsSnippetSpawnBerry} />
        <p className="text-sm">The logic that should apply when a berry is spawned, including randomization. This function primarily serves to apply the appropriate CSS classes to the berry's.</p>
        <SingleCodeBlock language="css" filename="board.css" code={cssSnippet} />
        <p className="text-sm">CSS Class for the holes (reusable, applied to each), used to modify the game board.</p>
      </div>

      <h2 className="mt-8 text-lg font-semibold">result</h2>

      <div className="mt-6">
        <ProjectGallery
          splash={{ src: homeImg, alt: "Home screen", caption: "Home — start game and view score" }}
          images={galleryImages}
          gridClasses="grid-cols-2 md:grid-cols-3"
        />
      </div>
    </>
  );
}
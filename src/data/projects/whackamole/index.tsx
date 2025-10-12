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
        A classic Whack‑A‑Mole built to practice vanilla JavaScript: DOM updates, timing, state, and accessibility.
      </p>

      <h2 className="mt-8 text-lg font-semibold">what I built</h2>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-sm">
        <li>Game loop with randomized spawn timing and grid positions.</li>
        <li>Score, combo, and a session timer with pause/resume.</li>
        <li>Keyboard support and focus management for playable without a mouse.</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">code snippets</h2>
      <div className="mt-3 space-y-6">
        <SingleCodeBlock language="javascript" filename="endGame.js" code={jsSnippetEndGame} />
        <SingleCodeBlock language="javascript" filename="spawnBerry.js" code={jsSnippetSpawnBerry} />
        <SingleCodeBlock language="css" filename="board.css" code={cssSnippet} />
      </div>

      <h2 className="mt-8 text-lg font-semibold">result</h2>
      <p className="mt-3 text-sm leading-6">
        A clean, replayable mini‑game that cemented timing and event‑handling basics.
      </p>

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
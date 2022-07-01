import Page from "../components/Page/Page";

const ROGUE = "https://en.wikipedia.org/wiki/Rogue_(video_game)";

const Home = () => {
  return (
    <Page>
      <div className="flex flex-row mt-10 w-full">
        <div className="flex flex-col">
          <div className="text-sm text-Neon">In my spare time...</div>
          <a
            href="https://github.com/CorpseSaviour/rogue-js-v2"
            className="flex ml-4 mt-4 text-4xl underline text-Neon"
          >
            RogueJS
          </a>
          <div className="flex flex-row  w-2/3">
            <p className="  ml-4 mt-4 text-lg text-Silver">
              I'm working on a game project based on
              <a className="mx-2 underline text-Neon " href={ROGUE}>
                Rogue
              </a>
              , at the moment there's not much to be seen, but it's a fun little
              project to keep the mind active and learning. There are many
              challenges in developing this type of game, for instance, the map
              is a graph, therefore the enemy path finding must use some sort of
              graph
            </p>
          </div>

          <div className="flex flex-row-reverse items-center justify-around p-4">
            <img className="w-1/2" src="roguejs.png" alt="RogueJS" />
            <p>Not much to look at... yet...</p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;

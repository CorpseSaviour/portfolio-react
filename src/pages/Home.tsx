import Page from "../components/Page/Page";
import StackItem from "../components/Stack/StackItem";

const Home = () => {
  return (
    <Page>
      <div className="flex flex-row mt-10 w-full">
        <div className="flex flex-col w-2/3">
          <div className="text-sm text-Neon">Hi there, my name is...</div>
          <p className="flex ml-4 mt-4 text-6xl">
            <span className="text-Neon">J</span>oão
            <span className="ml-2 text-Neon">S</span>choen
          </p>
          <p className="flex ml-4 text-4xl underline text-Silver">
            JavaScript programmer
          </p>
          <p className="flex ml-4 mt-4 text-lg w-2/3 text-justify text-Silver">
            I've started learning Computer Science in 2012 using C, then Java,
            then went to JavaScript in 2020, since then I worked on various
            companies and projects using all sorts of stacks, component
            libraries, etc...
          </p>
          <p className="flex ml-4 mt-8 text-4xl underline text-Silver">Portfolio</p>
          <p className="flex ml-4 mt-4 text-lg w-2/3 text-justify text-Silver">
            This application is one of a few made using different frameworks and
            front-end libraries
          </p>
        </div>
        <div className="flex flex-col w-1/3">
          <p className="ml-4 mt-9 text-6xl">
            <span className="text-Neon">S</span>tack
          </p>
          <div className="grid grid-cols-4 pt-6 justify-between">
            <StackItem tech="JavaScript" />
            <StackItem tech="TypeScript" />
            <StackItem tech="Node" />
            <StackItem tech="React" />
            <StackItem tech="Redux" />
            <StackItem tech="Vue" />
            <StackItem tech="Axios" />
            <StackItem tech="MongoDB" />
            <StackItem tech="MySQL" />
            <StackItem tech="HTML5" />
            <StackItem tech="CSS3" />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;

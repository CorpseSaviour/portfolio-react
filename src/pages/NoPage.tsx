import Page from "../components/Page/Page";

const NoPage = () => {
  return (
    <Page>
      <div className="flex flex-col mt-10 w-full">
        <div className="text-sm text-Neon">Hmmm o_o? ...</div>
        <p className="flex ml-4 mt-4 text-Neon text-6xl">
          404 - PAGE NOT FOUND
        </p>
        <p className="flex ml-4 mt-4 text-Silver text-xl">
          I don't really know what you were looking for, but there is nothing
          here
        </p>
      </div>
    </Page>
  );
};

export default NoPage;

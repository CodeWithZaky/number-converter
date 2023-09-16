import Form from "../fragments/Form";

const PageLayout = ({ children, ...pageProps }) => {
  return (
    <section className="h-auto w-[70%] mx-auto rounded-md border border-retroOrange bg-retroBrown flex flex-col justify-center items-center transition-all">
      <h1 className="w-full py-3 mb-5 text-xl font-semibold text-center border-b rounded-t-md bg-retroBrown text-retroWhite border-retroOrange">
        {pageProps.title}
      </h1>
      <div className="w-full p-3">
        <Form
          handleSubmit={pageProps.handleSubmit}
          placeholder={pageProps.placeholder}
        />
        <div className="my-10 space-y-2">{children}</div>
      </div>
    </section>
  );
};

export default PageLayout;

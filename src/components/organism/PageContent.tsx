import React from "react";
import Form from "../molecules/Form";

const PageContent = ({ children, ...pageProps }) => {
  return (
    <section className="h-auto w-[70%] mx-auto rounded-sm border border-emerald-400 bg-emerald-900 flex flex-col justify-center items-center transition-all">
      <h1 className="w-full py-4 mb-5 font-semibold text-center bg-emerald-800 text-slate-300">
        {pageProps.title}
      </h1>
      <div className="w-full p-3">
        <Form
          handleSubmit={pageProps.handleSubmit}
          placeholder={pageProps.placeholder}
        />
        <div className="my-10 space-y-2 text-white">{children}</div>
      </div>
    </section>
  );
};

export default PageContent;

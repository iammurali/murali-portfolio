import GitHubCalendar from "react-github-calendar";

export const GithubCalendar = () => {
  return (
    <section
      data-aos="fade-up"
      className="text-gray-400 bg-black body-font mt-4"
    >
      <div className="text-sm text-center"> Github Calendar Heatmap</div>
      <h1 className="text-2xl text-indigo-400 text-center title-font mb-4">
        Contributions
      </h1>
      <div className="flex justify-center items-center container mx-auto px-5 py-10">
        <GitHubCalendar
          style={{ width: "100%" }}
          username="iammurali"
          showWeekdayLabels={true}
        />
      </div>
    </section>
  );
};

import GitHubCalendar from "react-github-calendar";

export const GithubCalendar = () => {
  return (
    <section data-aos="fade-up" className="text-gray-400 bg-black body-font">
        <div className="text-sm text-center"> Github Calendar Heatmap</div> 
        <h1 className="text-2xl text-indigo-400 text-center title-font">Contributions</h1>
      <div className="flex justify-center items-center container max-w-7xl mx-auto px-5 py-10">
        <GitHubCalendar style={{width: "100%"}} username="iammurali"  showWeekdayLabels={true}/>
      </div>
    </section>
  );
};

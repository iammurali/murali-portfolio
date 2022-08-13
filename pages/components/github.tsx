import GitHubCalendar from "react-github-calendar";

export const GithubCalendar = () => {
  return (
    <section className="text-gray-400 bg-black body-font">
        <div className="text-2xl text-center"> Github Heatmap</div> 
        
      <div className="flex justify-center items-center container max-w-7xl mx-auto px-5 py-10">
        <GitHubCalendar username="iammurali" showWeekdayLabels={true}/>
      </div>
    </section>
  );
};

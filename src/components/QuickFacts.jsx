import { useState, useEffect } from "react";
import axios from "axios";
import { quickFacts } from "../../constants";

const QuickFacts = () => {
  const [repositories, setRepositories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Junaidadams",
        );
        setRepositories(response.data.public_repos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="flex w-full">
      <div className="text-mainBlack dark:text-mainWhite flex flex-col px-4 md:px-8">
        <div>
          {quickFacts.map(({ key, value, name }) => (
            <div key={key} className="mb-2 flex flex-row">
              <div className="flex w-40 text-center">
                <h3 className="font-chillax font-semibold">{value}</h3>
                <p className="font-chillax my-auto text-sm">{name}</p>
              </div>
            </div>
          ))}

          <div className="mb-2 flex flex-row">
            <div className="flex w-40 text-center">
              <h3 className="font-chillax font-semibold">
                {loading ? "Loading..." : repositories + "+"}
              </h3>
              <p className="font-panchang my-auto text-xs tracking-tight">
                GitHub Repositories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;

import { useState } from 'react';
import axios from 'axios'
import { quickFacts } from '../constants';


const QuickFacts = () => {
const [repositorys, setRepositories] = useState(null);    

    const fetchReopos = async () => {  
        const response = await axios.get('https://api.github.com/users/Junaidadams');
        console.log(response.data); 
        setRepositories(response.data);
    }
  return (
    <section className="w-full py-10 bg-mainWhite dark:bg-[#0e0f0b]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 px-6">
        {quickFacts.map((fact) => (
          <div
            key={fact.key}
            className="flex flex-col items-center text-center bg-white dark:bg-[#1a1a1a] shadow-md rounded-2xl p-4 transition hover:scale-105 hover:shadow-lg"
          >
            <div className="mb-2">{fact.icon}</div>
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {fact.value}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {fact.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickFacts